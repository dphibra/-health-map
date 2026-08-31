// ============================================================
// مفتاح خرائط جوجل (Google Maps API Key)
// ============================================================
// طريقة الحصول عليه:
// 1) اذهب إلى https://console.cloud.google.com
// 2) أنشئ مشروع جديد (أو استخدم نفس مشروع Firebase إذا حاب توحدهم)
// 3) من القائمة: APIs & Services > Library > ابحث عن "Maps JavaScript API" وفعّلها
// 4) من APIs & Services > Credentials > Create Credentials > API key
// 5) (مهم للأمان) اضغط على المفتاح بعد إنشائه > تحت "Application restrictions"
//    اختر "Websites" وأضف رابط موقعك، مثال:
//    https://dphibra.github.io/*
// 6) انسخ المفتاح وضعه بالأسفل مكان YOUR_GOOGLE_MAPS_API_KEY
//
// ملاحظة: خرائط جوجل تتطلب ربط بطاقة بحساب Google Cloud (billing)
// حتى لو الاستخدام ضمن الحد المجاني الشهري ($200 رصيد مجاني تلقائي)،
// وهذا الاستخدام البسيط لن يتجاوزه عملياً.

export const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";
