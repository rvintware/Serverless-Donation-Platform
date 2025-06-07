require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
exports.handler = async (event) => {
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
        };
    }
// Validate amount
const amount = parseInt(body.amount);
if (!amount || amount < 1 || amount > 10000) {
    return {
        statusCode: 400,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            error: 'Invalid amount',
            details: 'Amount must be between $1 and $10,000'
        })
    };
}
// Create payment intent
try {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency: 'usd',
        metadata: {
            source: 'ocean-charity-website',
            campaign: 'save-the-oceans',
            timestamp: new Date().toISOString()
        },
        statement_descriptor: 'OCEAN CHARITY',
        description: `Donation of $${amount} to Save the Oceans`
    });

// Return client secret
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'X-Request-ID': event.requestContext.requestId
        },
        body: JSON.stringify({
            clientSecret: paymentIntent.client_secret,
            id: paymentIntent.id,
            amount: paymentIntent.amount
        })
    };
} 
catch (error) {
    console.error('Stripe error:', error);
    let errorMessage = 'Payment processing failed';
    let statusCode = 500;

    if (error.type === 'StripeCardError') {
        errorMessage = error.message;
        statusCode = 400;
    } else if (error.type === 'StripeInvalidRequestError') {
        errorMessage = 'Invalid payment request';
        statusCode = 400;
    }

    return {
        statusCode: statusCode,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            error: errorMessage,
            type: error.type,
            requestId: event.requestContext.requestId,
        })
    };    
}
};
// Local Testing Setup
if (require.main === module) {
    require('dotenv').config();

// Create a mock Lambda event
    const testEvent = {
        body: JSON.stringify({ amount: 10}),
        headers: {
            'Content-Type': 'application/json'
        },
        httpMethod: 'POST',
        path: '/create-payment-intent',
        requestContext: {
            requestId: 'test-request-123'
        }
    };

// Test the handler
    console.log('Testing with:', testEvent);

    exports.handler(testEvent)
        .then(response => {
            console.log('Success response:', JSON.stringify(response, null, 2));
    // Verify response structure
            const body = JSON.parse(response.body);
            console.log('Client secret:', body.clientSecret);
        })
    .catch(error => {
    console.error('Handler error:', error);
    });
}