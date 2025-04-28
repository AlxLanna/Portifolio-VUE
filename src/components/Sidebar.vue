<template>
  <div
    class="fixed mx-auto min-h-screen max-w-screen-xl py-12 lg:py-0 md:px-[auto] xl:px-[8rem]"
  >
    <nav
      class="bg-primary text-text-primary flex h-full flex-col px-6"
    >
      <ProfileCard />

      <!-- Menu de Navegação -->
      <ul class="flex flex-1 flex-col py-4">
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
import ProfileCard from "./ProfileCard.vue";

const navItems = [
  { id: 1, name: "Sobre", href: "#sobre" },
  { id: 2, name: "Experiência", href: "#experiencia" },
  { id: 3, name: "Formação", href: "#formacao" },
  { id: 4, name: "Habilidades", href: "#habilidades" },
  { id: 5, name: "Certificados", href: "#certificados" },
  { id: 6, name: "Contato", href: "#contato" },
];
</script>


