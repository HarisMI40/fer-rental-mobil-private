import { render, screen } from "@testing-library/react";
import { describe, test, vi } from "vitest";
import Dashboard from "./Dashboard";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store";

vi.mock("chart.js");
vi.mock("react-chartjs-2");

describe("Test component Dashboard", () => {
  test("it should be rendered", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </Provider>
    );

    const containerDashboard = screen.getByTestId("container-Dashboard");
    expect(containerDashboard).toBeVisible();
  });
});
