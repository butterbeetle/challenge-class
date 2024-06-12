import { PropsWithChildren } from "react";

// 유틸리티 타입
// === PropsWithChildren
// type VeryUsefulType<T> = T & {
//   children: React.ReactNode;
// };

// interface <-> type : 7:3 정도로 props 는 interface 사용함
interface CounterButtonProps {
  onClick: () => void;
}

function CounterButton({
  children,
  onClick: handleClick,
}: PropsWithChildren<CounterButtonProps>) {
  return (
    <button
      className="flex justify-center size-10 text-3xl rounded-full bg-gray-300 border-2 border-solid border-gray-700
      shadow-md
      hover:bg-gray-200 hover:shadow-lg
      active:bg-gray-50 active:shadow-[inset_0_-1px_6px_rgba(0,0,0,0.6)]"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default CounterButton;
