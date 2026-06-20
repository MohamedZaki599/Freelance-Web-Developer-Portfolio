"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Gem } from "lucide-react";

type Locale = "ar" | "en";

const copy = {
  ar: {
    nav: ["الرئيسية", "مجموعاتنا", "قصتنا", "تواصل"],
    heroTitle: "عبق الأصالة... بلمسة عصرية",
    heroText: "دار العود تصنع عطورًا عربية فاخرة تجمع العود النادر، المسك الهادئ، والعنبر الدافئ في تجربة تليق بالمناسبات الكبيرة واليوميات الراقية.",
    heroCta: "اكتشف المجموعة",
    eyebrow: "عطور خليجية فاخرة",
    featuredTitle: "المجموعات المميزة",
    featuredText: "مختارات مصممة لمن يبحث عن حضور ثابت ورائحة لا تمر مرورًا عابرًا.",
    storyTitle: "قصة دار العود",
    storyText: "بدأت دار العود من تقدير عميق للتراث العربي في صناعة العطور. نختار المكونات بعناية، ونوازن بين كثافة العود ونعومة المسك ودفء العنبر لنقدم عطرًا يحمل هوية واضحة دون صخب.",
    bestTitle: "الأكثر مبيعًا",
    reviewsTitle: "آراء العملاء",
    contactTitle: "إصدارات محدودة وطلبات خاصة",
    contactText: "اشترك لمعرفة الإصدارات الجديدة أو تواصل معنا لطلبات الهدايا والمناسبات.",
    emailPlaceholder: "بريدك الإلكتروني",
    subscribe: "اشترك الآن",
    whatsapp: "واتساب خاص",
    footer: "© 2026 دار العود. جميع الحقوق محفوظة.",
    privacy: "سياسة الخصوصية",
    add: "أضف للسلة"
  },
  en: {
    nav: ["Home", "Collections", "Our Story", "Contact"],
    heroTitle: "Heritage in Every Drop",
    heroText: "Dar Al Oud creates luxury Arabian perfumes with rare oud, soft musk, and warm amber for customers who value presence, craft, and timeless elegance.",
    heroCta: "Explore Collection",
    eyebrow: "Luxury Arabian Perfumes",
    featuredTitle: "Featured Collections",
    featuredText: "Curated scents for those who want a refined signature that lingers with quiet confidence.",
    storyTitle: "The Dar Al Oud Story",
    storyText: "Dar Al Oud began with deep respect for Arabian perfumery. Every blend balances the depth of oud, the softness of musk, and the warmth of amber to create a scent with a distinct identity.",
    bestTitle: "Best Sellers",
    reviewsTitle: "Customer Notes",
    contactTitle: "Limited Releases and Private Orders",
    contactText: "Join the list for new releases or contact us for gifting and private perfume requests.",
    emailPlaceholder: "Your email address",
    subscribe: "Subscribe",
    whatsapp: "Private WhatsApp",
    footer: "© 2026 Dar Al Oud. All rights reserved.",
    privacy: "Privacy Policy",
    add: "Add to Cart"
  }
} as const;

const products = [
  { arName: "عود النخبة", enName: "Elite Oud", price: "420 SAR", arDesc: "عود عميق بنهاية دافئة تناسب الأمسيات الرسمية.", enDesc: "Deep oud with a warm finish for formal evenings.", img: "/images/perfume-1.jpg" },
  { arName: "مسك المها", enName: "Al Maha Musk", price: "350 SAR", arDesc: "مسك ناعم ونظيف بحضور هادئ يناسب الاستخدام اليومي.", enDesc: "Soft clean musk with a calm everyday presence.", img: "/images/perfume-2.jpg" },
  { arName: "عنبر الرياض", enName: "Riyadh Amber", price: "390 SAR", arDesc: "عنبر غني مع لمسة توابل خفيفة وثبات طويل.", enDesc: "Rich amber with subtle spice and long-lasting depth.", img: "/images/perfume-3.jpg" },
  { arName: "ليلة خليجية", enName: "Gulf Night", price: "460 SAR", arDesc: "مزيج فاخر من العود والورد ولمسة دخان ناعمة.", enDesc: "A refined blend of oud, rose, and soft smoky notes.", img: "/images/perfume-4.jpg" }
];

