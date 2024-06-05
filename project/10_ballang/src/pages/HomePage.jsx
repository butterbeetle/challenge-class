import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function HomePage() {
  const nav = useNavigate();
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", { list: true }],
    queryFn: () => api.products.getProducts(),
  });

  const { mutate: addItemToCart } = useMutation({
    mutationFn: (productId) => api.cart.addItemToCart(productId),
  });
  const handleClickAddItemToCart = (productId) => {
    // 장바구니 추가 로직
    addItemToCart(productId, {
      onSuccess: () => {
        const yes = confirm(
          "상품이 장바구니에 잘 추가되었습니다. 장바구니로 갈까요?"
        );

        if (yes) {
          nav("/cart");
        }
      },
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">HomePage</h1>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <ul className="flex flex-col gap-4">
          {products.map((product) => (
            <li key={product.id}>
              <h5 className="text-md">{product.name}</h5>
              <button onClick={() => handleClickAddItemToCart(product.id)}>
                장바구니에 추가하기
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
