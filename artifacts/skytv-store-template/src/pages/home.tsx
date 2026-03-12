import React from "react";
import {
  ShoppingBag,
  Search,
  User,
  Crown,
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
  Mail,
  Smartphone
} from "lucide-react";

export default function HomePage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Tajawal:wght@400;500;700&display=swap');
        
        .font-cairo {
          font-family: 'Cairo', 'Tajawal', sans-serif;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .diagonal-bg {
          background: linear-gradient(135deg, #111 25%, transparent 25%) -50px 0,
                      linear-gradient(225deg, #111 25%, transparent 25%) -50px 0,
                      linear-gradient(315deg, #111 25%, transparent 25%),
                      linear-gradient(45deg, #111 25%, transparent 25%);
          background-size: 100px 100px;
          background-color: #1a1a1a;
        }

        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
        }
        
        .marquee-content {
          display: inline-flex;
          animation: marquee 18s linear infinite;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
      
      <div dir="rtl" className="min-h-screen bg-[#0d0d0d] text-white font-cairo pb-20">
        
        {/* 1. NAVBAR */}
        <header className="sticky top-0 z-50 bg-[#111111] border-b border-[#222] h-14 flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-gray-300" />
            <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
              <User className="w-4 h-4 text-gray-300" />
            </div>
            <Search className="w-5 h-5 text-gray-300" />
          </div>
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="MAX Logo" className="h-10 w-auto object-contain" />
          </div>
        </header>

        <main className="p-4 space-y-8 max-w-lg mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-5xl">
          
          {/* 2. HERO BANNER */}
          <section className="relative overflow-hidden rounded-2xl bg-[#0d0d0d] border border-[#2a2a2a]" style={{minHeight: '220px'}}>
            {/* Gold glow top-right */}
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-yellow-500/10 blur-3xl pointer-events-none" />
            {/* Gold glow bottom-left */}
            <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-yellow-400/8 blur-2xl pointer-events-none" />
            {/* Diagonal stripe accent */}
            <div className="absolute inset-0 pointer-events-none" style={{background: 'repeating-linear-gradient(125deg, transparent, transparent 38px, rgba(245,197,24,0.03) 38px, rgba(245,197,24,0.03) 39px)'}} />
            {/* Gold top border line */}
            <div className="absolute top-0 right-0 w-1/2 h-[2px] bg-gradient-to-l from-yellow-400/60 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-yellow-400/40 to-transparent" />

            <div className="relative z-10 flex items-center justify-between p-5 gap-2">
              {/* Text side */}
              <div className="flex-1 space-y-2.5">
                <div className="flex items-center gap-2">
                  <img src="/logo.png" alt="MAX" className="h-9 w-auto object-contain" />
                  <h1 className="text-2xl font-black text-white leading-tight">ماكس ستور</h1>
                </div>
                <p className="text-sm font-bold text-gray-200 leading-relaxed">
                  ملاذك المناسب<br/>
                  <span className="text-white font-black">للإشتراكات الرقمية</span>
                </p>
                <p className="text-xs text-yellow-400 font-bold">✦ حسابات رسمية بأسعار مغرية!</p>
                <button className="mt-1 border border-white/40 bg-white/5 backdrop-blur text-white rounded-full px-5 py-1.5 text-xs font-bold hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-200">
                  تسوق الآن ←
                </button>
              </div>

              {/* Cards side — stacked subscription cards */}
              <div className="relative shrink-0" style={{width: '140px', height: '170px'}}>

                {/* Back card — Disney+ style */}
                <div className="absolute rounded-xl overflow-hidden border border-white/10 shadow-xl"
                  style={{width:'88px', height:'118px', top:'8px', right:'0px',
                    background:'linear-gradient(135deg,#0f1b40 0%,#1a237e 60%,#283593 100%)',
                    transform:'rotate(14deg)', zIndex:1, boxShadow:'0 8px 24px rgba(0,0,0,0.6)'}}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                    <span className="text-white font-black text-2xl tracking-tighter" style={{fontStyle:'italic'}}>D+</span>
                    <span className="text-blue-300 text-[8px] font-bold tracking-widest">DISNEY+</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Middle card — Shahid style */}
                <div className="absolute rounded-xl overflow-hidden border border-white/10 shadow-xl"
                  style={{width:'92px', height:'122px', top:'24px', right:'24px',
                    background:'linear-gradient(135deg,#1a0a2e 0%,#6b1fa8 60%,#a855f7 100%)',
                    transform:'rotate(-6deg)', zIndex:2, boxShadow:'0 10px 28px rgba(0,0,0,0.7)'}}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 px-2">
                    <div className="flex gap-0.5">
                      {[0,1,2].map(d=>(
                        <div key={d} className="w-2 h-5 rounded-sm bg-gradient-to-b from-white to-gray-300" style={{opacity: d===1?1:0.7}} />
                      ))}
                    </div>
                    <span className="text-white text-[9px] font-black tracking-widest mt-1">SHAHID</span>
                    <span className="text-purple-300 text-[7px] font-bold">VIP</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent" />
                </div>

                {/* Front card — Netflix style */}
                <div className="absolute rounded-xl overflow-hidden border border-white/10 shadow-2xl"
                  style={{width:'96px', height:'126px', top:'36px', right:'42px',
                    background:'linear-gradient(160deg,#1a0000 0%,#8b0000 45%,#b71c1c 100%)',
                    transform:'rotate(4deg)', zIndex:3, boxShadow:'0 12px 32px rgba(183,28,28,0.4)'}}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                    <span className="text-white font-black text-4xl leading-none" style={{fontStyle:'italic', letterSpacing:'-2px', textShadow:'2px 2px 8px rgba(0,0,0,0.8)'}}>N</span>
                    <span className="text-red-300 text-[8px] font-bold tracking-[3px]">NETFLIX</span>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400/60 to-transparent" />
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-red-400/40 to-transparent" />
                  {/* Shine */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent" />
                </div>

                {/* Gold star badge */}
                <div className="absolute z-10 bg-yellow-400 text-black text-[9px] font-black px-2 py-0.5 rounded-full shadow-lg"
                  style={{bottom:'12px', right:'4px', transform:'rotate(-4deg)'}}>
                  ضمان ذهبي ✓
                </div>

              </div>
            </div>
          </section>

          {/* 3. شريط وسائل الدفع */}
          <section className="bg-[#111] rounded-xl p-4 border border-[#222]">
            <h2 className="text-center text-sm font-bold mb-4">نوفر لك <span className="text-yellow-400">[ طرق الدفع ]</span> العالمية والمحلية</h2>
            <div className="space-y-2">
              <div className="flex justify-center gap-2 flex-wrap">
                <div className="px-2 py-1 bg-black rounded border border-gray-800 text-xs font-bold flex items-center gap-1">
                  <span className="text-white">Apple Pay</span>
                </div>
                <div className="px-2 py-1 bg-black rounded border border-gray-800 text-xs font-bold flex items-center gap-1">
                  <span className="text-red-500">Master</span><span className="text-orange-500">card</span>
                </div>
                <div className="px-2 py-1 bg-black rounded border border-gray-800 text-xs font-bold flex items-center gap-1">
                  <span className="text-blue-500 italic">VISA</span>
                </div>
                <div className="px-2 py-1 bg-black rounded border border-gray-800 text-xs font-bold flex items-center gap-1">
                  <span className="text-green-500">mada</span>
                </div>
              </div>
              <div className="flex justify-center gap-2 flex-wrap">
                <div className="px-2 py-1 bg-black rounded border border-gray-800 text-xs font-bold flex items-center gap-1">
                  <span className="text-purple-500">stc</span><span className="text-white">pay</span>
                </div>
                <div className="px-2 py-1 bg-black rounded border border-gray-800 text-xs font-bold flex items-center gap-1">
                  <span className="text-purple-600">STC</span>
                </div>
                <div className="px-2 py-1 bg-black rounded border border-gray-800 text-xs font-bold flex items-center gap-1">
                  <span className="text-blue-400 font-serif">PayPal</span>
                </div>
                <div className="px-2 py-1 bg-black rounded border border-gray-800 text-xs font-bold flex items-center gap-1">
                  <span className="text-orange-400">Bitcoin</span>
                </div>
              </div>
            </div>
          </section>

          {/* 4. شريط متحرك */}
          <section className="bg-black py-3 overflow-hidden border-y border-[#222] -mx-4 relative">
            <div className="marquee-container">
              <div className="marquee-content flex items-center gap-6 whitespace-nowrap">
                {[...Array(12)].map((_, i) => (
                  <span key={i} className="flex items-center gap-3 shrink-0">
                    <img src="/logo.png" alt="M" className="h-6 w-auto object-contain" />
                    <span className="text-white font-black text-sm tracking-widest uppercase">MAX STORE</span>
                    <img src="/logo.png" alt="M" className="h-6 w-auto object-contain" />
                    <span className="text-yellow-400 font-bold mx-2">✦</span>
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* 5. قسم فئة المنتجات "اشتراكات شاهد VIP" */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2 relative">
                <img src="/logo.png" alt="M" className="h-7 w-auto object-contain" />
                <h3 className="text-white font-bold text-lg">اشتراكات شاهد VIP</h3>
                <div className="absolute -bottom-1 right-8 w-1/2 border-b-2 border-yellow-400"></div>
              </div>
              <button className="text-yellow-400 text-sm flex items-center gap-1 hover:underline">
                <ArrowLeft className="w-3 h-3" />
                عرض الكل
              </button>
            </div>

            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 snap-x">
              {[
                { name: "شاهد VIP شهر رسمي", oldPrice: "٣٣", newPrice: "١٣" },
                { name: "اشتراك شاهد رياضة شهر", oldPrice: "٣٣", newPrice: "١٥.٩٩" },
                { name: "شاهد VIP 3 أشهر", oldPrice: "٨٠", newPrice: "٣٥" }
              ].map((product, i) => (
                <div key={i} className="w-40 shrink-0 bg-[#111] rounded-xl overflow-hidden border border-[#222] snap-start flex flex-col group hover:border-yellow-400/50 transition-colors">
                  <div className="h-48 relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex flex-col items-center justify-center p-2">
                    {/* Badge Golden */}
                    <div className="absolute top-0 left-0 bg-yellow-500 text-black text-[10px] px-2 py-0.5 rounded-br-xl font-bold z-10">
                      ضمان ذهبي
                    </div>
                    {/* Badge Account Type */}
                    <div className="absolute top-0 right-0 bg-yellow-500 text-black text-[10px] px-2 py-0.5 rounded-bl-xl font-bold z-10">
                      ملف خاص
                    </div>
                    
                    <div className="mt-4 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-600 to-orange-500 flex items-center justify-center mb-2 shadow-lg shadow-pink-500/20">
                        <span className="text-white font-black text-xl tracking-tighter">SHAHID</span>
                      </div>
                      <span className="text-white font-bold text-lg text-center leading-tight">{product.name.split(' ').slice(0,2).join(' ')}</span>
                    </div>

                    <div className="absolute bottom-2 flex gap-1 justify-center w-full px-2">
                      <span className="bg-[#222] text-xs text-gray-300 rounded px-1.5 py-0.5 flex items-center gap-0.5"><Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" /> 4K</span>
                      <span className="bg-[#222] text-xs text-gray-300 rounded px-1.5 py-0.5">شهر</span>
                      <span className="bg-[#222] text-xs text-gray-300 rounded px-1.5 py-0.5">رسمي</span>
                    </div>
                  </div>
                  <div className="p-3 flex flex-col flex-1 justify-between gap-3 border-t border-[#222]">
                    <h4 className="text-sm font-bold text-white leading-snug">{product.name}</h4>
                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <div className="flex flex-col">
                          <span className="line-through text-gray-500 text-xs">{product.oldPrice} ر.س</span>
                          <span className="text-yellow-400 font-bold text-base">{product.newPrice} ر.س</span>
                        </div>
                        <button className="text-gray-400 hover:text-red-400 transition-colors">
                          <Heart className="w-5 h-5" />
                        </button>
                      </div>
                      <button className="w-full bg-[#222] hover:bg-[#333] text-white font-bold text-xs py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                        أضف للسلة 🛒
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. قسم "اشتراكات نتفليكس" */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2 relative">
                <img src="/logo.png" alt="M" className="h-7 w-auto object-contain" />
                <h3 className="text-white font-bold text-lg">اشتراكات نتفليكس</h3>
                <div className="absolute -bottom-1 right-8 w-1/2 border-b-2 border-red-600"></div>
              </div>
              <button className="text-yellow-400 text-sm flex items-center gap-1 hover:underline">
                <ArrowLeft className="w-3 h-3" />
                عرض الكل
              </button>
            </div>

            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 snap-x">
              {[
                { name: "اشتراك نتفليكس شهر ملف خاص", oldPrice: "٤٠", newPrice: "١٨.٩", type: "ملف خاص", time: "شهر" },
                { name: "اشتراك نتفليكس شهر مشترك رسمي 4K", oldPrice: "١٧", newPrice: "١١", type: "مشترك", time: "شهر" },
                { name: "نتفليكس 3 أشهر ملف خاص", oldPrice: "١٠٠", newPrice: "٥٠", type: "ملف خاص", time: "3 أشهر" }
              ].map((product, i) => (
                <div key={i} className="w-40 shrink-0 bg-[#111] rounded-xl overflow-hidden border border-[#222] snap-start flex flex-col group hover:border-yellow-400/50 transition-colors">
                  <div className="h-48 relative bg-gradient-to-b from-[#1a0505] to-[#0a0a0a] flex flex-col items-center justify-center p-2">
                    <div className="absolute top-0 left-0 bg-yellow-500 text-black text-[10px] px-2 py-0.5 rounded-br-xl font-bold z-10">
                      ضمان ذهبي
                    </div>
                    <div className="absolute top-0 right-0 bg-yellow-500 text-black text-[10px] px-2 py-0.5 rounded-bl-xl font-bold z-10">
                      {product.type}
                    </div>
                    
                    <div className="mt-4 flex flex-col items-center justify-center">
                      <div className="w-14 h-16 bg-black rounded flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(220,38,38,0.5)] border border-red-900">
                         <span className="text-red-600 font-black text-4xl">N</span>
                      </div>
                    </div>

                    <div className="absolute bottom-2 flex gap-1 justify-center w-full px-2">
                      <span className="bg-[#222] text-xs text-gray-300 rounded px-1.5 py-0.5 flex items-center gap-0.5"><Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" /> 4K</span>
                      <span className="bg-[#222] text-xs text-gray-300 rounded px-1.5 py-0.5">{product.time}</span>
                      <span className="bg-[#222] text-xs text-gray-300 rounded px-1.5 py-0.5">رسمي</span>
                    </div>
                  </div>
                  <div className="p-3 flex flex-col flex-1 justify-between gap-3 border-t border-[#222]">
                    <h4 className="text-sm font-bold text-white leading-snug">{product.name}</h4>
                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <div className="flex flex-col">
                          <span className="line-through text-gray-500 text-xs">{product.oldPrice} ر.س</span>
                          <span className="text-yellow-400 font-bold text-base">{product.newPrice} ر.س</span>
                        </div>
                        <button className="text-gray-400 hover:text-red-400 transition-colors">
                          <Heart className="w-5 h-5" />
                        </button>
                      </div>
                      <button className="w-full bg-[#222] hover:bg-[#333] text-white font-bold text-xs py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                        أضف للسلة 🛒
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7. قسم الدعم 24/7 */}
          <section className="bg-[#111] rounded-2xl p-6 border border-[#222] flex items-center justify-between overflow-hidden relative">
             <div className="w-2/3 space-y-3 z-10">
                <h3 className="text-xl font-bold text-white leading-tight">طاقم ماكس جاهز لخدمتكم طوال أيام الأسبوع وخلال جميع ساعات اليوم 24/7</h3>
                <p className="text-gray-400 text-sm">تحت أي سماء وفوق أي أرض طاقم ماكس حاضر لخدمتك</p>
                <div className="pt-2">
                  <button className="border border-white/30 bg-transparent text-white rounded-full text-sm px-6 py-2 hover:bg-white/10 transition-colors">
                    اضغط هنا للتواصل معنا
                  </button>
                  <div className="mt-3"><img src="/logo.png" alt="M" className="h-8 w-auto object-contain" /></div>
                </div>
             </div>
             <div className="w-1/3 relative flex justify-center items-center z-10">
                <div className="w-24 h-24 rounded-full border-4 border-yellow-400/20 flex items-center justify-center relative bg-[#1a1a1a]">
                   <Headphones className="w-12 h-12 text-yellow-400" />
                   <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-black font-black text-xs px-2 py-1 rounded-full">24</div>
                </div>
             </div>
          </section>

          {/* 8. ماذا يميزنا (2×2 grid) */}
          <section className="py-4">
             <div className="text-center mb-8 flex flex-col items-center">
                <h3 className="text-2xl font-bold text-white mb-1">❓ ماذا يميزنا عن غيرنا؟</h3>
                <div className="my-2"><img src="/logo.png" alt="M" className="h-10 w-auto object-contain mx-auto" /></div>
                <p className="text-gray-400 text-sm">عالم المنتجات الرقمية</p>
             </div>

             <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center text-center p-4 border border-[#222] rounded-xl hover:bg-[#111] transition-colors">
                   <Award className="w-10 h-10 text-yellow-400 mb-3" />
                   <h4 className="font-bold text-white text-sm mb-1">ضمان «ماكس» الذهبي</h4>
                   <p className="text-xs text-gray-500">تعويض فوري طوال فترة الاشتراك لضمان حقك.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 border border-[#222] rounded-xl hover:bg-[#111] transition-colors">
                   <Headphones className="w-10 h-10 text-blue-500 mb-3" />
                   <h4 className="font-bold text-white text-sm mb-1">لأنك تستحق الأفضل</h4>
                   <p className="text-xs text-gray-500">فريق دعم فني متواجد على مدار الساعة لخدمتك.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 border border-[#222] rounded-xl hover:bg-[#111] transition-colors">
                   <Globe className="w-10 h-10 text-yellow-400 mb-3" />
                   <h4 className="font-bold text-white text-sm mb-1">ادفع وانت مرتاح</h4>
                   <p className="text-[10px] text-gray-500">Apple Pay, Visa, Mastercard, Mada, STC Pay</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 border border-[#222] rounded-xl hover:bg-[#111] transition-colors">
                   <ShieldCheck className="w-10 h-10 text-blue-500 mb-3" />
                   <h4 className="font-bold text-white text-sm mb-1">تسوق بأمان</h4>
                   <p className="text-xs text-gray-500">نظام تشفير عالي لحماية بياناتك ومعلوماتك.</p>
                </div>
             </div>
          </section>

          {/* 9. النشرة البريدية */}
          <section className="bg-[#111] p-6 rounded-2xl border border-[#222] text-center">
             <h3 className="text-white font-bold text-lg mb-1">كن أول من يعرف!</h3>
             <p className="text-gray-400 text-sm mb-4">اشترك بنشرتنا البريدية ليصلك كل جديد.</p>
             <div className="flex gap-2 justify-center max-w-sm mx-auto">
                <input 
                  type="email" 
                  placeholder="البريد الإلكتروني" 
                  className="flex-1 bg-black border border-[#333] rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 text-right"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors">
                  اشترك
                </button>
             </div>
          </section>

        </main>

        {/* 10. FOOTER */}
        <footer className="bg-[#0a0a0a] border-t border-[#222] pt-8 pb-12 px-4 mt-8">
           <div className="max-w-lg mx-auto flex flex-col items-center">
              <button 
                onClick={scrollToTop}
                className="text-gray-500 text-sm hover:text-white transition-colors mb-8 flex items-center gap-1"
              >
                 العودة إلى أعلى ↑
              </button>

              <div className="flex gap-4 mb-8">
                <a href="#" className="w-10 h-10 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
                  <span className="font-bold text-lg">X</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
                  <span className="font-bold">♪</span>
                </a>
              </div>

              <div className="mb-8"><img src="/logo.png" alt="MAX" className="h-16 w-auto object-contain mx-auto" /></div>

              <div className="w-full flex flex-col items-center text-center mb-8 gap-2">
                 <h4 className="text-yellow-400 font-bold mb-2">روابط تهمك</h4>
                 <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">الشروط والأحكام</a>
                 <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">الاسترجاع والاستبدال</a>
              </div>

              <div className="w-full flex flex-col items-center text-center mb-8">
                 <h4 className="text-yellow-400 font-bold mb-4">خدمة العملاء</h4>
                 <div className="flex gap-3">
                    <a href="#" className="bg-[#111] p-3 rounded-xl border border-[#222] text-gray-400 hover:text-blue-400 transition-colors">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                    </a>
                    <a href="#" className="bg-[#111] p-3 rounded-xl border border-[#222] text-gray-400 hover:text-green-400 transition-colors">
                      <MessageSquare className="w-6 h-6" />
                    </a>
                    <a href="#" className="bg-[#111] p-3 rounded-xl border border-[#222] text-gray-400 hover:text-green-500 transition-colors">
                      <MessageCircle className="w-6 h-6" />
                    </a>
                 </div>
              </div>

              <div className="mb-6 border border-gray-800 rounded px-4 py-2 bg-[#111]">
                 <p className="text-gray-500 text-xs">وثيقة العمل الحر FL-XXXXXX</p>
              </div>

              <div className="flex justify-center gap-2 mb-6 text-gray-500 font-bold">
                 <span className="text-xs px-2 py-0.5">Apple Pay</span>
                 <span className="text-xs px-2 py-0.5">Visa</span>
                 <span className="text-xs px-2 py-0.5">Mastercard</span>
                 <span className="text-xs px-2 py-0.5">Mada</span>
              </div>

              <p className="text-gray-600 text-xs text-center flex items-center justify-center gap-1">
                 صنع بإتقان على منصة سلة 
              </p>
           </div>
        </footer>
      </div>
    </>
  );
}
