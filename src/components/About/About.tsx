import aboutImage from "../../assets/IMG_0984.webp";
import { PlayIcon } from "../Icons";
import { CRN } from "../../constants";
import "./About.css";

const credentials = [
  { icon: "🎓", label: "Pós-graduado", value: "Nutrição Esportiva" },
  { icon: "📋", label: "Registro", value: CRN },
  { icon: "🏆", label: "Especialidade", value: "Performance & Estética" },
  { icon: "⚡", label: "Atendimentos", value: "50+ pacientes" },
];

const values = [
  {
    icon: "🎯",
    title: "Personalização Total",
    description: "Cada plano é único, respeitando sua rotina e preferências.",
  },
  {
    icon: "🔬",
    title: "Base Científica",
    description:
      "Estratégias comprovadas, sem modismos ou restrições absurdas.",
  },
  {
    icon: "🤝",
    title: "Parceria Real",
    description: "Acompanhamento próximo em cada etapa da sua jornada.",
  },
];

export const About = () => {
  return (
    <section className="about-showcase" id="sobre">
      {/* Animated Background */}
      <div className="about-bg">
        <div className="about-gradient-1"></div>
        <div className="about-gradient-2"></div>
        <div className="about-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="about-header">
          <span className="about-eyebrow">Conheça o profissional</span>
          <h2 className="about-title">
            Prazer, <span className="text-glow">Rafael Almeida</span>
          </h2>
        </div>

        {/* Main Content - Split Layout */}
        <div className="about-split">
          {/* Left Side - Image with Frame Effect */}
          <div className="about-visual">
            <div className="image-frame">
              <div className="frame-border"></div>
              <div className="frame-glow"></div>
              <img
                src={aboutImage}
                alt="Rafael Almeida - Nutricionista Esportivo"
                className="about-portrait"
                width={400}
                height={500}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Video Card */}
            <div className="video-card">
              <div className="video-thumbnail">
                <div className="play-button">
                  <PlayIcon />
                </div>
                <span className="video-duration">2:34</span>
              </div>
              <div className="video-info">
                <span className="video-label">Assista minha apresentação</span>
                <span className="video-title">Conheça minha história</span>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="about-story">
            {/* Bio Card */}
            <div className="bio-card">
              <p className="bio-text">
                Nutricionista da <strong>5ª região</strong>, pós-graduado em
                <span className="highlight">
                  {" "}
                  Nutrição, Metabolismo e Fisiologia do Esporte
                </span>
                , atuo na prática clínica e esportiva, com foco em melhorar o
                <strong> desempenho</strong>, a <strong>estética</strong> e a
                <strong> relação com a comida</strong>.
              </p>
              <p className="bio-text">
                Acredito que cada pessoa tem um ponto de partida diferente — por
                isso, meu trabalho é{" "}
                <span className="highlight">individualizar cada plano</span>,
                considerando rotina, treinos, preferências e metas reais.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="credentials-grid">
              {credentials.map((cred, index) => (
                <div
                  key={index}
                  className="credential-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="cred-icon">{cred.icon}</span>
                  <div className="cred-info">
                    <span className="cred-label">{cred.label}</span>
                    <span className="cred-value">{cred.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Values Section */}
            <div className="values-section">
              <h3 className="values-title">Minha Filosofia</h3>
              <div className="values-list">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="value-item"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <span className="value-icon">{value.icon}</span>
                    <div className="value-content">
                      <h4>{value.title}</h4>
                      <p>{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
