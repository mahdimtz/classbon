import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      document.documentElement.classList.add("dark");
      return <Story />;
    },
  ],
};
export default meta;
type Story = StoryObj<typeof Button>;
export const brandColors: Story = {
  render: () => (
    <>
      <Button>Default</Button>
      <Button variant="neutral">Neutral</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="ghost">Ghost</Button>

      <Button isLink={true}>Link</Button>
    </>
  ),
};

export const StateColors: Story = {
  render: () => (
    <>
      <Button variant="success">Success</Button>
      <Button variant="info">Info</Button>
      <Button variant="error">Error</Button>
      <Button variant="warning">Warning</Button>
    </>
  ),
};
export const OutlineButtons: Story = {
  render: () => (
    <>
      <Button>Default</Button>
      <Button isOutline variant="neutral">
        Neutral
      </Button>
      <Button isOutline variant="primary">
        Primary
      </Button>
      <Button isOutline variant="secondary">
        Secondary
      </Button>
      <Button isOutline variant="accent">
        Accent
      </Button>
      <Button isOutline variant="ghost">
        Ghost
      </Button>
    </>
  ),
};
export const OutlineStateButtons: Story = {
  render: () => (
    <>
      <Button isOutline variant="success">
        Success
      </Button>
      <Button isOutline variant="info">
        Info
      </Button>
      <Button isOutline variant="error">
        Error
      </Button>
      <Button isOutline variant="warning">
        Warning
      </Button>
    </>
  ),
};

export const ButtonSizes: Story = {
  render: () => (
    <>
      <Button variant="neutral" size="tiny">
        Tiny
      </Button>
      <Button variant="neutral" size="small">
        Small
      </Button>
      <Button variant="neutral" size="normal">
        Normal
      </Button>
      <Button variant="neutral" size="large">
        Large
      </Button>
    </>
  ),
};
export const WideButtons: Story = {
  render: () => (
    <>
      <Button variant="neutral" shape="wide">
        Wide Button
      </Button>
    </>
  ),
};
export const FullButtons: Story = {
  render: () => (
    <>
      <Button variant="neutral" shape="full">
        Wide Button
      </Button>
    </>
  ),
};

export const SqureButtons: Story = {
  render: () => (
    <>
      <Button variant="neutral" shape="square" size="tiny">
        +
      </Button>
      <Button variant="neutral" shape="square" size="small">
        +
      </Button>
      <Button variant="neutral" shape="square" size="normal">
        +
      </Button>
      <Button variant="neutral" shape="square" size="large">
        +
      </Button>
    </>
  ),
};

export const DisabledButtons: Story = {
  render: () => (
    <>
      <Button variant="neutral" disabled>
        Disabled Button
      </Button>
    </>
  ),
};

export const IconButtons: Story = {
  render: () => (
    <>
      <Button variant="neutral">+ submit</Button>
    </>
  ),
};
export const ButtonWithLoading: Story = {
  render: () => (
    <>
      <Button variant="neutral" isLoading={true} loadingText="Loading"></Button>
      <Button
        variant="neutral"
        isLoading={true}
        loadingText="Loading"
        loadingType="ring"
      ></Button>
      <Button variant="primary" isLoading={true} loadingText="Loading"></Button>
      <Button
        variant="accent"
        isOutline
        loadingType="ring"
        isLoading={true}
        loadingText="Loading"
      ></Button>
    </>
  ),
};
