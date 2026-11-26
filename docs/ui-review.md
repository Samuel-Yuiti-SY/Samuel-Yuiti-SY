# Revisão de interface — Portfólio Samuel

Data: 25/11/2026. Branch: refactor/professional-ui-ux.

## Direção visual

Editorial: carvão e areia, nome como âncora visual, fotografia sem cartões flutuantes e superfícies sólidas nos dois temas.

Referência consultada: https://minimal.gallery/tag/portfolio/. Uso como pesquisa de composição; sem cópia de componentes, marcas ou imagens. Logotipos e imagens existentes preservados. Sem dependências novas de interface.

## Alterações

Redução de decoração, superfícies consistentes, hierarquia e textos específicos do projeto; foco visível e respeito a movimento reduzido. Rotas, dados, APIs, autenticação e regras existentes preservados.

## Validação executada

Lint ESLint e build com TypeScript aprovados; nove larguras sem overflow; PT/EN, claro/escuro, menu e download do currículo (HTTP 200) exercitados; sem erros JavaScript; axe A/AA sem violações nos dois temas.

Larguras da página inicial: 360, 390, 430, 768, 1024, 1280, 1440, 1920 e 2560 px. Essas medições não equivalem a uma revisão manual completa de todas as telas.

Lighthouse móvel em build local, ordem performance/acessibilidade/boas práticas/SEO: 100/100/100/100. Execução de laboratório, sem dados de campo ou INP. Resultados variam com ambiente e carga; detalhes no relatório consolidado.

## Limitações e continuidade

Sem suíte unitária configurada. Formulário mantém o comportamento de contato existente; não foi enviado e-mail durante o teste. Metadados do deployment anterior não informam o commit: a origem foi conferida pelo conteúdo publicado e pelo repositório.

axe e Lighthouse não certificam conformidade WCAG. Validação de preview e publicação estão registradas no controle consolidado. O commit inicial foi preservado para rollback.
