import React from "react";
import {
  ShoppingBag,
  Search,
  User,
  Zap,
  Heart,
  Headphones,
  Award,
  Globe,
  ShieldCheck,
  Instagram,
  MessageCircle,
  MessageSquare,
  ArrowLeft,
  Star,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function HomePage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goldGrad = "linear-gradient(135deg,#c9a227 0%,#f5c518 50%,#d4a017 100%)";

  const products_shahid = [
    { name: "شاهد VIP شهر رسمي", sub: "ملف خاص • شهر", oldPrice: "٣٣", newPrice: "١٣", sport: false },
    { name: "شاهد رياضة شهر", sub: "مشترك • شهر", oldPrice: "٣٣", newPrice: "١٥.٩٩", sport: true },
    { name: "شاهد VIP 3 أشهر", sub: "ملف خاص • 3 أشهر", oldPrice: "٨٠", newPrice: "٣٥", sport: false },
  ];

  const products_netflix = [
    { name: "نتفليكس شهر خاص", sub: "ملف خاص • شهر", oldPrice: "٤٠", newPrice: "١٨.٩" },
    { name: "نتفليكس مشترك 4K", sub: "مشترك • شهر", oldPrice: "١٧", newPrice: "١١" },
    { name: "نتفليكس 3 أشهر خاص", sub: "ملف خاص • 3 أشهر", oldPrice: "١٠٠", newPrice: "٥٠" },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Tajawal:wght@400;500;700&display=swap');
        * { font-family: 'Cairo', 'Tajawal', sans-serif; box-sizing: border-box; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .marquee-content { display: inline-flex; animation: marquee 20s linear infinite; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .card-hover { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(245,197,24,0.15) !important; }
        .gold-border-glow { box-shadow: 0 0 0 1px rgba(245,197,24,0.3); }
        .gold-border-glow:hover { box-shadow: 0 0 0 1px rgba(245,197,24,0.7), 0 8px 32px rgba(245,197,24,0.12); }
      ` }} />

      <div dir="rtl" className="min-h-screen text-white pb-24" style={{ background: "#0d0d0d" }}>

        {/* ── NAVBAR ── */}
        <header style={{ background: "#0a0a0a", borderBottom: "1px solid #1e1e1e" }}
          className="sticky top-0 z-50 h-14 flex items-center justify-between px-5">
          <div className="flex items-center gap-4">
            <button style={{ color: "#888" }} className="hover:text-white transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button style={{ color: "#888" }} className="hover:text-white transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button style={{ color: "#888" }} className="hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="MAX" className="h-9 w-auto object-contain" />
          </div>
        </header>

        <main className="px-4 py-5 space-y-7 max-w-xl mx-auto">

          {/* ── HERO BANNER ── */}
          <section className="relative overflow-hidden rounded-2xl"
            style={{ background: "linear-gradient(135deg,#0d0d0d 0%,#111 50%,#151515 100%)", border: "1px solid #252525", minHeight: "220px" }}>
            {/* Glow accents */}
            <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "180px", height: "180px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,197,24,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-30px", left: "-20px", width: "140px", height: "140px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,197,24,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
            {/* Top gold line */}
            <div style={{ position: "absolute", top: 0, right: 0, width: "60%", height: "2px", background: "linear-gradient(to left, #f5c518, transparent)" }} />

            <div className="relative z-10 flex items-center justify-between p-5 gap-3">
              {/* Text */}
              <div className="flex-1 space-y-3">
                <h1 className="text-2xl font-black text-white leading-tight">ماكس ستور</h1>
                <p className="text-sm text-gray-300 leading-relaxed font-semibold">
                  ملاذك المناسب<br />
                  <span className="text-white font-black">للإشتراكات الرقمية</span>
                </p>
                <p style={{ color: "#f5c518" }} className="text-xs font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" /> حسابات رسمية بأسعار مغرية!
                </p>
                <button className="mt-1 text-xs font-black px-5 py-2 rounded-full transition-all duration-200 hover:scale-105"
                  style={{ background: goldGrad, color: "#000", boxShadow: "0 4px 16px rgba(245,197,24,0.35)" }}>
                  تسوق الآن ←
                </button>
              </div>

              {/* Stacked cards */}
              <div className="relative shrink-0" style={{ width: "140px", height: "170px" }}>
                {/* Disney+ card */}
                <div className="absolute rounded-xl overflow-hidden"
                  style={{ width: "86px", height: "114px", top: "8px", right: "0px", background: "linear-gradient(135deg,#0f1b40,#1a237e)", transform: "rotate(14deg)", zIndex: 1, border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 8px 24px rgba(0,0,0,0.7)" }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                    <span className="text-white font-black text-2xl" style={{ fontStyle: "italic" }}>D+</span>
                    <span style={{ color: "#90caf9", fontSize: "8px", letterSpacing: "2px" }} className="font-bold">DISNEY+</span>
                  </div>
                </div>

                {/* Shahid card */}
                <div className="absolute rounded-xl overflow-hidden"
                  style={{ width: "90px", height: "118px", top: "24px", right: "24px", background: "linear-gradient(135deg,#1a0a2e,#5b1fa5)", transform: "rotate(-6deg)", zIndex: 2, border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 10px 28px rgba(0,0,0,0.7)" }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                    <div className="flex gap-0.5 items-end">
                      {[16, 24, 16].map((h, i) => (
                        <div key={i} style={{ width: "6px", height: `${h}px`, borderRadius: "3px", background: "linear-gradient(to bottom,#e2b8ff,#a855f7)" }} />
                      ))}
                    </div>
                    <span className="text-white font-black text-[9px] tracking-widest mt-1">SHAHID</span>
                    <span style={{ color: "#c084fc", fontSize: "7px" }} className="font-bold">VIP</span>
                  </div>
                </div>

                {/* Netflix card */}
                <div className="absolute rounded-xl overflow-hidden"
                  style={{ width: "94px", height: "122px", top: "36px", right: "42px", background: "linear-gradient(160deg,#1a0000,#8b0000)", transform: "rotate(4deg)", zIndex: 3, border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 12px 32px rgba(180,28,28,0.4)" }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                    <span className="text-white font-black leading-none" style={{ fontSize: "64px", fontStyle: "italic", letterSpacing: "-3px", textShadow: "0 0 30px rgba(220,38,38,0.8)" }}>N</span>
                    <span style={{ color: "#fca5a5", fontSize: "8px", letterSpacing: "3px" }} className="font-black -mt-2">NETFLIX</span>
                  </div>
                </div>

                {/* Gold badge */}
                <div className="absolute z-10 font-black text-black text-[9px] px-2 py-0.5 rounded-full"
                  style={{ background: goldGrad, bottom: "12px", right: "4px", transform: "rotate(-4deg)", boxShadow: "0 2px 8px rgba(245,197,24,0.5)" }}>
                  ضمان ذهبي ✓
                </div>
              </div>
            </div>
          </section>

          {/* ── وسائل الدفع ── */}
          <section className="rounded-2xl p-4" style={{ background: "#111", border: "1px solid #1e1e1e" }}>
            <h2 className="text-center text-sm font-bold mb-4 text-gray-300">
              نوفر لك <span style={{ color: "#f5c518" }}>طرق الدفع</span> العالمية والمحلية
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { label: "Apple Pay", color: "#fff" },
                { label: "Mastercard", color: "#eb5757" },
                { label: "VISA", color: "#60a5fa", italic: true },
                { label: "mada", color: "#4ade80" },
                { label: "STC Pay", color: "#c084fc" },
                { label: "PayPal", color: "#93c5fd" },
              ].map((m, i) => (
                <div key={i} className="px-3 py-1.5 rounded-lg text-xs font-bold"
                  style={{ background: "#0a0a0a", border: "1px solid #232323", color: m.color, fontStyle: m.italic ? "italic" : "normal" }}>
                  {m.label}
                </div>
              ))}
            </div>
          </section>

          {/* ── شريط متحرك ── */}
          <section className="-mx-4 overflow-hidden py-3" style={{ background: "#0a0a0a", borderTop: "1px solid #1e1e1e", borderBottom: "1px solid #1e1e1e" }}>
            <div className="overflow-hidden whitespace-nowrap">
              <div className="marquee-content inline-flex items-center gap-6">
                {[...Array(14)].map((_, i) => (
                  <span key={i} className="flex items-center gap-3 shrink-0">
                    <img src="/logo.png" alt="M" className="h-5 w-auto object-contain" />
                    <span className="text-white font-black text-xs tracking-widest">MAX STORE</span>
                    <span style={{ color: "#f5c518" }}>✦</span>
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ── قسم شاهد VIP ── */}
          <ProductSection
            title="اشتراكات شاهد VIP"
            accentColor="#f5c518"
            products={products_shahid}
            renderCard={(p, i) => (
              <ShahidCard key={i} product={p} goldGrad={goldGrad} />
            )}
          />

          {/* ── قسم نتفليكس ── */}
          <ProductSection
            title="اشتراكات نتفليكس"
            accentColor="#f5c518"
            products={products_netflix}
            renderCard={(p, i) => (
              <NetflixCard key={i} product={p} goldGrad={goldGrad} />
            )}
          />

          {/* ── دعم 24/7 ── */}
          <section className="rounded-2xl p-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0f0f0f,#161616)", border: "1px solid #252525" }}>
            <div style={{ position: "absolute", top: "-20px", left: "-20px", width: "120px", height: "120px", borderRadius: "50%", background: "radial-gradient(circle,rgba(245,197,24,0.1) 0%,transparent 70%)", pointerEvents: "none" }} />
            <div className="relative z-10 flex items-center gap-5">
              <div className="shrink-0 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center relative" style={{ border: "2px solid rgba(245,197,24,0.3)", background: "#0d0d0d" }}>
                  <Headphones className="w-10 h-10" style={{ color: "#f5c518" }} />
                  <div className="absolute -bottom-2 -right-2 text-black font-black text-[10px] px-2 py-0.5 rounded-full" style={{ background: goldGrad }}>24/7</div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-black text-white leading-snug">طاقم ماكس جاهز لخدمتكم على مدار الساعة</h3>
                <p className="text-gray-500 text-xs">تحت أي سماء وفوق أي أرض، طاقم ماكس حاضر لخدمتك</p>
                <button className="text-xs font-bold px-5 py-2 rounded-full transition-all hover:scale-105 mt-1"
                  style={{ border: "1px solid rgba(245,197,24,0.4)", color: "#f5c518", background: "rgba(245,197,24,0.06)" }}>
                  تواصل معنا
                </button>
              </div>
            </div>
          </section>

          {/* ── ماذا يميزنا ── */}
          <section>
            <div className="text-center mb-6">
              <h3 className="text-xl font-black text-white mb-1">ماذا يميزنا عن غيرنا؟</h3>
              <p className="text-gray-500 text-sm">عالم المنتجات الرقمية</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <Award className="w-8 h-8" style={{ color: "#f5c518" }} />, title: "ضمان ماكس الذهبي", text: "تعويض فوري طوال فترة الاشتراك." },
                { icon: <Headphones className="w-8 h-8" style={{ color: "#f5c518" }} />, title: "لأنك تستحق الأفضل", text: "دعم فني متواجد على مدار الساعة." },
                { icon: <Globe className="w-8 h-8" style={{ color: "#f5c518" }} />, title: "ادفع وأنت مرتاح", text: "Apple Pay, Visa, Mada, STC Pay" },
                { icon: <ShieldCheck className="w-8 h-8" style={{ color: "#f5c518" }} />, title: "تسوق بأمان", text: "تشفير عالي لحماية بياناتك." },
              ].map((f, i) => (
                <div key={i} className="flex flex-col items-center text-center p-4 rounded-2xl transition-all"
                  style={{ background: "#0f0f0f", border: "1px solid #1e1e1e" }}>
                  <div className="mb-3">{f.icon}</div>
                  <h4 className="font-bold text-white text-sm mb-1">{f.title}</h4>
                  <p className="text-gray-500 text-[11px] leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── النشرة البريدية ── */}
          <section className="rounded-2xl p-6 text-center" style={{ background: "#0f0f0f", border: "1px solid #1e1e1e" }}>
            <h3 className="text-white font-black text-lg mb-1">كن أول من يعرف!</h3>
            <p className="text-gray-500 text-sm mb-5">اشترك بنشرتنا البريدية ليصلك كل جديد.</p>
            <div className="flex gap-2 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="flex-1 text-sm text-white text-right placeholder:text-gray-600 focus:outline-none"
                style={{ background: "#0a0a0a", border: "1px solid #272727", borderRadius: "10px", padding: "10px 14px", transition: "border-color 0.2s" }}
                onFocus={e => (e.target.style.borderColor = "#f5c518")}
                onBlur={e => (e.target.style.borderColor = "#272727")}
              />
              <button className="text-sm font-black px-5 py-2 rounded-xl transition-all hover:scale-105 shrink-0"
                style={{ background: goldGrad, color: "#000", boxShadow: "0 4px 14px rgba(245,197,24,0.3)" }}>
                اشترك
              </button>
            </div>
          </section>

        </main>

        {/* ── FOOTER ── */}
        <footer className="pt-8 pb-12 px-4 mt-6" style={{ background: "#080808", borderTop: "1px solid #1a1a1a" }}>
          <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
            <button onClick={scrollToTop} className="text-gray-600 text-sm hover:text-white transition-colors flex items-center gap-1">
              العودة إلى أعلى ↑
            </button>

            <div className="flex gap-3">
              {[
                { label: "X", hover: "hover:text-white" },
              ].map((s, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 transition-all"
                  style={{ background: "#111", border: "1px solid #222" }}>
                  <span className="font-bold text-sm">{s.label}</span>
                </a>
              ))}
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 transition-all"
                style={{ background: "#111", border: "1px solid #222" }}>
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <img src="/logo.png" alt="MAX" className="h-14 w-auto object-contain" />

            <div className="text-center space-y-2">
              <h4 className="font-bold text-sm" style={{ color: "#f5c518" }}>روابط تهمك</h4>
              {["الشروط والأحكام", "الاسترجاع والاستبدال"].map((l, i) => (
                <div key={i}><a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">{l}</a></div>
              ))}
            </div>

            <div className="text-center space-y-3">
              <h4 className="font-bold text-sm" style={{ color: "#f5c518" }}>خدمة العملاء</h4>
              <div className="flex gap-3 justify-center">
                {[
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>,
                  <MessageSquare className="w-5 h-5" />,
                  <MessageCircle className="w-5 h-5" />,
                ].map((icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-500 transition-all hover:text-white"
                    style={{ background: "#111", border: "1px solid #222" }}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="px-4 py-2 rounded-lg" style={{ background: "#111", border: "1px solid #1e1e1e" }}>
              <p className="text-gray-600 text-xs">وثيقة العمل الحر FL-XXXXXX</p>
            </div>

            <div className="flex gap-3 flex-wrap justify-center">
              {["Apple Pay", "Visa", "Mastercard", "Mada"].map((m, i) => (
                <span key={i} className="text-gray-600 text-xs font-bold">{m}</span>
              ))}
            </div>

            <p className="text-gray-700 text-xs">صنع بإتقان على منصة توسع</p>
          </div>
        </footer>
      </div>
    </>
  );
}

function ProductSection({ title, accentColor, products, renderCard }: {
  title: string;
  accentColor: string;
  products: any[];
  renderCard: (p: any, i: number) => React.ReactNode;
}) {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <h3 className="text-white font-black text-base">{title}</h3>
          <div className="mt-1 h-0.5 w-2/3" style={{ background: `linear-gradient(to right,${accentColor},transparent)` }} />
        </div>
        <button className="text-xs font-bold flex items-center gap-1 transition-opacity hover:opacity-70" style={{ color: accentColor }}>
          <ArrowLeft className="w-3 h-3" />
          عرض الكل
        </button>
      </div>
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 snap-x snap-mandatory">
        {products.map((p, i) => renderCard(p, i))}
      </div>
    </section>
  );
}

function ShahidCard({ product, goldGrad }: { product: any; goldGrad: string }) {
  const isSport = product.sport;
  return (
    <div className="w-44 shrink-0 snap-start rounded-2xl overflow-hidden flex flex-col card-hover"
      style={{ background: "#111", border: "1px solid #232323", boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }}>
      {/* Image area */}
      <div className="relative overflow-hidden" style={{ height: "172px", background: isSport ? "linear-gradient(160deg,#0a0a00,#1a1500,#2a2000)" : "linear-gradient(160deg,#0a0a00,#181200,#252000)" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 70%,rgba(245,197,24,0.18) 0%,transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "12px 12px", pointerEvents: "none" }} />

        {/* Badges */}
        <div className="absolute top-0 left-0 z-20 text-black font-black text-[9px] px-2 py-1 rounded-br-xl" style={{ background: goldGrad }}>ضمان ذهبي</div>
        <div className="absolute top-0 right-0 z-20 text-white font-black text-[9px] px-2 py-1 rounded-bl-xl"
          style={{ background: isSport ? "rgba(245,197,24,0.25)" : "rgba(245,197,24,0.15)", color: "#f5c518" }}>
          {isSport ? "رياضة" : "VIP"}
        </div>

        {/* Shahid logo */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 z-10">
          <div className="flex gap-1 items-end mb-0.5">
            {[16, 24, 16].map((h, i) => (
              <div key={i} style={{ width: "7px", height: `${h}px`, borderRadius: "3px", background: goldGrad }} />
            ))}
          </div>
          <span className="text-white font-black text-sm tracking-[3px]">SHAHID</span>
          {isSport
            ? <span className="font-bold text-[10px]" style={{ color: "#f5c518" }}>SPORTS</span>
            : <span className="font-bold text-[10px]" style={{ color: "#d4a017" }}>VIP</span>
          }
        </div>

        {/* Feature chips */}
        <div className="absolute bottom-0 left-0 right-0 px-2 pb-2 flex gap-1 justify-center z-20"
          style={{ background: "linear-gradient(to top,rgba(0,0,0,0.8),transparent)" }}>
          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md flex items-center gap-0.5"
            style={{ background: "rgba(245,197,24,0.15)", color: "#f5c518" }}>
            <Zap className="w-2.5 h-2.5 fill-current" />4K
          </span>
          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md"
            style={{ background: "rgba(255,255,255,0.07)", color: "#aaa" }}>رسمي</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col gap-2 flex-1" style={{ borderTop: "1px solid #1e1e1e" }}>
        <h4 className="text-xs font-bold text-white leading-snug">{product.name}</h4>
        <p className="text-[10px] text-gray-600">{product.sub}</p>
        <div className="flex items-end justify-between mt-auto">
          <div>
            <div className="text-[10px] text-gray-700 line-through">{product.oldPrice} ر.س</div>
            <div className="text-base font-black leading-none" style={{ color: "#f5c518" }}>
              {product.newPrice} <span className="text-xs font-bold">ر.س</span>
            </div>
          </div>
          <button className="text-gray-700 hover:text-red-400 transition-colors">
            <Heart className="w-4 h-4" />
          </button>
        </div>
        <button className="w-full text-xs font-black py-2 rounded-xl transition-all hover:scale-105"
          style={{ background: goldGrad, color: "#000", boxShadow: "0 4px 12px rgba(245,197,24,0.25)" }}>
          🛒 أضف للسلة
        </button>
      </div>
    </div>
  );
}

function NetflixCard({ product, goldGrad }: { product: any; goldGrad: string }) {
  return (
    <div className="w-44 shrink-0 snap-start rounded-2xl overflow-hidden flex flex-col card-hover"
      style={{ background: "#111", border: "1px solid #232323", boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }}>
      {/* Image area */}
      <div className="relative overflow-hidden" style={{ height: "172px", background: "linear-gradient(160deg,#0d0000,#1a0000,#4a0000)" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 70%,rgba(220,38,38,0.25) 0%,transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "14px 14px", pointerEvents: "none" }} />

        {/* Badges */}
        <div className="absolute top-0 left-0 z-20 text-black font-black text-[9px] px-2 py-1 rounded-br-xl" style={{ background: goldGrad }}>ضمان ذهبي</div>

        {/* Netflix N */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-0">
          <span className="text-white font-black leading-none select-none"
            style={{ fontSize: "70px", fontStyle: "italic", letterSpacing: "-4px", textShadow: "0 0 40px rgba(220,38,38,0.9)" }}>N</span>
          <span style={{ color: "#fca5a5", fontSize: "8px", letterSpacing: "4px" }} className="font-black -mt-3">NETFLIX</span>
        </div>

        {/* Feature chips */}
        <div className="absolute bottom-0 left-0 right-0 px-2 pb-2 flex gap-1 justify-center z-20"
          style={{ background: "linear-gradient(to top,rgba(0,0,0,0.85),transparent)" }}>
          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md flex items-center gap-0.5"
            style={{ background: "rgba(245,197,24,0.15)", color: "#f5c518" }}>
            <Zap className="w-2.5 h-2.5 fill-current" />4K
          </span>
          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md"
            style={{ background: "rgba(255,255,255,0.07)", color: "#aaa" }}>رسمي</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col gap-2 flex-1" style={{ borderTop: "1px solid #1e1e1e" }}>
        <h4 className="text-xs font-bold text-white leading-snug">{product.name}</h4>
        <p className="text-[10px] text-gray-600">{product.sub}</p>
        <div className="flex items-end justify-between mt-auto">
          <div>
            <div className="text-[10px] text-gray-700 line-through">{product.oldPrice} ر.س</div>
            <div className="text-base font-black leading-none" style={{ color: "#f5c518" }}>
              {product.newPrice} <span className="text-xs font-bold">ر.س</span>
            </div>
          </div>
          <button className="text-gray-700 hover:text-red-400 transition-colors">
            <Heart className="w-4 h-4" />
          </button>
        </div>
        <button className="w-full text-xs font-black py-2 rounded-xl transition-all hover:scale-105"
          style={{ background: goldGrad, color: "#000", boxShadow: "0 4px 12px rgba(245,197,24,0.25)" }}>
          🛒 أضف للسلة
        </button>
      </div>
    </div>
  );
}
