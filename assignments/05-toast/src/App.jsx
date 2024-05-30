import ToastMain from "./components/ToastMain";
import ToastContextProvider from "./context/toastContext";

function App() {
  return (
    <ToastContextProvider>
      <ToastMain />
    </ToastContextProvider>
  );
}

export default App;
