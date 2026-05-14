export type ProjectStatus = "built" | "future";

export const projects = [
  {
    id: "ofx-formatter",
    status: "built" as ProjectStatus,
    tags: ["OFX", "Dados financeiros", "Automação", "Web app", "Vercel"],
    liveUrl: "https://site-umber-six-63.vercel.app",
    githubUrl: "https://github.com/Samuel-Yuiti-SY/Ofx-Formatter",
    pt: {
      title: "OFX Formatter — Correção de Extratos Caixa",
      description:
        "Aplicação web para correção, padronização e exportação de arquivos OFX, criada para facilitar o tratamento de extratos financeiros e reduzir erros de leitura em sistemas de análise ou conciliação.",
      problem:
        "Arquivos OFX podem chegar com estrutura irregular, tags inconsistentes, datas sem padrão ou timezone ausente, criando falhas na leitura por sistemas financeiros.",
      solution:
        "Uma aplicação web que valida o upload, processa o conteúdo em memória, corrige padrões estruturais e devolve um arquivo pronto para uso.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
      ],
      features: [
        "Upload e validação de arquivo OFX",
        "Correção de estrutura e tags",
        "Normalização de datas e timezone",
        "Processamento em memória",
        "Download do arquivo corrigido",
        "Deploy na Vercel",
      ],
      future:
        "Evoluir relatórios de alterações, suporte a novos layouts e validações configuráveis.",
    },
    en: {
      title: "OFX Formatter — Caixa Statement Correction",
      description:
        "Web application for correcting, standardizing, and exporting OFX files, designed to simplify financial statement processing and reduce reading errors in analysis or reconciliation systems.",
      problem:
        "OFX files can contain irregular structure, inconsistent tags, non-standard dates, or missing timezone data, creating reading failures in financial systems.",
      solution:
        "A web application that validates the upload, processes content in memory, fixes structural patterns, and returns a file ready for use.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
      ],
      features: [
        "OFX file upload and validation",
        "Structure and tag correction",
        "Date and timezone normalization",
        "In-memory processing",
        "Corrected file download",
        "Deployment on Vercel",
      ],
      future:
        "Evolve change reports, support new layouts, and add configurable validations.",
    },
  },
  {
    id: "carbontrack",
    status: "built" as ProjectStatus,
    tags: ["Dashboard", "React", "Next.js", "Tailwind", "Dados", "SaaS"],
    liveUrl: "https://carbontrack-v2-theta.vercel.app",
    githubUrl: "https://github.com/Samuel-Yuiti-SY/CarbonTrack",
    pt: {
      title: "CarbonTrack — Emissions Intelligence Dashboard",
      description:
        "Dashboard web para visualização de emissões de CO2, frota, indicadores ambientais e relatórios gerenciais, simulando uma plataforma SaaS para acompanhamento de metas sustentáveis.",
      problem:
        "Indicadores ambientais e operacionais precisam de uma interface clara para facilitar acompanhamento, leitura executiva e análise por período.",
      solution:
        "Um dashboard responsivo com KPIs, telas de frota, visualização de emissões e relatórios para simular uma experiência SaaS completa.",
      technologies: [
        "Python",
        "Flask",
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
      features: [
        "Dashboard com KPIs",
        "Visualização de emissões",
        "Gestão simulada de frota",
        "Relatórios ambientais",
        "Interface responsiva",
        "Tema claro/escuro",
      ],
      future:
        "Evoluir filtros, gráficos interativos, persistência de dados demonstrativos e autenticação.",
    },
    en: {
      title: "CarbonTrack — Emissions Intelligence Dashboard",
      description:
        "Web dashboard for visualizing CO2 emissions, fleet data, environmental indicators, and management reports, simulating a SaaS platform for sustainability goal tracking.",
      problem:
        "Environmental and operational indicators need a clear interface for tracking, executive reading, and period-based analysis.",
      solution:
        "A responsive dashboard with KPIs, fleet screens, emissions visualization, and reports to simulate a complete SaaS experience.",
      technologies: [
        "Python",
        "Flask",
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
      features: [
        "Dashboard with KPIs",
        "Emissions visualization",
        "Simulated fleet management",
        "Environmental reports",
        "Responsive interface",
        "Light/dark theme",
      ],
      future:
        "Evolve filters, interactive charts, demo data persistence, and authentication.",
    },
  },
  {
    id: "financial-layout-validator",
    status: "future" as ProjectStatus,
    tags: ["Python", "Validação", "Arquivos"],
    pt: {
      title: "Financial Layout Validator",
      description:
        "Validador para arquivos financeiros simulados, focado em campos obrigatórios, linhas inválidas e inconsistências de estrutura.",
      problem: "Layouts financeiros precisam de validação antes de importação.",
      solution: "Motor de regras para leitura e diagnóstico de arquivos.",
      technologies: ["Python", "SQL", "FastAPI"],
      features: ["Validação de layout", "Erros por linha", "Resumo técnico"],
      future:
        "Protótipo em evolução para upload, relatórios e regras configuráveis.",
    },
    en: {
      title: "Financial Layout Validator",
      description:
        "Validator for simulated financial files focused on required fields, invalid lines, and structural inconsistencies.",
      problem: "Financial layouts need validation before import.",
      solution: "Rules engine for file reading and diagnosis.",
      technologies: ["Python", "SQL", "FastAPI"],
      features: ["Layout validation", "Line-level errors", "Technical summary"],
      future:
        "Prototype evolving toward upload, reports, and configurable rules.",
    },
  },
  {
    id: "reconciliation-dashboard",
    status: "future" as ProjectStatus,
    tags: ["Dashboard", "SQL", "Conciliação"],
    pt: {
      title: "Reconciliation Dashboard",
      description:
        "Dashboard para vendas, pagamentos, divergências, taxas e pendências usando dados fictícios.",
      problem:
        "Conciliações precisam de leitura rápida de diferenças e pendências.",
      solution: "Painel com indicadores, filtros e tabelas de divergência.",
      technologies: ["Next.js", "TypeScript", "SQL"],
      features: ["KPIs", "Filtros", "Tabela de divergências"],
      future: "Experimento visual para simulação de conciliação financeira.",
    },
    en: {
      title: "Reconciliation Dashboard",
      description:
        "Dashboard for sales, payments, discrepancies, fees, and pending items using fictional data.",
      problem:
        "Reconciliation needs quick reading of differences and pending items.",
      solution: "Panel with indicators, filters, and discrepancy tables.",
      technologies: ["Next.js", "TypeScript", "SQL"],
      features: ["KPIs", "Filters", "Discrepancy table"],
      future: "Visual experiment for simulated financial reconciliation.",
    },
  },
  {
    id: "transactions-api",
    status: "future" as ProjectStatus,
    tags: ["Python", "API", "Transações"],
    pt: {
      title: "Transactions API",
      description:
        "API em Python para cadastro, importação, análise e detecção de inconsistências em transações financeiras.",
      problem: "Transações de fontes diferentes precisam de padronização.",
      solution: "API para importar, listar e sinalizar inconsistências.",
      technologies: ["Python", "FastAPI", "SQL"],
      features: ["CRUD", "Importação", "Validações"],
      future: "Experimento para modelagem de endpoints financeiros.",
    },
    en: {
      title: "Transactions API",
      description:
        "Python API for registering, importing, analyzing, and detecting inconsistencies in financial transactions.",
      problem: "Transactions from different sources need standardization.",
      solution: "API to import, list, and flag inconsistencies.",
      technologies: ["Python", "FastAPI", "SQL"],
      features: ["CRUD", "Import", "Validations"],
      future: "Experiment for modeling financial endpoints.",
    },
  },
] as const;
