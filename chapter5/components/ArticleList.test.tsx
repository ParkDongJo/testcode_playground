import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { ArticleList } from './ArticleList'
import { items } from '../fixture/articleItem'

describe('ArticleList 컴포넌트', () => {
  it('(방법1) items의 갯수 만큼 목록을 표시한다', () => {
    render(<ArticleList items={items} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(items.length)
  })

  it("(방법2) items의 갯수 만큼 목록에 표시한다.", () => {
    render(<ArticleList items={items} />)
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
    expect(within(list).getAllByRole('listitem').length).toBe(items.length)
  })

  it('목록을 표시한다', () => {
    render(<ArticleList items={items} />)
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })

})