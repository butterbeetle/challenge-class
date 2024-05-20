export default async function postListPageLoader() {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  const response = await fetch(url);
  const data = await response.json();
  // 값을 가져와서 이 값이 어디로 흘러갈지는 모르겠지만 일단 리턴!
  return data;
}
