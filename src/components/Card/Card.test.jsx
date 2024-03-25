import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Card from "./Card";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store";

describe("Test Card Component", () => {
  test("List Card Components should be rendered", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card />
        </BrowserRouter>
      </Provider>
    );
    const cardlist = screen.queryByTestId("card-list");
    expect(cardlist).toBeDefined;
  });

  test("Card shoud be rendered", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card />
        </BrowserRouter>
      </Provider>
    );
    const card = screen.queryByTestId("car-card");
    expect(card).toBeDefined();
  });
  test("Card Detail shoud be rendered", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card />
        </BrowserRouter>
      </Provider>
    );
    const cardDetail = screen.queryByTestId("card-detail");
    expect(cardDetail).toBeDefined();
  });
  test("Delete Button shoud be rendered", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card />
        </BrowserRouter>
      </Provider>
    );
    const DeleteBtn = screen.queryByTestId("card-delete");
    expect(DeleteBtn).toBeDefined();
  });
  test("Edit Button shoud be rendered", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card />
        </BrowserRouter>
      </Provider>
    );
    const editBtn = screen.queryByTestId("card-edit");
    expect(editBtn).toBeDefined();
  });
});
