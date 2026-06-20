# Freelance Web Developer Portfolio — Mohamed Zaki-Dev

مرحباً بك في مستودع معرض أعمالي الموحد (**Freelance Web Developer Portfolio**). يحتوي هذا المستودع على خمسة مشاريع ديمو (Demo) متكاملة تم بناؤها باستخدام أحدث تقنيات الويب (**Next.js 15**, **TypeScript**, **Tailwind CSS**) ومجهزة بالكامل للتحويل التلقائي إلى ثيمات ووردبريس (**WordPress Themes**).

تم تطوير هذه المشاريع وتحديثها لتلبي أعلى المعايير البصرية والتقنية لتعكس مهاراتي في تطوير المواقع السريعة، المتجاوبة، ثنائية اللغة، وذات الهوية البصرية الجذابة التي تجذب العملاء.

---

## 🚀 قائمة المشاريع (Projects Directory)

| المجلد (Directory) | اسم المشروع (Project Name) | وصف المشروع (Description) | الميزات الرئيسية (Key Features) |
| :--- | :--- | :--- | :--- |
| [01-dental-clinic](file:///c:/Users/Mohamed/OneDrive/Desktop/5_demo_portfolio/01-dental-clinic) | **Al-Noor Dental Clinic** (عيادة النور) | موقع تعريفي طبي احترافي لعيادة طب وتجميل أسنان في أسيوط. | خرائط جوجل تفاعلية، وضع ليلي، دعم اللغتين (عربي/إنجليزي)، ثيم ووردبريس. |
| [02-egyptian-restaurant](file:///c:/Users/Mohamed/OneDrive/Desktop/5_demo_portfolio/02-egyptian-restaurant) | **Beit El Taem Restaurant** (مطعم بيت الطعم) | موقع دافئ وجذاب لمطعم مأكولات شعبية مصرية مع منيو ومعرض صور للأطباق. | منيو تفاعلي بأيقونات، معرض أطباق مع تلميحات تبيّن التفاصيل، ثنائية اللغة، وضع ليلي، ثيم ووردبريس. |
| [03-luxury-perfume](file:///c:/Users/Mohamed/OneDrive/Desktop/5_demo_portfolio/03-luxury-perfume) | **Dar Al Oud Perfumes** (دار العود للعطور) | موقع فخم يستهدف سوق العطور والعود الفاخر في الخليج العربي. | تصميم داكن فخم مع تفاصيل ذهبية، ثنائية اللغة بالكامل، زر تبديل فوري للغات، ثيم ووردبريس. |
| [04-law-firm](file:///c:/Users/Mohamed/OneDrive/Desktop/5_demo_portfolio/04-law-firm) | **Al-Wafaa Law Firm** (مكتب الوفاء للمحاماة) | موقع رسمي وموثوق لمكتب محاماة واستشارات قانونية. | إحصائيات تفاعلية بالأرقام، نموذج حجز استشارة مخصص، تصميم رسمي رصين، ثيم ووردبريس. |
| [05-training-academy](file:///c:/Users/Mohamed/OneDrive/Desktop/5_demo_portfolio/05-training-academy) | **Entelaq Academy** (أكاديمية انطلاق) | موقع شبابي حيوي لأكاديمية كورسات وتدريب مهارات. | قسم الكورسات متجاوب، أسئلة شائعة تفاعلية (FAQ Accordion)، نموذج تسجيل سريع، ثيم ووردبريس. |

---

## 🛠️ البنية التقنية المشتركة (Common Tech Stack)

- **Frontend Framework:** Next.js 15 (App Router) مع TypeScript.
- **Styling:** Tailwind CSS لضمان سرعة التحميل ومرونة التصميم.
- **Icons Library:** Lucide React لأيقونات متجهة سريعة وخفيفة.
- **Bilingual Support (AR/EN):** نظام ترجمة محلي خفيف ومدمج لتسهيل الانتقال السريع للمحتوى دون مكتبات معقدة.
- **Themes & Styling:** وضع مظلم/مضيء (Dark/Light Mode) ديناميكي يتم حفظه في `localStorage`.
- **WordPress Ready:** يحتوي كل مشروع على مجلد `wordpress-theme` مهيأ بأحدث تقنيات تحويل المواقع الساكنة لتعمل مباشرة كقالب ووردبريس.

---

## 📦 كيفية التشغيل والتطوير (How to Run & Build)

### 1. تشغيل التطوير المحلي (Local Development)
لتشغيل أي مشروع في وضع التطوير المحلي، توجه إلى مجلد المشروع وقم بتشغيل الأوامر التالية:
```bash
cd [project-folder-name]
npm install
npm run dev
```

### 2. بناء ثيم الووردبريس (Build WordPress Theme)
يتميز هذا البورتفوليو بوجود سكربت بناء خاص بكل مشروع (`build-wordpress-theme.mjs`) يقوم تلقائياً بـ:
1. تصدير موقع Next.js بالكامل كملفات ساكنة (`out/`).
2. نسخها لمجلد `wordpress-theme/static`.
3. **تصحيح مسارات الصور والروابط:** يقوم السكربت تلقائياً بقراءة ملفات الـ HTML والـ JS وتعديل مسارات الصور المطلقة (مثل `/images/...`) لتتوافق مع مسار ثيمات ووردبريس (`/wp-content/themes/...`) لتجنب أخطاء 404 الشهيرة.

لتوليد الثيم، قم بتشغيل الأمر التالي داخل مجلد أي مشروع:
```bash
npm run theme:build
```
بعد اكتمال التشغيل، ستجد ثيم الووردبريس جاهزاً بالكامل داخل مجلد `wordpress-theme` ويمكنك رفعه مباشرة للووردبريس أو ضغطه كملف `.zip`.

---

## ✍️ مطور البورتفوليو (Author)
**Mohamed Zaki-Dev**
- **GitHub:** [https://github.com/Mohamed-Zaki-Dev](https://github.com/Mohamed-Zaki-Dev)
- **Portfolio / Website:** [https://mohamed-zaki-dev.vercel.app](https://mohamed-zaki-dev.vercel.app)
