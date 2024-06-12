import { useModal } from "./Modal.context";

function Modal() {
  const modal = useModal();
  return (
    <div
      className="fixed left-0 top-0 right-0 bottom-0
  bg-black/50 flex items-center justify-center"
    >
      <div className="bg-white w-80 h-40 rounded-lg flex items-center justify-center flex-col divide-y-2 divide-solid">
        <p>모다르 본체</p>
        <button
          className="size-full flex items-center justify-center"
          onClick={modal.close}
        >
          닫기
        </button>
      </div>
    </div>
  );
}

export default Modal;
