import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Tab from './Tab'

describe('Tab 컴포넌트', () => {
  describe('초기 렌더링', () => {
    it('제목 "뉴스"를 표시한다', () => {
    })

    it('3개의 탭(경제, 과학, 스포츠)을 표시한다', () => {
    })

    it('첫 번째 탭이 기본으로 선택되어 있다', () => {
    })
  })

  describe('탭 클릭 인터랙션', () => {
    it('두 번째 탭 클릭 시 해당 탭이 선택되고 Tabpannel의  콘텐츠가 변경된다', async () => {
    })

    it('세 번째 탭 클릭 시 해당 탭이 선택되고 Tabpannel의 콘텐츠가 변경된다', async () => {
    })
  })

  describe('키보드 네비게이션', () => {
    // await user.keyboard() 를 활용하세요.
    it('ArrowRight 키로 다음 탭으로 포커스 이동', async () => {
    })

    it('ArrowRight 키로 마지막 탭에서 첫 번째 탭으로 순환', async () => {
    })

    it('ArrowLeft 키로 이전 탭으로 포커스 이동', async () => {
    })

    it('ArrowLeft 키로 첫 번째 탭에서 마지막 탭으로 순환', async () => {
    })

    it('Home 키로 첫 번째 탭으로 포커스 이동', async () => {
    })

    it('End 키로 마지막 탭으로 포커스 이동', async () => {
    })
  })
})
