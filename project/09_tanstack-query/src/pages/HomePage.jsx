import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import api from "../api/api";
import Page from "../components/Page";

function HomePage() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    // 가져온 데이터를 어떤 키에다가 저장 할 것인지(
    // 항상 배열로 씀 <- 강제 tanstack 공식에서 이렇게 하라고함.
    // 첫 요소로는 데이터의 모델명을 넣는다. <- 매우 당연한것 강제는아님
    // 데이터를 설명하는 정보를 Obj형태로 넣는다. <- 일반적으로 이렇게함 // ["products",{page}]
    queryKey: ["products"],
    // 데이터 가져오는 함수, 항상 비동기 함수(promise)
    queryFn: () => api.products.getProducts(),
  });

  const { data: brands } = useQuery({
    queryKey: ["brands"],
    queryFn: () => api.brands.getBrands(),
  });

  if (isLoading) return <Page>Loading...</Page>;
  if (isError) return <Page>Error...</Page>;

  return (
    <Page>
      <ol>
        <h1>Products</h1>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ol>
    </Page>
  );
}

export default HomePage;
