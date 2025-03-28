<template>
  <nav class="fixed left-0 top-0 h-full bg-[#11aa26] text-white p-4 z-50 w-[30%] flex flex-col">
    <!-- Menu Vertical -->
    <ul class="flex flex-col space-y-4 mt-8">
      <li v-for="item in navItems" :key="item.id">
        <a :href="item.href" 
           class="block px-4 py-2 rounded-md hover:bg-[#0e8c20] transition-colors text-white font-medium" 
           @click="closeMobileMenu">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface NavItem {
  id: number;
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: 1, name: 'Sobre', href: '#sobre' },
  { id: 2, name: 'Experiência', href: '#experiencia' },
  { id: 3, name: 'Formação', href: '#formacao' },
  { id: 4, name: 'Habilidades', href: '#habilidades' },
  { id: 5, name: 'Certificados', href: '#certificados' },
  { id: 6, name: 'Contato', href: '#contato' }
];

const isOpen = ref(false);
const closeMobileMenu = () => {
  isOpen.value = false;
};
</script>
  
  <style scoped>

  section {
    padding: 4rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0px; /* Ajuste conforme a altura da navbar */
  }
  
  .sobre-container {
    background-color: #ebf8ff;
    /* border: 2px solid #4299e1;  */
    width: 100%;
    max-width: 1024px; /* Limita a largura em telas grandes */
    padding: 2rem;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr; /* Para telas pequenas, uma coluna */
    gap: 2rem; 
  }
  
  .sobre-container img {
    max-width: 100%;
    border-radius: 0.5rem;
  }
  
  @media (min-width: 768px) {
    .sobre-container {
      grid-template-columns: 1fr 1fr; /* Em telas médias e grandes, duas colunas */
    }
  }
  </style>
  