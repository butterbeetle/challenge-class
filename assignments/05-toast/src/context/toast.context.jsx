import { createContext, useContext, useState } from "react";
import Toast from "../components/Toast";
import uuid from "../utils/uuid";

const initialValue = {
  createToast: () => {},
  deleteToast: () => {},
};

const ToastContext = createContext(initialValue);

export const useToast = () => useContext(ToastContext);

export default function ToastContextProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  // List -> item
  // 복수 -> 단수

  const value = {
    createToast: (options) => {
      setToasts((prev) => [...prev, { id: uuid(), ...options }]);
    },
    deleteToast: (toastId) => {
      setToasts((prev) => prev.filter((toast) => toast.toastId !== toastId));
    },
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ul className="fixed bottom-6 right-6 grid grid-cols-1 gap-y-3">
        {toasts.map(({ toastId, title, content, time }) => (
          <li key={toastId}>
            <Toast
              title={title}
              content={content}
              time={time}
              toastId={toastId}
            />
          </li>
        ))}
      </ul>
    </ToastContext.Provider>
  );
}
