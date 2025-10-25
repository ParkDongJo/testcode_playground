import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ArticleList } from './ArticleList'
import { items } from '../fixture/articleItem'

describe('ArticleList 컴포넌트', () => {
  it('items의 갯수 만큼 목록을 표시한다', () => {
    render(<ArticleList items={items} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(items.length)
  })
})