"use client";

import { useState, useEffect } from "react";
import { Sparkles, Smile, Move, Zap, ShieldPlus, Baby, Sun, Moon } from "lucide-react";

/* ─── translations ─── */
const t = {
  ar: {
    brand: "عيادة النور",
    nav: ["الرئيسية", "خدماتنا", "عن العيادة", "تواصل معنا"],
    heroEyebrow: "عناية أسنان موثوقة في قلب أسيوط",
    heroTitle: "ابتسامتك أمانة عندنا",
    heroText: "في عيادة النور نهتم براحتك قبل العلاج، ونقدم خدمات طب وتجميل الأسنان بخبرة واضحة، تعقيم مستمر، وخطة علاج تناسب حالتك وميزانيتك.",
    heroCta1: "احجز موعدك الآن",
    heroCta2: "تعرف على خدماتنا",
    heroBadges: ["تعقيم يومي", "حجز سريع", "متابعة بعد العلاج"],
    heroImgBadge: "كشف مريح ومتابعة دقيقة",
    servicesEyebrow: "خدماتنا",
    servicesTitle: "رعاية كاملة لأسنان العائلة",
    servicesText: "خدمات أساسية وتجميلية مصممة لتناسب الأطفال والكبار، مع شرح واضح لكل خطوة قبل البدء.",
    services: [
      { title: "تنظيف الأسنان", desc: "جلسة تنظيف دقيقة لإزالة الجير والتصبغات مع إرشادات للعناية اليومية." },
      { title: "حشوات تجميلية", desc: "حشوات بلون الأسنان تعالج التسوس وتحافظ على شكل الابتسامة الطبيعي." },
      { title: "تقويم الأسنان", desc: "خطة تقويم مناسبة للحالة لتحسين انتظام الأسنان والعضة بثقة." },
      { title: "تبييض الأسنان", desc: "تبييض آمن بدرجات محسوبة للحصول على ابتسامة أفتح بدون مبالغة." },
      { title: "زراعة الأسنان", desc: "حل ثابت لتعويض الأسنان المفقودة مع متابعة دقيقة بعد الإجراء." },
      { title: "علاج أسنان الأطفال", desc: "تعامل هادئ ومطمئن مع الأطفال لتجربة علاج أسنان بلا خوف." }
    ],
    reasons: [
      { title: "دكاترة متخصصين", desc: "فريق طبي يتابع كل حالة بخطة واضحة وشرح بسيط قبل بدء العلاج." },
      { title: "أجهزة حديثة", desc: "تجهيزات تساعد على تشخيص أدق وراحة أكبر داخل غرفة الكشف." },
      { title: "أسعار واضحة", desc: "نشرح تكلفة كل خطوة قبل البدء حتى لا تظهر أي مفاجآت لاحقًا." }
    ],
    aboutEyebrow: "عن العيادة",
    aboutTitle: "خبرة محلية برعاية إنسانية",
    aboutText: "نخدم أهالي أسيوط بخدمات طب وتجميل الأسنان من خلال فريق يهتم بتفاصيل الحالة، بداية من الكشف وحتى المتابعة بعد العلاج.",
    stats: [["12+", "سنة خبرة"], ["3500+", "زيارة ناجحة"], ["98%", "رضا العملاء"]],
    reviewsTitle: "آراء عملائنا",
    reviews: [
      { name: "أ. منى عبد الرحمن", text: "أول مرة أحس إن زيارة دكتور الأسنان هادية بالشكل ده. الشرح كان واضح والمتابعة ممتازة." },
      { name: "م. أحمد ثابت", text: "عملت تنظيف وحشو تجميلي والنتيجة طبيعية جدًا. العيادة نظيفة والمواعيد محترمة." },
      { name: "د. سارة علي", text: "التعامل مع ابني كان ممتاز. الدكتور عرف يطمنه قبل العلاج وخرج مبسوط." }
    ],
    contactEyebrow: "تواصل معنا",
    contactTitle: "جاهزين نستقبلك؟",
    contactItems: ["الهاتف: 088 234 5678", "واتساب: 0100 123 4567", "العنوان: شارع الجمهورية، أسيوط", "المواعيد: السبت إلى الخميس من 2 ظهرًا حتى 10 مساءً"],
    footer: "© 2026 عيادة النور لطب وتجميل الأسنان",
    social: ["فيسبوك", "إنستجرام", "يوتيوب"],
    whatsapp: "واتساب",
    bookBtn: "احجز موعد"
  },
  en: {
    brand: "Al-Noor Dental Clinic",
    nav: ["Home", "Services", "About", "Contact"],
    heroEyebrow: "Trusted Dental Care in Assiut",
    heroTitle: "Your Smile Is Our Trust",
    heroText: "At Al-Noor, we care for you before treatment — aesthetic dental services with clear pricing and continuous follow-up.",
    heroCta1: "Book Your Appointment",
    heroCta2: "Explore Services",
    heroBadges: ["Daily Sterilization", "Quick Booking", "Post-Treatment Follow-up"],
    heroImgBadge: "Comfortable check-up & precise follow-up",
    servicesEyebrow: "Our Services",
    servicesTitle: "Complete Family Dental Care",
    servicesText: "Essential and cosmetic services designed for children and adults, with clear explanations before every step.",
    services: [
      { title: "Teeth Cleaning", desc: "Precise cleaning session to remove tartar and stains with daily care guidance." },
      { title: "Cosmetic Fillings", desc: "Tooth-colored fillings that treat decay while preserving your natural smile." },
      { title: "Orthodontics", desc: "A personalized orthodontic plan to improve teeth alignment with confidence." },
      { title: "Teeth Whitening", desc: "Safe whitening with measured shades for a brighter smile without overdoing it." },
      { title: "Dental Implants", desc: "A permanent solution for missing teeth with precise post-procedure follow-up." },
      { title: "Pediatric Dentistry", desc: "Calm and reassuring treatment for children — a fear-free dental experience." }
    ],
    reasons: [
      { title: "Expert Dentists", desc: "A medical team that follows every case with a clear plan and simple explanation." },
      { title: "Modern Equipment", desc: "Equipment that enables more accurate diagnosis and greater comfort." },
      { title: "Transparent Pricing", desc: "We explain the cost of every step upfront so there are no surprises." }
    ],
    aboutEyebrow: "About Us",
    aboutTitle: "Local Expertise with Humane Care",
    aboutText: "We serve the people of Assiut with dental and cosmetic services through a team that cares about the details of each case.",
    stats: [["12+", "Years Experience"], ["3500+", "Successful Visits"], ["98%", "Client Satisfaction"]],
    reviewsTitle: "Client Testimonials",
    reviews: [
      { name: "Mona Abdel Rahman", text: "First time I felt a dental visit could be this calm. Clear explanations and excellent follow-up." },
      { name: "Ahmed Thabet", text: "Had cleaning and cosmetic filling — the result was very natural. Clean clinic and punctual appointments." },
      { name: "Dr. Sara Ali", text: "The way they handled my son was excellent. The dentist reassured him and he left happy." }
    ],
    contactEyebrow: "Contact Us",
    contactTitle: "Ready to Welcome You",
    contactItems: ["Phone: 088 234 5678", "WhatsApp: 0100 123 4567", "Address: El-Gomhoreya St., Assiut", "Hours: Sat–Thu, 2 PM – 10 PM"],
    footer: "© 2026 Al-Noor Dental & Cosmetic Clinic",
    social: ["Facebook", "Instagram", "YouTube"],
    whatsapp: "WhatsApp",
    bookBtn: "Book Now"
  }
};

