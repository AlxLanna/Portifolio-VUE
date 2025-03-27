<template>
    <nav class="bg-gray-800 text-white p-4 w-full">
      <!-- Centraliza os itens da navbar -->
      <ul class="flex justify-center space-x-4">
        <li><a href="#sobre" class="hover:text-blue-400">Sobre</a></li>
        <li><a href="#experiencia" class="hover:text-blue-400">Experiência</a></li>
        <li><a href="#formacao" class="hover:text-blue-400">Formação</a></li>
        <li><a href="#habilidades" class="hover:text-blue-400">Habilidades</a></li>
        <li><a href="#certificados" class="hover:text-blue-400">Certificados</a></li>
        <li><a href="#contato" class="hover:text-black">Contato</a></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
  nav {
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%; /* Garantir que o nav ocupe 100% da largura */
    background-color: #dee9dc; /* Garantir que o fundo seja visível */
  }
  
  ul {
    display: flex;
    justify-content: center; /* Centraliza os itens na navbar */
    gap: 1rem; /* Espaçamento entre os itens */
    list-style: none; /* Remove o marcador padrão da lista */
    padding: 0; /* Remove o padding */
    margin: 0; /* Remove a margem */
  }
  </style>
  