// 'use client';

import { connectDB } from '@/util/database';
import Link from 'next/link';

import DetailLink from './DetailLink';
import ListItem from './ListItem';

// export const dynamic = 'force-dynamic';

export default async function List(props) {
  const result = await fetch(
    `${process.env.BASE_FETCH_URL}/api/post/list`
  ).then((res) => res.json());

  return (
    <div className='list-bg'>
      <Link href={'/write'}>
        <button type='submit'>버튼</button>
      </Link>
      <ListItem result={result} />
    </div>
  );
}
