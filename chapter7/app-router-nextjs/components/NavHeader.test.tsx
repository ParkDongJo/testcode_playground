import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import NavHeader from './NavHeader';
import mockRouter from "next-router-mock";

vi.mock("next/navigation", () => require("next-router-mock/navigation"));

const user = userEvent.setup();

describe('NavHeader', () => {
  it('렌더링된 페이지에 Blog, Setting 링크가 있어야 한다', () => {
    render(<NavHeader />);
    expect(screen.getByRole('button', { name: 'Move to Posts' })).toBeInTheDocument();
  });

  it('Blog 링크를 클릭하면 /posts 페이지로 이동해야 한다', async () => {
    mockRouter.setCurrentUrl('/');
    render(<NavHeader />);
    await user.click(screen.getByRole('button', { name: 'Move to Posts' }));
    expect(mockRouter).toMatchObject({ pathname: '/posts' });
  });

  it('현재 페이지가 /blog 이면 Blog 버튼에 aria-current="page" 속성이 있어야 한다', () => {
    mockRouter.setCurrentUrl('/posts');
    render(<NavHeader />);
    expect(screen.getByRole('button', { name: 'Move to Posts' })).toHaveAttribute('aria-current', 'page');
  });
});