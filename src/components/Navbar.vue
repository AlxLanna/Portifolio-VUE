<template>
  <div class="fixed flex min-h-screen flex-col lg:flex-row">
    <!-- Sidebar: apenas em lg e acima -->
    <nav class="w-[28rem] flex-shrink-0 flex-col bg-[#00490a] pl-8 text-white">
      <!-- Informações Pessoais -->
      <div class="justify-center p-6 text-center">
        <div
          class="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-gray-300"
        >
          <!-- <img src="@/assets/foto-perfil.jpg" alt="Foto" class="w-full h-full object-cover"> -->
        </div>
        <h1 class="text-xl font-bold">Alexandre Lanna</h1>
        <p class="mt-1 text-sm opacity-80">Desenvolvedor Full Stack</p>
        <p class="mt-1 text-sm opacity-80">Foco em soluções</p>
      </div>

      <!-- Menu de Navegação -->
      <ul class="flex-1 overflow-y-auto py-4">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="item.href"
            class="block px-6 py-3 font-medium transition-colors hover:bg-[#0e8c20]"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const navItems = [
  { id: 1, name: "Sobre", href: "#sobre" },
  { id: 2, name: "Experiência", href: "#experiencia" },
  { id: 3, name: "Formação", href: "#formacao" },
  { id: 4, name: "Habilidades", href: "#habilidades" },
  { id: 5, name: "Certificados", href: "#certificados" },
  { id: 6, name: "Contato", href: "#contato" },
];

const sections = [
  {
    id: "sobre",
    title: "Sobre Mim",
    content: "Conteúdo sobre você...",
    bgColor: "bg-gray-100",
  },
  {
    id: "experiencia",
    title: "Experiência",
    content: "Sua experiência profissional...",
    bgColor: "bg-white",
  },
];
</script>
