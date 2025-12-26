
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene, ResearchBgScene } from './components/QuantumScene';
import { DataPointsDiagram, RankingsChart, SafePlacesList } from './components/Diagrams';
import { ArrowDown, Menu, X, Share2, MessageCircle, Play, Mail } from 'lucide-react';

const ResearcherCard = ({ name, role, delay, link }: { name: string, role: string, delay: string, link: string }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="flex flex-col group animate-fade-in-up items-center p-6 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 w-full max-w-[280px] hover:border-red-500/50" style={{ animationDelay: delay }}>
      <div className="w-24 h-24 bg-stone-200 rounded-full mb-4 flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 transition-transform">👨‍🔬</div>
      <h3 className="font-serif text-xl text-stone-900 text-center mb-1 group-hover:text-red-600 transition-colors">{name}</h3>
      <div className="w-12 h-0.5 bg-red-600 mb-3 opacity-60"></div>
      <p className="text-xs text-stone-500 font-bold uppercase tracking-widest text-center leading-relaxed">{role}</p>
    </a>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const Logo = () => (
    <div className="flex flex-col leading-none font-sans font-bold text-stone-900 tracking-tighter select-none">
        <div className="flex items-start text-2xl md:text-3xl">
            <span>Clouty</span>
            <span className="text-[0.4em] mt-1 ml-0.5 font-medium tracking-normal text-stone-600">The</span>
        </div>
        <span className="text-2xl md:text-3xl">Skies</span>
        <span className="text-sm md:text-base tracking-tight mt-0.5">Research</span>
        <span className="text-sm md:text-base tracking-tight">Institute</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-red-200 selection:text-red-900">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="cursor-pointer hover:opacity-80 transition-opacity" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-red-600 transition-colors cursor-pointer uppercase">The Metric</a>
            <a href="#data" onClick={scrollToSection('data')} className="hover:text-red-600 transition-colors cursor-pointer uppercase">Data Points</a>
            <a href="#results" onClick={scrollToSection('results')} className="hover:text-red-600 transition-colors cursor-pointer uppercase">Results</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3H9Iq86rqjDnYb471br7DDzhWLfwx_9GZNdX6VOsHlp-8Vw/viewform?usp=share_link&ouid=107575648524359116699" target="_blank" rel="noreferrer" className="px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors shadow-lg cursor-pointer font-bold">
              Contribute
            </a>
          </div>

          <button className="md:hidden text-stone-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-red-600 transition-colors cursor-pointer uppercase">The Metric</a>
            <a href="#data" onClick={scrollToSection('data')} className="hover:text-red-600 transition-colors cursor-pointer uppercase">Data Points</a>
            <a href="#results" onClick={scrollToSection('results')} className="hover:text-red-600 transition-colors cursor-pointer uppercase">Results</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3H9Iq86rqjDnYb471br7DDzhWLfwx_9GZNdX6VOsHlp-8Vw/viewform?usp=share_link&ouid=107575648524359116699" target="_blank" rel="noreferrer" className="px-8 py-3 bg-red-600 text-white rounded-full shadow-xl cursor-pointer font-bold">
              Contribute Data
            </a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-900">
        <HeroScene />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.8)_100%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="inline-block mb-6 px-4 py-1 border border-red-500 bg-red-600/20 text-red-400 text-xs tracking-[0.3em] uppercase font-bold rounded-full backdrop-blur-md">
            Official Publication
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-bold leading-tight mb-6 drop-shadow-2xl">
            The Official <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Wigga-Meter</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-300 font-light leading-relaxed mb-12">
            A conceptual framework designed to quantify and analyze the probability of encountering specific cultural phenomena based on environmental factors.
          </p>
          
          <div className="flex justify-center">
             <a href="#about" onClick={scrollToSection('about')} className="group flex flex-col items-center gap-2 text-sm font-bold text-stone-400 hover:text-white transition-colors cursor-pointer uppercase tracking-widest">
                <span>Begin Analysis</span>
                <span className="p-3 border border-stone-600 rounded-full group-hover:border-white transition-colors bg-white/10 backdrop-blur-sm">
                    <ArrowDown size={20} />
                </span>
             </a>
          </div>
        </div>
      </header>

      <main>
        {/* Definition & Video */}
        <section id="about" className="py-24 bg-white relative overflow-hidden">
             {/* Decorative Background Text */}
             <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
                 <div className="text-[20vw] font-serif font-bold text-stone-900 leading-none whitespace-nowrap ml-[-10vw]">CRSI CRSI</div>
             </div>

          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start relative z-10">
            <div className="md:col-span-5">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-red-600 uppercase">Framework Definition</div>
              <h2 className="font-serif text-5xl mb-6 leading-tight text-stone-900">What is a <br/><span className="italic text-stone-500">Wigger?</span></h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-red-500 to-yellow-500 mb-8"></div>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                A suburban white individual who adopts the aesthetic of urban rap culture, often identifying with cities like the Bronx or Atlanta based solely on lyrical exposure.
              </p>
              <p className="text-sm text-stone-500 italic border-l-2 border-stone-300 pl-4 mb-8">
                 Typically dressed in baggy jeans, a DIY Tupac shirt, and broadcasting "real music" through Bluetooth speakers.
              </p>

              <div className="bg-[#F5F4F0] p-8 rounded-2xl border border-stone-200 shadow-inner">
                <h3 className="font-serif text-2xl mb-4 text-stone-900">How It Works</h3>
                <p className="text-stone-700 mb-4 leading-relaxed">
                    The <strong className="text-red-600">Wigga-Meter</strong> employs a standardized <strong>1-25 scale</strong> to quantify the relative intensity of the <em>WiggerFactor</em>.
                </p>
                <ul className="space-y-3 text-stone-600 text-sm">
                    <li className="flex items-start gap-3">
                        <span className="bg-stone-900 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">1</span>
                        <span>Each categorical data point gets a max of 5 points.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="bg-stone-900 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">2</span>
                        <span>A 6 point bonus applies for extremely common factors.</span>
                    </li>
                </ul>
             </div>
            </div>
            
            <div className="md:col-span-7 flex flex-col gap-6">
                 {/* Video Player */}
                 <div className="w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-stone-900 bg-stone-900 relative aspect-video">
                    <iframe 
                        className="w-full h-full"
                        src="https://www.youtube-nocookie.com/embed/1C6Xo03GQJk?si=K-1Wa6COXrlMBjuf" 
                        title="Official Overview Video" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                 </div>
                 <div className="text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-400">Official Video Briefing</p>
                 </div>
            </div>
          </div>
        </section>

        {/* Data Points */}
        <section id="data" className="py-24 bg-[#F5F4F0] border-t border-stone-200">
            <div className="container mx-auto px-6 text-center">
                 <div className="inline-block px-3 py-1 bg-stone-200 text-stone-600 text-xs font-bold tracking-widest uppercase rounded-full mb-6">
                    Methodology
                </div>
                <h2 className="font-serif text-4xl md:text-5xl mb-12 text-stone-900">The Data Points</h2>
                
                <DataPointsDiagram />
            </div>
        </section>

        {/* Results */}
        <section id="results" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                     <div className="lg:col-span-8">
                        <RankingsChart />
                     </div>
                     <div className="lg:col-span-4 flex flex-col justify-center">
                         <h3 className="font-serif text-3xl mb-4 text-stone-900">The Findings</h3>
                         <p className="text-stone-600 leading-relaxed mb-6">
                             Our research indicates a high correlation between fast food establishments and high WiggerFactor scores. Surprisingly, "Failed Rap Career" ranks identically to "White Castle Worker".
                         </p>
                         <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                             <h4 className="font-bold text-red-800 mb-2 uppercase text-xs tracking-wider">Key Insight</h4>
                             <p className="text-red-900/80 italic text-sm">
                                 "This presentation began at Number 5 and systematically advanced to Level 1, denoting a near 100% encounter rate."
                             </p>
                         </div>
                     </div>
                 </div>

                 <SafePlacesList />
            </div>
        </section>

        {/* Impact / Contribute */}
        <section id="contribute" className="py-24 bg-stone-900 text-white relative overflow-hidden">
             <div className="absolute inset-0 opacity-20">
                <ResearchBgScene />
             </div>
             
             <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="font-serif text-4xl md:text-6xl mb-8">Join the Research</h2>
                <p className="text-xl text-stone-300 max-w-2xl mx-auto mb-12">
                    Have you observed a anomaly in the wild? Contribute your data to the Clouty Skies Research Institute.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3H9Iq86rqjDnYb471br7DDzhWLfwx_9GZNdX6VOsHlp-8Vw/viewform?usp=share_link&ouid=107575648524359116699" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg">
                        <MessageCircle size={20} />
                        Submit Feedback
                    </a>
                    <a href="mailto:contact@clouty-skies.com" className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-bold backdrop-blur-sm transition-all border border-white/20">
                        <Mail size={20} />
                        Contact Us
                    </a>
                </div>
             </div>
        </section>

        {/* Authors */}
        <section className="py-24 bg-[#F5F4F0] border-t border-stone-800">
           <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">RESEARCH TEAM</div>
                    <h2 className="font-serif text-3xl md:text-5xl mb-4 text-stone-900">Institute Fellows</h2>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6">
                    <ResearcherCard 
                        name="Dr. Clouty Skies" 
                        role="Lead Researcher" 
                        delay="0s" 
                        link="https://thecloutyskies.github.io/Clouty-Skies-Research-Institute/authors/clouty-skies/"
                    />
                </div>
           </div>
        </section>

      </main>

      <footer className="bg-stone-950 text-stone-500 py-16 border-t border-stone-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <div className="text-white font-serif font-bold text-2xl mb-2 tracking-wider">CRSI</div>
                <p className="text-xs max-w-sm">Clouty Skies Research Institute. Dedicated to the documentation of suburban cultural phenomena.</p>
            </div>
            <div className="flex gap-6 text-sm font-bold uppercase tracking-widest">
                <a href="mailto:contact@clouty-skies.com" className="hover:text-red-500 transition-colors">Contact</a>
            </div>
        </div>
        <div className="text-center mt-12 text-[10px] text-stone-700">
            © 2024 Clouty Skies Research Institute. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
