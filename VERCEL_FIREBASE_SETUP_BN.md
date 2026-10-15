# Vercel + Firebase Setup (বাংলা)

## 1) Firebase config কোথায় বসানো হয়েছে?
আপনার দেওয়া config ইতিমধ্যে `assets/js/firebase-config.js` ফাইলে যোগ করা হয়েছে। আলাদা করে আর config বসাতে হবে না।

## 2) GitHub-এ আপলোড
1. ZIP extract করুন।
2. Extract করা `pro_app_store` ফোল্ডারের ভেতরের সব ফাইল (ফোল্ডারসহ) একটি GitHub repository-তে upload করুন। `index.html`, `vercel.json`, `firebase.json` যেন repository root-এ থাকে।
3. GitHub-এ commit/push করুন।

## 3) Vercel deploy
1. Vercel-এ লগইন করে **Add New → Project** চাপুন।
2. GitHub repository import করুন।
3. Framework Preset: **Other** রাখুন।
4. Root Directory repository root রাখুন। Build Command ও Output Directory ফাঁকা/ডিফল্ট রাখুন; এটি static HTML project।
5. **Deploy** চাপুন।
6. Deploy শেষ হলে পাওয়া domain খুলুন। Admin panel: `https://আপনার-domain.vercel.app/admin`। `vercel.json`-এ এই route সেট করা আছে।

## 4) Firebase Console সেটআপ
Firebase Console-এ `app-market-329c6` project খুলুন:
1. **Authentication → Sign-in method → Email/Password** enable করুন।
2. **Firestore Database** তৈরি করুন।
3. **Storage** চালু করুন এবং প্রয়োজন হলে Firebase plan/billing requirement যাচাই করুন।
4. Authentication-এর **Authorized domains**-এ আপনার Vercel domain যোগ করুন (যেমন `your-project.vercel.app`)।
5. Firestore Rules ও Storage Rules যাচাই না করে production data বা payment চালু করবেন না। Rules deploy করতে Firebase CLI ব্যবহার করুন।

## 5) Admin access খুব গুরুত্বপূর্ণ
শুধু `/admin` URL জানা থাকলেই নিরাপদ admin হওয়া যায় না। Firebase Authentication user-এর token-এ `admin: true` custom claim থাকতে হবে। এই claim অবশ্যই trusted Admin SDK environment থেকে সেট করতে হবে—browser code বা সাধারণ user profile field দিয়ে নয়। Starter project-এ claim তৈরির public UI নেই।

## 6) Payment/order বিষয়ে
bKash/Nagad/Rocket-এর Transaction ID লিখলেই payment verified হয় না। এই starter project-এর payment approval, wallet credit/debit, paid order creation এবং refund-এর trusted Cloud Functions এখনো সম্পূর্ণ implement করা হয়নি। বাস্তব টাকা নেওয়ার আগে provider-এর অনুমোদিত verification flow এবং server-side functions তৈরি ও পরীক্ষা করতে হবে।

## 7) API key সম্পর্কে
Firebase Web API key frontend config-এ থাকা স্বাভাবিক; এটি password/service-account key নয়। তবু Firebase Security Rules, Authentication, authorized domains এবং প্রয়োজনীয় API restrictions ঠিক রাখুন। Service-account JSON বা private credentials কখনো GitHub/Vercel frontend-এ দেবেন না।
