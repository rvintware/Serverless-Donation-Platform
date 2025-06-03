const stripe = Stripe('pk_test_YOUR_STRIPE_PUBLISHABLE_KEY');
/* 1. const = create a constant (can't reassign)
2. stripe = variable name (lowercase by convention)
3. Stripe = global function from Stripe's library
4. 'pk_test_...' = your publishable key

Publishable vs Secret keys:
- pk_test_* = publishable, safe for frontend, limited power
- sk_test_* = secret, backend only, full power
- pk_live_* = real money! (production)
- sk_live_* = real money, keep ultra secure!*/

const elements = stripe.elements();
const cardElement = elements.create('card', {
    style: {
        base: {
            fontSize: '16px',
            color: '#32325d',
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            '::placeholder': {
                color: '#aab7c4'
            }
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a'
        }
    }
});
cardElement.mount('#card-element');
cardElement.on('change', function(event) {
    const displayError = document.getElementById('card-errors');
    if(event.error) {
        displayError.textContent = event.error.message;
    } else {
        displayError.textContent = '';
    }
});
const form = document.getElementById('donation-form');
const submitButton = document.getElementById('submit-button');
form.addEventListener('submit', async function(event) {
    event.preventDefault();
    submitButton.disabled = true;
    submitButton.textContent = 'Processing...';
    const amount = document.getElementById('amount').value;

    try {
        const response = await fetch('your api gateway url/create-payment-intent',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: amount
            })
        });
        const data = await response.json();
    const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
            card: cardElement,
            billing_details: {
                name: 'Anonymous Donor',
                email: 'anonymous@donor.com',
                phone: '555-1234',
                address: {
                    line1: '123 Main St',
                    city: 'New York',
                    state: 'NY',
                    postal_code: '10001',
                    country: 'US',
                }
            }
        }
    });
    if (result.error) {
        document.getElementById('card-errors').textContent = result.error.message;
        submitButton.disabled = false;
        submitButton.textContent = 'Donate Now';
    } else {
        if (result.paymentIntent.status === 'succeeded') {
            form.style.display = 'none';
            document.getElementById('success-message').classList.remove('hidden');
        }
    }
}   catch (error) {
        console.error('Error:', error);
        document.getElementById('card-errors').textContent = 'An error occurred. Please try again.';
        submitButton.disabled = false;
        submitButton.textContent = 'Donate Now';
}
});
/*What ends up in catch:
- Network errors (no internet)
- Server errors (500 status)
- JSON parsing errors
- Timeout errors
- Our coding errors*/