User Flow of Serverless Donation Platform:
1. User enters donation amount and card details
   ↓
2. JavaScript validates input client-side
   ↓
3. Fetch API sends POST to API Gateway
   ↓
4. API Gateway validates request format
   ↓
5. API Gateway triggers Lambda function
   ↓
6. Lambda validates amount server-side
   ↓
7. Lambda calls Stripe to create Payment Intent
   ↓
8. Stripe returns client secret
   ↓
9. Lambda returns secret to API Gateway
   ↓
10. API Gateway returns to browser
    ↓
11. Browser confirms payment with Stripe
    ↓
12. Stripe processes payment with bank
    ↓
13. Browser shows success message

Why each step matters:
1. Client-side validation: Better UX
2. Server-side validation: Security
3. API Gateway: Scalability and security
4. Lambda: Cost efficiency
5. Stripe: Payment expertise
6. Success feedback: User confidence

Things I learned:
1. HTML, CSS and JS frontend
2. Integrating with Stripe PK and SK key
3. Setting up API gateway and Lambda function
4. Debugging CORS
5. Locally testing API and fixing local port from 8080 to 8000

Areas of Improvement:
1. Git commit strategy
2. Major blunder accidently putting my Stripe key in there and it leading to a complex git issue that was hard to rollback
