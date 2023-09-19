import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function Edit(props) {
  const db = (await connectDB).db('forum');

  let result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(`${props.params.id}`) });

  return (
    <div>
      <h4 className='p-20'>수정페이지</h4>
      <form action={`/api/post/edit`} method='POST'>
        <input name='title' defaultValue={result.title}></input>
        <input name='content' defaultValue={result.content}></input>
        <input
          name='_id'
          defaultValue={result._id.toString()}
          style={{ display: 'none' }}
        ></input>
        <button type='submit'>전송</button>
      </form>
    </div>
  );
}
