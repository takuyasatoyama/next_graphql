import { connect } from 'mongoose';

const MONGODB_URI: string = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/test';

if (MONGODB_URI === '') {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}



/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

declare global {
  var mongoose: any;
}
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}
console.log("start connection3");

async function connectToDatabase() {  
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      useNewUrlParser: true,
      useUnifiedTopology: true 
    };

    cached.promise = connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  console.log('🚀 Next.js Connected to MongoDb Database');
  return cached.conn;
}

export default connectToDatabase;
