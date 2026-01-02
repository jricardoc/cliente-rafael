import serviceImg1 from "../../assets/IMG_2981.webp";
import serviceImg2 from "../../assets/IMG_5105.webp";
import serviceImg3 from "../../assets/IMG_1241.webp";
import { ArrowRightIcon } from "../Icons";
import { WHATSAPP_LINK } from "../../constants";
import "./Services.css";

export const Services = () => {
  return (
    <section className="services-showcase" id="servicos">
      {/* Animated Background Orbs */}
      <div className="services-bg">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="services-header">
          <span className="services-eyebrow">Especialidades</span>
          <h2 className="services-title">
            Transforme seu corpo com
            <span className="text-highlight"> estratégia</span>
          </h2>
          <p className="services-subtitle">
            Cada jornada é única. Descubra como posso te ajudar.
          </p>
        </div>

        {/* Immersive Cards */}
        <div className="services-immersive">
          {/* Emagrecimento */}
          <div className="service-prism featured" data-service="emagrecimento">
            <div className="prism-glow"></div>
            <div className="prism-badge">Popular</div>
            <div className="prism-content">
              <div
                className="prism-image"
                style={{ backgroundImage: `url(${serviceImg1})` }}
              ></div>
              <div className="prism-overlay"></div>
              <div className="prism-info">
                <div className="prism-icon">🔥</div>
                <h3 className="prism-title">Emagrecimento</h3>
                <p className="prism-desc">
                  Chega de dietas restritivas. Emagreça com equilíbrio,
                  respeitando sua rotina de forma sustentável.
                </p>
                <div className="prism-stats">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Vidas transformadas</span>
                </div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="prism-cta"
                >
                  <span>Começar transformação</span>
                  <ArrowRightIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Hipertrofia (Featured) */}
          <div className="service-prism" data-service="hipertrofia">
            <div className="prism-glow"></div>
            <div className="prism-content">
              <div
                className="prism-image"
                style={{ backgroundImage: `url(${serviceImg2})` }}
              ></div>
              <div className="prism-overlay"></div>
              <div className="prism-info">
                <div className="prism-icon">💪</div>
                <h3 className="prism-title">Hipertrofia</h3>
                <p className="prism-desc">
                  Acelere seus ganhos, melhore a recuperação e potencialize o
                  treino com planejamento adequado.
                </p>
                <div className="prism-stats">
                  <span className="stat-number">2KG+</span>
                  <span className="stat-label">Limpo, no mínimo</span>
                </div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="prism-cta"
                >
                  <span>Maximizar ganhos</span>
                  <ArrowRightIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Atletas */}
          <div className="service-prism" data-service="atletas">
            <div className="prism-glow"></div>
            <div className="prism-content">
              <div
                className="prism-image"
                style={{ backgroundImage: `url(${serviceImg3})` }}
              ></div>
              <div className="prism-overlay"></div>
              <div className="prism-info">
                <div className="prism-icon">🏆</div>
                <h3 className="prism-title">Atletas</h3>
                <p className="prism-desc">
                  Alimentação e estratégia fundamentais para sua evolução e
                  metas de competição.
                </p>
                <div className="prism-stats">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Performance</span>
                </div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="prism-cta"
                >
                  <span>Alcançar o topo</span>
                  <ArrowRightIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
