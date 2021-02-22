import Service from '../models/service.model.js';

export const getServices = async (req, res) => {
  try {
    const from = +req.query.from;
    const n = +req.query.n;
    const loadedServices = await Service.find().skip(from).limit(n);
    const servicesAmount = await Service.countDocuments({});
    
    res.status(200).json({ loadedServices: loadedServices, servicesAmount: servicesAmount });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

export const getService = async (req, res) => {
  try {
    const service = await Service.findOne({ _id: req.params.id });
    
    res.status(200).json(service);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}