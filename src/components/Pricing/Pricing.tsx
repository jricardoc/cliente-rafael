import { useState } from "react";
import { CheckIcon, ArrowRightIcon, WhatsAppIcon } from "../Icons";
import {
  WHATSAPP_LINK,
  WHATSAPP_BRONZE,
  WHATSAPP_PRATA,
  WHATSAPP_OURO,
  WHATSAPP_PLATINA,
  WHATSAPP_DIAMANTE,
  WHATSAPP_ATLETA,
} from "../../constants";
import "./Pricing.css";

const plans = [
  {
    id: "bronze",
    name: "Bronze",
    icon: "🥉",
    tier: "Básico",
    link: WHATSAPP_BRONZE,
    tagline: "Comece sua jornada",
    description: "Para quem precisa de um norte para começar.",
    features: [
      "Formulário completo de personalização",
      "Planejamento alimentar em PDF",
      "Contato via WhatsApp 1x/semana",
      "Duração: 1 mês",
    ],
    color: "#cd7f32",
    popular: false,
  },
  {
    id: "prata",
    name: "Prata",
    icon: "🥈",
    tier: "Intermediário",
    link: WHATSAPP_PRATA,
    tagline: "Evolua com tecnologia",
    description: "Clareza total + app + acompanhamento.",
    features: [
      "Tudo do Bronze",
      "Acesso ao aplicativo completo",
      "Avaliação física remota",
      "Acompanhamento 1x/semana",
      "1 encontro online",
    ],
    color: "#c0c0c0",
    popular: false,
  },
  {
    id: "ouro",
    name: "Ouro",
    icon: "🥇",
    tier: "Recomendado",
    link: WHATSAPP_OURO,
    tagline: "Suporte constante",
    description: "Ajustes rápidos sempre que precisar.",
    features: [
      "Tudo do Prata",
      "Acompanhamento seg-sex (09h-18h)",
      "Ajustes sempre que necessário",
      "3 encontros em 3 meses",
      "Avaliação física completa",
    ],
    color: "#ffd700",
    popular: true,
  },
  {
    id: "platina",
    name: "Platina",
    icon: "💎",
    tier: "Avançado",
    link: WHATSAPP_PLATINA,
    tagline: "Evolução real",
    description: "6 meses de transformação + treino.",
    features: [
      "Tudo do Ouro",
      "6 meses de acompanhamento",
      "6 encontros inclusos",
      "Treino periodizado por personal",
      "Avaliação física inclusa",
    ],
    color: "#e5e4e2",
    popular: false,
  },
  {
    id: "diamante",
    name: "Diamante",
    icon: "👑",
    tier: "Premium",
    link: WHATSAPP_DIAMANTE,
    tagline: "Exclusividade total",
    description: "Experiência VIP e dedicada.",
    features: [
      "Tudo do Platina",
      "Acompanhamento todos os dias",
      "Kit de paciente exclusivo",
      "Nutri Day",
      "Suporte 24/7 dedicado",
    ],
    color: "#b9f2ff",
    popular: false,
  },
  {
    id: "atleta",
    name: "Atleta Pro",
    icon: "🏅",
    tier: "Performance",
    link: WHATSAPP_ATLETA,
    tagline: "Alta performance",
    description: "Para atletas e competidores.",
    features: [
      "Periodização nutricional",
      "Ajustes semanais por treino",
      "Estratégias pré/intra/pós",
      "Monitoramento corporal",
      "App + Treino opcional",
    ],
    color: "#ff6b6b",
    popular: false,
  },
];

export const Pricing = () => {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section className="pricing-showcase" id="planos">
      {/* Animated Background */}
      <div className="pricing-bg">
        <div className="pricing-gradient-1"></div>
        <div className="pricing-gradient-2"></div>
        <div className="pricing-grid-lines"></div>
      </div>

      <div className="container">
        {/* Header */}
        <div className="pricing-header">
          <span className="pricing-eyebrow">Investimento</span>
          <h2 className="pricing-title">
            Escolha seu
            <span className="text-shimmer"> Plano Ideal</span>
          </h2>
          <p className="pricing-subtitle">
            6 opções para sua jornada. Consulte via WhatsApp.
          </p>
        </div>

        {/* Tier Selector Visual */}
        <div className="tier-visual">
          <div className="tier-line"></div>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`tier-node ${plan.popular ? "popular" : ""} ${
                hoveredPlan === plan.id ? "active" : ""
              }`}
              style={{ "--tier-color": plan.color } as React.CSSProperties}
            >
              <span className="tier-icon">{plan.icon}</span>
            </div>
          ))}
        </div>

        {/* Plans Grid */}
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <a
              key={plan.id}
              href={plan.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`plan-card ${plan.popular ? "featured" : ""}`}
              style={
                {
                  "--plan-color": plan.color,
                  "--delay": `${index * 0.1}s`,
                } as React.CSSProperties
              }
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="popular-badge">
                  <span>⭐</span> Mais Popular
                </div>
              )}

              {/* Card Glow */}
              <div className="card-glow"></div>

              {/* Card Content */}
              <div className="plan-content">
                {/* Header */}
                <div className="plan-tier">{plan.tier}</div>
                <div className="plan-icon-wrapper">
                  <span className="plan-icon">{plan.icon}</span>
                </div>
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-tagline">{plan.tagline}</p>

                {/* Divider */}
                <div className="plan-divider"></div>

                {/* Features */}
                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <span className="feature-check">
                        <CheckIcon />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className={`plan-cta ${plan.popular ? "primary" : ""}`}>
                  <span>Escolher {plan.name}</span>
                  <ArrowRightIcon />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Final CTA */}
        <div className="pricing-final-cta">
          <div className="final-card">
            <div className="final-glow"></div>
            <div className="final-content">
              <div className="final-icon">💬</div>
              <h3>SEU CORPO, SUA ROTINA, SUA ESTRATÉGIA</h3>
              <p>Vamos conversar e encontrar o plano perfeito para você</p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="final-button"
              >
                <WhatsAppIcon />
                <span>Falar com Rafael</span>
                <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
