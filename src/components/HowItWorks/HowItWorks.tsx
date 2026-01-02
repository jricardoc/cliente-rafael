import { WhatsAppIcon, ArrowRightIcon } from "../Icons";
import { WHATSAPP_LINK } from "../../constants";
import "./HowItWorks.css";

const steps = [
  {
    number: 1,
    icon: "📋",
    title: "Avaliação Completa",
    description:
      "Entendo seu histórico, rotina e objetivos para criar a estratégia perfeita.",
    detail: "Formulário detalhado + Análise individual",
    color: "#4cb868",
  },
  {
    number: 2,
    icon: "🎯",
    title: "Plano Personalizado",
    description:
      "Crio um plano 100% adaptado a você, sua rotina e preferências.",
    detail: "Dieta flexível + Suplementação",
    color: "#2d8f47",
  },
  {
    number: 3,
    icon: "💬",
    title: "Acompanhamento Ativo",
    description:
      "Suporte constante com ajustes e feedbacks para garantir evolução.",
    detail: "WhatsApp direto + Ajustes semanais",
    color: "#1e6b32",
  },
  {
    number: 4,
    icon: "🏆",
    title: "Resultados Reais",
    description: "Sem modismos, só estratégias comprovadas que funcionam.",
    detail: "Resultados sustentáveis + Autonomia",
    color: "#ffd700",
  },
];

export const HowItWorks = () => {
  return (
    <section className="journey-showcase" id="acompanhamento">
      {/* Animated Background */}
      <div className="journey-bg">
        <div className="journey-gradient"></div>
        <svg
          className="journey-lines"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(45,143,71,0)" />
              <stop offset="50%" stopColor="rgba(45,143,71,0.5)" />
              <stop offset="100%" stopColor="rgba(45,143,71,0)" />
            </linearGradient>
          </defs>
          <path
            d="M0,300 Q300,100 600,300 T1200,300"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            className="flow-line"
          />
        </svg>
      </div>

      <div className="container">
        {/* Header */}
        <div className="journey-header">
          <span className="journey-eyebrow">Sua Jornada</span>
          <h2 className="journey-title">
            4 Passos para sua
            <span className="text-gradient"> Transformação</span>
          </h2>
          <p className="journey-subtitle">
            Do primeiro contato aos resultados — clareza total
          </p>
        </div>

        {/* Journey Path */}
        <div className="journey-path">
          {/* Progress Line */}
          <div className="path-progress">
            <div className="progress-track"></div>
            <div className="progress-fill"></div>
          </div>

          {/* Steps */}
          <div className="journey-steps">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="journey-node"
                style={
                  {
                    "--node-color": step.color,
                    "--delay": `${index * 0.2}s`,
                  } as React.CSSProperties
                }
              >
                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="node-connector">
                    <div className="connector-line"></div>
                    <div className="connector-dot"></div>
                  </div>
                )}

                {/* Node Circle */}
                <div className="node-circle">
                  <div className="circle-glow"></div>
                  <div className="circle-border"></div>
                  <div className="circle-inner">
                    <span className="node-number">{step.number}</span>
                  </div>
                  <div className="circle-pulse"></div>
                </div>

                {/* Node Card */}
                <div className="node-card">
                  <div className="card-icon">{step.icon}</div>
                  <h3 className="card-title">{step.title}</h3>
                  <p className="card-desc">{step.description}</p>
                  <div className="card-detail">
                    <span className="detail-badge">{step.detail}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Destination */}
        <div className="journey-destination">
          <div className="destination-card">
            <div className="destination-glow"></div>
            <div className="destination-content">
              <div className="destination-icon">🚀</div>
              <h3>Pronto para começar?</h3>
              <p>Sua transformação está a uma mensagem de distância</p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="destination-cta"
              >
                <WhatsAppIcon />
                <span>Iniciar minha jornada</span>
                <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
