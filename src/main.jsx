import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  CalendarCheck,
  MapPin,
  Phone,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";
import "./styles.css";

const mapUrl = "https://maps.app.goo.gl/iU8UQEFAWtBZJ37x8";
const mapEmbedUrl =
  "https://www.google.com/maps?q=Kurlappa%20Shopping%20Mall%2C%20No%3A3%2C%20Kogilu%20Main%20Rd%2C%20Shankrappa%20Layout%2C%20Maruthi%20Nagar%2C%20Yelahanka%2C%20Bengaluru%2C%20Karnataka%20560064&output=embed";

const services = [
  {
    title: "Signature Haircut",
    text: "Clean fades, classic cuts, school cuts, and office-ready styling.",
    icon: Scissors,
  },
  {
    title: "Beard & Shave",
    text: "Shape-ups, trimming, razor finish, and hot towel grooming.",
    icon: BadgeCheck,
  },
  {
    title: "Facial & Cleanup",
    text: "Fresh, practical skincare for daily dust, heat, and city routines.",
    icon: Sparkles,
  },
];

const menu = [
  ["Hair Cut", "Rs. 120"],
  ["Kids Hair Cut", "Rs. 100"],
  ["Hair Cut + Beard Trim", "Rs. 180"],
  ["Beard Trim", "Rs. 70"],
  ["Clean Shave", "Rs. 80"],
  ["Head Massage", "Rs. 150"],
  ["Hair Wash", "Rs. 80"],
  ["Hair Colour", "Rs. 350"],
  ["Face Cleanup", "Rs. 300"],
  ["Gold Facial", "Rs. 650"],
  ["D-Tan", "Rs. 450"],
  ["Full Grooming Combo", "Rs. 999"],
];

const gallery = [
  "Precision fades",
  "Classic grooming",
  "Fresh facials",
  "Wedding ready",
];

