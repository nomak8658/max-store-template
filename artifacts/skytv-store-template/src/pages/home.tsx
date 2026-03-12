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
  Menu,
} from "lucide-react";

const GOLD = "#f5c518";
const GOLD_GRAD = "linear-gradient(135deg,#c9a227 0%,#f5c518 50%,#d4a017 100%)";
const BG = "#0d0d0d";
const CARD_BG = "#111111";
const BORDER = "#222222";
const SURFACE = "#161616";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Tajawal:wght@400;500;700&display=swap');
        *, *::before, *::after { font-family: 'Cairo','Tajawal',sans-serif; box-sizing: border-box; }
        body { margin:0; background:${BG}; }
        .no-sb::-webkit-scrollbar{display:none;} .no-sb{-ms-overflow-style:none;scrollbar-width:none;}
        .marquee-wrap{overflow:hidden;white-space:nowrap;}
        .marquee-inner{display:inline-flex;animation:mq 22s linear infinite;}
        @keyframes mq{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}
        .pc{transition:transform .2s,box-shadow .2s;}
        .pc:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(245,197,24,.18)!important;}
        .inp:focus{outline:none;border-color:${GOLD}!important;}
        .nav-link{color:#888;font-weight:700;font-size:14px;text-decoration:none;transition:color .2s;}
        .nav-link:hover{color:${GOLD};}
        @media(max-width:767px){.desktop-nav{display:none!important;}}
        @media(min-width:768px){.mobile-menu-btn{display:none!important;}}
      ` }} />

      <div dir="rtl" style={{ minHeight: "100vh", background: BG, color: "#fff" }}>

        {/* ═══ NAVBAR ═══ */}
        <header style={{ background: "#090909", borderBottom: `1px solid ${BORDER}`, position: "sticky", top: 0, zIndex: 100 }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

            {/* Right: Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src="/logo.png" alt="MAX" style={{ height: "40px", objectFit: "contain" }} />
              <span style={{ color: GOLD, fontWeight: 900, fontSize: "18px", letterSpacing: "1px" }}>ماكس ستور</span>
            </div>

            {/* Center: Nav links (desktop) */}
            <nav className="desktop-nav" style={{ display: "flex", gap: "28px" }}>
              {["الرئيسية", "شاهد VIP", "نتفليكس", "ديزني+", "عروض"].map((l, i) => (
                <a key={i} href="#" className="nav-link" style={{ color: i === 0 ? GOLD : "#888" }}>{l}</a>
              ))}
            </nav>

            {/* Left: Actions */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <button style={{ background: "none", border: "none", color: "#888", cursor: "pointer", padding: "4px" }} className="nav-link">
                <Search style={{ width: 20, height: 20 }} />
              </button>
              <button style={{ background: "none", border: "none", color: "#888", cursor: "pointer", padding: "4px" }} className="nav-link">
                <User style={{ width: 20, height: 20 }} />
              </button>
              <button style={{ background: "none", border: "none", color: "#888", cursor: "pointer", padding: "4px" }} className="nav-link">
                <ShoppingBag style={{ width: 20, height: 20 }} />
              </button>
              <button
                className="mobile-menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                style={{ background: "none", border: "none", color: "#888", cursor: "pointer", padding: "4px" }}>
                <Menu style={{ width: 22, height: 22 }} />
              </button>
            </div>
          </div>

          {/* Mobile dropdown nav */}
          {menuOpen && (
            <div style={{ background: "#0f0f0f", borderTop: `1px solid ${BORDER}`, padding: "12px 24px 16px" }}>
              {["الرئيسية", "شاهد VIP", "نتفليكس", "ديزني+", "عروض"].map((l, i) => (
                <div key={i} style={{ padding: "10px 0", borderBottom: `1px solid ${BORDER}` }}>
                  <a href="#" className="nav-link" style={{ color: i === 0 ? GOLD : "#aaa", fontSize: "15px" }}>{l}</a>
                </div>
              ))}
            </div>
          )}
        </header>

        {/* ═══ CONTENT ═══ */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "24px 24px 64px" }}>

          {/* ═══ HERO ═══ */}
          <section style={{
            background: `linear-gradient(135deg,#0f0f0f 0%,#141414 60%,#0a0a0a 100%)`,
            border: `1px solid ${BORDER}`,
            borderRadius: "20px",
            overflow: "hidden",
            marginBottom: "28px",
            position: "relative",
          }}>
            {/* Glow */}
            <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle,rgba(245,197,24,.12) 0%,transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-40px", left: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle,rgba(245,197,24,.07) 0%,transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: 0, right: 0, width: "55%", height: "2px", background: `linear-gradient(to left,${GOLD},transparent)` }} />

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "40px 48px", gap: "32px", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
              {/* Text */}
              <div style={{ flex: "1 1 300px", minWidth: 0 }}>
                <div style={{ color: GOLD, fontSize: "13px", fontWeight: 700, marginBottom: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Star style={{ width: 14, height: 14, fill: GOLD }} /> متجر الاشتراكات الرقمية الأول
                </div>
                <h1 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 900, lineHeight: 1.15, margin: "0 0 16px", color: "#fff" }}>
                  ملاذك المناسب<br />
                  <span style={{ color: GOLD }}>للإشتراكات الرقمية</span>
                </h1>
                <p style={{ color: "#888", fontSize: "15px", lineHeight: 1.7, marginBottom: "24px" }}>
                  أفضل الأسعار • حسابات رسمية مضمونة • دعم 24/7
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <button style={{ background: GOLD_GRAD, color: "#000", fontWeight: 900, fontSize: "14px", padding: "12px 28px", borderRadius: "999px", border: "none", cursor: "pointer", boxShadow: `0 6px 20px rgba(245,197,24,.35)`, transition: "transform .15s" }}
                    onMouseOver={e => (e.currentTarget.style.transform = "scale(1.04)")}
                    onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}>
                    تسوق الآن ←
                  </button>
                  <button style={{ background: "transparent", color: "#aaa", fontWeight: 700, fontSize: "14px", padding: "12px 24px", borderRadius: "999px", border: `1px solid ${BORDER}`, cursor: "pointer", transition: "color .2s,border-color .2s" }}
                    onMouseOver={e => { e.currentTarget.style.color = GOLD; e.currentTarget.style.borderColor = GOLD; }}
                    onMouseOut={e => { e.currentTarget.style.color = "#aaa"; e.currentTarget.style.borderColor = BORDER; }}>
                    تواصل معنا
                  </button>
                </div>
              </div>

              {/* Stacked cards */}
              <div style={{ position: "relative", width: "200px", height: "230px", flexShrink: 0 }}>
                {/* Disney+ */}
                <div style={{ position: "absolute", width: "115px", height: "152px", top: "10px", right: "0px", background: "linear-gradient(135deg,#0f1b40,#1a237e)", transform: "rotate(14deg)", zIndex: 1, borderRadius: "16px", border: "1px solid rgba(255,255,255,.09)", boxShadow: "0 8px 32px rgba(0,0,0,.8)" }}>
                  <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px" }}>
                    <span style={{ color: "#fff", fontWeight: 900, fontSize: "28px", fontStyle: "italic" }}>D+</span>
                    <span style={{ color: "#90caf9", fontSize: "9px", letterSpacing: "2px", fontWeight: 700 }}>DISNEY+</span>
                  </div>
                </div>
                {/* Shahid */}
                <div style={{ position: "absolute", width: "120px", height: "158px", top: "30px", right: "30px", background: "linear-gradient(135deg,#1a0a2e,#5b1fa5)", transform: "rotate(-6deg)", zIndex: 2, borderRadius: "16px", border: "1px solid rgba(255,255,255,.09)", boxShadow: "0 10px 36px rgba(0,0,0,.8)" }}>
                  <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                    <div style={{ display: "flex", gap: "4px", alignItems: "flex-end" }}>
                      {[18, 28, 18].map((h, i) => (
                        <div key={i} style={{ width: "8px", height: `${h}px`, borderRadius: "3px", background: GOLD_GRAD }} />
                      ))}
                    </div>
                    <span style={{ color: "#fff", fontWeight: 900, fontSize: "10px", letterSpacing: "3px" }}>SHAHID</span>
                    <span style={{ color: GOLD, fontSize: "9px", fontWeight: 700 }}>VIP</span>
                  </div>
                </div>
                {/* Netflix */}
                <div style={{ position: "absolute", width: "126px", height: "164px", top: "46px", right: "56px", background: "linear-gradient(160deg,#1a0000,#8b0000)", transform: "rotate(4deg)", zIndex: 3, borderRadius: "16px", border: "1px solid rgba(255,255,255,.09)", boxShadow: "0 12px 40px rgba(180,28,28,.5)" }}>
                  <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "#fff", fontWeight: 900, fontSize: "78px", fontStyle: "italic", letterSpacing: "-4px", lineHeight: 1, textShadow: "0 0 40px rgba(220,38,38,.9)" }}>N</span>
                    <span style={{ color: "#fca5a5", fontSize: "9px", letterSpacing: "4px", fontWeight: 900, marginTop: "-10px" }}>NETFLIX</span>
                  </div>
                </div>
                {/* Badge */}
                <div style={{ position: "absolute", bottom: "14px", right: "8px", zIndex: 10, background: GOLD_GRAD, color: "#000", fontWeight: 900, fontSize: "10px", padding: "3px 10px", borderRadius: "999px", boxShadow: `0 4px 12px rgba(245,197,24,.5)`, transform: "rotate(-4deg)" }}>
                  ضمان ذهبي ✓
                </div>
              </div>
            </div>

            {/* Stats strip */}
            <div style={{ borderTop: `1px solid ${BORDER}`, display: "flex", justifyContent: "space-around", flexWrap: "wrap", padding: "18px 48px", gap: "12px" }}>
              {[
                { n: "+10,000", l: "عميل راضٍ" },
                { n: "24/7", l: "دعم فني" },
                { n: "100%", l: "ضمان ذهبي" },
                { n: "+50", l: "منتج رقمي" },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ color: GOLD, fontWeight: 900, fontSize: "clamp(18px,2vw,24px)" }}>{s.n}</div>
                  <div style={{ color: "#666", fontSize: "12px", fontWeight: 600 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ وسائل الدفع ═══ */}
          <section style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: "16px", padding: "20px 28px", marginBottom: "28px" }}>
            <p style={{ color: "#888", fontWeight: 700, fontSize: "13px", textAlign: "center", marginBottom: "14px" }}>
              نوفر لك <span style={{ color: GOLD }}>طرق الدفع</span> العالمية والمحلية
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
              {[
                { label: "Apple Pay", color: "#fff" },
                { label: "Mastercard", color: "#eb5757" },
                { label: "VISA", color: "#60a5fa", italic: true },
                { label: "mada", color: "#4ade80" },
                { label: "STC Pay", color: "#c084fc" },
                { label: "PayPal", color: "#93c5fd" },
                { label: "Bitcoin", color: "#f97316" },
              ].map((m, i) => (
                <div key={i} style={{ padding: "7px 16px", borderRadius: "10px", background: "#0a0a0a", border: `1px solid #262626`, color: m.color, fontSize: "13px", fontWeight: 700, fontStyle: m.italic ? "italic" : "normal" }}>
                  {m.label}
                </div>
              ))}
            </div>
          </section>

          {/* ═══ شريط متحرك ═══ */}
          <div className="marquee-wrap" style={{ background: "#090909", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "12px 0", marginBottom: "36px", marginLeft: "-24px", marginRight: "-24px" }}>
            <div className="marquee-inner" style={{ gap: "32px" }}>
              {[...Array(16)].map((_, i) => (
                <span key={i} style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
                  <img src="/logo.png" alt="M" style={{ height: "22px", objectFit: "contain" }} />
                  <span style={{ color: "#fff", fontWeight: 900, fontSize: "13px", letterSpacing: "3px" }}>MAX STORE</span>
                  <span style={{ color: GOLD, fontSize: "16px" }}>✦</span>
                </span>
              ))}
            </div>
          </div>

          {/* ═══ قسم شاهد VIP ═══ */}
          <ProductSection
            title="اشتراكات شاهد VIP"
            products={[
              { name: "شاهد VIP شهر رسمي", sub: "ملف خاص • شهر", oldPrice: "٣٣", newPrice: "١٣", sport: false },
              { name: "شاهد رياضة شهر", sub: "مشترك • شهر", oldPrice: "٣٣", newPrice: "١٥.٩٩", sport: true },
              { name: "شاهد VIP 3 أشهر", sub: "ملف خاص • 3 أشهر", oldPrice: "٨٠", newPrice: "٣٥", sport: false },
              { name: "شاهد VIP 6 أشهر", sub: "ملف خاص • 6 أشهر", oldPrice: "١٥٠", newPrice: "٦٥", sport: false },
            ]}
            renderCard={(p, i) => <ShahidCard key={i} product={p} />}
          />

          {/* ═══ قسم نتفليكس ═══ */}
          <ProductSection
            title="اشتراكات نتفليكس"
            products={[
              { name: "نتفليكس شهر خاص", sub: "ملف خاص • شهر", oldPrice: "٤٠", newPrice: "١٨.٩" },
              { name: "نتفليكس مشترك 4K", sub: "مشترك • شهر", oldPrice: "١٧", newPrice: "١١" },
              { name: "نتفليكس 3 أشهر خاص", sub: "ملف خاص • 3 أشهر", oldPrice: "١٠٠", newPrice: "٥٠" },
              { name: "نتفليكس 6 أشهر خاص", sub: "ملف خاص • 6 أشهر", oldPrice: "١٨٠", newPrice: "٩٠" },
            ]}
            renderCard={(p, i) => <NetflixCard key={i} product={p} />}
          />

          {/* ═══ دعم 24/7 ═══ */}
          <section style={{ background: `linear-gradient(135deg,${SURFACE},#121212)`, border: `1px solid ${BORDER}`, borderRadius: "20px", padding: "40px 48px", marginBottom: "28px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "-40px", left: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: `radial-gradient(circle,rgba(245,197,24,.1) 0%,transparent 70%)`, pointerEvents: "none" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "40px", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "96px", height: "96px", borderRadius: "50%", border: `2px solid rgba(245,197,24,.3)`, background: BG, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <Headphones style={{ width: 48, height: 48, color: GOLD }} />
                  <div style={{ position: "absolute", bottom: "-4px", right: "-4px", background: GOLD_GRAD, color: "#000", fontWeight: 900, fontSize: "11px", padding: "3px 8px", borderRadius: "999px" }}>24/7</div>
                </div>
              </div>
              <div style={{ flex: "1 1 260px" }}>
                <h3 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(18px,2.5vw,26px)", lineHeight: 1.4, marginBottom: "10px" }}>
                  طاقم ماكس جاهز لخدمتكم طوال أيام الأسبوع وجميع ساعات اليوم
                </h3>
                <p style={{ color: "#666", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
                  تحت أي سماء وفوق أي أرض، طاقم ماكس حاضر لخدمتك في أي وقت.
                </p>
                <button style={{ background: "transparent", border: `1px solid rgba(245,197,24,.4)`, color: GOLD, fontWeight: 700, fontSize: "14px", padding: "10px 24px", borderRadius: "999px", cursor: "pointer", transition: "background .2s" }}
                  onMouseOver={e => (e.currentTarget.style.background = "rgba(245,197,24,.08)")}
                  onMouseOut={e => (e.currentTarget.style.background = "transparent")}>
                  تواصل معنا الآن
                </button>
              </div>
            </div>
          </section>

          {/* ═══ ماذا يميزنا ═══ */}
          <section style={{ marginBottom: "28px" }}>
            <div style={{ textAlign: "center", marginBottom: "28px" }}>
              <h3 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(20px,3vw,32px)", marginBottom: "8px" }}>ماذا يميزنا عن غيرنا؟</h3>
              <p style={{ color: "#555", fontSize: "14px" }}>عالم المنتجات الرقمية بأعلى جودة وأقل سعر</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "16px" }}>
              {[
                { icon: <Award style={{ width: 36, height: 36, color: GOLD }} />, title: "ضمان ماكس الذهبي", text: "تعويض فوري طوال فترة الاشتراك لضمان حقك." },
                { icon: <Headphones style={{ width: 36, height: 36, color: GOLD }} />, title: "لأنك تستحق الأفضل", text: "دعم فني متواجد على مدار الساعة لخدمتك." },
                { icon: <Globe style={{ width: 36, height: 36, color: GOLD }} />, title: "ادفع وأنت مرتاح", text: "Apple Pay, Visa, Mastercard, Mada, STC Pay" },
                { icon: <ShieldCheck style={{ width: 36, height: 36, color: GOLD }} />, title: "تسوق بأمان", text: "تشفير عالي لحماية بياناتك ومعلوماتك." },
              ].map((f, i) => (
                <div key={i} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: "16px", padding: "28px 20px", textAlign: "center", transition: "border-color .2s, transform .2s" }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,.35)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <div style={{ marginBottom: "14px", display: "flex", justifyContent: "center" }}>{f.icon}</div>
                  <h4 style={{ color: "#fff", fontWeight: 800, fontSize: "15px", marginBottom: "8px" }}>{f.title}</h4>
                  <p style={{ color: "#666", fontSize: "12px", lineHeight: 1.7 }}>{f.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ النشرة البريدية ═══ */}
          <section style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: "20px", padding: "48px 32px", textAlign: "center", marginBottom: "28px" }}>
            <h3 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(18px,2.5vw,28px)", marginBottom: "8px" }}>كن أول من يعرف!</h3>
            <p style={{ color: "#666", fontSize: "14px", marginBottom: "24px" }}>اشترك بنشرتنا البريدية ليصلك كل جديد وأفضل العروض.</p>
            <div style={{ display: "flex", gap: "10px", maxWidth: "480px", margin: "0 auto" }}>
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="inp"
                style={{ flex: 1, background: "#0a0a0a", border: `1px solid #2a2a2a`, borderRadius: "12px", padding: "12px 16px", color: "#fff", fontSize: "14px", textAlign: "right", transition: "border-color .2s" }}
              />
              <button style={{ background: GOLD_GRAD, color: "#000", fontWeight: 900, fontSize: "14px", padding: "12px 24px", borderRadius: "12px", border: "none", cursor: "pointer", flexShrink: 0, boxShadow: `0 4px 16px rgba(245,197,24,.3)`, whiteSpace: "nowrap" }}>
                اشترك الآن
              </button>
            </div>
          </section>

        </div>

        {/* ═══ FOOTER ═══ */}
        <footer style={{ background: "#080808", borderTop: `1px solid ${BORDER}`, padding: "48px 24px 32px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            {/* Top row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "40px", marginBottom: "40px" }}>
              {/* Brand */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                  <img src="/logo.png" alt="MAX" style={{ height: "40px", objectFit: "contain" }} />
                  <span style={{ color: GOLD, fontWeight: 900, fontSize: "18px" }}>ماكس ستور</span>
                </div>
                <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.8 }}>متجرك الأول للاشتراكات الرقمية بأسعار مغرية وضمان ذهبي.</p>
              </div>

              {/* Links */}
              <div>
                <h4 style={{ color: GOLD, fontWeight: 800, fontSize: "15px", marginBottom: "16px" }}>روابط مهمة</h4>
                {["الرئيسية", "الشروط والأحكام", "سياسة الاسترجاع", "اتصل بنا"].map((l, i) => (
                  <div key={i} style={{ marginBottom: "10px" }}>
                    <a href="#" style={{ color: "#666", fontSize: "13px", textDecoration: "none", transition: "color .2s" }}
                      onMouseOver={e => (e.currentTarget.style.color = "#fff")}
                      onMouseOut={e => (e.currentTarget.style.color = "#666")}>
                      {l}
                    </a>
                  </div>
                ))}
              </div>

              {/* Contact */}
              <div>
                <h4 style={{ color: GOLD, fontWeight: 800, fontSize: "15px", marginBottom: "16px" }}>خدمة العملاء</h4>
                <div style={{ display: "flex", gap: "10px" }}>
                  {[
                    <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, fill: "currentColor" }}><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>,
                    <MessageSquare style={{ width: 20, height: 20 }} />,
                    <MessageCircle style={{ width: 20, height: 20 }} />,
                  ].map((icon, i) => (
                    <a key={i} href="#" style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#111", border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", color: "#666", textDecoration: "none", transition: "color .2s,border-color .2s" }}
                      onMouseOver={e => { e.currentTarget.style.color = GOLD; e.currentTarget.style.borderColor = GOLD; }}
                      onMouseOut={e => { e.currentTarget.style.color = "#666"; e.currentTarget.style.borderColor = BORDER; }}>
                      {icon}
                    </a>
                  ))}
                </div>
                <div style={{ marginTop: "16px" }}>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <a href="#" style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#111", border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", color: "#666", textDecoration: "none", transition: "color .2s" }}
                      onMouseOver={e => (e.currentTarget.style.color = GOLD)}
                      onMouseOut={e => (e.currentTarget.style.color = "#666")}>
                      <Instagram style={{ width: 18, height: 18 }} />
                    </a>
                    <a href="#" style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#111", border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", color: "#666", textDecoration: "none", fontWeight: 900, fontSize: "14px", transition: "color .2s" }}
                      onMouseOver={e => (e.currentTarget.style.color = "#fff")}
                      onMouseOut={e => (e.currentTarget.style.color = "#666")}>
                      X
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
              <p style={{ color: "#444", fontSize: "12px" }}>وثيقة العمل الحر FL-XXXXXX</p>
              <div style={{ display: "flex", gap: "12px" }}>
                {["Apple Pay", "Visa", "Mastercard", "Mada"].map((m, i) => (
                  <span key={i} style={{ color: "#444", fontSize: "12px", fontWeight: 700 }}>{m}</span>
                ))}
              </div>
              <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ color: "#555", background: "none", border: "none", cursor: "pointer", fontSize: "12px", transition: "color .2s" }}
                onMouseOver={e => (e.currentTarget.style.color = GOLD)}
                onMouseOut={e => (e.currentTarget.style.color = "#555")}>
                ↑ العودة لأعلى
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

