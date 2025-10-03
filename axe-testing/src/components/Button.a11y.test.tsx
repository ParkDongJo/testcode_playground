import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { axe } from 'vitest-axe'
import { Button } from './Button'

describe('Button 접근성 테스트', () => {
  it('접근성 위반이 없어야 한다', async () => {
    const { container } = render(<Button>접근 가능한 버튼</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('비활성화 상태에서도 접근성 위반이 없어야 한다', async () => {
    const { container } = render(<Button disabled>비활성화된 버튼</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('커스텀 props와 함께 접근성 위반이 없어야 한다', async () => {
    const { container } = render(
      <Button type="submit" className="custom-class">
        제출 버튼
      </Button>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
