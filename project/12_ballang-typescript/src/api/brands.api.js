class BrandsAPI {
  #axios;
  constructor(axios) {
    this.#axios = axios;
  }

  // getBrands: 전체 브랜드 목록을 제공합니다.
  async getBrands() {
    const path = "/brands";
    const response = await this.#axios.get(path);
    const result = response.data.result;

    return result;
  }

  // getBrand: 특정 브랜드에 대한 정보와 해당 브랜드의 모든 상품 목록을 제공합니다.
  async getBrand(brandsId) {
    const path = `/brands/${brandsId}`;
    const response = await this.#axios.get(path);
    const result = response.data.result;

    return result;
  }
}

export default BrandsAPI;
