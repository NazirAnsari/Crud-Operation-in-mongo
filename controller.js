const Customer = require('./model');
const  connection = require('./config');

// Create a new customer
 const createCustomer = async(req, res) =>{
  try {
    console.log("req",req.body)
    const newCustomer = await Customer.create(req.body);
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get a list of all customers
async function getAllCustomers(req, res) {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get a specific customer by ID
async function getCustomerById(req, res) {
  const customerId = req.params.id;

  try {
    const customer = await Customer.findById(customerId);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Update a customer by ID
async function updateCustomer(req, res) {
  const customerId = req.params.id;

  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(customerId, req.body, { new: true });
    if (!updatedCustomer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Delete a customer by ID
async function deleteCustomer(req, res) {
  const customerId = req.params.id;

  try {
    const deletedCustomer = await Customer.findByIdAndRemove(customerId);
    if (!deletedCustomer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
