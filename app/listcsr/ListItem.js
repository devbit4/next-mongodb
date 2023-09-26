'use client';

import Link from 'next/link';

export default function ListItem(props) {
  return (
    <>
      <div className='list-bg'>
        {props.result.map((item) => {
          return (
            <div className='list-item'>
              <Link href={`/detail/${item._id}`} prefetch={false}>
                <h4>{item.title}</h4>
              </Link>
              <Link href={`/edit/${item._id}`}>수정</Link>
              <p>{item.content}</p>
              <span
                onClick={(e) => {
                  fetch(`/api/post/delete/${item._id}`, {
                    method: 'DELETE',
                    body: JSON.stringify({ id: item._id }),
                  })
                    .then((r) => {
                      if (r.status === 200) {
                        return r.json();
                      } else {
                        //서버가 에러코드 전송시
                      }
                    })
                    .then((r) => {
                      e.target.parentElement.style.opacity = 0;
                      setTimeout(() => {
                        e.target.parentElement.style.display = 'none';
                      }, 1000);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                  fetch(`/api/post/delete/${item._id}`, { method: 'DELETE' });
                }}
              >
                삭제
              </span>
              {/* <DetailLink /> */}
            </div>
          );
        })}
      </div>
    </>
  );
}
