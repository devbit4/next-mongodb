import { connectDB } from '@/util/database';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'b849580673a66804e1c5',
      clientSecret: '1d69bda245ddc906f1dc907d363e885650d034d5',
    }),
  ],
  secret: 'devbit1234',
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
