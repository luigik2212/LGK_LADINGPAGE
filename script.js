const tabsData = {
  escolha: {
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
  reserva: {
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
  retirada: {
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
  pagamento: {
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
  devolucao: {
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
};

const fleetData = [
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

const plansData = [
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

const mobileToggle = document.querySelector(".mobile-toggle");
const mobileDrawer = document.querySelector(".mobile-drawer");
const tabButtons = document.querySelectorAll(".tab-button");
const tabTitle = document.getElementById("tab-title");
const tabDescription = document.getElementById("tab-description");
const tabBullets = document.getElementById("tab-bullets");
const tabImage = document.getElementById("tab-image");
const fleetGrid = document.getElementById("fleet-grid");
const categoryFilter = document.getElementById("fleet-category");
const searchInput = document.getElementById("fleet-search");
const carSelect = document.getElementById("car");
const planSelect = document.getElementById("plan");
const plansGrid = document.getElementById("plans-grid");
const reservationForm = document.getElementById("reservation-form");

const selected = {
  car: "",
  plan: ""
};

const renderBullets = (bullets) => {
  tabBullets.innerHTML = "";
  bullets.forEach((bullet) => {
    const li = document.createElement("li");
    li.textContent = bullet;
    tabBullets.appendChild(li);
  });
};

const updateTab = (tabKey) => {
  const data = tabsData[tabKey];
  if (!data) return;
  tabTitle.textContent = data.title;
  tabDescription.textContent = data.description;
  renderBullets(data.bullets);
  tabImage.src = data.image;
  tabImage.alt = `Ilustração do passo ${data.title}`;
  tabImage.classList.remove("fade-in");
  void tabImage.offsetWidth;
  tabImage.classList.add("fade-in");
};

const renderFleet = () => {
  const category = categoryFilter.value;
  const term = searchInput.value.toLowerCase();
  fleetGrid.innerHTML = "";

  const filtered = fleetData.filter((item) => {
    const matchesCategory = category === "Todas" || item.category === category;
    const matchesTerm = item.name.toLowerCase().includes(term);
    return matchesCategory && matchesTerm;
  });

  filtered.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card fleet-card";
    card.innerHTML = `
      <img src="${item.image}" alt="Foto do ${item.name}" width="800" height="600" loading="lazy" />
      <h3>${item.name}</h3>
      <p class="section-subtitle">Categoria: ${item.category}</p>
      <div class="fleet-meta">${item.specs.map((spec) => `<span>${spec}</span>`).join("")}</div>
      <strong>${item.price}/dia</strong>
      <a class="button button-outline" href="#reserva" data-car="${item.name}">Reservar</a>
    `;
    fleetGrid.appendChild(card);
  });
};

const renderPlans = () => {
  plansGrid.innerHTML = "";
  plansData.forEach((plan) => {
    const card = document.createElement("div");
    card.className = `card plan-card${plan.highlight ? " highlight" : ""}`;
    card.innerHTML = `
      ${plan.highlight ? "<span class=\"badge\">Mais escolhido</span>" : ""}
      <h3>${plan.name}</h3>
      <p class="section-subtitle">${plan.label}</p>
      <ul class="feature-list">${plan.includes.map((item) => `<li>${item}</li>`).join("")}</ul>
      <a class="button button-primary" href="#reserva" data-plan="${plan.name}">Quero esse plano</a>
    `;
    plansGrid.appendChild(card);
  });
};

const populateSelects = () => {
  fleetData.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.name;
    option.textContent = item.name;
    carSelect.appendChild(option);
  });

  plansData.forEach((plan) => {
    const option = document.createElement("option");
    option.value = plan.name;
    option.textContent = plan.name;
    planSelect.appendChild(option);
  });
};

mobileToggle?.addEventListener("click", () => {
  if (mobileDrawer.hasAttribute("hidden")) {
    mobileDrawer.removeAttribute("hidden");
  } else {
    mobileDrawer.setAttribute("hidden", "");
  }
});

mobileDrawer?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileDrawer.setAttribute("hidden", "");
  });
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    updateTab(button.dataset.tab);
  });
});

categoryFilter?.addEventListener("change", renderFleet);
searchInput?.addEventListener("input", renderFleet);

fleetGrid?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const car = target.dataset.car;
  if (car) {
    selected.car = car;
    carSelect.value = car;
  }
});

plansGrid?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const plan = target.dataset.plan;
  if (plan) {
    selected.plan = plan;
    planSelect.value = plan;
  }
});

reservationForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const pickup = document.getElementById("pickup").value;
  const dropoff = document.getElementById("dropoff").value;
  const location = document.getElementById("location").value;
  const car = carSelect.value || selected.car;
  const plan = planSelect.value || selected.plan;

  const message = `Olá, gostaria de reservar um carro na LGK Locadora.\n\nNome: ${name}\nWhatsApp: ${phone}\nRetirada: ${pickup}\nDevolução: ${dropoff}\nLocal: ${location}\nVeículo: ${car}\nPlano: ${plan}`;
  const url = `https://wa.me/55XXXXXXXXXXX?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

updateTab("escolha");
renderFleet();
renderPlans();
populateSelects();
