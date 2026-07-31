import React, { useState, useEffect } from 'react';

function App() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const hiddenElements = document.querySelectorAll('.animate-hidden, .animate-hidden-left, .animate-hidden-right, .animate-hidden-scale');
    hiddenElements.forEach((el) => observer.observe(el));

    // Scroll to top button visibility
    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry Data Submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="font-sans text-gray-100 min-h-screen mesh-bg">

      {/* ============================================ */}
      {/* 1. HEADER - Professional Dark Navy Theme */}
      {/* ============================================ */}
      <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-3">
            {/* Logo / Agency Name */}
            <div className="flex items-center space-x-3 group">
              <div className="bg-white text-blue-900 font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center shadow group-hover:scale-110 transition-transform duration-300">
                HP
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold tracking-wide leading-tight">ADARSH HP GAS GRAMIN VITRAK</h1>
                <p className="text-[10px] sm:text-xs text-blue-200 font-medium">Authorized HP Gas Distributor</p>
              </div>
            </div>

            {/* Desktop Nav - Enhanced Links */}
            <nav className="hidden md:flex items-center space-x-1">
              <a href="#home" className="nav-link">Home</a>
              <a href="#owner-contact" className="nav-link">Contact Owner</a>
              <a href="#gas-rate" className="nav-link">Gas Rate</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#services" className="nav-link">Service</a>
              <a href="#gallery" className="nav-link">Gallery</a>
              <a href="#booking" className="nav-link">Quick Book</a>
              <a href="#enquiry" className="nav-link">Enquiry</a>
            </nav>

            {/* Mobile Menu Toggle - Enhanced */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-white/20 transition-all duration-300 focus:outline-none"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
                  <span className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
                </div>
              </button>
            </div>
{/* Mobile Menu */}
          <div className={`mobile-menu md:hidden ${mobileMenuOpen ? 'open' : ''}`}>
            <div className="bg-white/10 backdrop-blur-xl border-t border-white/10 px-4 py-3 space-y-1">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-white font-medium hover:bg-white/20 transition-all">Home</a>
              <a href="#owner-contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-white font-medium hover:bg-white/20 transition-all">Contact Owner</a>
              <a href="#gas-rate" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-white font-medium hover:bg-white/20 transition-all">Gas Rate</a>
              <a href="#owner-contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-white font-medium hover:bg-white/20 transition-all">Contact Owner</a>
              <a href="#gas-rate" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-white font-medium hover:bg-white/20 transition-all">Gas Rate</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-white font-medium hover:bg-white/20 transition-all">About</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-white font-medium hover:bg-white/20 transition-all">Service</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-white font-medium hover:bg-white/20 transition-all">Gallery</a>
              <a href="#booking" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-white font-medium hover:bg-white/20 transition-all">Quick Book</a>
              <a href="#enquiry" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-white font-medium hover:bg-white/20 transition-all">Enquiry</a>
            </div>
          </div>
          </div>
        </div>
      </header>



      {/* ============================================ */}
      {/* 2. HERO SECTION - DARK THEME */}
      {/* ============================================ */}
      <section id="home" className="relative overflow-hidden dark-section text-white">
        <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <span className="inline-block bg-slate-800/80 text-orange-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm border border-orange-500/30 animate-pulse">
                ★ HP Gas Authorized Distributor
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                Aapki Rasoi Ka <span className="text-orange-400">Bharosa</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed max-w-lg">
                ADARSH HP GAS GRAMIN VITRAK — Naye connection, cylinder booking aur gas se related har samasya ka samadhan. Hum hain aapke 24x7.<br></br><span className="text-2xl text-orange-400  font-semibold  mb-4   animate-pulse"> Abhi Call Karee 👉 9956612199</span>
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a href="#enquiry" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-7 py-3 rounded-full font-bold shadow-xl hover:from-orange-700 hover:to-red-700 transition-all hover:scale-105 btn-ripple">
                  📝 Online Enquiry Karein
                </a>
                <a href="https://wa.me/9956612199?text=Namaskar!%20Mujhe%20HP%20Gas%20ke%20baare%20mein%20jaankari%20chahiye." target="_blank" rel="noreferrer" className="bg-green-600 text-white px-7 py-3 rounded-full font-bold shadow-xl hover:bg-green-700 transition-all hover:scale-105">
                  💬 WhatsApp Karein
                </a>
                <a href="#owner-contact" className="bg-gray-900 backdrop-blur-sm border border-slate-600 text-gray-200 px-7 py-3 rounded-full font-semibold hover:bg-slate-600/80 transition-all">
                  👤 Owner Se Baat Karein
                </a>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto md:mx-0">
                <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-3 border border-slate-700 animate-hidden animate-visible delay-200">
                  <p className="text-xl sm:text-2xl font-bold counter-value text-orange-400">15+</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">Years Experience</p>
                </div>
                <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-3 border border-slate-700 animate-hidden animate-visible delay-400">
                  <p className="text-xl sm:text-2xl font-bold counter-value text-orange-400">8000+</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">Happy Customers</p>
                </div>
                <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-3 border border-slate-700 animate-hidden animate-visible delay-600">
                  <p className="text-xl sm:text-2xl font-bold counter-value text-orange-400">24/7</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">Service Support</p>
                </div>
              </div>
            </div>

            {/* RIGHT: Owner + Agency + Location Cards */}
            <div className="space-y-4">
              {/* Owner Card - WITH ACTUAL IMAGE */}
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-700 shadow-2xl hover:bg-slate-700/80 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-orange-500 ring-offset-2 ring-offset-slate-800 flex-shrink-0 shadow-lg">
                    <img
                      src="owner2.jpeg"
                      alt="Mr. Shivbalak Singh - Owner"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-orange-400 font-medium">Proprietor / Owner</p>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Mr. Shivbalak Singh</h3>
                    <p className="text-sm text-gray-400">📍 Semra, Hata Road, Kaptainganj</p>
                    <div className="flex gap-2 mt-2">
                      <a href="tel:9956612199" className="inline-flex items-center text-xs bg-slate-700 text-gray-300 px-3 py-1 rounded-full hover:bg-slate-600 transition">
                        📞 Call
                      </a>
                      <a href="https://wa.me/919956612199?text=Namaskar%20Sir!%20Mujhe%20HP%20Gas%20ke%20baare%20mein%20jaankari%20chahiye." target="_blank" rel="noreferrer" className="inline-flex items-center text-xs bg-green-600/60 text-gray-200 px-3 py-1 rounded-full hover:bg-green-600/80 transition">
                        💬 WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Agency Card */}
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-700 shadow-2xl hover:bg-slate-700/80 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/40 to-blue-600/40 flex items-center justify-center text-xl flex-shrink-0 shadow">
                    🏢
                  </div>
                  <div>
                    <p className="text-xs text-orange-400 font-medium">Agency</p>
                    <h3 className="text-lg font-bold text-white">ADARSH HP GAS GRAMIN VITRAK</h3>
                    <p className="text-sm text-gray-400">Authorized HP Gas Distributor • Kaptainganj, Kushinagar</p>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-700 shadow-2xl hover:bg-slate-700/80 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/40 to-emerald-600/40 flex items-center justify-center text-xl flex-shrink-0 shadow">
                    📍
                  </div>
                  <div>
                    <p className="text-xs text-orange-400 font-medium">Agency Location</p>
                    <h3 className="text-lg font-bold text-white">Semara, Hata Road</h3>
                    <p className="text-sm text-gray-400">Kaptainganj, Uttar Pradesh — 274301</p>
                    <a
                      href="https://www.google.com/maps/place/Adarsh+Hp+Gas/@26.902957,83.7274263,17z/data=!3m1!4b1!4m6!3m5!1s0x3993fbadf22812a3:0x7d664bad5691a94b!8m2!3d26.902957!4d83.7300012!16s%2Fg%2F11fjb4wgfw?entry=ttu&g_ep=EgoyMDI2MDcyOC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center mt-2 text-xs bg-slate-700 text-gray-300 px-3 py-1.5 rounded-full hover:bg-slate-600 transition"
                    >
                      🗺️ View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 3. OWNER CONTACT SECTION — Talk to Owner Directly */}
      {/* ============================================ */}
