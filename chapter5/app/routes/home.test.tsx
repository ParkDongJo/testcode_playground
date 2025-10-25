import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react';
import Home from './home';

describe('Home 컴포넌트', () => {
  it('기본 텍스트로 렌더링된다', () => {
    render(<Home />)
    expect(screen.getByText('Home')).toBeInTheDocument()
  })
})