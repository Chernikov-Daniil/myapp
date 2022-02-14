import { Router } from "./components/Router";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
