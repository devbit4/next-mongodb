'use client';

import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';

export default function DetailLink() {
  const router = useRouter();
  //dynamic router => 동적 라우팅

  //router.back()
  //router.forward()
  //router.refresh()
  //router.prefetch("/") => "/" 해당 페이지 미리 로드 => 빠르게 이동 // Link랑 같은 기능임

  // console.log(usePathname());
  // console.log(useSearchParams());
  // console.log(useParams());
  return (
    <button
      onClick={() => {
        router.push('/');
      }}
    >
      버튼
    </button>
  );
}