const serviceIcons = [Sparkles, Smile, Move, Zap, ShieldPlus, Baby];

export default function Home() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [dark, setDark] = useState(false);
  const c = t[lang];
  const isAr = lang === "ar";

  useEffect(() => {
    const saved = localStorage.getItem("dental-dark");
    if (saved === "true") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDark = () => {
    setDark((prev) => {
      const next = !prev;
      localStorage.setItem("dental-dark", String(next));
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  return (
    <main dir={isAr ? "rtl" : "ltr"} className="relative min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      {/* Decorative blurs */}
      <div className="pointer-events-none fixed -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-200 opacity-20 blur-3xl dark:bg-blue-900 dark:opacity-10" />
      <div className="pointer-events-none fixed -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-sky-200 opacity-20 blur-3xl dark:bg-sky-900 dark:opacity-10" />

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--bg-card)]/90 backdrop-blur-lg transition-colors">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="text-xl font-black text-[var(--primary)]">
            {c.brand}
          </a>
          <div className="hidden items-center gap-7 text-sm font-bold md:flex">
            {c.nav.map((item, i) => (
              <a key={item} className="transition hover:text-[var(--primary)]" href={["#home", "#services", "#about", "#contact"][i]}>
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleDark}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] transition hover:bg-[var(--primary)] hover:text-white"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              onClick={() => setLang(isAr ? "en" : "ar")}
              className="rounded-full border border-[var(--primary)] px-4 py-2 text-sm font-black text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white"
            >
              {isAr ? "EN" : "AR"}
            </button>
            <a
              href="https://wa.me/201001234567"
              className="hidden rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:brightness-110 dark:shadow-blue-900/30 sm:inline-flex"
            >
              {c.bookBtn}
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="overflow-hidden bg-[var(--bg-card)] pt-28 transition-colors">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center animate-fade-in-up">
            <span className="mb-5 w-fit rounded-full bg-sky-50 px-4 py-2 text-sm font-bold text-[var(--accent)] dark:bg-sky-900/30">
              {c.heroEyebrow}
            </span>
            <h1 className="font-display max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              {c.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-[var(--text-muted)]">
              {c.heroText}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/201001234567"
                className="rounded-full bg-[var(--primary)] px-7 py-4 text-center font-bold text-white shadow-xl shadow-blue-200 transition hover:-translate-y-0.5 hover:brightness-110 dark:shadow-blue-900/30"
              >
                {c.heroCta1}
              </a>
              <a
                href="#services"
                className="rounded-full border border-sky-200 bg-[var(--bg-card)] px-7 py-4 text-center font-bold text-[var(--primary)] transition hover:border-[var(--primary)] dark:border-slate-600"
              >
                {c.heroCta2}
              </a>
            </div>
            <div className="mt-10 grid gap-3 text-sm font-bold sm:grid-cols-3">
              {c.heroBadges.map((item, i) => (
                <div key={item} className={`rounded-2xl border border-[var(--border)] bg-sky-50 px-4 py-3 dark:bg-sky-900/20 animate-fade-in-up stagger-${i + 1}`}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#DBEAFE] via-white to-[#BAE6FD] p-2 shadow-2xl shadow-sky-100 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 dark:shadow-slate-900 animate-fade-in-up stagger-2">
            <div className="absolute left-8 top-8 z-10 rounded-3xl bg-white/80 px-5 py-3 text-sm font-bold text-[var(--primary)] shadow-lg backdrop-blur dark:bg-slate-800/80">
              {c.heroImgBadge}
            </div>
            <img
              src="/images/hero-clinic.jpg"
              alt={isAr ? "غرفة كشف عيادة حديثة بأجهزة متطورة" : "Modern dental clinic examination room"}
              className="h-full min-h-[350px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-black text-[var(--accent)]">{c.servicesEyebrow}</span>
          <h2 className="font-display mt-3 text-3xl font-black sm:text-4xl">{c.servicesTitle}</h2>
          <p className="mt-4 leading-8 text-[var(--text-muted)]">{c.servicesText}</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {c.services.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <article
                key={service.title}
                className={`rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-sky-100 dark:hover:shadow-sky-900/20 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[var(--primary)] dark:bg-blue-900/30">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-3 leading-7 text-[var(--text-muted)]">{service.desc}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Reasons */}
      <section className="bg-[var(--bg-card)] py-20 transition-colors">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {c.reasons.map((reason, i) => (
            <article key={reason.title} className={`rounded-3xl bg-[var(--bg)] p-7 transition-colors animate-fade-in-up stagger-${i + 1}`}>
              <div className="mb-5 h-1.5 w-16 rounded-full bg-[var(--accent)]" />
              <h3 className="text-2xl font-black">{reason.title}</h3>
              <p className="mt-4 leading-8 text-[var(--text-muted)]">{reason.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1fr] lg:px-8">
        <div className="rounded-[2rem] bg-[var(--primary)] p-8 text-white shadow-xl shadow-blue-200 dark:shadow-blue-900/30">
          <p className="text-sm font-bold text-blue-100">{c.aboutEyebrow}</p>
          <h2 className="font-display mt-3 text-3xl font-black">{c.aboutTitle}</h2>
          <p className="mt-5 leading-8 text-blue-50">{c.aboutText}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {c.stats.map(([value, label]) => (
            <div key={label} className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-6 text-center shadow-sm transition-colors">
              <div className="text-3xl font-black text-[var(--primary)]">{value}</div>
              <div className="mt-2 font-bold text-[var(--text-muted)]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[var(--bg-card)] py-20 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-black">{c.reviewsTitle}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {c.reviews.map((review, i) => (
              <article key={review.name} className={`rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-6 transition-colors animate-fade-in-up stagger-${i + 1}`}>
                <div className="text-amber-400">★★★★★</div>
                <p className="mt-4 leading-8 text-[var(--text-muted)]">&quot;{review.text}&quot;</p>
                <p className="mt-5 font-black">{review.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div>
          <span className="text-sm font-black text-[var(--accent)]">{c.contactEyebrow}</span>
          <h2 className="font-display mt-3 text-3xl font-black">{c.contactTitle}</h2>
          <div className="mt-8 grid gap-4">
            {c.contactItems.map((item) => (
              <div key={item} className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-5 font-bold shadow-sm transition-colors">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="min-h-[320px] h-full w-full overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--bg-card)] p-2 shadow-xl shadow-sky-100 dark:shadow-slate-900 transition-colors">
          <iframe
            src="https://maps.google.com/maps?q=%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AC%D9%85%D9%87%D9%85%D9%88%D8%B1%D9%8A%D8%A9%D8%8C%20%D8%A3%D8%B3%D9%8A%D9%88%D8%B7%D8%8C%20%D9%85%D8%B5%D8%B1&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="h-full min-h-[300px] w-full rounded-[1.5rem] border-0"
            allowFullScreen={true}
            loading="lazy"
            title={isAr ? "موقع عيادة النور على الخريطة" : "Al-Noor Clinic Location Map"}
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-4 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-bold">{c.footer}</p>
          <div className="flex gap-4 text-sm text-slate-300">
            {c.social.map((s) => (
              <a key={s} href="#" className="transition hover:text-white">{s}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/201001234567"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-[#16A34A] px-5 py-4 text-sm font-black text-white shadow-2xl shadow-green-300 transition hover:-translate-y-1 dark:shadow-green-900/30"
      >
        {c.whatsapp}
      </a>
    </main>
  );
}
