const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for quotes
const quoteSchema = new Schema({
  writerId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Writer'
  },
  writerName: {
    type: String,
    required: true
  },
  quote: {
    type: String,
    required: true
  }
});

// Create and export the model
const Quote = mongoose.model('Quote', quoteSchema);
module.exports = Quote;
