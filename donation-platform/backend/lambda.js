const stripe = require('stripe')('sk_test_YOUR_STRIPE_SECRET_KEY');
exports.handler = async function(event) => {
}
console.log('Received event:', JSON.stringify(event, null, 2));
let body;
try {
    body = JSON.parse(event.body);
} catch (error) {
    console.error('JSON parse error:', error);

    return {
        statusCode: 400,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            error: 'Invalid request body',
            details: 'Request body must be valid JSON'
        })
        }
    }
}