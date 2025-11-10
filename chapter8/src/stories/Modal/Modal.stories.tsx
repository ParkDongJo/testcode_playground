import { ModalProvider, type ModalState } from "./ModalProvider";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalComponent } from "./ModalComponent";
import { useModalAction } from "./ModalContext";

function createDecorator(defaultState?: Partial<ModalState>) {
  return function Decorator() {
    return (
      <ModalProvider defaultState={{ ...defaultState, isShown: true }}>
        {null}
      </ModalProvider>
    );
  };
}

export default {
  component: ModalComponent,
} satisfies Meta<typeof ModalComponent>;

type Story = StoryObj<typeof ModalComponent>;

export const Succeed: Story = {
  decorators: [createDecorator({ message: "성공했습니다", style: "succeed" })],
};

export const Failed: Story = {
  decorators: [createDecorator({ message: "실패했습니다", style: "failed" })],
};

export const Busy: Story = {
  decorators: [createDecorator({ message: "통신 중입니다", style: "busy" })],
};