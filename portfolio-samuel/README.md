# Samuel Yuiti Portfolio

Portfólio profissional de Samuel Yuiti Endo Silva, com foco em Python, SQL, automação, dados financeiros, tratamento de arquivos e aplicações web.

Site em produção:

https://samuel-yuiti-portfolio.vercel.app

## O que tem no projeto

- Landing page em Next.js com App Router.
- Alternância entre português e inglês.
- Tema claro e escuro com persistência.
- Hero com foto profissional e animações leves.
- Seção de projetos publicados e labs técnicos.
- Currículo em PDF disponível para download.
- Formulário de contato via `mailto`.
- Layout responsivo para desktop e mobile.

## Projetos exibidos

- OFX Formatter: https://site-extratos-ofx.vercel.app
- CarbonTrack: https://carbontrack-v2-theta.vercel.app
- GameDex: https://site-umber-six-63.vercel.app
- Portfólio: https://samuel-yuiti-portfolio.vercel.app

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- next-themes
- Vercel

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse:

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

## Deploy na Vercel

```bash
npm install
npm run build
npx vercel deploy --prod
```

Também é possível importar o repositório no painel da Vercel e manter as configurações padrão para Next.js.

## Estrutura

```text
src/
  app/
    api/curriculo/route.ts -> Curriculo_Samuel_Yuiti_Desenvolvedor.pdf
  components/
    common/
    effects/
    layout/
    providers/
    sections/
  data/
  hooks/
  lib/
  messages/
public/
  images/
```

## Próximos ajustes

- Adicionar screenshots reais dos projetos.
- Criar página individual para cada case.
- Integrar formulário de contato com endpoint real.
- Adicionar testes de interface para alternância de tema/idioma.
