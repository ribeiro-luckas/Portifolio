# Portfólio profissional

Projeto em oito etapas. As Etapas 01–03 estabeleceram a base visual, header, hero e temas. A Etapa 04 adicionou “Sobre mim” e “Tecnologias”, com conteúdo editável e confirmado pelo autor. A Etapa 05 adicionou a galeria de projetos públicos do GitHub. A Etapa 06 adicionou contato e footer.

```bash
npm install
npm run dev
```

Direção visual e decisões: [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md). Nome, destinos e textos da hero ficam em `src/content/site.ts`; trajetória e tecnologias ficam em `src/content/profile.ts` e `src/content/technologies.ts`. O domínio definitivo e o restante do conteúdo profissional serão definidos antes da publicação.

## Projetos

Edite `src/content/projects.ts` para selecionar repositórios e, quando houver dados confirmados, adicionar título, descrição, tecnologias ou URL de demonstração. A API pública do GitHub fornece descrição, linguagem principal e homepage quando disponíveis. A consulta é feita no servidor, com revalidação a cada 3600 segundos e fallback configurável caso a API falhe; nenhum token é necessário.

Para associar mídia, coloque o arquivo em `public/projects/` e configure `media: { src: "/projects/arquivo.png", alt: "Descrição da imagem" }` no projeto. PNG, JPG, WebP e GIF são aceitos; GIF preserva a animação. Sem arquivo configurado, o card mostra uma composição em CSS. A lista inicial contém quatro repositórios públicos; descrições não fornecidas no GitHub não foram inventadas.

## Contato

Os destinos públicos ficam em `src/content/contact.ts`. O e-mail abre `mailto:`. O WhatsApp usa `https://wa.me/` seguido de DDI, DDD e número, somente quando um número autorizado e válido for configurado. Links profissionais adicionais também dependem de confirmação. O GitHub usa a URL de `src/content/site.ts`; canais sem dados não são exibidos.
