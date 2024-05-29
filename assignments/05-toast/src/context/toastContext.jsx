import { createContext } from "react";

export const ToastContext = createContext(null);

export default function ToastContextProvider({ children }) {
  return <ToastContext.Provider>{children}</ToastContext.Provider>;
}
