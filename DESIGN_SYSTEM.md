# Design System · Portfólio

## Referência e direção

**Observado na imagem local (2026-11-10):** fundo quase preto, destaque âmbar, tipografia sans de grande peso, composição assimétrica com texto à esquerda e fotografia dominante à direita, linhas orbitais, bordas finas e brilhos pontuais. A navegação é horizontal no desktop; botões combinam preenchimento âmbar e contorno. Os cards são escuros e discretamente iluminados. A imagem não permite identificar com segurança a família tipográfica, medidas exatas nem comportamento em mobile, light mode ou movimento.

**Decisão deste projeto:** manter a tensão entre tipografia e desenho técnico, substituindo a fotografia por geometria orbital feita em CSS. Não reproduzir a identidade, logo, textos, números, badges ou retrato da referência. A assinatura dominante será a linha orbital âmbar; sem 3D, Canvas ou ativos externos. O modo claro usa fundo frio e contraste sólido, sem tentar reproduzir o brilho escuro literalmente. O objetivo inicial é explorar trabalhos reais; não há alegações profissionais no protótipo.

## Contrato visual

Os tokens gerados em `design/generated/design.tokens.json` e `theme.css` são a base semântica. O gerador registrou contrastes matemáticos de cores sólidas em `DESIGN_SPEC.md`; a interface real ainda precisa de inspeção em navegador. Ajustes específicos da prévia ficam em `src/app/globals.css` e deverão ser consolidados quando o tema manual for implementado.

| Papel             | Claro     | Escuro    |
| ----------------- | --------- | --------- |
| Fundo             | `#F8FAFC` | `#0D101B` |
| Superfície        | `#FFFFFF` | `#161B2A` |
| Texto             | `#111827` | `#F8FAFC` |
| Texto secundário  | `#334155` | `#C4CCDA` |
| Acento            | `#EA970C` | `#F4AB30` |
| Acento para texto | `#8B5700` | `#F59E0B` |

- **Tipografia:** Space Grotesk 700 para display e Inter 400–600 para corpo/interface; rótulos curtos em caixa alta com espaçamento amplo. Escala fluida e largura de leitura contida.
- **Espaçamento:** base de 4 px; passos principais 8, 12, 16, 24, 32, 48, 64 e 96 px. Container até 1200 px com margens fluidas.
- **Geometria:** controles de 12 px, cards de 20 px, botões futuros em pílula quando o contexto pedir. Bordas de 1 px; brilho decorativo limitado à composição visual.
- **Grid:** uma coluna em mobile; composição assimétrica em telas largas. A navegação, hero e demais seções serão definidos nas etapas correspondentes.
- **Movimento:** feedback de 80–150 ms; abertura até 250 ms com `cubic-bezier(.22,1,.36,1)`. Priorizar `opacity` e `transform`; sem movimento essencial e com `prefers-reduced-motion`.
- **Acessibilidade:** pares de texto e fundo calculados no relatório do gerador; foco visível, sem informação apenas por cor, sem fotografia fictícia, contraste composto e overflow a verificar na interface real.

**Estado:** fundação executável, ainda não publicável. Dados profissionais, contatos, domínio, conteúdos e validação visual completa seguem para etapas posteriores.

## Aplicação na Etapa 02

O header usa marca tipográfica, navegação semântica e CTA de contato. No mobile, o menu é uma divulgação acionada por botão; Escape o fecha e devolve foco. A hero usa grid assimétrico no desktop e coluna única em telas menores, com título de alto contraste, dois CTAs e desenho orbital em CSS. Não há estatísticas, badges de tecnologia ou fotografia, pois faltam dados/ativos para justificá-los. O desenho admite mídia pessoal fornecida futuramente.

O conteúdo público está centralizado em `src/content/site.ts`: nome “Luckas Ribeiro”, área “Desenvolvimento de software” e e-mail de contato foram confirmados pelo usuário. Até a Etapa 05, “Projetos” leva ao GitHub público; a navegação por âncoras crescerá conforme as seções forem implementadas. Nesta etapa, a preferência inicial de tema era controlada apenas por CSS do sistema, sem escolha manual persistida.

## Aplicação na Etapa 03

