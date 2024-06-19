export const GET = async () => {
  return new Response("", {
    headers: { "Set-Cookie": "accessToken=blabla; Max-Age=2000" },
  });
};
