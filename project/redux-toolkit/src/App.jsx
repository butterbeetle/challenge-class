import { useDispatch } from "react-redux";
import Button from "./components/Button";
import Display from "./components/Display";
import { decrement, increment } from "./redux/slices/counter.slice";

function App() {
  const dispatch = useDispatch();

  const decrementByFive = () => {
    dispatch(decrement(5));
  };
  const incrementByFive = () => {
    dispatch(increment(5));
  };

  return (
    <main>
      <Display />
      <Button label="빼기 5" onClick={decrementByFive} />
      <Button label="더하기 5" onClick={incrementByFive} />
    </main>
  );
}

export default App;
