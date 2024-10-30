import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Cấu hình Firebase của bạn
const firebaseConfig = {
    apiKey: "AIzaSyA4EIDZmEs2V8jkQR6RPeSgabYZZsyzqAk",
    authDomain: "universalyogaadmin-4145a.firebaseapp.com",
    projectId: "universalyogaadmin-4145a",
    storageBucket: "universalyogaadmin-4145a.appspot.com",
    messagingSenderId: "464207708501",
    appId: "1:464207708501:web:c1744b0d5d20ae48506fdc",
    measurementId: "G-458T7QD4GT"
  };
  
// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo Firestore
const db = getFirestore(app);

const dbName = 'yoga_classes';

export { db, dbName };

