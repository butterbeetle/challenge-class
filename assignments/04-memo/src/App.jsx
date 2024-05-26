import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store/store";
import router from "./routes/router";

const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />;
      </PersistGate>
    </Provider>
  );
}

export default App;
