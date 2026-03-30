import { motion } from "motion/react";
import { ArrowDown, Zap, Shield, Layout, Github, Linkedin, Twitter, Mail, Monitor, Smartphone, Menu, X, MessageSquare, Send } from "lucide-react";
import { useEffect, useState, FormEvent } from "react";
import { AnimatePresence } from "motion/react";

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={`${className} text-primary`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="6" width="28" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
    <path d="M2 12H30" stroke="currentColor" strokeWidth="2" />
    <circle cx="6" cy="9" r="1" fill="currentColor" />
    <circle cx="10" cy="9" r="1" fill="currentColor" />
    <circle cx="14" cy="9" r="1" fill="currentColor" />
    <path d="M8 18L11 21L8 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="14" y1="24" x2="20" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const WhatsAppLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);
    }, 1500);
  };

  const whatsappNumber = "5514920006654"; // Replace with real number
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá João! Vi seu portfólio e gostaria de saber mais sobre suas landing pages de alta conversão.")}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-surface/90 backdrop-blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-surface-container-high border border-outline-variant/30 rounded-[2.5rem] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
            
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 p-2 text-on-surface-variant hover:text-primary transition-all duration-300 hover:rotate-90"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-10 relative">
              <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] mb-4 block">Contato Direto</span>
              <h3 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-3 leading-none">VAMOS <span className="text-primary italic font-drama font-light lowercase">conversar?</span></h3>
              <p className="text-on-surface-variant text-sm md:text-base max-w-[280px]">Escolha a melhor forma de elevar o padrão do seu negócio.</p>
            </div>

            <div className="flex flex-col gap-8">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-4 bg-[#25D366] text-white py-5 rounded-2xl font-headline text-xs uppercase font-bold tracking-[0.15em] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(37,211,102,0.3)] hover:-translate-y-1 active:translate-y-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <WhatsAppLogo className="w-6 h-6 relative z-10" /> 
                <span className="relative z-10">Chamar no WhatsApp</span>
              </a>

              <div className="relative flex items-center gap-6 py-2">
                <div className="flex-1 h-[1px] bg-outline-variant/30"></div>
                <span className="font-mono text-[9px] text-on-surface-variant/50 uppercase tracking-[0.2em] whitespace-nowrap">ou envie um email</span>
                <div className="flex-1 h-[1px] bg-outline-variant/30"></div>
              </div>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 bg-surface-dim/50 rounded-3xl border border-primary/20"
                >
                  <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                    <Zap className="w-10 h-10 relative z-10" />
                  </div>
                  <h4 className="font-headline text-2xl font-bold mb-2 tracking-tight">MENSAGEM ENVIADA!</h4>
                  <p className="text-on-surface-variant text-sm font-medium">Entrarei em contato em instantes.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="relative group">
                      <input 
                        required
                        type="text" 
                        placeholder="Seu Nome"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-surface-dim/50 border border-outline-variant/20 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary/50 focus:bg-surface-dim transition-all duration-300 placeholder:text-on-surface-variant/30"
                      />
                    </div>
                    <div className="relative group">
                      <input 
                        required
                        type="email" 
                        placeholder="Seu Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-surface-dim/50 border border-outline-variant/20 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary/50 focus:bg-surface-dim transition-all duration-300 placeholder:text-on-surface-variant/30"
                      />
                    </div>
                  </div>
                  <div className="relative group">
                    <textarea 
                      required
                      placeholder="Como posso ajudar seu negócio?"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-surface-dim/50 border border-outline-variant/20 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary/50 focus:bg-surface-dim transition-all duration-300 resize-none placeholder:text-on-surface-variant/30"
                    />
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="group relative bg-primary text-surface py-5 rounded-2xl font-headline text-xs uppercase font-bold tracking-[0.2em] hover:bg-primary/90 disabled:opacity-50 transition-all duration-500 flex items-center justify-center gap-3 overflow-hidden shadow-lg shadow-primary/10"
                  >
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-surface/30 border-t-surface rounded-full animate-spin" />
                        <span>Processando...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                        <span className="relative z-10">Enviar Proposta</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Navbar = ({ onContactClick }: { onContactClick: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-surface-container-low to-transparent backdrop-blur-sm md:backdrop-blur-none">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-3">
          <Logo className="w-6 h-6 md:w-8 md:h-8" />
          <div className="font-headline text-xl font-bold tracking-tighter text-on-surface">João Pedro</div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {[
            { label: "Projetos", id: "projetos" },
            { label: "Estratégia", id: "estrategia" },
            { label: "Método", id: "metodo" }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-on-surface/60 font-medium hover:text-primary transition-all duration-500 text-[10px] tracking-widest uppercase font-mono"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={onContactClick}
            className="hidden sm:block bg-primary/10 border border-primary/20 text-primary px-6 py-2 rounded-full font-mono text-[10px] uppercase font-bold tracking-widest hover:bg-primary hover:text-surface transition-all duration-300"
          >
            Quero Converter
          </button>
          
          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-on-surface"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface-container-low border-b border-outline-variant/10 md:hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {[
                { label: "Projetos", id: "projetos" },
                { label: "Estratégia", id: "estrategia" },
                { label: "Método", id: "metodo" }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-on-surface/80 font-medium text-xs tracking-widest uppercase font-mono py-2"
                >
                  {item.label}
                </a>
              ))}
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onContactClick();
                }}
                className="sm:hidden bg-primary text-surface px-6 py-4 rounded-xl font-mono text-[10px] uppercase font-bold tracking-widest"
              >
                Quero Converter
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-10 blur-[120px] pointer-events-none">
      <div className="absolute inset-0 bg-primary-dim rounded-full animate-pulse"></div>
    </div>
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative z-20 text-center max-w-6xl"
    >
      <span className="font-mono text-primary uppercase tracking-[0.4em] text-[10px] mb-8 block">
        Landing Pages de Alta Conversão
      </span>
      <h1 className="font-headline font-extrabold leading-[0.85] tracking-tighter text-on-surface mb-4 text-4xl sm:text-5xl md:text-[8rem]">
        POTENCIALIZAMOS
      </h1>
      <h2 className="font-drama italic font-light text-3xl sm:text-4xl md:text-[9rem] text-on-surface/80 leading-none">
        o seu negócio
      </h2>
      
      <div className="mt-24 flex flex-col md:flex-row items-center justify-center gap-12">
        <a href="#projetos" className="flex items-center gap-4 group cursor-pointer">
          <div className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
            <ArrowDown className="w-5 h-5 text-primary group-hover:text-surface" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">MÁQUINA DE VENDAS</span>
        </a>
      </div>
    </motion.div>

    <div className="fixed bottom-12 right-12 z-40 glass-morphism px-6 py-4 rounded-xl border border-outline-variant/10 hidden md:block">
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <span className="font-mono text-[9px] uppercase tracking-tighter text-on-surface-variant">System Status</span>
          <span className="font-mono text-xs text-primary">OPT-01 ACTIVE</span>
        </div>
        <div className="w-[1px] h-8 bg-outline-variant/20"></div>
        <div className="flex flex-col">
          <span className="font-mono text-[9px] uppercase tracking-tighter text-on-surface-variant">Frame Rate</span>
          <span className="font-mono text-xs text-on-surface">120 FPS</span>
        </div>
      </div>
    </div>
  </section>
);

