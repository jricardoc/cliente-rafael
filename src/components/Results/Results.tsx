import { WhatsAppIcon, ArrowRightIcon } from "../Icons";
import { WHATSAPP_LINK } from "../../constants";
import "./Results.css";

const stats = [
  { value: "50+", label: "Vidas Transformadas", icon: "💪" },
  { value: "10/10", label: "Satisfação", icon: "⭐" },
  { value: "100%", label: "Pódios Alcançados", icon: "🏆" },
];

const testimonials = [
  {
    text: "O Rafael mudou completamente minha relação com a comida. Perdi 15kg em 4 meses comendo de tudo, só com estratégia certa!",
    name: "M.S.",
    role: "Emagrecimento",
    rating: 5,
    image: null,
    color: "#4cb868",
  },
  {
    text: "Nunca imaginei que conseguiria ganhar massa sem engordar. Rafael criou uma dieta que respeita minha rotina de treinos.",
    name: "L.F.",
    role: "Hipertrofia",
    rating: 5,
    image: null,
    color: "#2d8f47",
  },
  {
    text: "Competir de forma saudável? Agora é possível. Rafael me preparou para minha primeira competição de forma impecável!",
    name: "J.P.",
    role: "Atleta",
    rating: 5,
    image: null,
    color: "#ffd700",
  },
  {
    text: "Atendimento sensacional! Sempre disponível, sempre atencioso. Melhor investimento que fiz na minha saúde.",
    name: "C.B.",
    role: "Performance",
    rating: 5,
    image: null,
    color: "#1e6b32",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="star-rating">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={`star ${i < rating ? "filled" : ""}`}>
        ★
      </span>
    ))}
  </div>
);

export const Results = () => {
  return (
    <section className="results-showcase" id="resultados">
      {/* Animated Background */}
      <div className="results-bg">
        <div className="results-gradient-1"></div>
        <div className="results-gradient-2"></div>
        <div className="floating-quotes">
          <span className="quote-mark quote-1">"</span>
          <span className="quote-mark quote-2">"</span>
          <span className="quote-mark quote-3">"</span>
        </div>
      </div>

      <div className="container">
        {/* Header */}
        <div className="results-header">
          <span className="results-eyebrow">Depoimentos Reais</span>
          <h2 className="results-title">
            Meu, Seu,
            <span className="text-glow"> Nosso Resultado</span>
          </h2>
          <p className="results-subtitle">
            Seu resultado começa quando você decide agir, seja a próxima(o)!
          </p>
        </div>

        {/* Stats Counter */}
        <div className="stats-counter">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="stat-icon">{stat.icon}</span>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-showcase">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-prism"
              style={
                {
                  "--accent-color": testimonial.color,
                  animationDelay: `${index * 0.15}s`,
                } as React.CSSProperties
              }
            >
              <div className="prism-accent"></div>
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p className="testimonial-quote">{testimonial.text}</p>
                <StarRating rating={testimonial.rating} />
                <div className="testimonial-footer">
                  <div className="author-avatar">
                    <span>{testimonial.name.charAt(0)}</span>
                  </div>
                  <div className="author-info">
                    <span className="author-name">{testimonial.name}</span>
                    <span className="author-role">{testimonial.role}</span>
                  </div>
                  <div className="verified-badge">
                    <span>✓</span> Verificado
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Banner */}
        <div className="social-proof">
          <div className="proof-avatars">
            {["M", "L", "J", "C", "A"].map((initial, i) => (
              <div
                key={i}
                className="proof-avatar"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {initial}
              </div>
            ))}
            <div className="proof-more">+45</div>
          </div>
          <p className="proof-text">
            Junte-se a <strong>mais de 50 pessoas</strong> que já transformaram
            suas vidas
          </p>
        </div>

        {/* CTA Section */}
        <div className="results-cta">
          <div className="cta-card">
            <div className="cta-glow"></div>
            <div className="cta-content">
              <h3>Pronto para transformar sua vida?</h3>
              <p>Dê o primeiro passo hoje</p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                <WhatsAppIcon />
                <span>Quero meu resultado</span>
                <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
