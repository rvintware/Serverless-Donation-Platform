Successful Integration with Stripe and AWS

<img width="412" alt="Screenshot 2025-06-08 at 12 10 43 PM" src="https://github.com/user-attachments/assets/090e4620-085f-42a3-afab-005ba43bd666" />
<img width="1728" alt="Screenshot 2025-06-08 at 2 05 54 AM" src="https://github.com/user-attachments/assets/5120454b-4183-4e48-b266-f838026fbd60" />

AWS Lambda Setup and Successful Test

<img width="2536" alt="Screenshot 2025-06-08 at 12 04 55 PM" src="https://github.com/user-attachments/assets/8bac2c45-ade5-425f-a725-447af1acbed3" />
<img width="2537" alt="Screenshot 2025-06-08 at 12 05 18 PM" src="https://github.com/user-attachments/assets/b93e9a82-fd45-4333-a070-22ba4f855b28" />

AWS API Gateway Resource Setup

<img width="2542" alt="Screenshot 2025-06-08 at 12 05 57 PM" src="https://github.com/user-attachments/assets/5e06edec-0ca3-41a7-a800-3485fe6df284" />

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
