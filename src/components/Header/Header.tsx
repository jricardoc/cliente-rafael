import { useState, useEffect } from "react";
import logo from "../../assets/logo-ranutri.png";
import logoWhite from "../../assets/logo-white.webp";
import { WhatsAppIcon, InstagramIcon } from "../Icons";
import { CRN, WHATSAPP_LINK } from "../../constants";
import "./Header.css";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = [
        "servicos",
        "sobre",
        "acompanhamento",
        "resultados",
        "planos",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "servicos", label: "Serviços" },
    { id: "sobre", label: "Sobre" },
    { id: "acompanhamento", label: "Método" },
    { id: "resultados", label: "Resultados" },
    { id: "planos", label: "Planos" },
  ];

  return (
    <header className={`revolutionary-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-glass-container">
        {/* Logo Area */}
        <div className="header-brand">
          <a href="#top" className="logo-link">
            <img
              src={scrolled ? logo : logoWhite}
              alt="RaNutri"
              className="header-logo"
              width={120}
              height={40}
            />
          </a>
          <span className="crn-badge">{CRN}</span>
        </div>

        {/* Desktop Navigation - Magnetic Pills */}
        <nav className="header-nav-desktop">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-pill ${
                activeSection === item.id ? "active" : ""
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="active-dot"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Actions Area */}
        <div className="header-actions">
          <div className="social-mini">
            <a
              href="https://www.instagram.com/ranutri/"
              target="_blank"
              rel="noopener noreferrer"
              className="mini-icon ig"
              aria-label="Instagram do RaNutri"
            >
              <InstagramIcon />
            </a>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="header-cta"
          >
            <WhatsAppIcon />
            <span>Agendar</span>
          </a>

          {/* Mobile Toggle */}
          <button
            className={`mobile-toggle ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <button
          className="mobile-close-btn"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Fechar menu"
        >
          <span></span>
          <span></span>
        </button>
        <div className="mobile-nav-content">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-link"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {item.label}
            </a>
          ))}
          <div className="mobile-footer">
            <p>Nutrição esportiva & estética</p>
            <span className="mobile-crn">{CRN}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
