import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(요청, 응답) {
  const db = (await connectDB).db('forum');

  let result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(요청.query.id) });

  return 응답.status(200).json(result);
}
