<template>
  <nav class="fixed left-0 top-0 h-full bg-[#11aa26] text-white p-4 z-50 w-[30%] flex flex-col">
    <!-- Menu Desktop -->
    <ul class="flex flex-col space-y-4 mt-8">
      <li v-for="item in navItems" :key="item.id">
        <a :href="item.href" 
           class="block px-4 py-2 rounded-md hover:bg-[#0e8c20] transition-colors text-white font-medium" 
           @click="closeMobileMenu">
          {{ item.name }}
        </a>
      </li>
    </ul>

    <!-- Hamburger Button - Removido pois não faz sentido em sidebar -->
  </nav>

  <!-- Menu Mobile - Mantido caso queira manter responsividade -->
  <transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0 -translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-150"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-2">
    <div v-if="isOpen" class="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" @click="closeMobileMenu">
      <ul class="absolute top-16 left-0 right-0 bg-[#0e8c20] shadow-lg" @click.stop>
        <li v-for="item in navItems" :key="item.id">
          <a :href="item.href"
             class="block px-6 py-3 hover:bg-[#11aa26] transition-colors text-white font-medium"
             @click="closeMobileMenu">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Defina a interface para os itens de navegação
interface NavItem {
  id: number;
  name: string;
  href: string;
}

// Defina os itens de navegação
const navItems: NavItem[] = [
  { id: 1, name: 'Sobre', href: '#sobre' },
  { id: 2, name: 'Experiência', href: '#experiencia' },
  { id: 3, name: 'Formação', href: '#formacao' },
  { id: 4, name: 'Habilidades', href: '#habilidades' },
  { id: 5, name: 'Certificados', href: '#certificados' },
  { id: 6, name: 'Contato', href: '#contato' }
];

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMobileMenu = () => {
  isOpen.value = false;
};
</script>