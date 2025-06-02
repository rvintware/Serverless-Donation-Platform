// Payment Flow Pyramid

/*User Intent
       /           \
    Payment       Security
   Methods        & Compliance
  /        \      /         \
Cards    Banks  PCI      3D Secure*/

// What does it look like in our code?

// 1. Capture user intend
const amount = document.getElementById('amount').value;

// 2. Payment Method - collected securely
const cardElement = elements.create('card');

// 3. Security - handled by Stripe
const result = await stripe.confirmCardPayment(clientSecret);

// Payment Intents vs Charges
// Old Way
// 1. Collects card details
// 2. Create charge immediately
// 3. Hope is ServiceWorkerRegistration

// New Way
// 1. Declare intent to collect payment
// 2. Handle authentication if needed
// 3. Confirm payment with multiple chances to succeed

// Payment Intents can handle strong customer authentication, complex payments flow (3D secure, bank redirects) and are better for global payment flows

// Global Payment Considerations - Currency Handling
const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: 'cad',

// Metadata
metadata: {
    order_id: '12345',
    customer_email: 'test@gmail.com',
}
});



