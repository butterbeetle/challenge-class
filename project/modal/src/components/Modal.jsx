import { useEffect } from "react";
import { useModal } from "../contexts/modal.context";
import Backdrop from "./Backdrop";

function Modal({ title, content }) {
  const modal = useModal();

  useEffect(() => {
    const timer = setTimeout(() => {
      modal.close();
    }, 2000);

    return () => clearTimeout(timer);
  }, [modal]);

  return (
    <Backdrop>
      <article className="modal">
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={() => modal.close()}>닫기</button>
      </article>
    </Backdrop>
  );
}

export default Modal;