const Marquee = () => (
  <section className="py-16 md:py-24 bg-surface-container-low overflow-hidden border-y border-outline-variant/10">
    <div className="flex whitespace-nowrap animate-marquee mb-8 md:mb-12">
      <div className="flex gap-12 items-center px-6">
        {["Conversão", "Performance", "Copywriting", "Design Persuasivo"].map((tech) => (
          <div key={tech} className="flex items-center gap-12">
            <span className="font-headline font-bold text-3xl md:text-5xl text-on-surface/10 uppercase">{tech}</span>
            <div className="w-3 h-3 rounded-full bg-primary"></div>
          </div>
        ))}
      </div>
      <div className="flex gap-12 items-center px-6">
        {["Conversão", "Performance", "Copywriting", "Design Persuasivo"].map((tech) => (
          <div key={tech} className="flex items-center gap-12">
            <span className="font-headline font-bold text-3xl md:text-5xl text-on-surface/10 uppercase">{tech}</span>
            <div className="w-3 h-3 rounded-full bg-primary"></div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex whitespace-nowrap animate-marquee-reverse">
      <div className="flex gap-12 items-center px-6">
        {["ROI Garantido", "Vendas no Automático", "Autoridade Digital", "Velocidade Extrema"].map((val) => (
          <div key={val} className="flex items-center gap-12">
            <span className="font-mono font-bold text-xl md:text-3xl text-primary/20 uppercase">{val}</span>
            <Zap className="w-4 h-4 md:w-6 md:h-6 text-primary/20" />
          </div>
        ))}
      </div>
      <div className="flex gap-12 items-center px-6">
        {["ROI Garantido", "Vendas no Automático", "Autoridade Digital", "Velocidade Extrema"].map((val) => (
          <div key={val} className="flex items-center gap-12">
            <span className="font-mono font-bold text-xl md:text-3xl text-primary/20 uppercase">{val}</span>
            <Zap className="w-4 h-4 md:w-6 md:h-6 text-primary/20" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Showcase = () => {
  const [view, setView] = useState<"desktop" | "mobile">("desktop");
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "ONG GARRA",
      url: "garramarilia.vercel.app",
      desc: "Plataforma de resgate e adoção de animais com foco em experiência do usuário e conversão de doações.",
      desktopImg: "/imageDesktop.png",
      mobileImg: "/imageMobile.png",
      link: "https://garramarilia.vercel.app/"
    },
    {
      title: "Project Alpha",
      url: "project-alpha.v0.dev",
      desc: "Landing page de alta conversão para SaaS, focada em transformar tráfego frio em assinantes ativos.",
      desktopImg: "https://picsum.photos/seed/tech/1920/1080",
      mobileImg: "https://picsum.photos/seed/mobile-app/1080/1920",
      link: "#"
    }
  ];

  const current = projects[activeProject];

  return (
    <section id="projetos" className="py-24 md:py-48 px-6 md:px-12 bg-surface">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <h3 className="font-headline text-4xl md:text-7xl font-bold tracking-tighter mb-6">
              VITRINE DE <span className="text-primary italic font-drama font-light">EXECELÊNCIA</span>
            </h3>
            <div className="flex flex-wrap gap-4 mb-8">
              {projects.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveProject(idx)}
                  className={`font-mono text-[10px] uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-300 ${
                    activeProject === idx 
                      ? "bg-primary border-primary text-surface" 
                      : "border-outline-variant/30 text-on-surface-variant hover:border-primary/50"
                  }`}
                >
                  {p.title}
                </button>
              ))}
            </div>
            <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
              {current.desc}
            </p>
          </div>
          <div className="flex bg-surface-container-high p-1 rounded-full border border-outline-variant/10 w-full md:w-auto">
            <button 
              onClick={() => setView("desktop")}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-full font-mono text-[10px] uppercase font-bold tracking-widest transition-all duration-500 ${
                view === "desktop" ? "bg-primary text-surface" : "text-on-surface-variant hover:bg-surface-container-highest"
              }`}
            >
              <Monitor className="w-3 h-3" /> Desktop
            </button>
            <button 
              onClick={() => setView("mobile")}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-full font-mono text-[10px] uppercase font-bold tracking-widest transition-all duration-500 ${
                view === "mobile" ? "bg-primary text-surface" : "text-on-surface-variant hover:bg-surface-container-highest"
              }`}
            >
              <Smartphone className="w-3 h-3" /> Mobile
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <motion.div 
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`relative group w-full ${view === "mobile" ? "max-w-[380px]" : "max-w-full"}`}
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-[3.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <a 
              href={current.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative block bg-surface-container-high rounded-xl overflow-hidden border border-outline-variant/20 shadow-2xl cursor-pointer"
            >
              <div className="flex items-center justify-between px-6 py-4 bg-surface-container-highest/50 border-b border-outline-variant/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                </div>
                <div className="bg-surface-dim px-6 md:px-12 py-1 rounded-md text-[10px] font-mono text-on-surface-variant/40 truncate max-w-[150px] md:max-w-none">
                  {view === "desktop" ? current.url : `mobile.${current.url}`}
                </div>
                <div className="w-12"></div>
              </div>
              <motion.div 
                layout
                className={`w-full relative overflow-hidden ${view === "desktop" ? "aspect-video" : "aspect-[9/16]"}`}
              >
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={`${activeProject}-${view}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100" 
                    src={view === "desktop" ? current.desktopImg : current.mobileImg} 
                    alt={current.title}
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high to-transparent opacity-60"></div>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => (
  <section id="estrategia" className="py-24 md:py-48 px-6 md:px-12 bg-surface-container-low">
    <div className="max-w-screen-2xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8">
      {[
        { icon: Zap, title: "Design Persuasivo", desc: "Interfaces projetadas com gatilhos mentais e hierarquia visual focada em guiar o usuário até a conversão final." },
        { icon: Shield, title: "Velocidade de Carregamento", desc: "Landing pages que carregam em milissegundos. Menos tempo de espera significa mais vendas e menor custo por clique.", offset: true },
        { icon: Layout, title: "Foco Total em ROI", desc: "Não criamos apenas sites bonitos. Criamos ativos digitais focados em gerar retorno sobre o seu investimento em tráfego." }
      ].map((item, idx) => (
        <motion.div 
          key={idx}
          whileHover={{ y: -10 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: idx * 0.2 }}
          className={`glass-morphism p-8 md:p-12 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-700 group ${item.offset ? 'md:translate-y-12' : ''}`}
        >
          <item.icon className="w-10 h-10 md:w-12 md:h-12 text-primary mb-6 md:mb-8" />
          <h4 className="font-headline text-xl md:text-2xl font-bold mb-4 uppercase tracking-tight">{item.title}</h4>
          <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const Protocol = () => (
  <section id="metodo" className="py-24 md:py-48 px-6 md:px-12 bg-surface">
    <div className="max-w-screen-2xl mx-auto">
      <h2 className="font-headline text-4xl md:text-8xl font-extrabold tracking-tighter mb-16 md:mb-24">
        MÉTODO DE <span className="text-primary">CONVERSÃO</span>
      </h2>
      <div className="flex flex-col gap-12 md:gap-24">
        {[
          { id: "01", title: "Copywriting Estratégico", desc: "Analisamos seu público-alvo para criar uma narrativa de vendas irresistível que quebra objeções e gera desejo imediato.", img: "/graceenglish.png" },
          { id: "02", title: "Design de Alta Conversão", desc: "Onde a estética encontra a psicologia. Cada elemento visual é posicionado para aumentar sua taxa de conversão.", img: "/finance.png" },
          { id: "03", title: "Escalabilidade e Velocidade", desc: "Sua landing page pronta para receber milhares de acessos simultâneos sem perder performance ou estabilidade.", isSpecial: true }
        ].map((step, idx) => (
          <div 
            key={idx} 
            className={`sticky top-[80px] md:top-[100px] p-8 md:p-24 rounded-xl border border-outline-variant/10 shadow-2xl min-h-[400px] md:min-h-[500px] flex flex-col md:flex-row gap-8 md:gap-12 items-center ${step.isSpecial ? 'bg-primary text-surface' : 'bg-surface-container-high'}`}
          >
            <div className="flex-1">
              <span className={`font-mono text-lg md:text-xl mb-4 block ${step.isSpecial ? 'text-surface/60' : 'text-primary'}`}>{step.id}</span>
              <h3 className="font-headline text-3xl md:text-6xl font-bold mb-6 md:mb-8 uppercase">{step.title}</h3>
              <p className={`text-base md:text-xl leading-relaxed max-w-xl ${step.isSpecial ? 'text-surface/80' : 'text-on-surface-variant'}`}>{step.desc}</p>
            </div>
            <div className="flex-1 w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden relative">
              {step.isSpecial ? (
                <div className="flex flex-col gap-6 h-full justify-center bg-surface/10 p-8 rounded-lg">
                  <div className="h-2 w-full bg-surface/20 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "98%" }}
                      transition={{ duration: 2, delay: 0.5 }}
                      className="h-full bg-surface"
                    ></motion.div>
                  </div>
                  <div className="flex justify-between font-mono text-surface text-xs">
                    <span>Lighthouse Score</span>
                    <span>100/100</span>
                  </div>
                </div>
              ) : (
                <img className="w-full h-full object-cover" src={step.img} alt={step.title} referrerPolicy="no-referrer" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = ({ onContactClick }: { onContactClick: () => void }) => (
  <section className="py-24 md:py-48 px-6 text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-primary/5 blur-[150px]"></div>
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 max-w-4xl mx-auto"
    >
      <h2 className="font-drama italic text-4xl sm:text-6xl md:text-[10rem] text-on-surface mb-12">Vamos elevar o seu padrão?</h2>
      <button 
        onClick={onContactClick}
        className="bg-primary text-surface px-8 md:px-16 py-5 md:py-8 rounded-full font-headline text-base md:text-xl uppercase font-bold tracking-[0.2em] hover:scale-105 transition-all duration-500 shadow-[0_0_50px_rgba(133,173,255,0.3)]"
      >
        Quero Minha Landing Page
      </button>
    </motion.div>
  </section>
);

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative w-full py-24 px-6 md:px-12 border-t border-outline-variant/10 bg-surface">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 w-full max-w-screen-2xl mx-auto">
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-8">
            <Logo className="w-6 h-6" />
            <div className="text-on-surface font-headline uppercase tracking-widest text-sm">JOÃO PEDRO</div>
          </div>
          <p className="font-body text-sm leading-relaxed text-on-surface-variant max-w-xs">
            Criando as landing pages mais rápidas e persuasivas da web moderna para escalar o seu faturamento.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs tracking-widest text-primary uppercase">Social</span>
            <div className="flex flex-col gap-3">
              <a className="text-on-surface-variant hover:text-primary text-sm transition-all duration-300 flex items-center" href="https://github.com/jaojogadez" target="_blank"><Github className="w-4 h-4 mr-2" /> Github</a>
              <a className="text-on-surface-variant hover:text-primary text-sm transition-all duration-300 flex items-center" href="https://www.linkedin.com/in/jaocodadez/" target="_blank"><Linkedin className="w-4 h-4 mr-2" /> LinkedIn</a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs tracking-widest text-primary uppercase">Contato</span>
            <div className="flex flex-col gap-3">
              <a className="text-on-surface-variant hover:text-primary text-sm transition-all duration-300 flex items-center" href="mailto:contato.dev.joaopedro@email.com" target="_blank"><Mail className="w-4 h-4 mr-2" /> Email</a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto mt-24 pt-12 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between gap-6">
        <span className="font-mono text-[10px] text-on-surface-variant/40 uppercase tracking-widest">
          © 2024 João Pedro — High Conversion Digital Craft. Built with Obsidian Logic.
        </span>
        <span className="font-mono text-[10px] text-on-surface-variant/40 uppercase tracking-widest">
          Local Time: {time.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })} GMT-3
        </span>
      </div>
    </footer>
  );
};

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-[100] noise-overlay"></div>
      <Navbar onContactClick={() => setIsContactModalOpen(true)} />
      <main>
        <Hero />
        <Marquee />
        <Showcase />
        <Philosophy />
        <Protocol />
        <CTA onContactClick={() => setIsContactModalOpen(true)} />
      </main>
      <Footer />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}
