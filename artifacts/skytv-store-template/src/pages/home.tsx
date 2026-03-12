import React, { useState, useEffect } from "react";
import {
  ShoppingBag, Search, User, Zap, Heart, Headphones,
  Award, Globe, ShieldCheck, Instagram, MessageCircle,
  MessageSquare, ArrowLeft, Star, Menu, X, ChevronLeft,
  BadgeCheck, Flame, Clock, Crown,
} from "lucide-react";

/* ── Palette ── */
const G = "#f5c518";
const GD = "linear-gradient(135deg,#b8860b 0%,#f5c518 45%,#ffd700 70%,#c9a000 100%)";
const GD2 = "linear-gradient(135deg,#c9a227 0%,#f5c518 100%)";
const BG0 = "#080808";
const BG1 = "#0d0d0d";
const BG2 = "#111111";
const BG3 = "#161616";
const BORDER = "rgba(255,255,255,0.07)";
const BORDER_GOLD = "rgba(245,197,24,0.25)";

/* ── Inline global CSS ── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{font-family:'Cairo',sans-serif;box-sizing:border-box;margin:0;padding:0;}
  body{background:${BG0};color:#fff;-webkit-font-smoothing:antialiased;}
  ::-webkit-scrollbar{width:4px;height:4px;}
  ::-webkit-scrollbar-track{background:${BG1};}
  ::-webkit-scrollbar-thumb{background:#2a2a2a;border-radius:4px;}
  ::-webkit-scrollbar-thumb:hover{background:${G};}
  .no-sb{overflow:hidden;}
  .no-sb:hover{overflow-x:auto;}
  .no-sb::-webkit-scrollbar{height:3px;}

  /* Marquee */
  .mq-wrap{overflow:hidden;}
  .mq-inner{display:inline-flex;animation:mq 25s linear infinite;}
  .mq-inner:hover{animation-play-state:paused;}
  @keyframes mq{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}

  /* Card lift */
  .lift{transition:transform .25s cubic-bezier(.34,1.56,.64,1),box-shadow .25s ease;}
  .lift:hover{transform:translateY(-8px);}

  /* Gold shimmer button */
  .btn-gold{position:relative;overflow:hidden;}
  .btn-gold::after{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;
    background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,.25) 50%,transparent 70%);
    transition:left .5s ease;}
  .btn-gold:hover::after{left:150%;}

  /* Fade in */
  @keyframes fadeUp{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}
  .fade-up{animation:fadeUp .5s ease forwards;}

  /* Pulse ring */
  @keyframes ring{0%{transform:scale(1);opacity:.4;}70%{transform:scale(1.4);opacity:0;}100%{transform:scale(1.4);opacity:0;}}
  .ring::before{content:'';position:absolute;inset:-6px;border-radius:inherit;border:2px solid ${G};animation:ring 2s ease-out infinite;}

  /* Gold glow text */
  .glow{text-shadow:0 0 20px rgba(245,197,24,.5);}

  /* Grid responsive */
  .prod-row{display:flex;gap:16px;overflow-x:auto;padding-bottom:8px;-ms-overflow-style:none;scrollbar-width:none;}
  .prod-row::-webkit-scrollbar{display:none;}
  @media(min-width:900px){.prod-row{display:grid;grid-template-columns:repeat(4,1fr);overflow:visible;padding-bottom:0;}}

  /* Desktop nav */
  .d-nav{display:none;}
  @media(min-width:768px){.d-nav{display:flex;}.mob-btn{display:none!important;}}

  /* Section divider */
  .sec-title::after{content:'';display:block;width:48px;height:3px;border-radius:2px;margin-top:8px;
    background:${GD2};}
