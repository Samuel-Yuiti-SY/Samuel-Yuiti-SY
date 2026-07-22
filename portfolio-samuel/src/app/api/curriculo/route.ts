export const runtime = "nodejs";

const PAGE_WIDTH = 595;
const PAGE_HEIGHT = 842;
const MARGIN = 42;
const BOTTOM_MARGIN = 48;

const winAnsi: Record<string, number> = {
  "€": 128,
  "‚": 130,
  "ƒ": 131,
  "„": 132,
  "…": 133,
  "†": 134,
  "‡": 135,
  "ˆ": 136,
  "‰": 137,
  "Š": 138,
  "‹": 139,
  "Œ": 140,
  "Ž": 142,
  "‘": 145,
  "’": 146,
  "“": 147,
  "”": 148,
  "•": 149,
  "–": 150,
  "—": 151,
  "˜": 152,
  "™": 153,
  "š": 154,
  "›": 155,
  "œ": 156,
  "ž": 158,
  "Ÿ": 159,
};

function toWinAnsi(value: string): string {
  return Array.from(value)
    .map((character) => {
      const code = character.codePointAt(0) ?? 63;
      if (code <= 255) return String.fromCharCode(code);
      const mapped = winAnsi[character];
      return String.fromCharCode(mapped ?? 63);
    })
    .join("");
}

function escapePdfText(value: string): string {
  return toWinAnsi(value)
    .replaceAll("\\", "\\\\")
    .replaceAll("(", "\\(")
    .replaceAll(")", "\\)");
}

function toBytes(binary: string): Uint8Array {
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index) & 0xff;
  }
  return bytes;
}

function wrapText(value: string, maximumCharacters: number): string[] {
  const words = value.trim().split(/\s+/);
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= maximumCharacters) {
      current = candidate;
      continue;
    }

    if (current) lines.push(current);
    current = word;
  }

  if (current) lines.push(current);
  return lines;
}

