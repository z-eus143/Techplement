const Quote = require('../Schema/QuoteSchema');

const createQuote = async (req, res) => {
  try {
    const { quote, id, name } = req.body;

    // Check if the quote already exists
    const existingQuote = await Quote.findOne({ quote });
    if (existingQuote) {
      return res.status(400).json({ message: 'Quote already exists' });
    }

    // Create a new quote
    const newQuote = new Quote({
      writerId: id,
      writerName: name,
      quote : quote
    });

    await newQuote.save();
    res.status(201).json("added");
  } catch (error) {
    res.status(500).json({ message: 'Error adding quote', error });
  }
};

const showQuote = async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.status(200).json(quotes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching quotes', error });
  }
};

const QuoteOD = async (req, res) => {
  try {
    const count = await Quote.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const randomQuote = await Quote.findOne().skip(randomIndex);
    res.json(randomQuote);
} catch (error) {
    res.status(500).send(error.message);
}
};

module.exports = {
  createQuote,
  showQuote,
  QuoteOD
};
