import { connectDB } from '@/util/database';

export default async function handler(요청, 응답) {
  if (요청.method === 'POST') {
    if (요청.body.title === '') {
      return 응답.status(500).json('너 제목 왜 안씀');
    }
    try {
      const db = (await connectDB).db('forum');
      let result = await db.collection('post').insertOne(요청.body);
      return 응답.status(200).redirect(302, '/list');
    } catch (error) {
      return 응답.status(500).json('데이터 저장에 오류가 발생했음');
    }
  }
}
