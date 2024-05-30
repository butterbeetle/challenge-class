import { createContext, useContext, useState } from "react";
import Toast from "../components/Toast";

const initialValue = {
  createToast: () => {},
  deleteToast: () => {},
};

const ToastContext = createContext(initialValue);

export const useToast = () => useContext(ToastContext);

export default function ToastContextProvider({ children }) {
  const [toastList, setToastList] = useState([]);

  const value = {
    createToast: (options) => {
      setToastList((prev) => [...prev, { ...options }]);
    },
    deleteToast: (toastId) => {
      setToastList((prev) => prev.filter((toast) => toast.toastId !== toastId));
    },
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ul className="fixed bottom-6 right-6 grid grid-cols-1 gap-y-3">
        {toastList.map(({ toastId, title, content, time }) => (
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
