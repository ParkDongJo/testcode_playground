import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";
import * as stories from "./Modal.stories";
import { test, expect } from "vitest";

const { Succeed, Failed, Busy } = composeStories(stories);

test("Succeed 의 alert 텍스트 확인", () => {
  render(<Succeed />);
  expect(screen.getByRole("alert")).toContain("성공했습니다");
});

test("Failed 의 alert 텍스트 확인", () => {
  render(<Failed />);
  expect(screen.getByRole("alert")).toContain("실패했습니다");
});

test("Busy 의 alert 텍스트 확인", () => {
  render(<Busy />);
  expect(screen.getByRole("alert")).toContain("통신 중입니다");
});
