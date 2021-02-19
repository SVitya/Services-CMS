import Service from '../models/service.model.js';

export const getServices = async (req, res) => {
  try {
    const from = +req.query.from;
    const services = await Service.find().skip(from).limit(8);
    const servicesAmount = await Service.countDocuments({});
    
    res.status(200).json({ services: services, servicesAmount: servicesAmount });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}