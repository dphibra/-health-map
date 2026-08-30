// ============================================================
// إعدادات Firebase — عدّل القيم التالية بمعلومات مشروعك من
// Firebase Console > Project Settings > Your apps > SDK setup
// ============================================================
// طريقة الحصول عليها:
// 1) اذهب إلى https://console.firebase.google.com
// 2) أنشئ مشروع جديد (مجاني - Spark plan يكفي تماماً لهذا الحجم)
// 3) من القائمة الجانبية: Build > Firestore Database > Create database
//    اختر "Start in production mode" ثم فعّل القواعد الموجودة في README
// 4) من القائمة الجانبية: Build > Authentication > Sign-in method
//    فعّل "Email/Password" وأضف حسابك كمستخدم (لتسجيل الدخول للوحة التحكم)
// 5) من Project Settings > General > Your apps > أضف "Web app"
//    وانسخ القيم بالأسفل من الكود اللي يعطيك إياه

export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// يستخدم هذا الملف كعلامة: طالما apiKey ما زال "YOUR_API_KEY"،
// الموقع يعمل تلقائياً على البيانات المحلية (data/institutions.json)
// بدل Firestore، عشان تقدر تجرب الموقع فوراً بدون أي إعداد.
export const FIREBASE_CONFIGURED = firebaseConfig.apiKey !== "YOUR_API_KEY";
