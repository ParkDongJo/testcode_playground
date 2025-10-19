import { describe, it, expect } from 'vitest';
/**
 * 문제: 비동기 사용자 정보 조회 및 객체 검증
 * 
 * 다음 함수의 동작을 테스트하는 코드를 작성하세요.
 * 
 * 요구사항:
 * 1. fetchUserProfile(1)이 올바른 사용자 객체를 반환하는지 검증 (id, name, address.city 포함)
 * 2. fetchUserProfile(0)을 호출하면 에러가 발생하는지 검증
 * 
 */

export interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
    country: string;
  };
}

// 사용자 정보를 비동기로 가져오는 함수
export const fetchUserProfile = async (userId: number): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId <= 0) {
        reject(new Error('Invalid userId: userId must be greater than 0'));
      }
      
      // 사용자 정보 데이터
      const users: Record<number, User> = {
        1: {
          id: 1,
          name: 'Alice',
          email: 'alice@example.com',
          address: {
            city: 'Seoul',
            country: 'Korea',
          },
        },
        2: {
          id: 2,
          name: 'Bob',
          email: 'bob@example.com',
          address: {
            city: 'Tokyo',
            country: 'Japan',
          },
        },
      };
      
      const user = users[userId];
      if (user) {
        resolve(user);
      } else {
        reject(new Error(`User not found: userId ${userId}`));
      }
    }, 100);
  });
};

// 아래 테스트 코드를 완성해주세요
describe('비동기 사용자 정보 조회 및 객체 검증', () => {
  it('fetchUserProfile(1) 을 호출하면 Alice의 정보를 반환한다.', () => {

  });

  it('fetchUserProfile(0)을 호출하면 에러가 발생해야 함', () => {
  });
});