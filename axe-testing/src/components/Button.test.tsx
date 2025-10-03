import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button 컴포넌트', () => {
  it('기본 텍스트로 렌더링된다', () => {
    render(<Button />)
    expect(screen.getByRole('button', { name: 'Button' })).toBeInTheDocument()
  })

  it('커스텀 children으로 렌더링된다', () => {
    render(<Button>클릭하세요</Button>)
    expect(screen.getByRole('button', { name: '클릭하세요' })).toBeInTheDocument()
  })

  it('클릭 시 onClick이 호출된다', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()
    
    render(<Button onClick={handleClick}>클릭하세요</Button>)
    
    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('disabled prop이 true일 때 비활성화된다', () => {
    render(<Button disabled>비활성화된 버튼</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('올바른 type 속성을 가진다', () => {
    render(<Button type="submit">제출</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
  })

  it('커스텀 className이 적용된다', () => {
    render(<Button className="custom-class">버튼</Button>)
    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })

  it('비활성화 상태에서는 onClick이 호출되지 않는다', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()
    
    render(<Button onClick={handleClick} disabled>비활성화</Button>)
    
    await user.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })
})
