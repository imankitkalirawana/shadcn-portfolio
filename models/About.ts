import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  nickname: String,
  dob: String,
  address: String,
  country: String,
  state: String,
  city: String,
  zip: String,
  email: String,
  phone: String,
  website: String,
  label: String,
  description: String,
  image: {
    default: 'avatar.jpg',
    type: String,
    required: true
  }
});

const About = mongoose.models.About || mongoose.model('About', aboutSchema);

export default About;
