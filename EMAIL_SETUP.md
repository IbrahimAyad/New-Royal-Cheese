# 📧 Email System Setup Guide

## Overview
Your Royale with Cheese website now has a complete email system that handles:
- Contact form submissions
- Franchise inquiries  
- Table reservation requests
- Newsletter signups
- Order notifications

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account (1000 emails/month free)
3. Verify your email address

### Step 2: Configure EmailJS Service
1. **Add Email Service:**
   - Go to "Email Services" in your EmailJS dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions
   - **Copy your Service ID** (e.g., `service_abc123`)

2. **Create Email Template:**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template content:

```html
Subject: {{subject}} - Royale with Cheese

From: {{from_name}} <{{from_email}}>
Phone: {{phone}}
Form Type: {{form_type}}

Message:
{{message}}

---
Restaurant Details:
{{#reservation_date}}Reservation Date: {{reservation_date}}{{/reservation_date}}
{{#reservation_time}}Reservation Time: {{reservation_time}}{{/reservation_time}}
{{#party_size}}Party Size: {{party_size}}{{/party_size}}
{{#order_details}}Order Details: {{order_details}}{{/order_details}}

Submitted: {{timestamp}}
Website: {{website_url}}
```

   - **Copy your Template ID** (e.g., `template_xyz789`)

3. **Get Public Key:**
   - Go to "Account" → "General"
   - **Copy your Public Key** (e.g., `user_abc123xyz`)

### Step 3: Configure Environment Variables
1. Create a `.env` file in your project root:
```bash
# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here  
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. Replace the placeholder values with your actual EmailJS credentials

### Step 4: Test the System
1. Start your development server: `npm start`
2. Navigate to the contact section
3. Fill out and submit a contact form
4. Check your email for the submission

## 📋 Form Types Handled

### 1. **Contact Form**
- General inquiries and feedback
- Located in the main contact section
- Sends to your configured email

### 2. **Franchise Inquiry**
- Business partnership requests
- Located in the franchise section
- Includes contact details and interest level

### 3. **Table Reservations**
- Restaurant table booking requests
- Located in the menu section
- Includes date, time, and party size

### 4. **Newsletter Signup**
- Email list subscriptions
- Can be added anywhere on the site
- Minimal form with just email

### 5. **Order Notifications**
- Order details for complex requests
- Integrated with SkyTab ordering
- Includes customer info and order details

## 🔧 Customization Options

### Change Restaurant Email
Update the email address where forms are sent:
```typescript
// In src/hooks/useEmailService.ts
to_email: 'your-restaurant@email.com'
```

### Modify Success Messages
Edit the success messages in `useEmailService.ts`:
```typescript
const getSuccessMessage = (formType: string): string => {
  switch (formType) {
    case 'contact':
      return 'Your custom success message here';
    // ... other cases
  }
};
```

### Add New Form Types
1. Add the new type to the `EmailData` interface
2. Create a new send function in `useEmailService.ts`
3. Use the hook in your component

## 🛡️ Fallback System

If email sending fails, the system automatically:
1. Shows an error message to the user
2. Provides a "Call Instead" button
3. Redirects to phone: `(313) 315-3014`

This ensures customers can always reach you even if email is down.

## 📊 Email Analytics

EmailJS provides analytics on:
- Email delivery rates
- Open rates (if HTML emails)
- Failed deliveries
- Monthly usage

Access these in your EmailJS dashboard.

## 🔒 Security Features

- **Client-side only**: No server required
- **Rate limiting**: EmailJS prevents spam
- **Validation**: Forms validate required fields
- **Fallback**: Phone contact if email fails

## 🚨 Troubleshooting

### Emails Not Sending
1. Check browser console for errors
2. Verify environment variables are set
3. Confirm EmailJS service is active
4. Test with a simple form first

### Wrong Email Address
1. Update `to_email` in `useEmailService.ts`
2. Verify EmailJS template settings
3. Check spam folder

### Form Not Submitting
1. Check form validation requirements
2. Verify all required fields are filled
3. Check network connectivity

## 📞 Support

If you need help setting up the email system:
- **EmailJS Support**: [EmailJS Documentation](https://www.emailjs.com/docs/)
- **Restaurant Phone**: (313) 315-3014
- **Email**: royalewithcheese313@gmail.com

## 🎯 Next Steps

1. Set up EmailJS account (5 minutes)
2. Configure environment variables
3. Test all form types
4. Customize success messages
5. Monitor email analytics

Your email system is now ready for production! 🚀 