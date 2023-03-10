import { render, screen } from "@testing-library/react";
import HomePage from "@/pages/index";

it("Welcome message를 보여준다.", () => {
  render(<HomePage />);
  const element = screen.getByRole("heading", {
    name: "Welcome to Next.js!",
  });
  expect(element).toBeTruthy();
  // expect(element).toBeVisible();
});
