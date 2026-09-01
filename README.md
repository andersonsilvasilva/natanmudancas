# Natan Mudanças — Site Institucional

Site institucional comercial da **Natan Mudanças** (Balneário Camboriú/SC), construído como landing page de alta conversão focada em gerar pedidos de orçamento pelo WhatsApp.

![Preview do Hero do site](docs/screenshot-hero.png)

## Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (build estático, sem necessidade de servidor Node em produção)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

## Estrutura do projeto

```
src/
  components/       # Um componente por seção da página (Header, Hero, Services, QuoteForm, ...)
    ui/             # Componentes de apoio reutilizáveis (Button, Container, SectionHeading, Reveal)
  config/
    company.ts      # Fonte única de verdade: nome, CNPJ, endereço, WhatsApp e e-mail da empresa
  data/             # Conteúdo das seções (serviços, etapas, diferenciais, cobertura, FAQ, depoimentos)
  lib/
    whatsapp.ts     # Máscara de telefone, geração do link wa.me e da mensagem do formulário
  hooks/
    useScrolled.ts  # Header sticky após rolagem
  assets/
    images/         # Fotos reais (equipe/caminhão) — importadas nos componentes, não em /public
public/
  images/logo-natan-mudancas.png  # Logomarca (fundo transparente)
  favicon.png, robots.txt, sitemap.xml
```

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
npm install
npm run dev
```

O site abrirá em `http://localhost:5173` (ou próxima porta livre) com hot-reload.

## Build de produção

```bash
npm run build
```

Gera a pasta `dist/` já totalmente estática (HTML, CSS, JS e imagens), pronta para qualquer hospedagem convencional.

Para conferir o resultado do build localmente antes de publicar:

```bash
npm run preview
```

## Publicação (ex.: Hostinger ou qualquer hospedagem estática)

1. Rode `npm run build`.
2. Envie **todo o conteúdo** da pasta `dist/` (não a pasta em si) para a raiz pública do domínio (ex.: `public_html/` na Hostinger), via gerenciador de arquivos, FTP ou SSH.
3. Garanta que `robots.txt` e `sitemap.xml` fiquem acessíveis em `https://seudominio.com.br/robots.txt` e `/sitemap.xml`.
4. Não é necessário Node.js no servidor de produção — é um site 100% estático.

> Se o domínio ficar atrás de CDN (ex.: domínios temporários `*.hostingersite.com` da Hostinger), um novo deploy pode não aparecer imediatamente — pode ser necessário purgar o cache da CDN pelo hPanel. Isso não afeta o CSS/JS nem as fotos em `src/assets/images/`, pois o Vite gera um nome de arquivo único (hash) a cada mudança de conteúdo; só vale ficar atento a arquivos servidos direto de `public/` (como a logomarca).

### Quando o domínio definitivo for comprado

O site ainda não tem domínio próprio — por enquanto, todas as URLs absolutas de SEO apontam para o domínio temporário da Hostinger (`https://darkslategray-seal-414095.hostingersite.com`), só para que o link já funcione corretamente ao ser compartilhado (preview do WhatsApp/redes sociais, etc.). Quando o domínio final for definido, faça uma busca por `darkslategray-seal-414095.hostingersite.com` no projeto e troque pelo domínio real nestes arquivos:

- [index.html](index.html) — `canonical`, `og:url`, `og:image`, `twitter:image` e as duas URLs do JSON-LD (`url` e `image`).
- [public/robots.txt](public/robots.txt) — linha `Sitemap:`.
- [public/sitemap.xml](public/sitemap.xml) — tag `<loc>`.

## Variáveis de ambiente

Este projeto **não requer** nenhuma variável de ambiente ou backend: o formulário de orçamento monta a mensagem e abre diretamente o WhatsApp (`wa.me`) no navegador do visitante. Por isso não há arquivo `.env`.

## Configurações que você vai querer editar

### Dados da empresa, WhatsApp e e-mail

Tudo está centralizado em [src/config/company.ts](src/config/company.ts) — nome, CNPJ, endereço, WhatsApp e e-mail. Altere apenas ali; todos os componentes consomem esses dados.

> O número de WhatsApp usado (`5547996819431`) foi validado com o formato de celular de 9 dígitos exibido na própria logomarca.

