import { Outlet, Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Menu, X, Pi, ChevronDown, Instagram } from 'lucide-react';
import Logo from '@/components/public/Logo';
import ProfaLaserWordmark from '@/components/public/ProfaLaserWordmark';
import IntroScreen from '@/components/public/IntroScreen';
import RevealOnScroll from '@/components/public/RevealOnScroll';

const programLinks = [
{ to: '/matura-a-razina', label: 'Matura A razina' },
{ to: '/matura-b-razina', label: 'Matura B razina' },
{ to: '/nacionalni-ispit', label: 'Nacionalni ispit' },
{ to: '/instrukcije', label: 'Individualne instrukcije' }];


const navLinks = [
{ to: '/o-profesoru', label: 'O profesoru' },
{ to: '/cesta-pitanja', label: 'Česta pitanja' },
{ to: '/prijava', label: 'Kontakt' }];


export default function PublicLayout() {
  const [open, setOpen] = useState(false);
  const [progOpen, setProgOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const mainRef = useRef(null);
  const location = useLocation();
  const isProgramActive = programLinks.some((p) => location.pathname === p.to);

  useEffect(() => {
    setProgOpen(false);
    setOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-body">
      {/* Obavijesna traka */}
      <div className="bg-primary text-primary-foreground text-xs sm:text-sm py-2 px-4 text-center">
        Online pripreme iz matematike za državnu maturu i nacionalni ispit
      </div>

      {/* Navigacija */}
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            aria-label="Profa - početna"
            id="profa-nav-logo"
            className={`flex items-center transition-all duration-500 ${showIntro ? 'opacity-0 blur-[2px]' : 'opacity-100 blur-[0px]'}`}>
            <ProfaLaserWordmark compact className="h-9 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-foreground/80">
            <Link
              to="/"
              className={`hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary' : ''}`}>
              
              Naslovna
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setProgOpen(true)}
              onMouseLeave={() => setProgOpen(false)}>
              
              <button
                className={`flex items-center gap-1 hover:text-primary transition-colors ${isProgramActive ? 'text-primary' : ''}`}
                onClick={() => setProgOpen((v) => !v)}>
                
                Programi <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {progOpen &&
              <div className="absolute left-0 top-full pt-2 w-56 z-50">
                  <div className="bg-background border border-border rounded-xl shadow-lg py-2">
                    {programLinks.map((p) =>
                  <Link
                    key={p.to}
                    to={p.to}
                    className={`block px-4 py-2 text-sm font-medium text-primary hover:bg-secondary transition-colors ${location.pathname === p.to ? 'bg-secondary/60' : ''}`}>
                    
                        {p.label}
                      </Link>
                  )}
                  </div>
                </div>
              }
            </div>
            {navLinks.map((l) =>
            <Link
              key={l.to}
              to={l.to}
              className={`hover:text-primary transition-colors ${location.pathname === l.to ? 'text-primary' : ''}`}>
              
                {l.label}
              </Link>
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/prijava"
              className="text-sm font-semibold bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition shadow-sm">
              
              Prijavi se
            </Link>
          </div>

          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Izbornik">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open &&
        <div className="lg:hidden border-t border-border bg-background px-4 py-3 space-y-1">
            <Link to="/" onClick={() => setOpen(false)} className="block py-2 text-foreground/80 hover:text-primary">
              Naslovna
            </Link>
            <button
            onClick={() => setProgOpen((v) => !v)}
            className="flex items-center justify-between w-full py-2 text-foreground/80 hover:text-primary">
            
              Programi <ChevronDown className={`w-4 h-4 transition-transform ${progOpen ? 'rotate-180' : ''}`} />
            </button>
            {progOpen &&
          <div className="pl-3 space-y-1 border-l border-border">
                {programLinks.map((p) =>
            <Link key={p.to} to={p.to} onClick={() => {setOpen(false);setProgOpen(false);}} className="block py-2 text-sm font-medium text-primary hover:opacity-80">
                    {p.label}
                  </Link>
            )}
              </div>
          }
            {navLinks.map((l) =>
          <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block py-2 text-foreground/80 hover:text-primary">
                {l.label}
              </Link>
          )}
            <Link to="/prijava" onClick={() => setOpen(false)} className="block py-2 mt-2 bg-primary text-primary-foreground rounded-lg text-center font-semibold">
              Prijavi se
            </Link>
          </div>
        }
      </header>

      <main ref={mainRef} className="relative flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground/90 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-8 md:grid-cols-3">
          <div>
            <Logo className="h-14 w-14 mb-3" />
            <p className="text-sm text-primary-foreground/70 max-w-xs">
              Online pripreme iz matematike za državnu maturu i nacionalni ispit. Individualan pristup, provjereni materijali.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-secondary">Programi</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/matura-a-razina" className="hover:text-secondary">Matura A razina</Link></li>
              <li><Link to="/matura-b-razina" className="hover:text-secondary">Matura B razina</Link></li>
              <li><Link to="/nacionalni-ispit" className="hover:text-secondary">Nacionalni ispit</Link></li>
              <li><Link to="/instrukcije" className="hover:text-secondary">Individualne instrukcije</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-secondary">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:profa.matematika8@gmail.com" className="hover:text-secondary">profa.matematika8@gmail.com</a>
              </li>
              <li>
                <a href="https://instagram.com/profa_instrukcije_matematike" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-secondary">
                  <Instagram className="w-4 h-4" /> profa_instrukcije_matematike
                </a>
              </li>
              <li className="pt-2 space-x-3">
                <Link to="/privatnost" className="hover:text-secondary">Privatnost</Link>
                <Link to="/uvjeti-koristenja" className="hover:text-secondary">Uvjeti</Link>
                <Link to="/kolacici" className="hover:text-secondary">Kolačići</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/15 py-4 text-center text-xs text-primary-foreground/50">
          © 2026 Profa. Sva prava pridržana.
        </div>
      </footer>

      {!showIntro && <RevealOnScroll />}
      {showIntro && <IntroScreen onDone={() => setShowIntro(false)} />}
    </div>);

}