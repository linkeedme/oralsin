// Conteúdo comercial e funcional da proposta OralSin.
// Fonte de verdade: proposta-oralsin-2026-09-16.md (Linkeed · Davi Torres).
// Editar aqui não exige tocar nos componentes.

export const client = {
  name: "OralSin Implantes",
  units: ["Volta Redonda", "Barra Mansa"],
};

export const findings = [
  {
    value: "100%",
    label: "dos pacientes “sem agendamento” estão parados há mais de 1 ano",
    detail: "pior caso registrado: 849 dias sem contato",
  },
  {
    value: "91%",
    label: "do retrabalho em prótese total concentrado em só 2 das 6 etapas",
    detail: "prova sem barra e prova sobre barra",
  },
  {
    value: "75%",
    label: "dos tratamentos pausados são por inadimplência",
    detail: "sem cruzamento com a lista de urgências clínicas",
  },
  {
    value: "31",
    label: "pacientes reaparecem em meses diferentes com o mesmo problema",
    detail: "nenhum relatório hoje mostra esse padrão de reincidência",
  },
];

export const modules = [
  {
    name: "Paciente & Casos",
    description: "Ficha única do paciente com histórico completo.",
    features: ["Tipo de tratamento", "Dentista responsável", "Status do caso"],
    benefit: "Fim das planilhas duplicadas por dentista",
  },
  {
    name: "Etapas de Tratamento",
    description: "Fluxo configurável por tipo de tratamento (Templates).",
    features: ["Sequência e duração por tipo", "Contador automático de repetição"],
    benefit: "Retrabalho visível onde ele realmente acontece",
  },
  {
    name: "Controle Protético",
    description: "Trabalho vinculado ao caso, com fluxo de laboratório.",
    features: ["Laboratório interno ou terceirizado", "Comanda digital com confirmação"],
    benefit: "Rastreabilidade do caso até a instalação",
  },
  {
    name: "Alinhamentos Gestão-Doutor",
    description: "Anotação da gestão sobre um caso, com controle de visibilidade.",
    features: ["Lembrete interno (oculto)", "Visível na ficha do doutor quando necessário"],
    benefit: "Comunicação gestão-clínico sem perder contexto",
  },
  {
    name: "Agenda",
    description: "Calendário de consultas por unidade e por dentista.",
    features: ["Visão Mês / Semana / Dia"],
    benefit: "Agenda centralizada, sem planilha paralela",
  },
  {
    name: "Painel Operacional & Gerencial",
    description: "KPIs e funil de tratamento etapa a etapa.",
    features: ["Retrabalho por dentista e por laboratório", "SLA de duração de caso"],
    benefit: "Visão de gestão sem vasculhar planilha",
  },
  {
    name: "Relatórios",
    description: "Recortes exportáveis (CSV) para decisões rápidas.",
    features: ["Por dentista", "Por laboratório", "Por gravidade de ocorrência", "Pacientes sem agendamento"],
    benefit: "Dados prontos para reunião, sem montar na mão",
  },
  {
    name: "Controle de acesso por perfil",
    description: "Cada perfil vê exatamente o que precisa.",
    features: ["Dentista/Auxiliar: só os próprios pacientes", "Recepção/Gestão: toda a unidade"],
    benefit: "Privacidade entre profissionais, sem perder visão de gestão",
  },
];

export const scopeIncluded = [
  "Cadastro de paciente e caso com histórico completo",
  "Etapas de tratamento configuráveis por tipo (Templates)",
  "Controle protético com fluxo de laboratório e comanda digital",
  "Alinhamentos entre gestão e doutor por caso",
  "Agenda por unidade e por dentista",
  "Painel gerencial com funil de tratamento e retrabalho",
  "Relatórios exportáveis em CSV",
  "Controle de acesso por perfil (Dentista, Auxiliar, Recepção, Gestão)",
];

export const scopeExcluded = [
  "Controle financeiro completo (cobrança, parcelas, boletos)",
  "O sistema entra apenas com um status simples — em dia / pendente / pausado — por caso",
];

export const flow = [
  { step: "Entrada", detail: "Cadastro do paciente e abertura do caso" },
  { step: "Tratamento", detail: "Etapas avançam com contador de repetição" },
  { step: "Protético", detail: "Trabalho segue com o laboratório até a instalação" },
  { step: "Acompanhamento", detail: "Alertas de ocorrência e de paciente sem agendamento" },
  { step: "Gestão", detail: "Alinhamentos gestão-doutor por caso" },
  { step: "Indicadores", detail: "Painel gerencial, funil e relatórios exportáveis" },
];

