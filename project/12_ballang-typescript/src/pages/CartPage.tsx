import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../api/api";

function CartPage() {
  const queryClient = useQueryClient();

  const { data: cart, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: () => api.cart.getCart(),
  });

  const { mutateAsync: removeItemFromCart } = useMutation<
    unknown,
    Error,
    number,
    unknown
  >({
    mutationFn: (productId) => api.cart.removeItemFromCart(productId),
  });
  const handleClickRemoveItemFromCart = async (productId: number) => {
    // 장바구니 삭제 로직
    await removeItemFromCart(productId);
    alert("상품이 장바구니에서 제거되었습니다.");

    // 무효화
    // exact:true -> 정확하게 queryKey 랑 같은것만 무효화 해라
    queryClient.invalidateQueries({ queryKey: ["cart"], exact: true });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">장바구니</h1>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <ul className="flex flex-col gap-4">
          {cart.items.map((cartItem) => (
            <li key={cartItem.id}>
              <h5 className="text-md">{cartItem.product.name}</h5>
              <span>[ {cartItem.quantity}개 ]</span>
              <button
                onClick={() =>
                  handleClickRemoveItemFromCart(cartItem.product.id)
                }
              >
                장바구니에서 삭제하기
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
