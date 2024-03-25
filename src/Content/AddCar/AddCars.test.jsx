import {render, screen} from "@testing-library/react";
import {describe, it, expect} from "vitest";
import AddCars from "./AddCars";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore();
describe("NavigationBar", () => {
  it("renders add", () => {
    const initialState = {};
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddCars />
        </BrowserRouter>
      </Provider>
    );
    const addCar = screen.getByPlaceholderText("Input Harga Sewa Mobil");
    expect(addCar).toBeDefined();
  });
});
