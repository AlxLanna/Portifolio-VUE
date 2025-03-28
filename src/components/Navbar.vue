<template>
  <div class="flex flex-col md:flex-row min-h-screen">
    <!-- Navbar (aparece apenas em desktop) -->
    <nav class="hidden md:flex w-72 bg-[#11aa26] text-white border-r border-[#0e8c20] flex-col">
      <!-- Informações Pessoais -->
      <div class="p-6 border-b border-[#0e8c20] text-center">
        <div class="w-24 h-24 rounded-full bg-gray-300 mb-4 mx-auto overflow-hidden">
          <!-- <img src="@/assets/foto-perfil.jpg" alt="Foto" class="w-full h-full object-cover"> -->
        </div>
        <h1 class="text-xl font-bold">Seu Nome</h1>
        <p class="text-sm opacity-80 mt-1">Programador Full Stack</p>
      </div>

      <!-- Menu de Navegação -->
      <ul class="flex-1 overflow-y-auto py-4">
        <li v-for="item in navItems" :key="item.id">
          <a :href="item.href" 
             class="block px-6 py-3 hover:bg-[#0e8c20] transition-colors font-medium">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>

    <!-- Conteúdo Principal -->
    <main class="flex-1">
      <!-- Cabeçalho Mobile (aparece apenas em mobile) -->
      <div v-if="isMobile" class="bg-[#11aa26] text-white p-4 text-center">
        <div class="w-16 h-16 rounded-full bg-gray-300 mb-2 mx-auto overflow-hidden">
          <!-- <img src="@/assets/foto-perfil.jpg" alt="Foto" class="w-full h-full object-cover"> -->
        </div>
        <h1 class="text-lg font-bold">Seu Nome</h1>
        <p class="text-xs opacity-80">Programador Full Stack</p>
      </div>

      <!-- Seções de Conteúdo -->
      <section 
        v-for="section in sections" 
        :id="section.id" 
        :key="section.id"
        class="min-h-[calc(100vh-56px)] p-6 md:min-h-screen"
        :class="section.bgColor"
      >
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold mb-6">{{ section.title }}</h2>
          <p class="text-gray-700">{{ section.content }}</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMobile = ref(window.innerWidth < 768);

const handleResize = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

const navItems = [
  { id: 1, name: 'Sobre', href: '#sobre' },
  { id: 2, name: 'Experiência', href: '#experiencia' },
  { id: 3, name: 'Formação', href: '#formacao' },
  { id: 4, name: 'Habilidades', href: '#habilidades' },
  { id: 5, name: 'Certificados', href: '#certificados' },
  { id: 6, name: 'Contato', href: '#contato' }
];

const sections = [
  { 
    id: 'sobre', 
    title: 'Sobre Mim', 
    content: 'Conteúdo sobre você...',
    bgColor: 'bg-gray-100'
  },
  { 
    id: 'experiencia', 
    title: 'Experiência', 
    content: 'Sua experiência profissional...',
    bgColor: 'bg-white'
  },
  // Adicione as outras seções conforme necessário
];
</script>