const mongoose = require('mongoose');

const { Schema } = mongoose;

const url =
  process.env.NODE_ENV === 'development'
    ? process.env.DBURL
    : process.env.TESTDBURL;
mongoose.connect(url).catch((err) => err);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('Connected to database successfully');
});

const userSchema = new Schema({
  email: { type: String, unique: true },
  username: { type: String, unique: true },
  password: String,
  charities: [
    {
      charityName: String,
      donationAmount: Number,
      lastDonation: Date,
      catImage: String,
      favorite: Boolean,
    },
  ],
});

module.exports = mongoose.model('Users', userSchema);
