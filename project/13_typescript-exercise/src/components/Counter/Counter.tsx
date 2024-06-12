import { useState } from "react";
import CounterButton from "./CounterButton";
import CounterDisplay from "./CounterDisplay";

function Counter() {
  const [count, setCount] = useState<number>(5);
  const [unit, setUnit] = useState<number>(1);

  // 방법(1): 함수 자체에 넣어주는 방법: 이건 쓰지말자
  // const handleChangeUnit:(e:{target:{value:string}})=>void = (e) => {
  //   setUnit(Number(e.target.value));
  // };

  // 방법(1-1): onChange에 마우스 올려서 가져오기: 매개변수 수가 많을 경우 추천
  const handleChangeUnit: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUnit(Number(e.target.value));
  };

  // 방법(2): 매개변수 자체에 넣어주는 방법: 이건 쓰지말자
  // const handleChangeUnit = (e: { target: { value: string } }) => {
  //   setUnit(Number(e.target.value));
  // };

  // 방법(2-1): onChange e에 마우스 올려서 가져오기: 매개변수 수가 적을 추천
  // const handleChangeUnit = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUnit(Number(e.target.value));
  // };

  const decrement = () => {
    console.log("decrement");
    setCount((prev) => prev - 1);
  };
  const increment = () => {
    console.log("increment");
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <CounterDisplay value={count + unit} />

      <input
        className="border-2 border-solid"
        value={unit}
        onChange={handleChangeUnit}
        type="number"
        placeholder="이곳에 숫자를 넣어"
      />

      <div className="flex gap-8">
        <CounterButton onClick={decrement}>-</CounterButton>
        <CounterButton onClick={increment}>+</CounterButton>
      </div>
    </div>
  );
}

export default Counter;
