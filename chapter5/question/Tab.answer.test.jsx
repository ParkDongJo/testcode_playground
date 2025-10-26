import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Tab from './Tab'

describe('Tab 컴포넌트', () => {
  describe('초기 렌더링', () => {
    it('제목 "뉴스"를 표시한다', () => {
      render(<Tab />)
      expect(screen.getByText('뉴스')).toBeInTheDocument()
    })

    it('3개의 탭(경제, 과학, 스포츠)을 표시한다', () => {
      render(<Tab />)
      const tabs = screen.getAllByRole('tab')
      
      expect(tabs).toHaveLength(3)
      expect(tabs[0]).toHaveTextContent('경제')
      expect(tabs[1]).toHaveTextContent('과학')
      expect(tabs[2]).toHaveTextContent('스포츠')
    })

    it('첫 번째 탭이 기본으로 선택되어 있다', () => {
      render(<Tab />)
      const economyTab = screen.getByRole('tab', { name: '경제' })
      
      expect(economyTab).toHaveAttribute('aria-selected', 'true')
      expect(economyTab).toHaveAttribute('tabIndex', '0')
    })
  })

  describe('탭 클릭 인터랙션', () => {
    it('두 번째 탭 클릭 시 해당 탭이 선택되고 콘텐츠가 변경된다', async () => {
      const user = userEvent.setup()
      render(<Tab />)
      
      const scienceTab = screen.getByRole('tab', { name: '과학' })
      await user.click(scienceTab)
      
      expect(scienceTab).toHaveAttribute('aria-selected', 'true')
      expect(scienceTab).toHaveAttribute('tabIndex', '0')
      
      const tabpanel = screen.getByRole('tabpanel')
      expect(tabpanel).toHaveTextContent('과학 콘텐츠')
      expect(tabpanel).toHaveAttribute('id', 'tabpanel-1-id')
      expect(tabpanel).toHaveAttribute('aria-labelledby', 'tab-1-id')
    })

    it('세 번째 탭 클릭 시 해당 탭이 선택되고 콘텐츠가 변경된다', async () => {
      const user = userEvent.setup()
      render(<Tab />)
      
      const sportsTab = screen.getByRole('tab', { name: '스포츠' })
      await user.click(sportsTab)
      
      expect(sportsTab).toHaveAttribute('aria-selected', 'true')
      expect(sportsTab).toHaveAttribute('tabIndex', '0')
      
      const tabpanel = screen.getByRole('tabpanel')
      expect(tabpanel).toHaveTextContent('스포츠 콘텐츠')
    })
  })

  describe('키보드 네비게이션', () => {
    it('ArrowRight 키로 다음 탭으로 포커스 이동', async () => {
      const user = userEvent.setup()
      render(<Tab />)
      
      const economyTab = screen.getByRole('tab', { name: '경제' })
      const scienceTab = screen.getByRole('tab', { name: '과학' })
      
      // 첫 번째 탭에 포커스
      economyTab.focus()
      expect(economyTab).toHaveFocus()
      
      // ArrowRight 키 입력
      await user.keyboard('{ArrowRight}')
      
      // 두 번째 탭으로 포커스 이동
      expect(scienceTab).toHaveFocus()
    })

    it('ArrowRight 키로 마지막 탭에서 첫 번째 탭으로 순환', async () => {
      const user = userEvent.setup()
      render(<Tab />)
      
      const economyTab = screen.getByRole('tab', { name: '경제' })
      const sportsTab = screen.getByRole('tab', { name: '스포츠' })
      
      // 첫 번째 탭에 포커스
      economyTab.focus()
      expect(economyTab).toHaveFocus()
      
      // ArrowRight 2번 눌러서 마지막 탭(스포츠)으로 이동
      await user.keyboard('{ArrowRight}')
      await user.keyboard('{ArrowRight}')
      expect(sportsTab).toHaveFocus()
      
      // ArrowRight 키 한 번 더 입력
      await user.keyboard('{ArrowRight}')
      
      // 첫 번째 탭으로 포커스 이동 (순환)
      expect(economyTab).toHaveFocus()
    })

    it('ArrowLeft 키로 이전 탭으로 포커스 이동', async () => {
      const user = userEvent.setup()
      render(<Tab />)
      
      const economyTab = screen.getByRole('tab', { name: '경제' })
      const scienceTab = screen.getByRole('tab', { name: '과학' })
      
      // 첫 번째 탭에 포커스
      economyTab.focus()
      
      // ArrowRight로 두 번째 탭으로 이동
      await user.keyboard('{ArrowRight}')
      expect(scienceTab).toHaveFocus()
      
      // ArrowLeft 키 입력
      await user.keyboard('{ArrowLeft}')
      
      // 첫 번째 탭으로 포커스 이동
      expect(economyTab).toHaveFocus()
    })

    it('ArrowLeft 키로 첫 번째 탭에서 마지막 탭으로 순환', async () => {
      const user = userEvent.setup()
      render(<Tab />)
      
      const economyTab = screen.getByRole('tab', { name: '경제' })
      const sportsTab = screen.getByRole('tab', { name: '스포츠' })
      
      // 첫 번째 탭에 포커스
      economyTab.focus()
      expect(economyTab).toHaveFocus()
      
      // ArrowLeft 키 입력
      await user.keyboard('{ArrowLeft}')
      
      // 마지막 탭으로 포커스 이동 (순환)
      expect(sportsTab).toHaveFocus()
    })

    it('Home 키로 첫 번째 탭으로 포커스 이동', async () => {
      const user = userEvent.setup()
      render(<Tab />)
      
      const economyTab = screen.getByRole('tab', { name: '경제' })
      const sportsTab = screen.getByRole('tab', { name: '스포츠' })
      
      // 첫 번째 탭에 포커스
      economyTab.focus()
      
      // ArrowRight 2번 눌러서 마지막 탭으로 이동
      await user.keyboard('{ArrowRight}')
      await user.keyboard('{ArrowRight}')
      expect(sportsTab).toHaveFocus()
      
      // Home 키 입력
      await user.keyboard('{Home}')
      
      // 첫 번째 탭으로 포커스 이동
      expect(economyTab).toHaveFocus()
    })

    it('End 키로 마지막 탭으로 포커스 이동', async () => {
      const user = userEvent.setup()
      render(<Tab />)
      
      const economyTab = screen.getByRole('tab', { name: '경제' })
      const sportsTab = screen.getByRole('tab', { name: '스포츠' })
      
      // 첫 번째 탭에 포커스
      economyTab.focus()
      expect(economyTab).toHaveFocus()
      
      // End 키 입력
      await user.keyboard('{End}')
      
      // 마지막 탭으로 포커스 이동
      expect(sportsTab).toHaveFocus()
    })
  })

  describe('접근성 속성', () => {
    it('tablist에 올바른 role과 aria 속성이 설정되어 있다', () => {
      render(<Tab />)
      const tablist = screen.getByRole('tablist')
      
      expect(tablist).toHaveAttribute('aria-labelledby', 'tablist-title-id')
      expect(tablist).toHaveAttribute('aria-orientation', 'horizontal')
    })

  })
})

