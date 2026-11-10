# DESIGN_SPEC — Portfólio profissional de Luckas Ribeiro

- **ID:** portfolio-profissional
- **Status:** NÃO PUBLICÁVEL
- **Objetivo declarado:** explore
- **Público informado:** Pessoas que desejam conhecer projetos e competências; hipótese de projeto, sem pesquisa de público
- **Categoria:** portfolio
- **Direção proposta:** preciso-moderno
- **Páginas planejadas:** home
- **Cor seed:** #F59E0B (origem informada pelo cliente ou preset EID=E27; a seleção final é política do kit)
- **Fonte títulos:** Space Grotesk; **corpo:** Inter (usar fallback se indisponível)
- **Hero padrão:** typographic-or-work-samples — a mídia real depende de assets do cliente.
- **Motion:** subtle; reduced-motion obrigatório.

## Tokens e geometria

`theme.css` e `design.tokens.json` são a fonte única de valores deste projeto. Body 16/1.55, títulos fluidos `clamp`, container máximo 1200px, padding horizontal fluido, radius de cartão 20px e controles 12px. São DEFAULTS DO KIT, não regras extraídas do autor original.

## Acessibilidade de cor sólida

| Tema | Texto/fundo | Texto/card | Muted/fundo | On-accent/accent | Accent-ink/fundo | Focus/fundo |
|---|---:|---:|---:|---:|---:|
| light | 16.95 | 17.74 | 9.90 | 8.42 | 4.52 | 16.95 |
| dark | 18.13 | 16.39 | 11.74 | 10.10 | 8.83 | 9.68 |

Valores são cálculos matemáticos em cores sólidas; não validam imagens, gradientes, estados sobrepostos nem a aplicação.

## Componentes mínimos

Header responsivo; Hero com h1 e CTA; seções das páginas definidas; rodapé; formulários com estados; componentes acessíveis. Adotar contratos `docs/03-COMPONENTES_E_UX.md`.

## Pendências e bloqueios

- PUBLICATION_BLOCK: business_claims_verified=false; não afirmar resultados/depoimentos/benefícios sem provas.
- PUBLICATION_BLOCK: brand_assets_licensed=false; só assets próprios/sem restrição verificada.
- PUBLICATION_BLOCK: approved_for_publication=false.

## Gates obrigatórios

Aprovação dos conteúdos, licenças, teclado, contraste composto, 320/390/768/1440/1920px, reduced-motion, E2E, testes visuais, build, segurança e revisão humana. Ver `docs/05-QUALIDADE_E_ACEITE.md`.
