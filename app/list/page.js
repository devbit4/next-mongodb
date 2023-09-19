import { connectDB } from '@/util/database';
import Link from 'next/link';
import DetailLink from './DetailLink';

export default async function List() {
  const db = (await connectDB).db('forum');

  let result = await db.collection('post').find().toArray();

  return (
    <div className='list-bg'>
      <form action='/api/list' method='GET'>
        <button type='submit'>버튼</button>
      </form>

      {result.map((item) => {
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
