<template>
  <div class="flex flex-col md:flex-row min-h-screen">
    <!-- Navbar (aparece primeiro em mobile) -->
    <Navbar />
    
    <!-- Conteúdo principal -->
    <main class="flex-1 md:ml-[30%]">
      <section 
        v-for="section in sections" 
        :id="section.id" 
        :key="section.id"
        class="min-h-screen py-12 px-6 bg-gray-100"
      >
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-6">{{ section.title }}</h2>
          <p class="text-lg">{{ section.content }}</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
  },
  // data() {
  //   return {
  //     sections: [
  //       { id: 'sobre', title: 'Sobre Mim', content: 'Aqui você encontra informações sobre mim...' },
  //       { id: 'experiencia', title: 'Experiência', content: 'Minha trajetória profissional...' },
  //       // Adicione as outras seções conforme necessário
  //     ]
  //   };
  // }
};
</script>

<style scoped>
section {
  scroll-margin-top: 4rem; /* Ajuste para o cabeçalho em mobile */
}

@media (min-width: 768px) {
  section {
    scroll-margin-top: 0;
  }
}
</style>