import { describe, it, expect } from 'vitest'

const wait = (duration: number) => {
  return new Promise(resolve => setTimeout(() => resolve(duration), duration))
}

const timeout = (duration: number) => {
  return new Promise((_, reject) => setTimeout(() => reject(duration), duration))
}

describe('3_7', () => {
  it('wait', () => {
    expect(wait(1000)).resolves.toBe(1000)
  })

  it('timeout', () => {
    expect(timeout(1000)).rejects.toBe(1000)
  })

  it('assertions', async() => {
    try {
      await wait(1000)
    } catch (error) {
      expect(error).toBe(1000)
    } finally {
      expect.assertions(1) // expect 가 1번이라도 실행되어야 함을 명시
    }
  })
})