<?php
  $currentYear = date('Y');
?>
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>LGK Locadora | Aluguel de carros rápido e seguro</title>
    <meta
      name="description"
      content="LGK Locadora oferece reservas online, contrato digital e frota nova para viagens e trabalho. Alugue seu carro em minutos."
    />
    <meta property="og:title" content="LGK Locadora | Aluguel de carros rápido e seguro" />
    <meta
      property="og:description"
      content="Reserva online, contrato digital e retirada rápida com frota revisada e suporte 24/7."
    />
    <meta property="og:type" content="website" />
    <link rel="stylesheet" href="styles.css" />
    <link rel="preconnect" href="https://images.unsplash.com" />
  </head>
  <body>
    <header class="site-header">
      <div class="container nav">
        <a href="#top" class="logo" aria-label="Ir para o topo">LGK LOCADORA</a>
        <nav class="nav-links" aria-label="Navegação principal">
          <a href="#como-funciona">Como Funciona</a>
          <a href="#frota">Frota</a>
          <a href="#planos">Planos</a>
          <a href="#seguranca">Segurança</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div class="nav-actions">
          <a class="button button-primary" href="#reserva">Reservar Agora</a>
          <button class="mobile-toggle" type="button" aria-label="Abrir menu">☰</button>
        </div>
      </div>
      <div class="container mobile-drawer" aria-label="Menu mobile" hidden>
        <a href="#como-funciona">Como Funciona</a>
        <a href="#frota">Frota</a>
        <a href="#planos">Planos</a>
        <a href="#seguranca">Segurança</a>
        <a href="#depoimentos">Depoimentos</a>
        <a href="#faq">FAQ</a>
        <a class="button button-primary" href="#reserva">Reservar Agora</a>
      </div>
    </header>

    <main>
      <section id="top" class="hero scroll-section">
        <div class="container hero-grid">
          <div>
            <span class="badge">Locação premium e sem burocracia</span>
            <h1>Alugue seu carro em minutos — sem burocracia</h1>
            <p>
              Reserva online, contrato digital e retirada rápida. Frota revisada e suporte
              24/7.
            </p>
            <div class="hero-actions">
              <a class="button button-primary" href="#frota">Ver Frota</a>
              <a class="button button-secondary" href="#como-funciona">Como funciona</a>
            </div>
            <div class="hero-chips" aria-label="Diferenciais">
              <span class="badge">Contrato digital</span>
              <span class="badge">Pagamento seguro</span>
              <span class="badge">Assistência 24h</span>
            </div>
          </div>
          <div class="hero-image">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=3840&q=80"
              alt="Carro premium na estrada"
              width="1200"
              height="900"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section class="section scroll-section">
        <div class="container">
          <h2 class="section-title">Confiado por quem precisa rodar</h2>
          <p class="section-subtitle">
            Centenas de motoristas e famílias escolhem a LGK para viajar e trabalhar.
          </p>
          <div class="logo-strip">
            <div class="logo-card">Empresas Parceiras</div>
            <div class="logo-card">Eventos</div>
            <div class="logo-card">Turismo</div>
            <div class="logo-card">Motoristas de App</div>
            <div class="logo-card">Equipes Remotas</div>
          </div>
        </div>
      </section>

      <section id="como-funciona" class="section scroll-section">
        <div class="container">
          <h2 class="section-title">Como funciona a LGK Locadora</h2>
          <p class="section-subtitle">
            Processo digital, simples e transparente do início ao fim.
          </p>
          <div class="tabs" role="tablist" aria-label="Passos da locação">
            <button class="tab-button active" type="button" data-tab="escolha">Escolha o veículo</button>
            <button class="tab-button" type="button" data-tab="reserva">Reserve online</button>
            <button class="tab-button" type="button" data-tab="retirada">Retire sem burocracia</button>
            <button class="tab-button" type="button" data-tab="pagamento">Pague com segurança</button>
            <button class="tab-button" type="button" data-tab="devolucao">Devolução + relatório</button>
          </div>
          <div class="hero-grid tab-content">
            <div>
              <h3 class="section-title" id="tab-title" style="font-size: 28px;">Escolha o veículo</h3>
              <p class="section-subtitle" id="tab-description">
                Navegue por categorias e encontre o carro ideal para cada ocasião, com preços transparentes.
              </p>
              <ul class="feature-list" id="tab-bullets"></ul>
            </div>
            <div class="hero-image">
              <img
                id="tab-image"
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=3840&q=80"
                alt="Ilustração do passo Escolha o veículo"
                width="1200"
                height="900"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="section scroll-section">
        <div class="container">
          <h2 class="section-title">Tudo o que você precisa para alugar com tranquilidade</h2>
          <p class="section-subtitle">
            Gestão completa e suporte humano para você dirigir sem preocupação.
          </p>
          <div class="card-grid">
            <div class="card">
              <div class="card-icon" aria-hidden="true">1</div>
              <h3>Seguro e proteção</h3>
              <p class="section-subtitle">Cobertura completa com assistência dedicada.</p>
            </div>
            <div class="card">
              <div class="card-icon" aria-hidden="true">2</div>
              <h3>Assistência 24h</h3>
              <p class="section-subtitle">Equipe pronta para ajudar em qualquer horário.</p>
            </div>
            <div class="card">
              <div class="card-icon" aria-hidden="true">3</div>
              <h3>Check-in/out digital</h3>
              <p class="section-subtitle">Tudo resolvido pelo celular, sem filas.</p>
            </div>
            <div class="card">
              <div class="card-icon" aria-hidden="true">4</div>
              <h3>Controle de manutenção</h3>
              <p class="section-subtitle">Frota sempre revisada e higienizada.</p>
            </div>
            <div class="card">
              <div class="card-icon" aria-hidden="true">5</div>
              <h3>Relatórios de locação</h3>
              <p class="section-subtitle">Histórico completo das reservas e pagamentos.</p>
            </div>
            <div class="card">
              <div class="card-icon" aria-hidden="true">6</div>
              <h3>Suporte humano rápido</h3>
              <p class="section-subtitle">Atendimento consultivo para cada perfil.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="frota" class="section scroll-section">
        <div class="container">
          <h2 class="section-title">Frota nova e versátil</h2>
          <p class="section-subtitle">Escolha o carro ideal com filtros rápidos e reserva imediata.</p>
          <div class="filter-bar" aria-label="Filtros da frota">
            <select class="input" id="fleet-category" aria-label="Filtrar por categoria">
              <option value="Todas">Todas</option>
              <option value="Econômico">Econômico</option>
              <option value="Compacto">Compacto</option>
              <option value="SUV">SUV</option>
              <option value="Premium">Premium</option>
            </select>
            <input
              class="input"
              type="search"
              id="fleet-search"
              placeholder="Buscar veículo"
              aria-label="Buscar veículo"
            />
          </div>
          <div class="card-grid" id="fleet-grid"></div>
        </div>
      </section>

      <section id="planos" class="section scroll-section">
        <div class="container">
          <h2 class="section-title">Planos inteligentes</h2>
          <p class="section-subtitle">Opções flexíveis para viagens, trabalho e uso prolongado.</p>
          <div class="card-grid" id="plans-grid"></div>
        </div>
      </section>

      <section id="seguranca" class="section scroll-section">
        <div class="container security-grid">
          <div>
            <h2 class="section-title">Segurança em cada etapa</h2>
            <p class="section-subtitle">
              Tecnologia e processos claros para você dirigir com confiança.
            </p>
            <ul class="feature-list">
              <li>Veículos revisados e higienizados</li>
              <li>Contrato e recibos automáticos</li>
              <li>Pagamento criptografado</li>
              <li>Checklist com fotos</li>
            </ul>
          </div>
          <div class="hero-image">
            <img
              src="https://images.unsplash.com/photo-1517142089942-ba376ce32a0b?auto=format&fit=crop&w=3840&q=80"
              alt="Interior limpo de um carro premium"
              width="1200"
              height="900"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section id="depoimentos" class="section scroll-section">
        <div class="container">
          <h2 class="section-title">Quem alugou, recomenda</h2>
          <p class="section-subtitle">Relatos reais de clientes que confiam na LGK para o dia a dia.</p>
          <div class="testimonials-grid">
            <div class="card">
              <h3>“Processo rápido e transparente.”</h3>
              <p class="section-subtitle">
                Reservei pelo celular e retirei em menos de 15 minutos. A frota estava impecável
                e o contrato digital facilitou tudo.
              </p>
              <strong>Marina Lopes • Empresária</strong>
            </div>
            <div class="card-grid">
              <div class="card">
                <p class="section-subtitle">
                  “Atendimento muito humano e suporte 24h funcionou de verdade.”
                </p>
                <strong>Rafael Mendes</strong>
              </div>
              <div class="card">
                <p class="section-subtitle">“Plano semanal perfeito para minha viagem em família.”</p>
                <strong>Camila Torres</strong>
              </div>
              <div class="card">
                <p class="section-subtitle">“Frota nova e pagamentos sem complicação.”</p>
                <strong>Diego Carvalho</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" class="section scroll-section">
        <div class="container">
          <h2 class="section-title">Dúvidas frequentes</h2>
          <p class="section-subtitle">Tudo que você precisa saber antes de reservar.</p>
          <div class="faq">
            <details>
              <summary>Quais documentos preciso para alugar?</summary>
              <p class="section-subtitle">
                CNH válida há pelo menos 2 anos, documento de identidade e cartão para caução.
              </p>
            </details>
            <details>
              <summary>Existe caução?</summary>
              <p class="section-subtitle">
                Sim, a caução é informada no momento da reserva e liberada após a vistoria final.
              </p>
            </details>
            <details>
              <summary>Como funciona o seguro?</summary>
              <p class="section-subtitle">
                Os planos incluem proteção básica com opção de cobertura total e franquia reduzida.
              </p>
            </details>
            <details>
              <summary>A quilometragem é livre?</summary>
              <p class="section-subtitle">
                Temos opções com quilometragem livre e pacotes ajustados para cada plano.
              </p>
            </details>
            <details>
              <summary>E se eu receber multas?</summary>
              <p class="section-subtitle">
                As multas são repassadas ao condutor responsável, com aviso imediato por e-mail.
              </p>
            </details>
            <details>
              <summary>Posso devolver em outro local?</summary>
              <p class="section-subtitle">Sim, basta selecionar o local de devolução no momento da reserva.</p>
            </details>
            <details>
              <summary>Como é o cancelamento?</summary>
              <p class="section-subtitle">
                Cancelamentos podem ser feitos online seguindo a política informada na reserva.
              </p>
            </details>
            <details>
              <summary>A LGK atende empresas?</summary>
              <p class="section-subtitle">
                Atendemos empresas e eventos com contratos personalizados e gestão de frota.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section id="reserva" class="section scroll-section">
        <div class="container">
          <div class="cta">
            <div>
              <h2>Pronto para reservar?</h2>
              <p>Preencha os dados e nossa equipe confirmará sua reserva pelo WhatsApp.</p>
            </div>
            <form id="reservation-form">
              <div class="grid form-grid">
                <div>
                  <label for="name">Nome</label>
                  <input id="name" class="input" required />
                </div>
                <div>
                  <label for="phone">WhatsApp</label>
                  <input id="phone" class="input" required />
                </div>
              </div>
              <div class="grid form-grid">
                <div>
                  <label for="pickup">Data retirada</label>
                  <input id="pickup" type="date" class="input" required />
                </div>
                <div>
                  <label for="dropoff">Data devolução</label>
                  <input id="dropoff" type="date" class="input" required />
                </div>
              </div>
              <div>
                <label for="location">Local</label>
                <input
                  id="location"
                  class="input"
                  placeholder="Ex: Aeroporto, Centro, Shopping"
                  required
                />
              </div>
              <div class="grid form-grid">
                <div>
                  <label for="car">Veículo</label>
                  <select id="car" class="input">
                    <option value="">Selecione</option>
                  </select>
                </div>
                <div>
                  <label for="plan">Plano</label>
                  <select id="plan" class="input">
                    <option value="">Selecione</option>
                  </select>
                </div>
              </div>
              <button type="submit" class="button button-primary">Enviar no WhatsApp</button>
              <small>
                Ao enviar, você concorda com o uso dos dados para contato conforme a LGPD.
              </small>
            </form>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="container footer-grid">
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
      <div class="container footer-bottom">
        <p>© <?php echo $currentYear; ?> LGK LOCADORA. Todos os direitos reservados.</p>
      </div>
    </footer>

    <script src="script.js"></script>
  </body>
</html>
