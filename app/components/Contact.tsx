export default function Contact() {
  const channels = [
    { icon: "💬", label: "WhatsApp", value: "+91 99801 57112", href: "https://wa.me/919980157112" },
    { icon: "📧", label: "Email", value: "vijay@vijayfitness.in", href: "mailto:vijay@vijayfitness.in" },
    { icon: "📍", label: "Location", value: "Bengaluru, Karnataka", href: "#" },
    { icon: "⏰", label: "Hours", value: "Mon–Sat: 5AM – 9PM", href: "#" },
  ];

  return (
    <section id="contact" className="relative py-28 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-xs text-accent tracking-widest uppercase font-semibold mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Let&apos;s build your{" "}
              <span className="font-display italic font-normal text-muted">best body.</span>
            </h2>
            <p className="text-muted leading-relaxed mb-10">
              The first consultation is free. Tell me your goals and I&apos;ll put together a plan that actually works. No fluff, no upsells — just results.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {channels.map((c) => (
                <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} className="group bg-card border border-white/5 rounded-2xl p-5 hover:border-accent/30 transition-all duration-300">
                  <span className="text-xl block mb-3">{c.icon}</span>
                  <p className="text-xs text-muted mb-1">{c.label}</p>
                  <p className="text-sm font-semibold group-hover:text-accent transition-colors">{c.value}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Right — CTA card */}
          <div className="bg-card border border-white/5 rounded-[32px] p-10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-3xl mb-8 anim-float">
                🏋️
              </div>
              <h3 className="text-2xl font-black mb-3">Free Consultation</h3>
              <p className="text-muted text-sm leading-relaxed mb-8">
                30-minute session to assess your current fitness, discuss your goals, and outline a personalised plan.
              </p>
              <ul className="space-y-3 mb-10">
                {["No commitment required", "Personalised assessment", "Custom plan outline", "Q&A with Vijay"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted">
                    <span className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/919980157112" target="_blank" className="block w-full bg-accent text-black text-center py-4 rounded-full font-bold hover:bg-accent-dark transition-all">
                Book Free Session ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
