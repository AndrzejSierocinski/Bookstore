const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {type: String, required: true, max: [128, 'Too long, max is 128 characters']},
  author: {type: String, required: true, max: [128, 'Too long, max is 128 characters']},
  publisher: {type: String, required: true, max: [64, 'Too long, max is 64 characters']},
  category: {type: String, required: true, lowercase: true},
  image: {type: String, required: true},
  ISBN: {type: String, required: true, min: [8, 'Too short, min is 8 characters'], max: [64, 'Too long, max is 64 characters']},
  description: {type: String, required: true,max: [512, 'Too long, max is 512 characters']},
  price: Number,
  publication : {type: String},
  createdAt: {type: Date, default: Date.now},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});


module.exports = mongoose.model('Book', bookSchema);
