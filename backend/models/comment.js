import mongoose from 'mongoose';
const Schema = mongoose.Shcema;

// create new instance of the mongoose.schema to take
// an object that shows the shape of your database entries

const CommentsSchema = new Schema({
  author: String,
  text: String,
}, { timestamps: true });

// export our module to use in server.js
export default mongoose.model('Comment', CommentsSchema);