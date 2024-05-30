import ToastMain from "./components/ToastMain";
import ToastContextProvider from "./context/toast.context";

function App() {
  return (
    <ToastContextProvider>
      <ToastMain />
    </ToastContextProvider>
  );
}

export default App;
