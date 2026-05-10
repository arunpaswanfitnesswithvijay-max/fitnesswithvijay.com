export default function Services() {
  const services = [
    {
      num: "01",
      icon: "🔥",
      title: "Fat Loss Programs",
      desc: "Calorie-deficit training combined with metabolic conditioning to burn fat while preserving muscle.",
      tags: ["HIIT", "Cardio", "Nutrition"],
    },
    {
      num: "02",
      icon: "💪",
      title: "Muscle Building",
      desc: "Progressive hypertrophy programs with structured splits, volume tracking, and diet support.",
      tags: ["Hypertrophy", "Strength", "Macros"],
    },
    {
      num: "03",
      icon: "⚡",
      title: "HIIT & Conditioning",
      desc: "High-intensity interval training to boost cardiovascular fitness and torch calories fast.",
      tags: ["Endurance", "Agility", "Power"],
    },
    {
      num: "04",
      icon: "🧠",
      title: "Online Coaching",
      desc: "Full remote coaching with custom plans, weekly check-ins, and 24/7 WhatsApp support.",
      tags: ["Remote", "Flexible", "Tracked"],
    },
    {
      num: "05",
      icon: "🥗",
      title: "Nutrition Planning",
      desc: "Personalised meal plans, macro targets, and supplement guidance aligned with your goals.",
      tags: ["Meal Plans", "Macros", "Supplements"],
    },
    {
      num: "06",
      icon: "🤸",
      title: "Functional Fitness",
      desc: "Movement-based training that improves everyday performance, posture, and injury resilience.",
      tags: ["Mobility", "Core", "Balance"],
    },
  ];

  return (
    <section id="services" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <span className="text-xs text-accent tracking-widest uppercase font-semibold mb-4 block">What I Offer</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Programs built for{" "}
              <span className="font-display italic font-normal text-muted">real results.</span>
            </h2>
          </div>
          <a href="https://wa.me/919980157112" target="_blank" className="shrink-0 bg-accent text-black px-7 py-3 rounded-full font-bold text-sm hover:bg-accent-dark transition-all">
            Get Started ↗
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.num} className="group bg-card border border-white/5 rounded-2xl p-7 hover:border-accent/30 hover:bg-[#1f1a0e] transition-all duration-400 cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <span className="text-3xl">{s.icon}</span>
                <span className="text-xs text-muted font-mono">{s.num}</span>
              </div>
              <h3 className="font-bold text-lg mb-3 group-hover:text-accent transition-colors duration-300">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="text-xs bg-surface text-muted px-3 py-1 rounded-full group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