function App() {
  return (
    <main className="min-h-screen bg-parlour-cream text-parlour-ink">
      <Hero />
      <Owner />
      <Menu />
      <Services />
      <Experience />
      <Location />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[820px] overflow-hidden bg-parlour-ink text-white sm:min-h-[860px] lg:min-h-[94vh]">
      <img
        src="/images/salon-hero.png"
        alt="Premium men's grooming salon interior"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-[66%_center] sm:object-[58%_center]"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(16,20,21,0.72)_0%,rgba(16,20,21,0.82)_42%,rgba(16,20,21,0.98)_100%)] sm:bg-[radial-gradient(circle_at_72%_34%,rgba(201,151,74,0.18),transparent_30%),linear-gradient(100deg,rgba(16,20,21,0.98)_0%,rgba(16,20,21,0.92)_45%,rgba(16,20,21,0.62)_78%,rgba(16,20,21,0.38)_100%)] lg:bg-[radial-gradient(circle_at_72%_34%,rgba(201,151,74,0.24),transparent_28%),linear-gradient(100deg,rgba(16,20,21,0.98)_0%,rgba(16,20,21,0.88)_34%,rgba(16,20,21,0.42)_68%,rgba(16,20,21,0.2)_100%)]" />
      <div className="absolute left-0 top-0 -z-10 h-full w-24 border-r border-white/10 bg-parlour-ink/42 backdrop-blur-sm max-lg:hidden" />

      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-8 sm:py-5">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid size-11 place-items-center border border-parlour-brass/60 bg-parlour-brass/15 backdrop-blur">
            <Scissors className="size-5 text-parlour-brass" />
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-white/78 md:flex">
          <a href="#services" className="hover:text-parlour-brass">Services</a>
          <a href="#menu" className="hover:text-parlour-brass">Menu</a>
          <a href="#owner" className="hover:text-parlour-brass">Owner</a>
          <a href="#location" className="hover:text-parlour-brass">Location</a>
        </div>
        <a
          href={mapUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-parlour-brass px-4 py-3 text-sm font-bold text-parlour-ink transition hover:bg-white"
        >
          <MapPin className="size-4" />
          Visit
        </a>
      </nav>

      <div className="absolute left-8 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-5 text-parlour-brass lg:flex">
        <span className="h-24 w-px bg-parlour-brass/55" />
        <span className="[writing-mode:vertical-rl] text-xs font-black uppercase tracking-[0.32em]">Gents Grooming</span>
        <span className="h-24 w-px bg-parlour-brass/55" />
      </div>

      <div id="home" className="mx-auto grid max-w-7xl gap-10 px-4 pb-24 pt-20 sm:px-8 sm:pb-28 sm:pt-24 lg:grid-cols-[1.08fr_0.92fr] lg:pb-24 lg:pt-24">
        <div className="max-w-4xl animate-reveal">
          <div className="mb-6 flex flex-wrap items-center gap-2 sm:mb-7 sm:gap-3">
            <span className="inline-flex items-center gap-2 border border-white/15 bg-white/10 px-3 py-2 text-xs text-white/86 backdrop-blur sm:px-4 sm:text-sm">
              <Star className="size-4 fill-parlour-brass text-parlour-brass" />
              Yelahanka, Bengaluru
            </span>
            <span className="inline-flex items-center gap-2 border border-parlour-brass/35 bg-parlour-brass/15 px-3 py-2 text-xs font-bold text-parlour-brass backdrop-blur sm:px-4 sm:text-sm">
              30 Years Experience
            </span>
          </div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-parlour-brass sm:text-sm sm:tracking-[0.28em]">Men's Salon & Beauty Parlour</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[0.98] tracking-normal text-white min-[380px]:text-5xl sm:mt-5 sm:text-7xl lg:text-8xl">
            Suresh Gents
            <span className="block text-parlour-brass">Beauty Parlour</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/76 sm:mt-7 sm:text-xl sm:leading-8">
            Sharp haircuts, clean shaves, beard styling, facials, and daily grooming with a trusted neighbourhood finish.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <a
              href="#menu"
              className="group inline-flex items-center justify-center gap-2 bg-parlour-brass px-5 py-4 text-sm font-black text-parlour-ink transition hover:bg-white sm:px-6 sm:text-base"
            >
              View Price Menu
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/25 bg-white/10 px-5 py-4 text-sm font-black text-white backdrop-blur transition hover:border-parlour-brass hover:text-parlour-brass sm:px-6 sm:text-base"
            >
              <MapPin className="size-4" />
              Get Directions
            </a>
          </div>
        </div>

        <div className="hidden items-end justify-end lg:flex">
          <div className="h-[30rem] w-px bg-gradient-to-b from-transparent via-parlour-brass/55 to-transparent" />
        </div>
      </div>

    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.26em] text-parlour-copper">Grooming services</p>
          <h2 className="mt-3 font-display text-4xl text-parlour-ink sm:text-5xl">Sharp, clean, and ready for the day.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group border border-parlour-ink/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-parlour-brass hover:shadow-glow"
              style={{ animation: `reveal 0.8s ease ${index * 120}ms both` }}
            >
              <service.icon className="size-9 text-parlour-leaf transition group-hover:scale-110 group-hover:text-parlour-brass" />
              <h3 className="mt-6 text-2xl font-bold">{service.title}</h3>
              <p className="mt-3 leading-7 text-parlour-ink/68">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Menu() {
  return (
    <section id="menu" className="bg-parlour-charcoal px-5 py-20 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.26em] text-parlour-brass">Dummy menu</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Indian salon pricing for launch.</h2>
          <p className="mt-5 leading-8 text-white/68">
            Prices are placeholders for now and can be adjusted to match the actual shop menu before publishing.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {menu.map(([item, price]) => (
            <div key={item} className="service-row flex items-center justify-between gap-4 border border-white/10 bg-white/[0.055] px-5 py-4">
              <span className="font-semibold text-white/90">{item}</span>
              <span className="shrink-0 text-lg font-black text-parlour-brass">{price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="overflow-hidden bg-parlour-leaf px-5 py-20 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="grid grid-cols-2 gap-4">
            {gallery.map((label, index) => (
              <div
                key={label}
                className="min-h-40 border border-white/12 bg-white/[0.08] p-5 transition duration-300 hover:-translate-y-1 hover:bg-parlour-brass hover:text-parlour-ink sm:min-h-56"
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-parlour-brass">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-16 text-2xl font-bold">{label}</p>
              </div>
            ))}
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.26em] text-parlour-brass">Why customers return</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">A neighbourhood parlour with a polished finish.</h2>
            <div className="mt-8 space-y-5">
              {["Clean tools and tidy chairs", "Quick service for regular grooming", "Classic Indian gents parlour menu", "Easy access from Kogilu Main Road"].map((text) => (
                <div key={text} className="flex items-center gap-3">
                  <CalendarCheck className="size-5 text-parlour-brass" />
                  <span className="font-semibold text-white/78">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Owner() {
  return (
    <section id="owner" className="relative isolate min-h-[700px] overflow-hidden bg-parlour-ink text-white sm:min-h-[760px]">
      <img
        src="/images/owner.png"
        alt="M Suresh, owner of Suresh Gents Beauty Parlour"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[68%_top] sm:object-[62%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(16,20,21,0.08)_0%,rgba(16,20,21,0.22)_36%,rgba(16,20,21,0.94)_72%,rgba(16,20,21,1)_100%)] sm:bg-[linear-gradient(90deg,rgba(16,20,21,0.96)_0%,rgba(16,20,21,0.84)_34%,rgba(16,20,21,0.38)_62%,rgba(16,20,21,0.08)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-[linear-gradient(0deg,rgba(16,20,21,0.72),rgba(16,20,21,0))]" />

      <div className="mx-auto flex min-h-[700px] max-w-7xl items-end px-4 py-10 sm:min-h-[760px] sm:items-center sm:px-8 sm:py-20">
        <div className="max-w-2xl animate-reveal">
          <div className="inline-flex items-center gap-2 border border-parlour-brass/50 bg-parlour-brass/15 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-parlour-brass backdrop-blur sm:px-4 sm:text-sm sm:tracking-[0.22em]">
            <Award className="size-4" />
            Owner & Master Stylist
          </div>
          <h2 className="mt-5 font-display text-4xl leading-none sm:mt-6 sm:text-6xl">
            M Suresh
          </h2>
          <p className="mt-4 max-w-xl text-xl font-bold leading-8 text-white sm:mt-5 sm:text-2xl sm:leading-9">
            30 years of hands-on grooming experience.
          </p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/72 sm:mt-6 sm:text-base sm:leading-8">
            A trusted neighbourhood professional bringing steady hands, practical style advice, and a sharp eye for clean finishing to every haircut, shave, and grooming session.
          </p>
          <div className="mt-7 grid max-w-xl gap-3 sm:mt-9 sm:grid-cols-2 sm:gap-4">
            <div className="border border-white/12 bg-white/[0.07] p-5 backdrop-blur-md">
              <p className="text-3xl font-black text-parlour-brass sm:text-4xl">30+</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/68 sm:text-sm">Years Experience</p>
            </div>
            <div className="border border-white/12 bg-white/[0.07] p-5 backdrop-blur-md">
              <Scissors className="size-7 text-parlour-brass" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/68 sm:text-sm">Gents Grooming Expert</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="bg-[#f3e7d2] px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="border border-parlour-ink/10 bg-white p-8">
          <p className="text-sm font-bold uppercase tracking-[0.26em] text-parlour-copper">Visit the parlour</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Find us in Yelahanka.</h2>
          <p className="mt-6 leading-8 text-parlour-ink/70">
            Kurlappa Shopping Mall, No:3, Kogilu Main Rd, Shankrappa Layout, Maruthi Nagar, Yelahanka, Bengaluru, Karnataka 560064
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-parlour-ink px-5 py-4 font-bold text-white transition hover:bg-parlour-leaf">
              <MapPin className="size-4" />
              Open Google Maps
            </a>
            <a href="tel:+910000000000" className="inline-flex items-center justify-center gap-2 border border-parlour-ink/15 px-5 py-4 font-bold transition hover:border-parlour-brass hover:text-parlour-copper">
              <Phone className="size-4" />
              Add Phone
            </a>
          </div>
        </div>
        <div className="relative min-h-80 overflow-hidden border border-parlour-ink/10 bg-parlour-ink">
          <iframe
            title="Google Maps preview for Suresh Gents Beauty Parlour"
            src={mapEmbedUrl}
            className="h-full min-h-80 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-parlour-ink px-4 py-3 text-sm font-bold text-white shadow-glow transition hover:bg-parlour-leaf"
          >
            <MapPin className="size-4 text-parlour-brass" />
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-parlour-brass/35 bg-parlour-charcoal px-5 py-8 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-bold">Suresh Gents Beauty Parlour</p>
        <p className="text-sm text-white/55">Haircuts, beard, facials, massage, and grooming in Yelahanka.</p>
      </div>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
