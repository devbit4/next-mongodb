export default async function Detail(props) {
  const result = await fetch(
    `${process.env.BASE_FETCH_URL}/api/post/item?id=${props.params.id}`
  ).then((res) => res.json());

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}
