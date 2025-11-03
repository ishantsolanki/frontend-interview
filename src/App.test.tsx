import { render, screen } from "@testing-library/react";
import App from "./App";

test('renders "Application Portal" title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Application portal/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders "Load more" button', () => {
  render(<App />);
  const loadMoreButton = screen.getByRole("button", { name: /loading\.\.\./i });
  expect(loadMoreButton).toBeInTheDocument();
});
