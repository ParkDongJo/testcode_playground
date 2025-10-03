import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App 컴포넌트', () => {
  it('크래시 없이 렌더링된다', () => {
    render(<App />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('Button 컴포넌트를 렌더링한다', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Button' })).toBeInTheDocument()
  })
})
