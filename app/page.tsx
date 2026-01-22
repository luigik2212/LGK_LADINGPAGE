"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const navLinks = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Frota", href: "#frota" },
  { label: "Planos", href: "#planos" },
  { label: "Segurança", href: "#seguranca" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" }
];

const tabs = [
  {
    id: "escolha",
    title: "Escolha o veículo",
    description:
      "Navegue por categorias e encontre o carro ideal para cada ocasião, com preços transparentes.",
    bullets: [
      "Filtros por categoria, câmbio e portas",
      "Porta-malas sob medida para sua viagem",
      "Preço final sem surpresas"
    ],
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=3840&q=80"
  },
  {
    id: "reserva",
    title: "Reserve online",
    description:
      "Finalize a reserva em minutos e escolha local, horário e adicionais personalizados.",
    bullets: [
      "Datas e horários flexíveis",
      "Local de retirada e devolução",
      "Adicionais como cadeirinha e seguro"
    ],
    image:
      "https://images.unsplash.com/photo-1517142089942-ba376ce32a0b?auto=format&fit=crop&w=3840&q=80"
  },
  {
    id: "retirada",
    title: "Retire sem burocracia",
    description:
      "Validação digital de documentos e checklist completo para sair dirigindo rápido.",
    bullets: [
      "Validação de CNH em poucos cliques",
      "Checklist digital com fotos",
      "Retirada em minutos"
    ],
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=3840&q=80"
  },
  {
    id: "pagamento",
    title: "Pague com segurança",
    description:
      "Meios de pagamento protegidos e contrato digital disponível para consulta.",
    bullets: [
      "Pix e cartão com confirmação instantânea",
      "Caução transparente",
      "Recibo e contrato em PDF"
    ],
    image:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=3840&q=80"
  },
  {
    id: "devolucao",
    title: "Devolução + relatório",
    description:
      "Finalize a locação com vistoria digital e histórico completo das viagens.",
    bullets: [
      "Vistoria detalhada na devolução",
      "Fechamento automático do contrato",
      "Relatórios e histórico salvos"
    ],
    image:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=3840&q=80"
  }
];

const fleet = [
  {
    name: "Fiat Mobi 2025",
    category: "Econômico",
    price: "R$ 119",
    specs: ["Manual", "Flex", "4 portas"],
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=3840&q=80"
  },
  {
    name: "HB20 2024",
    category: "Compacto",
    price: "R$ 149",
    specs: ["Automático", "Flex", "4 portas"],
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=3840&q=80"
  },
  {
    name: "Jeep Renegade 2022",
    category: "SUV",
    price: "R$ 219",
    specs: ["Automático", "Flex", "5 portas"],
    image:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=3840&q=80"
  },
  {
    name: "Fiat Pulse 2025",
    category: "Premium",
    price: "R$ 269",
    specs: ["Automático", "Flex", "5 portas"],
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=3840&q=80"
  }
];

const plans = [
  {
    name: "Diária",
    label: "Melhor para viagem curta",
    highlight: false,
    includes: [
      "24h de uso com quilometragem flexível",
      "Check-in e check-out express",
      "Suporte 24/7"
    ]
  },
  {
    name: "Semanal",
    label: "Economia garantida",
    highlight: true,
    includes: [
      "Até 25% de economia",
      "Manutenção preventiva incluída",
      "Assistência 24h"
    ]
  },
  {
    name: "Mensal / App",
    label: "Para quem roda todos os dias",
    highlight: false,
    includes: [
      "Planos para motoristas de app",
      "Substituição rápida em caso de sinistro",
      "Relatórios financeiros"
    ]
  }
];

