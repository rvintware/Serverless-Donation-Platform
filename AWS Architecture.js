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

// Principle of Least Privilege: Giving necessary permissions

// Reliability: Systems performs consistently and correctly

try {
    // try the risky operation
} catch (error) {
    // Gracefully handle failures
    return { statusCode: 500, ...};
}

// Lambda automatically retries failed executions
// API Gateway handles traffic spikes

// Performance Efficiency: Using resources efficiently
// Lamba only runs when needed; cold starts are slower; API gateway caches responses when possible

exports.handler = async (event) => {
};

// Lambda functions are small and focused
// This function does ONE THING: process payments
// Single responsibility = faster execution

// Cost Optimization: Avoid unnecessary costs
// Pay per use, milliseconds billing
// Servers aren't running 24/7
// Free tier covers initial usage

// Cost Breakdown
/* Lambda: $0.20 per 1M requests + compute time
API Gateway: $3.50 per 1M requests
Total for 1000 donations/month: ~$0.10
Traditional server: $5-50/month minimum */