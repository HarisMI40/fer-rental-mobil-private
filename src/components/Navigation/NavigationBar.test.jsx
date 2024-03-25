import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import NavigationBar from "./NavigationBar";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore();

describe("NavigationBar", () => {
  it("renders tanpa adanya crash di search", () => {
    const initialState = {};
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <NavigationBar />
        </BrowserRouter>
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeDefined();

    const searchButton = screen.getByText("Search");
    expect(searchButton).toBeDefined();
  });
});
