import React, { useState, useEffect, useRef } from "react";
import {
  ShoppingBag, Search, User, Zap, Heart, Headphones,
  Award, Globe, ShieldCheck, Instagram, MessageCircle,
  MessageSquare, ArrowLeft, Star, Menu, X, Flame,
} from "lucide-react";

const G = "#f5c518";
const GD = "linear-gradient(135deg,#b8860b 0%,#f5c518 45%,#ffd700 70%,#c9a000 100%)";
const GD2 = "linear-gradient(135deg,#c9a227 0%,#f5c518 100%)";

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{font-family:'Cairo',sans-serif;box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:smooth;}
  body{background:#080808;color:#fff;-webkit-font-smoothing:antialiased;overflow-x:hidden;}
  ::-webkit-scrollbar{width:4px;}
  ::-webkit-scrollbar-track{background:#0d0d0d;}
  ::-webkit-scrollbar-thumb{background:#2a2a2a;border-radius:4px;}
  ::-webkit-scrollbar-thumb:hover{background:#f5c518;}

  /* ══ KEYFRAMES ══ */
  @keyframes mq{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}
  @keyframes fadeUp{from{opacity:0;transform:translateY(28px);}to{opacity:1;transform:translateY(0);}}
  @keyframes float{0%,100%{transform:translateY(0) rotate(0deg);}33%{transform:translateY(-10px) rotate(1deg);}66%{transform:translateY(-5px) rotate(-1deg);}}
  @keyframes pulse-ring{0%{transform:scale(1);opacity:.6;}70%{transform:scale(1.5);opacity:0;}100%{opacity:0;}}
  @keyframes shimmer-line{0%{transform:translateX(-100%);}100%{transform:translateX(200%)}}
  @keyframes gold-glow{0%,100%{text-shadow:0 0 20px rgba(245,197,24,.6),0 0 40px rgba(245,197,24,.3);}50%{text-shadow:0 0 35px rgba(245,197,24,1),0 0 70px rgba(245,197,24,.5),0 0 100px rgba(245,197,24,.2);}}
  @keyframes border-glow{0%,100%{box-shadow:0 0 12px rgba(245,197,24,.2),inset 0 0 12px rgba(245,197,24,.03);}50%{box-shadow:0 0 28px rgba(245,197,24,.4),inset 0 0 20px rgba(245,197,24,.06);}}
  @keyframes card-float-a{0%,100%{transform:rotate(15deg) translateY(0);}50%{transform:rotate(15deg) translateY(-8px);}}
  @keyframes card-float-b{0%,100%{transform:rotate(-7deg) translateY(0);}50%{transform:rotate(-7deg) translateY(-6px);}}
  @keyframes card-float-c{0%,100%{transform:rotate(5deg) translateY(0);}50%{transform:rotate(5deg) translateY(-10px);}}
  @keyframes spark{0%{opacity:0;transform:scale(0) translateY(0);}20%{opacity:1;}100%{opacity:0;transform:scale(1.2) translateY(-30px);}}
  @keyframes spin-slow{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
  @keyframes gradient-shift{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%};} 
  @keyframes counter{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}

  .fade-up{animation:fadeUp .6s cubic-bezier(.22,1,.36,1) forwards;}
  .mq-inner{display:inline-flex;animation:mq 28s linear infinite;}
  .mq-inner:hover{animation-play-state:paused;}

  /* ══ SHIMMER BUTTON ══ */
  .btn-gold{position:relative;overflow:hidden;cursor:pointer;transition:transform .15s,box-shadow .15s;}
  .btn-gold::after{content:'';position:absolute;top:0;left:-100%;width:50%;height:100%;
    background:linear-gradient(120deg,transparent,rgba(255,255,255,.35),transparent);
    animation:shimmer-line 2.5s ease-in-out infinite;}
  .btn-gold:hover{transform:scale(1.04);}

  /* ══ GLOW TEXT ══ */
  .glow{animation:gold-glow 3s ease-in-out infinite;}

  /* ══ RING PULSE ══ */
  .ring{position:relative;}
  .ring::before{content:'';position:absolute;inset:-6px;border-radius:inherit;
    border:2px solid #f5c518;animation:pulse-ring 2.2s ease-out infinite;pointer-events:none;}

  /* ══ CARD HOVER ══ */
  .pc{transition:transform .25s cubic-bezier(.34,1.56,.64,1),box-shadow .25s ease;}
  .pc:hover{transform:translateY(-10px) scale(1.02);box-shadow:0 28px 60px rgba(245,197,24,.24)!important;}
  .pc:hover .card-img-overlay{opacity:1;}
  .card-img-overlay{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(245,197,24,.05),transparent 40%);
    opacity:0;transition:opacity .3s;pointer-events:none;z-index:15;}

  @keyframes img-shimmer{0%{transform:translateX(-120%);}100%{transform:translateX(120%)}}
  .card-img::after{content:'';position:absolute;top:0;left:0;width:40%;height:100%;
    background:linear-gradient(90deg,transparent,rgba(245,197,24,.06),transparent);
    animation:img-shimmer 4s ease-in-out infinite;pointer-events:none;z-index:5;}

  .fc{transition:transform .2s,border-color .2s,box-shadow .2s;}
  .fc:hover{transform:translateY(-5px);border-color:rgba(245,197,24,.4)!important;
    box-shadow:0 16px 50px rgba(245,197,24,.12)!important;}

  /* ══ LAYOUT ══ */
  .main-pad{padding:20px 18px 80px;}
  .hero{position:relative;overflow:hidden;border-radius:24px;
    background:linear-gradient(145deg,#0c0c0c 0%,#111 40%,#090909 100%);
    border:1px solid rgba(245,197,24,.14);margin-bottom:14px;
    animation:border-glow 4s ease-in-out infinite;}
  .hero-inner{display:flex;align-items:center;justify-content:space-between;
    padding:30px 22px 0;gap:24px;flex-direction:column-reverse;}
  .hero-text{flex:1;width:100%;text-align:center;}
  .hero-title{font-size:clamp(30px,9vw,60px);font-weight:900;line-height:1.12;margin-bottom:18px;}
  .hero-sub{color:#666;font-size:13.5px;line-height:2;margin-bottom:24px;}
  .hero-btns{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;}
  .hero-trust{display:flex;gap:18px;justify-content:center;flex-wrap:wrap;margin-top:18px;}
  .hero-cards{flex-shrink:0;position:relative;width:210px;height:240px;margin:0 auto;}

  /* Stats */
  .hero-stats{border-top:1px solid rgba(245,197,24,.08);
    display:grid;grid-template-columns:repeat(2,1fr);gap:0;position:relative;}
  .hero-stats::before{content:'';position:absolute;top:0;left:25%;right:25%;height:1px;
    background:linear-gradient(to right,transparent,rgba(245,197,24,.5),transparent);}
  .stat-item{text-align:center;padding:18px 8px;}
  .stat-item:nth-child(odd){border-left:none;border-right:1px solid rgba(245,197,24,.08);}
  .stat-item:nth-child(1),.stat-item:nth-child(2){border-bottom:1px solid rgba(245,197,24,.08);}
  .stat-n{font-weight:900;font-size:24px;line-height:1;background:${GD};-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
  .stat-l{color:#444;font-size:11px;font-weight:700;margin-top:5px;letter-spacing:.5px;}

  /* Payment */
  .pay-strip{background:linear-gradient(135deg,#0d0d0d,#111);border:1px solid rgba(255,255,255,.06);
    border-radius:16px;padding:14px 16px;margin-bottom:14px;}
  .pay-inner{display:flex;align-items:center;gap:10px;flex-wrap:wrap;}
  .pay-label{color:#444;font-size:11px;font-weight:800;white-space:nowrap;}
  .pay-badges{display:flex;flex-wrap:wrap;gap:6px;flex:1;}
  .pay-badge{padding:5px 11px;border-radius:8px;background:#080808;
    border:1px solid rgba(255,255,255,.05);font-size:10.5px;font-weight:900;transition:all .2s;}
  .pay-badge:hover{border-color:rgba(245,197,24,.3);transform:translateY(-1px);}
  .secure{display:flex;align-items:center;gap:5px;background:rgba(74,222,128,.06);
    border:1px solid rgba(74,222,128,.18);border-radius:8px;padding:5px 10px;white-space:nowrap;}

  /* Marquee */
  .mq-wrap{overflow:hidden;background:#060606;
    border-top:1px solid rgba(245,197,24,.15);border-bottom:1px solid rgba(245,197,24,.15);
    padding:12px 0;margin:0 -18px 28px;position:relative;}
  .mq-fade{position:absolute;inset:0;z-index:1;pointer-events:none;
    background:linear-gradient(to right,#060606 0%,transparent 10%,transparent 90%,#060606 100%);}

  /* Section */
  .sec-hd{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;}
  .sec-title{font-size:clamp(17px,4.5vw,24px);font-weight:900;display:flex;align-items:center;gap:8px;}
  .sec-desc{color:#3a3a3a;font-size:11.5px;margin-top:4px;}
  .sec-accent{height:2px;width:52px;border-radius:2px;margin-top:8px;background:${GD2};}
  .sec-all{display:flex;align-items:center;gap:5px;color:#f5c518;font-size:12px;font-weight:700;
    text-decoration:none;padding:7px 14px;border-radius:9px;
    border:1px solid rgba(245,197,24,.22);background:rgba(245,197,24,.04);
    transition:all .2s;white-space:nowrap;}
  .sec-all:hover{background:rgba(245,197,24,.12);border-color:rgba(245,197,24,.4);
    box-shadow:0 4px 18px rgba(245,197,24,.15);}

  /* Product row */
  .prod-row{display:flex;gap:14px;overflow-x:auto;padding-bottom:4px;-ms-overflow-style:none;scrollbar-width:none;}
  .prod-row::-webkit-scrollbar{display:none;}

  /* Card */
  .card{min-width:162px;flex:0 0 162px;border-radius:18px;overflow:hidden;
    background:#0f0f0f;border:1px solid rgba(255,255,255,.06);
    box-shadow:0 6px 28px rgba(0,0,0,.7);display:flex;flex-direction:column;
    transition:border-color .25s;}
  .card:hover{border-color:rgba(245,197,24,.22);}
  .card-img{position:relative;height:168px;overflow:hidden;}
  .card-info{padding:12px 12px 14px;display:flex;flex-direction:column;gap:8px;flex:1;
    border-top:1px solid rgba(255,255,255,.06);}
  .card-name{color:#ccc;font-weight:800;font-size:11.5px;line-height:1.5;}
  .card-old{color:#2e2e2e;font-size:9px;text-decoration:line-through;margin-bottom:1px;}
  .card-price{color:#f5c518;font-weight:900;font-size:20px;line-height:1;}
  .card-price span{font-size:10px;font-weight:700;}
  .card-row{display:flex;align-items:flex-end;justify-content:space-between;}
  .card-btn{width:100%;font-weight:900;font-size:11.5px;padding:9px;border-radius:10px;
    border:none;cursor:pointer;transition:transform .12s,box-shadow .12s;}
  .card-btn:hover{transform:scale(1.03);}
  .badge-gld{position:absolute;top:0;right:0;font-weight:900;font-size:8.5px;
    padding:4px 9px;border-radius:0 0 0 9px;color:#000;z-index:20;}
  .badge-hot{position:absolute;top:7px;left:7px;display:flex;align-items:center;gap:3px;
    background:rgba(239,68,68,.14);border:1px solid rgba(239,68,68,.28);
    color:#ef4444;font-weight:900;font-size:7.5px;padding:3px 7px;border-radius:6px;z-index:20;}
  .badge-disc{position:absolute;top:7px;left:7px;background:#ef4444;
    color:#fff;font-weight:900;font-size:7.5px;padding:3px 7px;border-radius:6px;z-index:20;}
  .chips{position:absolute;bottom:0;left:0;right:0;
    background:linear-gradient(to top,rgba(0,0,0,.94),transparent);
    padding:10px 8px 7px;display:flex;gap:4px;justify-content:center;z-index:20;}
  .chip-g{display:flex;align-items:center;gap:3px;background:rgba(245,197,24,.14);
    color:#f5c518;font-weight:800;font-size:7.5px;padding:3px 7px;border-radius:5px;
    border:1px solid rgba(245,197,24,.2);}
  .chip-d{background:rgba(255,255,255,.05);color:#666;font-weight:700;
    font-size:7.5px;padding:3px 7px;border-radius:5px;}

  /* Support */
  .support{position:relative;overflow:hidden;border-radius:22px;margin-bottom:14px;
    border:1px solid rgba(245,197,24,.12);
    background:linear-gradient(145deg,#0f0f0f 0%,#141414 50%,#0a0a0a 100%);}
  .support-inner{display:flex;align-items:center;gap:28px;flex-wrap:wrap;
    padding:30px 22px;position:relative;z-index:1;}
  .support-icon-wrap{flex-shrink:0;position:relative;width:80px;height:80px;}
  .support-ring{position:absolute;inset:0;border-radius:50%;border:1px solid rgba(245,197,24,.3);
    animation:spin-slow 8s linear infinite;}
  .support-ring2{position:absolute;inset:-8px;border-radius:50%;border:1px dashed rgba(245,197,24,.12);
    animation:spin-slow 14s linear infinite reverse;}
  .support-core{width:100%;height:100%;border-radius:50%;background:#0c0c0c;
    border:1px solid rgba(245,197,24,.2);display:flex;align-items:center;justify-content:center;
    box-shadow:0 0 30px rgba(245,197,24,.1);}
  .support-text{flex:1 1 200px;}
  .support-text h3{font-weight:900;font-size:clamp(15px,3.5vw,24px);line-height:1.5;margin-bottom:10px;}
  .support-text p{color:#4a4a4a;font-size:12.5px;line-height:2;margin-bottom:18px;}
  .support-btns{display:flex;gap:9px;flex-wrap:wrap;}

  /* Features */
  .feats{display:grid;grid-template-columns:repeat(2,1fr);gap:11px;}
  .feat{background:#0f0f0f;border:1px solid rgba(255,255,255,.06);border-radius:18px;
    padding:22px 16px;position:relative;overflow:hidden;transition:all .22s;}
  .feat::before{content:'';position:absolute;top:-40px;right:-40px;width:120px;height:120px;
    background:radial-gradient(circle,rgba(245,197,24,.07) 0%,transparent 70%);
    pointer-events:none;transition:opacity .3s;}
  .feat:hover{border-color:rgba(245,197,24,.35);transform:translateY(-4px);
    box-shadow:0 18px 50px rgba(0,0,0,.6);}
  .feat:hover::before{opacity:2;}
  .feat-icon{width:44px;height:44px;border-radius:12px;
    background:linear-gradient(135deg,rgba(245,197,24,.1),rgba(245,197,24,.04));
    border:1px solid rgba(245,197,24,.22);
    display:flex;align-items:center;justify-content:center;margin-bottom:14px;}
  .feat-title{color:#ddd;font-weight:800;font-size:12.5px;margin-bottom:6px;}
  .feat-body{color:#3d3d3d;font-size:11px;line-height:1.75;}

  /* Newsletter */
  .nl{position:relative;overflow:hidden;border-radius:22px;
    background:linear-gradient(145deg,#0f0f0f,#141414);
    border:1px solid rgba(245,197,24,.12);padding:38px 22px;text-align:center;margin-bottom:14px;}
  .nl h3{font-weight:900;font-size:clamp(17px,5vw,26px);margin-bottom:8px;}
  .nl p{color:#4a4a4a;font-size:12.5px;margin-bottom:22px;max-width:400px;margin-inline:auto;}
  .nl-form{display:flex;gap:8px;max-width:460px;margin:0 auto;}
  .nl-input{flex:1;min-width:0;background:#080808;border:1px solid rgba(255,255,255,.07);
    border-radius:10px;padding:12px 15px;color:#fff;font-size:12.5px;text-align:right;
    outline:none;transition:border-color .2s,box-shadow .2s;}
  .nl-input:focus{border-color:#f5c518;box-shadow:0 0 0 3px rgba(245,197,24,.08);}
  .nl-btn{flex-shrink:0;font-weight:900;font-size:12.5px;padding:12px 20px;
    border-radius:10px;border:none;cursor:pointer;}

  /* Footer */
  .footer{background:#050505;border-top:1px solid rgba(255,255,255,.05);padding:42px 18px 26px;}
  .footer-grid{display:grid;grid-template-columns:1fr;gap:30px;margin-bottom:30px;}
  .footer-bottom{border-top:1px solid rgba(255,255,255,.05);padding-top:18px;
    display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;}

  /* Navbar */
  .navbar{position:sticky;top:0;z-index:200;backdrop-filter:blur(24px);
    border-bottom:1px solid rgba(255,255,255,.06);transition:all .3s;}
  .navbar.scrolled{border-bottom-color:rgba(245,197,24,.2);
    box-shadow:0 4px 30px rgba(0,0,0,.5);}
  .nav-inner{max-width:1280px;margin:0 auto;padding:0 18px;height:58px;
    display:flex;align-items:center;justify-content:space-between;}
  .nav-links{display:none;}
  .nav-btn{width:34px;height:34px;border-radius:8px;border:1px solid rgba(255,255,255,.06);
    background:rgba(255,255,255,.02);color:#666;cursor:pointer;
    display:flex;align-items:center;justify-content:center;transition:all .2s;}
  .nav-btn:hover{border-color:rgba(245,197,24,.35);color:#f5c518;background:rgba(245,197,24,.06);}
  .mob-menu{background:#0c0c0c;border-top:1px solid rgba(245,197,24,.1);}
  .mob-menu a{display:block;padding:12px 18px;color:#888;font-weight:700;font-size:13px;
    text-decoration:none;border-bottom:1px solid rgba(255,255,255,.04);transition:color .2s;}
  .mob-menu a:hover,.mob-menu a.active{color:#f5c518;}

  /* ══ DESKTOP 768px+ ══ */
  @media(min-width:768px){
    .main-pad{padding:26px 24px 80px;}
    .nav-links{display:flex;gap:4px;}
    .mob-btn{display:none!important;}

    .hero-inner{flex-direction:row;padding:56px 56px 0;gap:44px;}
    .hero-text{text-align:right;width:auto;}
    .hero-btns{justify-content:flex-start;}
    .hero-trust{justify-content:flex-start;}
    .hero-cards{width:256px;height:280px;margin:0;}

    .hero-stats{grid-template-columns:repeat(4,1fr);}
    .stat-item{border-bottom:none!important;}
    .stat-item:nth-child(odd){border-right:none;border-left:1px solid rgba(245,197,24,.08);}
    .stat-item:first-child{border-left:none;}
    .stat-n{font-size:28px;}

    .pay-inner{flex-wrap:nowrap;}
    .mq-wrap{margin:0 -24px 30px;}

    .support-inner{padding:48px 56px;gap:48px;}
    .support-icon-wrap{width:96px;height:96px;}

    .feats{grid-template-columns:repeat(4,1fr);}
    .nl{padding:56px 48px;}
    .footer-grid{grid-template-columns:repeat(4,1fr);}

    .prod-row{display:grid;grid-template-columns:repeat(4,1fr);overflow:visible;}
    .card{min-width:unset;flex:unset;}
  }
`;

/* ── Sparkle dots for hero ── */
const SPARKS = [
  { x: "12%", y: "18%", d: "0s", s: 10 },
  { x: "80%", y: "12%", d: ".4s", s: 8 },
  { x: "25%", y: "70%", d: ".8s", s: 6 },
  { x: "65%", y: "60%", d: ".2s", s: 9 },
  { x: "45%", y: "25%", d: "1s", s: 7 },
  { x: "90%", y: "75%", d: ".6s", s: 5 },
  { x: "5%",  y: "50%", d: "1.2s", s: 8 },
];

export default function HomePage() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);
  const [statVisible, setStatVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!statRef.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatVisible(true); }, { threshold: 0.4 });
    obs.observe(statRef.current);
    return () => obs.disconnect();
  }, []);

  const shahidProducts = [
    { name: "شاهد VIP شهر", sub: "ملف خاص", old: "٣٣", price: "١٣", hot: true },
    { name: "شاهد رياضة شهر", sub: "مشترك", old: "٣٣", price: "١٥.٩٩", hot: false },
    { name: "شاهد VIP 3 أشهر", sub: "ملف خاص", old: "٨٠", price: "٣٥", hot: false },
    { name: "شاهد VIP 6 أشهر", sub: "ملف خاص", old: "١٥٠", price: "٦٥", hot: false },
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
          style={{ background: scrolled ? "rgba(6,6,6,.98)" : "rgba(8,8,8,.82)" }}>
          <div className="nav-inner">
            <a href="#" style={{ textDecoration: "none" }}>
              <img src="/logo.png" alt="ماكس ستور"
                style={{ height: 42, width: "auto", objectFit: "contain", filter: "drop-shadow(0 0 10px rgba(245,197,24,.55))", display: "block" }} />
            </a>
            <nav className="nav-links">
              {[["الرئيسية", true], ["شاهد VIP", false], ["نتفليكس", false], ["ديزني+", false], ["عروض 🔥", false]].map(([l, a], i) => (
                <a key={i} href="#" style={{
                  color: a ? G : "#666", fontWeight: 700, fontSize: 12.5, textDecoration: "none",
                  padding: "5px 14px", borderRadius: 9, transition: "all .2s",
                  background: a ? "rgba(245,197,24,.08)" : "transparent",
                  border: `1px solid ${a ? "rgba(245,197,24,.22)" : "transparent"}`,
                }}>{l as string}</a>
              ))}
            </nav>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              {[Search, User, ShoppingBag].map((Icon, i) => (
                <button key={i} className="nav-btn"><Icon style={{ width: 15, height: 15 }} /></button>
              ))}
              <button className="nav-btn mob-btn" onClick={() => setMenu(!menu)}>
                {menu ? <X style={{ width: 15, height: 15 }} /> : <Menu style={{ width: 15, height: 15 }} />}
              </button>
            </div>
          </div>
          {menu && (
            <div className="mob-menu">
              {["الرئيسية", "شاهد VIP", "نتفليكس", "ديزني+", "عروض 🔥"].map((l, i) => (
                <a key={i} href="#" className={i === 0 ? "active" : ""}>{l}</a>
              ))}
            </div>
          )}
        </header>

        <div className="main-pad" style={{ maxWidth: 1280, margin: "0 auto" }}>

          {/* ══ HERO ══ */}
          <section className="hero fade-up">
            {/* BG grid */}
            <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(245,197,24,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(245,197,24,.022) 1px,transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
            {/* Gold rays */}
            <div style={{ position: "absolute", top: -120, right: -60, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle,rgba(245,197,24,.13) 0%,transparent 62%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: -80, left: -40, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle,rgba(245,197,24,.06) 0%,transparent 70%)", pointerEvents: "none" }} />
            {/* Top gold line */}
            <div style={{ position: "absolute", top: 0, right: 0, width: "55%", height: 2, background: "linear-gradient(to left,#f5c518,rgba(245,197,24,.3),transparent)" }} />
            {/* Sparks */}
            {SPARKS.map((s, i) => (
              <div key={i} style={{ position: "absolute", left: s.x, top: s.y, width: s.s, height: s.s, borderRadius: "50%", background: G, boxShadow: `0 0 ${s.s * 2}px ${G}`, animation: `spark 3s ${s.d} ease-out infinite`, pointerEvents: "none", zIndex: 0 }} />
            ))}

            <div className="hero-inner">
              {/* ── CARDS ── */}
              <div className="hero-cards">
                {/* Disney+ */}
                <div style={{
                  position: "absolute", width: 120, height: 156, top: 6, right: 0,
                  background: "linear-gradient(160deg,#0d0c00,#1a1800,#0c0b00)",
                  animation: "card-float-a 5s ease-in-out infinite",
                  zIndex: 1, borderRadius: 18, overflow: "hidden",
                  border: "1px solid rgba(245,197,24,.25)",
                  boxShadow: "0 12px 40px rgba(0,0,0,.9),0 0 20px rgba(245,197,24,.1)",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 7,
                }}>
                  <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 20%,rgba(245,197,24,.14) 0%,transparent 60%)" }} />
                  <span style={{ color: G, fontWeight: 900, fontSize: 28, fontStyle: "italic", textShadow: "0 0 20px rgba(245,197,24,1),0 0 40px rgba(245,197,24,.5)", position: "relative", zIndex: 1 }}>D+</span>
                  <span style={{ color: "#9a7c00", fontSize: 8, letterSpacing: 3, fontWeight: 800 }}>DISNEY+</span>
                  <div style={{ width: 36, height: 1, background: "linear-gradient(to right,transparent,#f5c518,transparent)" }} />
                </div>

                {/* Shahid */}
                <div style={{
                  position: "absolute", width: 126, height: 162, top: 28, right: 32,
                  background: "linear-gradient(160deg,#0e0d00,#1c1a00,#0d0c00)",
                  animation: "card-float-b 6s ease-in-out infinite",
                  zIndex: 2, borderRadius: 18, overflow: "hidden",
                  border: "1px solid rgba(245,197,24,.3)",
                  boxShadow: "0 14px 44px rgba(0,0,0,.9),0 0 28px rgba(245,197,24,.15)",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 9,
                }}>
                  <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 30%,rgba(245,197,24,.17) 0%,transparent 62%)" }} />
                  <div style={{ display: "flex", gap: 4, alignItems: "flex-end", position: "relative" }}>
                    {[16, 26, 16].map((h, i) => (
                      <div key={i} style={{ width: 7, height: h, borderRadius: 3, background: GD, boxShadow: "0 0 10px rgba(245,197,24,.7)" }} />
                    ))}
                  </div>
                  <span style={{ color: "#fff", fontWeight: 900, fontSize: 11, letterSpacing: 4, textShadow: "0 0 14px rgba(245,197,24,.6)", position: "relative" }}>SHAHID</span>
                  <span style={{ background: "rgba(245,197,24,.14)", color: G, fontWeight: 900, fontSize: 8, padding: "2px 10px", borderRadius: 999, border: "1px solid rgba(245,197,24,.32)", textShadow: "0 0 8px rgba(245,197,24,.7)" }}>VIP</span>
                </div>

                {/* Netflix */}
                <div style={{
                  position: "absolute", width: 136, height: 172, top: 46, right: 58,
                  background: "linear-gradient(165deg,#0c0b00,#1e1c00,#0e0d00)",
                  animation: "card-float-c 7s ease-in-out infinite",
                  zIndex: 3, borderRadius: 18, overflow: "hidden",
                  border: "1px solid rgba(245,197,24,.38)",
                  boxShadow: "0 16px 50px rgba(0,0,0,.95),0 0 45px rgba(245,197,24,.25)",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                }}>
                  <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 40%,rgba(245,197,24,.22) 0%,transparent 58%)" }} />
                  <span style={{ color: G, fontWeight: 900, fontSize: 80, fontStyle: "italic", letterSpacing: -6, lineHeight: 1, position: "relative", zIndex: 1, textShadow: "0 0 30px rgba(245,197,24,1),0 0 60px rgba(245,197,24,.6),0 0 100px rgba(245,197,24,.25)" }}>N</span>
                  <span style={{ color: "#9a7c00", fontSize: 8, letterSpacing: 4, fontWeight: 900, marginTop: -14, position: "relative" }}>NETFLIX</span>
                </div>

                {/* Badge */}
                <div className="ring" style={{ position: "absolute", bottom: 12, right: 6, zIndex: 10, background: GD, color: "#000", fontWeight: 900, fontSize: 9, padding: "4px 12px", borderRadius: 999, boxShadow: "0 4px 16px rgba(245,197,24,.65)", transform: "rotate(-6deg)" }}>✓ ضمان ذهبي</div>
              </div>

              {/* ── TEXT ── */}
              <div className="hero-text">
                <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(245,197,24,.09)", border: "1px solid rgba(245,197,24,.22)", borderRadius: 999, padding: "5px 15px", marginBottom: 20 }}>
                  <Star style={{ width: 12, height: 12, color: G, fill: G }} />
                  <span style={{ color: G, fontSize: 11.5, fontWeight: 800 }}>متجر الاشتراكات الرقمية #1</span>
                </div>
                <h1 className="hero-title">
                  ملاذك للاشتراكات<br />
                  <span className="glow" style={{ color: G }}>الرقمية الأصلية</span>
                </h1>
                <p className="hero-sub">حسابات مضمونة 100%، أسعار لا تُقاوم،<br />دعم على مدار الساعة.</p>
                <div className="hero-btns">
                  <button className="btn-gold" style={{ background: GD, color: "#000", fontWeight: 900, fontSize: 14, padding: "13px 30px", borderRadius: 12, border: "none", boxShadow: "0 8px 28px rgba(245,197,24,.45)" }}>🛒 تسوق الآن</button>
                  <button style={{ background: "rgba(255,255,255,.04)", color: "#999", fontWeight: 700, fontSize: 13, padding: "13px 24px", borderRadius: 12, border: "1px solid rgba(255,255,255,.07)", cursor: "pointer", transition: "all .2s" }}
                    onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,.3)"; e.currentTarget.style.color = G; }}
                    onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,.07)"; e.currentTarget.style.color = "#999"; }}>
                    تواصل معنا
                  </button>
                </div>
                <div className="hero-trust">
                  {[["✅", "ضمان ذهبي"], ["⚡", "تسليم فوري"], ["🔒", "دفع آمن"]].map(([ic, lb], i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <span style={{ fontSize: 14 }}>{ic}</span>
                      <span style={{ color: "#4a4a4a", fontSize: 11.5, fontWeight: 700 }}>{lb}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div ref={statRef} className="hero-stats" style={{ marginTop: 8 }}>
              {[["10,000+", "عميل راضٍ"], ["100%", "ضمان ذهبي"], ["24/7", "دعم فني"], ["+50", "منتج رقمي"]].map(([n, l], i) => (
                <div key={i} className="stat-item" style={{ animation: statVisible ? `counter .5s ${i * .1}s ease forwards` : "none", opacity: statVisible ? 1 : 0 }}>
                  <div className="stat-n">{n}</div>
                  <div className="stat-l">{l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ══ PAYMENT ══ */}
          <div className="pay-strip">
            <div className="pay-inner">
              <span className="pay-label">طرق الدفع:</span>
              <div className="pay-badges">
                {[["Apple Pay","#f5f5f5"], ["Mastercard","#e05c5c"], ["VISA","#60a5fa"], ["mada","#4ade80"], ["STC Pay","#c084fc"], ["PayPal","#93c5fd"], ["Bitcoin","#f97316"]].map(([l, c], i) => (
                  <div key={i} className="pay-badge" style={{ color: c as string, fontStyle: l === "VISA" ? "italic" : "normal" }}>{l}</div>
                ))}
              </div>
              <div className="secure">
                <ShieldCheck style={{ width: 12, height: 12, color: "#4ade80" }} />
                <span style={{ color: "#4ade80", fontSize: 10, fontWeight: 800 }}>دفع مشفّر</span>
              </div>
            </div>
          </div>

          {/* ══ MARQUEE ══ */}
          <div className="mq-wrap">
            <div className="mq-fade" />
            <div className="mq-inner" style={{ gap: 40 }}>
              {Array.from({ length: 20 }, (_, i) => (
                <span key={i} style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
                  <span style={{ color: G, fontSize: 12 }}>♛</span>
                  <span style={{ color: "#ddd", fontWeight: 900, fontSize: 10.5, letterSpacing: 4 }}>MAX STORE</span>
                  <span style={{ color: G, fontSize: 8 }}>✦</span>
                  <span style={{ color: "#333", fontWeight: 700, fontSize: 9.5, letterSpacing: 2 }}>PREMIUM</span>
                  <span style={{ color: G, fontSize: 8 }}>✦</span>
                </span>
              ))}
            </div>
          </div>

          {/* ══ SHAHID ══ */}
          <ProdSection title="اشتراكات شاهد VIP" desc="حسابات شاهد الرسمية بأفضل الأسعار وضمان ذهبي"
            products={shahidProducts}
            render={(p: any, i: number) => <ShahidCard key={i} p={p} />} />

          {/* ══ NETFLIX ══ */}
          <ProdSection title="اشتراكات نتفليكس" desc="احصل على نتفليكس بسعر أقل مع ضمان ماكس"
            products={netflixProducts}
            render={(p: any, i: number) => <NetflixCard key={i} p={p} />} />

          {/* ══ SUPPORT ══ */}
          <section className="support">
            <div style={{ position: "absolute", top: -60, left: -40, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(245,197,24,.07) 0%,transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: 1, background: "linear-gradient(to left,rgba(245,197,24,.4),transparent)" }} />
            <div className="support-inner">
              <div className="support-icon-wrap">
                <div className="support-ring" />
                <div className="support-ring2" />
                <div className="support-core">
                  <Headphones style={{ width: 40, height: 40, color: G }} />
                </div>
                <div style={{ position: "absolute", bottom: -2, right: -2, background: GD, color: "#000", fontWeight: 900, fontSize: 8, padding: "3px 8px", borderRadius: 999, boxShadow: "0 2px 10px rgba(245,197,24,.5)" }}>24/7</div>
              </div>
              <div className="support-text">
                <h3>طاقم ماكس جاهز<br /><span style={{ color: G }}>على مدار الساعة</span></h3>
                <p>تحت أي سماء وفوق أي أرض، طاقم ماكس حاضر لخدمتك في أي وقت كان.</p>
                {/* Support stats row */}
                <div style={{ display: "flex", gap: 10, marginBottom: 18, flexWrap: "wrap" }}>
                  {[["⚡ 3 دقائق", "متوسط وقت الرد"], ["⭐ 4.9 / 5", "تقييم رضا العملاء"], ["✅ 99%", "معدل حل المشاكل"]].map(([val, lbl], i) => (
                    <div key={i} style={{ background: "rgba(245,197,24,.05)", border: "1px solid rgba(245,197,24,.12)", borderRadius: 10, padding: "9px 14px", flex: "1 1 auto" }}>
                      <div style={{ color: G, fontWeight: 900, fontSize: 13 }}>{val}</div>
                      <div style={{ color: "#333", fontSize: 9.5, marginTop: 2 }}>{lbl}</div>
                    </div>
                  ))}
                </div>
                <div className="support-btns">
                  <button className="btn-gold" style={{ background: GD, color: "#000", fontWeight: 900, fontSize: 12.5, padding: "10px 22px", borderRadius: 10, border: "none", boxShadow: "0 6px 20px rgba(245,197,24,.38)" }}>💬 تواصل الآن</button>
                  {["واتساب", "تيليجرام"].map((l, i) => (
                    <button key={i} style={{ background: "rgba(255,255,255,.03)", color: "#777", fontWeight: 700, fontSize: 12, padding: "10px 16px", borderRadius: 10, border: "1px solid rgba(255,255,255,.07)", cursor: "pointer", transition: "all .2s" }}
                      onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,.28)"; e.currentTarget.style.color = G; }}
                      onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,.07)"; e.currentTarget.style.color = "#777"; }}>{l}</button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ══ WHY US ══ */}
          <section style={{ marginBottom: 14 }}>
            <div style={{ marginBottom: 22 }}>
              {/* WHY US header */}
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 22 }}>
                <div style={{ flex: 1, height: 1, background: "linear-gradient(to left,rgba(245,197,24,.25),transparent)" }} />
                <h3 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(16px,4vw,22px)", whiteSpace: "nowrap" }}>
                  <span style={{ color: G }}>✦</span> ماذا يميّزنا؟ <span style={{ color: G }}>✦</span>
                </h3>
                <div style={{ flex: 1, height: 1, background: "linear-gradient(to right,rgba(245,197,24,.25),transparent)" }} />
              </div>
              <p style={{ color: "#333", fontSize: 12, textAlign: "center", marginBottom: 20 }}>نقدم لك أفضل تجربة تسوق رقمي في المملكة</p>
            </div>
            <div className="feats">
              {[
                { num: "01", icon: <Award style={{ width: 24, height: 24, color: G }} />, title: "ضمان ماكس الذهبي", body: "تعويض فوري وكامل طوال فترة الاشتراك بدون أسئلة." },
                { num: "02", icon: <Headphones style={{ width: 24, height: 24, color: G }} />, title: "دعم لا يتوقف", body: "فريق دعم متواجد 24 ساعة، 7 أيام في الأسبوع." },
                { num: "03", icon: <Globe style={{ width: 24, height: 24, color: G }} />, title: "جميع طرق الدفع", body: "Apple Pay, Visa, Mada, STC Pay والمزيد." },
                { num: "04", icon: <ShieldCheck style={{ width: 24, height: 24, color: G }} />, title: "أمان وخصوصية", body: "تشفير عالي المستوى في كل معاملة مالية." },
              ].map((f, i) => (
                <div key={i} className="feat" style={{ cursor: "default" }}>
                  {/* Decorative number */}
                  <div style={{ position: "absolute", top: 12, left: 14, fontWeight: 900, fontSize: 32, color: "rgba(245,197,24,.06)", lineHeight: 1, fontStyle: "italic", userSelect: "none" }}>{f.num}</div>
                  {/* Accent line */}
                  <div style={{ position: "absolute", top: 0, right: 0, left: 0, height: 2, background: `linear-gradient(to left,${GD2},transparent)`, borderRadius: "18px 18px 0 0", opacity: 0.6 }} />
                  <div className="feat-icon">{f.icon}</div>
                  <div className="feat-title">{f.title}</div>
                  <div className="feat-body">{f.body}</div>
                  {/* Bottom gold dot */}
                  <div style={{ position: "absolute", bottom: 14, left: 14, width: 6, height: 6, borderRadius: "50%", background: GD, boxShadow: "0 0 8px rgba(245,197,24,.5)" }} />
                </div>
              ))}
            </div>
          </section>

          {/* ══ NEWSLETTER ══ */}
          <section className="nl" style={{ overflow: "hidden" }}>
            {/* Corner decorations */}
            <div style={{ position: "absolute", top: 0, right: 0, width: 120, height: 120, pointerEvents: "none" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: "100%", height: 2, background: "linear-gradient(to left,rgba(245,197,24,.5),transparent)" }} />
              <div style={{ position: "absolute", top: 0, right: 0, width: 2, height: "100%", background: "linear-gradient(to bottom,rgba(245,197,24,.5),transparent)" }} />
            </div>
            <div style={{ position: "absolute", bottom: 0, left: 0, width: 120, height: 120, pointerEvents: "none" }}>
              <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 2, background: "linear-gradient(to right,rgba(245,197,24,.5),transparent)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, width: 2, height: "100%", background: "linear-gradient(to top,rgba(245,197,24,.5),transparent)" }} />
            </div>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 200, background: "radial-gradient(ellipse,rgba(245,197,24,.08) 0%,transparent 65%)", pointerEvents: "none" }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,197,24,.09)", border: "1px solid rgba(245,197,24,.2)", borderRadius: 999, padding: "5px 14px", marginBottom: 18 }}>
                <Star style={{ width: 11, height: 11, color: G, fill: G }} />
                <span style={{ color: G, fontSize: 11, fontWeight: 800 }}>عروض حصرية للمشتركين</span>
              </div>
              <h3 style={{ marginBottom: 10 }}>كن أول من يعرف!</h3>
              <p>اشترك في نشرتنا البريدية واحصل على كوبون خصم 10% على أول طلب.</p>
              <div className="nl-form">
                <input className="nl-input" type="email" placeholder="أدخل بريدك الإلكتروني..." />
                <button className="btn-gold nl-btn" style={{ background: GD, color: "#000", fontWeight: 900 }}>🎁 اشترك</button>
              </div>
              {/* Trust note */}
              <div style={{ marginTop: 14, display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
                {["🔒 لا بريد مزعج", "📧 إلغاء في أي وقت", "🎁 كوبون فوري"].map((t, i) => (
                  <span key={i} style={{ color: "#333", fontSize: 11, fontWeight: 700 }}>{t}</span>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* ══ TRUSTED BY BAR ══ */}
        <div style={{ background: "#060606", borderTop: "1px solid rgba(245,197,24,.1)", borderBottom: "1px solid rgba(245,197,24,.1)", padding: "18px 24px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
            <span style={{ color: "#2a2a2a", fontSize: 11, fontWeight: 800 }}>موثوق من قِبَل:</span>
            {["+10,000 عميل راضٍ", "★ 4.9 تقييم متوسط", "✓ 100% ضمان مُعتمد", "⚡ تسليم خلال دقائق"].map((t, i) => (
              <React.Fragment key={i}>
                <span style={{ color: "#3a3a3a", fontSize: 12, fontWeight: 700 }}>{t}</span>
                {i < 3 && <span style={{ color: "rgba(245,197,24,.2)", fontSize: 16 }}>|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ══ FOOTER ══ */}
        <footer style={{ background: "#050505", padding: "48px 18px 28px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            {/* Top gold divider */}
            <div style={{ height: 1, background: "linear-gradient(to right,transparent,rgba(245,197,24,.4),rgba(245,197,24,.4),transparent)", marginBottom: 40 }} />

            <div className="footer-grid">
              {/* Brand */}
              <div>
                <div style={{ marginBottom: 16 }}>
                  <img src="/logo.png" alt="ماكس ستور" style={{ height: 42, width: "auto", objectFit: "contain", filter: "drop-shadow(0 0 10px rgba(245,197,24,.45))" }} />
                </div>
                <p style={{ color: "#2a2a2a", fontSize: 12, lineHeight: 2 }}>متجرك الأول للاشتراكات الرقمية<br />بأسعار مغرية وضمان ذهبي.</p>
                <div style={{ display: "flex", gap: 8, marginTop: 18 }}>
                  {[Instagram, MessageSquare, MessageCircle].map((Icon, i) => (
                    <a key={i} href="#" style={{ width: 36, height: 36, borderRadius: 9, background: "#0f0f0f", border: "1px solid rgba(255,255,255,.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "#2a2a2a", textDecoration: "none", transition: "all .22s" }}
                      onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,.35)"; e.currentTarget.style.color = G; e.currentTarget.style.background = "rgba(245,197,24,.06)"; }}
                      onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,.06)"; e.currentTarget.style.color = "#2a2a2a"; e.currentTarget.style.background = "#0f0f0f"; }}>
                      <Icon style={{ width: 15, height: 15 }} />
                    </a>
                  ))}
                </div>
                {/* Mini stats */}
                <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
                  {[["10k+", "عميل"], ["24/7", "دعم"], ["100%", "ضمان"]].map(([n, l], i) => (
                    <div key={i} style={{ background: "#0f0f0f", border: "1px solid rgba(245,197,24,.1)", borderRadius: 9, padding: "7px 12px", textAlign: "center" }}>
                      <div style={{ color: G, fontWeight: 900, fontSize: 13, lineHeight: 1 }}>{n}</div>
                      <div style={{ color: "#333", fontSize: 9, marginTop: 2 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick links */}
              {[
                { h: "روابط سريعة", links: ["الرئيسية", "شاهد VIP", "نتفليكس", "ديزني+", "جميع المنتجات"] },
                { h: "الدعم", links: ["الشروط والأحكام", "سياسة الاسترجاع", "الأسئلة الشائعة", "اتصل بنا"] },
              ].map((col, ci) => (
                <div key={ci}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
                    <div style={{ width: 3, height: 16, borderRadius: 2, background: GD }} />
                    <h4 style={{ color: "#fff", fontWeight: 800, fontSize: 13 }}>{col.h}</h4>
                  </div>
                  {col.links.map((l, i) => (
                    <div key={i} style={{ marginBottom: 11 }}>
                      <a href="#" style={{ color: "#2a2a2a", fontSize: 12.5, textDecoration: "none", fontWeight: 600, transition: "color .2s", display: "flex", alignItems: "center", gap: 6 }}
                        onMouseOver={e => (e.currentTarget.style.color = "#999")}
                        onMouseOut={e => (e.currentTarget.style.color = "#2a2a2a")}>
                        <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(245,197,24,.3)", flexShrink: 0, display: "inline-block" }} />
                        {l}
                      </a>
                    </div>
                  ))}
                </div>
              ))}

              {/* Contact */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
                  <div style={{ width: 3, height: 16, borderRadius: 2, background: GD }} />
                  <h4 style={{ color: "#fff", fontWeight: 800, fontSize: 13 }}>تواصل معنا</h4>
                </div>
                {/* 24/7 card */}
                <div style={{ background: "linear-gradient(135deg,#111,#0f0f0f)", border: "1px solid rgba(245,197,24,.15)", borderRadius: 14, padding: "16px 14px", marginBottom: 12, textAlign: "center", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, background: "radial-gradient(circle,rgba(245,197,24,.08) 0%,transparent 70%)", pointerEvents: "none" }} />
                  <div style={{ fontSize: 26, marginBottom: 6 }}>🕐</div>
                  <div style={{ color: G, fontWeight: 900, fontSize: 20, lineHeight: 1 }}>24 / 7</div>
                  <div style={{ color: "#333", fontSize: 10, marginTop: 4 }}>طاقمنا جاهز لخدمتك دائماً</div>
                  {/* Response time */}
                  <div style={{ marginTop: 10, background: "rgba(74,222,128,.07)", border: "1px solid rgba(74,222,128,.18)", borderRadius: 7, padding: "4px 10px" }}>
                    <span style={{ color: "#4ade80", fontSize: 9.5, fontWeight: 800 }}>⚡ متوسط الرد: 3 دقائق</span>
                  </div>
                </div>
                {/* Buttons */}
                <div style={{ display: "flex", gap: 8 }}>
                  {[["واتساب", "💬"], ["تيليجرام", "✈️"]].map(([l, ic], i) => (
                    <a key={i} href="#" style={{ flex: 1, background: "#0f0f0f", border: "1px solid rgba(255,255,255,.06)", borderRadius: 10, padding: "10px 8px", textAlign: "center", textDecoration: "none", color: "#2a2a2a", fontSize: 11.5, fontWeight: 800, transition: "all .2s", display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}
                      onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(245,197,24,.3)"; e.currentTarget.style.color = G; e.currentTarget.style.background = "rgba(245,197,24,.04)"; }}
                      onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,.06)"; e.currentTarget.style.color = "#2a2a2a"; e.currentTarget.style.background = "#0f0f0f"; }}>
                      <span style={{ fontSize: 16 }}>{ic}</span>
                      <span>{l}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div style={{ marginTop: 36, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,.04)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
              <p style={{ color: "#1c1c1c", fontSize: 11 }}>© 2025 ماكس ستور — جميع الحقوق محفوظة</p>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                {[["Apple Pay","#f5f5f5"], ["Visa","#60a5fa"], ["Mastercard","#e05c5c"], ["Mada","#4ade80"]].map(([m, c], i) => (
                  <span key={i} style={{ color: c as string, fontSize: 10, fontWeight: 900, fontStyle: m === "Visa" ? "italic" : "normal" }}>{m}</span>
                ))}
              </div>
              <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="btn-gold" style={{ background: GD, color: "#000", fontWeight: 900, fontSize: 11, padding: "6px 14px", borderRadius: 8, border: "none", boxShadow: "0 3px 12px rgba(245,197,24,.3)" }}>
                ↑ للأعلى
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function ProdSection({ title, desc, products, render }: any) {
  return (
    <section style={{ marginBottom: 44 }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24 }}>
        <div style={{ position: "relative", paddingRight: 14 }}>
          {/* Gold right bar */}
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 4, borderRadius: 2, background: GD, boxShadow: "0 0 14px rgba(245,197,24,.55)" }} />
          <h3 style={{ fontSize: "clamp(19px,4.5vw,27px)", fontWeight: 900, color: "#fff", marginBottom: 6 }}>{title}</h3>
          <p style={{ color: "#777", fontSize: 12.5, marginBottom: 8 }}>{desc}</p>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <div style={{ height: 2, width: 40, borderRadius: 2, background: GD }} />
            <div style={{ height: 2, width: 16, borderRadius: 2, background: "rgba(245,197,24,.3)" }} />
            <div style={{ height: 2, width: 8, borderRadius: 2, background: "rgba(245,197,24,.15)" }} />
          </div>
        </div>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 6, color: G, fontSize: 12.5, fontWeight: 700, textDecoration: "none", padding: "8px 16px", borderRadius: 10, border: "1px solid rgba(245,197,24,.22)", background: "rgba(245,197,24,.04)", transition: "all .2s", whiteSpace: "nowrap" }}
          onMouseOver={e => { e.currentTarget.style.background = "rgba(245,197,24,.12)"; e.currentTarget.style.borderColor = "rgba(245,197,24,.4)"; e.currentTarget.style.boxShadow = "0 4px 18px rgba(245,197,24,.15)"; }}
          onMouseOut={e => { e.currentTarget.style.background = "rgba(245,197,24,.04)"; e.currentTarget.style.borderColor = "rgba(245,197,24,.22)"; e.currentTarget.style.boxShadow = "none"; }}>
          <ArrowLeft style={{ width: 12, height: 12 }} /> عرض الكل
        </a>
      </div>
      <div className="prod-row">{products.map((p: any, i: number) => render(p, i))}</div>
    </section>
  );
}

function ProductCard({ p, brand }: { p: any; brand: "shahid" | "netflix" }) {
  const sport = p.name.includes("رياضة");
  const isNetflix = brand === "netflix";

  const imgBg = isNetflix
    ? "linear-gradient(160deg,#0b0a00,#1c1a00,#0d0c00)"
    : "linear-gradient(160deg,#0c0a00,#1d1900,#271f00)";
  const centerGlow = isNetflix
    ? "radial-gradient(ellipse at 50% 60%,rgba(245,197,24,.28) 0%,transparent 58%)"
    : "radial-gradient(ellipse at 50% 72%,rgba(245,197,24,.26) 0%,transparent 58%)";

  return (
    <div className="card pc">
      {/* Image zone */}
      <div className="card-img" style={{ background: imgBg }}>
        {/* Glow */}
        <div style={{ position: "absolute", inset: 0, background: centerGlow, pointerEvents: "none" }} />
        {/* Hatch pattern */}
        <div style={{ position: "absolute", inset: 0, opacity: .03, backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "11px 11px", pointerEvents: "none" }} />
        {/* Hover overlay */}
        <div className="card-img-overlay" />

        {/* Top badges */}
        <div style={{ position: "absolute", top: 0, right: 0, background: GD, color: "#000", fontWeight: 900, fontSize: 8, padding: "4px 9px", borderRadius: "0 0 0 9px", zIndex: 20 }}>✓ ضمان</div>
        {p.hot
          ? <div style={{ position: "absolute", top: 8, left: 8, display: "flex", alignItems: "center", gap: 3, background: "rgba(239,68,68,.14)", border: "1px solid rgba(239,68,68,.3)", color: "#ef4444", fontWeight: 900, fontSize: 7.5, padding: "3px 7px", borderRadius: 6, zIndex: 20 }}><Flame style={{ width: 8, height: 8 }} />الأكثر مبيعاً</div>
          : <div style={{ position: "absolute", top: 8, left: 8, background: "#ef4444", color: "#fff", fontWeight: 900, fontSize: 7.5, padding: "3px 7px", borderRadius: 6, zIndex: 20 }}>{sport ? "SPORTS" : "VIP"}</div>
        }

        {/* Center logo */}
        {isNetflix ? (
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
            <span style={{ color: G, fontWeight: 900, fontSize: 84, fontStyle: "italic", letterSpacing: -6, lineHeight: 1, textShadow: "0 0 30px rgba(245,197,24,1),0 0 60px rgba(245,197,24,.55),0 0 100px rgba(245,197,24,.22)" }}>N</span>
            <span style={{ color: "#8a6d00", fontSize: 7.5, letterSpacing: 4, fontWeight: 900, marginTop: -14 }}>NETFLIX</span>
          </div>
        ) : (
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, zIndex: 10 }}>
            <div style={{ display: "flex", gap: 4, alignItems: "flex-end" }}>
              {[15, 24, 15].map((h, i) => <div key={i} style={{ width: 7, height: h, borderRadius: 3, background: GD, boxShadow: "0 0 10px rgba(245,197,24,.55)" }} />)}
            </div>
            <span style={{ color: "#fff", fontWeight: 900, fontSize: 10.5, letterSpacing: 5, textShadow: "0 0 12px rgba(245,197,24,.5)" }}>SHAHID</span>
            <span style={{ background: "rgba(245,197,24,.13)", color: G, fontSize: 7.5, fontWeight: 900, padding: "2px 9px", borderRadius: 999, border: "1px solid rgba(245,197,24,.28)" }}>{sport ? "SPORTS" : "VIP"}</span>
          </div>
        )}

        {/* Bottom chips */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top,rgba(0,0,0,.96),transparent)", padding: "10px 8px 7px", display: "flex", gap: 4, justifyContent: "center", zIndex: 20 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 3, background: "rgba(245,197,24,.14)", color: G, fontWeight: 800, fontSize: 7.5, padding: "3px 7px", borderRadius: 5, border: "1px solid rgba(245,197,24,.22)" }}><Zap style={{ width: 7, height: 7, fill: G }} />4K</span>
          <span style={{ background: "rgba(255,255,255,.05)", color: "#555", fontWeight: 700, fontSize: 7.5, padding: "3px 7px", borderRadius: 5 }}>{p.sub}</span>
        </div>
      </div>

      {/* Info zone */}
      <div style={{ padding: "13px 13px 15px", display: "flex", flexDirection: "column", gap: 9, flex: 1, borderTop: "1px solid rgba(255,255,255,.06)" }}>
        <div style={{ color: "#c0c0c0", fontWeight: 800, fontSize: 11.5, lineHeight: 1.5 }}>{p.name}</div>

        {/* Price row */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div style={{ color: "#282828", fontSize: 9, textDecoration: "line-through", marginBottom: 1 }}>{p.old} ر.س</div>
            <div style={{ color: G, fontWeight: 900, fontSize: 21, lineHeight: 1 }}>
              {p.price} <span style={{ fontSize: 10, fontWeight: 700 }}>ر.س</span>
            </div>
          </div>
          <button style={{ background: "none", border: "none", cursor: "pointer", color: "#222", transition: "color .2s" }}
            onMouseOver={e => (e.currentTarget.style.color = "#ef4444")} onMouseOut={e => (e.currentTarget.style.color = "#222")}>
            <Heart style={{ width: 15, height: 15 }} />
          </button>
        </div>

        {/* Savings + stock */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ background: "rgba(74,222,128,.08)", color: "#4ade80", fontSize: 9, fontWeight: 800, padding: "2px 7px", borderRadius: 5, border: "1px solid rgba(74,222,128,.18)" }}>
            توفير {p.old} ر.س
          </span>
          <span style={{ color: "#ef4444", fontSize: 9, fontWeight: 700 }}>⚡ متبقي 5</span>
        </div>

        <button className="btn-gold" style={{ width: "100%", background: GD, color: "#000", fontWeight: 900, fontSize: 11.5, padding: "9px", borderRadius: 10, border: "none", boxShadow: "0 5px 16px rgba(245,197,24,.35)" }}>🛒 أضف للسلة</button>
      </div>
    </div>
  );
}

/* keep old names for backward compat */
function ShahidCard({ p }: { p: any }) { return <ProductCard p={p} brand="shahid" />; }
function NetflixCard({ p }: { p: any }) { return <ProductCard p={p} brand="netflix" />; }
