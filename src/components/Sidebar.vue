<template>
  <div class="mx-auto min-h-screen max-w-screen-lg py-8 xl:px-20 lg:py-0 px-4 md:px-8  mt-16">
    <nav class="bg-primary text-text-primary flex h-full flex-col px-3 sm:px-4 w-full max-w-[240px] md:max-w-[300px] lg:max-w-[300px]  mx-auto transition-all duration-200">
      <ProfileCard class="w-full"/>

      <ul class="flex flex-1 flex-col py-2 space-y-1">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="item.href"
            class="block px-4 py-2 text-sm font-medium transition-colors hover:bg-[#0e8c20] rounded"
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


