import { connectDB } from '@/util/database';
import Link from 'next/link';
import DetailLink from './DetailLink';
import ListItem from './ListItem';

export const revalidate = 20;

export default async function List() {
  const db = (await connectDB).db('forum');

  let result = await db.collection('post').find().toArray();

  return (
    <div className='list-bg'>
      <Link href={'/write'}>
        <button type='submit'>버튼</button>
      </Link>
      <ListItem result={result} />
    </div>
  );
}
