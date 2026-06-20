"use client";

import { useState, useEffect } from "react";
import { UtensilsCrossed, Flame, Soup, Cake, Sun, Moon } from "lucide-react";

const sectionIcons: Record<string, typeof UtensilsCrossed> = {
  "مقبلات": Soup, "مشويات": Flame, "أطباق رئيسية": UtensilsCrossed, "حلويات": Cake,
  "Appetizers": Soup, "Grills": Flame, "Main Dishes": UtensilsCrossed, "Desserts": Cake
};

const copy = {
  ar: {
    brand: "بيت الطعم",
    nav: ["الرئيسية", "المنيو", "من نحن", "تواصل"],
    heroEyebrow: "أكل مصري بيتي في أسيوط",
    heroTitle: "طعم البيت... في كل لقمة",
    heroText: "في بيت الطعم بنطبخ أكلات مصرية أصيلة بوصفات مألوفة ومكونات طازة، عشان كل وجبة تفكرك بطبق البيت الحقيقي.",
    heroCta1: "شاهد المنيو",
    heroCta2: "اطلب عبر واتساب",
    menuEyebrow: "المنيو",
    menuTitle: "أطباق مصرية بطعم واضح وأسعار مباشرة",
    menuText: "اختار من المقبلات، الأطباق الرئيسية، المشويات، والحلويات. الأسعار تقريبية وقابلة للتحديث حسب الموسم.",
    menuSections: [
      { title: "مقبلات", items: [["طحينة بلدي", "25 جنيه", "طحينة ناعمة بزيت زيتون ولمسة كمون."], ["بابا غنوج", "30 جنيه", "باذنجان مشوي بطعم مدخن خفيف."], ["سلطة خضراء", "22 جنيه", "خضار طازة متقطع يوميًا مع تتبيلة بيتية."]] },
      { title: "أطباق رئيسية", items: [["ملوخية بالفراخ", "115 جنيه", "ملوخية خضراء مع فراخ بلدي وأرز أبيض."], ["ورق عنب", "85 جنيه", "محشي ورق عنب بتتبيلة مصرية وطعم متوازن."], ["طاجن بامية باللحمة", "145 جنيه", "بامية في طاجن فخار مع صلصة تقيلة وقطع لحمة."], ["أرز معمر", "70 جنيه", "أرز معمر كريمي خارج من الفرن بطعم البيت."]] },
      { title: "مشويات", items: [["فراخ مشوية", "135 جنيه", "نصف فرخة بتتبيلة بيت الطعم وأرز وسلطة."], ["كباب وكفتة", "190 جنيه", "مشويات على الفحم مع عيش بلدي ومقبلات."], ["شيش طاووق", "155 جنيه", "قطع فراخ متبلة ومشوية مع بطاطس وسلطة."]] },
      { title: "حلويات", items: [["أم علي", "55 جنيه", "طاجن أم علي بالمكسرات والقشطة."], ["رز بلبن", "35 جنيه", "رز بلبن كريمي بالقرفة أو المكسرات."], ["كنافة بالقشطة", "60 جنيه", "كنافة مقرمشة بحشو قشطة خفيف."]] }
    ],
    storyEyebrow: "قصتنا",
    storyTitle: "بدأنا من وصفات البيت",
    storyText: "بيت الطعم اتعمل عشان يقدم أكل مصري حقيقي من غير تعقيد. نفس الوصفات اللي اتربينا عليها، بس بتنظيم مطعم يحترم الوقت، النظافة، وجودة المكونات. كل طبق عندنا معمول عشان يشبع ويفرح.",
    galleryTitle: "معرض الأطباق والمكان",
    gallery: ["طبق ملوخية وفراخ", "مشويات على الفحم", "طاجن بامية", "جلسة عائلية", "حلويات شرقية", "ركن المطعم"],
    reviewsTitle: "آراء العملاء",
    reviews: [
      { name: "أحمد أشرف", text: "الملوخية والفراخ طعمهم بيتي فعلًا. الطلب وصل سخن والتغليف ممتاز." },
      { name: "ندى محمود", text: "مكان مناسب جدًا للعيلة، والمنيو واضح والأسعار كويسة بالنسبة للجودة." },
      { name: "محمد صابر", text: "الكباب والكفتة على الفحم ممتازين. حسيت إني باكل عند ناس فاهمة الطعم." }
    ],
    contactEyebrow: "تواصل واطلب",
    contactTitle: "طلبك يوصل سخن",
    contactItems: ["العنوان: شارع يسري راغب، أسيوط", "واتساب الطلبات: 0100 111 2233", "مواعيد العمل: يوميًا من 12 ظهرًا حتى 1 بعد منتصف الليل", "خدمة التوصيل: متاحة داخل أسيوط وضواحي قريبة"],
    offerLabel: "عرض اليوم",
    offerTitle: "وجبة عائلية تكفي 4 أفراد",
    offerText: "فراخ مشوية، أرز، ملوخية، سلطات، وعيش بلدي. اطلبها من واتساب واسأل عن السعر اليومي.",
    offerCta: "اطلب العرض",
    footer: "© 2026 مطعم بيت الطعم",
    orderBtn: "اطلب الآن",
    orderNow: "اطلب الآن"
  },
  en: {
    brand: "Beit El Taem",
    nav: ["Home", "Menu", "About", "Contact"],
    heroEyebrow: "Authentic Egyptian Home-Cooking in Assiut",
    heroTitle: "The Taste of Home... In Every Bite",
    heroText: "At Beit El Taem we serve authentic Egyptian dishes with fresh ingredients, because we believe every meal should feel like home.",
    heroCta1: "View Menu",
    heroCta2: "Order via WhatsApp",
    menuEyebrow: "Menu",
    menuTitle: "Egyptian Dishes with Clear Flavors & Fair Prices",
    menuText: "Choose from appetizers, main courses, grills, and desserts. Prices are approximate and may vary by season.",
    menuSections: [
      { title: "Appetizers", items: [["Baladi Tahini", "25 EGP", "Smooth tahini with olive oil and a hint of cumin."], ["Baba Ghanouj", "30 EGP", "Roasted eggplant with a light smoky flavor."], ["Green Salad", "22 EGP", "Fresh vegetables chopped daily with a homemade dressing."]] },
      { title: "Main Dishes", items: [["Molokhia with Chicken", "115 EGP", "Green molokhia with local chicken and white rice."], ["Stuffed Vine Leaves", "85 EGP", "Vine leaves with Egyptian seasoning and balanced taste."], ["Okra Tagine with Meat", "145 EGP", "Okra in a clay tagine with rich sauce and meat."], ["Baked Rice", "70 EGP", "Creamy baked rice fresh from the oven."]] },
      { title: "Grills", items: [["Grilled Chicken", "135 EGP", "Half chicken with Beit El Taem seasoning, rice, and salad."], ["Kebab & Kofta", "190 EGP", "Charcoal-grilled with baladi bread and appetizers."], ["Shish Tawook", "155 EGP", "Marinated grilled chicken with fries and salad."]] },
      { title: "Desserts", items: [["Om Ali", "55 EGP", "Om Ali tagine with nuts and cream."], ["Rice Pudding", "35 EGP", "Creamy rice pudding with cinnamon or nuts."], ["Konafa", "60 EGP", "Crispy konafa with a light cream filling."]] }
    ],
    storyEyebrow: "Our Story",
    storyTitle: "We Started from Home Recipes",
    storyText: "Beit El Taem was built to serve real Egyptian food without complication. The same recipes we grew up with, but with restaurant-level organization respecting time, cleanliness, and ingredient quality.",
    galleryTitle: "Food & Space Gallery",
    gallery: ["Molokhia & Chicken", "Charcoal Grills", "Okra Tagine", "Family Seating", "Oriental Sweets", "Restaurant Corner"],
    reviewsTitle: "Customer Reviews",
    reviews: [
      { name: "Ahmed Ashraf", text: "The molokhia and chicken tasted truly homemade. Order arrived hot and packaging was excellent." },
      { name: "Nada Mahmoud", text: "Great place for families. Clear menu and fair prices for the quality." },
      { name: "Mohamed Saber", text: "Charcoal kebab and kofta were amazing. Felt like eating at someone who truly knows flavor." }
    ],
    contactEyebrow: "Order & Contact",
    contactTitle: "Your Order Arrives Hot",
    contactItems: ["Address: Yosri Ragheb St., Assiut", "WhatsApp Orders: 0100 111 2233", "Hours: Daily 12 PM – 1 AM", "Delivery: Available across Assiut"],
    offerLabel: "Today's Offer",
    offerTitle: "Family Meal for 4",
    offerText: "Grilled chicken, rice, molokhia, salads, and baladi bread. Order via WhatsApp and ask for today's price.",
    offerCta: "Order the Deal",
    footer: "© 2026 Beit El Taem Restaurant",
    orderBtn: "Order Now",
    orderNow: "Order Now"
  }
};

