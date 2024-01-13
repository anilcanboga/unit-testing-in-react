import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextDisplay from "./TextDisplay";

describe("TextDisplay component", () => {
  test("renders Hello World as a test", () => {
    // Arrange
    render(<TextDisplay />);

    // Act
    // ...

    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders How are you? as a test", () => {
    // Arrange
    render(<TextDisplay />);

    // Act
    // ...

    // Assert
    const outputElement = screen.getByText("How are you?");
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if the button was clicked", async () => {
    // Arrange
    render(<TextDisplay />);

    // Act
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
});
