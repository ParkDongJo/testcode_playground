import { describe, it, vi, expect, beforeEach, afterEach } from 'vitest';
import * as CouponModule from './question';
import { fetchCoupon, applyCoupon, isCouponExpired, type Coupon } from './question';



// 🏭 Factory 함수: 테스트용 쿠폰 데이터를 쉽게 만들기
const couponFactory = (overrides: Partial<Coupon> = {}): Coupon => {
  return {
    code: 'SUMMER2025',
    discount: 20,
    expiryDate: '2025-12-31',
    ...overrides, // 필요한 값만 덮어쓰기
  };
};

describe('할인 쿠폰 시스템', () => {
  // 1️⃣ API 모킹 테스트
  describe('fetchCoupon - API 호출 모킹', () => {
    it('성공: 쿠폰 정보를 가져온다', async () => {
      // 가짜 쿠폰 데이터 준비
      const mockCoupon = couponFactory();

      // fetchCoupon 함수를 모킹하여 가짜 데이터 반환
      vi.spyOn(CouponModule, 'fetchCoupon').mockResolvedValue(mockCoupon);

      // 함수 실행
      const result = await fetchCoupon('SUMMER2025');

      // 검증
      expect(result).toEqual(mockCoupon);
      expect(result.code).toBe('SUMMER2025');
      expect(result.discount).toBe(20);
    });

    it('실패: API 에러가 발생하면 에러를 던진다', async () => {
      // 에러 객체 준비
      const error = new Error('Network error');

      // fetchCoupon 함수를 모킹하여 에러 던지기
      vi.spyOn(CouponModule, 'fetchCoupon').mockRejectedValue(error);

      // 함수 실행 및 검증
      await expect(fetchCoupon('INVALID')).rejects.toThrow('Network error');
    });
  });

  // 2️⃣ 유효성 검사 테스트
  describe('applyCoupon - 쿠폰 적용', () => {
    afterEach(() => {
      vi.restoreAllMocks(); // 각 테스트 후 모킹 초기화
    });

    it('성공: 유효한 쿠폰을 적용한다', async () => {
      const coupon = couponFactory();
      const mockResponse = { success: true, message: 'Coupon applied' };

      // applyCoupon을 모킹
      vi.spyOn(CouponModule, 'applyCoupon').mockResolvedValue(mockResponse);

      const result = await applyCoupon(coupon);

      expect(result).toEqual(mockResponse);
      expect(result.success).toBe(true);
    });

    it('실패: 쿠폰 코드가 빈 문자열이면 에러를 던진다', async () => {
      const coupon = couponFactory({ code: '' });

      await expect(applyCoupon(coupon)).rejects.toThrow('Coupon code cannot be empty');
    });

    it('실패: 쿠폰 코드가 공백만 있으면 에러를 던진다', async () => {
      const coupon = couponFactory({ code: '   ' });

      await expect(applyCoupon(coupon)).rejects.toThrow('Coupon code cannot be empty');
    });
  });

  // 3️⃣ Fake Timers 테스트
  describe('isCouponExpired - 쿠폰 만료 여부 확인', () => {
    beforeEach(() => {
      vi.useFakeTimers(); // 가짜 시간 사용 시작
    });

    afterEach(() => {
      vi.useRealTimers(); // 실제 시간으로 복원
    });

    it('만료 전: false를 반환한다', () => {
      // 현재 시간을 2025년 10월 18일로 설정
      vi.setSystemTime(new Date('2025-10-18'));

      // 만료일이 12월 31일인 쿠폰
      const coupon = couponFactory({ expiryDate: '2025-12-31' });

      expect(isCouponExpired(coupon)).toBe(false);
    });

    it('만료일 당일: false를 반환한다 (당일까지 사용 가능)', () => {
      // 현재 시간을 만료일과 동일하게 설정
      vi.setSystemTime(new Date('2025-12-31'));

      const coupon = couponFactory({ expiryDate: '2025-12-31' });

      expect(isCouponExpired(coupon)).toBe(false);
    });

    it('만료 후: true를 반환한다', () => {
      // 현재 시간을 만료일 다음날로 설정
      vi.setSystemTime(new Date('2026-01-01'));

      const coupon = couponFactory({ expiryDate: '2025-12-31' });

      expect(isCouponExpired(coupon)).toBe(true);
    });

    it('많이 지난 경우: true를 반환한다', () => {
      // 현재 시간을 만료일로부터 1년 후로 설정
      vi.setSystemTime(new Date('2026-12-31'));

      const coupon = couponFactory({ expiryDate: '2025-12-31' });

      expect(isCouponExpired(coupon)).toBe(true);
    });
  });
});