/* ─── Product Section ─── */
function ProductSection({ title, products, renderCard }: {
  title: string;
  products: any[];
  renderCard: (p: any, i: number) => React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: "36px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <div>
          <h3 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(16px,2vw,22px)", margin: 0 }}>{title}</h3>
          <div style={{ marginTop: "6px", height: "2px", width: "60%", background: `linear-gradient(to right,${GOLD},transparent)` }} />
        </div>
        <a href="#" style={{ color: GOLD, fontSize: "13px", fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: "4px" }}>
          <ArrowLeft style={{ width: 14, height: 14 }} /> عرض الكل
        </a>
      </div>

      {/* On mobile: horizontal scroll. On desktop: grid */}
      <style dangerouslySetInnerHTML={{ __html: `
        .prod-grid { display:flex; gap:16px; overflow-x:auto; padding-bottom:8px; -ms-overflow-style:none; scrollbar-width:none; }
        .prod-grid::-webkit-scrollbar { display:none; }
        @media(min-width:768px) { .prod-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); overflow:visible; padding-bottom:0; } }
      ` }} />
      <div className="prod-grid">
        {products.map((p, i) => renderCard(p, i))}
      </div>
    </section>
  );
}

/* ─── Shahid Card ─── */
function ShahidCard({ product }: { product: any }) {
  const isSport = product.sport;
  return (
    <div className="pc" style={{ minWidth: "180px", flex: "0 0 180px", borderRadius: "18px", overflow: "hidden", background: CARD_BG, border: `1px solid ${BORDER}`, boxShadow: "0 4px 24px rgba(0,0,0,.6)", display: "flex", flexDirection: "column" }}>
      {/* Image area */}
      <div style={{ position: "relative", height: "180px", background: isSport ? "linear-gradient(160deg,#0d0900,#1c1400,#2a1e00)" : "linear-gradient(160deg,#0a0900,#181200,#221a00)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 70%,rgba(245,197,24,.2) 0%,transparent 65%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, opacity: .05, backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "12px 12px", pointerEvents: "none" }} />

        <div style={{ position: "absolute", top: 0, left: 0, background: GOLD_GRAD, color: "#000", fontWeight: 900, fontSize: "9px", padding: "5px 10px", borderRadius: "0 0 10px 0" }}>ضمان ذهبي</div>
        <div style={{ position: "absolute", top: 0, right: 0, background: "rgba(245,197,24,.2)", color: GOLD, fontWeight: 900, fontSize: "9px", padding: "5px 10px", borderRadius: "0 0 0 10px" }}>
          {isSport ? "رياضة" : "VIP"}
        </div>

        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px", zIndex: 1 }}>
          <div style={{ display: "flex", gap: "4px", alignItems: "flex-end" }}>
            {[16, 24, 16].map((h, i) => (
              <div key={i} style={{ width: "7px", height: `${h}px`, borderRadius: "3px", background: GOLD_GRAD }} />
            ))}
          </div>
          <span style={{ color: "#fff", fontWeight: 900, fontSize: "13px", letterSpacing: "3px" }}>SHAHID</span>
          <span style={{ color: GOLD, fontSize: "10px", fontWeight: 700 }}>{isSport ? "SPORTS" : "VIP"}</span>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top,rgba(0,0,0,.85),transparent)", padding: "8px 8px 8px", display: "flex", gap: "6px", justifyContent: "center" }}>
          {[
            <span style={{ display: "flex", alignItems: "center", gap: "3px", background: "rgba(245,197,24,.15)", color: GOLD, fontWeight: 700, fontSize: "9px", padding: "3px 7px", borderRadius: "6px" }}>
              <Zap style={{ width: 10, height: 10, fill: GOLD }} />4K
            </span>,
            <span style={{ background: "rgba(255,255,255,.07)", color: "#aaa", fontWeight: 700, fontSize: "9px", padding: "3px 7px", borderRadius: "6px" }}>رسمي</span>,
          ].map((chip, i) => <React.Fragment key={i}>{chip}</React.Fragment>)}
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "8px", flex: 1, borderTop: `1px solid ${BORDER}` }}>
        <h4 style={{ color: "#fff", fontWeight: 800, fontSize: "12px", lineHeight: 1.4, margin: 0 }}>{product.name}</h4>
        <p style={{ color: "#555", fontSize: "11px", margin: 0 }}>{product.sub}</p>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: "auto" }}>
          <div>
            <div style={{ color: "#444", fontSize: "10px", textDecoration: "line-through" }}>{product.oldPrice} ر.س</div>
            <div style={{ color: GOLD, fontWeight: 900, fontSize: "18px", lineHeight: 1 }}>
              {product.newPrice} <span style={{ fontSize: "11px", fontWeight: 700 }}>ر.س</span>
            </div>
          </div>
          <button style={{ background: "none", border: "none", cursor: "pointer", color: "#444", transition: "color .2s" }}
            onMouseOver={e => (e.currentTarget.style.color = "#ef4444")}
            onMouseOut={e => (e.currentTarget.style.color = "#444")}>
            <Heart style={{ width: 16, height: 16 }} />
          </button>
        </div>
        <button style={{ width: "100%", background: GOLD_GRAD, color: "#000", fontWeight: 900, fontSize: "12px", padding: "10px", borderRadius: "12px", border: "none", cursor: "pointer", boxShadow: "0 4px 14px rgba(245,197,24,.3)", transition: "transform .15s" }}
          onMouseOver={e => (e.currentTarget.style.transform = "scale(1.03)")}
          onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}>
          🛒 أضف للسلة
        </button>
      </div>
    </div>
  );
}