<section id="owner-contact" className="py-16 sm:py-20 dark-section">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 animate-hidden">
            <span className="text-orange-400 font-semibold text-sm tracking-widest uppercase">Contact Owner</span>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mt-2">Owner Se Seedha Baat Karein</h3>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-lg mx-auto">Koi bhi samasya ho, aap directly owner se baat kar sakte hain</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* LEFT: Owner Photo */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-500/20 rounded-full blur-2xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="owner2.jpeg"
                    alt="Mr. Shivbalak Singh - Owner Adarsh HP Gas"
                    className="w-full h-full object-cover aspect-[4/5]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <p className="text-white font-bold text-xl">Mr. Shivbalak Singh</p>
                    <p className="text-orange-200 text-sm">Proprietor — ADARSH HP GAS GRAMIN VITRAK</p>
                  </div>
                </div>
                {/* Experience Badge */}
                <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-xl border-4 border-white">
                  <span className="text-lg font-bold">15+</span>
                  <span className="text-[8px] font-semibold">YEARS</span>
                </div>
              </div>

              {/* RIGHT: Contact Options */}
              <div className="space-y-6">
                {/* Intro Text */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border border-orange-100">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold text-orange-600">Mr. Shivbalak Singh</span> <span className=" text-black-600 ">(Proprietor)</span> <br></br>
                    aapki har gas-related samasya ke liye personally available hain. 
                    Chahe naya connection ho, cylinder delivery mein deri ho, ya koi aur sawaal — aap 
                    seedhe ham  se sampark kar sakte hain.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {/* Call Card */}
                  <a href="tel:7080249062" className="block bg-white rounded-2xl p-5 shadow-lg border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all group hover:-translate-y-1">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                        📞
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 font-medium">Call Karein</p>
                        <p className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">9956612199</p>
                        <p className="text-xs text-gray-400">👇 Click karke directly call karein</p>
                      </div>
                      <div className="text-green-500 group-hover:translate-x-1 transition-transform">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </div>
                    </div>
                  </a>

                  {/* WhatsApp Card */}
                  <a href="https://wa.me/919956612199?text=Namaskar%20Sir!%20Mujhe%20HP%20Gas%20ke%20baare%20mein%20jaankari%20chahiye." target="_blank" rel="noreferrer" className="block bg-white rounded-2xl p-5 shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all group hover:-translate-y-1">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                        💬
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 font-medium">WhatsApp Karein</p>
                        <p className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">9956612199</p>
                        <p className="text-xs text-gray-400">👇 Click karke WhatsApp par baat karein</p>
                      </div>
                      <div className="text-green-500 group-hover:translate-x-1 transition-transform">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </div>
                    </div>
                  </a>

                  {/* Office Card */}
                  <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-2xl shadow-lg flex-shrink-0">
                        🏪
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Office Hours</p>
                        <p className="text-lg font-bold text-gray-800">Monday - Saturday</p>
                        <p className="text-sm text-gray-500">Subah 9:00 AM — Shaam 7:00 PM</p>
                        <p className="text-xs text-gray-400 mt-1">Agency par aakar bhi mil sakte hain</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Message Button */}
                <a href="#enquiry" className="block w-full text-center bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:from-orange-600 hover:to-red-700 transition-all hover:scale-[1.02]">
                  📝 Ya Phir Online Enquiry Form Bharein
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. GAS CURRENT RATE SECTION */}
      {/* ============================================ */}
