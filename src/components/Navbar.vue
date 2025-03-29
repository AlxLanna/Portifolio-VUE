<template>
  <div class="fixed flex min-h-screen flex-col md:flex-row">
    <!-- Navbar (aparece apenas em desktop) -->
    <nav
      class="hidden w-72 flex-col border-r border-[#0e8c20] bg-[#11aa26] text-white md:flex"
    >
      <!-- Informações Pessoais -->
      <div class="border-b border-[#0e8c20] p-6 text-center">
        <div
          class="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-gray-300"
        >
          <!-- <img src="@/assets/foto-perfil.jpg" alt="Foto" class="w-full h-full object-cover"> -->
        </div>
        <h1 class="text-xl font-bold">Seu Nome</h1>
        <p class="mt-1 text-sm opacity-80">Programador Full Stack</p>
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
import { ref, onMounted, onUnmounted } from "vue";

const isMobile = ref(window.innerWidth < 768);

const handleResize = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

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
