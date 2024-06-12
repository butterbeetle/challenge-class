import Modal from "./Modal";
import { useModal } from "./Modal.context";

function ModalControls() {
  const modal = useModal();

  const handleClickButton = () => {
    //모달 여는 로직
    modal.open(<Modal />);
  };

  return (
    <div>
      <button onClick={handleClickButton}>모달을 열어라</button>
    </div>
  );
}

export default ModalControls;
