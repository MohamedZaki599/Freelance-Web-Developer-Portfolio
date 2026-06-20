"use client";

import { useState, useEffect } from "react";
import {
  Code,
  Palette,
  TrendingUp,
  BarChart3,
  Globe,
  Briefcase,
  GraduationCap,
  Sparkles,
  BookOpen,
  UserCheck,
  CheckCircle2,
  HelpCircle,
  Phone,
  Clock,
  MessageSquare,
  Sun,
  Moon,
  Send,
  Menu,
  X
} from "lucide-react";

type Locale = "ar" | "en";

const translations = {
  ar: {
    brand: "أكاديمية انطلاق",
    tagline: "تدريب عملي يفتح لك الأبواب",
    nav: {
      home: "الرئيسية",
      courses: "الكورسات",
      about: "عن الأكاديمية",
      trainers: "المدربون",
      stories: "آراء الطلاب",
      faq: "الأسئلة المتكررة",
      contact: "سجل معنا"
    },
    cta: {
      register: "سجل الآن",
      explore: "اكتشف الكورسات",
      details: "اعرف التفاصيل",
      send: "إرسال طلب التسجيل",
      whatsapp: "اسأل عن الكورسات"
    },
    hero: {
      badge: "تدريب عملي للشباب المصري",
      headline: "مستقبلك يبدأ من هنا",
      subtext: "كورسات عملية في التكنولوجيا والمهارات المهنية، مصممة خصيصاً لتتخرج بمشروع حقيقي، مع فهم أوضح لمتطلبات سوق العمل وخطوة حقيقية نحو فرصتك الأولى.",
      stats: "طالب تخرج من برامجنا بنجاح",
      features: [
        { title: "مشروع عملي", desc: "تطبيق حقيقي تبني به معرض أعمالك" },
        { title: "متابعة فردية", desc: "ملاحظات وتوجيه مستمر لضمان تطورك" },
        { title: "مدربين من السوق", desc: "خبراء يشاركونك تجاربهم الحية" },
        { title: "فرص تدريب", desc: "ترشيحات للمتميزين لبدء مسارهم" }
      ]
    },
    courses: {
      badge: "المسارات المهنية",
      title: "مسارات واضحة لسوق العمل",
      subtitle: "كل كورس مبني حول تطبيق عملي متكامل، بجدول زمني منظم، وتكلفة مناسبة لتبدأ انطلاقتك.",
      bestseller: "الأكثر طلباً",
      items: [
        {
          title: "تطوير الويب",
          duration: "12 أسبوع",
          price: "3200 جنيه",
          description: "تعلم HTML, CSS, JavaScript, React وابنِ مشروعاً حقيقياً متكاملاً يصلح كبداية قوية لمعرض أعمالك."
        },
        {
          title: "تصميم UI/UX",
          duration: "10 أسابيع",
          price: "2800 جنيه",
          description: "أساسيات تجربة المستخدم، وتصميم واجهات التطبيقات والمواقع، وبناء دراسة حالة (Case Study) احترافية."
        },
        {
          title: "التسويق الرقمي",
          duration: "8 أسابيع",
          price: "2400 جنيه",
          description: "إنشاء الإعلانات الممولة، كتابة المحتوى الإبداعي، قياس وتحليل النتائج، ووضع خطة تسويقية متكاملة."
        },
        {
          title: "تحليل البيانات",
          duration: "12 أسبوع",
          price: "3500 جنيه",
          description: "مهارات التعامل مع Excel, SQL, وبناء لوحات البيانات التفاعلية (Dashboards) لقراءة وتحليل المعلومات بحرفية."
        },
        {
          title: "اللغة الإنجليزية لسوق العمل",
          duration: "6 أسابيع",
          price: "1800 جنيه",
          description: "محادثات المقابلات الشخصية، كتابة البريد الإلكتروني المهني، والتعرف على مصطلحات وثقافة بيئة العمل الحديثة."
        },
        {
          title: "إدارة المشاريع",
          duration: "8 أسابيع",
          price: "2600 جنيه",
          description: "أساسيات تخطيط المشاريع، المتابعة والجدولة، مبادئ Agile وScrum، وأفضل الأساليب لقيادة وتوجيه الفرق الصغيرة."
        }
      ]
    },
    about: {
      title: "ليه تتدرب معنا؟",
      subtitle: "منهجية تركز على النتيجة والمهارة الفعلية وليس مجرد تلقين نظري.",
      items: [
        {
          title: "مدربين من أصل الصناعة",
          description: "تتعلم من خبراء يعملون فعلياً في كبرى الشركات، ينقلون لك واقع العمل اليومي والتحديات الحقيقية."
        },
        {
          title: "متابعة فردية",
          description: "تقييم مستمر لكل مهمة وتطبيق عملي ترسله، مع ملاحظات وتوجيهات فردية مخصصة لتطوير مستواك."
        },
        {
          title: "ضمان فرصة تدريب",
          description: "الطلاب الملتزمون يحصلون على ترشيحات وتوصيات لفرص تدريب أو مشاريع عملية مع شركائنا."
        }
      ]
    },
    trainers: {
      badge: "المدربون الخبراء",
      title: "تتعلم من ناس بتشتغل فعليًا",
      items: [
        {
          name: "م. عمر خالد",
          role: "Front-End Developer",
          bio: "خبير في بناء واجهات الويب باستخدام React وNext.js ويهتم بتحويل التصاميم إلى تجارب تفاعلية سريعة."
        },
        {
          name: "م. سلمى عادل",
          role: "UI/UX Designer",
          bio: "تركز على تعليم التفكير التصميمي وبناء دراسات الحالة وتدريب الطلاب على حل المشكلات البصرية."
        },
        {
          name: "أ. ياسين فؤاد",
          role: "Digital Marketing Lead",
          bio: "يدرب على كيفية إدارة الحملات الإعلانية الحقيقية وتحليل البيانات التسويقية بعيداً عن الجانب النظري."
        }
      ]
    },
    stories: {
      title: "قصص نجاح الطلاب",
      subtitle: "فخورون بالنتائج التي حققها طلابنا في مختلف الشركات وبداياتهم المهنية الواعدة.",
      items: [
        {
          name: "منة سامي",
          course: "UI/UX",
          text: "بعد مشروع التخرج قدرت أقدم Case Study قوية وأحصل على تدريب في شركة ناشئة كبداية حقيقية لمشواري."
        },
        {
          name: "كريم مصطفى",
          course: "تطوير الويب",
          text: "بنيت أول بورتفوليو حقيقي واشتغلت على مشروع فريلانس صغير بعد الكورس مباشرة بمساعدة وتوجيه المدرب."
        },
        {
          name: "روان أحمد",
          course: "التسويق الرقمي",
          text: "اتعلمت أقرأ نتائج الإعلانات بميزانية حقيقية وأكتب خطة محتوى متكاملة بدل ما أشتغل بعشوائية."
        }
      ]
    },
    faq: {
      title: "أسئلة متكررة",
      subtitle: "إجابات على أكثر الاستفسارات الشائعة حول الكورسات ونظام الدراسة.",
      items: [
        { q: "مدة الكورس قد إيه؟", a: "تختلف حسب المسار، لكن أغلب الكورسات تتراوح مدتها من 6 إلى 12 أسبوع بمعدل محاضرتين أسبوعياً." },
        { q: "هل يوجد شهادة؟", a: "نعم، يحصل كل طالب على شهادة إتمام المسار التدريبي من الأكاديمية بعد تسليم وتنفيذ المشروع النهائي بنجاح." },
        { q: "هل الدفع متاح بالتقسيط؟", a: "متاح تقسيط رسوم الاشتراك على دفعتين أو ثلاث دفعات لتسهيل التسجيل والاستفادة من التدريب." },
        { q: "الكورسات أونلاين أم حضوري؟", a: "نوفر مجموعات للدراسة التفاعلية عبر الإنترنت (أونلاين بث مباشر) ومجموعات حضورية بمقر الأكاديمية حسب الجدول المتاح." }
      ]
    },
    contact: {
      badge: "التسجيل والاستفسار",
      title: "سجل بياناتك ونكلمك بالتفاصيل",
      form: {
        name: "الاسم الكامل",
        phone: "رقم الهاتف (يفضل واتساب)",
        courseInterest: "الكورس المهتم به",
        message: "رسالة اختيارية / استفسار",
        success: "تم إرسال طلبك بنجاح! سيتواصل معك مستشار التدريب خلال 24 ساعة."
      },
      info: {
        badge: "تواصل سريع",
        title: "اسأل عن أقرب مجموعة",
        whatsapp: "واتساب: 0100 888 9900",
        phone: "الهاتف: 02 3456 7890",
        hours: "المواعيد: يوميًا من 11 صباحًا حتى 8 مساءً",
        action: "اسأل عبر واتساب"
      }
    },
    footer: {
      rights: "© 2026 أكاديمية انطلاق. جميع الحقوق محفوظة.",
      links: {
        facebook: "فيسبوك",
        instagram: "إنستجرام",
        linkedin: "لينكدإن"
      }
    }
  },
  en: {
    brand: "Enteleq Academy",
    tagline: "Practical Training That Opens Doors",
    nav: {
      home: "Home",
      courses: "Courses",
      about: "About Us",
      trainers: "Trainers",
      stories: "Student Stories",
      faq: "FAQ",
      contact: "Register Now"
    },
    cta: {
      register: "Register Now",
      explore: "Explore Courses",
      details: "Get Details",
      send: "Submit Application",
      whatsapp: "Ask About Courses"
    },
    hero: {
      badge: "Practical training for Egyptian youth",
      headline: "Your Future Starts Here",
      subtext: "Hands-on courses in technology and professional skills, designed to ensure you graduate with a real-world portfolio project, a clear understanding of the job market, and a path to your first opportunity.",
      stats: "Graduated Students from Our Programs",
      features: [
        { title: "Practical Project", desc: "Real applications to build your portfolio showcase" },
        { title: "Personal Follow-up", desc: "Constant feedback and tutoring for guaranteed progress" },
        { title: "Market Mentors", desc: "Active industry experts sharing practical lessons" },
        { title: "Internship Opportunities", desc: "Job referrals and internships for top achievers" }
      ]
    },
    courses: {
      badge: "Professional Paths",
      title: "Clear Paths to the Job Market",
      subtitle: "Each course is built around a complete real-world project, a structured timeline, and an affordable price to start your journey.",
      bestseller: "Most Popular",
      items: [
        {
          title: "Web Development",
          duration: "12 Weeks",
          price: "3,200 EGP",
          description: "Learn HTML, CSS, JavaScript, React, and build a full, production-ready project for your portfolio."
        },
        {
          title: "UI/UX Design",
          duration: "10 Weeks",
          price: "2,800 EGP",
          description: "Master user experience fundamentals, interface layout designs, and construct an interactive Case Study."
        },
        {
          title: "Digital Marketing",
          duration: "8 Weeks",
          price: "2,400 EGP",
          description: "Create paid ad campaigns, practice copywriting, measure key analytics, and write a marketing plan."
        },
        {
          title: "Data Analysis",
          duration: "12 Weeks",
          price: "3,500 EGP",
          description: "Gain strong capabilities in Excel, SQL, and build interactive dashboards to interpret datasets like a pro."
        },
        {
          title: "Business English",
          duration: "6 Weeks",
          price: "1,800 EGP",
          description: "Practice mock job interviews, write professional emails, and learn essential terminology for modern workplaces."
        },
        {
          title: "Project Management",
          duration: "8 Weeks",
          price: "2,600 EGP",
          description: "Acquire project planning foundations, scheduling, Agile/Scrum basics, and leading small teams effectively."
        }
      ]
    },
    about: {
      title: "Why Train with Us?",
      subtitle: "Our methodology focuses strictly on active learning and producing real output, rather than passive lectures.",
      items: [
        {
          title: "Industry Mentors",
          description: "Learn directly from active tech leaders who bring day-to-day corporate insights to the classroom."
        },
        {
          title: "Personal Follow-up",
          description: "Receive detailed, custom critiques and guidance on every single practical assignment you submit."
        },
        {
          title: "Guaranteed Internships",
          description: "High-performing, committed graduates get prioritized recommendations for real-world internship slots."
        }
      ]
    },
    trainers: {
      badge: "Industry Experts",
      title: "Learn From Active Professionals",
      items: [
        {
          name: "Eng. Omar Khaled",
          role: "Front-End Developer",
          bio: "An expert at crafting web interfaces using React and Next.js, with a strong focus on high-fidelity performance."
        },
        {
          name: "Eng. Salma Adel",
          role: "UI/UX Designer",
          bio: "Focuses on teaching design thinking, building interactive wireframes, and solving visual problems."
        },
        {
          name: "Mr. Yassin Fouad",
          role: "Digital Marketing Lead",
          bio: "Trains students on launching real ad budgets and reading dashboard metrics rather than standard theories."
        }
      ]
    },
    stories: {
      title: "Student Success Stories",
      subtitle: "We are proud of the tangible results our alumni have achieved, securing roles in emerging companies.",
      items: [
        {
          name: "Menna Sami",
          course: "UI/UX",
          text: "After the capstone project, I confidently presented a complete Case Study and landed an internship at a startup."
        },
        {
          name: "Karim Mostafa",
          course: "Web Development",
          text: "I built my first real portfolio and secured a freelance client immediately after the course with my mentor's support."
        },
        {
          name: "Rawan Ahmed",
          course: "Digital Marketing",
          text: "I learned how to evaluate ad analytics with real ad spend and structure a solid content plan systematically."
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Clear answers to the most common inquiries about our training and schedules.",
      items: [
        { q: "How long is each course?", a: "It varies, but most tracks take 6 to 12 weeks with 2 interactive classes scheduled per week." },
        { q: "Is there a certificate?", a: "Yes, every student receives a certificate of completion from Enteleq Academy after submitting their final project." },
        { q: "Is installment plan available?", a: "Yes, we support paying the fees in two or three installments to make registration easier and more affordable." },
        { q: "Are courses online or in-person?", a: "We offer both live interactive online cohorts and in-person sessions at our physical academy offices." }
      ]
    },
    contact: {
      badge: "Registration & Inquiries",
      title: "Submit Your Details & Get Enrolled",
      form: {
        name: "Full Name",
        phone: "Phone Number (WhatsApp preferred)",
        courseInterest: "Interested Course",
        message: "Optional Message / Inquiry",
        success: "Application submitted successfully! A training advisor will contact you within 24 hours."
      },
      info: {
        badge: "Quick Connect",
        title: "Ask About the Next Batch",
        whatsapp: "WhatsApp: +20 100 888 9900",
        phone: "Phone: 02 3456 7890",
        hours: "Working Hours: Daily, 11:00 AM - 08:00 PM",
        action: "Ask via WhatsApp"
      }
    },
    footer: {
      rights: "© 2026 Enteleq Academy. All rights reserved.",
      links: {
        facebook: "Facebook",
        instagram: "Instagram",
        linkedin: "LinkedIn"
      }
    }
  }
};

const courseIcons = [Code, Palette, TrendingUp, BarChart3, Globe, Briefcase];

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ar");
  const [darkMode, setDarkMode] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Theme setup
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }

    // Locale setup
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
      className={`min-h-screen bg-slate-50 text-[#111827] transition-colors duration-300 dark:bg-[#1A1325] dark:text-slate-100 ${
        isRtl ? "rtl" : "ltr"
      }`}
      style={{ direction: isRtl ? "rtl" : "ltr" }}
    >
      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-violet-100/80 bg-white/95 shadow-sm backdrop-blur transition-colors duration-300 dark:border-purple-900/60 dark:bg-[#1A1325]/95">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <a href="#home" className="flex flex-col">
              <span className="font-serif-luxury text-2xl font-black tracking-tight text-violet-600 dark:text-violet-400">
                {currentT.brand}
              </span>
              <span className="text-[10px] font-bold text-slate-500 dark:text-purple-300">
                {currentT.tagline}
              </span>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden items-center gap-7 text-sm font-bold text-slate-700 dark:text-slate-300 md:flex">
            <a className="transition hover:text-violet-600 dark:hover:text-violet-400" href="#home">
              {currentT.nav.home}
            </a>
            <a className="transition hover:text-violet-600 dark:hover:text-violet-400" href="#courses">
              {currentT.nav.courses}
            </a>
            <a className="transition hover:text-violet-600 dark:hover:text-violet-400" href="#about">
              {currentT.nav.about}
            </a>
            <a className="transition hover:text-violet-600 dark:hover:text-violet-400" href="#trainers">
              {currentT.nav.trainers}
            </a>
            <a className="transition hover:text-violet-600 dark:hover:text-violet-400" href="#stories">
              {currentT.nav.stories}
            </a>
            <a className="transition hover:text-violet-600 dark:hover:text-violet-400" href="#faq">
              {currentT.nav.faq}
            </a>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Language Switch */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1 rounded-full p-2 text-slate-600 hover:bg-slate-100 dark:text-purple-200 dark:hover:bg-purple-950/60 transition"
              title={locale === "ar" ? "English" : "العربية"}
              id="lang-toggle-btn"
            >
              <Globe className="h-5 w-5" />
              <span className="text-xs font-bold uppercase">{locale === "ar" ? "EN" : "AR"}</span>
            </button>

            {/* Dark Mode Switch */}
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-slate-600 hover:bg-slate-100 dark:text-purple-200 dark:hover:bg-purple-950/60 transition"
              title="Toggle Theme"
              id="theme-toggle-btn"
            >
              {darkMode ? <Sun className="h-5 w-5 text-orange-400" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden rounded-full bg-orange-500 px-5 py-2.5 text-sm font-black text-white shadow-md shadow-orange-500/20 transition hover:bg-orange-600 hover:shadow-lg dark:bg-orange-500 dark:hover:bg-orange-600 sm:block"
            >
              {currentT.cta.register}
            </a>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="block rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-purple-950/60 md:hidden"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="border-t border-violet-100 bg-white/95 px-4 py-4 dark:border-purple-900/60 dark:bg-[#1A1325] md:hidden">
            <div className="flex flex-col gap-4 text-sm font-bold text-slate-700 dark:text-slate-300">
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-violet-600 dark:hover:text-violet-400"
                href="#home"
              >
                {currentT.nav.home}
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-violet-600 dark:hover:text-violet-400"
                href="#courses"
              >
                {currentT.nav.courses}
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-violet-600 dark:hover:text-violet-400"
                href="#about"
              >
                {currentT.nav.about}
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-violet-600 dark:hover:text-violet-400"
                href="#trainers"
              >
                {currentT.nav.trainers}
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-violet-600 dark:hover:text-violet-400"
                href="#stories"
              >
                {currentT.nav.stories}
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-violet-600 dark:hover:text-violet-400"
                href="#faq"
              >
                {currentT.nav.faq}
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#contact"
                className="w-full text-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-black text-white shadow-md transition hover:bg-orange-600"
              >
                {currentT.cta.register}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative overflow-hidden bg-white dark:bg-[#1A1325]/40 py-16 sm:py-24 transition">
        {/* Background mesh glow */}
        <div className="absolute top-0 right-0 -mr-40 h-[600px] w-[600px] rounded-full bg-violet-500/5 blur-3xl dark:bg-violet-500/10" />
        <div className="absolute bottom-0 left-0 -ml-40 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl dark:bg-orange-500/10" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="flex flex-col justify-center animate-fade-in-up">
            <span className="mb-5 w-fit rounded-full bg-violet-100 px-4 py-2 text-xs sm:text-sm font-black text-violet-700 dark:bg-violet-950/60 dark:text-violet-300">
              {currentT.hero.badge}
            </span>
            <h1 className="max-w-3xl font-serif-luxury text-4xl font-black leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              {currentT.hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {currentT.hero.subtext}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#courses"
                className="rounded-full bg-violet-600 px-7 py-4 text-center font-black text-white shadow-xl shadow-violet-600/20 transition-transform hover:-translate-y-0.5 hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-700"
              >
                {currentT.cta.explore}
              </a>
              <a
                href="#contact"
                className="rounded-full border border-orange-200 bg-orange-50/50 px-7 py-4 text-center font-black text-orange-600 hover:bg-orange-50 dark:border-orange-500/30 dark:bg-orange-950/20 dark:text-orange-400 dark:hover:bg-orange-950/40 transition"
              >
                {currentT.cta.register}
              </a>
            </div>

            {/* Quick stats panel */}
            <div className="mt-10 flex items-center gap-4 w-fit rounded-3xl border border-violet-100 bg-slate-50 px-6 py-5 dark:border-purple-900/40 dark:bg-[#2A2138]/60 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 dark:bg-violet-950/80 dark:text-violet-400">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <div className="text-3xl font-black text-violet-600 dark:text-violet-400 font-serif-luxury">+1000</div>
                <div className="text-xs font-bold text-slate-600 dark:text-slate-300">{currentT.hero.stats}</div>
              </div>
            </div>
          </div>

          {/* Hero Visual Column (Right) */}
          <div className="flex flex-col gap-6 items-center justify-center animate-fade-in-up" style={{ animationDelay: "150ms" }}>
            <div className="relative w-full max-w-md aspect-[4/3] rounded-[2.5rem] bg-gradient-to-br from-violet-600 to-orange-500 p-1.5 shadow-2xl">
              <div className="h-full w-full overflow-hidden rounded-[2.3rem] relative">
                <img
                  src="/images/hero-students.png"
                  alt="Students Learning at Enteleq Academy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    // Hide if not loaded
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white flex items-center gap-2">
                  <div className="rounded-full bg-orange-500 p-2 text-white shadow-md">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-black tracking-wide font-serif-luxury">Enteleq Student Hub</span>
                </div>
              </div>
            </div>

            {/* Features lists card (re-styled from current app) */}
            <div className="w-full max-w-md bg-white rounded-3xl border border-slate-100 p-6 dark:bg-[#2A2138] dark:border-purple-900/40 shadow-md">
              <div className="grid grid-cols-2 gap-4">
                {currentT.hero.features.map((item, index) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-[#1A1325]/60 border border-violet-100/30 transition hover:border-violet-500/25"
                  >
                    <span className="text-[10px] font-black text-orange-550 dark:text-orange-400 tracking-wider">
                      FEATURE 0{index + 1}
                    </span>
                    <h4 className="mt-1 font-black text-sm text-[#111827] dark:text-white">{item.title}</h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section id="courses" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block rounded-full bg-orange-500/10 px-4 py-1.5 text-xs font-black text-orange-600 dark:bg-orange-500/20 dark:text-orange-400 uppercase tracking-widest">
            {currentT.courses.badge}
          </span>
          <h2 className="mt-4 font-serif-luxury text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
            {currentT.courses.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {currentT.courses.subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentT.courses.items.map((course, index) => {
            const IconComp = courseIcons[index] || Code;
            const isWebDev = index === 0;

            return (
              <article
                key={course.title}
                className="group relative rounded-3xl border border-violet-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-violet-500/5 dark:border-purple-900/40 dark:bg-[#2A2138] flex flex-col h-full"
              >
                {isWebDev && (
                  <span className="absolute top-4 right-4 rounded-full bg-orange-500 px-3 py-1 text-[10px] font-black text-white uppercase tracking-wider animate-pulse">
                    {currentT.courses.bestseller}
                  </span>
                )}

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-950/60 dark:text-violet-400 group-hover:scale-110 transition-transform">
                  <IconComp className="h-6 w-6" />
                </div>

                <h3 className="font-serif-luxury text-xl font-black text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {course.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 flex-grow min-h-[80px]">
                  {course.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 items-center">
                  <span className="rounded-full bg-violet-100/60 px-4 py-1.5 text-xs font-black text-violet-700 dark:bg-violet-950/80 dark:text-violet-300">
                    {course.duration}
                  </span>
                  <span className="rounded-full bg-orange-100/60 px-4 py-1.5 text-xs font-black text-orange-600 dark:bg-orange-950/80 dark:text-orange-400">
                    {course.price}
                  </span>
                </div>

                <a
                  href="#contact"
                  className="mt-6 w-full text-center rounded-full bg-[#111827] py-3 text-xs font-black text-white hover:bg-slate-800 dark:bg-violet-600 dark:hover:bg-violet-700 transition"
                >
                  {currentT.cta.details}
                </a>
              </article>
            );
          })}
        </div>
      </section>

      {/* WHY TRAIN WITH US (ABOUT) SECTION */}
      <section id="about" className="bg-white dark:bg-[#1A1325]/20 py-20 transition">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-black tracking-widest text-violet-600 dark:text-violet-400 uppercase">
              {locale === "ar" ? "منهجية العمل" : "Our Methodology"}
            </span>
            <h2 className="mt-2 font-serif-luxury text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
              {currentT.about.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              {currentT.about.subtitle}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {currentT.about.items.map((benefit, index) => {
              const icons = [BookOpen, UserCheck, CheckCircle2];
              const IconComp = icons[index] || BookOpen;

              return (
                <article
                  key={benefit.title}
                  className="rounded-3xl bg-slate-50 p-8 border border-slate-100 dark:bg-[#2A2138] dark:border-purple-900/30 transition hover:border-violet-500/20 shadow-sm"
                >
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-950/60 dark:text-orange-400">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif-luxury text-2xl font-black text-slate-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRAINERS SECTION */}
      <section id="trainers" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block rounded-full bg-violet-500/10 px-4 py-1.5 text-xs font-black text-violet-600 dark:bg-violet-500/20 dark:text-violet-400 uppercase tracking-widest">
            {currentT.trainers.badge}
          </span>
          <h2 className="mt-4 font-serif-luxury text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
            {currentT.trainers.title}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {currentT.trainers.items.map((trainer, index) => (
            <article
              key={trainer.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-200/60 dark:border-purple-900/40 dark:bg-[#2A2138] flex flex-col h-full hover:shadow-lg transition duration-300"
            >
              {/* Trainer Image */}
              <div className="aspect-square relative bg-gradient-to-br from-violet-100 to-orange-100 overflow-hidden">
                <img
                  src={`/images/mentor-${index + 1}.png`}
                  alt={trainer.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // fallback if not ready
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-black uppercase bg-violet-600 px-2.5 py-1 rounded-md text-white">
                    VERIFIED MENTOR
                  </span>
                </div>
              </div>

              {/* Trainer Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif-luxury text-2xl font-black text-slate-900 dark:text-white">
                  {trainer.name}
                </h3>
                <p className="mt-1 text-sm font-bold text-violet-600 dark:text-violet-400">
                  {trainer.role}
                </p>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 flex-grow">
                  {trainer.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STUDENT STORIES (TESTIMONIALS) */}
      <section id="stories" className="bg-[#1A1325] py-20 text-white dark:bg-[#1A1325]/90 border-y border-purple-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-black tracking-widest text-orange-400 uppercase">
              {locale === "ar" ? "إنجازات وقصص" : "Alumni Success"}
            </span>
            <h2 className="mt-2 font-serif-luxury text-3xl font-black text-white sm:text-4xl">
              {currentT.stories.title}
            </h2>
            <p className="mt-3 text-purple-300 text-sm sm:text-base">
              {currentT.stories.subtitle}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {currentT.stories.items.map((story) => (
              <article
                key={story.name}
                className="relative rounded-3xl border border-purple-900/60 bg-[#2A2138]/60 p-8 hover:border-violet-500/40 hover:bg-[#2A2138]/90 transition duration-300"
              >
                <span className="absolute top-4 right-4 rounded-full bg-orange-500 px-3.5 py-1 text-[10px] font-black text-white">
                  {story.course}
                </span>
                <p className="mt-6 leading-relaxed text-purple-100 text-sm sm:text-base italic">
                  "{story.text}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-300 font-black text-xs">
                    {story.name[0]}
                  </div>
                  <p className="font-black text-orange-400">{story.name}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center mx-auto mb-16">
          <span className="inline-block rounded-full bg-violet-500/10 px-4 py-1.5 text-xs font-black text-violet-600 dark:bg-violet-500/20 dark:text-violet-400 uppercase tracking-widest">
            {locale === "ar" ? "استفسارات" : "FAQ"}
          </span>
          <h2 className="mt-4 font-serif-luxury text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
            {currentT.faq.title}
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            {currentT.faq.subtitle}
          </p>
        </div>

        <div className="grid gap-4 max-w-4xl mx-auto">
          {currentT.faq.items.map((item) => (
            <article
              key={item.q}
              className="rounded-3xl border border-violet-100 bg-white p-6 dark:border-purple-900/30 dark:bg-[#2A2138]"
            >
              <div className="flex gap-3 items-start">
                <HelpCircle className="h-5 w-5 text-violet-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white">{item.q}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-purple-300">{item.a}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT / REGISTRATION SECTION */}
      <section id="contact" className="bg-white dark:bg-[#1A1325]/40 py-20 transition">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          {/* Registration Form */}
          <div className="rounded-3xl border border-violet-100 bg-slate-50/50 p-8 shadow-sm dark:border-purple-900/40 dark:bg-[#2A2138] transition">
            <span className="text-xs font-black text-orange-600 dark:text-orange-400 uppercase tracking-widest">
              {currentT.contact.badge}
            </span>
            <h2 className="mt-3 font-serif-luxury text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
              {currentT.contact.title}
            </h2>

            {formSubmitted ? (
              <div className="mt-8 rounded-2xl bg-green-50 p-6 text-center border border-green-200 dark:bg-green-950/20 dark:border-green-900/60">
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
                    className="min-h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-violet-600 dark:border-purple-900/60 dark:bg-[#1A1325] dark:focus:border-violet-400 transition"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    {currentT.contact.form.phone}
                  </label>
                  <input
                    required
                    type="tel"
                    className="min-h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-violet-600 dark:border-purple-900/60 dark:bg-[#1A1325] dark:focus:border-violet-400 transition"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    {currentT.contact.form.courseInterest}
                  </label>
                  <select className="min-h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-violet-600 dark:border-purple-900/60 dark:bg-[#1A1325] dark:focus:border-violet-400 transition text-slate-800 dark:text-slate-250">
                    {currentT.courses.items.map((course) => (
                      <option key={course.title} value={course.title}>
                        {course.title} ({course.price})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-2">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    {currentT.contact.form.message}
                  </label>
                  <textarea
                    rows={4}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-violet-600 dark:border-purple-900/60 dark:bg-[#1A1325] dark:focus:border-violet-400 transition"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-full bg-violet-600 px-7 py-4 font-black text-white hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-700 transition"
                >
                  <Send className="h-4 w-4" />
                  <span>{currentT.cta.send}</span>
                </button>
              </form>
            )}
          </div>

          {/* Quick Connect details */}
          <aside className="flex flex-col gap-6">
            <div className="rounded-[2rem] bg-gradient-to-br from-violet-600 to-purple-800 p-8 text-white shadow-xl dark:from-violet-900 dark:to-purple-950 flex-grow">
              <span className="text-xs font-black text-orange-300 uppercase tracking-widest">
                {currentT.contact.info.badge}
              </span>
              <h3 className="mt-3 font-serif-luxury text-3xl font-black">
                {currentT.contact.info.title}
              </h3>
              <div className="mt-8 space-y-6 text-sm text-purple-100">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-orange-300" />
                  <p className="font-bold">{currentT.contact.info.phone}</p>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-orange-300" />
                  <p className="font-bold">{currentT.contact.info.whatsapp}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-orange-300" />
                  <p className="font-bold">{currentT.contact.info.hours}</p>
                </div>
              </div>
              <a
                href="https://wa.me/201008889900"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex w-full justify-center items-center rounded-full bg-white px-7 py-4 font-black text-violet-700 shadow-md hover:bg-slate-50 transition"
              >
                {currentT.contact.info.action}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1A1325] px-4 py-12 text-white border-t border-purple-950/60 dark:bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between px-4">
          <div className="flex flex-col">
            <span className="font-serif-luxury text-xl font-black text-violet-400">
              {currentT.brand}
            </span>
            <p className="text-xs text-purple-300 mt-1">
              {currentT.footer.rights}
            </p>
          </div>
          <div className="flex gap-5 text-sm font-semibold text-slate-300">
            <a href="#" className="hover:text-violet-400 transition">
              {currentT.footer.links.facebook}
            </a>
            <a href="#" className="hover:text-violet-400 transition">
              {currentT.footer.links.instagram}
            </a>
            <a href="#" className="hover:text-violet-400 transition">
              {currentT.footer.links.linkedin}
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/201008889900"
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
