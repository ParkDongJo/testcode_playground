/**
 * 문제: 할인 쿠폰 시스템 테스트 작성하기
 * 
 * 아래 쿠폰 시스템에 대한 테스트를 작성하세요.
 * 
 * 🎯 학습 목표:
 * 1. API 모킹 (vi.spyOn, mockResolvedValue, mockRejectedValue)
 * 2. Fake Timers (vi.useFakeTimers, vi.setSystemTime)
 * 3. Factory Pattern (테스트 데이터 생성)
 * 
 * 📝 작성해야 할 테스트:
 * 
 * 1. applyCoupon 함수 테스트
 *    - 성공 케이스: 유효한 쿠폰을 적용할 수 있는지
 *    - 실패 케이스: 쿠폰 코드가 빈 문자열일 때 에러를 던지는지
 * 
 * 2. isCouponExpired 함수 테스트 (Fake Timers 사용)
 *    - 만료 전: false 반환
 *    - 만료일 당일: false 반환
 *    - 만료 후: true 반환
 */

// 쿠폰 인터페이스
export interface Coupon {
  code: string;
  discount: number;
  expiryDate: string; // 'YYYY-MM-DD' 형식
}

// 답으로 작성해야함
export const fetchCoupon = async (couponCode: string) => {
  const response = await fetch(`https://api.example.com/coupons/${couponCode}`);
  const data = await response.json();
  return data;
};

// 쿠폰 적용 함수
export const applyCoupon = async (coupon: Coupon) => {
  // 쿠폰 코드가 비어있으면 에러
  if (coupon.code.trim() === '') {
    throw new Error('Coupon code cannot be empty');
  }

  // API 호출
  const response = await fetch('https://api.example.com/apply-coupon', {
    method: 'POST',
    body: JSON.stringify(coupon),
  });

  const data = await response.json();
  return data;
};

// 쿠폰 만료 여부 확인 함수
export const isCouponExpired = (coupon: Coupon): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const expiryDate = new Date(coupon.expiryDate);
  expiryDate.setHours(0, 0, 0, 0);

  return today > expiryDate;
};
