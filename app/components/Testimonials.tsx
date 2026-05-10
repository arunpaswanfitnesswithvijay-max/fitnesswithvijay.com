export default function Testimonials() {
  const reviews = [
    {
      name: "Meera S.",
      role: "Lost 12 kg in 3 months",
      text: "Bijay completely changed how I think about fitness. The program was tough but manageable, and the nutrition guidance made all the difference. I finally have the body I always wanted.",
      avatar: "M",
    },
    {
      name: "Karthik R.",
      role: "Gained 8 kg muscle in 4 months",
      text: "I was a skinny guy who had tried everything. Bijay's structured bulking program with proper progressive overload finally got me results. My confidence is through the roof.",
      avatar: "K",
    },
    {
      name: "Priya N.",
      role: "Online coaching client",
      text: "Being in a different city, I was skeptical about online coaching. But Bijay's check-ins, video form reviews, and constant WhatsApp support made it feel like he was right there with me.",
      avatar: "P",
    },
    {
      name: "Suresh T.",
      role: "HIIT & conditioning",
      text: "My stamina was terrible. After 8 weeks of Bijay's HIIT program, I ran my first 10K. The workouts are intense but the results speak for themselves.",
      avatar: "S",
    },
    {
      name: "Ananya B.",
      role: "Post-pregnancy transformation",
      text: "Bijay was incredibly patient and designed a safe program for my post-pregnancy recovery. Six months later I'm stronger than I was before pregnancy. Absolutely recommend.",
      avatar: "A",
    },
    {
      name: "Dev M.",
      role: "Competition prep",
      text: "Bijay prepped me for my first physique competition. His attention to detail on peak week, posing, and diet was exceptional. Placed 2nd in my category!",
      avatar: "D",
    },
  ];

  return (
    <section id="testimonials" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <span className="text-xs text-accent tracking-widest uppercase font-semibold mb-4 block">Testimonials</span>
        <h2 className="text-4xl md:text-5xl font-black leading-tight mb-16 max-w-2xl">
          What clients say about{" "}
          <span className="font-display italic font-normal text-muted">training with Bijay.</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="bg-card border border-white/5 rounded-2xl p-7 hover:border-white/10 transition-all duration-300 flex flex-col">
              <div className="flex gap-1 mb-5">
                {Array(5).fill(null).map((_, i) => <span key={i} className="text-accent text-sm">★</span>)}
              </div>
              <p className="text-white/70 text-sm leading-relaxed flex-1 mb-7">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                <div className="w-10 h-10 bg-accent text-black rounded-full flex items-center justify-center font-black text-sm shrink-0">
                  {r.avatar}
                </div>
                <div>
                  <p className="font-bold text-sm">{r.name}</p>
                  <p className="text-muted text-xs">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
