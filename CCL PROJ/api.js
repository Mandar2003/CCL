const express = require('express');
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');

const app = express();
const razorpay = new Razorpay({
  key_id: 'YOUR_KEY_ID',
  key_secret: 'YOUR_KEY_SECRET'
});

app.use(bodyParser.json());

app.post('/create-order', async (req, res) => {
  const { amount, currency, description } = req.body;

  const options = {
    amount: amount * 100, // Amount in smallest currency unit (e.g., paise for INR)
    currency: currency,
    receipt: 'receipt_order_123', // You should ideally generate this dynamically
    payment_capture: 1 // Auto capture payment
  };

  try {
    const response = await razorpay.orders.create(options);
    res.json({ orderId: response.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/capture-payment', async (req, res) => {
  const { paymentId, orderId } = req.body;

  try {
    const payment = await razorpay.payments.capture(paymentId, amount * 100);
    // Payment successful, handle further processing (e.g., unlock services)
    res.json({ status: 'success' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
