import Service from '../models/service.model.js';

export const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    
    res.status(200).json(services);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}