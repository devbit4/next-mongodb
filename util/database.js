import { MongoClient } from 'mongodb';
const url =
  'mongodb+srv://devbit4:devbit1234@cluster0.bvswk6p.mongodb.net/forum';
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
