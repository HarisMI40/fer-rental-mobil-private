import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Chart, registerables } from "chart.js";
import { Provider } from "react-redux";
import store from "./store.js";

Chart.register(...registerables);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
