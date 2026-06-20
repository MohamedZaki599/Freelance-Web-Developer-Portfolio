# بيت الطعم — ملف الإصلاحات والتحسينات

## 🔍 المشاكل المكتشفة من اللقطة

1. **قسم المعرض (Gallery) كله مربعات فاضية** — 6 مستطيلات بتدرج برتقالي مكتوب عليها "1. طبق ملوخية وفراخ" إلخ، بدون أي صورة فعلية. ده أكبر مشكلة في الديمو ده لأن **المطعم بيبيع بعينه قبل لسانه** — قسم المعرض هو أهم جزء بصري في أي موقع مطعم وهو حالياً فاضي تماماً.
2. **كارت الهيرو نفس المشكلة** — دائرة "طبق" بدل صورة طبق شهي فعلي.
3. **قسم المنيو نفسه شغال كويس وظيفياً** (الأقسام والأسعار واضحة) لكن بدون أي أيقونة أو صورة مصغّرة لكل صنف — كل صنف نص فقط.
4. **العرض الخاص (وجبة عائلية)** كارت بني غامق نظيف بس برضو بدون صورة توضح الوجبة.

## 🎨 التحسينات البصرية المطلوبة

- خلي كل صنف في المنيو له أيقونة بسيطة بجانبه (`UtensilsCrossed`, `Flame`, `Soup`, `Cake` من lucide-react) حسب القسم، عشان الصفحة متبقاش نص فقط.
- في قسم المعرض، استبدل كل مربع بصورة فعلية (تفصيل تحت)، مع overlay تدرج غامق خفيف في الأسفل لقراءة النص الأبيض بوضوح.
- ضيف تأثير hover بسيط على صور المعرض (zoom-in خفيف عند المرور).

## 🖼️ استراتيجية الصور (الأولوية القصوى هنا)

هنا أهم جزء في الديمو ده. استخدم Gemini Pro أو ChatGPT لتوليد 6 صور أكل مصري احترافية:

| الصورة | برومبت توليد مقترح |
|---|---|
| طبق ملوخية وفراخ | "professional food photography, Egyptian molokhia soup with grilled chicken and rice, warm lighting, wooden table, appetizing, high resolution" |
| مشويات على الفحم | "Egyptian grilled kofta and kebab on charcoal grill, smoke, warm restaurant lighting, food photography" |
| طاجن بامية | "Egyptian okra tagine in clay pot, traditional, rustic table setting, food photography" |
| جلسة عائلية | "warm cozy Egyptian restaurant interior, family table setting, traditional decor" |
| حلويات شرقية | "Egyptian Um Ali dessert and oriental sweets, elegant plating, warm lighting" |
| ركن المطعم | "traditional Egyptian restaurant corner, warm orange lighting, cozy seating" |

كبديل أسرع: Pexels.com بالبحث بـ "Egyptian food" أو "grilled chicken" أو "Middle Eastern food" ونزّل صور مجانية.

## 🌐 دعم اللغتين (عربي/إنجليزي)

نفس الطريقة (dictionary object + useState + dir تلقائي) المستخدمة في باقي النماذج.

**محتوى إنجليزي مقترح:**
- الاسم: **Beit El Taem** (محافظ على الاسم بالعربي منقول بحروف لاتينية — أصوب تسويقياً من ترجمته)
- Headline: *"The Taste of Home... In Every Bite"*
- Subtext: *"At Beit El Taem we serve authentic Egyptian dishes with fresh ingredients, because we believe every meal should feel like home."*
- أصناف المنيو: ترجم الاسم + خلي السعر يتحول بمعادل تقريبي أو يفضل بالجنيه مع رمز EGP

## 🌗 الوضع الفاتح والغامق

| العنصر | فاتح (موجود) | غامق (المطلوب) |
|---|---|---|
| الخلفية | كريمي #FEF3E2 | بني غامق دافئ #1C1410 |
| النص | بني غامق #451A03 | كريمي فاتح #FEF3E2 |
| الكروت | أبيض/كريمي | بني غامق أفتح شوية #2A2118 |
| اللون الأساسي | orange-700 | orange-400 (أوضح وأدفى على الغامق) |

**التنفيذ:** نفس الطريقة (class strategy + localStorage + زرار Sun/Moon).

---

## ✅ برومبت التنفيذ الجاهز

```
عندك مشروع Next.js 15 قائم (app/page.tsx) لموقع "بيت الطعم" مطعم مصري. عايزك تعدّل عليه التعديلات الآتية بدون إعادة بناء الصفحة من الصفر:

1. الصور (أولوية قصوى): استبدل كل المربعات البرتقالية الفاضية في قسم المعرض (Gallery) بـ <img> tags تشاور على public/images/gallery-1.jpg إلى gallery-6.jpg (هرفعهم بنفسي، استخدم alt text وصفي مناسب لكل صورة). نفس الأمر لكارت الهيرو، استخدم public/images/hero-dish.jpg. ضيف overlay تدرج غامق (from-black/60 to-transparent) في أسفل كل صورة معرض عشان يفضل النص الأبيض مقروء، وضيف hover:scale-110 transition للتكبير الخفيف عند المرور.

2. أيقونات المنيو: ركّب lucide-react وضيف أيقونة بسيطة بجانب كل صنف في المنيو حسب نوعه (UtensilsCrossed للأطباق الرئيسية، Flame للمشويات، Soup للمقبلات، Cake للحلويات).

3. ثنائية اللغة: اعمل object translations بالعربي والإنجليزي، useState للغة الحالية، زرار تبديل AR/EN في الـ Navbar، وغيّر dir تلقائياً. استخدم: الاسم "Beit El Taem"، Headline "The Taste of Home... In Every Bite"، باقي النصوص والمنيو ترجمها بنفس الروح الدافئة.

4. الوضع الفاتح/الغامق: darkMode: 'class' في tailwind.config.ts، useState محفوظ في localStorage، زرار Sun/Moon جنب زرار اللغة. الخلفية الغامقة #1C1410 (بني غامق دافئ، مش رمادي عادي)، النص كريمي فاتح، الكروت #2A2118، اللون الأساسي orange-400.

حافظ على باقي الهيكل والمحتوى العربي الموجود زي ما هو، وطبّق التعديلات دي فقط.
```
