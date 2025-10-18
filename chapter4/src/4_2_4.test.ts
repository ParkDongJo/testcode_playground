import { vi, describe, it, expect } from 'vitest'
import { great, sayGoodBye } from './great'

vi.mock('./great', () => ({
  ...vi.importActual('./great'),
  sayGoodBye: (name: string) => `Goodbye, ${name}!`,
}))

describe('모듈 일부를 스텁(stub)으로 대체', () => {
  it('should say hello', () => {
    expect(great('John')).toBe('Hello, John!')
  })

  it('should say goodbye', () => {
    expect(sayGoodBye('John')).toBe('Goodbye, John!')
  })
})