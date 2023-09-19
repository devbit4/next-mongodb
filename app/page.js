export const revalidate = 60;

//페이지 캐싱

export default async function Home() {
  //fetch 쓸때마다 사실 적용이 됨
  //매번 새로 요청 실시간 데이터가 중요하다!{cache:"no-store"}
  //60초마다 캐싱된 데이터 갱신 {next:{revalidate:60}}

  // await fetch('', { cache: 'force-cache' });

  return <div>Home</div>;
}