function buildPageStreams(): string[] {
  const pages: string[][] = [[]];
  let pageIndex = 0;
  let y = PAGE_HEIGHT - MARGIN;

  const page = () => pages[pageIndex];

  const drawText = (
    text: string,
    x: number,
    positionY: number,
    size = 9.4,
    font: "F1" | "F2" = "F1",
    color = "0.12 0.16 0.22",
  ) => {
    page().push(
      `BT /${font} ${size.toFixed(1)} Tf ${color} rg 1 0 0 1 ${x.toFixed(1)} ${positionY.toFixed(1)} Tm (${escapePdfText(text)}) Tj ET`,
    );
  };

  const drawLine = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    color = "0.06 0.46 0.43",
    width = 0.8,
  ) => {
    page().push(
      `${color} RG ${width.toFixed(1)} w ${x1.toFixed(1)} ${y1.toFixed(1)} m ${x2.toFixed(1)} ${y2.toFixed(1)} l S`,
    );
  };

  const startNewPage = () => {
    pages.push([]);
    pageIndex += 1;
    y = PAGE_HEIGHT - MARGIN;
    drawText("Samuel Yuiti Endo Silva", MARGIN, y, 12, "F2", "0.07 0.20 0.32");
    drawText("Currículo profissional", PAGE_WIDTH - MARGIN - 100, y, 8.5, "F1", "0.35 0.40 0.46");
    y -= 13;
    drawLine(MARGIN, y, PAGE_WIDTH - MARGIN, y, "0.06 0.46 0.43", 1.0);
    y -= 16;
  };

  const ensureSpace = (required: number) => {
    if (y - required < BOTTOM_MARGIN) startNewPage();
  };

  const paragraph = (text: string, options?: { indent?: number; size?: number; max?: number; gap?: number }) => {
    const indent = options?.indent ?? 0;
    const size = options?.size ?? 9.4;
    const max = options?.max ?? 100;
    const lineHeight = size + 3;
    const lines = wrapText(text, max);

    for (const line of lines) {
      ensureSpace(lineHeight);
      drawText(line, MARGIN + indent, y, size);
      y -= lineHeight;
    }
    y -= options?.gap ?? 2;
  };

  const bullet = (text: string) => {
    const lines = wrapText(text, 96);
    for (let index = 0; index < lines.length; index += 1) {
      ensureSpace(12);
      drawText(index === 0 ? `- ${lines[index]}` : `  ${lines[index]}`, MARGIN + 8, y, 9.1);
      y -= 11.6;
    }
  };

  const section = (title: string) => {
    ensureSpace(28);
    y -= 4;
    drawText(title.toUpperCase(), MARGIN, y, 11.2, "F2", "0.07 0.20 0.32");
    y -= 5;
    drawLine(MARGIN, y, PAGE_WIDTH - MARGIN, y, "0.06 0.46 0.43", 0.8);
    y -= 14;
  };

  const role = (title: string, period: string) => {
    ensureSpace(17);
    drawText(title, MARGIN, y, 10.2, "F2", "0.07 0.20 0.32");
    drawText(period, PAGE_WIDTH - MARGIN - 105, y, 8.9, "F1", "0.35 0.40 0.46");
    y -= 14;
  };

  drawText("Samuel Yuiti Endo Silva", MARGIN, y, 23, "F2", "0.07 0.20 0.32");
  y -= 22;
  drawText(
    "Desenvolvedor Backend Júnior | Python | SQL | Java em formação",
    MARGIN,
    y,
    11.5,
    "F2",
    "0.06 0.46 0.43",
  );
  y -= 17;
  drawText(
    "Maringá - PR | samuelyuit@gmail.com | linkedin.com/in/samuelyuiti | github.com/Samuel-Yuiti-SY",
    MARGIN,
    y,
    8.5,
    "F1",
    "0.30 0.36 0.43",
  );
  y -= 12;
  drawText("samuel-yuiti-portfolio.vercel.app", MARGIN, y, 8.5, "F1", "0.30 0.36 0.43");
  y -= 9;
  drawLine(MARGIN, y, PAGE_WIDTH - MARGIN, y, "0.06 0.46 0.43", 1.2);
  y -= 15;

  section("Resumo profissional");
  paragraph(
    "Desenvolvedor backend com experiência profissional em Python, leitura e processamento de arquivos estruturados, validação de dados e suporte a sistemas financeiros. Evolução interna de estágio a Analista de Suporte Pleno e, posteriormente, Desenvolvedor Júnior na Conciflex. Conhecimento em SQL, MySQL, PostgreSQL, automação e investigação de inconsistências. Cursando Análise e Desenvolvimento de Sistemas e aprofundando conhecimentos em Java.",
    { max: 103, gap: 1 },
  );

  section("Experiência profissional");
  drawText("Conciflex | Maringá - PR", MARGIN, y, 11, "F2", "0.06 0.46 0.43");
  y -= 16;

  role("Desenvolvedor Júnior", "abr 2026 - jun 2026");
  bullet("Desenvolvimento e manutenção de rotinas em Python para leitura e processamento de arquivos estruturados.");
  bullet("Extração, tratamento, validação e padronização de dados financeiros, com apoio à conciliação e à rastreabilidade.");
  bullet("Consultas SQL para validar registros, identificar inconsistências e apoiar regras de negócio.");
  bullet("Documentação de fluxos e colaboração com suporte e áreas de negócio na análise de incidentes.");
  y -= 5;

  role("Analista de Suporte Pleno", "abr 2025 - mar 2026");
  bullet("Atendimento e investigação de incidentes em sistemas utilizando evidências, dados e consultas SQL.");
  bullet("Apoio a rotinas de conciliação financeira e validação de pagamentos, movimentações e registros.");
  bullet("Orientação a usuários, documentação de soluções e interface com a equipe de desenvolvimento.");
  y -= 5;

  role("Analista de Suporte Júnior", "nov 2024 - mar 2025");
  bullet("Triagem e resolução de chamados, acesso remoto, coleta de evidências e escalonamento técnico.");
  y -= 5;

  role("Analista de Suporte - Estágio", "jul 2024 - out 2024");
  bullet("Suporte inicial a usuários sob supervisão, registro de atendimentos e uso de ferramentas de acesso remoto.");

  section("Projetos selecionados");
  role("OFX Formatter | Next.js, React, TypeScript, Tailwind CSS", "Projeto público");
  paragraph(
    "Aplicação web que valida, corrige, padroniza e exporta arquivos OFX da Caixa, reduzindo falhas de leitura em rotinas financeiras. Demo: site-extratos-ofx.vercel.app | Código: github.com/Samuel-Yuiti-SY/Ofx-Formatter",
    { indent: 8, size: 9.1, max: 98 },
  );

  role("CarbonTrack | Python, Flask, Next.js, PostgreSQL", "Projeto público");
  paragraph(
    "Dashboard para acompanhamento de emissões, frota e indicadores ambientais, com interface responsiva e relatórios gerenciais. Demo: carbontrack-v2-theta.vercel.app | Código: github.com/Samuel-Yuiti-SY/CarbonTrack",
    { indent: 8, size: 9.1, max: 98 },
  );

  role("GameDex | Next.js, TypeScript, Prisma, PostgreSQL, JWT", "Projeto full-stack");
  paragraph(
    "Aplicação para catálogo de jogos, autenticação, favoritos, importação de dados, comparação de preços e painel administrativo. Demo: site-umber-six-63.vercel.app",
    { indent: 8, size: 9.1, max: 98 },
  );

  section("Tecnologias");
  paragraph("Linguagens: Python, Java (iniciante), JavaScript, TypeScript e SQL.", { max: 105, gap: 0 });
  paragraph("Dados e backend: MySQL, PostgreSQL, Flask, Prisma, APIs e processamento de arquivos.", { max: 105, gap: 0 });
  paragraph("Frontend e ferramentas: React, Next.js, Tailwind CSS, Git, GitHub, Vercel, pgAdmin, DataGrip e VS Code.", { max: 105, gap: 0 });

  section("Formação");
  paragraph("Análise e Desenvolvimento de Sistemas - Em andamento.", { max: 105 });

  pages.forEach((commands, index) => {
    commands.push(
      `BT /F1 7.8 Tf 0.42 0.47 0.53 rg 1 0 0 1 ${MARGIN.toFixed(1)} 25.0 Tm (${escapePdfText("Currículo de Samuel Yuiti Endo Silva")}) Tj ET`,
    );
    commands.push(
      `BT /F1 7.8 Tf 0.42 0.47 0.53 rg 1 0 0 1 ${(PAGE_WIDTH - MARGIN - 48).toFixed(1)} 25.0 Tm (${escapePdfText(`Página ${index + 1} de ${pages.length}`)}) Tj ET`,
    );
  });

  return pages.map((commands) => commands.join("\n"));
}

