import { cookies } from "next/headers";

function HomePage() {
  const accessToken = cookies().get("accessToken")?.value;

  return <div>HomePage{accessToken}</div>;
}

export default HomePage;