export default function Home() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [dark, setDark] = useState(false);
  const c = copy[lang];
  const isAr = lang === "ar";

  useEffect(() => {
    const saved = localStorage.getItem("restaurant-dark");
    if (saved === "true") { setDark(true); document.documentElement.classList.add("dark"); }
  }, []);

  const toggleDark = () => {
    setDark((prev) => {
      const next = !prev;
      localStorage.setItem("restaurant-dark", String(next));
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  return (
    <main dir={isAr ? "rtl" : "ltr"} className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg-warm)]/95 backdrop-blur-lg transition-colors">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="text-2xl font-black text-[var(--primary)]">{c.brand}</a>
          <div className="hidden items-center gap-7 text-sm font-bold md:flex">
            {c.nav.map((item, i) => (
              <a key={item} className="transition hover:text-[var(--primary)]" href={["#home", "#menu", "#story", "#contact"][i]}>{item}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={toggleDark} className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] transition hover:bg-[var(--primary)] hover:text-white" aria-label="Toggle dark mode">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button type="button" onClick={() => setLang(isAr ? "en" : "ar")} className="rounded-full border border-[var(--primary)] px-4 py-2 text-sm font-black text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white">
              {isAr ? "EN" : "AR"}
            </button>
            <a href="https://wa.me/201001112233" className="hidden rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-black text-white shadow-lg transition hover:brightness-110 sm:inline-flex">{c.orderBtn}</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="overflow-hidden bg-[var(--bg-warm)] transition-colors">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center animate-fade-in-up">
            <span className="mb-5 w-fit rounded-full bg-[var(--bg-card)] px-4 py-2 text-sm font-black text-[var(--primary)]">{c.heroEyebrow}</span>
            <h1 className="font-display max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{c.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-[var(--text-muted)]">{c.heroText}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#menu" className="rounded-full bg-[var(--accent)] px-7 py-4 text-center font-black text-[#451A03] shadow-xl transition hover:-translate-y-0.5">{c.heroCta1}</a>
              <a href="https://wa.me/201001112233" className="rounded-full border border-[var(--primary)] bg-transparent px-7 py-4 text-center font-black text-[var(--primary)] transition hover:bg-[var(--bg-card)]">{c.heroCta2}</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-[var(--primary)] p-2 shadow-2xl animate-fade-in-up stagger-2">
            <img src="/images/hero-dish.jpg" alt={isAr ? "طبق مصري شهي" : "Delicious Egyptian dish"} className="min-h-[380px] w-full rounded-[1.5rem] object-cover" />
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-black text-[var(--primary)]">{c.menuEyebrow}</span>
          <h2 className="font-display mt-3 text-3xl font-black sm:text-4xl">{c.menuTitle}</h2>
          <p className="mt-4 leading-8 text-[var(--text-muted)]">{c.menuText}</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {c.menuSections.map((section) => {
            const Icon = sectionIcons[section.title] || UtensilsCrossed;
            return (
              <article key={section.title} className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-6 shadow-sm transition-colors">
                <h3 className="flex items-center gap-3 border-b border-[var(--border)] pb-4 text-2xl font-black text-[var(--primary)]">
                  <Icon size={22} />
                  {section.title}
                </h3>
                <div className="mt-5 space-y-5">
                  {section.items.map(([name, price, description]) => (
                    <div key={name} className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-start">
                      <div>
                        <h4 className="font-black">{name}</h4>
                        <p className="mt-1 leading-7 text-[var(--text-muted)]">{description}</p>
                      </div>
                      <span className="w-fit rounded-full bg-[var(--bg-warm)] px-4 py-2 text-sm font-black text-[var(--primary)]">{price}</span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Story */}
      <section id="story" className="bg-[var(--bg-warm)] py-20 transition-colors">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:px-8">
          <div>
            <span className="text-sm font-black text-[var(--primary)]">{c.storyEyebrow}</span>
            <h2 className="font-display mt-3 text-3xl font-black sm:text-4xl">{c.storyTitle}</h2>
          </div>
          <p className="text-lg leading-9 text-[var(--text-muted)]">{c.storyText}</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-black">{c.galleryTitle}</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.gallery.map((item, index) => (
            <div key={item} className={`group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-sm animate-fade-in-up stagger-${index + 1}`}>
              <img
                src={`/images/gallery-${index + 1}.jpg`}
                alt={item}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-5 left-5 right-5 rounded-full bg-white/90 px-4 py-2 text-center text-sm font-black text-[#7C2D12] dark:bg-black/70 dark:text-orange-200">
                {index + 1}. {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-[var(--bg-card)] py-20 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-black">{c.reviewsTitle}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {c.reviews.map((review) => (
              <article key={review.name} className="rounded-3xl bg-[var(--bg-warm)] p-6 transition-colors">
                <div className="text-[var(--accent)]">★★★★★</div>
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
          <span className="text-sm font-black text-[var(--primary)]">{c.contactEyebrow}</span>
          <h2 className="font-display mt-3 text-3xl font-black sm:text-4xl">{c.contactTitle}</h2>
          <div className="mt-8 grid gap-4">
            {c.contactItems.map((item) => (
              <div key={item} className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-5 font-bold shadow-sm transition-colors">{item}</div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] bg-[#451A03] p-8 text-white dark:bg-[#3D2817]">
          <p className="text-sm font-black text-[var(--accent)]">{c.offerLabel}</p>
          <h3 className="font-display mt-3 text-3xl font-black">{c.offerTitle}</h3>
          <p className="mt-5 leading-8 text-orange-100">{c.offerText}</p>
          <a href="https://wa.me/201001112233" className="mt-8 inline-flex rounded-full bg-[var(--accent)] px-7 py-4 font-black text-[#451A03]">{c.offerCta}</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#451A03] px-4 py-10 text-white dark:bg-[#0F0A06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-bold">{c.footer}</p>
          <div className="flex gap-4 text-sm text-orange-100">
            <a href="#">{isAr ? "إنستجرام" : "Instagram"}</a>
            <a href="#">{isAr ? "فيسبوك" : "Facebook"}</a>
          </div>
        </div>
      </footer>

      {/* FAB */}
      <a href="https://wa.me/201001112233" className="fixed bottom-5 right-5 z-50 rounded-full bg-[#16A34A] px-5 py-4 text-sm font-black text-white shadow-2xl shadow-green-300 transition hover:-translate-y-1 dark:shadow-green-900/30">{c.orderNow}</a>
    </main>
  );
}