O endereço exibido no site (Contato e Rodapé) mostra apenas bairro/cidade/UF (`displayAddress`), por decisão do cliente — o endereço completo (rua, número, CEP) continua salvo em `company.address` para uso futuro (ex.: notas fiscais), mesmo não sendo exibido em nenhuma página. Por esse motivo o site também não tem mapa incorporado.

### Logomarca

As logomarcas originais enviadas (`logomarca.png` e `logomarca_melhor.png`, na raiz do projeto) tinham fundo grafite sólido. Para evitar uma "caixa" cinza no header (quando fica branco após rolagem) e no rodapé, foi gerada uma versão com fundo transparente.

A logo usada no header/rodapé fica em `src/assets/images/logo-natan-mudancas.png` e é **importada** em [src/config/company.ts](src/config/company.ts) (não é um caminho fixo em `public/`) — assim, ao trocar o arquivo, o Vite gera um nome com hash novo automaticamente e evita problemas de cache. Para trocar a logomarca:

1. Gere uma versão em PNG com fundo transparente do novo arquivo.
2. Substitua `src/assets/images/logo-natan-mudancas.png` mantendo o mesmo nome.
3. Rode `npm run build` novamente.

Existe também uma cópia em `public/images/logo-natan-mudancas.png`, usada apenas na tag `image` dos dados estruturados (JSON-LD) em `index.html` — essa precisa ser atualizada manualmente à parte, já que HTML estático não pode referenciar um import do Vite.

### Fotos reais (Sobre e Área de Atendimento)

As fotos usadas nos cards de "Sua mudança em boas mãos" e "Área de Atendimento" são recortes de fotos reais fornecidas pela empresa (equipe carregando um sofá; caminhão próprio da Natan Mudanças), sem os textos/banners promocionais que vinham nas artes originais. Elas ficam em `src/assets/images/` e são importadas diretamente nos componentes (`About.tsx`, `Coverage.tsx`) — isso faz o Vite gerar um nome de arquivo com hash a cada troca de imagem, evitando problemas de cache. Para trocar, basta substituir o arquivo correspondente nessa pasta mantendo o mesmo nome.

O Hero usa uma ilustração gráfica (caminhão + estrada animada) em vez de foto, já que é a primeira coisa vista na página e pede um visual mais "hero"/institucional.

### Seção de Depoimentos

Componente já implementado em [src/components/Testimonials.tsx](src/components/Testimonials.tsx), porém **desativado por padrão** (`SHOW_TESTIMONIALS = false`), pois a empresa ainda não forneceu avaliações reais de clientes. Quando houver depoimentos verídicos:

1. Adicione-os em [src/data/testimonials.ts](src/data/testimonials.ts).
2. Mude `SHOW_TESTIMONIALS` para `true` em `Testimonials.tsx`.

### Trajeto/área de cobertura

A lista de cidades exibida como "Trajeto frequente" (Maringá, Cascavel, Pato Branco, Passo Fundo, São Borja, Porto Alegre, Curitiba, Campo Grande, Sinop) está em [src/data/coverage.ts](src/data/coverage.ts) e reflete uma rota real confirmada pela empresa.

## Qualidade e validações já executadas

- ✅ `npm run build` (TypeScript + Vite) sem erros.
- ✅ `npm run lint` (ESLint) sem erros.
- ✅ Responsivo mobile-first, testado nos breakpoints do Tailwind (320px–1920px).
- ✅ Acessibilidade: labels em todos os campos do formulário, `aria-expanded`/`aria-controls` no FAQ, foco visível nos botões, `prefers-reduced-motion` respeitado nas animações.
- ✅ SEO: title, meta description, canonical, Open Graph, Twitter Cards, `robots.txt`, `sitemap.xml`, dados estruturados JSON-LD (`MovingCompany`).

## O que **não** foi inventado (por decisão do briefing)

Nenhum destes itens aparece no site, pois não foram fornecidos pela empresa: anos de experiência, número de mudanças realizadas, quantidade de clientes, avaliações, prêmios, certificações, seguros, frota própria (além do caminhão mostrado em foto), filiais, número de funcionários ou parceiros. Adicione-os apenas quando forem informações reais confirmadas pela Natan Mudanças.