`;

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shahidProducts = [
    { name: "شاهد VIP شهر", sub: "ملف خاص", old: "٣٣", price: "١٣", badge: "VIP", hot: true },
    { name: "شاهد رياضة شهر", sub: "مشترك", old: "٣٣", price: "١٥.٩٩", badge: "رياضة", hot: false },
    { name: "شاهد VIP 3 أشهر", sub: "ملف خاص", old: "٨٠", price: "٣٥", badge: "VIP", hot: false },
    { name: "شاهد VIP 6 أشهر", sub: "ملف خاص", old: "١٥٠", price: "٦٥", badge: "VIP", hot: false },
  ];

  const netflixProducts = [
    { name: "نتفليكس شهر خاص", sub: "ملف خاص", old: "٤٠", price: "١٨.٩", hot: true },
    { name: "نتفليكس 4K مشترك", sub: "مشترك", old: "١٧", price: "١١", hot: false },
    { name: "نتفليكس 3 أشهر", sub: "ملف خاص", old: "١٠٠", price: "٥٠", hot: false },
    { name: "نتفليكس 6 أشهر", sub: "ملف خاص", old: "١٨٠", price: "٩٠", hot: false },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div dir="rtl" style={{ minHeight: "100vh", background: BG0 }}>

        {/* ════════════ NAVBAR ════════════ */}
        <header style={{
          position: "sticky", top: 0, zIndex: 200,
          background: scrolled ? "rgba(8,8,8,.97)" : "rgba(8,8,8,.8)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled ? `1px solid ${BORDER_GOLD}` : `1px solid ${BORDER}`,
          transition: "all .3s ease",
        }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

            {/* Logo */}
            <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: GD, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 4px 16px rgba(245,197,24,.4)` }}>
                <Crown style={{ width: 20, height: 20, color: "#000" }} />
              </div>
              <div>
                <div style={{ color: "#fff", fontWeight: 900, fontSize: 16, lineHeight: 1.1 }}>ماكس ستور</div>
                <div style={{ color: G, fontSize: 9, fontWeight: 700, letterSpacing: 2 }}>MAX STORE</div>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="d-nav" style={{ gap: 4 }}>
              {[["الرئيسية", true], ["شاهد VIP", false], ["نتفليكس", false], ["ديزني+", false], ["عروض 🔥", false]].map(([l, active], i) => (
                <a key={i} href="#" style={{
                  color: active ? G : "#888", fontWeight: 700, fontSize: 13.5, textDecoration: "none",
                  padding: "6px 14px", borderRadius: 8, transition: "all .2s",
                  background: active ? "rgba(245,197,24,.08)" : "transparent",
                  border: active ? `1px solid rgba(245,197,24,.2)` : "1px solid transparent",
                }}
                  onMouseOver={e => { if (!active) { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,.04)"; } }}
                  onMouseOut={e => { if (!active) { e.currentTarget.style.color = "#888"; e.currentTarget.style.background = "transparent"; } }}
                >{l as string}</a>
              ))}
            </nav>

            {/* Actions */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {[Search, User, ShoppingBag].map((Icon, i) => (
                <button key={i} style={{ width: 36, height: 36, borderRadius: 8, border: `1px solid ${BORDER}`, background: "rgba(255,255,255,.03)", color: "#777", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .2s" }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = BORDER_GOLD; e.currentTarget.style.color = G; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = "#777"; }}>
                  <Icon style={{ width: 16, height: 16 }} />
                </button>
              ))}
              <button className="mob-btn" onClick={() => setMenuOpen(!menuOpen)}
                style={{ width: 36, height: 36, borderRadius: 8, border: `1px solid ${BORDER}`, background: "rgba(255,255,255,.03)", color: "#777", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {menuOpen ? <X style={{ width: 16, height: 16 }} /> : <Menu style={{ width: 16, height: 16 }} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div style={{ background: BG1, borderTop: `1px solid ${BORDER}`, padding: "8px 0" }}>
              {["الرئيسية", "شاهد VIP", "نتفليكس", "ديزني+", "عروض 🔥"].map((l, i) => (
                <a key={i} href="#" style={{ display: "block", padding: "12px 24px", color: i === 0 ? G : "#aaa", fontWeight: 700, fontSize: 14, textDecoration: "none", borderBottom: `1px solid ${BORDER}` }}>{l}</a>
              ))}
            </div>
          )}
        </header>

        <main style={{ maxWidth: 1280, margin: "0 auto", padding: "28px 24px 80px" }}>

          {/* ════════════ HERO ════════════ */}
          <section className="fade-up" style={{
            position: "relative", overflow: "hidden", borderRadius: 24,
            background: `linear-gradient(135deg, ${BG1} 0%, #0f0f0f 40%, #0a0a0a 100%)`,
            border: `1px solid ${BORDER}`,
            marginBottom: 28,
          }}>
            {/* Decorative blobs */}
            <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(245,197,24,.09) 0%,transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: -60, left: -60, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(245,197,24,.05) 0%,transparent 70%)", pointerEvents: "none" }} />
            {/* Grid pattern overlay */}
            <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(245,197,24,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(245,197,24,.03) 1px,transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
            {/* Gold accent lines */}
            <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: 2, background: `linear-gradient(to left,${G},transparent)` }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "30%", height: 1, background: `linear-gradient(to right,rgba(245,197,24,.4),transparent)` }} />

            <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "52px 56px", gap: 40, flexWrap: "wrap" }}>

              {/* Text side */}
              <div style={{ flex: "1 1 320px", minWidth: 0 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,197,24,.1)", border: `1px solid rgba(245,197,24,.2)`, borderRadius: 999, padding: "5px 14px", marginBottom: 20 }}>
                  <Star style={{ width: 12, height: 12, color: G, fill: G }} />
                  <span style={{ color: G, fontSize: 12, fontWeight: 700 }}>متجر الاشتراكات الرقمية #1</span>
                </div>

                <h1 style={{ fontSize: "clamp(32px,4.5vw,58px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 20, color: "#fff" }}>
                  ملاذك للاشتراكات
                  <br />
                  <span className="glow" style={{ color: G }}>الرقمية الأصلية</span>
                </h1>

                <p style={{ color: "#777", fontSize: 15, lineHeight: 1.9, marginBottom: 32, maxWidth: 420 }}>
                  حسابات مضمونة 100%، أسعار لا تُقاوم، دعم على مدار الساعة.<br />
                  اشترك الآن واستمتع بأفضل تجربة رقمية.
                </p>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button className="btn-gold" style={{ background: GD, color: "#000", fontWeight: 900, fontSize: 15, padding: "13px 32px", borderRadius: 12, border: "none", cursor: "pointer", boxShadow: `0 8px 28px rgba(245,197,24,.4)`, transition: "transform .15s,box-shadow .15s" }}
                    onMouseOver={e => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(245,197,24,.55)"; }}
                    onMouseOut={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(245,197,24,.4)"; }}>
                    🛒 تسوق الآن
                  </button>
                  <button style={{ background: "rgba(255,255,255,.05)", color: "#ccc", fontWeight: 700, fontSize: 14, padding: "13px 24px", borderRadius: 12, border: `1px solid ${BORDER}`, cursor: "pointer", backdropFilter: "blur(8px)", transition: "all .2s" }}
                    onMouseOver={e => { e.currentTarget.style.borderColor = BORDER_GOLD; e.currentTarget.style.color = G; }}
                    onMouseOut={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = "#ccc"; }}>
                    تواصل معنا
                  </button>
                </div>

                {/* Trust row */}
                <div style={{ display: "flex", gap: 20, marginTop: 32, flexWrap: "wrap" }}>
                  {[["✅", "ضمان ذهبي"], ["⚡", "تسليم فوري"], ["🔒", "دفع آمن"]].map(([ic, lb], i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ fontSize: 14 }}>{ic}</span>
                      <span style={{ color: "#666", fontSize: 12, fontWeight: 700 }}>{lb}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cards side */}
              <div style={{ position: "relative", width: 240, height: 280, flexShrink: 0 }}>
                {/* Disney+ */}
                <div style={{ position: "absolute", width: 130, height: 170, top: 10, right: 0, background: "linear-gradient(135deg,#0f1b40,#283593)", transform: "rotate(15deg)", zIndex: 1, borderRadius: 18, border: "1px solid rgba(255,255,255,.1)", boxShadow: "0 12px 40px rgba(0,0,0,.8)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "#fff", fontWeight: 900, fontSize: 20, fontStyle: "italic" }}>D+</span>
                  </div>
                  <span style={{ color: "#90caf9", fontSize: 9, letterSpacing: 2, fontWeight: 800 }}>DISNEY+</span>
                </div>

                {/* Shahid */}
                <div style={{ position: "absolute", width: 136, height: 176, top: 34, right: 36, background: "linear-gradient(135deg,#1a0a2e,#6b21a8)", transform: "rotate(-7deg)", zIndex: 2, borderRadius: 18, border: "1px solid rgba(255,255,255,.12)", boxShadow: "0 14px 44px rgba(0,0,0,.8)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
                  <div style={{ display: "flex", gap: 4, alignItems: "flex-end" }}>
                    {[20, 30, 20].map((h, i) => (
                      <div key={i} style={{ width: 8, height: h, borderRadius: 4, background: GD }} />
                    ))}
                  </div>
                  <span style={{ color: "#fff", fontWeight: 900, fontSize: 11, letterSpacing: 3 }}>SHAHID</span>
                  <span style={{ color: G, fontSize: 8, fontWeight: 800, letterSpacing: 2 }}>VIP</span>
                </div>

                {/* Netflix - Front */}
                <div style={{ position: "absolute", width: 144, height: 184, top: 52, right: 66, background: "linear-gradient(160deg,#0d0000,#6b0000,#b91c1c)", transform: "rotate(5deg)", zIndex: 3, borderRadius: 18, border: "1px solid rgba(255,100,100,.2)", boxShadow: "0 16px 48px rgba(185,28,28,.5)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 40%,rgba(255,80,80,.15) 0%,transparent 65%)", borderRadius: 18 }} />
                  <span style={{ color: "#fff", fontWeight: 900, fontSize: 80, fontStyle: "italic", letterSpacing: -5, lineHeight: 1, textShadow: "0 0 40px rgba(220,38,38,1), 0 0 80px rgba(220,38,38,.5)" }}>N</span>
                  <span style={{ color: "#fca5a5", fontSize: 9, letterSpacing: 4, fontWeight: 900, marginTop: -14 }}>NETFLIX</span>
                </div>

                {/* Gold badge */}
                <div className="ring" style={{ position: "absolute", bottom: 16, right: 10, zIndex: 10, background: GD, color: "#000", fontWeight: 900, fontSize: 10, padding: "4px 12px", borderRadius: 999, boxShadow: `0 4px 16px rgba(245,197,24,.6)`, transform: "rotate(-5deg)" }}>
                  ✓ ضمان ذهبي
                </div>
              </div>
            </div>

            {/* Stats strip */}
            <div style={{ borderTop: `1px solid ${BORDER}`, display: "grid", gridTemplateColumns: "repeat(4,1fr)", padding: "20px 56px", gap: 0 }}>
              {[["10,000+", "عميل راضٍ"], ["100%", "ضمان ذهبي"], ["24/7", "دعم فني"], ["50+", "منتج رقمي"]].map(([n, l], i) => (
                <div key={i} style={{ textAlign: "center", borderLeft: i > 0 ? `1px solid ${BORDER}` : "none", padding: "8px 0" }}>
                  <div className="glow" style={{ color: G, fontWeight: 900, fontSize: "clamp(20px,2.5vw,28px)" }}>{n}</div>
                  <div style={{ color: "#555", fontSize: 12, fontWeight: 600, marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ════════════ PAYMENT STRIP ════════════ */}
          <section style={{ background: BG2, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "18px 28px", marginBottom: 28, display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            <span style={{ color: "#555", fontSize: 13, fontWeight: 700, whiteSpace: "nowrap" }}>طرق الدفع:</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, flex: 1 }}>
              {[
                { l: "Apple Pay", c: "#fff" }, { l: "Mastercard", c: "#eb5757" },
                { l: "VISA", c: "#60a5fa", it: true }, { l: "mada", c: "#4ade80" },
                { l: "STC Pay", c: "#c084fc" }, { l: "PayPal", c: "#93c5fd" },
                { l: "Bitcoin", c: "#f97316" },
              ].map((m, i) => (
                <div key={i} style={{ padding: "6px 14px", borderRadius: 8, background: BG0, border: `1px solid rgba(255,255,255,.06)`, color: m.c, fontSize: 12, fontWeight: 800, fontStyle: m.it ? "italic" : "normal", letterSpacing: m.it ? 1 : 0 }}>{m.l}</div>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(74,222,128,.07)", border: "1px solid rgba(74,222,128,.2)", borderRadius: 8, padding: "6px 12px" }}>
              <ShieldCheck style={{ width: 14, height: 14, color: "#4ade80" }} />
              <span style={{ color: "#4ade80", fontSize: 11, fontWeight: 700 }}>دفع مشفّر آمن</span>
            </div>
          </section>

          {/* ════════════ MARQUEE ════════════ */}
          <div className="mq-wrap" style={{ background: BG0, borderTop: `1px solid ${BORDER_GOLD}`, borderBottom: `1px solid ${BORDER_GOLD}`, padding: "12px 0", marginBottom: 40, marginLeft: -24, marginRight: -24, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right,${BG0} 0%,transparent 10%,transparent 90%,${BG0} 100%)`, zIndex: 1, pointerEvents: "none" }} />
            <div className="mq-inner" style={{ gap: 40 }}>
              {Array.from({ length: 18 }, (_, i) => (
                <span key={i} style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
                  <Crown style={{ width: 14, height: 14, color: G }} />
                  <span style={{ color: "#fff", fontWeight: 900, fontSize: 12, letterSpacing: 4 }}>MAX STORE</span>
                  <span style={{ color: G, fontSize: 10 }}>✦</span>
                  <span style={{ color: "#555", fontWeight: 700, fontSize: 11, letterSpacing: 2 }}>PREMIUM</span>
                  <span style={{ color: G, fontSize: 10 }}>✦</span>
                </span>
              ))}
            </div>
          </div>

          {/* ════════════ SHAHID SECTION ════════════ */}
          <ProductSection
            title="اشتراكات شاهد VIP"
            desc="حسابات شاهد الرسمية بأفضل الأسعار وضمان ذهبي"
            icon="📺"
            products={shahidProducts}
            renderCard={(p, i) => <ShahidCard key={i} product={p} />}
          />

          {/* ════════════ NETFLIX SECTION ════════════ */}
          <ProductSection
            title="اشتراكات نتفليكس"
            desc="احصل على نتفليكس بسعر أقل مع ضمان ماكس"
            icon="🎬"
            products={netflixProducts}
            renderCard={(p, i) => <NetflixCard key={i} product={p} />}
          />

          {/* ════════════ SUPPORT BANNER ════════════ */}
          <section style={{ position: "relative", overflow: "hidden", borderRadius: 24, marginBottom: 28, padding: "48px 56px" ,
            background: `linear-gradient(135deg,${BG2} 0%,${BG3} 60%,${BG1} 100%)`,
            border: `1px solid ${BORDER}`,
          }}>
            <div style={{ position: "absolute", top: -60, left: -60, width: 280, height: 280, borderRadius: "50%", background: `radial-gradient(circle,rgba(245,197,24,.08) 0%,transparent 70%)`, pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: -40, right: 40, width: 200, height: 200, borderRadius: "50%", background: `radial-gradient(circle,rgba(245,197,24,.05) 0%,transparent 70%)`, pointerEvents: "none" }} />

            <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap" }}>
              {/* Icon */}
              <div style={{ flexShrink: 0, position: "relative" }}>
                <div style={{ width: 100, height: 100, borderRadius: "50%", border: `2px solid ${BORDER_GOLD}`, background: BG0, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 40px rgba(245,197,24,.15)` }}>
                  <Headphones style={{ width: 48, height: 48, color: G }} />
                </div>
                <div style={{ position: "absolute", bottom: -4, right: -4, background: GD, color: "#000", fontWeight: 900, fontSize: 10, padding: "3px 10px", borderRadius: 999, boxShadow: `0 4px 12px rgba(245,197,24,.5)` }}>24/7</div>
              </div>

              {/* Text */}
              <div style={{ flex: "1 1 260px" }}>
                <h3 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(20px,3vw,30px)", lineHeight: 1.4, marginBottom: 12 }}>
                  طاقم ماكس جاهز لخدمتكم<br />
                  <span style={{ color: G }}>على مدار الساعة 24/7</span>
                </h3>
                <p style={{ color: "#666", fontSize: 14, lineHeight: 1.9, marginBottom: 24 }}>
                  تحت أي سماء وفوق أي أرض، طاقم ماكس حاضر لخدمتك. سواء كان عندك مشكلة أو سؤال، نحن هنا.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button style={{ background: GD, color: "#000", fontWeight: 900, fontSize: 14, padding: "11px 28px", borderRadius: 12, border: "none", cursor: "pointer", boxShadow: `0 6px 20px rgba(245,197,24,.35)` }}>
                    💬 تواصل الآن
                  </button>
                  <button style={{ background: "rgba(255,255,255,.04)", color: "#aaa", fontWeight: 700, fontSize: 13, padding: "11px 20px", borderRadius: 12, border: `1px solid ${BORDER}`, cursor: "pointer" }}>
                    واتساب
                  </button>
                  <button style={{ background: "rgba(255,255,255,.04)", color: "#aaa", fontWeight: 700, fontSize: 13, padding: "11px 20px", borderRadius: 12, border: `1px solid ${BORDER}`, cursor: "pointer" }}>
                    تيليجرام
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════ WHY US ════════════ */}
          <section style={{ marginBottom: 28 }}>
            <div className="sec-title" style={{ marginBottom: 28 }}>
              <h3 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(20px,3vw,28px)" }}>ماذا يميّزنا؟</h3>
              <p style={{ color: "#555", fontSize: 13, marginTop: 6 }}>نقدم لك أفضل تجربة تسوق رقمي</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}>
              {[
                { icon: <Award style={{ width: 28, height: 28, color: G }} />, title: "ضمان ماكس الذهبي", text: "تعويض فوري وكامل طوال فترة الاشتراك دون أي تعقيد.", accent: "rgba(245,197,24,.08)" },
                { icon: <Headphones style={{ width: 28, height: 28, color: G }} />, title: "دعم لا يتوقف", text: "فريق دعم متواجد 24 ساعة، 7 أيام، على مدار العام.", accent: "rgba(245,197,24,.05)" },
                { icon: <Globe style={{ width: 28, height: 28, color: G }} />, title: "جميع طرق الدفع", text: "Apple Pay, Visa, Mastercard, Mada, STC Pay والمزيد.", accent: "rgba(245,197,24,.05)" },
                { icon: <ShieldCheck style={{ width: 28, height: 28, color: G }} />, title: "أمان وخصوصية", text: "بياناتك محمية بتشفير عالي المستوى في كل معاملة.", accent: "rgba(245,197,24,.05)" },
              ].map((f, i) => (
                <div key={i} style={{
                  background: BG2, border: `1px solid ${BORDER}`, borderRadius: 18,
                  padding: "28px 24px", transition: "all .25s",
                  position: "relative", overflow: "hidden",
                }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = BORDER_GOLD; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,.4)"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ position: "absolute", top: 0, right: 0, width: 80, height: 80, background: `radial-gradient(circle at top right,rgba(245,197,24,.08) 0%,transparent 70%)`, pointerEvents: "none" }} />
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: f.accent, border: `1px solid ${BORDER_GOLD}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    {f.icon}
                  </div>
                  <h4 style={{ color: "#fff", fontWeight: 800, fontSize: 15, marginBottom: 8 }}>{f.title}</h4>
                  <p style={{ color: "#555", fontSize: 13, lineHeight: 1.7 }}>{f.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ════════════ NEWSLETTER ════════════ */}
          <section style={{
            position: "relative", overflow: "hidden", borderRadius: 24, padding: "52px 48px",
            background: `linear-gradient(135deg,${BG2} 0%,${BG3} 100%)`,
            border: `1px solid ${BORDER}`, textAlign: "center", marginBottom: 28,
          }}>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 200, background: `radial-gradient(ellipse,rgba(245,197,24,.06) 0%,transparent 70%)`, pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>🔔</div>
              <h3 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(20px,3vw,30px)", marginBottom: 10 }}>كن أول من يعرف!</h3>
              <p style={{ color: "#666", fontSize: 14, marginBottom: 28, maxWidth: 440, margin: "0 auto 28px" }}>
                اشترك بنشرتنا البريدية وكن أول من يحصل على أفضل العروض والخصومات الحصرية.
              </p>
              <div style={{ display: "flex", gap: 10, maxWidth: 500, margin: "0 auto" }}>
                <input type="email" placeholder="أدخل بريدك الإلكتروني..."
                  style={{ flex: 1, background: BG0, border: `1px solid rgba(255,255,255,.08)`, borderRadius: 12, padding: "13px 18px", color: "#fff", fontSize: 14, textAlign: "right", outline: "none", transition: "border-color .2s" }}
                  onFocus={e => (e.target.style.borderColor = G)}
                  onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,.08)")}
                />
                <button className="btn-gold" style={{ background: GD, color: "#000", fontWeight: 900, fontSize: 14, padding: "13px 24px", borderRadius: 12, border: "none", cursor: "pointer", flexShrink: 0, boxShadow: `0 6px 20px rgba(245,197,24,.35)` }}>
                  اشترك
                </button>
              </div>
            </div>
          </section>

        </main>

        {/* ════════════ FOOTER ════════════ */}
        <footer style={{ background: "#050505", borderTop: `1px solid ${BORDER}`, padding: "56px 24px 32px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 48, marginBottom: 48 }}>

              {/* Brand */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: GD, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Crown style={{ width: 20, height: 20, color: "#000" }} />
                  </div>
                  <div>
                    <div style={{ color: "#fff", fontWeight: 900, fontSize: 16 }}>ماكس ستور</div>
                    <div style={{ color: G, fontSize: 9, fontWeight: 700, letterSpacing: 2 }}>MAX STORE</div>
                  </div>
                </div>
                <p style={{ color: "#444", fontSize: 13, lineHeight: 1.9, maxWidth: 240 }}>
                  متجرك الأول للاشتراكات الرقمية بأسعار مغرية وضمان ذهبي.
                </p>
                <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
                  {[Instagram, MessageSquare, MessageCircle].map((Icon, i) => (
                    <a key={i} href="#" style={{ width: 36, height: 36, borderRadius: 9, background: BG2, border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", color: "#555", textDecoration: "none", transition: "all .2s" }}
                      onMouseOver={e => { e.currentTarget.style.borderColor = BORDER_GOLD; e.currentTarget.style.color = G; }}
                      onMouseOut={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = "#555"; }}>
                      <Icon style={{ width: 16, height: 16 }} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div>
                <h4 style={{ color: G, fontWeight: 800, fontSize: 14, marginBottom: 18, letterSpacing: 0.5 }}>روابط مهمة</h4>
                {["الرئيسية", "شاهد VIP", "نتفليكس", "ديزني+", "جميع المنتجات"].map((l, i) => (
                  <div key={i} style={{ marginBottom: 11 }}>
                    <a href="#" style={{ color: "#4a4a4a", fontSize: 13, textDecoration: "none", fontWeight: 600, transition: "color .2s" }}
                      onMouseOver={e => (e.currentTarget.style.color = "#ccc")}
                      onMouseOut={e => (e.currentTarget.style.color = "#4a4a4a")}>
                      {l}
                    </a>
                  </div>
                ))}
              </div>

              {/* Support */}
              <div>
                <h4 style={{ color: G, fontWeight: 800, fontSize: 14, marginBottom: 18, letterSpacing: 0.5 }}>الدعم والمساعدة</h4>
                {["الشروط والأحكام", "سياسة الاسترجاع", "الأسئلة الشائعة", "اتصل بنا"].map((l, i) => (
                  <div key={i} style={{ marginBottom: 11 }}>
                    <a href="#" style={{ color: "#4a4a4a", fontSize: 13, textDecoration: "none", fontWeight: 600, transition: "color .2s" }}
                      onMouseOver={e => (e.currentTarget.style.color = "#ccc")}
                      onMouseOut={e => (e.currentTarget.style.color = "#4a4a4a")}>
                      {l}
                    </a>
                  </div>
                ))}
              </div>

              {/* Contact CTA */}
              <div>
                <h4 style={{ color: G, fontWeight: 800, fontSize: 14, marginBottom: 18 }}>خدمة العملاء</h4>
                <div style={{ background: BG2, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "18px", marginBottom: 12 }}>
                  <div style={{ color: G, fontSize: 24, marginBottom: 6 }}>⏰</div>
                  <div style={{ color: "#fff", fontWeight: 800, fontSize: 14 }}>24/7</div>
                  <div style={{ color: "#555", fontSize: 12, marginTop: 3 }}>متاح دائماً لخدمتك</div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <a href="#" style={{ flex: 1, background: BG2, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "10px", textAlign: "center", textDecoration: "none", color: "#555", fontSize: 11, fontWeight: 700, transition: "all .2s" }}
                    onMouseOver={e => { e.currentTarget.style.borderColor = BORDER_GOLD; e.currentTarget.style.color = G; }}
                    onMouseOut={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = "#555"; }}>
                    واتساب
                  </a>
                  <a href="#" style={{ flex: 1, background: BG2, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "10px", textAlign: "center", textDecoration: "none", color: "#555", fontSize: 11, fontWeight: 700, transition: "all .2s" }}
                    onMouseOver={e => { e.currentTarget.style.borderColor = BORDER_GOLD; e.currentTarget.style.color = G; }}
                    onMouseOut={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = "#555"; }}>
                    تيليجرام
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
              <p style={{ color: "#333", fontSize: 12 }}>© 2025 ماكس ستور — وثيقة العمل الحر FL-XXXXXX</p>
              <div style={{ display: "flex", gap: 14 }}>
                {["Apple Pay", "Visa", "Mastercard", "Mada"].map((m, i) => (
                  <span key={i} style={{ color: "#333", fontSize: 11, fontWeight: 700 }}>{m}</span>
                ))}
              </div>
              <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#444", fontSize: 12, fontWeight: 700, transition: "color .2s" }}
                onMouseOver={e => (e.currentTarget.style.color = G)}
                onMouseOut={e => (e.currentTarget.style.color = "#444")}>
                ↑ للأعلى
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

/* ─── Product Section ─── */
function ProductSection({ title, desc, icon, products, renderCard }: any) {
  return (
    <section style={{ marginBottom: 44 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
            <span style={{ fontSize: 22 }}>{icon}</span>
            <h3 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(17px,2.5vw,24px)" }}>{title}</h3>
          </div>
          <p style={{ color: "#4a4a4a", fontSize: 13, paddingRight: 32 }}>{desc}</p>
          <div style={{ marginTop: 8, marginRight: 32, height: 2, width: 56, background: GD2, borderRadius: 2 }} />
        </div>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 6, color: G, fontSize: 13, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap", marginTop: 4, padding: "6px 12px", borderRadius: 8, border: `1px solid ${BORDER_GOLD}`, background: "rgba(245,197,24,.05)", transition: "all .2s" }}
          onMouseOver={e => { e.currentTarget.style.background = "rgba(245,197,24,.12)"; }}
          onMouseOut={e => { e.currentTarget.style.background = "rgba(245,197,24,.05)"; }}>
          <ArrowLeft style={{ width: 13, height: 13 }} />
          عرض الكل
        </a>
      </div>
      <div className="prod-row">
        {products.map((p: any, i: number) => renderCard(p, i))}
      </div>
    </section>
  );
}

/* ─── Shahid Card ─── */
function ShahidCard({ product }: { product: any }) {
  const sport = product.badge === "رياضة";
  const disc = Math.round((1 - parseFloat(product.price.replace(/[٠-٩]/g, d => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)))) / parseFloat(product.old.replace(/[٠-٩]/g, d => String("٠١٢٣٤٥٦٧٨٩".indexOf(d))))) * 100);

  return (
    <div className="lift" style={{ minWidth: 190, flex: "0 0 190px", borderRadius: 20, overflow: "hidden", background: BG2, border: `1px solid ${BORDER}`, boxShadow: "0 4px 28px rgba(0,0,0,.6)", display: "flex", flexDirection: "column", cursor: "pointer" }}>
      {/* Image */}
      <div style={{ position: "relative", height: 188, background: sport ? "linear-gradient(160deg,#0c0800,#1e1400,#2d1e00)" : "linear-gradient(160deg,#0a0800,#1a1100,#281900)", overflow: "hidden" }}>
        {/* Glow */}
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 80%,rgba(245,197,24,.22) 0%,transparent 65%)`, pointerEvents: "none" }} />
        {/* Lines */}
        <div style={{ position: "absolute", inset: 0, opacity: .04, backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "10px 10px", pointerEvents: "none" }} />

        {/* Discount badge */}
        {disc > 0 && (
          <div style={{ position: "absolute", top: 10, left: 10, background: "#ef4444", color: "#fff", fontWeight: 900, fontSize: 9, padding: "3px 8px", borderRadius: 6, zIndex: 20 }}>-%{disc}</div>
        )}
        {/* Guarantee */}
        <div style={{ position: "absolute", top: 0, right: 0, background: GD, color: "#000", fontWeight: 900, fontSize: 9, padding: "5px 10px", borderRadius: "0 0 0 10px", zIndex: 20 }}>ضمان ذهبي</div>
        {/* Hot badge */}
        {product.hot && (
          <div style={{ position: "absolute", top: 10, left: disc > 0 ? 54 : 10, background: "rgba(239,68,68,.15)", border: "1px solid rgba(239,68,68,.3)", color: "#ef4444", fontWeight: 800, fontSize: 9, padding: "3px 8px", borderRadius: 6, zIndex: 20, display: "flex", alignItems: "center", gap: 3 }}>
            <Flame style={{ width: 9, height: 9 }} /> الأكثر مبيعاً
          </div>
        )}

        {/* Logo */}
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, zIndex: 10 }}>
          <div style={{ display: "flex", gap: 5, alignItems: "flex-end" }}>
            {[18, 28, 18].map((h, i) => (
              <div key={i} style={{ width: 8, height: h, borderRadius: 4, background: GD }} />
            ))}
          </div>
          <span style={{ color: "#fff", fontWeight: 900, fontSize: 14, letterSpacing: 4 }}>SHAHID</span>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            {sport ? (
              <span style={{ background: "rgba(245,197,24,.2)", color: G, fontWeight: 800, fontSize: 9, padding: "2px 8px", borderRadius: 999, border: `1px solid ${BORDER_GOLD}` }}>SPORTS</span>
            ) : (
              <span style={{ background: "rgba(245,197,24,.15)", color: G, fontWeight: 800, fontSize: 9, padding: "2px 8px", borderRadius: 999, border: `1px solid ${BORDER_GOLD}` }}>VIP</span>
            )}
          </div>
        </div>

        {/* Chips */}
        <div style={{ position: "absolute", bottom: 0, inset: "auto 0 0 0", background: "linear-gradient(to top,rgba(0,0,0,.9),transparent)", padding: "10px 10px 8px", display: "flex", gap: 6, justifyContent: "center", zIndex: 20 }}>
          {[
            <span style={{ display: "flex", alignItems: "center", gap: 3, background: "rgba(245,197,24,.15)", color: G, fontWeight: 800, fontSize: 9, padding: "3px 8px", borderRadius: 6 }}>
              <Zap style={{ width: 9, height: 9, fill: G }} />4K
            </span>,
            <span style={{ background: "rgba(255,255,255,.06)", color: "#888", fontWeight: 700, fontSize: 9, padding: "3px 8px", borderRadius: 6 }}>{product.sub}</span>,
          ].map((c, i) => <React.Fragment key={i}>{c}</React.Fragment>)}
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "14px 14px 16px", display: "flex", flexDirection: "column", gap: 10, flex: 1, borderTop: `1px solid ${BORDER}` }}>
        <h4 style={{ color: "#e0e0e0", fontWeight: 800, fontSize: 12.5, lineHeight: 1.45 }}>{product.name}</h4>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div style={{ color: "#3a3a3a", fontSize: 10, textDecoration: "line-through", marginBottom: 2 }}>{product.old} ر.س</div>
            <div style={{ color: G, fontWeight: 900, fontSize: 20, lineHeight: 1 }}>
              {product.price} <span style={{ fontSize: 11, fontWeight: 700 }}>ر.س</span>
            </div>
          </div>
          <button style={{ background: "none", border: "none", cursor: "pointer", color: "#2a2a2a", transition: "color .2s", padding: 4 }}
            onMouseOver={e => (e.currentTarget.style.color = "#ef4444")}
            onMouseOut={e => (e.currentTarget.style.color = "#2a2a2a")}>
            <Heart style={{ width: 16, height: 16 }} />
          </button>
        </div>
        <button className="btn-gold" style={{ width: "100%", background: GD, color: "#000", fontWeight: 900, fontSize: 12, padding: "10px", borderRadius: 12, border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(245,197,24,.3)", transition: "transform .15s,box-shadow .15s" }}
          onMouseOver={e => { e.currentTarget.style.transform = "scale(1.03)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(245,197,24,.45)"; }}
          onMouseOut={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(245,197,24,.3)"; }}>
          🛒 أضف للسلة
        </button>
      </div>
    </div>
  );
}

/* ─── Netflix Card ─── */
function NetflixCard({ product }: { product: any }) {
  return (
    <div className="lift" style={{ minWidth: 190, flex: "0 0 190px", borderRadius: 20, overflow: "hidden", background: BG2, border: `1px solid ${BORDER}`, boxShadow: "0 4px 28px rgba(0,0,0,.6)", display: "flex", flexDirection: "column", cursor: "pointer" }}>
      <div style={{ position: "relative", height: 188, background: "linear-gradient(160deg,#0d0000,#200000,#5a0000)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 65%,rgba(220,38,38,.32) 0%,transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, opacity: .04, backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "12px 12px", pointerEvents: "none" }} />

        <div style={{ position: "absolute", top: 0, right: 0, background: GD, color: "#000", fontWeight: 900, fontSize: 9, padding: "5px 10px", borderRadius: "0 0 0 10px", zIndex: 20 }}>ضمان ذهبي</div>
        {product.hot && (
          <div style={{ position: "absolute", top: 10, left: 10, background: "rgba(239,68,68,.15)", border: "1px solid rgba(239,68,68,.3)", color: "#ef4444", fontWeight: 800, fontSize: 9, padding: "3px 8px", borderRadius: 6, zIndex: 20, display: "flex", alignItems: "center", gap: 3 }}>
            <Flame style={{ width: 9, height: 9 }} /> الأكثر مبيعاً
          </div>
        )}

        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
          <span style={{ color: "#fff", fontWeight: 900, fontSize: 82, fontStyle: "italic", letterSpacing: -5, lineHeight: 1, textShadow: "0 0 50px rgba(220,38,38,1),0 0 100px rgba(220,38,38,.4)" }}>N</span>
          <span style={{ color: "#fca5a5", fontSize: 9, letterSpacing: 4, fontWeight: 900, marginTop: -14 }}>NETFLIX</span>
        </div>

        <div style={{ position: "absolute", bottom: 0, inset: "auto 0 0 0", background: "linear-gradient(to top,rgba(0,0,0,.9),transparent)", padding: "10px 10px 8px", display: "flex", gap: 6, justifyContent: "center", zIndex: 20 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 3, background: "rgba(245,197,24,.15)", color: G, fontWeight: 800, fontSize: 9, padding: "3px 8px", borderRadius: 6 }}>
            <Zap style={{ width: 9, height: 9, fill: G }} />4K
          </span>
          <span style={{ background: "rgba(255,255,255,.06)", color: "#888", fontWeight: 700, fontSize: 9, padding: "3px 8px", borderRadius: 6 }}>{product.sub}</span>
        </div>
      </div>

      <div style={{ padding: "14px 14px 16px", display: "flex", flexDirection: "column", gap: 10, flex: 1, borderTop: `1px solid ${BORDER}` }}>
        <h4 style={{ color: "#e0e0e0", fontWeight: 800, fontSize: 12.5, lineHeight: 1.45 }}>{product.name}</h4>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div style={{ color: "#3a3a3a", fontSize: 10, textDecoration: "line-through", marginBottom: 2 }}>{product.old} ر.س</div>
            <div style={{ color: G, fontWeight: 900, fontSize: 20, lineHeight: 1 }}>
              {product.price} <span style={{ fontSize: 11, fontWeight: 700 }}>ر.س</span>
            </div>
          </div>
          <button style={{ background: "none", border: "none", cursor: "pointer", color: "#2a2a2a", transition: "color .2s", padding: 4 }}
            onMouseOver={e => (e.currentTarget.style.color = "#ef4444")}
            onMouseOut={e => (e.currentTarget.style.color = "#2a2a2a")}>
            <Heart style={{ width: 16, height: 16 }} />
          </button>
        </div>
        <button className="btn-gold" style={{ width: "100%", background: GD, color: "#000", fontWeight: 900, fontSize: 12, padding: "10px", borderRadius: 12, border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(245,197,24,.3)", transition: "transform .15s,box-shadow .15s" }}
          onMouseOver={e => { e.currentTarget.style.transform = "scale(1.03)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(245,197,24,.45)"; }}
          onMouseOut={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(245,197,24,.3)"; }}>
          🛒 أضف للسلة
        </button>
      </div>
    </div>
  );
}
