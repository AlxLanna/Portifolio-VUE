<template>
  <div class="min-h-screen bg-[#0a192f]">
    <Navbar />

    <main class="ml-20 p-8">
      <!-- Seção Sobre -->
      <section id="sobre" class="min-h-screen py-20">
        <div class="mx-auto max-w-2xl rounded bg-[#112240] p-8">
          <h2 class="mb-4 text-2xl text-[#64ffda]">SOBRE MIM</h2>
          <p class="text-[#8892b0]">
            Ex-bartender migrando para tecnologia. Especialista em Ruby on Rails
            e sistemas embarcados.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
</script>
