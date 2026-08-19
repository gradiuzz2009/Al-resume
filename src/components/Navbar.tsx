import React, { useState } from 'react';
import { NavTab } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Layers, 
  Terminal, 
  Briefcase, 
  FileText, 
  Mail, 
  Menu, 
  X, 
  MonitorPlay,
  MessageSquareQuote,
  ShieldCheck
} from 'lucide-react';

interface NavbarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenResume,
  onOpenContact
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Overview', icon: <Layers className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <Terminal className="w-4 h-4" /> },
    { id: 'experience', label: 'Experience', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'demos', label: 'Demos', icon: <MonitorPlay className="w-4 h-4" /> },
    { id: 'interview', label: 'Interview', icon: <MessageSquareQuote className="w-4 h-4" /> }
  ];

  return (
    <header className="w-full border-b border-white/[0.06] bg-[#0b0f16]/95 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 lg:h-[88px]">

          {/* Zone 1 — Left: logo + name + one-line role */}
          <div
            id="nav-brand-logo"
            onClick={() => onSelectTab('home')}
            className="flex items-center gap-3 cursor-pointer group shrink-0 min-w-0"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00dbe7] via-[#0078d4] to-[#0078d4] p-[2px] shrink-0">
              <div className="w-full h-full bg-[#0b0f16] rounded-[10px] flex items-center justify-center p-1.5">
                <div className="w-full h-full bg-gradient-to-br from-[#00dbe7] to-[#0078d4] rounded-[4px]"></div>
              </div>
            </div>
            <div className="min-w-0">
              <div className="font-bold text-[15px] lg:text-base tracking-tight text-white group-hover:text-[#a3c9ff] transition-colors whitespace-nowrap truncate">
                {PERSONAL_INFO.name}
              </div>
              <p className="hidden xl:block text-xs text-[#aab4c3] font-medium whitespace-nowrap truncate">
                Microsoft 365 Transformation Architect
              </p>
            </div>
          </div>

          {/* Zone 2 — Center: primary navigation */}
          <nav className="hidden lg:flex flex-1 min-w-0 items-center justify-center gap-1" aria-label="Primary">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => onSelectTab(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-2.5 xl:px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-colors ${
                    isActive
                      ? 'text-[#a3c9ff] bg-[#0078d4]/25 border border-[#0078d4]/50'
                      : 'text-[#cbd5e1] border border-transparent hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3 — Right: secondary + primary CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              id="nav-btn-resume"
              onClick={onOpenResume}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[#e2e8f0] border border-white/[0.14] bg-transparent hover:bg-white/[0.06] hover:border-white/[0.25] transition-colors"
            >
              <FileText className="w-4 h-4 text-[#aab4c3]" aria-hidden="true" />
              <span>View Resume</span>
            </button>
            <button
              id="nav-btn-contact"
              onClick={onOpenContact}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-[#001013] bg-[#00dbe7] hover:bg-[#00c3d0] transition-colors shadow-[0_8px_24px_rgba(0,219,231,0.18)]"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>Discuss Transformation</span>
            </button>
          </div>

          {/* Mobile: persistent primary CTA + menu */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <button
              id="nav-btn-mobile-contact"
              onClick={onOpenContact}
              className="px-3.5 py-2 rounded-lg text-sm font-bold text-[#001013] bg-[#00dbe7] hover:bg-[#00c3d0] transition-colors"
            >
              Discuss
            </button>
            <button
              id="nav-btn-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-white/[0.06] text-[#cbd5e1] hover:text-white border border-white/[0.1] transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer — grouped sections */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/[0.06] bg-[#0b0f16] px-4 pt-3 pb-6 space-y-5">
          {[
            { label: 'Strategy', items: navItems.slice(0, 2) },
            { label: 'Capability', items: navItems.slice(2, 4) },
            { label: 'Proof', items: navItems.slice(4, 6) }
          ].map((group) => (
            <div key={group.label}>
              <p className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#8b93a3] px-1 pb-1.5">
                {group.label}
              </p>
              <div className="grid grid-cols-1 gap-1">
                {group.items.map((item) => {
                  const isActive = currentTab === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`mobile-nav-${item.id}`}
                      onClick={() => {
                        onSelectTab(item.id);
                        setMobileMenuOpen(false);
                      }}
                      aria-current={isActive ? 'page' : undefined}
                      className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? 'text-[#a3c9ff] bg-[#0078d4]/20 border border-[#0078d4]/40'
                          : 'text-[#cbd5e1] border border-transparent hover:bg-white/[0.06]'
                      }`}
                    >
                      <span className={isActive ? 'text-[#a3c9ff]' : 'text-[#8b93a3]'}>{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="grid grid-cols-2 gap-2 border-t border-white/[0.06] pt-4">
            <button
              id="mobile-nav-resume"
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl text-sm font-semibold text-[#e2e8f0] border border-white/[0.14] hover:bg-white/[0.06] transition-colors"
            >
              <FileText className="w-4 h-4 text-[#aab4c3]" />
              <span>View Resume</span>
            </button>
            <button
              id="mobile-nav-contact"
              onClick={() => {
                onOpenContact();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl text-sm font-bold text-[#001013] bg-[#00dbe7] hover:bg-[#00c3d0] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Discuss</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
