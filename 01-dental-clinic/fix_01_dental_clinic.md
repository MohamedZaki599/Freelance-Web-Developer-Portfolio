# عيادة النور — ملف الإصلاحات والتحسينات

## 🔍 المشاكل المكتشفة من اللقطة

1. **بطاقات الخدمات (01-06) بدون أيقونات** — مجرد رقم + عنوان + جملة. كل الكروت بتبان متشابهة ومفيش عنصر بصري يربط كل خدمة بمعناها.
2. **مفيش صور حقيقية في الموقع كله** — الهيرو، الفريق، العيادة، كل حاجة نص placeholder أو دائرة بحرف "نور".
3. **باگ تكرار واضح**: عنوان "ابتسامتك أمانة عندنا" ظاهر مرتين — مرة في الهيرو، ومرة تانية فجأة قبل قسم التواصل من غير عنوان قسم منطقي. ده غلطة توليد لازم تتصحح.
4. **تصميم الكروت مطابق لنموذج مكتب المحاماة** — نفس الكارت الأبيض بخط فوقه ورقم. لو عميل شاف الديموين، هيلاحظ إنه نفس القالب بس لون مختلف.
5. **لا يوجد تنويع بصري في الخلفية** — أبيض مستمر طول الصفحة، مفيش أي عناصر decorative تكسر الرتابة.

## 🎨 التحسينات البصرية المطلوبة

- استخدم أيقونات حقيقية من مكتبة `lucide-react` بدل الأرقام: `Sparkles` (تنظيف)، `Smile` (تجميل)، `Move` أو `AlignCenter` (تقويم)، `Zap` (تبييض)، `ShieldPlus` (زراعة)، `Baby` (أطفال) — كل أيقونة داخل دائرة خلفيتها أزرق فاتح (`bg-blue-50`).
- صحّح التكرار: امسح العنوان المكرر قبل قسم التواصل، استبدله بعنوان منطقي زي "جاهزين نستقبلك؟"
- ضيف `hover:scale-105 hover:shadow-lg transition` على كروت الخدمات.
- ضيف عناصر decorative خفيفة (دوائر زرقاء شفافة كبيرة `blur-3xl opacity-20` في زوايا الصفحة) لكسر الرتابة البصرية.

## 🖼️ استراتيجية الصور

استخدم Gemini Pro أو ChatGPT (متاحين عندك مجاناً) لتوليد الصور، حمّلها، وحطها في `public/images/`:

| الصورة | برومبت توليد مقترح |
|---|---|
| Hero (غرفة كشف) | "professional modern dental clinic interior, clean blue and white color scheme, dental chair, bright lighting, no people visible, high resolution photo" |
| قسم "عن العيادة" | "Egyptian dental team in white coats, friendly professional atmosphere, modern clinic background" |

كبديل أسرع: روح على pexels.com وابحث "dental clinic" ونزّل صورة مجانية بدون نسب حقوق.

## 🌐 دعم اللغتين (عربي/إنجليزي)

**الطريقة (بدون مكتبات i18n ثقيلة، عشان تفضل سهلة التحويل لـ WordPress بعدين):**
- اعمل object واحد فيه كل النصوص: `const translations = { ar: {...}, en: {...} }`
- `useState<'ar' | 'en'>('ar')` لتخزين اللغة الحالية
- زرار تبديل (AR/EN) في الـ Navbar
- لما اللغة `en`، غيّر `dir` على العنصر الرئيسي لـ `"ltr"`، وفي `ar` يفضل `"rtl"`
- كل نص في الكود يتسحب من `translations[lang].key` بدل النص الثابت

**محتوى إنجليزي مقترح (نقطة بداية):**
- الاسم: **Al-Noor Dental Clinic**
- Headline: *"Your Smile Is Our Trust"*
- Subtext: *"At Al-Noor, we care for you before treatment — aesthetic dental services with clear pricing and continuous follow-up."*
- زرار: *"Book Your Appointment"*

## 🌗 الوضع الفاتح والغامق

| العنصر | فاتح (موجود) | غامق (المطلوب) |
|---|---|---|
| الخلفية | white / slate-50 | slate-900 |
| النص | slate-900 | slate-50 |
| الكروت | white | slate-800 |
| اللون الأساسي | blue-600 | blue-400 (أوضح على الغامق) |

**التنفيذ:** `darkMode: 'class'` في `tailwind.config.ts` + `useState` لحفظ الوضع في `localStorage` + زرار شمس/قمر (`Sun`/`Moon` من lucide-react) جنب زرار اللغة في الـ Navbar.

---

## ✅ برومبت التنفيذ الجاهز

```
عندك مشروع Next.js 15 قائم (app/page.tsx) لموقع "عيادة النور لطب الأسنان". عايزك تعدّل عليه التعديلات الآتية بدون إعادة بناء الصفحة من الصفر:

1. الأيقونات: ركّب lucide-react (npm install lucide-react) واستبدل أرقام الخدمات (01-06) بأيقونات حقيقية (Sparkles, Smile, Move, Zap, ShieldPlus, Baby) داخل دائرة bg-blue-50، مع hover:scale-105 hover:shadow-lg transition على كل كارت.

2. باگ التكرار: امسح أي عنوان "ابتسامتك أمانة عندنا" مكرر يظهر قبل قسم التواصل، واستبدله بعنوان "جاهزين نستقبلك؟"

3. عناصر بصرية: ضيف دوائر decorative شفافة (blue-200, blur-3xl, opacity-20) في زوايا الصفحة لكسر الرتابة.

4. الصور: استبدل كل عناصر الـ placeholder (دائرة "نور"، نصوص placeholder) بـ <img> tags تشاور على public/images/hero-clinic.jpg و public/images/team.jpg (هرفعهم بنفسي بعدين، استخدم alt text مناسب دلوقتي).

5. ثنائية اللغة: اعمل object translations يحتوي كل نصوص الصفحة بالعربي والإنجليزي. اعمل useState للغة الحالية (افتراضي 'ar')، زرار تبديل AR/EN في الـ Navbar، وغيّر dir على العنصر الرئيسي تلقائياً حسب اللغة. استخدم هذا المحتوى الإنجليزي: اسم العيادة "Al-Noor Dental Clinic"، Headline "Your Smile Is Our Trust"، باقي النصوص ترجمها بنفس الأسلوب الاحترافي.

6. الوضع الفاتح/الغامق: في tailwind.config.ts ضيف darkMode: 'class'. اعمل useState لتخزين الوضع، احفظه في localStorage، وزرار تبديل (Sun/Moon من lucide-react) جنب زرار اللغة. لون الخلفية الغامق slate-900، النص slate-50، الكروت slate-800، واللون الأساسي يبقى blue-400 في الوضع الغامق بدل blue-600.

حافظ على باقي الهيكل والمحتوى العربي الموجود زي ما هو، وطبّق التعديلات دي فقط.
```
