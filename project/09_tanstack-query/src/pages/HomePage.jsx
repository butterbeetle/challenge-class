import { useEffect, useState } from "react";
import api from "../api/api";
import Page from "../components/Page";

function HomePage() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function init() {
      try {
        const products = await api.products.getProducts();
        setProducts(products);
        setIsSuccess(true);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    init();
  }, []);

  if (isLoading) return <Page>Loading...</Page>;
  if (isError) return <Page>Error...</Page>;

  return (
    <Page>
      <ol>
        {products?.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ol>
    </Page>
  );
}

export default HomePage;