export const phases = [
  {
    number: "01",
    name: "Fundação",
    duration: "18 dias úteis",
    items: [
      "Login multi-unidade + controle por perfil",
      "Cadastro de Paciente",
      "Casos & Etapas",
      "Templates configuráveis",
      "Dashboard de casos",
      "Trilha de auditoria",
    ],
  },
  {
    number: "02",
    name: "Protético",
    duration: "+14 dias úteis",
    items: [
      "Trabalho protético",
      "Fluxo com laboratório",
      "Comanda digital",
      "Ranking de retrabalho por laboratório",
    ],
  },
  {
    number: "03",
    name: "Alertas",
    duration: "+16 dias úteis",
    items: [
      "Ocorrências com gravidade obrigatória",
      "Alinhamentos gestão-doutor (visível/oculto)",
      "Notas de recepção e clínicas",
      "Alerta automático de paciente sem agendamento",
    ],
  },
  {
    number: "04",
    name: "Gerencial",
    duration: "+13 dias úteis",
    items: [
      "Painel gerencial cross-unidade",
      "Funil de tratamento",
      "Retrabalho por dentista/laboratório",
      "Relatórios exportáveis",
      "Agenda em calendário (mês/semana/dia)",
    ],
  },
];

export const investment = {
  totalDays: "~61 dias úteis (~3 meses)",
  intro: "Desenvolvimento completo do sistema — 4 fases, ~61 dias úteis — com o código pertencendo à OralSin.",
  support: {
    price: "R$ 299/mês",
    detail: "inclui servidor/hospedagem + suporte técnico",
    grace: "cobrança começa 3 meses após a finalização do sistema",
  },
  options: [
    {
      key: "avista",
      title: "À vista",
      subtitle: "Pagamento único",
      description: "Pagamento integral do projeto em uma única parcela.",
      highlight: "R$ 14.900",
      highlightLabel: "investimento total",
      terms: [],
    },
    {
      key: "parcelado",
      title: "Entrada + 3 parcelas",
      subtitle: "Parcelado",
      description: "30% de entrada e o restante parcelado em 3x.",
      highlight: "R$ 4.470",
      highlightLabel: "de entrada (30%)",
      terms: ["Restante de R$ 10.430 em 3 parcelas de ~R$ 3.477", "Total do projeto: R$ 14.900"],
    },
  ],
  bonus: {
    label: "Brinde no fechamento",
    title: "Alertas no WhatsApp",
    description:
      "Ao fechar o projeto, a OralSin ganha alertas automáticos no WhatsApp, enviados para a gestora ou para um grupo.",
    items: ["Alertas de relatórios", "Alertas de casos críticos"],
  },
};

export const faq = [
  {
    q: "O sistema substitui todas as planilhas de uma vez?",
    a: "A Fase 1 já substitui a planilha mais crítica — cadastro e acompanhamento de caso. A equipe para de usar Excel para isso a partir da primeira entrega, e as demais planilhas (protético, ocorrências, agenda) saem de cena fase a fase.",
  },
  {
    q: "Quem pode ver os dados de quais pacientes?",
    a: "Dentistas e auxiliares veem apenas os próprios pacientes. Recepção e Gestão veem toda a unidade, e a Gestão pode ter acesso a mais de uma unidade — Volta Redonda e Barra Mansa continuam com dados isolados entre si.",
  },
  {
    q: "O sistema cuida da cobrança dos pacientes?",
    a: "Não. Esta proposta cobre um status simples — em dia / pendente / pausado — por caso, o suficiente para cruzar com a informação clínica sem assumir a gestão de cobrança. Controle financeiro completo fica fora do escopo atual.",
  },
  {
    q: "Quanto tempo leva até ter algo em uso?",
    a: "A Fase 1 (Fundação) entrega em 18 dias úteis. O projeto completo das 4 fases leva cerca de 61 dias úteis, por volta de 3 meses.",
  },
  {
    q: "O que está incluso na mensalidade de R$ 299?",
    a: "Servidor/hospedagem e suporte técnico da plataforma. Não cobre desenvolvimento de feature nova — evoluções contínuas depois da Fase 4 são negociadas como um novo pacote. A cobrança só começa 3 meses após a entrega final do sistema.",
  },
  {
    q: "O sistema pode evoluir depois das 4 fases?",
    a: "Sim. A base já nasce multi-unidade e multi-tenant, preparada para crescer. Novas evoluções são estruturadas conforme necessidade e escopo futuro — não fazem parte automática deste contrato.",
  },
];

export const kpiSample = [
  { label: "Casos ativos", value: "128", trend: "+6 esta semana", positive: true },
  { label: "Retrabalho médio", value: "1,4x", trend: "por etapa", positive: null },
  { label: "Sem agendamento", value: "9", trend: "necessitam contato", positive: false },
  { label: "SLA médio de caso", value: "42 dias", trend: "da abertura à instalação", positive: null },
];

export const funnelSample = [
  { label: "Caso aberto", value: 128 },
  { label: "Moldagem", value: 104 },
  { label: "Prova", value: 76 },
  { label: "Confecção", value: 61 },
  { label: "Instalação", value: 53 },
];
