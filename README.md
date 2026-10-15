# Pro App Store — Firebase-ready starter

A mobile-first App Store UI with separate User and Admin HTML pages, shared CSS/JS, Firebase configuration placeholders, app publishing, screenshot galleries, order requests, payment requests, banners, dark/light theme, and a small theme character animation.

## Important
This is a **starter project**, not a production payment platform. Before real users or money:
- Configure Firebase Authentication, Firestore, Storage, and secure Firestore/Storage Rules.
- Deploy trusted Cloud Functions for wallet/order/payment state changes.
- Set up admin custom claims using a trusted Admin SDK environment.
- Verify bKash/Nagad/Rocket transactions through an authorized process. A client-entered transaction ID is not proof of payment.
- Never place service-account keys, private API keys, or admin secrets in frontend code.
- The included UI can show sample data until Firebase config is filled in.

## Pages
- `index.html` — user app store
- `app.html` — app details
- `login.html` — sign in / create account
- `wallet.html` — wallet and payment request UI
- `orders.html` — order history
- `admin/index.html` — admin dashboard
- `admin/apps.html` — add/publish apps
- `admin/orders.html` — review order requests
- `admin/payments.html` — review payment requests
- `admin/banners.html` — banner/popup management

## Setup
1. Create a Firebase project.
2. Enable Authentication (Email/Password), Firestore, and Storage.
3. Your supplied Firebase Web App config is already set in `assets/js/firebase-config.js`.
4. Install Firebase CLI and initialize Firestore, Storage, and Functions.
5. Deploy backend functions and restrictive security rules before accepting real orders.
6. Push this folder to GitHub and import the repository into Vercel. Use the project root as the Vercel root directory. `vercel.json` maps `/admin` to `admin/index.html`.
7. Configure SPA/static routing only if you later change this multi-page layout.

The frontend uses Firebase modular SDK imports from gstatic CDN. An internet connection is required.


For the step-by-step Bengali deployment guide, read `VERCEL_FIREBASE_SETUP_BN.md`.