const faqs = [
  {
    question: "Quais documentos preciso para alugar?",
    answer:
      "CNH válida há pelo menos 2 anos, documento de identidade e cartão para caução."
  },
  {
    question: "Existe caução?",
    answer:
      "Sim, a caução é informada no momento da reserva e liberada após a vistoria final."
  },
  {
    question: "Como funciona o seguro?",
    answer:
      "Os planos incluem proteção básica com opção de cobertura total e franquia reduzida."
  },
  {
    question: "A quilometragem é livre?",
    answer:
      "Temos opções com quilometragem livre e pacotes ajustados para cada plano."
  },
  {
    question: "E se eu receber multas?",
    answer:
      "As multas são repassadas ao condutor responsável, com aviso imediato por e-mail."
  },
  {
    question: "Posso devolver em outro local?",
    answer:
      "Sim, basta selecionar o local de devolução no momento da reserva."
  },
  {
    question: "Como é o cancelamento?",
    answer:
      "Cancelamentos podem ser feitos online seguindo a política informada na reserva."
  },
  {
    question: "A LGK atende empresas?",
    answer:
      "Atendemos empresas e eventos com contratos personalizados e gestão de frota."
  }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [category, setCategory] = useState("Todas");
  const [search, setSearch] = useState("");
  const [selectedCar, setSelectedCar] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    pickup: "",
    dropoff: "",
    location: "",
    car: "",
    plan: ""
  });

  const filteredFleet = useMemo(() => {
    return fleet.filter((item) => {
      const matchesCategory =
        category === "Todas" || item.category === category;
      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  const handleSelectCar = (car: string) => {
    setSelectedCar(car);
    setFormState((prev) => ({ ...prev, car }));
  };

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
    setFormState((prev) => ({ ...prev, plan }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `Olá, gostaria de reservar um carro na LGK Locadora.%0A%0ANome: ${formState.name}%0AWhatsApp: ${formState.phone}%0ARetirada: ${formState.pickup}%0ADevolução: ${formState.dropoff}%0ALocal: ${formState.location}%0AVeículo: ${formState.car || selectedCar}%0APlano: ${formState.plan || selectedPlan}`;
    const url = `https://wa.me/55XXXXXXXXXXX?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <header>
        <div className="container nav">
          <a href="#top" className="logo" aria-label="Ir para o topo">
            LGK LOCADORA
          </a>
          <nav className="nav-links" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <a className="button button-primary" href="#reserva">
              Reservar Agora
            </a>
            <button
              className="mobile-toggle"
              type="button"
              aria-label="Abrir menu"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              ☰
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="container mobile-drawer" aria-label="Menu mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="button button-primary"
              href="#reserva"
              onClick={() => setMenuOpen(false)}
            >
              Reservar Agora
            </a>
          </div>
        )}
      </header>

      <main>
        <section id="top" className="hero scroll-section">
          <div className="container hero-grid">
            <div>
              <span className="badge">Locação premium e sem burocracia</span>
              <h1>Alugue seu carro em minutos — sem burocracia</h1>
              <p>
                Reserva online, contrato digital e retirada rápida. Frota revisada
                e suporte 24/7.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#frota">
                  Ver Frota
                </a>
                <a className="button button-secondary" href="#como-funciona">
                  Como funciona
                </a>
              </div>
              <div className="hero-chips" aria-label="Diferenciais">
                {[
                  "Contrato digital",
                  "Pagamento seguro",
                  "Assistência 24h"
                ].map((chip) => (
                  <span key={chip} className="badge">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="hero-image">
              <Image
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=3840&q=80"
                alt="Carro premium na estrada"
                width={1200}
                height={900}
                priority
              />
            </div>
          </div>
        </section>

        <section className="section scroll-section">
          <div className="container">
            <h2 className="section-title">Confiado por quem precisa rodar</h2>
            <p className="section-subtitle">
              Centenas de motoristas e famílias escolhem a LGK para viajar e
              trabalhar.
            </p>
            <div className="logo-strip">
              {[
                "Empresas Parceiras",
                "Eventos",
                "Turismo",
                "Motoristas de App",
                "Equipes Remotas"
              ].map((item) => (
                <div key={item} className="logo-card">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="section scroll-section">
          <div className="container">
            <h2 className="section-title">Como funciona a LGK Locadora</h2>
            <p className="section-subtitle">
              Processo digital, simples e transparente do início ao fim.
            </p>
            <div className="tabs" role="tablist" aria-label="Passos da locação">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-button ${
                    activeTab.id === tab.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                  role="tab"
                  aria-selected={activeTab.id === tab.id}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <div className="hero-grid">
              <div>
                <h3 className="section-title" style={{ fontSize: 28 }}>
                  {activeTab.title}
                </h3>
                <p className="section-subtitle">{activeTab.description}</p>
                <ul className="feature-list">
                  {activeTab.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <div className="hero-image">
                <Image
                  src={activeTab.image}
                  alt={`Ilustração do passo ${activeTab.title}`}
                  width={1200}
                  height={900}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section scroll-section">
          <div className="container">
            <h2 className="section-title">
              Tudo o que você precisa para alugar com tranquilidade
            </h2>
            <p className="section-subtitle">
              Gestão completa e suporte humano para você dirigir sem preocupação.
            </p>
            <div className="card-grid">
              {[
                {
                  title: "Seguro e proteção",
                  desc: "Cobertura completa com assistência dedicada."
                },
                {
                  title: "Assistência 24h",
                  desc: "Equipe pronta para ajudar em qualquer horário."
                },
                {
                  title: "Check-in/out digital",
                  desc: "Tudo resolvido pelo celular, sem filas."
                },
                {
                  title: "Controle de manutenção",
                  desc: "Frota sempre revisada e higienizada."
                },
                {
                  title: "Relatórios de locação",
                  desc: "Histórico completo das reservas e pagamentos."
                },
                {
                  title: "Suporte humano rápido",
                  desc: "Atendimento consultivo para cada perfil."
                }
              ].map((item, index) => (
                <div key={item.title} className="card">
                  <div className="card-icon" aria-hidden>
                    {index + 1}
                  </div>
                  <h3>{item.title}</h3>
                  <p className="section-subtitle">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="frota" className="section scroll-section">
          <div className="container">
            <h2 className="section-title">Frota nova e versátil</h2>
            <p className="section-subtitle">
              Escolha o carro ideal com filtros rápidos e reserva imediata.
            </p>
            <div className="filter-bar" aria-label="Filtros da frota">
              <select
                className="input"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                aria-label="Filtrar por categoria"
              >
                {["Todas", "Econômico", "Compacto", "SUV", "Premium"].map(
                  (item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  )
                )}
              </select>
              <input
                className="input"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Buscar veículo"
                aria-label="Buscar veículo"
              />
            </div>
            <div className="card-grid">
              {filteredFleet.map((item) => (
                <div key={item.name} className="card fleet-card">
                  <Image
                    src={item.image}
                    alt={`Foto do ${item.name}`}
                    width={800}
                    height={600}
                  />
                  <h3>{item.name}</h3>
                  <p className="section-subtitle">Categoria: {item.category}</p>
                  <div className="fleet-meta">
                    {item.specs.map((spec) => (
                      <span key={spec}>{spec}</span>
                    ))}
                  </div>
                  <strong>{item.price}/dia</strong>
                  <a
                    href="#reserva"
                    className="button button-outline"
                    onClick={() => handleSelectCar(item.name)}
                  >
                    Reservar
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="planos" className="section scroll-section">
          <div className="container">
            <h2 className="section-title">Planos inteligentes</h2>
            <p className="section-subtitle">
              Opções flexíveis para viagens, trabalho e uso prolongado.
            </p>
            <div className="card-grid">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`card plan-card ${
                    plan.highlight ? "highlight" : ""
                  }`}
                >
                  {plan.highlight && (
                    <span className="badge">Mais escolhido</span>
                  )}
                  <h3>{plan.name}</h3>
                  <p className="section-subtitle">{plan.label}</p>
                  <ul className="feature-list">
                    {plan.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a
                    href="#reserva"
                    className="button button-primary"
                    onClick={() => handleSelectPlan(plan.name)}
                  >
                    Quero esse plano
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="seguranca" className="section scroll-section">
          <div className="container security-grid">
            <div>
              <h2 className="section-title">Segurança em cada etapa</h2>
              <p className="section-subtitle">
                Tecnologia e processos claros para você dirigir com confiança.
              </p>
              <ul className="feature-list">
                {
                  [
                    "Veículos revisados e higienizados",
                    "Contrato e recibos automáticos",
                    "Pagamento criptografado",
                    "Checklist com fotos"
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))
                }
              </ul>
            </div>
            <div className="hero-image">
              <Image
                src="https://images.unsplash.com/photo-1517142089942-ba376ce32a0b?auto=format&fit=crop&w=3840&q=80"
                alt="Interior limpo de um carro premium"
                width={1200}
                height={900}
              />
            </div>
          </div>
        </section>

        <section id="depoimentos" className="section scroll-section">
          <div className="container">
            <h2 className="section-title">Quem alugou, recomenda</h2>
            <p className="section-subtitle">
              Relatos reais de clientes que confiam na LGK para o dia a dia.
            </p>
            <div className="testimonials-grid">
              <div className="card">
                <h3>“Processo rápido e transparente.”</h3>
                <p className="section-subtitle">
                  Reservei pelo celular e retirei em menos de 15 minutos. A frota
                  estava impecável e o contrato digital facilitou tudo.
                </p>
                <strong>Marina Lopes • Empresária</strong>
              </div>
              <div className="card-grid">
                {[
                  {
                    text: "Atendimento muito humano e suporte 24h funcionou de verdade.",
                    name: "Rafael Mendes"
                  },
                  {
                    text: "Plano semanal perfeito para minha viagem em família.",
                    name: "Camila Torres"
                  },
                  {
                    text: "Frota nova e pagamentos sem complicação.",
                    name: "Diego Carvalho"
                  }
                ].map((item) => (
                  <div key={item.name} className="card">
                    <p className="section-subtitle">“{item.text}”</p>
                    <strong>{item.name}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section scroll-section">
          <div className="container">
            <h2 className="section-title">Dúvidas frequentes</h2>
            <p className="section-subtitle">
              Tudo que você precisa saber antes de reservar.
            </p>
            <div className="faq">
              {faqs.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p className="section-subtitle">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="reserva" className="section scroll-section">
          <div className="container">
            <div className="cta">
              <div>
                <h2>Pronto para reservar?</h2>
                <p>
                  Preencha os dados e nossa equipe confirmará sua reserva pelo
                  WhatsApp.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="grid form-grid">
                  <div>
                    <label htmlFor="name">Nome</label>
                    <input
                      id="name"
                      className="input"
                      value={formState.name}
                      onChange={(event) =>
                        setFormState((prev) => ({
                          ...prev,
                          name: event.target.value
                        }))
                      }
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">WhatsApp</label>
                    <input
                      id="phone"
                      className="input"
                      value={formState.phone}
                      onChange={(event) =>
                        setFormState((prev) => ({
                          ...prev,
                          phone: event.target.value
                        }))
                      }
                      required
                    />
                  </div>
                </div>
                <div className="grid form-grid">
                  <div>
                    <label htmlFor="pickup">Data retirada</label>
                    <input
                      id="pickup"
                      type="date"
                      className="input"
                      value={formState.pickup}
                      onChange={(event) =>
                        setFormState((prev) => ({
                          ...prev,
                          pickup: event.target.value
                        }))
                      }
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="dropoff">Data devolução</label>
                    <input
                      id="dropoff"
                      type="date"
                      className="input"
                      value={formState.dropoff}
                      onChange={(event) =>
                        setFormState((prev) => ({
                          ...prev,
                          dropoff: event.target.value
                        }))
                      }
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="location">Local</label>
                  <input
                    id="location"
                    className="input"
                    value={formState.location}
                    onChange={(event) =>
                      setFormState((prev) => ({
                        ...prev,
                        location: event.target.value
                      }))
                    }
                    placeholder="Ex: Aeroporto, Centro, Shopping"
                    required
                  />
                </div>
                <div className="grid form-grid">
                  <div>
                    <label htmlFor="car">Veículo</label>
                    <select
                      id="car"
                      className="input"
                      value={formState.car || selectedCar}
                      onChange={(event) =>
                        setFormState((prev) => ({
                          ...prev,
                          car: event.target.value
                        }))
                      }
                    >
                      <option value="">Selecione</option>
                      {fleet.map((item) => (
                        <option key={item.name} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="plan">Plano</label>
                    <select
                      id="plan"
                      className="input"
                      value={formState.plan || selectedPlan}
                      onChange={(event) =>
                        setFormState((prev) => ({
                          ...prev,
                          plan: event.target.value
                        }))
                      }
                    >
                      <option value="">Selecione</option>
                      {plans.map((item) => (
                        <option key={item.name} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <button type="submit" className="button button-primary">
                  Enviar no WhatsApp
                </button>
                <small>
                  Ao enviar, você concorda com o uso dos dados para contato
                  conforme a LGPD.
                </small>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <h4>Empresa</h4>
            <ul>
              <li>Sobre a LGK</li>
              <li>Frota revisada</li>
              <li>Contrato digital</li>
            </ul>
          </div>
          <div>
            <h4>Suporte</h4>
            <ul>
              <li>Central 24h</li>
              <li>WhatsApp</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h4>Atendimento</h4>
            <ul>
              <li>Av. Principal, 1200 - Centro</li>
              <li>Seg a Dom · 08h às 22h</li>
              <li>contato@lgklocadora.com</li>
            </ul>
          </div>
          <div>
            <h4>Social</h4>
            <ul>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
        <div className="container" style={{ marginTop: 24 }}>
          <p>© {new Date().getFullYear()} LGK LOCADORA. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
