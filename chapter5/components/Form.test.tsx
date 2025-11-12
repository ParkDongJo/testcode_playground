import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form } from './Form'

describe('Form 컴포넌트', () => {
  it('제목 "계정 정보"를 표시한다', () => {
    render(<Form name="username" onSubmit={() => {}} />)

    // form 요소에 aria-labelledby 속성을 지정하고, 연결된 텍스트 요소에 id 를 지정해주면
    // 아래와 같이 접근가능한 이름으로 사용할 수 있다,
    const form = screen.getByRole('form', { name: '계정 정보' })
    expect(form).toBeInTheDocument()
  })
})