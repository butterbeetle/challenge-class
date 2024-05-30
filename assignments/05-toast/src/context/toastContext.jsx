import { createContext, useContext, useState } from "react";

const initialValue = {
  createToast: () => {},
  deleteToast: () => {},
};

const ToastContext = createContext(initialValue);

export const useToast = () => useContext(ToastContext);

export default function ToastContextProvider({ children }) {
  const [toastTitle, setToastTitle] = useState("Scheduled: Catch up");
  const [toastContent, setToastContent] = useState(new Date());
  const [toastTime, setToastTime] = useState(2000);

  const value = {
    createToast: () => {},
    deleteToast: () => {},
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}
