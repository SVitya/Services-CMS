import mongoose from 'mongoose';

const serviceSchema = mongoose.Schema({
  title: String,
  description: String,
  image: String,
  openHour: Number,
  closeHour: Number,
  items: Array,
  phoneNumber: String,
  creator: String,
});

const Service = mongoose.model('Service', serviceSchema);

export default Service;