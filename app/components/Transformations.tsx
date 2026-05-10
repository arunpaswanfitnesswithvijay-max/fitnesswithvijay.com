export default function Transformations() {
  const cases = [
    {
      name: "Rahul M.",
      duration: "12 weeks",
      program: "Fat Loss",
      before: { weight: "94 kg", fat: "28%" },
      after: { weight: "78 kg", fat: "14%" },
      note: "Lost 16 kg, visible abs",
      color: "from-orange-500/20",
    },
    {
      name: "Sneha K.",
      duration: "16 weeks",
      program: "Muscle Building",
      before: { weight: "52 kg", fat: "30%" },
      after: { weight: "58 kg", fat: "20%" },
      note: "+6 kg lean muscle",
      color: "from-amber-500/20",
    },
    {
      name: "Arjun P.",
      duration: "8 weeks",
      program: "HIIT Conditioning",
      before: { weight: "88 kg", fat: "25%" },
      after: { weight: "80 kg", fat: "16%" },
      note: "8 kg down, 5K in 22 min",
      color: "from-yellow-500/20",
    },
  ];

  return (
    <section id="transformations" className="relative py-28 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <span className="text-xs text-accent tracking-widest uppercase font-semibold mb-4 block">Client Results</span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-black leading-tight max-w-lg">
            Numbers don&apos;t lie.{" "}
            <span className="font-display italic font-normal text-muted">Neither do my clients.</span>
          </h2>
          <p className="text-muted text-sm max-w-xs">Real transformations from real people. No filters, no tricks.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cases.map((c) => (
            <div key={c.name} className={`relative bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-accent/20 transition-all duration-300`}>
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.color} to-transparent`} />
              <div className="p-7">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="font-bold">{c.name}</p>
                    <p className="text-xs text-muted">{c.program} · {c.duration}</p>
                  </div>
                  <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-semibold">{c.note}</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-surface rounded-xl p-4">
                    <p className="text-xs text-muted mb-3 uppercase tracking-wider">Before</p>
                    <p className="text-2xl font-black text-white/40">{c.before.weight}</p>
                    <p className="text-xs text-muted">{c.before.fat} body fat</p>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <p className="text-xs text-accent mb-3 uppercase tracking-wider">After</p>
                    <p className="text-2xl font-black text-accent">{c.after.weight}</p>
                    <p className="text-xs text-accent/70">{c.after.fat} body fat</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="bg-accent rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-black font-black text-2xl md:text-3xl mb-1">Ready to be the next success story?</p>
            <p className="text-black/60 text-sm">First consultation is completely free. No commitment.</p>
          </div>
          <a href="https://wa.me/919980157112" target="_blank" className="shrink-0 bg-black text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-black/80 transition-all whitespace-nowrap">
            Start Today ↗
          </a>
        </div>
      </div>
    </section>
  );
}
