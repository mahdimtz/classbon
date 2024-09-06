import { Meta, StoryObj } from "@storybook/react";
import { Loading } from "./loading";
const meta: Meta<typeof Loading> = {
  component: Loading,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      document.documentElement.classList.add("dark");
      return <Story />;
    },
  ],
};
export default meta;
type Story = StoryObj<typeof Loading>;

export const LoadingSpinner: Story = {
  render: () => (
    <>
      <Loading size="tiny" />
      <Loading size="small" />
      <Loading size="normal" />
      <Loading size="large" />
    </>
  ),
};

export const LoadingSpinnerWithColors: Story = {
  render: () => (
    <>
      <Loading size="normal" variant="neutral" />
      <Loading size="normal" variant="primary" />
      <Loading size="normal" variant="secondary" />
      <Loading size="normal" variant="accent" />
      <Loading size="normal" variant="success" />
      <Loading size="normal" variant="info" />
      <Loading size="normal" variant="warning" />
      <Loading size="normal" variant="error" />
    </>
  ),
};
export const LoadingRing: Story = {
  render: () => (
    <>
      <Loading size="tiny" type="ring" />
      <Loading size="small" type="ring" />
      <Loading size="normal" type="ring" />
      <Loading size="large" type="ring" />
    </>
  ),
};
export const LoadingRingWithColors: Story = {
  render: () => (
    <>
      <Loading size="normal" variant="neutral" type="ring" />
      <Loading size="normal" variant="primary" type="ring" />
      <Loading size="normal" variant="secondary" type="ring" />
      <Loading size="normal" variant="accent" type="ring" />
      <Loading size="normal" variant="success" type="ring" />
      <Loading size="normal" variant="info" type="ring" />
      <Loading size="normal" variant="warning" type="ring" />
      <Loading size="normal" variant="error" type="ring" />
    </>
  ),
};
