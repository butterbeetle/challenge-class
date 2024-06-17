// 다이나믹 라우트 안의 page는 서버에서 가져옴
function PostDetailPage(props: { params: { postId: string } }) {
  console.log("Props", props);
  return <div>포스트 상세 페이지 {props.params.postId}</div>;
}

export default PostDetailPage;
