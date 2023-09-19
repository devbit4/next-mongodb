import { connectDB } from '@/util/database';
import Link from 'next/link';
import DetailLink from './DetailLink';
import ListItem from './ListItem';

export default async function List() {
  const db = (await connectDB).db('forum');

  let result = await db.collection('post').find().toArray();

  return (
    <div className='list-bg'>
      <form action='/api/list' method='GET'>
        <button type='submit'>버튼</button>
      </form>
      <ListItem result={result} />
    </div>
  );
}