<section id="gas-rate" className="py-16 sm:py-20 dark-section">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 animate-hidden">
            <span className="text-orange-400 font-semibold text-sm tracking-widest uppercase">Current Price</span>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mt-2">Gas Cylinder Ke Current Rates</h3>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-lg mx-auto">Abhi ke latest rates dekhein aur turant booking karein</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 via-white to-yellow-50 rounded-3xl shadow-2xl border border-orange-200 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 sm:p-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-3xl">🔥</span>
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">CURRENT GAS RATES</span>
                  <span className="text-3xl">🔥</span>
                </div>
                <p className="text-orange-100 text-sm">ADARSH HP GAS GRAMIN VITRAK — Authorized HP Gas Distributor</p>
                <div className="mt-3 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Last Updated: {new Date().toLocaleDateString('hi-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
              </div>

              {/* Rate Cards */}
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Domestic 14.2 KG */}
                  <div className="bg-white  rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-all hover:-translate-y-1 group relative overflow-hidden ring-2 ring-orange-500 ring-offset-2">
                    
                    <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                        🏠
                      </div>
                      <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Domestic</p>
                      <h4 className="text-xl font-bold text-gray-800 mt-1">14.2 KG</h4>
                      <div className="absolute -top-3 -right-3 bg-yellow-400 text-red-700 text-[10px] font-bold px-3 py-1 rounded-full shadow-lg z-20">
                      ⭐ MOST POPULAR
                    </div>
                      <div className="my-4 py-3 border-t border-b border-orange-100">
                        <p className="text-3xl sm:text-4xl font-extrabold text-orange-600">₹1030</p>
                        <p className="text-xs text-gray-400 mt-1">Per Cylinder (Subsidized)</p>
                      </div>
                      <p className="text-xs text-gray-500">Naye connection ke liye bhi apply karein</p>
                      <a href="#booking" className="mt-4 inline-block w-full bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold py-2.5 rounded-xl hover:from-orange-600 hover:to-red-700 transition-all">
                        📞 Book Now
                      </a>
                       <a href="tel:7080249062" className="mt-4 inline-block w-full bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold py-2.5 rounded-xl hover:from-orange-600 hover:to-red-700 transition-all">
                        📞 Call Now: 7080249062
                      </a>
                    </div>
                  </div>

                  {/* Commercial 19 KG */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-all hover:-translate-y-1 group relative overflow-hidden ring-2 ring-orange-500 ring-offset-2">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                        🏪
                      </div>
                      <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Commercial</p>
                      <h4 className="text-xl font-bold text-gray-800 mt-1">19 KG</h4>
                      <div className="my-4 py-3 border-t border-b border-orange-100">
                        <p className="text-3xl sm:text-4xl font-extrabold text-orange-600">₹2,730</p>
                        <p className="text-xs text-gray-400 mt-1">Per Cylinder (Market Rate)</p>
                      </div>
                      <p className="text-xs text-gray-500">Hotels, Dhabas &amp; Restaurants ke liye</p>
                      <a href="tel:7080249062" className="mt-4 inline-block w-full bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold py-2.5 rounded-xl hover:from-orange-600 hover:to-red-700 transition-all">
                        📞 Call Now: 7080249062
                      </a>
                    </div>
                  </div>

                  {/* Commercial 47.5 KG */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-all hover:-translate-y-1 group relative overflow-hidden ring-2 ring-orange-500 ring-offset-2">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                        🏭
                      </div>
                      <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Small Commercial</p>
                      <h4 className="text-xl font-bold text-gray-800 mt-1">5 KG</h4>
                      <div className="my-4 py-3 border-t border-b border-orange-100">
                        <p className="text-3xl sm:text-4xl font-extrabold text-orange-600">₹620</p>
                        <p className="text-xs text-gray-400 mt-1">Per Cylinder (Market Rate)</p>
                      </div>
                      <p className="text-xs text-gray-500">small shop, permanent &amp; small Establishments</p>
                      <a href="tel:7080249062" className="mt-4 inline-block w-full bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold py-2.5 rounded-xl hover:from-orange-600 hover:to-red-700 transition-all">
                        📞 Call Now: 7080249062
                      </a>
                    </div>
                  </div>
                </div>

                {/* Note / Disclaimer */}
                <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
                  <p className="text-xs text-black">
                    👉 ⚠️ <span className="font-semibold ">Note:</span> Yeh rates approximate hain aur HP Gas company ke hisaab se badal sakte hain. 
                    Sahi rate ke liye agency se sampark karein. Last updated: {new Date().toLocaleDateString('hi-IN', { year: 'numeric', month: 'long', day: 'numeric' })}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 4. ABOUT AGENCY SECTION */}
      {/* ============================================ */}
<section id="about" className="py-16 sm:py-20 dark-section">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 animate-hidden">
            <span className="text-orange-400 font-semibold text-sm tracking-widest uppercase">About Us</span>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mt-2">Hamari Agency Ke Baare Mein</h3>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Owner Detail */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-700 hover:shadow-xl transition-all group hover:-translate-y-1 animate-hidden">
              <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform overflow-hidden">
                <img src="owner.jpeg" alt="Owner" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Owner / Proprietor</h4>
              <p className="text-gray-300 font-semibold">Mr. Shivbalak Singh</p>
              <p className="text-gray-400 text-sm mt-1">15+ years experience in HP Gas dealership. Dedicated to customer satisfaction aur behtareen service ke liye jaane jaate hain.</p>
              <div className="mt-3 pt-3 border-t border-slate-700">
                <p className="text-sm text-gray-400">📞 <a href="tel:7080249062" className="text-orange-400 font-medium hover:underline">7080249062</a></p>
                <p className="text-sm text-gray-400">💬 <a href="https://wa.me/919956612199" target="_blank" rel="noreferrer" className="text-green-400 font-medium hover:underline">9956612199</a></p>
              </div>
            </div>

            {/* Agency Info */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-700 hover:shadow-xl transition-all group hover:-translate-y-1 animate-hidden">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                🏪
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Agency Info</h4>
              <p className="text-gray-300 font-semibold">ADARSH HP GAS GRAMIN VITRAK</p>
              <p className="text-gray-400 text-sm mt-1">HP Gas se judi har zaroorat ke liye aapka bharose mand partner. Naye connection, cylinder booking, eKYC aur sahayata.</p>
              <div className="mt-3 pt-3 border-t border-slate-700">
                <p className="text-sm text-blue-400 font-medium">⭐ HP Gas Authorized Distributor</p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-700 hover:shadow-xl transition-all group hover:-translate-y-1 animate-hidden">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                📍
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Hum Yahan Hain</h4>
              <p className="text-gray-300 font-semibold">Semara, Hata Road</p>
              <p className="text-gray-400 text-sm mt-1">Kaptainganj, Uttar Pradesh — 274301</p>
              <a
                href="https://www.google.com/maps/place/Adarsh+Hp+Gas/@26.902957,83.7274263,17z/data=!3m1!4b1!4m6!3m5!1s0x3993fbadf22812a3:0x7d664bad5691a94b!8m2!3d26.902957!4d83.7300012!16s%2Fg%2F11fjb4wgfw?entry=ttu&g_ep=EgoyMDI2MDcyOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center mt-3 text-sm text-green-400 font-medium hover:text-green-300"
              >
                🗺️ Google Maps Par Dekhein →
              </a>
            </div>
          </div>

          {/* Owner Message */}
          <div className="mt-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 sm:p-10 text-white text-center shadow-xl animate-hidden">
            <p className="text-lg sm:text-xl italic font-light">"Mr. Shivbalak Singh — ADARSH HP GAS GRAMIN VITRAK ke saath hum aapki gas ki har zaroorat ko behtareen service aur vishwas ke saath poora karne ke liye pratibaddh hain."</p>
            <p className="mt-4 font-semibold">— Mr. Shivbalak Singh, Proprietor</p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 5. AGENCY PHOTO GALLERY + ADVERTISEMENT */}
      {/* ============================================ */}
<section id="gallery" className="py-16 sm:py-20 dark-section">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 animate-hidden">
            <span className="text-orange-400 font-semibold text-sm tracking-widest uppercase">Gallery &amp; Advertisement</span>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mt-2">Agency Photos &amp; Advertisements</h3>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-lg mx-auto">Hamari agency ke kuch photos aur advertisement jhankiyan</p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {/* Photo 1 - Agency Front */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group animate-hidden">
              <div className="h-56 bg-gradient-to-br from-orange-500/20 to-orange-600/20 relative overflow-hidden img-hover-zoom">
                <img
                  src="front.png"
                  alt="HP Gas Agency Front"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-slate-800/80">
                <p className="font-semibold text-white">🏪 Agency Front View</p>
                <p className="text-xs text-gray-400 mt-1">ADARSH HP GAS GRAMIN VITRAK, Semara</p>
              </div>
            </div>

            {/* Photo 2 - Cylinder Delivery */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group animate-hidden">
              <div className="h-56 bg-gradient-to-br from-blue-500/20 to-blue-600/20 relative overflow-hidden img-hover-zoom">
                <img
                  src="back.png"
                  alt="HP Gas Gramin Visit"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-slate-800/80">
                <p className="font-semibold text-white">🚶 Gramin Area Visit</p>
                <p className="text-xs text-gray-400 mt-1">Gramin logo se baat aur samasya ka samadhan</p>
              </div>
            </div>

            {/* Photo 3 - Owner */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group animate-hidden">
              <div className="h-56 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 relative overflow-hidden img-hover-zoom">
                <img
                  src="owner2.jpeg"
                  alt="Agency Owner"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-slate-800/80">
                <p className="font-semibold text-white">👤 Proprietor</p>
                <p className="text-xs text-gray-400 mt-1">Mr. Shivbalak Singh</p>
              </div>
            </div>
          </div>

          {/* Advertisement Section */}
          <div className="bg-gradient-to-br from-orange-500 via-red-600 to-red-700 rounded-3xl p-8 sm:p-12 text-white shadow-2xl text-center relative overflow-hidden animate-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-orange-300/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

            <div className="relative z-10">
              <span className="inline-block bg-yellow-400 text-red-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4 animate-bounceIn">
                📢 SPECIAL ADVERTISEMENT
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                Adarsh HP Gas Gramin Vitrak
              </h3>
              <p className="text-lg sm:text-xl text-orange-100 mb-2">Authorized HP Gas Distributor</p>
              <p className="text-base text-orange-100 mb-6 max-w-2xl mx-auto">
                Naye connection, cylinder booking, commercial gas supply aur gas se related har samasya ka samadhan. 
                Hamari agency se judhe aur payein behtareen service.
              </p>

              {/* Ad Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
                  <p className="text-2xl">🆕</p>
                  <p className="font-bold mt-1">Naya Connection</p>
                  <p className="text-xs text-orange-200">Domestic &amp; Commercial</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
                  <p className="text-2xl">📞</p>
                  <p className="font-bold mt-1">Any Query Call</p>
                  <p className="text-xs text-orange-200">7080249062</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
                  <p className="text-2xl">🏠</p>
                  <p className="font-bold mt-1">Doorstep Delivery</p>
                  <p className="text-xs text-orange-200">Free delivery service</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                <a href="tel:7080249062" className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-orange-50 transition-all hover:scale-105 btn-ripple">
                  📞 Call Now: 7080249062
                </a>
                <a href="https://wa.me/919956612199?text=Namaskar!%20Mujhe%20HP%20Gas%20ke%20baare%20mein%20jaankari%20chahiye." target="_blank" rel="noreferrer" className="bg-green-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-green-600 transition-all hover:scale-105 btn-ripple">
                  💬 WhatsApp Karein
                </a>
              </div>
            </div>
          </div>

          {/* Additional Gallery Row */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all animate-hidden">
              <div className="h-64 bg-slate-700 relative img-hover-zoom">
                <img
                  src="map.png"
                  alt="HP Gas Agency Premises"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-slate-800/80">
                <p className="font-semibold text-white">📍 Semara, Hata Road Location</p>
                <p className="text-sm text-gray-400">Kaptainganj, Uttar Pradesh — 274301</p>
              </div>
            </div>
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all animate-hidden">
              <div className="h-64 bg-slate-700 relative img-hover-zoom">
                <img
                  src="images.jpeg"
                  alt="HP Gas Cylinders"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-slate-800/80">
                <p className="font-semibold text-white">🛢️ HP Gas Cylinders Stock</p>
                <p className="text-sm text-gray-400">Always available for delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 6. GOOGLE MAPS EMBED SECTION */}
      {/* ============================================ */}
<section className="py-16 sm:py-20 dark-section">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-10 animate-hidden">
            <span className="text-orange-400 font-semibold text-sm tracking-widest uppercase">Find Us</span>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mt-2">Google Maps Par Hamari Location</h3>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-lg mx-auto">Agency tak pahunchne ke liye Google Maps ka istemal karein</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-700 animate-hidden gradient-border">
              <iframe
                title="Adarsh HP Gas Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.8884410762807!2d83.7274263!3d26.902957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993fbadf22812a3%3A0x7d664bad5691a94b!2sAdarsh+Hp+Gas!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full rounded-xl"
              ></iframe>
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://www.google.com/maps/place/Adarsh+Hp+Gas/@26.902957,83.7274263,17z/data=!3m1!4b1!4m6!3m5!1s0x3993fbadf22812a3:0x7d664bad5691a94b!8m2!3d26.902957!4d83.7300012!16s%2Fg%2F11fjb4wgfw?entry=ttu&g_ep=EgoyMDI2MDcyOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition-all hover:scale-105 btn-ripple"
              >
                🗺️ Google Maps Mein Kholen
              </a>
            </div>
          </div>

          {/* Street View Photo Link */}
          <div className="mt-8 text-center">
            <a
              href="https://www.google.com/maps/@26.9028323,83.7301434,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgICmiuCqPw!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWkoofBwjmLRjMIkR4sp47c-mmzwsVDqdqIFOWqEHXtw_yAKeD2aGSK2eQJ3p_IMAQDRCS1o4WD0KcCkmNl19PSB8XXzYWkrDGtHU79jY0zeiMdi8S_XYJKhFdu6WzFV3gQLGlOR%3Dw203-h152-k-no!7i8000!8i6000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium underline"
            >
              📸 Agency ki Street View Photo Dekhein
            </a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 7. QUICK BOOKING */}
      {/* ============================================ */}
      <section id="booking" className="py-12 sm:py-16 dark-section">
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <span className="text-orange-400 font-semibold text-sm tracking-widest uppercase animate-hidden">Instant Booking</span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-2 animate-hidden">Turant Cylinder Book Karein</h3>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto animate-hidden">Official HP Gas modes ke through ab ghar baithe cylinder book karna hua asaan</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <a href="https://wa.me/919493602222?text=Namaskar!%20Mujhe%20cylinder%20book%20karwana%20hai." target="_blank" rel="noreferrer" className="flex items-center justify-center space-x-3 bg-green-500 text-white p-5 rounded-xl shadow-lg hover:bg-green-600 transition hover:scale-105 btn-ripple animate-hidden">
              <span className="text-xl font-semibold">💬 WhatsApp Booking</span>
            </a>
            <a href="tel:9493602222" className="flex items-center justify-center space-x-3 bg-blue-600 text-white p-5 rounded-xl shadow-lg hover:bg-blue-700 transition hover:scale-105 btn-ripple animate-hidden">
              <span className="text-xl font-semibold">📞 Missed Call: 9493602222</span>
            </a>
            <a href="https://myhpgas.in" target="_blank" rel="noreferrer" className="flex items-center justify-center space-x-3 bg-orange-500 text-white p-5 rounded-xl shadow-lg hover:bg-orange-600 transition hover:scale-105 btn-ripple animate-hidden">
              <span className="text-xl font-semibold">🌐 MyHPGas Portal</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 8. SERVICES */}
      {/* ============================================ */}
<section id="services" className="py-16 sm:py-20 container mx-auto px-4 sm:px-6 dark-section">
        <div className="text-center mb-12 animate-hidden">
          <span className="text-orange-400 font-semibold text-sm tracking-widest uppercase">What We Offer</span>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mt-2">Hamari Services</h3>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-all hover:-translate-y-1 animate-hidden">
            <div className="text-4xl mb-4">🆕</div>
            <h4 className="text-xl font-bold mb-3 text-white">Naya Connection (Domestic)</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Naye HP Gas connection ke liye aavedan karein. Zaroori documents: Aadhaar Card, Address Proof, aur Ek Photo. Call karein: <a href="tel:7080249062" className="text-orange-400 font-medium">7080249062</a></p>
          </div>
          <div className="bg-slate-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-all hover:-translate-y-1 animate-hidden">
            <div className="text-4xl mb-4">🏭</div>
            <h4 className="text-xl font-bold mb-3 text-white">Commercial Gas (19KG/47.5KG)</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Hotels, restaurants aur factories ke liye bulk commercial cylinders ki tezi se delivery aur behtareen service. Sampark karein <a href="tel:7080249062" className="text-orange-400 font-medium">7080249062</a>.</p>
          </div>
          <div className="bg-slate-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-all hover:-translate-y-1 animate-hidden">
            <div className="text-4xl mb-4">📋</div>
            <h4 className="text-xl font-bold mb-3 text-white">Aadhaar eKYC Process</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Apni subsidy barkarar rakhne ke liye agency par aakar ya HP PAY app ke jariye biometric eKYC turant poora karein.</p>
          </div>
        </div>
      </section>

{/* ============================================ */}
      

      {/* ============================================ */}
      {/* 10. ENQUIRY FORM */}
      {/* ============================================ */}
<section id="enquiry" className="py-16 sm:py-20 dark-section">
        <div className="container mx-auto px-4 sm:px-6 max-w-xl relative z-10">
          <div className="bg-slate-800/80 backdrop-blur-sm p-6 sm:p-10 rounded-3xl shadow-2xl border border-slate-700 animate-hidden">
            <div className="text-center mb-6">
              <span className="text-orange-400 font-semibold text-sm tracking-widest uppercase">Get In Touch</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">Customer Enquiry Form</h3>
              <p className="text-gray-400 text-sm mt-1">Koi sawal hai ya naya connection chahiye? Details bharein, hum aapse sampark karenge.</p>
            </div>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-900/50 text-green-300 rounded-xl text-center font-medium border border-green-700">
                ✅ Thank you! Aapki enquiry hamare paas pahunch gayi hai. Hum jald hi aapse baat karenge.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1.5">Aapka Naam *</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 text-white rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none transition placeholder-gray-500" placeholder="Ram Kumar" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1.5">Mobile Number *</label>
                <input type="tel" name="phone" required pattern="[0-9]{10}" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 text-white rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none transition placeholder-gray-500" placeholder="98765XXXXX" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1.5">Email ID (Optional)</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 text-white rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none transition placeholder-gray-500" placeholder="ram@email.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1.5">Aapka Sawal / Query *</label>
                <textarea name="message" required rows="4" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 text-white rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none transition placeholder-gray-500" placeholder="Mujhe naya connection chahiye / Mera cylinder deliver nahi hua..."></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold py-3.5 rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl btn-ripple">
                📩 Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

{/* ============================================ */}
      {/* 10. FOOTER */}
      {/* ============================================ */}
      <footer className="bg-gray-900 text-gray-400 py-12 sm:py-14 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-10">

            {/* Agency Info */}
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
                <div className="bg-orange-600 text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center">HP</div>
                <p className="font-bold text-white text-lg">ADARSH HP GAS GRAMIN VITRAK</p>
              </div>
              <p className="text-sm leading-relaxed">Authorized HP Gas Distributor. Hum aapki gas ki har zaroorat ke liye yahan hain — naye connection, cylinder delivery aur customer support. 15+ years of experience.</p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="font-semibold text-white mb-3">Quick Links</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-orange-400 transition">Home</a></li>
                <li><a href="#owner-contact" className="hover:text-orange-400 transition">Contact Owner</a></li>
                <li><a href="#about" className="hover:text-orange-400 transition">About Us</a></li>
                <li><a href="#services" className="hover:text-orange-400 transition">Services</a></li>
                <li><a href="#gallery" className="hover:text-orange-400 transition">Gallery / Advertisement</a></li>
                <li><a href="#booking" className="hover:text-orange-400 transition">Cylinder Booking</a></li>
                <li><a href="#enquiry" className="hover:text-orange-400 transition">Contact / Enquiry</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <p className="font-semibold text-white mb-3">Contact Info</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <span>📍</span>
                  <span>Semara, Hata Road, Kaptainganj, Uttar Pradesh — 274301</span>
                </li>
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <span>📞</span>
                  <a href="tel:7080249062" className="hover:text-orange-400 transition">7080249062</a>
                </li>
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <span>💬</span>
                  <a href="https://wa.me/919956612199" target="_blank" rel="noreferrer" className="hover:text-green-400 transition">WhatsApp: 9956612199</a>
                </li>
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <span>🆘</span>
                  <span>Gas Leakage Helpline: <span className="text-red-400 font-bold">1906</span></span>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-600">
            <p>&copy; {new Date().getFullYear()} ADARSH HP GAS GRAMIN VITRAK. All Rights Reserved. — An Authorized HP Gas Distributor Site</p>
          </div>
        </div>
      </footer>

      {/* ============================================ */}
      {/* SCROLL TO TOP BUTTON */}
      {/* ============================================ */}
      <button
        onClick={scrollToTop}
        className={`scroll-to-top ${showScrollBtn ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        ↑
      </button>

    </div>
  );
}

export default App;
