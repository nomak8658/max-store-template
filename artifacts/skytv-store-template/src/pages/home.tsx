import React from 'react';
import {
  ShoppingBag,
  User,
  Search,
  Menu,
  Gamepad2,
  Heart,
  Eye,
  Award,
  Headphones,
  Globe,
  ShieldCheck,
  Star,
  MessageSquare,
  CheckCircle2,
  ArrowUp,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function HomePage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#0d0f14] text-white font-['Tajawal',sans-serif] selection:bg-blue-500/30 pb-10">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap');
        
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .sky-gradient {
          background: linear-gradient(135deg, #1a4fd8 0%, #0ea5e9 100%);
        }
      `}} />

      {/* 1. NAVBAR */}
      <nav className="sticky top-0 z-50 h-14 bg-[#0d0f14]/95 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-gray-300" />
            <span className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </div>
          <User className="w-5 h-5 text-gray-300" />
        </div>

        <div className="flex items-center justify-center absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1.5">
            <div className="relative flex items-center justify-center w-6 h-6">
              <div className="absolute inset-0 bg-blue-500 blur-sm opacity-50 rounded-full"></div>
              <Gamepad2 className="w-5 h-5 text-white relative z-10" />
            </div>
            <span className="text-xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white">
              SKY
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-300" />
          <Menu className="w-5 h-5 text-gray-300" />
        </div>
      </nav>

      <main className="px-4 pt-6 space-y-6 max-w-md mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-5xl">
        
        {/* 2. HERO BANNER */}
        <section className="relative rounded-2xl overflow-hidden sky-gradient h-52 md:h-56 flex items-center px-6 shadow-[0_0_40px_rgba(29,106,212,0.3)]">
          <div className="relative z-10 w-3/5">
            <h1 className="text-2xl md:text-3xl font-black leading-tight mb-2 text-white drop-shadow-md">
              سكاي ستور<br/>خيارك الأفضل
            </h1>
          </div>
          
          {/* CSS Mascot */}
          <div className="absolute left-6 bottom-4 w-32 h-32 z-10 drop-shadow-xl scale-90 origin-bottom-left md:scale-100">
            {/* Cloud Body */}
            <div className="absolute bottom-4 left-2 right-2 h-14 bg-white rounded-full"></div>
            <div className="absolute bottom-8 left-6 w-12 h-12 bg-white rounded-full"></div>
            <div className="absolute bottom-6 right-6 w-14 h-14 bg-white rounded-full"></div>
            {/* Eyes */}
            <div className="absolute bottom-10 left-10 w-2 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-14 w-2 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            {/* Keyboard */}
            <div className="absolute bottom-0 left-0 right-0 h-5 bg-[#2a2d36] rounded-md flex gap-1 p-1 transform rotate-[-5deg]">
              <div className="flex-1 bg-[#1a1d26] rounded-sm"></div>
              <div className="flex-1 bg-[#1a1d26] rounded-sm"></div>
              <div className="flex-1 bg-blue-500 rounded-sm"></div>
              <div className="flex-1 bg-[#1a1d26] rounded-sm"></div>
            </div>
          </div>
          
          {/* Background decorations */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-4 right-10 w-16 h-16 border-4 border-white/30 rounded-full"></div>
            <div className="absolute bottom-8 right-20 w-8 h-8 bg-white/30 rotate-45"></div>
            <Gamepad2 className="absolute top-10 left-1/2 w-12 h-12 text-white/40 -rotate-12" />
          </div>
        </section>

        {/* 3. PROMO BANNER */}
        <section className="rounded-2xl overflow-hidden bg-gradient-to-r from-[#0d121f] to-[#162032] border border-blue-900/50 p-4 flex items-center justify-between shadow-lg relative h-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
          <div className="relative z-10 flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="text-lg font-black text-blue-400">SKY</span>
              <span className="text-[10px] text-gray-500">✕</span>
              <span className="text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
                KSA 1727
              </span>
            </div>
            <h2 className="text-base font-bold text-white">عروض يوم التأسيس 💙</h2>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white w-fit h-7 text-[10px] rounded px-3 mt-1 border-none shadow-none">
              اضغط هنا
            </Button>
          </div>
          {/* CSS Abstract Character Art */}
          <div className="relative w-16 h-16 z-10 opacity-80">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute top-1 right-1 w-10 h-14 bg-gradient-to-b from-blue-400 to-indigo-600 rounded-full transform -rotate-12"></div>
            <div className="absolute top-2 left-2 w-8 h-12 bg-gradient-to-b from-emerald-400 to-teal-600 rounded-full transform rotate-12 mix-blend-screen"></div>
          </div>
        </section>

        {/* 4. BEST SELLERS */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">🏆</span>
            <h2 className="text-lg font-bold">الأكثر مبيعاً</h2>
          </div>
          
          <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar -mx-4 px-4 snap-x">
            {[
              { name: "FC 26", platform: "PS5", oldPrice: 140, newPrice: 69, grad: "from-teal-500 to-blue-600", category: "العاب سوني" },
              { name: "COD BO7", platform: "PS4", oldPrice: 140, newPrice: 49, grad: "from-gray-700 to-black", category: "العاب سوني" },
              { name: "GTA V", platform: "PS5", oldPrice: 120, newPrice: 59, grad: "from-orange-500 to-red-600", category: "العاب سوني" },
              { name: "UFC 5", platform: "PS5", oldPrice: 110, newPrice: 55, grad: "from-red-600 to-rose-900", category: "العاب سوني" },
              { name: "Hogwarts", platform: "PS4", oldPrice: 130, newPrice: 65, grad: "from-purple-600 to-indigo-900", category: "العاب سوني" },
              { name: "Minecraft", platform: "PS4/PC", oldPrice: 80, newPrice: 35, grad: "from-green-500 to-emerald-800", category: "العاب سوني" },
            ].map((game, i) => (
              <div key={i} className="w-40 shrink-0 rounded-xl overflow-hidden bg-[#1a1d26] border border-white/5 flex flex-col snap-start">
                {/* Cover Image Area */}
                <div className={`h-52 bg-gradient-to-br ${game.grad} relative p-2 flex flex-col justify-between overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
                  {/* Top badges */}
                  <div className="flex justify-between items-start relative z-10">
                    <div className="bg-yellow-500 text-black text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                      <Award className="w-2.5 h-2.5" />
                      ضمان ذهبي
                    </div>
                    <div className="flex flex-col gap-1">
                      <button className="w-6 h-6 bg-black/40 backdrop-blur rounded-full flex items-center justify-center">
                        <Heart className="w-3.5 h-3.5 text-white" />
                      </button>
                      <button className="w-6 h-6 bg-black/40 backdrop-blur rounded-full flex items-center justify-center">
                        <Eye className="w-3.5 h-3.5 text-white" />
                      </button>
                    </div>
                  </div>
                  {/* Title center */}
                  <div className="flex-1 flex items-center justify-center relative z-10">
                    <span className="text-xl font-black text-white drop-shadow-lg text-center leading-tight px-1">
                      {game.name}
                    </span>
                  </div>
                  {/* Bottom logos */}
                  <div className="flex justify-between items-end relative z-10">
                    <span className="text-[9px] font-black tracking-wider text-white drop-shadow">SKY</span>
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center border border-white/20">
                      <span className="text-[7px] font-bold text-white">PS</span>
                    </div>
                  </div>
                </div>
                
                {/* Details Area */}
                <div className="p-3 flex flex-col gap-1.5">
                  <span className="text-[10px] text-gray-400">{game.category}</span>
                  <h3 className="text-xs font-bold text-white line-clamp-1 h-4">{game.name} - {game.platform}</h3>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(star => (
                      <Star key={star} className="w-2.5 h-2.5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-blue-400 font-bold text-xs">{game.newPrice} ر.س</span>
                    <span className="text-gray-500 line-through text-[10px]">{game.oldPrice} ر.س</span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 h-7 mt-1.5 text-[11px] rounded py-1.5 border-none shadow-none text-white">
                    أضف للسلة 🛒
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. ENTER FUN WORLD */}
        <section className="rounded-2xl overflow-hidden bg-gradient-to-r from-blue-700 to-blue-900 h-28 relative flex items-center justify-center border border-blue-500/30 shadow-lg">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50"></div>
          <div className="relative z-10 text-center space-y-1">
            <h2 className="text-xl font-black text-white drop-shadow-md">انطلق نحو عالم ممتع</h2>
            <p className="text-xs text-blue-200">من الألعاب و الاشتراكات الرقمية</p>
          </div>
          <Gamepad2 className="absolute -left-4 -bottom-4 w-20 h-20 text-white/10 rotate-12" />
          <Award className="absolute -right-2 -top-2 w-14 h-14 text-white/10 -rotate-12" />
        </section>

        {/* 6. CATEGORIES GRID */}
        <section className="grid grid-cols-2 gap-3">
          {[
            { title: "العاب PS5", desc: "ضمان ذهبي", grad: "from-blue-600 to-blue-800" },
            { title: "العاب PS4", desc: "ضمان ذهبي", grad: "from-indigo-800 to-[#0d1222]" },
            { title: "بلس وخدمات السوني", desc: "سعر رهيب", grad: "from-slate-600 to-slate-800" },
            { title: "بكجات العاب PC", desc: "ضمان ذهبي", grad: "from-purple-600 to-indigo-700" },
            { title: "العاب PC", desc: "ضمان ذهبي", grad: "from-fuchsia-800 to-purple-900" },
            { title: "خدمات و منتجات PC", desc: "سعر رهيب", grad: "from-sky-500 to-blue-700" },
          ].map((cat, i) => (
            <div key={i} className={`h-36 rounded-2xl bg-gradient-to-br ${cat.grad} p-4 flex flex-col justify-end relative overflow-hidden group`}>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              <div className="relative z-10">
                <span className="text-[9px] font-black text-white/70 mb-1 block">SKY STORE</span>
                <h3 className="font-bold text-white text-sm leading-tight mb-1">{cat.title}</h3>
                <span className="text-[10px] text-blue-200 mb-2 block">{cat.desc}</span>
                <span className="bg-white/20 backdrop-blur-sm text-white text-[9px] px-3 py-1 rounded-full w-fit block border border-white/10">
                  اضغط هنا
                </span>
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
            </div>
          ))}
          {/* Full width category */}
          <div className="col-span-2 h-36 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-700 p-4 flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <span className="text-[9px] font-black text-white/70 mb-1 block">SKY STORE</span>
              <h3 className="font-bold text-white text-base leading-tight mb-1">عملات الألعاب</h3>
              <span className="text-[10px] text-amber-200 mb-2 block">شحن فوري</span>
              <span className="bg-white/20 backdrop-blur-sm text-white text-[9px] px-4 py-1.5 rounded-full w-fit block border border-white/10">
                اضغط هنا
              </span>
            </div>
            {/* CSS coins decoration */}
            <div className="absolute top-4 left-6 w-12 h-12 rounded-full bg-yellow-400 border-4 border-yellow-500 flex items-center justify-center shadow-lg transform rotate-12">
              <span className="text-yellow-600 font-bold text-xl">$</span>
            </div>
            <div className="absolute top-10 left-16 w-8 h-8 rounded-full bg-yellow-400 border-2 border-yellow-500 flex items-center justify-center shadow-lg transform -rotate-12 blur-[1px]">
              <span className="text-yellow-600 font-bold text-sm">$</span>
            </div>
          </div>
        </section>

        {/* 7. WHY US */}
        <section className="space-y-4 pt-2">
          <h2 className="text-base font-bold text-center mb-4">ما يميزنا عن غيرنا؟ عالم المنتجات الرقمية</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#151923] p-3 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-xs">ضمان سكاي الذهبي</h3>
              <p className="text-[10px] text-gray-400 leading-tight">ضمان استبدال فوري لجميع منتجاتنا</p>
            </div>
            
            <div className="bg-[#151923] p-3 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Headphones className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-xs">لأنك تستحق الأفضل</h3>
              <p className="text-[10px] text-gray-400 leading-tight">دعم فني متواصل 24/7 لخدمتكم</p>
            </div>
            
            <div className="bg-[#151923] p-3 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-xs">ادفع وانت مرتاح</h3>
              <p className="text-[10px] text-gray-400 leading-tight">طرق دفع متعددة وآمنة 100%</p>
            </div>
            
            <div className="bg-[#151923] p-3 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-xs">تسوق بأمان</h3>
              <p className="text-[10px] text-gray-400 leading-tight">جميع منتجاتنا رسمية وموثوقة</p>
            </div>
          </div>
        </section>

        {/* 8. BRANDS */}
        <section className="bg-[#151923] border border-white/5 rounded-2xl p-4 space-y-3">
          <h2 className="text-xs font-bold text-center text-gray-300">العلامات التجارية</h2>
          <div className="flex justify-center items-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all">
            <span className="font-black text-lg tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Canva
            </span>
            <div className="flex items-center gap-1 text-green-500">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-[#151923] rounded-full"></div>
              </div>
              <span className="font-bold text-base">Spotify</span>
            </div>
            <span className="font-black text-lg text-red-600 tracking-tighter uppercase">
              NETFLIX
            </span>
          </div>
        </section>

        {/* 9. TESTIMONIALS */}
        <section className="space-y-4 pt-2">
          <h2 className="text-base font-bold text-blue-400 text-center">قالوا عن Sky Store</h2>
          <div className="flex overflow-x-auto gap-3 pb-4 no-scrollbar -mx-4 px-4 snap-x">
            {[
              { name: "عبدالله السالم", comment: "أفضل متجر تعاملت معهم، سرعة في التنفيذ ومصداقية" },
              { name: "محمد العتيبي", comment: "أسعارهم جداً ممتازة والدعم الفني سريع بالرد" },
              { name: "خالد الشمري", comment: "شريت منهم حساب بلس وشغال زي العسل، شكراً لكم" },
            ].map((test, i) => (
              <div key={i} className="w-56 shrink-0 bg-[#151923] border border-white/5 rounded-2xl p-4 snap-center">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs">{test.name}</h4>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-2.5 h-2.5 fill-yellow-500 text-yellow-500" />)}
                    </div>
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 leading-relaxed">"{test.comment}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* 10. NEWSLETTER */}
        <section className="bg-gradient-to-r from-[#162032] to-[#0d121f] rounded-2xl p-5 border border-blue-900/30 text-center space-y-3 shadow-lg">
          <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto text-blue-400">
            <Send className="w-5 h-5 -ml-1" />
          </div>
          <div>
            <h2 className="text-base font-bold">كن أول من يعرف!</h2>
            <p className="text-[10px] text-gray-400 mt-1">اشترك في النشرة البريدية ليصلك كل جديد وعروض حصرية</p>
          </div>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="البريد الإلكتروني" 
              className="flex-1 bg-[#0d0f14] border border-white/10 rounded-lg px-3 text-xs focus:outline-none focus:border-blue-500 text-right h-9"
              dir="rtl"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 h-9 px-4 rounded-lg font-bold text-xs border-none shadow-none text-white">
              اشترك
            </Button>
          </div>
        </section>
      </main>

      {/* 11. FOOTER */}
      <footer className="mt-10 bg-[#0a0c10] border-t border-white/5 pt-8 pb-12 px-4 text-center space-y-6">
        <button 
          onClick={scrollToTop}
          className="flex items-center justify-center gap-2 mx-auto text-xs text-gray-400 hover:text-white transition-colors"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          العودة إلى أعلى
        </button>

        <div className="flex justify-center gap-4">
          <div className="w-9 h-9 rounded-full bg-[#151923] flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#1d2331] transition-colors cursor-pointer border border-white/5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.64-5.46-.23-2.24.81-4.52 2.53-5.9 1.68-1.36 3.99-1.8 6.13-1.43V14.2c-1.37-.21-2.82.02-3.95.83-.98.66-1.61 1.77-1.66 2.95-.08 1.25.61 2.51 1.68 3.13 1.05.62 2.37.7 3.48.24 1.48-.56 2.36-2.12 2.34-3.72-.03-4.71-.02-9.42-.02-14.13.01-.5-.01-1-.02-1.5z"/>
            </svg>
          </div>
          <div className="w-9 h-9 rounded-full bg-[#151923] flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#1d2331] transition-colors cursor-pointer border border-white/5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </div>
          <div className="w-9 h-9 rounded-full bg-[#151923] flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#1d2331] transition-colors cursor-pointer border border-white/5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.905a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2">
          <div className="relative flex items-center justify-center w-5 h-5">
            <Gamepad2 className="w-4 h-4 text-blue-500" />
          </div>
          <span className="text-lg font-black tracking-widest text-white">SKY STORE</span>
        </div>

        <div className="grid grid-cols-2 text-xs text-gray-400 gap-y-2 max-w-[250px] mx-auto">
          <a href="#" className="hover:text-blue-400 transition-colors">الشروط والأحكام</a>
          <a href="#" className="hover:text-blue-400 transition-colors">سياسة الخصوصية</a>
          <a href="#" className="hover:text-blue-400 transition-colors">الاسترجاع والاستبدال</a>
          <a href="#" className="hover:text-blue-400 transition-colors">من نحن</a>
        </div>

        <div className="space-y-3 border-t border-white/5 pt-5 max-w-[250px] mx-auto">
          <h4 className="text-xs font-bold text-white">خدمة العملاء</h4>
          <div className="flex justify-center gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all">
              <MessageSquare className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-sky-500/10 text-sky-400 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all">
              <Send className="w-4 h-4 -ml-0.5" />
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center gap-1.5 text-[10px] text-gray-500 bg-[#151923] w-fit mx-auto px-3 py-1.5 rounded-lg border border-white/5">
          <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
          <span>وثيقة العمل الحر FL-9834752</span>
        </div>

        <div className="flex justify-center items-center gap-1.5 flex-wrap">
          <div className="bg-white px-1.5 py-0.5 rounded w-10 h-6 flex items-center justify-center">
            <span className="text-black font-bold text-[8px]">mada</span>
          </div>
          <div className="bg-white px-1.5 py-0.5 rounded w-10 h-6 flex items-center justify-center">
            <div className="flex">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 -ml-1.5 mix-blend-multiply"></div>
            </div>
          </div>
          <div className="bg-white px-1.5 py-0.5 rounded w-10 h-6 flex items-center justify-center">
            <span className="text-[#1a1f71] font-bold italic text-[8px]">VISA</span>
          </div>
          <div className="bg-black border border-gray-700 px-1.5 py-0.5 rounded w-10 h-6 flex items-center justify-center">
            <span className="text-white font-bold text-[8px]">Pay</span>
          </div>
        </div>

        <div className="pt-4 border-t border-white/5 text-[10px] text-gray-500 flex flex-col items-center gap-1.5">
          <div className="flex items-center gap-1">
            <span>صنع بإتقان على منصة</span>
            <span className="text-teal-400 font-bold">سلة</span>
          </div>
          <p>© 2024 Sky Store. جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </div>
  );
}
