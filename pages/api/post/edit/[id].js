import { connectDB } from '@/util/database';

export default async function handler(요청, 응답) {
  if (요청.method === 'POST') {
    const db = (await connectDB).db('forum');

    console.log(요청);
    // await db.collection('post').updateOne({}, { $set: 요청.body });

    return 응답.status(200).json('수정완료');
  }
}
