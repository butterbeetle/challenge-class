import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import Page from "../components/Page";

const ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

function TodoPage() {
  const inputRef = useRef(null);

  const { isPending, mutate } = useMutation({
    mutationFn: (variables) => {
      axios.post(ENDPOINT), { value: variables };
    },
    // onSuccess: () => {
    //   console.log();
    //   alert("성공");
    // },
    // onError: () => {
    //   alert("실패");
    // },
  });

  const handleClickButton = async () => {
    mutate(inputRef.current.value, {
      onSuccess: () => {
        alert("성공");
      },
      onError: () => {
        alert("실패");
      },
    });
  };

  return (
    <Page>
      <input
        ref={inputRef}
        type="text"
        className="border"
        disabled={isPending}
      />
      <button
        onClick={handleClickButton}
        className="bg-black text-white"
        disabled={isPending}
      >
        누르라
      </button>
    </Page>
  );
}

export default TodoPage;
