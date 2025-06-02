// Using CloudWatch for monitoring (AWS Pillar #1 - Operational Excellence)
console.log('Received event:', event);
console.log('Stripe Error', error);

// Security
// Frontend gets the Limited Key
const stripe = Stripe('pk_test');

// Backend get a more powerful key
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Validate all user inputs, never trust the client input
if (!amount || amount < 1 || amount > 10000) {   
}