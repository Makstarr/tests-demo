import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

it("Hello world rendering", () => {
  render(<Hello />);

  const myElement = screen.getByText(/Hello/);
  expect(myElement).toBeInTheDocument();
});
