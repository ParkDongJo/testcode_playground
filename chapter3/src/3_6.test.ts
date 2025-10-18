import { describe, it, expect } from 'vitest'

describe('용도별 검증', () => {
  it('수치 검증', () => {
    expect(100).toBe(100)
    expect(100).not.toBeGreaterThan(200)
    expect(100).not.toBeLessThan(0)
  })

  it('문자열 검증', () => {
    const str = 'Hello, world!'
    // 문자열 검증
    expect(str).toBe('Hello, world!')
    expect(str).toContain('world')
    expect(str).toMatch(/world/)
    expect(str).toHaveLength(13)

    // 객체 내부 문자열 검증
    const obj = { name: 'John', message: str }
    expect(obj).toEqual({ 
      name: 'John', 
      message: expect.stringContaining('world') 
    })
    expect(obj).toEqual({ 
      name: 'John', 
      message: expect.stringMatching(/world/) 
    })
  })

  it('객체 검증', () => {
    // 객체 검증
    const obj = { name: 'John', age: 30 }
    expect(obj).toMatchObject({ name: 'John', age: 30 });
    expect(obj).not.toMatchObject({ name: 'Jane' });
    expect(obj).not.toMatchObject({ age: 31 });

    // 객체 내부 속성
    expect(obj).toHaveProperty('name', 'John')
    expect(obj).toHaveProperty('age', 30)

    // 객체 안 객체 검증
    const nestedObj = { name: 'John', address: { city: 'Seoul', country: 'Korea' } }
    expect(nestedObj).toEqual({ 
      name: 'John', 
      address: expect.objectContaining({ city: 'Seoul' }) 
    })
  })
})