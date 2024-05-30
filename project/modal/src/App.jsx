import "./App.css";
import { useModal } from "./contexts/modal.context";
import "./custom.css";

function App() {
  const modal = useModal();

  const handleClickButton = () => {
    modal.open({ title: "샘플 모달", content: "샘플 컨텐츠" });
  };

  return (
    <main>
      <button onClick={handleClickButton}>모다르 띄우기</button>
    </main>
  );
}

export default App;
