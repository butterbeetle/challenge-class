import Toast from "./components/Toast";
import ToastContextProvider from "./context/toastContext";

function App() {
  return (
    <ToastContextProvider>
      <Toast />
    </ToastContextProvider>
  );
}

export default App;
