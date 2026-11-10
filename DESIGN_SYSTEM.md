# Design System · Etapa 01

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
| Acento para texto | `#A06707` | `#F59E0B` |

- **Tipografia:** Space Grotesk 700 para display e Inter 400–600 para corpo/interface; rótulos curtos em caixa alta com espaçamento amplo. Escala fluida e largura de leitura contida.
- **Espaçamento:** base de 4 px; passos principais 8, 12, 16, 24, 32, 48, 64 e 96 px. Container até 1200 px com margens fluidas.
- **Geometria:** controles de 12 px, cards de 20 px, botões futuros em pílula quando o contexto pedir. Bordas de 1 px; brilho decorativo limitado à composição visual.
- **Grid:** uma coluna em mobile; composição assimétrica em telas largas. A navegação, hero e demais seções serão definidos nas etapas correspondentes.
- **Movimento:** feedback de 80–150 ms; abertura até 250 ms com `cubic-bezier(.22,1,.36,1)`. Priorizar `opacity` e `transform`; sem movimento essencial e com `prefers-reduced-motion`.
- **Acessibilidade:** pares de texto e fundo calculados no relatório do gerador; foco visível, sem informação apenas por cor, sem fotografia fictícia, contraste composto e overflow a verificar na interface real.

**Estado:** fundação executável, ainda não publicável. Dados profissionais, contatos, domínio, conteúdos e validação visual completa seguem para etapas posteriores.