function buildPdf(): Uint8Array {
  const streams = buildPageStreams();
  const objects: string[] = [""];
  const pageReferences = streams.map((_, index) => `${5 + index * 2} 0 R`).join(" ");

  objects[1] = "<< /Type /Catalog /Pages 2 0 R >>";
  objects[2] = `<< /Type /Pages /Count ${streams.length} /Kids [${pageReferences}] >>`;
  objects[3] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>";
  objects[4] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>";

  streams.forEach((stream, index) => {
    const pageObject = 5 + index * 2;
    const contentObject = pageObject + 1;
    objects[pageObject] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentObject} 0 R >>`;
    objects[contentObject] = `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`;
  });

  let pdf = "%PDF-1.4\n%âãÏÓ\n";
  const offsets: number[] = [0];

  for (let objectNumber = 1; objectNumber < objects.length; objectNumber += 1) {
    offsets[objectNumber] = pdf.length;
    pdf += `${objectNumber} 0 obj\n${objects[objectNumber]}\nendobj\n`;
  }

  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length}\n`;
  pdf += "0000000000 65535 f \n";
  for (let objectNumber = 1; objectNumber < objects.length; objectNumber += 1) {
    pdf += `${offsets[objectNumber].toString().padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return toBytes(pdf);
}

export async function GET() {
  const pdf = buildPdf();

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Curriculo_Samuel_Yuiti_Desenvolvedor.pdf"',
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
