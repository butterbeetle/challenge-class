/**
 * 1. 만든다 -> createContext
 * 2. 사용한다 -> useContext()
 * 3. 범위를 지정해서 값을 내려준다 -> Context.provider
 */
import { useScrollLock } from "@yoojinyoung/usescrolllock";
import { createContext, useContext, useState } from "react";
import Modal from "../components/Modal";

const initialValue = {
  open: () => {},
  close: () => {},
};

const ModalContext = createContext(initialValue);

export const useModal = () => useContext(ModalContext);

export default function ModalProvider({ children }) {
  const [modalOptions, setModalOptions] = useState();
  const scrollLock = useScrollLock();

  const value = {
    open: (options) => {
      setModalOptions(options);
      scrollLock.lock();
    },
    close: () => {
      setModalOptions(null);
      scrollLock.release();
    },
  };

  return (
    <ModalContext.Provider value={value}>
      {children}{" "}
      {modalOptions && (
        <Modal title={modalOptions.title} content={modalOptions.content} />
      )}
    </ModalContext.Provider>
  );
}

// 내가 만든 useModal 이라고 하는 커스텀 훅을 사용하는 사람들은 어떤 방식으로 사용하는게 편리할까?
// 무얼 사용하기를 기대할까?
