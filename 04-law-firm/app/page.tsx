"use client";

import { useState, useEffect } from "react";
import {
  Scale,
  FileText,
  Briefcase,
  Gavel,
  Landmark,
  Handshake,
  Award,
  BadgeCheck,
  Sun,
  Moon,
  Globe,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";

type Locale = "ar" | "en";

const translations = {
  ar: {
    brand: "مكتب الوفاء",
    tagline: "للمحاماة والاستشارات القانونية",
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      achievements: "إنجازاتنا",
      team: "فريق العمل",
      testimonials: "آراء العملاء",
      contact: "تواصل معنا"
    },
    cta: {
      freeConsultation: "استشارة مجانية",
      bookNow: "احجز استشارتك",
      ourServices: "تعرف على خدماتنا",
      send: "إرسال طلب الاستشارة",
      whatsapp: "استشارة واتساب"
    },
    hero: {
      badge: "محاماة واستشارات قانونية موثوقة",
      headline: "خبرة قانونية تحميك في كل خطوة",
      subtext: "نقدم استشارات قانونية منظمة للأفراد وأصحاب الأعمال داخل مصر وللعملاء العرب عن بعد، مع خصوصية كاملة وشرح واضح لكل خيار قانوني."
    },
    services: {
      badge: "خدماتنا المتميزة",
      title: "تخصصات قانونية تخدم قرارك",
      subtitle: "نعرض الخدمة القانونية بلغة واضحة، مع تحديد الخطوات والمخاطر والتوقعات قبل البدء.",
      items: [
        {
          title: "الاستشارات القانونية",
          description: "استشارة واضحة تساعدك تفهم موقفك القانوني والخطوات المتاحة قبل اتخاذ القرار."
        },
        {
          title: "تأسيس الشركات",
          description: "إجراءات تأسيس الشركات وصياغة المستندات الأساسية بما يناسب طبيعة النشاط."
        },
        {
          title: "العقود والاتفاقيات",
          description: "صياغة ومراجعة عقود تحمي مصالحك وتقلل احتمالات النزاع مستقبلًا."
        },
        {
          title: "القضايا التجارية",
          description: "تمثيل قانوني في المنازعات التجارية ومتابعة دقيقة للإجراءات والمواعيد."
        },
        {
          title: "الاستشارات الضريبية",
          description: "توجيه قانوني للتعامل مع الالتزامات الضريبية وتقليل المخاطر النظامية."
        },
        {
          title: "التحكيم وحل المنازعات",
          description: "حلول تفاوضية وتحكيمية توازن بين حماية الحق وتقليل تكلفة النزاع."
        }
      ]
    },
    achievements: {
      badge: "مسيرة النجاح",
      title: "إنجازات تدل على الكفاءة والالتزام",
      items: [
        { value: "+15", label: "سنة خبرة" },
        { value: "+500", label: "قضية منتهية" },
        { value: "+200", label: "عميل راضٍ" },
        { value: "95%", label: "نسبة نجاح" }
      ]
    },
    team: {
      badge: "شركاء النجاح",
      title: "محامون متخصصون لكل مسار",
      items: [
        {
          name: "أ. محمود الوفائي",
          role: "قضايا تجارية وتأسيس شركات",
          bio: "خبرة واسعة في تمثيل الشركات ومراجعة العقود التجارية وصياغتها باحترافية."
        },
        {
          name: "أ. نهى سامي",
          role: "عقود واستشارات ضريبية",
          bio: "متخصصة في صياغة الاتفاقيات وتجنب النزاعات الضريبية وتقليل المخاطر القانونية."
        },
        {
          name: "أ. كريم عادل",
          role: "تحكيم ومنازعات",
          bio: "يتابع المنازعات بإجراءات منظمة وحلول عملية للتسوية من خلال التفاوض والتحكيم."
        }
      ]
    },
    testimonials: {
      title: "ماذا يقول عملاؤنا؟",
      subtitle: "نعتز بثقة عملائنا ونسعى دائماً لتقديم الأفضل لحماية مصالحهم.",
      items: [
        {
          name: "صاحب شركة توريدات",
          text: "مراجعة العقود كانت دقيقة وواضحة. عرفنا نقاط الخطر قبل توقيع الاتفاق وممتنون لسرعة الرد."
        },
        {
          name: "مستثمر عربي",
          text: "التواصل عن بعد كان منظمًا للغاية، والاستشارة ساعدتنا نفهم خطوات التأسيس في مصر بكل سلاسة."
        },
        {
          name: "عميل تجاري",
          text: "المكتب ملتزم بالمواعيد وبيشرح الموقف القانوني بدون تعقيد أو وعود مبالغ فيها."
        }
      ]
    },
    contact: {
      badge: "تواصل معنا",
      title: "احجز استشارة بسرية كاملة",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        subject: "الموضوع / القضية",
        message: "تفاصيل الاستشارة",
        success: "تم إرسال طلبك بنجاح! سنتواصل معك قريباً."
      },
      info: {
        title: "بيانات المكتب",
        phone: "الهاتف: 088 765 4321",
        whatsapp: "واتساب: 0100 555 7788",
        address: "العنوان: شارع الجمهورية، أسيوط",
        hours: "ساعات العمل: السبت إلى الخميس، 10 صباحًا حتى 7 مساءً",
        confidentiality: "كل البيانات المرسلة عبر النموذج يتم التعامل معها بسرية تامة ومحمية ضمن حدود القانون المهني للمحاماة."
      }
    },
    footer: {
      rights: "© 2026 مكتب الوفاء للمحاماة والاستشارات القانونية. جميع الحقوق محفوظة.",
      links: {
        linkedin: "لينكدإن",
        facebook: "فيسبوك",
        hours: "ساعات العمل"
      }
    }
  },
  en: {
    brand: "Al-Wafa",
    tagline: "Law Firm & Legal Consultations",
    nav: {
      home: "Home",
      services: "Services",
      achievements: "Achievements",
      team: "Our Team",
      testimonials: "Testimonials",
      contact: "Contact Us"
    },
    cta: {
      freeConsultation: "Free Consultation",
      bookNow: "Book a Consultation",
      ourServices: "Explore Services",
      send: "Send Consultation Request",
      whatsapp: "WhatsApp Consultation"
    },
    hero: {
      badge: "Trusted Legal Advocacy & Counsel",
      headline: "Legal Expertise That Protects You at Every Step",
      subtext: "We provide structured legal consultations for individuals and business owners across Egypt and international Arab clients remotely, with complete confidentiality and a clear explanation of every legal option."
    },
    services: {
      badge: "Our Practice Areas",
      title: "Legal Fields Serving Your Goals",
      subtitle: "We present legal solutions in plain language, detailing the steps, risks, and projections before we begin.",
      items: [
        {
          title: "Legal Consultations",
          description: "Clear advisory helping you understand your legal position and options before making decisions."
        },
        {
          title: "Corporate Setup",
          description: "Procedures for establishing corporations and drafting foundation documents customized to your business."
        },
        {
          title: "Contracts & Agreements",
          description: "Drafting and reviewing contracts that protect your interests and minimize future conflict risks."
        },
        {
          title: "Commercial Litigation",
          description: "Legal representation in commercial disputes with precise tracking of litigation steps and deadlines."
        },
        {
          title: "Tax Consultation",
          description: "Legal guidance to manage tax compliance, obligations, and reducing systemic risks."
        },
        {
          title: "Arbitration & Dispute Resolution",
          description: "Negotiated and arbitrated solutions balancing rights protection and cost optimization."
        }
      ]
    },
    achievements: {
      badge: "Our Legacy",
      title: "Milestones Reflecting Quality & Dedication",
      items: [
        { value: "+15", label: "Years of Experience" },
        { value: "+500", label: "Closed Cases" },
        { value: "+200", label: "Satisfied Clients" },
        { value: "95%", label: "Success Rate" }
      ]
    },
    team: {
      badge: "Our Professionals",
      title: "Specialized Attorneys for Every Dispute",
      items: [
        {
          name: "Mr. Mahmoud Al-Wafai",
          role: "Commercial Litigation & Business Setup",
          bio: "Extensive experience representing corporations, drafting, and reviewing business contracts with extreme precision."
        },
        {
          name: "Ms. Noha Sami",
          role: "Contracts & Tax Advisory",
          bio: "Specialized in agreement structures, avoiding tax disputes, and mitigating legal risks for emerging startups."
        },
        {
          name: "Mr. Karim Adel",
          role: "Arbitration & Settlement",
          bio: "Tracks lawsuits with an organized procedure, utilizing practical dispute resolution methods through negotiation and mediation."
        }
      ]
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "We cherish our clients' trust and constantly strive to deliver the highest standards of legal representation.",
      items: [
        {
          name: "Supply Company Owner",
          text: "Contract reviews were extremely meticulous and clear. We understood risk points before signing. Grateful for their quick response."
        },
        {
          name: "Arab Investor",
          text: "Remote communication was highly structured. The consultation helped us seamlessly understand the setup steps in Egypt."
        },
        {
          name: "Commercial Client",
          text: "The firm is strictly committed to deadlines and explains the legal status plainly without complexity or exaggerated promises."
        }
      ]
    },
    contact: {
      badge: "Contact Us",
      title: "Schedule a Meticulously Confidential Counsel",
      form: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject / Case Title",
        message: "Consultation Details",
        success: "Request sent successfully! We will contact you shortly."
      },
      info: {
        title: "Office Information",
        phone: "Phone: 088 765 4321",
        whatsapp: "WhatsApp: +20 100 555 7788",
        address: "Address: Al-Gomhouria Street, Assiut",
        hours: "Working Hours: Sat - Thu, 10:00 AM - 07:00 PM",
        confidentiality: "All data submitted through this form is handled with utmost confidentiality and protected within the bounds of professional legal privilege."
      }
    },
    footer: {
      rights: "© 2026 Al-Wafa Law Firm & Legal Consultations. All rights reserved.",
      links: {
        linkedin: "LinkedIn",
        facebook: "Facebook",
        hours: "Working Hours"
      }
    }
  }
};

