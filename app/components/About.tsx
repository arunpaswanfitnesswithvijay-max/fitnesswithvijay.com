export default function About() {
  const pillars = [
    { icon: "🔬", title: "Science-Backed", desc: "Every program is built on exercise physiology and nutrition science — no fads." },
    { icon: "🎯", title: "Goal-Specific", desc: "Fat loss, muscle gain, endurance — your goal shapes every session." },
    { icon: "📈", title: "Progressive", desc: "Structured overload ensures you keep improving week after week." },
    { icon: "🤝", title: "Accountable", desc: "Regular check-ins and adjustments keep you on track." },
  ];

  return (
    <section id="about" className="relative py-28 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left */}
          <div>
            <span className="text-xs text-accent tracking-widest uppercase font-semibold mb-4 block">About Bijay</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Your results are my{" "}
              <span className="font-display italic font-normal text-muted">obsession.</span>
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              I&apos;m Bijay — a certified personal trainer with 8+ years of hands-on experience helping people in Bengaluru and online completely transform their bodies and mindset.
            </p>
            <p className="text-muted leading-relaxed mb-10">
              I specialize in fat loss, functional strength, and HIIT programming. My approach combines smart training with sustainable nutrition — no crash diets, no cookie-cutter plans.
            </p>

            <div className="flex flex-wrap gap-3">
              {["NASM Certified PT", "Precision Nutrition L1", "CrossFit L1 Trainer", "TRX Certified", "Kettlebell Specialist"].map((c) => (
                <span key={c} className="text-xs border border-accent/30 text-accent px-4 py-2 rounded-full">{c}</span>
              ))}
            </div>
          </div>

          {/* Right — philosophy cards */}
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div key={p.title} className="bg-card border border-white/5 rounded-2xl p-6 hover:border-accent/20 transition-all duration-300">
                <span className="text-2xl block mb-4">{p.icon}</span>
                <h3 className="font-bold mb-2">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
