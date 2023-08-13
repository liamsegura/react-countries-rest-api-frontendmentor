import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import axios from "axios";

// Mock axios module
jest.mock("axios");

test("renders data fetched from API", async () => {
  // Set up the mock response
  (axios.get as jest.Mock).mockResolvedValue({
    data: [
      {
        name: { common: "Country 1" },
        flags: { svg: "flag-url-1" },
        population: 1234567890,
        region: "Europe",
        capital: ["City 1", "City 2"],
      },
      {
        name: { common: "Country 2" },
        flags: { svg: "flag-url-2" },
        population: 123456789,
        region: "Europe",
        capital: ["City 3", "City 4"],
      },
      // ... more data ...
    ],
  });

  render(<App />);

  // Wait for the mocked API call to complete
  const country1 = await screen.findByText(/Country 1/i);
  const country2 = await screen.findByText(/Country 2/i);

  expect(country1).toBeInTheDocument();
  expect(country2).toBeInTheDocument();
});
