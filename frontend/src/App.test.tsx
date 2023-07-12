import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders inshur github link", () => {
  render(<App />);
  const linkElement = screen.getByText(/github repo/i);
  expect(linkElement).toBeInTheDocument();
});
