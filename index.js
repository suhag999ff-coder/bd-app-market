// Trusted backend starter. Add callable functions here for:
// - createOrder: validate app price and user entitlement, reserve/deduct wallet atomically.
// - reviewPaymentRequest: verify provider transaction, approve once, credit wallet ledger atomically.
// - reviewOrder: authorized admin decision, fulfill or refund exactly once.
// - assignAdminClaim: run ONLY in a trusted operator environment, never from a public client.
//
// Never trust a price, balance, admin flag, payment result, or status supplied by a browser.
// Example admin claim assignment (run from a protected local Admin SDK script, not deployed as a public endpoint):
//
// await admin.auth().setCustomUserClaims(uid, { admin: true });
//
// Deploy actual callable functions before enabling real payments or paid orders.
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
exports.health = functions.https.onCall(async (data, context) => {
  return { ok: true, message: 'NovaStore backend is configured; sensitive operations are not implemented yet.' };
});
