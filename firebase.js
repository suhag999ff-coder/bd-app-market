import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-storage.js';
import { firebaseConfig } from './firebase-config.js';
const configured = firebaseConfig.apiKey !== 'YOUR_FIREBASE_WEB_API_KEY' && firebaseConfig.projectId !== 'YOUR_PROJECT_ID';
let app=null,auth=null,db=null,storage=null;
if(configured){app=initializeApp(firebaseConfig);auth=getAuth(app);db=getFirestore(app);storage=getStorage(app)}
export { configured, app, auth, db, storage };
