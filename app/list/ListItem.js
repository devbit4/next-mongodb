'use client';

import Link from 'next/link';

export default function ListItem(props) {
  return (
    <div className='list-bg'>
      {props.result.map((item) => {
        return (
          <div className='list-item'>
            <Link href={`/detail/${item._id}`} prefetch={false}>
              <h4>{item.title}</h4>
            </Link>
            <Link href={`/edit/${item._id}`}>수정</Link>
            <p>{item.content}</p>
            {/* <DetailLink /> */}
          </div>
        );
      })}
    </div>
  );
}
