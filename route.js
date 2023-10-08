const express = require('express');
const customerController = require('./controller');

const router = express.Router();

const bodyParser = require('body-parser');

// It used to parse the body of incoming HTTP requests. It allows you to access the data sent in the request body, which is commonly used for handling form submissions or receiving JSON data from clients

//in simple words jo bhi data hm bhejte hai hmare compiler ko nhi pta o string h , body mai hai ya form data hai 
// us data ko janne k liye body-parser ko use mai lete hai

router.use(bodyParser.urlencoded({extended:true}));
// middleware to parse URL-encoded data from incoming requests. When a client submits a form using the "application/x-www-form-urlencoded

router.use(bodyParser.json());
//middleware to parse JSON data from incoming requests

// Create a new customer
router.post('/customers', customerController.createCustomer);

// Get a list of all customers
router.get('/customers', customerController.getAllCustomers);

// Get a specific customer by ID
router.get('/customers/:id', customerController.getCustomerById);

// Update a customer by ID
router.put('/customers/:id', customerController.updateCustomer);

// Delete a customer by ID
router.delete('/customers/:id', customerController.deleteCustomer);

module.exports = router;
