export type ProjectStatus = "built" | "future";

export const projects = [
  {
    id: "ofx-formatter",
    status: "built" as ProjectStatus,
    tags: ["OFX", "Dados financeiros", "Automação", "Web app", "Vercel"],
    liveUrl: "https://site-umber-six-63.vercel.app",
    githubUrl: "https://github.com/Samuel-Yuiti-SY/Ofx-Formatter",
    pt: {
      title: "Correção de Extratos Caixa OFX",
      description:
        "Ferramenta web para correção e padronização de arquivos OFX da Caixa, facilitando o tratamento de extratos e o uso posterior em sistemas financeiros.",
      problem:
        "Arquivos OFX podem chegar com inconsistências de estrutura, datas ou campos, dificultando importação e conferência.",
      solution:
        "Uma interface simples para enviar o arquivo, validar formato, corrigir padrões e baixar uma versão normalizada.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
      ],
      features: [
        "Upload e validação de arquivos OFX",
        "Processamento em memória",
        "Correção de tags, datas e timezone",
        "Download do arquivo formatado",
      ],
      future:
        "Adicionar histórico local, relatório de alterações e suporte a outros layouts bancários.",
    },
    en: {
      title: "Caixa OFX Statement Formatter",
      description:
        "Web tool for correcting and standardizing Caixa OFX files, making bank statement processing easier for financial systems.",
      problem:
        "OFX files can contain structural, date, or field inconsistencies that make import and review harder.",
      solution:
        "A simple interface to upload the file, validate its format, correct patterns, and download a normalized version.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
      ],
      features: [
        "OFX upload and validation",
        "In-memory processing",
        "Tag, date, and timezone correction",
        "Formatted file download",
      ],
      future:
        "Add local history, change reports, and support for more bank layouts.",
    },
  },
  {
    id: "carbontrack",
    status: "built" as ProjectStatus,
    tags: [
      "Dashboard",
      "React",
      "Next.js",
      "Tailwind",
      "Dados",
      "Sustentabilidade",
    ],
    liveUrl: "https://carbontrack-v2-theta.vercel.app",
    githubUrl: "https://github.com/Samuel-Yuiti-SY/CarbonTrack",
    pt: {
      title: "CarbonTrack",
      description:
        "Dashboard web para monitoramento de emissões de CO2, gestão de frota, relatórios ambientais e acompanhamento de indicadores sustentáveis.",
      problem:
        "Indicadores ambientais e dados de frota precisam ser visualizados de forma clara para facilitar leitura e acompanhamento.",
      solution:
        "Um painel demonstrativo com métricas, relatórios e navegação para simular um produto de monitoramento ambiental.",
      technologies: [
        "Python",
        "Flask",
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
      features: [
        "Dashboard com indicadores",
        "Páginas de frota, emissões e relatórios",
        "Dados fictícios para demonstração",
        "Versão moderna publicada na Vercel",
      ],
      future:
        "Evoluir filtros, gráficos interativos, autenticação real e persistência de dados simulados.",
    },
    en: {
      title: "CarbonTrack",
      description:
        "Web dashboard for CO2 emissions monitoring, fleet management, environmental reports, and sustainability KPI tracking.",
      problem:
        "Environmental indicators and fleet data need to be visualized clearly for easier review and tracking.",
      solution:
        "A demo dashboard with metrics, reports, and navigation that simulates an environmental monitoring product.",
      technologies: [
        "Python",
        "Flask",
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
      features: [
        "Dashboard with indicators",
        "Fleet, emissions, and reports pages",
        "Fictional data for demonstration",
        "Modern version deployed on Vercel",
      ],
      future:
        "Improve filters, interactive charts, real authentication, and simulated data persistence.",
    },
  },
  {
    id: "financial-layout-validator",
    status: "future" as ProjectStatus,
    tags: ["Python", "Validação", "Arquivos", "Financeiro"],
    pt: {
      title: "Validador de Layout Financeiro",
      description:
        "Sistema para validar arquivos financeiros simulados, identificar campos obrigatórios ausentes, linhas inválidas e inconsistências de estrutura.",
      problem:
        "Arquivos operacionais podem ser rejeitados por campos ausentes, ordem incorreta ou linhas fora do padrão.",
      solution:
        "Validador com regras configuráveis, retorno de erros por linha e resumo de inconsistências.",
      technologies: ["Python", "SQL", "FastAPI", "React"],
      features: [
        "Leitura de arquivos simulados",
        "Validação de campos obrigatórios",
        "Relatório de erros por linha",
      ],
      future:
        "Criar interface de upload, exportação de relatório e templates por layout.",
    },
    en: {
      title: "Financial Layout Validator",
      description:
        "System for validating simulated financial files, identifying missing required fields, invalid lines, and structural inconsistencies.",
      problem:
        "Operational files can be rejected because of missing fields, incorrect order, or lines outside the expected structure.",
      solution:
        "Validator with configurable rules, line-level errors, and inconsistency summaries.",
      technologies: ["Python", "SQL", "FastAPI", "React"],
      features: [
        "Simulated file reading",
        "Required field validation",
        "Line-level error report",
      ],
      future:
        "Create upload interface, report export, and templates by file layout.",
    },
  },
  {
    id: "reconciliation-dashboard",
    status: "future" as ProjectStatus,
    tags: ["Dashboard", "SQL", "Dados fictícios", "Conciliação"],
    pt: {
      title: "Dashboard de Conciliação Financeira Simulada",
      description:
        "Dashboard para análise de vendas, pagamentos, divergências, taxas e pendências usando dados fictícios.",
      problem:
        "Processos de conciliação exigem visão rápida sobre diferenças, pendências e indicadores de volume.",
      solution:
        "Painel com dados simulados, filtros e cards de impacto para demonstrar análise financeira visual.",
      technologies: ["Next.js", "TypeScript", "SQL", "Tailwind CSS"],
      features: [
        "Cards de indicadores",
        "Tabela de divergências",
        "Filtros por período e status",
      ],
      future:
        "Adicionar gráficos, upload CSV e explicação automática de divergências.",
    },
    en: {
      title: "Simulated Financial Reconciliation Dashboard",
      description:
        "Dashboard for analyzing sales, payments, discrepancies, fees, and pending items using fictional data.",
      problem:
        "Reconciliation processes need a quick view of differences, pending items, and volume indicators.",
      solution:
        "Dashboard with simulated data, filters, and impact cards to demonstrate visual financial analysis.",
      technologies: ["Next.js", "TypeScript", "SQL", "Tailwind CSS"],
      features: [
        "Indicator cards",
        "Discrepancy table",
        "Filters by period and status",
      ],
      future: "Add charts, CSV upload, and automatic discrepancy explanations.",
    },
  },
  {
    id: "transactions-api",
    status: "future" as ProjectStatus,
    tags: ["Python", "API", "Transações", "Dados"],
    pt: {
      title: "API de Transações Financeiras",
      description:
        "API em Python para cadastro, importação, análise e detecção de inconsistências em transações financeiras.",
      problem:
        "Transações vindas de fontes diferentes precisam de padronização, consulta e validação antes de análise.",
      solution:
        "API com endpoints para importar, registrar, listar e marcar inconsistências em dados simulados.",
      technologies: ["Python", "FastAPI", "SQL", "PostgreSQL"],
      features: [
        "CRUD de transações simuladas",
        "Importação estruturada",
        "Detecção de inconsistências",
      ],
      future:
        "Adicionar autenticação, testes automatizados e documentação OpenAPI completa.",
    },
    en: {
      title: "Financial Transactions API",
      description:
        "Python API for registering, importing, analyzing, and detecting inconsistencies in financial transactions.",
      problem:
        "Transactions from different sources need standardization, querying, and validation before analysis.",
      solution:
        "API with endpoints to import, register, list, and flag inconsistencies in simulated data.",
      technologies: ["Python", "FastAPI", "SQL", "PostgreSQL"],
      features: [
        "CRUD for simulated transactions",
        "Structured import",
        "Inconsistency detection",
      ],
      future: "Add authentication, automated tests, and complete OpenAPI docs.",
    },
  },
] as const;