const serviceIcons = [Scale, FileText, Briefcase, Gavel, Landmark, Handshake];

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ar");
  const [darkMode, setDarkMode] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Theme initialization
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }

    // Locale initialization
    const savedLocale = localStorage.getItem("locale") as Locale;
    if (savedLocale === "ar" || savedLocale === "en") {
      setLocale(savedLocale);
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !darkMode;
    setDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleLocale = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";
    setLocale(nextLocale);
    localStorage.setItem("locale", nextLocale);
  };

  const currentT = translations[locale];
  const isRtl = locale === "ar";

  return (
    <main
      className={`min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-100 ${
        isRtl ? "rtl" : "ltr"
      }`}
      style={{ direction: isRtl ? "rtl" : "ltr" }}
    >
      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-900/95">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <a href="#home" className="flex flex-col">
              <span className="font-serif-luxury text-2xl font-black tracking-tight text-slate-900 dark:text-amber-500">
                {currentT.brand}
              </span>
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
                {currentT.tagline}
              </span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-7 text-sm font-bold text-slate-700 dark:text-slate-300 md:flex">
            <a className="transition hover:text-amber-600 dark:hover:text-amber-500" href="#home">
              {currentT.nav.home}
            </a>
            <a className="transition hover:text-amber-600 dark:hover:text-amber-500" href="#services">
              {currentT.nav.services}
            </a>
            <a className="transition hover:text-amber-600 dark:hover:text-amber-500" href="#achievements">
              {currentT.nav.achievements}
            </a>
            <a className="transition hover:text-amber-600 dark:hover:text-amber-500" href="#team">
              {currentT.nav.team}
            </a>
            <a className="transition hover:text-amber-600 dark:hover:text-amber-500" href="#testimonials">
              {currentT.nav.testimonials}
            </a>
            <a className="transition hover:text-amber-600 dark:hover:text-amber-500" href="#contact">
              {currentT.nav.contact}
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Language Switch */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1 rounded-full p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition"
              title={locale === "ar" ? "English" : "العربية"}
              id="lang-toggle-btn"
            >
              <Globe className="h-5 w-5" />
              <span className="text-xs font-bold uppercase">{locale === "ar" ? "EN" : "AR"}</span>
            </button>

            {/* Dark Mode Switch */}
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition"
              title="Toggle Theme"
              id="theme-toggle-btn"
            >
              {darkMode ? <Sun className="h-5 w-5 text-amber-500" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* CTA button (Desktop only) */}
            <a
              href="#contact"
              className="hidden rounded-full bg-amber-600 px-5 py-2.5 text-sm font-black text-white shadow-md shadow-amber-600/20 transition hover:bg-amber-700 hover:shadow-lg dark:bg-amber-600 dark:hover:bg-amber-700 sm:block"
            >
              {currentT.cta.freeConsultation}
            </a>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="block rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800 md:hidden"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white/95 px-4 py-4 dark:border-slate-800 dark:bg-slate-900 md:hidden">
            <div className="flex flex-col gap-4 text-sm font-bold text-slate-700 dark:text-slate-300">
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-amber-600 dark:hover:text-amber-500"
                href="#home"
              >
                {currentT.nav.home}
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-amber-600 dark:hover:text-amber-500"
                href="#services"
              >
                {currentT.nav.services}
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-amber-600 dark:hover:text-amber-500"
                href="#achievements"
              >
                {currentT.nav.achievements}
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-amber-600 dark:hover:text-amber-500"
                href="#team"
              >
                {currentT.nav.team}
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-amber-600 dark:hover:text-amber-500"
                href="#testimonials"
              >
                {currentT.nav.testimonials}
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-amber-600 dark:hover:text-amber-500"
                href="#contact"
              >
                {currentT.nav.contact}
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#contact"
                className="w-full text-center rounded-full bg-amber-600 px-5 py-2.5 text-sm font-black text-white shadow-md transition hover:bg-amber-700"
              >
                {currentT.cta.freeConsultation}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative overflow-hidden bg-slate-900 text-white dark:bg-slate-950">
        {/* Background gradient decorative glow */}
        <div className="absolute top-0 right-0 -mr-40 h-[600px] w-[600px] rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center animate-fade-in-up">
            <span className="mb-5 w-fit rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs sm:text-sm font-black text-amber-300">
              {currentT.hero.badge}
            </span>
            <h1 className="max-w-3xl font-serif-luxury text-4xl font-black leading-tight sm:text-5xl lg:text-6xl text-slate-50">
              {currentT.hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-8 text-slate-300">
              {currentT.hero.subtext}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-amber-600 px-7 py-4 text-center font-black text-white shadow-xl shadow-amber-600/25 transition-transform hover:-translate-y-0.5 hover:bg-amber-700"
              >
                {currentT.cta.bookNow}
              </a>
              <a
                href="#services"
                className="rounded-full border border-slate-600 px-7 py-4 text-center font-black text-slate-200 transition hover:bg-white/5 hover:border-slate-400"
              >
                {currentT.cta.ourServices}
              </a>
            </div>
          </div>

          {/* Hero image wrapping container */}
          <div className="flex items-center justify-center animate-fade-in-up" style={{ animationDelay: "150ms" }}>
            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/5 p-4 sm:p-5 shadow-2xl backdrop-blur-md">
              <div className="overflow-hidden rounded-[2rem] w-full max-w-sm sm:max-w-md aspect-[4/5] relative">
                <img
                  src="/images/hero-office.jpg"
                  alt="Al-Wafa Law Firm Office"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized box gradient if image is not loaded yet
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-amber-400 bg-slate-900/80 text-2xl font-black text-amber-400 shadow-md">
                    W
                  </div>
                  <p className="text-lg font-black text-white font-serif-luxury">Al-Wafa Law Firm</p>
                  <p className="mt-1 text-xs text-amber-300 uppercase tracking-wider">Integrity • Diligence • Trust</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center mx-auto mb-16">
          <span className="inline-block rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-black text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 uppercase tracking-widest">
            {currentT.services.badge}
          </span>
          <h2 className="mt-4 font-serif-luxury text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
            {currentT.services.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {currentT.services.subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentT.services.items.map((service, index) => {
            const IconComponent = serviceIcons[index] || Scale;
            return (
              <article
                key={service.title}
                className={`group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-800/60 ${
                  isRtl ? "border-r-4 border-r-amber-600" : "border-l-4 border-l-amber-600"
                }`}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 group-hover:scale-110 transition-transform">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="font-serif-luxury text-xl font-black text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* ACHIEVEMENTS / STATS SECTION */}
      <section id="achievements" className="bg-slate-100 dark:bg-slate-800/40 py-16 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900/70">
            <div className="mb-8 text-center">
              <span className="text-xs font-black tracking-widest text-amber-600 dark:text-amber-400 uppercase">
                {currentT.achievements.badge}
              </span>
              <h3 className="mt-2 text-2xl font-black text-slate-900 dark:text-white font-serif-luxury">
                {currentT.achievements.title}
              </h3>
            </div>
            <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
              {currentT.achievements.items.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center p-6 text-center border-b border-slate-100 last:border-b-0 sm:border-b-0 sm:border-r dark:border-slate-800/60 last:border-r-0 ltr:sm:border-r-0 ltr:sm:border-l"
                >
                  <div className="mb-3 flex items-center justify-center rounded-full bg-amber-500/10 p-3 text-amber-600 dark:text-amber-400">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="font-serif-luxury text-4xl font-black text-amber-600 dark:text-amber-400">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center mx-auto mb-16">
          <span className="inline-block rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-black text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 uppercase tracking-widest">
            {currentT.team.badge}
          </span>
          <h2 className="mt-4 font-serif-luxury text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
            {currentT.team.title}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {currentT.team.items.map((member, index) => (
            <article
              key={member.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-200/60 dark:border-slate-850 dark:bg-slate-800/80 flex flex-col h-full hover:shadow-lg transition duration-300"
            >
              {/* Lawyer Headshot Container */}
              <div className="aspect-[3/4] relative bg-slate-200 overflow-hidden">
                <img
                  src={`/images/lawyer-${index + 1}.${index === 2 ? "png" : "jpg"}`}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // fallback to gradient if needed
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent opacity-65 group-hover:opacity-75 transition-opacity" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs font-black uppercase tracking-wider">
                    <BadgeCheck className="h-4 w-4" />
                    <span>AL-WAFA SENIOR COUNSEL</span>
                  </div>
                </div>
              </div>

              {/* Lawyer Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif-luxury text-2xl font-black text-slate-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="mt-1.5 text-sm font-bold text-amber-600 dark:text-amber-400">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 flex-grow">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="bg-slate-900 py-20 text-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-black tracking-widest text-amber-400 uppercase">
              {locale === "ar" ? "ثقة ومصداقية" : "Trust & Credibility"}
            </span>
            <h2 className="mt-2 font-serif-luxury text-3xl font-black text-white sm:text-4xl">
              {currentT.testimonials.title}
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              {currentT.testimonials.subtitle}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {currentT.testimonials.items.map((testimonial) => (
              <article
                key={testimonial.name}
                className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm hover:border-amber-500/40 hover:bg-white/10 transition duration-300"
              >
                <span className="absolute top-5 right-5 text-4xl font-serif-luxury text-amber-500/20">“</span>
                <p className="relative leading-relaxed text-slate-200 text-sm sm:text-base italic">
                  {testimonial.text}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 font-black text-xs">
                    {testimonial.name[0]}
                  </div>
                  <p className="font-black text-amber-300 text-sm">{testimonial.name}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        {/* Contact Form */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-800/40 transition">
          <span className="text-xs font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest">
            {currentT.contact.badge}
          </span>
          <h2 className="mt-3 font-serif-luxury text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
            {currentT.contact.title}
          </h2>

          {formSubmitted ? (
            <div className="mt-8 rounded-2xl bg-green-50 p-6 text-center border border-green-200/80 dark:bg-green-950/20 dark:border-green-900/60">
              <CheckCircle2 className="mx-auto h-12 w-12 text-green-500 mb-3" />
              <p className="font-bold text-green-800 dark:text-green-300">{currentT.contact.form.success}</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setFormSubmitted(true);
              }}
              className="mt-8 grid gap-5"
            >
              <div className="grid gap-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {currentT.contact.form.name}
                </label>
                <input
                  required
                  type="text"
                  className="min-h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-amber-600 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:focus:border-amber-400 transition"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {currentT.contact.form.email}
                </label>
                <input
                  required
                  type="email"
                  className="min-h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-amber-600 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:focus:border-amber-400 transition"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {currentT.contact.form.subject}
                </label>
                <input
                  required
                  type="text"
                  className="min-h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-amber-600 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:focus:border-amber-400 transition"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {currentT.contact.form.message}
                </label>
                <textarea
                  required
                  rows={5}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-amber-600 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:focus:border-amber-400 transition"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-full bg-slate-900 px-7 py-4 font-black text-white hover:bg-slate-850 dark:bg-amber-600 dark:hover:bg-amber-700 transition"
              >
                <Send className="h-4 w-4" />
                <span>{currentT.cta.send}</span>
              </button>
            </form>
          )}
        </div>

        {/* Office details panel */}
        <aside className="flex flex-col gap-6">
          <div className="rounded-3xl bg-white p-8 border border-slate-200 dark:border-slate-800 dark:bg-slate-800/40 shadow-sm flex-grow">
            <h3 className="font-serif-luxury text-2xl font-black text-slate-900 dark:text-white mb-6">
              {currentT.contact.info.title}
            </h3>
            <div className="space-y-6 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold">{currentT.contact.info.phone}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{currentT.contact.info.whatsapp}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold">{currentT.contact.info.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold">{currentT.contact.info.hours}</p>
                </div>
              </div>
            </div>

            <p className="mt-8 rounded-2xl bg-slate-50 dark:bg-slate-850 p-5 text-xs font-semibold leading-relaxed text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
              {currentT.contact.info.confidentiality}
            </p>
          </div>
        </aside>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 px-4 py-12 text-white border-t border-white/5 dark:bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between px-4">
          <div className="flex flex-col">
            <span className="font-serif-luxury text-lg font-black text-amber-500">
              {currentT.brand}
            </span>
            <p className="text-xs text-slate-400 mt-1">
              {currentT.footer.rights}
            </p>
          </div>
          <div className="flex gap-5 text-sm font-semibold text-slate-300">
            <a href="#" className="hover:text-amber-400 transition">
              {currentT.footer.links.linkedin}
            </a>
            <a href="#" className="hover:text-amber-400 transition">
              {currentT.footer.links.facebook}
            </a>
            <a href="#" className="hover:text-amber-400 transition">
              {currentT.footer.links.hours}
            </a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/201005557788"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-green-600 px-6 py-4 text-sm font-black text-white shadow-2xl transition hover:-translate-y-1 hover:bg-green-700 flex items-center gap-2"
      >
        <div className="h-2 w-2 rounded-full bg-white animate-ping" />
        <span>{currentT.cta.whatsapp}</span>
      </a>
    </main>
  );
}
