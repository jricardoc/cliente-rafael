import logoWhite from "../../assets/logo-white.webp";
import {
  WhatsAppIcon,
  InstagramIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from "../Icons";
import { WHATSAPP_LINK, CRN } from "../../constants";
import "./Footer.css";

const navLinks = [
  { href: "#top", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#resultados", label: "Resultados" },
  { href: "#planos", label: "Planos" },
];

const serviceLinks = [
  { href: "#servicos", label: "Emagrecimento" },
  { href: "#servicos", label: "Hipertrofia" },
  { href: "#servicos", label: "Performance" },
  { href: "#acompanhamento", label: "Consultoria" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-showcase">
      {/* Ambient Background */}
      <div className="footer-bg">
        <div className="footer-gradient"></div>
        <div className="footer-mesh"></div>
      </div>

      <div className="container">
        <div className="footer-main">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <a href="#top" onClick={scrollToTop} className="footer-logo-link">
              <img
                src={logoWhite}
                alt="RaNutri"
                className="footer-logo"
                width={120}
                height={40}
                loading="lazy"
                decoding="async"
              />
            </a>
            <p className="footer-mission">
              Transformando vidas através da nutrição inteligente. Sua melhor
              versão começa com a estratégia certa.
            </p>
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/ranutri/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill instagram"
              >
                <InstagramIcon />
                <span>Instagram</span>
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill whatsapp"
              >
                <WhatsAppIcon />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="footer-links-group">
            <div className="footer-col">
              <h4>Explorar</h4>
              <ul className="footer-nav">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="nav-link">
                      <span className="link-text">{link.label}</span>
                      <span className="link-arrow">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4>Especialidades</h4>
              <ul className="footer-nav">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="nav-link">
                      <span className="link-text">{link.label}</span>
                      <span className="link-arrow">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact / CTA Column */}
          <div className="footer-contact-col">
            <div className="contact-card">
              <h4>Vamos começar?</h4>
              <p>Agende sua avaliação hoje mesmo e dê o primeiro passo.</p>

              <div className="contact-info">
                <div className="info-item">
                  <span className="info-icon">📋</span>
                  <span>{CRN}</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <span>Atendimento online e presencial em Salvador-BA</span>
                </div>
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn"
              >
                <span>Agendar Consulta</span>
                <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>© {currentYear} Rafael Almeida. Todos os direitos reservados.</p>
          </div>
          <div className="footer-legal">
            <a href="#">Termos</a>
            <span className="separator">•</span>
            <a href="#">Privacidade</a>
          </div>
          <a
            href="#top"
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Voltar ao topo"
          >
            <ArrowUpIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};
