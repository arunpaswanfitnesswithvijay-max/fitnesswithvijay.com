import Image from "next/image";

export default function Hero() {
  const stats = [
    { value: "8+", label: "Years Experience" },
    { value: "300+", label: "Clients Trained" },
    { value: "95%", label: "Success Rate" },
    { value: "15+", label: "Certifications" },
  ];

  const tags = ["FAT LOSS", "MUSCLE BUILDING", "HIIT", "FUNCTIONAL FITNESS", "NUTRITION", "ONLINE COACHING", "MOBILITY", "STRENGTH"];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Amber glow blob */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            <div className="anim-up flex items-center gap-3 mb-8">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-xs text-muted tracking-widest uppercase">Certified Personal Trainer · Bengaluru</span>
              <span className="w-2 h-2 bg-accent rounded-full" />
            </div>

            <h1 className="anim-up-d1 text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase mb-3">
              Train
            </h1>
            <div className="anim-up-d1 flex flex-wrap items-center gap-3 mb-3">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase">With</h1>
              <span className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-accent uppercase">Bijay</span>
            </div>

            <p className="anim-up-d2 text-muted text-lg max-w-md leading-relaxed mb-10">
              Stop guessing. Start transforming. I build science-backed programs that fit your life — whether you&apos;re losing fat, building muscle, or training for performance.
            </p>

            <div className="anim-up-d2 flex flex-wrap gap-4 mb-12">
              <a href="https://wa.me/919980157112" target="_blank" className="bg-accent text-black px-8 py-4 rounded-full font-bold hover:bg-accent-dark transition-all flex items-center gap-2 text-sm">
                Book Free Session ↗
              </a>
              <a href="#about" className="border border-white/15 px-8 py-4 rounded-full font-medium hover:border-accent hover:text-accent transition-all text-sm">
                Learn More
              </a>
            </div>

            {/* Stats row */}
            <div className="anim-up-d3 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="bg-card border border-white/5 rounded-2xl p-4">
                  <p className="text-2xl font-black text-accent mb-1">{s.value}</p>
                  <p className="text-xs text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div className="anim-up-d2 relative flex justify-center lg:justify-end">
            {/* Amber ring behind photo */}
            <div className="absolute inset-4 rounded-[40px] border border-accent/20" />
            <div className="relative w-full max-w-sm lg:max-w-full aspect-[3/4] rounded-[40px] overflow-hidden border border-white/5">
              <Image
                src="/vijayphoto.png"
                alt="Bijay — Personal Fitness Trainer"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
            </div>

            {/* Floating badge */}
            <a href="https://wa.me/919980157112" target="_blank" className="absolute bottom-8 left-4 bg-card border border-accent/30 rounded-2xl px-5 py-3 backdrop-blur-sm hover:border-accent transition-colors">
              <p className="text-xs text-muted mb-0.5">Next available</p>
              <p className="text-sm font-bold text-accent">Book Free Session ↗</p>
            </a>
          </div>

        </div>
      </div>

      {/* Ticker */}
      <div className="border-t border-white/5 py-4 overflow-hidden bg-bg-alt">
        <div className="anim-ticker whitespace-nowrap flex gap-12 text-xs font-semibold tracking-widest text-muted uppercase">
          {Array(2).fill(null).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              {tags.map((t) => (
                <span key={t} className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />{t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
