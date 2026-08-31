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
  apiKey: "AIzaSyDTrbOYv89j-uXzYB0wLSkfmstVmKL0DhQ",
  authDomain: "nsh-health-map.firebaseapp.com",
  projectId: "nsh-health-map",
  storageBucket: "nsh-health-map.firebasestorage.app",
  messagingSenderId: "563554533211",
  appId: "1:563554533211:web:8ca9ff96450eb01fcce47e"
};

export const FIREBASE_CONFIGURED = firebaseConfig.apiKey !== "YOUR_API_KEY";