const bestSellers = [
  { ar: "بخور السلطان", en: "Sultan Incense", price: "280 SAR", img: "/images/perfume-1.jpg" },
  { ar: "ورد الطائف", en: "Taif Rose", price: "320 SAR", img: "/images/perfume-2.jpg" },
  { ar: "مسك أبيض", en: "White Musk", price: "260 SAR", img: "/images/perfume-3.jpg" },
  { ar: "عود خاص", en: "Private Oud", price: "520 SAR", img: "/images/perfume-4.jpg" }
];

const reviews = [
  { arName: "نورة العتيبي", enName: "Noura Alotaibi", arText: "الرائحة فخمة وثابتة بدون ما تكون ثقيلة. التغليف مناسب جدًا للهدايا.", enText: "The scent is luxurious and lasting without feeling heavy. The packaging is perfect for gifting." },
  { arName: "سالم المنصوري", enName: "Salem Al Mansoori", arText: "عود النخبة أصبح عطري الأساسي في المناسبات. واضح أن التركيبة معمولة بعناية.", enText: "Elite Oud became my main occasion scent. The blend feels carefully crafted." },
  { arName: "ريم القحطاني", enName: "Reem Alqahtani", arText: "طلبت هدية خاصة ووصلت بتفاصيل راقية. التجربة كاملة ممتازة.", enText: "I ordered a private gift and it arrived beautifully detailed. The full experience was excellent." }
];

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ar");
  const [lightMode, setLightMode] = useState(false);
  const isArabic = locale === "ar";
  const t = copy[locale];

  useEffect(() => {
    const saved = localStorage.getItem("perfume-light");
    if (saved === "true") { setLightMode(true); document.documentElement.classList.add("light-mode"); }
  }, []);

  const toggleTheme = () => {
    setLightMode((prev) => {
      const next = !prev;
      localStorage.setItem("perfume-light", String(next));
      document.documentElement.classList.toggle("light-mode", next);
      return next;
    });
  };

  return (
    <main dir={isArabic ? "rtl" : "ltr"} className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/75 backdrop-blur-lg transition-colors">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="text-xl font-black tracking-wide text-[var(--gold)]">
            {isArabic ? "دار العود" : "Dar Al Oud"}
          </a>
          <div className="hidden items-center gap-7 text-sm font-semibold text-[var(--text-muted)] md:flex">
            {t.nav.map((item, index) => (
              <a key={item} className="transition hover:text-[var(--gold)]" href={["#home", "#collections", "#story", "#contact"][index]}>{item}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={toggleTheme} className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--gold)]/40 text-[var(--gold)] transition hover:bg-[var(--gold)] hover:text-[var(--bg)]" aria-label="Toggle theme">
              {lightMode ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button type="button" onClick={() => setLocale(isArabic ? "en" : "ar")} className="rounded-full border border-[var(--gold)]/60 px-4 py-2 text-sm font-black text-[var(--gold)] transition hover:bg-[var(--gold)] hover:text-[var(--bg)]">
              {isArabic ? "EN" : "AR"}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--bg-accent)_0%,var(--bg)_48%,var(--bg)_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center animate-fade-in-up">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--gold)]/40 px-4 py-2 text-sm font-bold text-[var(--gold)]">
              <Gem size={16} />
              {t.eyebrow}
            </span>
            <h1 className="font-display max-w-3xl text-4xl font-black leading-tight sm:text-6xl">{t.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-[var(--text-muted)]">{t.heroText}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#collections" className="rounded-full bg-[var(--gold)] px-7 py-4 text-center font-black text-[#0A0A0A] shadow-xl shadow-[var(--gold)]/20 transition hover:-translate-y-0.5">{t.heroCta}</a>
              <a href="https://wa.me/966500000000" className="rounded-full border border-[var(--gold)]/50 px-7 py-4 text-center font-black text-[var(--gold)] transition hover:bg-[var(--gold)]/10">{t.whatsapp}</a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--gold)]/30 bg-[var(--bg-card)] p-3 shadow-2xl animate-fade-in-up stagger-2 gold-glow-hover transition-all duration-500">
            <img
              src="/images/hero-bottle.jpg"
              alt={isArabic ? "زجاجة عطر فاخرة من دار العود" : "Luxury Dar Al Oud perfume bottle"}
              className="min-h-[390px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-black text-[var(--gold)]">{isArabic ? "مختاراتنا" : "Our Picks"}</span>
          <h2 className="font-display mt-3 text-3xl font-black sm:text-4xl">{t.featuredTitle}</h2>
          <p className="mt-4 leading-8 text-[var(--text-muted)]">{t.featuredText}</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <article key={product.enName} className={`rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--gold)]/60 gold-glow-hover animate-fade-in-up stagger-${i + 1}`}>
              <div className="mb-5 aspect-[4/5] overflow-hidden rounded-2xl">
                <img src={product.img} alt={isArabic ? product.arName : product.enName} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
              </div>
              <h3 className="text-xl font-black">{isArabic ? product.arName : product.enName}</h3>
              <p className="mt-3 min-h-16 leading-7 text-[var(--text-muted)]">{isArabic ? product.arDesc : product.enDesc}</p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="font-black text-[var(--gold)]">{product.price}</span>
                <button className="rounded-full bg-[var(--gold)] px-4 py-2 text-sm font-black text-[#0A0A0A]" type="button">{t.add}</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Story */}
      <section id="story" className="border-y border-[var(--border)] bg-[var(--bg-card)] py-20 transition-colors">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1fr] lg:px-8">
          <div>
            <span className="text-sm font-black text-[var(--gold)]">{isArabic ? "الحرفة والتراث" : "Craft and Heritage"}</span>
            <h2 className="font-display mt-3 text-3xl font-black sm:text-4xl">{t.storyTitle}</h2>
          </div>
          <p className="text-lg leading-9 text-[var(--text-muted)]">{t.storyText}</p>
        </div>
      </section>

      {/* Best Sellers - Upgraded to cards with images */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-black">{t.bestTitle}</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((item, i) => (
            <article key={item.en} className={`group rounded-3xl border border-[var(--border)] bg-[var(--bg-accent)] p-5 transition duration-300 hover:border-[var(--gold)]/60 gold-glow-hover animate-fade-in-up stagger-${i + 1}`}>
              <div className="mb-4 aspect-square overflow-hidden rounded-2xl">
                <img src={item.img} alt={isArabic ? item.ar : item.en} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <h3 className="text-xl font-black">{isArabic ? item.ar : item.en}</h3>
              <p className="mt-3 font-black text-[var(--gold)]">{item.price}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20" style={{ background: lightMode ? '#EBE3D5' : '#F5F0E8', color: lightMode ? '#0A0A0A' : '#0A0A0A' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-black">{t.reviewsTitle}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.enName} className="rounded-3xl bg-white p-6 shadow-sm">
                <div className="text-[var(--gold)]">★★★★★</div>
                <p className="mt-4 leading-8 text-[#3D2817]">&quot;{isArabic ? review.arText : review.enText}&quot;</p>
                <p className="mt-5 font-black">{isArabic ? review.arName : review.enName}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <div>
          <span className="text-sm font-black text-[var(--gold)]">{isArabic ? "تواصل" : "Contact"}</span>
          <h2 className="font-display mt-3 text-3xl font-black sm:text-4xl">{t.contactTitle}</h2>
          <p className="mt-5 max-w-2xl leading-8 text-[var(--text-muted)]">{t.contactText}</p>
          <form className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="email">{t.emailPlaceholder}</label>
            <input id="email" type="email" placeholder={t.emailPlaceholder} className="min-h-14 flex-1 rounded-full border border-[var(--gold)]/25 bg-[var(--bg-card)] px-5 text-[var(--text)] outline-none ring-[var(--gold)] placeholder:text-[var(--text-muted)] focus:ring-2 transition-colors" />
            <button type="button" className="rounded-full bg-[var(--gold)] px-7 py-4 font-black text-[#0A0A0A]">{t.subscribe}</button>
          </form>
        </div>
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--bg-card)] p-7 transition-colors">
          <p className="text-sm font-black text-[var(--gold)]">Instagram</p>
          <p className="mt-3 text-2xl font-black">@daraloud</p>
          <a href="https://wa.me/966500000000" className="mt-8 inline-flex rounded-full border border-[var(--gold)] px-6 py-3 font-black text-[var(--gold)] transition hover:bg-[var(--gold)] hover:text-[#0A0A0A]">{t.whatsapp}</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] px-4 py-10 transition-colors">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer}</p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="transition hover:text-[var(--gold)]">Instagram</a>
            <a href="#" className="transition hover:text-[var(--gold)]">WhatsApp</a>
            <a href="#" className="transition hover:text-[var(--gold)]">{t.privacy}</a>
          </div>
        </div>
      </footer>

      {/* FAB */}
      <a href="https://wa.me/966500000000" className="fixed bottom-5 right-5 z-50 rounded-full bg-[var(--gold)] px-5 py-4 text-sm font-black text-[#0A0A0A] shadow-2xl shadow-[var(--gold)]/25 transition hover:-translate-y-1">{t.whatsapp}</a>
    </main>
  );
}