/* ─── Netflix Card ─── */
function NetflixCard({ product }: { product: any }) {
  return (
    <div className="pc" style={{ minWidth: "180px", flex: "0 0 180px", borderRadius: "18px", overflow: "hidden", background: CARD_BG, border: `1px solid ${BORDER}`, boxShadow: "0 4px 24px rgba(0,0,0,.6)", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "relative", height: "180px", background: "linear-gradient(160deg,#0d0000,#1a0000,#4a0000)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 70%,rgba(220,38,38,.28) 0%,transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, opacity: .05, backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "14px 14px", pointerEvents: "none" }} />

        <div style={{ position: "absolute", top: 0, left: 0, background: GOLD_GRAD, color: "#000", fontWeight: 900, fontSize: "9px", padding: "5px 10px", borderRadius: "0 0 10px 0" }}>ضمان ذهبي</div>

        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
          <span style={{ color: "#fff", fontWeight: 900, fontSize: "76px", fontStyle: "italic", letterSpacing: "-4px", lineHeight: 1, textShadow: "0 0 40px rgba(220,38,38,.9)" }}>N</span>
          <span style={{ color: "#fca5a5", fontSize: "9px", letterSpacing: "4px", fontWeight: 900, marginTop: "-12px" }}>NETFLIX</span>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top,rgba(0,0,0,.9),transparent)", padding: "8px", display: "flex", gap: "6px", justifyContent: "center" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "3px", background: "rgba(245,197,24,.15)", color: GOLD, fontWeight: 700, fontSize: "9px", padding: "3px 7px", borderRadius: "6px" }}>
            <Zap style={{ width: 10, height: 10, fill: GOLD }} />4K
          </span>
          <span style={{ background: "rgba(255,255,255,.07)", color: "#aaa", fontWeight: 700, fontSize: "9px", padding: "3px 7px", borderRadius: "6px" }}>رسمي</span>
        </div>
      </div>

      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "8px", flex: 1, borderTop: `1px solid ${BORDER}` }}>
        <h4 style={{ color: "#fff", fontWeight: 800, fontSize: "12px", lineHeight: 1.4, margin: 0 }}>{product.name}</h4>
        <p style={{ color: "#555", fontSize: "11px", margin: 0 }}>{product.sub}</p>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: "auto" }}>
          <div>
            <div style={{ color: "#444", fontSize: "10px", textDecoration: "line-through" }}>{product.oldPrice} ر.س</div>
            <div style={{ color: GOLD, fontWeight: 900, fontSize: "18px", lineHeight: 1 }}>
              {product.newPrice} <span style={{ fontSize: "11px", fontWeight: 700 }}>ر.س</span>
            </div>
          </div>
          <button style={{ background: "none", border: "none", cursor: "pointer", color: "#444", transition: "color .2s" }}
            onMouseOver={e => (e.currentTarget.style.color = "#ef4444")}
            onMouseOut={e => (e.currentTarget.style.color = "#444")}>
            <Heart style={{ width: 16, height: 16 }} />
          </button>
        </div>
        <button style={{ width: "100%", background: GOLD_GRAD, color: "#000", fontWeight: 900, fontSize: "12px", padding: "10px", borderRadius: "12px", border: "none", cursor: "pointer", boxShadow: "0 4px 14px rgba(245,197,24,.3)", transition: "transform .15s" }}
          onMouseOver={e => (e.currentTarget.style.transform = "scale(1.03)")}
          onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}>
          🛒 أضف للسلة
        </button>
      </div>
    </div>
  );
}
