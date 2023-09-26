'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import DetailLink from './DetailLink';
import ListItem from './ListItem';

export default function List(props) {
  const [result, setResult] = useState([]);

  useEffect(async () => {
    const res = await fetch(`/api/post/list`).then((res) => res.json());

    setResult(res);
  }, []);

  return (
    <div className='list-bg'>
      <Link href={'/write'}>
        <button type='submit'>버튼</button>
      </Link>
      <ListItem result={result} />
    </div>
  );
}
