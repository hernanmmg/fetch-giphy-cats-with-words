import React from "react";
import { render } from "react-testing-library";
import App from "./App";

test("App works", () => {
  const { container } = render(<App />);
  const result = container.querySelector("p");

  expect(result.textContent).toBe("No hay información para mostrar.");
});
