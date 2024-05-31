import { BASE_URL, client } from "./api";

// const myAxiosInstance1 = axios.create({baseURL:"https://www.naver.com"});
// const myAxiosInstance2 = axios.create({baseURL:"https://www.daum.net"});
// 1. 나만의 인스턴스라서 커스텀 할 수 있다.
// 2. 여러 개의 나만의 인스턴스를 만들 수 있다.
// 3. 가능하면 요렇게 써

export const getBrands = async () => {
  const endpoint = `${BASE_URL}/brands`;
  const res = await client.get(endpoint);
  const data = res.data;

  return data;
};

export const getBrand = async (brandId) => {
  const endpoint = `${BASE_URL}/brands/${brandId}`;
  const res = await client.get(endpoint);
  const data = res.data;

  return data;
};
