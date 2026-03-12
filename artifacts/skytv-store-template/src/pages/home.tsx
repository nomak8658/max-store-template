import React, { useState, useEffect } from "react";
import {
  ShoppingBag, Search, User, Zap, Heart, Headphones,
  Award, Globe, ShieldCheck, Instagram, MessageCircle,
  MessageSquare, ArrowLeft, Star, Menu, X, Crown, Flame,
} from "lucide-react";

const G = "#f5c518";
const GD = "linear-gradient(135deg,#b8860b 0%,#f5c518 45%,#ffd700 70%,#c9a000 100%)";
const GD2 = "linear-gradient(135deg,#c9a227 0%,#f5c518 100%)";

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{font-family:'Cairo',sans-serif;box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:smooth;}
  body{background:#080808;color:#fff;-webkit-font-smoothing:antialiased;overflow-x:hidden;}
  ::-webkit-scrollbar{width:4px;height:4px;}
  ::-webkit-scrollbar-track{background:#0d0d0d;}
  ::-webkit-scrollbar-thumb{background:#2a2a2a;border-radius:4px;}
  ::-webkit-scrollbar-thumb:hover{background:#f5c518;}

  /* ── Animations ── */
  @keyframes mq{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}
  @keyframes fadeUp{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);}}
  @keyframes ring{0%{transform:scale(1);opacity:.5;}70%{transform:scale(1.45);opacity:0;}100%{opacity:0;}}
  @keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}

  .fade-up{animation:fadeUp .5s ease forwards;}
  .mq-inner{display:inline-flex;animation:mq 25s linear infinite;white-space:nowrap;}
  .mq-inner:hover{animation-play-state:paused;}
  .float{animation:float 4s ease-in-out infinite;}

  /* Shimmer button */
  .btn-gold{position:relative;overflow:hidden;cursor:pointer;}
  .btn-gold::after{content:'';position:absolute;top:0;left:-100%;width:55%;height:100%;
    background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,.28) 50%,transparent 70%);
    transition:left .55s ease;}
  .btn-gold:hover::after{left:160%;}

  /* Card */
  .pc{transition:transform .22s cubic-bezier(.34,1.56,.64,1),box-shadow .22s ease;}
  .pc:hover{transform:translateY(-7px);box-shadow:0 18px 50px rgba(245,197,24,.18)!important;}

  /* Feature card */
  .fc{transition:transform .2s,border-color .2s,box-shadow .2s;}
  .fc:hover{transform:translateY(-4px);border-color:rgba(245,197,24,.35)!important;box-shadow:0 12px 40px rgba(0,0,0,.5)!important;}

  /* Glow text */
  .glow{text-shadow:0 0 24px rgba(245,197,24,.55),0 0 48px rgba(245,197,24,.2);}

  /* Ring pulse */
  .ring{position:relative;}
  .ring::before{content:'';position:absolute;inset:-6px;border-radius:inherit;
    border:2px solid #f5c518;animation:ring 2.2s ease-out infinite;pointer-events:none;}

  /* ════════════ LAYOUT CLASSES ════════════ */

  .wrap{max-width:1280px;margin:0 auto;padding:0 20px;}
  .main-pad{padding:22px 20px 80px;}

  /* Hero */
  .hero{position:relative;overflow:hidden;border-radius:20px;
    background:linear-gradient(135deg,#0d0d0d 0%,#0f0f0f 40%,#090909 100%);
    border:1px solid rgba(255,255,255,.07);margin-bottom:16px;}
  .hero-inner{display:flex;align-items:center;justify-content:space-between;
    padding:32px 28px;gap:28px;flex-direction:column-reverse;}
  .hero-text{flex:1 1 auto;width:100%;text-align:center;}
  .hero-text h1{font-size:clamp(28px,8vw,56px);font-weight:900;line-height:1.15;margin-bottom:16px;}
  .hero-text p{color:#777;font-size:14px;line-height:1.85;margin-bottom:22px;}
  .hero-btns{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;}
  .hero-trust{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-top:20px;}
  .hero-cards{flex-shrink:0;position:relative;width:200px;height:230px;margin:0 auto;}
  .hero-stats{border-top:1px solid rgba(255,255,255,.07);
    display:grid;grid-template-columns:repeat(2,1fr);gap:0;}
  .stat-item{text-align:center;padding:16px 8px;border-left:1px solid rgba(255,255,255,.07);}
  .stat-item:nth-child(odd){border-left:none;}
  .stat-item:nth-child(1),.stat-item:nth-child(2){border-bottom:1px solid rgba(255,255,255,.07);}
  .stat-n{font-weight:900;font-size:22px;line-height:1;}
  .stat-l{color:#555;font-size:11px;font-weight:600;margin-top:4px;}

  /* Payment strip */
  .pay-strip{background:#111;border:1px solid rgba(255,255,255,.07);border-radius:14px;
    padding:16px 18px;margin-bottom:16px;}
  .pay-strip-inner{display:flex;align-items:center;gap:12px;flex-wrap:wrap;}
  .pay-label{color:#555;font-size:12px;font-weight:700;white-space:nowrap;}
  .pay-badges{display:flex;flex-wrap:wrap;gap:7px;flex:1;}
  .pay-badge{padding:5px 12px;border-radius:7px;background:#080808;
    border:1px solid rgba(255,255,255,.06);font-size:11px;font-weight:800;}
  .secure-badge{display:flex;align-items:center;gap:5px;background:rgba(74,222,128,.07);
    border:1px solid rgba(74,222,128,.2);border-radius:8px;padding:5px 10px;white-space:nowrap;}

  /* Marquee */
  .mq-wrap{overflow:hidden;background:#080808;
    border-top:1px solid rgba(245,197,24,.18);border-bottom:1px solid rgba(245,197,24,.18);
    padding:11px 0;margin-bottom:32px;position:relative;}
  .mq-fade{position:absolute;inset:0;z-index:1;pointer-events:none;
    background:linear-gradient(to right,#080808 0%,transparent 12%,transparent 88%,#080808 100%);}

  /* Product section */
  .sec-hd{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:18px;}
  .sec-title-wrap h3{font-size:clamp(16px,4vw,22px);font-weight:900;color:#fff;}
  .sec-title-wrap p{color:#444;font-size:12px;margin-top:3px;padding-right:30px;}
  .sec-line{height:2px;width:48px;border-radius:2px;margin-top:7px;margin-right:30px;}
  .sec-all{display:flex;align-items:center;gap:5px;color:#f5c518;font-size:12px;font-weight:700;
    text-decoration:none;padding:6px 12px;border-radius:8px;border:1px solid rgba(245,197,24,.25);
    background:rgba(245,197,24,.05);white-space:nowrap;transition:background .2s;}
  .sec-all:hover{background:rgba(245,197,24,.12);}

  /* Product grid */
  .prod-row{display:flex;gap:14px;overflow-x:auto;padding-bottom:6px;-ms-overflow-style:none;scrollbar-width:none;}
  .prod-row::-webkit-scrollbar{display:none;}

  /* Card */
  .card{min-width:165px;flex:0 0 165px;border-radius:18px;overflow:hidden;
    background:#111;border:1px solid rgba(255,255,255,.07);
    box-shadow:0 4px 24px rgba(0,0,0,.6);display:flex;flex-direction:column;}
  .card-img{position:relative;height:170px;overflow:hidden;}
  .card-info{padding:12px 12px 14px;display:flex;flex-direction:column;gap:9px;flex:1;
    border-top:1px solid rgba(255,255,255,.07);}
  .card-name{color:#ddd;font-weight:800;font-size:12px;line-height:1.45;}
  .card-old{color:#333;font-size:9px;text-decoration:line-through;}
  .card-price{color:#f5c518;font-weight:900;font-size:19px;line-height:1;}
  .card-price span{font-size:10px;font-weight:700;}
  .card-row{display:flex;align-items:flex-end;justify-content:space-between;}
  .card-btn{width:100%;font-weight:900;font-size:12px;padding:9px;border-radius:11px;
    border:none;cursor:pointer;box-shadow:0 4px 14px rgba(245,197,24,.3);
    transition:transform .15s,box-shadow .15s;}
  .card-btn:hover{transform:scale(1.03);box-shadow:0 6px 22px rgba(245,197,24,.45);}
  .badge-gld{position:absolute;top:0;right:0;font-weight:900;font-size:9px;
    padding:5px 9px;border-radius:0 0 0 9px;color:#000;z-index:20;}
  .badge-hot{position:absolute;top:8px;left:8px;display:flex;align-items:center;gap:3px;
    background:rgba(239,68,68,.15);border:1px solid rgba(239,68,68,.3);
    color:#ef4444;font-weight:800;font-size:8px;padding:3px 7px;border-radius:6px;z-index:20;}
  .badge-disc{position:absolute;top:8px;left:8px;background:#ef4444;
    color:#fff;font-weight:900;font-size:8px;padding:3px 7px;border-radius:6px;z-index:20;}
  .chips{position:absolute;bottom:0;left:0;right:0;
    background:linear-gradient(to top,rgba(0,0,0,.92),transparent);
    padding:9px 9px 7px;display:flex;gap:5px;justify-content:center;z-index:20;}
  .chip-gold{display:flex;align-items:center;gap:3px;background:rgba(245,197,24,.15);
    color:#f5c518;font-weight:800;font-size:8px;padding:3px 7px;border-radius:5px;}
  .chip-gray{background:rgba(255,255,255,.06);color:#777;font-weight:700;
    font-size:8px;padding:3px 7px;border-radius:5px;}

  /* Support */
  .support{position:relative;overflow:hidden;border-radius:20px;margin-bottom:16px;
    border:1px solid rgba(255,255,255,.07);
    background:linear-gradient(135deg,#111 0%,#161616 60%,#0d0d0d 100%);}
  .support-inner{display:flex;align-items:center;gap:28px;flex-wrap:wrap;
    padding:32px 28px;position:relative;z-index:1;}
  .support-icon{flex-shrink:0;position:relative;width:84px;height:84px;border-radius:50%;
    border:2px solid rgba(245,197,24,.3);background:#080808;
    display:flex;align-items:center;justify-content:center;
    box-shadow:0 0 32px rgba(245,197,24,.12);}
  .support-text{flex:1 1 200px;}
  .support-text h3{color:#fff;font-weight:900;font-size:clamp(16px,3.5vw,26px);
    line-height:1.45;margin-bottom:10px;}
  .support-text p{color:#555;font-size:13px;line-height:1.85;margin-bottom:18px;}
  .support-btns{display:flex;gap:10px;flex-wrap:wrap;}

  /* Features */
  .features-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;}
  .feat-card{background:#111;border:1px solid rgba(255,255,255,.07);border-radius:16px;
    padding:22px 18px;position:relative;overflow:hidden;}
  .feat-icon{width:46px;height:46px;border-radius:13px;border:1px solid rgba(245,197,24,.25);
    background:rgba(245,197,24,.07);display:flex;align-items:center;justify-content:center;
    margin-bottom:14px;}
  .feat-title{color:#fff;font-weight:800;font-size:13px;margin-bottom:6px;}
  .feat-text{color:#4a4a4a;font-size:11px;line-height:1.7;}

  /* Newsletter */
  .newsletter{position:relative;overflow:hidden;border-radius:20px;
    background:linear-gradient(135deg,#111 0%,#161616 100%);
    border:1px solid rgba(255,255,255,.07);padding:40px 24px;text-align:center;
    margin-bottom:16px;}
  .newsletter h3{color:#fff;font-weight:900;font-size:clamp(18px,5vw,28px);margin-bottom:8px;}
  .newsletter p{color:#555;font-size:13px;margin-bottom:22px;max-width:420px;margin-inline:auto;}
  .nl-form{display:flex;gap:8px;max-width:480px;margin:0 auto;}
  .nl-input{flex:1;background:#080808;border:1px solid rgba(255,255,255,.08);
    border-radius:11px;padding:12px 16px;color:#fff;font-size:13px;text-align:right;
    outline:none;transition:border-color .2s;min-width:0;}
  .nl-input:focus{border-color:#f5c518;}
  .nl-btn{flex-shrink:0;font-weight:900;font-size:13px;padding:12px 20px;
    border-radius:11px;border:none;cursor:pointer;
    box-shadow:0 5px 18px rgba(245,197,24,.33);}

  /* Footer */
  .footer{background:#050505;border-top:1px solid rgba(255,255,255,.06);padding:44px 20px 28px;}
  .footer-grid{display:grid;grid-template-columns:1fr;gap:32px;margin-bottom:32px;}
  .footer-bottom{border-top:1px solid rgba(255,255,255,.06);padding-top:20px;
    display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;}

  /* Nav */
  .navbar{position:sticky;top:0;z-index:200;backdrop-filter:blur(20px);
    border-bottom:1px solid rgba(255,255,255,.07);transition:all .3s ease;}
  .navbar.scrolled{border-bottom-color:rgba(245,197,24,.22);}
  .nav-inner{max-width:1280px;margin:0 auto;padding:0 20px;height:58px;
    display:flex;align-items:center;justify-content:space-between;}
  .nav-links{display:none;}
  .nav-logo{display:flex;align-items:center;gap:10px;text-decoration:none;}
  .nav-actions{display:flex;align-items:center;gap:8px;}
  .nav-btn{width:34px;height:34px;border-radius:8px;border:1px solid rgba(255,255,255,.07);
    background:rgba(255,255,255,.03);color:#777;cursor:pointer;
    display:flex;align-items:center;justify-content:center;transition:all .2s;}
  .nav-btn:hover{border-color:rgba(245,197,24,.3);color:#f5c518;}
  .mobile-nav{background:#0d0d0d;border-top:1px solid rgba(255,255,255,.07);padding:6px 0;}
  .mobile-nav a{display:block;padding:11px 20px;color:#999;font-weight:700;
    font-size:13.5px;text-decoration:none;border-bottom:1px solid rgba(255,255,255,.05);}
  .mobile-nav a.active{color:#f5c518;}

  /* ════════════ DESKTOP OVERRIDES (768px+) ════════════ */
  @media(min-width:768px){
    .wrap{padding:0 24px;}
    .main-pad{padding:28px 24px 80px;}

    .nav-links{display:flex;gap:4px;}
    .mob-btn{display:none!important;}

    .hero-inner{flex-direction:row;padding:52px 56px;gap:40px;}
    .hero-text{text-align:right;width:auto;}
    .hero-btns{justify-content:flex-start;}
    .hero-trust{justify-content:flex-start;}
    .hero-cards{width:240px;height:270px;margin:0;}
    .hero-stats{grid-template-columns:repeat(4,1fr);}
    .stat-item{border-bottom:none!important;}
    .stat-item:nth-child(odd){border-left:1px solid rgba(255,255,255,.07);}
    .stat-item:nth-child(1){border-left:none;}
    .stat-n{font-size:26px;}

    .pay-strip-inner{flex-wrap:nowrap;}

    .support-inner{padding:44px 56px;gap:44px;}
    .support-icon{width:96px;height:96px;}

    .features-grid{grid-template-columns:repeat(4,1fr);}

    .newsletter{padding:56px 48px;}

    .footer-grid{grid-template-columns:repeat(4,1fr);}

    .prod-row{display:grid;grid-template-columns:repeat(4,1fr);overflow:visible;padding-bottom:0;}
    .card{min-width:unset;flex:unset;}
  }
`;

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
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
      <div dir="rtl" style={{ minHeight: "100vh", background: "#080808" }}>

        {/* ══ NAVBAR ══ */}
        <header className={`navbar${scrolled ? " scrolled" : ""}`}
          style={{ background: scrolled ? "rgba(8,8,8,.97)" : "rgba(8,8,8,.85)" }}>
          <div className="nav-inner">
            <a className="nav-logo" href="#">
              <div style={{ width: 36, height: 36, borderRadius: 9, background: GD, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(245,197,24,.4)" }}>
                <Crown style={{ width: 18, height: 18, color: "#000" }} />
              </div>
              <div>
                <div style={{ color: "#fff", fontWeight: 900, fontSize: 15, lineHeight: 1.1 }}>ماكس ستور</div>
                <div style={{ color: G, fontSize: 8, fontWeight: 700, letterSpacing: 2 }}>MAX STORE</div>
              </div>
            </a>

            <nav className="nav-links">
              {[["الرئيسية", true], ["شاهد VIP", false], ["نتفليكس", false], ["ديزني+", false], ["عروض 🔥", false]].map(([l, a], i) => (
                <a key={i} href="#" style={{
                  color: a ? G : "#777", fontWeight: 700, fontSize: 13, textDecoration: "none",
                  padding: "5px 13px", borderRadius: 8, transition: "all .2s",
                  background: a ? "rgba(245,197,24,.08)" : "transparent",
                  border: a ? "1px solid rgba(245,197,24,.2)" : "1px solid transparent",
                }}>{l as string}</a>
              ))}
            </nav>

            <div className="nav-actions">
              {[Search, User, ShoppingBag].map((Icon, i) => (
                <button key={i} className="nav-btn"><Icon style={{ width: 15, height: 15 }} /></button>
              ))}
              <button className="nav-btn mob-btn" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X style={{ width: 15, height: 15 }} /> : <Menu style={{ width: 15, height: 15 }} />}
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="mobile-nav">
              {["الرئيسية", "شاهد VIP", "نتفليكس", "ديزني+", "عروض 🔥"].map((l, i) => (
                <a key={i} href="#" className={i === 0 ? "active" : ""}>{l}</a>
              ))}
            </div>
          )}
        </header>

        <div className="main-pad" style={{ maxWidth: 1280, margin: "0 auto" }}>

          {/* ══ HERO ══ */}
          <section className="hero fade-up">
            {/* Decorative blobs */}
            <div style={{ position: "absolute", top: -80, right: -80, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle,rgba(245,197,24,.1) 0%,transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: -60, left: -40, width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle,rgba(245,197,24,.05) 0%,transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(245,197,24,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(245,197,24,.025) 1px,transparent 1px)", backgroundSize: "56px 56px", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: 0, right: 0, width: "45%", height: 2, background: "linear-gradient(to left,#f5c518,transparent)" }} />

            <div className="hero-inner">
              {/* Cards */}
              <div className="hero-cards float">

                {/* Disney+ — ذهبي */}
                <div style={{
                  position: "absolute", width: 118, height: 154, top: 8, right: 0,
                  background: "linear-gradient(145deg,#0d0d0d,#181408,#0a0800)",
                  transform: "rotate(15deg)", zIndex: 1, borderRadius: 16,
                  border: "1px solid rgba(245,197,24,.28)",
                  boxShadow: "0 10px 36px rgba(0,0,0,.9),0 0 22px rgba(245,197,24,.1)",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6,
                  overflow: "hidden",
                }}>
                  <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 30%,rgba(245,197,24,.12) 0%,transparent 65%)", pointerEvents: "none" }} />
                  <span style={{
                    color: G, fontWeight: 900, fontSize: 26, fontStyle: "italic",
                    textShadow: "0 0 18px rgba(245,197,24,.9),0 0 36px rgba(245,197,24,.4)",
                  }}>D+</span>
                  <span style={{ color: "#c9a000", fontSize: 8, letterSpacing: 3, fontWeight: 800 }}>DISNEY+</span>
                  <div style={{ width: 32, height: 1, background: "linear-gradient(to right,transparent,#f5c518,transparent)", marginTop: 2 }} />
                </div>

                {/* Shahid — ذهبي */}
                <div style={{
                  position: "absolute", width: 124, height: 160, top: 30, right: 34,
                  background: "linear-gradient(145deg,#0f0e08,#1a1700,#0a0900)",
                  transform: "rotate(-7deg)", zIndex: 2, borderRadius: 16,
                  border: "1px solid rgba(245,197,24,.32)",
                  boxShadow: "0 12px 40px rgba(0,0,0,.9),0 0 30px rgba(245,197,24,.14)",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8,
                  overflow: "hidden",
                }}>
                  <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 35%,rgba(245,197,24,.15) 0%,transparent 65%)", pointerEvents: "none" }} />
                  <div style={{ display: "flex", gap: 4, alignItems: "flex-end" }}>
                    {[16, 26, 16].map((h, i) => (
                      <div key={i} style={{ width: 7, height: h, borderRadius: 3, background: GD, boxShadow: "0 0 8px rgba(245,197,24,.6)" }} />
                    ))}
                  </div>
                  <span style={{
                    color: "#fff", fontWeight: 900, fontSize: 10, letterSpacing: 4,
                    textShadow: "0 0 12px rgba(245,197,24,.5)",
                  }}>SHAHID</span>
                  <span style={{
                    background: "rgba(245,197,24,.15)", color: G, fontWeight: 900,
                    fontSize: 8, padding: "2px 10px", borderRadius: 999,
                    border: "1px solid rgba(245,197,24,.35)",
                    textShadow: "0 0 8px rgba(245,197,24,.6)",
                  }}>VIP</span>
                </div>

                {/* Netflix — ذهبي */}
                <div style={{
                  position: "absolute", width: 132, height: 168, top: 48, right: 60,
                  background: "linear-gradient(160deg,#0c0b00,#1a1800,#0d0c00)",
                  transform: "rotate(5deg)", zIndex: 3, borderRadius: 16,
                  border: "1px solid rgba(245,197,24,.38)",
                  boxShadow: "0 14px 48px rgba(0,0,0,.95),0 0 40px rgba(245,197,24,.22)",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  overflow: "hidden",
                }}>
                  <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 40%,rgba(245,197,24,.18) 0%,transparent 60%)", pointerEvents: "none" }} />
                  <span style={{
                    color: G, fontWeight: 900, fontSize: 76, fontStyle: "italic",
                    letterSpacing: -5, lineHeight: 1, position: "relative", zIndex: 1,
                    textShadow: "0 0 30px rgba(245,197,24,1),0 0 60px rgba(245,197,24,.55),0 0 100px rgba(245,197,24,.25)",
                  }}>N</span>
                  <span style={{
                    color: "#c9a000", fontSize: 8, letterSpacing: 4, fontWeight: 900, marginTop: -12,
                    textShadow: "0 0 10px rgba(245,197,24,.5)",
                  }}>NETFLIX</span>
                </div>

                {/* Badge */}
                <div className="ring" style={{ position: "absolute", bottom: 14, right: 8, zIndex: 10, background: GD, color: "#000", fontWeight: 900, fontSize: 9, padding: "4px 12px", borderRadius: 999, boxShadow: "0 4px 14px rgba(245,197,24,.6)", transform: "rotate(-5deg)" }}>✓ ضمان ذهبي</div>
              </div>

              {/* Text */}
              <div className="hero-text">
                <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(245,197,24,.1)", border: "1px solid rgba(245,197,24,.2)", borderRadius: 999, padding: "5px 14px", marginBottom: 18 }}>
                  <Star style={{ width: 12, height: 12, color: G, fill: G }} />
                  <span style={{ color: G, fontSize: 12, fontWeight: 700 }}>متجر الاشتراكات الرقمية #1</span>
                </div>
                <h1>
                  ملاذك للاشتراكات<br />
                  <span className="glow" style={{ color: G }}>الرقمية الأصلية</span>
                </h1>
                <p>حسابات مضمونة 100%، أسعار لا تُقاوم، دعم على مدار الساعة.<br />اشترك الآن واستمتع بأفضل تجربة رقمية.</p>
                <div className="hero-btns">
                  <button className="btn-gold" style={{ background: GD, color: "#000", fontWeight: 900, fontSize: 14, padding: "12px 28px", borderRadius: 11, border: "none", boxShadow: "0 7px 24px rgba(245,197,24,.42)", transition: "transform .15s,box-shadow .15s" }}
                    onMouseOver={e => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = "0 10px 32px rgba(245,197,24,.55)"; }}
                    onMouseOut={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 7px 24px rgba(245,197,24,.42)"; }}>
                    🛒 تسوق الآن
                  </button>
                  <button style={{ background: "rgba(255,255,255,.05)", color: "#bbb", fontWeight: 700, fontSize: 13, padding: "12px 22px", borderRadius: 11, border: "1px solid rgba(255,255,255,.08)", cursor: "pointer", transition: "all .2s" }}
                    onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,.3)"; e.currentTarget.style.color = G; }}
                    onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,.08)"; e.currentTarget.style.color = "#bbb"; }}>
                    تواصل معنا
                  </button>
                </div>
                <div className="hero-trust">
                  {[["✅", "ضمان ذهبي"], ["⚡", "تسليم فوري"], ["🔒", "دفع آمن"]].map(([ic, lb], i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <span style={{ fontSize: 13 }}>{ic}</span>
                      <span style={{ color: "#555", fontSize: 11.5, fontWeight: 700 }}>{lb}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              {[["10,000+", "عميل راضٍ"], ["100%", "ضمان ذهبي"], ["24/7", "دعم فني"], ["+50", "منتج رقمي"]].map(([n, l], i) => (
                <div key={i} className="stat-item">
                  <div className="stat-n glow" style={{ color: G }}>{n}</div>
                  <div className="stat-l">{l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ══ PAYMENT ══ */}
          <div className="pay-strip">
            <div className="pay-strip-inner">
              <span className="pay-label">طرق الدفع:</span>
              <div className="pay-badges">
                {[["Apple Pay", "#fff"], ["Mastercard", "#eb5757"], ["VISA", "#60a5fa"], ["mada", "#4ade80"], ["STC Pay", "#c084fc"], ["PayPal", "#93c5fd"], ["Bitcoin", "#f97316"]].map(([l, c], i) => (
                  <div key={i} className="pay-badge" style={{ color: c as string, fontStyle: l === "VISA" ? "italic" : "normal" }}>{l}</div>
                ))}
              </div>
              <div className="secure-badge">
                <ShieldCheck style={{ width: 13, height: 13, color: "#4ade80" }} />
                <span style={{ color: "#4ade80", fontSize: 10.5, fontWeight: 700 }}>دفع مشفّر</span>
              </div>
            </div>
          </div>

          {/* ══ MARQUEE ══ */}
          <div className="mq-wrap" style={{ margin: "0 -20px 30px" }}>
            <div className="mq-fade" />
            <div className="mq-inner" style={{ gap: 36 }}>
              {Array.from({ length: 18 }, (_, i) => (
                <span key={i} style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                  <Crown style={{ width: 13, height: 13, color: G }} />
                  <span style={{ color: "#fff", fontWeight: 900, fontSize: 11, letterSpacing: 4 }}>MAX STORE</span>
                  <span style={{ color: G, fontSize: 9 }}>✦</span>
                  <span style={{ color: "#444", fontWeight: 700, fontSize: 10, letterSpacing: 2 }}>PREMIUM</span>
                  <span style={{ color: G, fontSize: 9 }}>✦</span>
                </span>
              ))}
            </div>
          </div>

          {/* ══ SHAHID ══ */}
          <ProductSection title="اشتراكات شاهد VIP" desc="حسابات شاهد الرسمية بأفضل الأسعار وضمان ذهبي" icon="📺"
            products={shahidProducts} renderCard={(p: any, i: number) => <ShahidCard key={i} product={p} />} />

          {/* ══ NETFLIX ══ */}
          <ProductSection title="اشتراكات نتفليكس" desc="احصل على نتفليكس بسعر أقل مع ضمان ماكس" icon="🎬"
            products={netflixProducts} renderCard={(p: any, i: number) => <NetflixCard key={i} product={p} />} />

          {/* ══ SUPPORT ══ */}
          <section className="support">
            <div style={{ position: "absolute", top: -60, left: -60, width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle,rgba(245,197,24,.08) 0%,transparent 70%)", pointerEvents: "none" }} />
            <div className="support-inner">
              <div className="support-icon">
                <Headphones style={{ width: 42, height: 42, color: G }} />
                <div style={{ position: "absolute", bottom: -4, right: -4, background: GD, color: "#000", fontWeight: 900, fontSize: 9, padding: "3px 9px", borderRadius: 999 }}>24/7</div>
              </div>
              <div className="support-text">
                <h3>طاقم ماكس جاهز<br /><span style={{ color: G }}>على مدار الساعة</span></h3>
                <p>تحت أي سماء وفوق أي أرض، طاقم ماكس حاضر لخدمتك في أي وقت كان.</p>
                <div className="support-btns">
                  <button className="btn-gold" style={{ background: GD, color: "#000", fontWeight: 900, fontSize: 13, padding: "10px 22px", borderRadius: 11, border: "none", boxShadow: "0 5px 18px rgba(245,197,24,.35)" }}>💬 تواصل الآن</button>
                  {["واتساب", "تيليجرام"].map((l, i) => (
                    <button key={i} style={{ background: "rgba(255,255,255,.04)", color: "#888", fontWeight: 700, fontSize: 12, padding: "10px 16px", borderRadius: 11, border: "1px solid rgba(255,255,255,.08)", cursor: "pointer" }}>{l}</button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ══ WHY US ══ */}
          <section style={{ marginBottom: 16 }}>
            <div style={{ marginBottom: 22 }}>
              <h3 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(18px,4vw,26px)" }}>ماذا يميّزنا؟</h3>
              <p style={{ color: "#444", fontSize: 12, marginTop: 4 }}>نقدم لك أفضل تجربة تسوق رقمي</p>
              <div style={{ marginTop: 8, height: 2, width: 48, borderRadius: 2, background: GD2 }} />
            </div>
            <div className="features-grid">
              {[
                { icon: <Award style={{ width: 24, height: 24, color: G }} />, title: "ضمان ماكس الذهبي", text: "تعويض فوري وكامل طوال فترة الاشتراك." },
                { icon: <Headphones style={{ width: 24, height: 24, color: G }} />, title: "دعم لا يتوقف", text: "فريق دعم متواجد 24 ساعة، 7 أيام." },
                { icon: <Globe style={{ width: 24, height: 24, color: G }} />, title: "جميع طرق الدفع", text: "Apple Pay, Visa, Mada, STC Pay والمزيد." },
                { icon: <ShieldCheck style={{ width: 24, height: 24, color: G }} />, title: "أمان وخصوصية", text: "تشفير عالي المستوى في كل معاملة." },
              ].map((f, i) => (
                <div key={i} className="feat-card fc">
                  <div style={{ position: "absolute", top: 0, right: 0, width: 70, height: 70, background: "radial-gradient(circle at top right,rgba(245,197,24,.07) 0%,transparent 70%)", pointerEvents: "none" }} />
                  <div className="feat-icon">{f.icon}</div>
                  <div className="feat-title">{f.title}</div>
                  <div className="feat-text">{f.text}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ══ NEWSLETTER ══ */}
          <section className="newsletter">
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 420, height: 180, background: "radial-gradient(ellipse,rgba(245,197,24,.06) 0%,transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 36, marginBottom: 10 }}>🔔</div>
              <h3>كن أول من يعرف!</h3>
              <p>اشترك بنشرتنا وكن أول من يحصل على أفضل العروض الحصرية.</p>
              <div className="nl-form">
                <input className="nl-input" type="email" placeholder="أدخل بريدك الإلكتروني..." />
                <button className="btn-gold nl-btn" style={{ background: GD, color: "#000" }}>اشترك</button>
              </div>
            </div>
          </section>

        </div>

        {/* ══ FOOTER ══ */}
        <footer className="footer">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="footer-grid">
              {/* Brand */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 9, background: GD, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Crown style={{ width: 18, height: 18, color: "#000" }} />
                  </div>
                  <div>
                    <div style={{ color: "#fff", fontWeight: 900, fontSize: 15 }}>ماكس ستور</div>
                    <div style={{ color: G, fontSize: 8, fontWeight: 700, letterSpacing: 2 }}>MAX STORE</div>
                  </div>
                </div>
                <p style={{ color: "#3a3a3a", fontSize: 12, lineHeight: 1.85 }}>متجرك الأول للاشتراكات الرقمية بأسعار مغرية وضمان ذهبي.</p>
                <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
                  {[Instagram, MessageSquare, MessageCircle].map((Icon, i) => (
                    <a key={i} href="#" style={{ width: 34, height: 34, borderRadius: 8, background: "#111", border: "1px solid rgba(255,255,255,.07)", display: "flex", alignItems: "center", justifyContent: "center", color: "#444", textDecoration: "none", transition: "all .2s" }}
                      onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,.3)"; e.currentTarget.style.color = G; }}
                      onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,.07)"; e.currentTarget.style.color = "#444"; }}>
                      <Icon style={{ width: 15, height: 15 }} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div>
                <h4 style={{ color: G, fontWeight: 800, fontSize: 13, marginBottom: 16 }}>روابط مهمة</h4>
                {["الرئيسية", "شاهد VIP", "نتفليكس", "ديزني+", "جميع المنتجات"].map((l, i) => (
                  <div key={i} style={{ marginBottom: 10 }}>
                    <a href="#" style={{ color: "#3a3a3a", fontSize: 12.5, textDecoration: "none", fontWeight: 600, transition: "color .2s" }}
                      onMouseOver={e => (e.currentTarget.style.color = "#ccc")}
                      onMouseOut={e => (e.currentTarget.style.color = "#3a3a3a")}>{l}</a>
                  </div>
                ))}
              </div>

              {/* Support links */}
              <div>
                <h4 style={{ color: G, fontWeight: 800, fontSize: 13, marginBottom: 16 }}>الدعم والمساعدة</h4>
                {["الشروط والأحكام", "سياسة الاسترجاع", "الأسئلة الشائعة", "اتصل بنا"].map((l, i) => (
                  <div key={i} style={{ marginBottom: 10 }}>
                    <a href="#" style={{ color: "#3a3a3a", fontSize: 12.5, textDecoration: "none", fontWeight: 600, transition: "color .2s" }}
                      onMouseOver={e => (e.currentTarget.style.color = "#ccc")}
                      onMouseOut={e => (e.currentTarget.style.color = "#3a3a3a")}>{l}</a>
                  </div>
                ))}
              </div>

              {/* Customer service */}
              <div>
                <h4 style={{ color: G, fontWeight: 800, fontSize: 13, marginBottom: 16 }}>خدمة العملاء</h4>
                <div style={{ background: "#111", border: "1px solid rgba(255,255,255,.07)", borderRadius: 12, padding: 16, marginBottom: 10 }}>
                  <div style={{ fontSize: 22, marginBottom: 5 }}>⏰</div>
                  <div style={{ color: "#fff", fontWeight: 800, fontSize: 14 }}>24/7</div>
                  <div style={{ color: "#444", fontSize: 11, marginTop: 2 }}>متاح دائماً لخدمتك</div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  {["واتساب", "تيليجرام"].map((l, i) => (
                    <a key={i} href="#" style={{ flex: 1, background: "#111", border: "1px solid rgba(255,255,255,.07)", borderRadius: 9, padding: "9px", textAlign: "center", textDecoration: "none", color: "#444", fontSize: 11, fontWeight: 700, transition: "all .2s" }}
                      onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,.3)"; e.currentTarget.style.color = G; }}
                      onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,.07)"; e.currentTarget.style.color = "#444"; }}>{l}</a>
                  ))}
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p style={{ color: "#2a2a2a", fontSize: 11 }}>© 2025 ماكس ستور — وثيقة العمل الحر FL-XXXXXX</p>
              <div style={{ display: "flex", gap: 12 }}>
                {["Apple Pay", "Visa", "Mastercard", "Mada"].map((m, i) => (
                  <span key={i} style={{ color: "#2a2a2a", fontSize: 10, fontWeight: 700 }}>{m}</span>
                ))}
              </div>
              <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ background: "none", border: "none", cursor: "pointer", color: "#333", fontSize: 11, fontWeight: 700, transition: "color .2s" }}
                onMouseOver={e => (e.currentTarget.style.color = G)}
                onMouseOut={e => (e.currentTarget.style.color = "#333")}>
                ↑ للأعلى
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function ProductSection({ title, desc, icon, products, renderCard }: any) {
  return (
    <section style={{ marginBottom: 36 }}>
      <div className="sec-hd">
        <div className="sec-title-wrap">
          <h3 style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span>{icon}</span>{title}
          </h3>
          <p>{desc}</p>
          <div className="sec-line" style={{ background: GD2 }} />
        </div>
        <a href="#" className="sec-all">
          <ArrowLeft style={{ width: 12, height: 12 }} />عرض الكل
        </a>
      </div>
      <div className="prod-row">
        {products.map((p: any, i: number) => renderCard(p, i))}
      </div>
    </section>
  );
}

function ShahidCard({ product }: { product: any }) {
  const sport = product.badge === "رياضة";
  return (
    <div className="card pc">
      <div className="card-img" style={{ background: sport ? "linear-gradient(160deg,#0c0800,#1e1400,#2a1e00)" : "linear-gradient(160deg,#0a0800,#1a1100,#251900)" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 80%,rgba(245,197,24,.22) 0%,transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, opacity: .04, backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "10px 10px", pointerEvents: "none" }} />

        <div className="badge-gld" style={{ background: GD }}>ضمان ذهبي</div>
        {product.hot
          ? <div className="badge-hot"><Flame style={{ width: 9, height: 9 }} />الأكثر مبيعاً</div>
          : <div className="badge-disc">VIP</div>
        }

        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 7, zIndex: 10 }}>
          <div style={{ display: "flex", gap: 4, alignItems: "flex-end" }}>
            {[16, 25, 16].map((h, i) => <div key={i} style={{ width: 7, height: h, borderRadius: 3, background: GD }} />)}
          </div>
          <span style={{ color: "#fff", fontWeight: 900, fontSize: 13, letterSpacing: 4 }}>SHAHID</span>
          <span style={{ background: "rgba(245,197,24,.18)", color: G, fontWeight: 800, fontSize: 8, padding: "2px 8px", borderRadius: 999, border: "1px solid rgba(245,197,24,.3)" }}>
            {sport ? "SPORTS" : "VIP"}
          </span>
        </div>

        <div className="chips">
          <span className="chip-gold"><Zap style={{ width: 8, height: 8, fill: G }} />4K</span>
          <span className="chip-gray">{product.sub}</span>
        </div>
      </div>

      <div className="card-info">
        <div className="card-name">{product.name}</div>
        <div className="card-row">
          <div>
            <div className="card-old">{product.old} ر.س</div>
            <div className="card-price">{product.price} <span>ر.س</span></div>
          </div>
          <button style={{ background: "none", border: "none", cursor: "pointer", color: "#2a2a2a", transition: "color .2s" }}
            onMouseOver={e => (e.currentTarget.style.color = "#ef4444")}
            onMouseOut={e => (e.currentTarget.style.color = "#2a2a2a")}>
            <Heart style={{ width: 15, height: 15 }} />
          </button>
        </div>
        <button className="card-btn btn-gold" style={{ background: GD, color: "#000" }}>🛒 أضف للسلة</button>
      </div>
    </div>
  );
}

function NetflixCard({ product }: { product: any }) {
  return (
    <div className="card pc">
      <div className="card-img" style={{ background: "linear-gradient(160deg,#0d0000,#1e0000,#560000)" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 65%,rgba(220,38,38,.32) 0%,transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, opacity: .04, backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "12px 12px", pointerEvents: "none" }} />

        <div className="badge-gld" style={{ background: GD }}>ضمان ذهبي</div>
        {product.hot && <div className="badge-hot"><Flame style={{ width: 9, height: 9 }} />الأكثر مبيعاً</div>}

        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
          <span style={{ color: "#fff", fontWeight: 900, fontSize: 78, fontStyle: "italic", letterSpacing: -5, lineHeight: 1, textShadow: "0 0 50px rgba(220,38,38,1),0 0 90px rgba(220,38,38,.4)" }}>N</span>
          <span style={{ color: "#fca5a5", fontSize: 8, letterSpacing: 4, fontWeight: 900, marginTop: -13 }}>NETFLIX</span>
        </div>

        <div className="chips">
          <span className="chip-gold"><Zap style={{ width: 8, height: 8, fill: G }} />4K</span>
          <span className="chip-gray">{product.sub}</span>
        </div>
      </div>

      <div className="card-info">
        <div className="card-name">{product.name}</div>
        <div className="card-row">
          <div>
            <div className="card-old">{product.old} ر.س</div>
            <div className="card-price">{product.price} <span>ر.س</span></div>
          </div>
          <button style={{ background: "none", border: "none", cursor: "pointer", color: "#2a2a2a", transition: "color .2s" }}
            onMouseOver={e => (e.currentTarget.style.color = "#ef4444")}
            onMouseOut={e => (e.currentTarget.style.color = "#2a2a2a")}>
            <Heart style={{ width: 15, height: 15 }} />
          </button>
        </div>
        <button className="card-btn btn-gold" style={{ background: GD, color: "#000" }}>🛒 أضف للسلة</button>
      </div>
    </div>
  );
}
