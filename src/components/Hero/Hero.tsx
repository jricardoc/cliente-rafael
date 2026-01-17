import bannerImage from "../../assets/img-banner.webp";
import { WhatsAppIcon, CheckIcon } from "../Icons";
import { WHATSAPP_LINK } from "../../constants";
import "./Hero.css";

const heroBadges = ["Hipertrofia", "Emagrecimento", "Performance"];

export const Hero = () => {
  return (
    <section className="hero-showcase" id="top">
      {/* Cinematic Background */}
      <div className="hero-bg">
        <div className="hero-mesh"></div>
        <div className="hero-particles">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="h-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="hero-main">
          {/* Text Content */}
          <div className="hero-content-left">
            <div className="hero-status-badge">
              <span className="status-dot"></span>
              Agenda Aberta 2026
            </div>

            <h1 className="hero-title">
              Nutrição que
              <br />
              <span className="text-glow">Transforma Vidas</span>
            </h1>

            <p className="hero-description">
              Chega de dietas restritivas. Alcance sua melhor versão com um
              <strong> método validado</strong> que une ciência, prática e
              resultados reais, respeitando sua rotina e individualidade.
            </p>

            <div className="hero-tags">
              {heroBadges.map((badge, i) => (
                <span key={i} className="hero-tag">
                  <CheckIcon /> {badge}
                </span>
              ))}
            </div>

            <div className="hero-actions">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-primary"
              >
                <WhatsAppIcon />
                <span>Iniciar Consultoria</span>
                <div className="btn-glow"></div>
              </a>
            </div>

            <div className="hero-social-proof">
              <div className="proof-avatars-stack">
                {/* Visual avatar stack simulation */}
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="mini-avatar"
                    style={{ zIndex: 5 - i }}
                  ></div>
                ))}
              </div>
              <div className="proof-text">
                <div className="stars">★★★★★</div>
                <span>
                  Mais de <strong>50+ pacientes</strong> satisfeitos
                </span>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="hero-content-right">
            <div className="hero-visual-wrapper">
              {/* Main Image with Glow */}
              <div className="hero-image-container">
                <img
                  src={bannerImage}
                  alt="Rafael Almeida Nutricionista"
                  className="hero-main-image"
                  width={600}
                  height={750}
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                />
                <div className="image-aura"></div>
              </div>

              {/* Floating Cards 3D */}
              <div className="floating-card glass-card card-1">
                <div className="card-icon">🔥</div>
                <div className="card-info">
                  <span className="card-label">Resultados</span>
                  <span className="card-value">Efetivos</span>
                </div>
              </div>

              <div className="floating-card glass-card card-2">
                <div className="card-icon">⚖️</div>
                <div className="card-info">
                  <span className="card-label">Protocolo</span>
                  <span className="card-value">100% Individual</span>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="hero-circle-decor"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
