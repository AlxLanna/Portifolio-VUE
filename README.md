# Portifólio AlexandreLanna em Vue 3

Este é um frontend construído com **Vue 3**, **TypeScript**, **Vite**, **TailwindCSS**, **Fluid-tw** e **Flowbite Vue**. O objetivo deste projeto é apresentar meu portfólio pessoal e aplicar meus estudos de Vue.js. 

Este projeto foi fortemente inspirado no design e estrutura do site de [Brittany Chiang](https://brittanychiang.com/), por conta de sua interface limpa, responsiva e pixel perfect.

---

## ✨ Tecnologias Utilizadas

- **Vue 3** – Framework progressivo para construção de interfaces ([vuejs.org](https://vuejs.org/))
- **TypeScript** – Superset de JavaScript com tipagem estática ([typescriptlang.org](https://www.typescriptlang.org/))
- **Vite** – Ferramenta de build rápida para projetos modernos ([vitejs.dev](https://vitejs.dev/))
- **TailwindCSS** – Framework utilitário de CSS ([tailwindcss.com](https://tailwindcss.com/))
- **Flowbite Vue** – Biblioteca de componentes prontos baseada em Tailwind ([flowbite.com/docs/getting-started/vue](https://flowbite.com/docs/getting-started/vue/))
- **Vue Router** – Gerenciamento de rotas ([router.vuejs.org](https://router.vuejs.org/))
- **Vue I18n** – Suporte à internacionalização ([vue-i18n.intlify.dev](https://vue-i18n.intlify.dev/))
- **Heroicons Vue** – Ícones SVG para Vue ([heroicons.com](https://heroicons.com/))
- **Fluid Tailwind** – Tipografia fluida e escalável para Tailwind ([fluidtailwind.com](https://fluidtailwind.com))

---

## 🚀 Instalação e Uso

1. Clone este repositório:
   ```bash
   git clone git@github.com:AlxLanna/Portifolio-VUE.git
   cd seu-repositorio
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

### Scripts Disponíveis

- **`npm run dev`**\
  Inicia o servidor de desenvolvimento com hot reload.
- **`npm run build`**\
  Compila o projeto para produção.
- **`npm run preview`**\
  Executa um servidor estático para pré-visualizar o build de produção.

---

## 🌍 Internacionalização (i18n)

Este projeto utiliza **vue-i18n** para suporte multilíngue. Por padrão, está configurado para **Português (pt-BR)** e **Inglês (en-US)**.

O sistema de tradução ainda está em desenvolvimento, mas já está previsto no roteiro de funcionalidades (TODO). A estrutura básica com a pasta `src/locales` e arquivos JSON por idioma já foi planejada.

Para adicionar ou editar traduções, acesse a pasta `src/locales` e atualize os arquivos JSON correspondentes.

---

## 🧩 Componentes com Flowbite

A biblioteca **Flowbite Vue** é usada para acelerar o desenvolvimento de componentes responsivos:

```bash
npm install flowbite flowbite-vue
```

Em `tailwind.config.js`, não esqueça de incluir:

```js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}'
  ],
  theme: { extend: {} },
  plugins: [require('flowbite/plugin')],
}
```

Exemplo de uso em um componente Vue:

```vue
<template>
  <Button>Clique Aqui</Button>
</template>

<script setup>
import { Button } from 'flowbite-vue'
</script>
```

---

## 🧮 Tipografia com Fluid Tailwind

Este projeto também utiliza a biblioteca **Fluid Tailwind** para uma tipografia fluida e escalável.

```bash
npm install fluid-tailwind
```

Adicione a configuração no `tailwind.config.js`:

```js
const fluid = require('fluid-tailwind/plugin')

module.exports = {
  content: [...],
  theme: {
    extend: {},
  },
  plugins: [fluid],
}
```

Com Fluid, os tamanhos de fonte e divs escalam automaticamente entre resoluções pequenas e grandes, melhorando a legibilidade em diferentes dispositivos.

---

## 📁 Estrutura do Projeto

```bash
src/
├── assets/           # Imagens e arquivos estáticos
├── components/       # Componentes Vue reutilizáveis
├── locales/          # Arquivos de tradução (i18n)
├── router/           # Definição de rotas (Vue Router)
├── views/            # Páginas principais
├── i18n.ts           # Configuração do plugin vue-i18n
├── App.vue           # Componente raiz da aplicação
├── main.ts           # Ponto de entrada da aplicação
├── shims-vue.d.ts    # Tipagem para arquivos .vue
└── vite-env.d.ts     # Tipagens do Vite para TypeScript
```

---

## 📌 Roadmap / TODO

- Finalizar responsividade
- Adicionar modo escuro
- Preencher os cards nas seções
- Criar páginas linkadas com todos os projetos e toda a experiência profissional
- Fazer deploy do site pelo Heroku
- Concluir traduções
- Incluir testes unitários

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

