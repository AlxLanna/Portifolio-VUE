<template>
    <div>
      <!-- Navbar -->
      <Navbar />
      
      <!-- Seção Sobre -->
      <section id="sobre" class="py-16 bg-gray-100 w-full flex justify-center">
        <div class="sobre-container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <!-- Imagem à esquerda -->
          <div class="sobre-image flex justify-center">
            <img :src="imagePath" alt="Imagem sobre mim" class="rounded-lg shadow-lg" />
          </div>
    
          <!-- Informações à direita -->
          <div class="sobre-text">
            <h2 class="text-3xl font-bold">Sobre</h2>
            <p class="text-lg mt-4">Aqui você encontra informações sobre mim...</p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  import bartenderImage from '@/assets/images/bartender.jpg';
  
  export default {
    name: 'Home',
    components: {
      Navbar,
    },
    data() {
      return {
        imagePath: bartenderImage,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Adicionar margin-top à primeira seção para garantir que a navbar não se sobreponha */
  section {
    padding: 4rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px; /* Ajuste conforme a altura da navbar */
  }
  
  .sobre-container {
    background-color: #ebf8ff; /* Azul claro */
    border: 2px solid #4299e1; /* Borda azul */
    width: 100%;
    max-width: 1024px; /* Limita a largura em telas grandes */
    padding: 2rem;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr; /* Para telas pequenas, uma coluna */
    gap: 2rem; /* Espaço entre os itens */
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
  