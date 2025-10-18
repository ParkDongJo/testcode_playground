import { describe, it, expect } from 'vitest'

const add = (a: number, b: number) => {
  const sum = a + b
  if (sum > 100) {
    return 100;
  }
  return sum
}

describe('3_5_1', () => {
  it('should be true', () => {
    expect(add(60, 70)).toBe(100)
  })
})