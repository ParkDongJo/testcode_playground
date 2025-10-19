import { describe, it, expect } from 'vitest';
import { fetchUserProfile } from './question.test';

describe('비동기 사용자 정보 조회 및 객체 검증', () => {
  it('fetchUserProfile(1) 을 호출하면 Alice의 정보를 반환한다.', () => {
    expect(fetchUserProfile(1)).resolves.toMatchObject({
      id: 1,
      name: 'Alice',
      address: expect.objectContaining({
        city: 'Seoul',
      }),
    });
  });

  it('fetchUserProfile(0)을 호출하면 에러가 발생해야 함', () => {
    expect(fetchUserProfile(0)).rejects.toThrow('Invalid userId');
  });
});

