import { render } from "@testing-library/react";
import { expect, describe, it } from "vitest";
import { getPosts } from "@/api/getPosts";
import Posts from "./page";

describe('Posts', () => {
  it('should render the posts', () => {
    render(<Posts />);
    expect(screen.getByText('Posts')).toBeInTheDocument();
  });
});