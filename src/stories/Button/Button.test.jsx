import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { Primary, Red } from "./Button.stories";

const renderStory = (args) => {
    const Template = (args) => <Button {...args} />;
    return render(<Template {...args} />);
};

test("should render Button", () => {
    const label = "Click Me!";
    render(<Button label={label} />);
    const btnElm = screen.getByRole("button");
    expect(btnElm).toBeInTheDocument();
    expect(btnElm).toHaveTextContent("Click");
});

test("should render Primary Button", () => {
    renderStory(Primary.args);
    const btnElm = screen.getByRole("button");
    expect(btnElm).toHaveClass("storybook-button--primary");
});

test("should render Red Button", () => {
    renderStory(Red.args);
    const btnElm = screen.getByRole("button");
    expect(btnElm).toHaveStyle("background-color: red");
});