O tema inicial segue `prefers-color-scheme`; uma preferência manual válida (`light` ou `dark`) em `localStorage` tem prioridade e persiste entre visitas. Sem preferência salva, mudanças do sistema atualizam a página. O script de inicialização fica no `<head>` antes do corpo para aplicar `data-theme` antes da primeira pintura; o botão cliente mantém marcação inicial estável para evitar divergência de hidratação. O modo escuro e o claro compartilham os papéis semânticos de `design/generated/theme.css`; o fallback CSS para o sistema permanece em `src/app/globals.css` caso o script não execute.

O botão de 48 px fica no canto inferior esquerdo, tem nome acessível para a próxima ação e anima apenas opacidade e transformação dos ícones. `prefers-reduced-motion` remove essas transições. Em larguras até 360 px, o espaçamento da hero foi ajustado para não cobrir o CTA de contato. Uma política de CSP futura deverá permitir o script estático de inicialização por hash ou nonce, sem afrouxar a política global.

## Aplicação na Etapa 04

“Sobre mim” usa um bloco editorial e uma lista de três pontos da trajetória, todos baseados em fatos confirmados: estudo autônomo, projetos próprios e curso Start em andamento. “Tecnologias” usa grupos com chips estáticos, sem níveis de proficiência ou ícones de marcas. As duas seções seguem os tokens semânticos nos temas claro e escuro, com uma coluna no mobile; os grupos técnicos passam a duas colunas quando há espaço. O conteúdo editável fica em `src/content/profile.ts` e `src/content/technologies.ts`. As categorias ferramentas e outras habilidades estão previstas no tipo de dados, mas permanecem sem itens e não são exibidas até confirmação do usuário.

## Aplicação na Etapa 05

Os cards de projetos mantêm a superfície de 20 px de raio, borda discreta, composição orbital em CSS quando não há mídia e ações com área de toque de pelo menos 44 px. O grid usa uma coluna no mobile e duas quando há largura. A imagem local opcional ocupa proporção 16:9; GIFs permanecem sem otimização para preservar a animação. Hover altera apenas borda e transformação, com redução de movimento respeitada.

A seleção e os conteúdos complementares ficam em `src/content/projects.ts`. A página obtém os repositórios públicos no servidor, com revalidação a cada hora. Descrição e linguagem principal vêm do GitHub quando presentes; nenhuma demonstração, mídia ou tecnologia adicional foi atribuída sem fonte. Se a API falhar, os cards configurados permanecem com nomes e links estáveis, enquanto a descrição usa texto genérico explícito.

## Aplicação na Etapa 06

Contato fecha a sequência da página com uma chamada tipográfica grande e um painel de canais diretos, mantendo os mesmos tokens, bordas e sinal orbital. E-mail e GitHub usam destinos já confirmados. WhatsApp via `wa.me` e redes profissionais ficam condicionados a dados públicos autorizados, centralizados em `src/content/contact.ts`; canais sem destino válido não são renderizados. Header e hero apontam para `#contato`, enquanto o CTA da seção abre o cliente de e-mail. O footer oferece identidade, navegação por âncoras e ano corrente, com espaço inferior no mobile para o botão flutuante de tema.

## Refinamento na Etapa 07

O foco de links e botões recebe contorno de 3 px; o menu mobile preserva a ordem natural do Tab, Escape devolve foco ao botão e a seleção de uma seção move o foco para o destino após fechar o menu. A indicação fixa e incorreta de “Início” como página atual foi removida. Os links de navegação ganham linha âmbar em hover/foco; menu, CTAs e cards usam transformações curtas de 80–180 ms apenas como feedback. Movimento reduzido elimina essas transformações/transições, sem esconder informação.

O acento para texto no tema claro foi escurecido em `src/app/globals.css` para `#8B5700`, obtendo contraste calculado de 5,39:1 sobre a superfície elevada mais clara (`#EDF2F8`). O footer reserva uma faixa à esquerda para o botão fixo de tema até 900 px, e os contatos passam a uma coluna em telas estreitas. Descrições externas de projetos aceitam quebra de palavras longas. O relatório dos tokens gerados permanece como registro da paleta inicial; a substituição acima representa a paleta aplicada.
