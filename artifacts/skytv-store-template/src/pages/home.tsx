import React, { useState, useEffect } from 'react';
import { 
  Star, Search, ShoppingCart, User, ChevronLeft, 
  Tv, PlaySquare, Gamepad2, Smartphone, Music, 
  CheckCircle, Zap, Headphones, ShieldCheck, 
  Facebook, Twitter, Instagram, Youtube, Menu, X, MonitorPlay
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Timer state for special offer
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 15, seconds: 30 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      dir="rtl" 
      className="min-h-screen text-slate-200 overflow-x-hidden"
      style={{ 
        backgroundColor: '#0a0a0f',
        fontFamily: "'Tajawal', 'Cairo', sans-serif" 
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Tajawal:wght@400;500;700;800&display=swap');
          
          .glass-nav {
            background: rgba(10, 10, 15, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom: 1px solid #1a1a2e;
          }
          
          .gradient-text {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .gradient-bg {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          }
          
          .hover-glow:hover {
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
            border-color: rgba(99, 102, 241, 0.5);
            transform: translateY(-4px);
          }
          
          .hero-radial {
            background: radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.15) 0%, rgba(10, 10, 15, 1) 60%);
          }
          
          .card-bg {
            background-color: #0d0d1a;
            border-color: #1a1a2e;
          }
        `}
      </style>

      {/* 1. Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl gradient-bg shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                <Star className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                سكاي <span className="text-indigo-400">ستور</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-indigo-400 font-medium transition-colors">الرئيسية</a>
              <a href="#products" className="text-slate-300 hover:text-indigo-400 font-medium transition-colors">المنتجات</a>
              <a href="#offers" className="text-slate-300 hover:text-indigo-400 font-medium transition-colors">العروض</a>
              <a href="#contact" className="text-slate-300 hover:text-indigo-400 font-medium transition-colors">تواصل معنا</a>
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-4">
              <button className="p-2 text-slate-300 hover:text-white transition-colors relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-4 h-4 text-[10px] font-bold bg-indigo-500 text-white rounded-full flex items-center justify-center">2</span>
              </button>
              <Button className="gradient-bg border-0 text-white hover:opacity-90 transition-opacity gap-2 rounded-full px-6">
                <User className="w-4 h-4" />
                سجل دخول
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-slate-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-nav border-t border-[#1a1a2e] py-4 px-4 flex flex-col gap-4">
            <a href="#" className="text-indigo-400 font-medium p-2 rounded-lg bg-[#1a1a2e]/50">الرئيسية</a>
            <a href="#products" className="text-slate-300 font-medium p-2">المنتجات</a>
            <a href="#offers" className="text-slate-300 font-medium p-2">العروض</a>
            <a href="#contact" className="text-slate-300 font-medium p-2">تواصل معنا</a>
            <div className="flex gap-4 mt-2 pt-4 border-t border-[#1a1a2e]">
              <Button className="flex-1 gradient-bg text-white border-0">سجل دخول</Button>
              <Button variant="outline" className="border-[#1a1a2e] text-slate-300 bg-transparent">سلة التسوق (2)</Button>
            </div>
          </div>
        )}
      </nav>

      {/* 2. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden hero-radial">
        {/* Background decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500/20 px-4 py-1.5 rounded-full text-sm font-medium">
            🔥 أضخم التخفيضات لموسم 2024
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            عالم الترفيه <span className="gradient-text">بين يديك</span> 🎬
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            احصل على أفضل الاشتراكات الرقمية وخدمات البث بجودة عالية وأسعار مناسبة. 
            كل ما تحتاجه من ترفيه في مكان واحد.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gradient-bg border-0 text-white rounded-full px-8 py-6 text-lg font-bold hover:scale-105 transition-transform w-full sm:w-auto">
              تصفح المنتجات
              <ChevronLeft className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 hover:text-indigo-200 rounded-full px-8 py-6 text-lg font-medium w-full sm:w-auto bg-transparent backdrop-blur-sm">
              العروض الحالية
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-sm text-slate-400">
            <div className="flex -space-x-3 space-x-reverse">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0a0f] bg-slate-800 flex items-center justify-center overflow-hidden">
                  <User className="w-5 h-5 text-slate-500" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-[#0a0a0f] bg-indigo-900 flex items-center justify-center text-indigo-300 font-bold text-xs">
                +99
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center text-yellow-500 mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span>أكثر من 100K+ عميل يثق بنا</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats Strip */}
      <section className="border-y border-[#1a1a2e] bg-[#0d0d1a]/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x md:divide-x-reverse divide-[#1a1a2e]">
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-2">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">+50,000</h3>
              <p className="text-slate-400 text-sm">عميل سعيد</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-2">
                <Tv className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">+500</h3>
              <p className="text-slate-400 text-sm">منتج رقمي</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-2">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">24/7</h3>
              <p className="text-slate-400 text-sm">دعم فني متواصل</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-2">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">100%</h3>
              <p className="text-slate-400 text-sm">ضمان استرداد</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Categories */}
      <section className="py-20" id="categories">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">تصفح حسب <span className="gradient-text">الفئة</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">اختر من بين تشكيلتنا الواسعة من الاشتراكات والخدمات الرقمية</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { id: 1, name: "IPTV", icon: MonitorPlay, count: 120, color: "text-blue-400", bg: "bg-blue-500/10" },
              { id: 2, name: "بث مباشر", icon: PlaySquare, count: 85, color: "text-red-400", bg: "bg-red-500/10" },
              { id: 3, name: "ألعاب", icon: Gamepad2, count: 210, color: "text-purple-400", bg: "bg-purple-500/10" },
              { id: 4, name: "تطبيقات", icon: Smartphone, count: 64, color: "text-emerald-400", bg: "bg-emerald-500/10" },
              { id: 5, name: "موسيقى", icon: Music, count: 42, color: "text-pink-400", bg: "bg-pink-500/10" },
            ].map(cat => (
              <div key={cat.id} className="card-bg border rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover-glow group">
                <div className={`w-16 h-16 rounded-2xl ${cat.bg} flex items-center justify-center ${cat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <cat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{cat.name}</h3>
                <p className="text-sm text-slate-500">{cat.count} منتج</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Products */}
      <section className="py-20 bg-[#0d0d1a]/30" id="products">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">منتجات <span className="gradient-text">مميزة</span></h2>
              <p className="text-slate-400">أفضل الباقات والاشتراكات مبيعاً لدينا</p>
            </div>
            <Button variant="outline" className="hidden md:flex border-[#1a1a2e] bg-transparent text-slate-300 hover:text-white hover:bg-[#1a1a2e]">
              عرض الكل
              <ChevronLeft className="w-4 h-4 mr-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                name: "Prime Show اشتراك سنوي",
                desc: "وصول غير محدود لأكثر من 10,000 فيلم ومسلسل بدقة 4K",
                price: 34,
                oldPrice: 59,
                badge: "خصم 42%",
                badgeColor: "bg-red-500 text-white",
                icon: Tv
              },
              {
                id: 2,
                name: "IPTV Pro",
                desc: "أكثر من 8000 قناة عربية وعالمية رياضية وترفيهية",
                price: 15,
                period: "شهري",
                badge: "الأكثر مبيعاً",
                badgeColor: "bg-yellow-500 text-black",
                icon: MonitorPlay
              },
              {
                id: 3,
                name: "Netflix Premium",
                desc: "اشتراك رسمي مضمون لمدة شهر كامل دقة عالية",
                price: 20,
                period: "شهري",
                badge: "جديد",
                badgeColor: "bg-indigo-500 text-white",
                icon: PlaySquare
              },
              {
                id: 4,
                name: "OSN+ سنوي",
                desc: "استمتع بأحدث إصدارات HBO والمسلسلات الحصرية",
                price: 45,
                oldPrice: 60,
                badge: "توفير 15€",
                badgeColor: "bg-emerald-500 text-white",
                icon: PlaySquare
              },
              {
                id: 5,
                name: "Shahid VIP",
                desc: "باقة الرياضة والترفيه الشاملة بدون إعلانات",
                price: 12,
                period: "شهري",
                icon: Star
              },
              {
                id: 6,
                name: "باقة الألعاب الشاملة",
                desc: "اشتراكات Game Pass و PS Plus بأسعار مخفضة",
                price: 25,
                period: "شهري",
                badge: "قريباً تنتهي",
                badgeColor: "bg-orange-500 text-white",
                icon: Gamepad2
              }
            ].map(product => (
              <div key={product.id} className="card-bg border rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover-glow group">
                <div className="h-48 bg-gradient-to-br from-slate-800 to-[#0a0a0f] relative flex items-center justify-center p-6 border-b border-[#1a1a2e]">
                  {product.badge && (
                    <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full ${product.badgeColor}`}>
                      {product.badge}
                    </span>
                  )}
                  <product.icon className="w-20 h-20 text-indigo-400/50 group-hover:scale-110 group-hover:text-indigo-400 transition-all duration-500" />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-sm text-slate-400 mb-6 flex-grow">{product.desc}</p>
                  
                  <div className="flex items-end justify-between mt-auto">
                    <div>
                      {product.oldPrice && (
                        <span className="text-sm text-slate-500 line-through block mb-1">{product.oldPrice}€</span>
                      )}
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-indigo-400">{product.price}€</span>
                        {product.period && <span className="text-slate-500 text-sm">/ {product.period}</span>}
                      </div>
                    </div>
                    
                    <Button className="gradient-bg text-white border-0 hover:opacity-90 rounded-xl px-4 py-2 h-auto font-medium">
                      اشتري الآن
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" className="w-full border-[#1a1a2e] bg-transparent text-slate-300">
              عرض كل المنتجات
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Special Offers (Banner) */}
      <section className="py-12" id="offers">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 opacity-90"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50"></div>
            
            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-right flex-1">
                <Badge className="bg-white/20 text-white border-0 mb-4 hover:bg-white/30 px-3 py-1 backdrop-blur-sm">عرض محدود الزمن</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  اشترك الآن واحصل على <span className="text-yellow-400">خصم 40%</span> على جميع الباقات السنوية
                </h2>
                <p className="text-indigo-100 text-lg">استخدم كود الخصم <span className="bg-white/20 px-2 py-1 rounded font-mono font-bold tracking-widest">SKY40</span> عند الدفع</p>
              </div>
              
              <div className="flex flex-col items-center gap-6 bg-[#0a0a0f]/40 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <div className="text-white text-sm font-medium mb-1">ينتهي العرض خلال:</div>
                <div className="flex items-center gap-3 text-white font-mono text-3xl font-bold">
                  <div className="flex flex-col items-center">
                    <div className="bg-[#0a0a0f]/60 w-16 h-16 rounded-xl flex items-center justify-center border border-white/10">{timeLeft.hours.toString().padStart(2, '0')}</div>
                    <span className="text-xs text-indigo-200 mt-2 font-sans">ساعة</span>
                  </div>
                  <span className="text-indigo-300 pb-6">:</span>
                  <div className="flex flex-col items-center">
                    <div className="bg-[#0a0a0f]/60 w-16 h-16 rounded-xl flex items-center justify-center border border-white/10">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                    <span className="text-xs text-indigo-200 mt-2 font-sans">دقيقة</span>
                  </div>
                  <span className="text-indigo-300 pb-6">:</span>
                  <div className="flex flex-col items-center">
                    <div className="bg-[#0a0a0f]/60 w-16 h-16 rounded-xl flex items-center justify-center border border-white/10 text-yellow-400">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                    <span className="text-xs text-indigo-200 mt-2 font-sans">ثانية</span>
                  </div>
                </div>
                <Button className="w-full bg-white text-indigo-900 hover:bg-gray-100 font-bold text-lg h-12 rounded-xl">
                  احصل على العرض الآن
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Features */}
      <section className="py-20 bg-[#0d0d1a]/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "تفعيل فوري", desc: "استلم بيانات اشتراكك فور إتمام عملية الدفع مباشرة", icon: Zap, color: "from-yellow-400 to-orange-500" },
              { title: "جودة 4K & FHD", desc: "استمتع بمشاهدة برامجك المفضلة بأعلى جودة ممكنة", icon: Tv, color: "from-blue-400 to-indigo-500" },
              { title: "دعم فني 24/7", desc: "فريق متخصص متواجد على مدار الساعة لمساعدتك", icon: Headphones, color: "from-emerald-400 to-teal-500" },
              { title: "ضمان الاسترداد", desc: "نضمن لك استرجاع أموالك إذا لم تعجبك الخدمة", icon: ShieldCheck, color: "from-purple-400 to-pink-500" }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 border border-[#1a1a2e] rounded-2xl bg-[#0a0a0f]/50 hover:border-indigo-500/30 transition-colors">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="pt-20 pb-10 border-t border-[#1a1a2e] bg-[#0a0a0f]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg gradient-bg">
                  <Star className="w-4 h-4 text-white fill-white" />
                </div>
                <span className="text-2xl font-bold tracking-tight text-white">
                  سكاي <span className="text-indigo-400">ستور</span>
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                الوجهة الأولى للاشتراكات الرقمية وخدمات البث المباشر. نقدم أفضل الخدمات بأفضل الأسعار مع دعم فني متميز.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white transition-all"><Youtube className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6">روابط سريعة</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2"><ChevronLeft className="w-4 h-4" /> الرئيسية</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2"><ChevronLeft className="w-4 h-4" /> المنتجات</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2"><ChevronLeft className="w-4 h-4" /> العروض الخاصة</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2"><ChevronLeft className="w-4 h-4" /> الأسئلة الشائعة</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6">المنتجات</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2"><ChevronLeft className="w-4 h-4" /> اشتراكات IPTV</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2"><ChevronLeft className="w-4 h-4" /> منصات البث</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2"><ChevronLeft className="w-4 h-4" /> بطاقات الألعاب</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2"><ChevronLeft className="w-4 h-4" /> برامج وتطبيقات</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6">تواصل معنا</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-indigo-400"><Headphones className="w-5 h-5" /></div>
                  <div>
                    <div className="text-white text-sm font-medium mb-1">الدعم الفني</div>
                    <div className="text-slate-400 text-sm dir-ltr text-right">+966 50 123 4567</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-indigo-400"><CheckCircle className="w-5 h-5" /></div>
                  <div>
                    <div className="text-white text-sm font-medium mb-1">البريد الإلكتروني</div>
                    <div className="text-slate-400 text-sm">support@skystore.com</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#1a1a2e] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center md:text-right">
              &copy; 2024 سكاي ستور. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-8 w-12 bg-slate-800 rounded flex items-center justify-center text-[10px] font-bold text-slate-400">VISA</div>
              <div className="h-8 w-12 bg-slate-800 rounded flex items-center justify-center text-[10px] font-bold text-slate-400">MASTER</div>
              <div className="h-8 w-12 bg-slate-800 rounded flex items-center justify-center text-[10px] font-bold text-slate-400">PAYPAL</div>
              <div className="h-8 w-12 bg-slate-800 rounded flex items-center justify-center text-[10px] font-bold text-slate-400">APPLE</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
