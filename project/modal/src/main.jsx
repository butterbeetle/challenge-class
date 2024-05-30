import { ScrollLockProvider } from "@yoojinyoung/usescrolllock";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ModalProvider from "./contexts/modal.context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ScrollLockProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </ScrollLockProvider>
);
