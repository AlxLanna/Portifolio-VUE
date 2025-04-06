<template>
  <div class="relative min-h-screen bg-[#00490a]">
    <Navbar v-if="isLargeScreen" class="fixed top-0 left-0 h-screen" />

    <main :class="mainClasses">
      <!-- Seção Sobre -->
      <section id="sobre" class="flex min-h-screen py-6">
        <div class="mx-auto max-w-2xl rounded bg-[#00490a] p-8">
          <h2 class="mb-4 text-2xl text-[#64ffda]">{{ t("about.title") }}</h2>
          <p class="text-[#8892b0]">{{ t("about.description") }}</p>
        </div>
      </section>

      <section id="experiencia" class="flex min-h-screen py-6">
        <div class="mx-auto max-w-2xl rounded bg-[#00490a] p-8">
          <h2 class="mb-4 text-2xl text-[#64ffda]">SOBRE MIM</h2>
          <p class="text-[#8892b0]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos.
          </p>
        </div>
      </section>

      <section id="formacao" class="flex min-h-screen py-6">
        <div class="mx-auto max-w-2xl rounded bg-[#00490a] p-8">
          <h2 class="mb-4 text-2xl text-[#64ffda]">SOBRE MIM</h2>
          <p class="text-[#8892b0]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos.
          </p>
        </div>
      </section>

      <section id="habilidades" class="flex min-h-screen py-6">
        <div class="mx-auto max-w-2xl rounded bg-[#00490a] p-8">
          <h2 class="mb-4 text-2xl text-[#64ffda]">SOBRE MIM</h2>
          <p class="text-[#8892b0]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos.
          </p>
        </div>
      </section>

      <section id="certificados" class="flex min-h-screen py-6">
        <div class="mx-auto max-w-2xl rounded bg-[#00490a] p-8">
          <h2 class="mb-4 text-2xl text-[#64ffda]">SOBRE MIM</h2>
          <p class="text-[#8892b0]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos.
          </p>
        </div>
      </section>

      <section id="contato" class="flex min-h-screen py-6">
        <div class="mx-auto max-w-2xl rounded bg-[#00490a] p-8">
          <h2 class="mb-4 text-2xl text-[#64ffda]">SOBRE MIM</h2>
          <p class="text-[#8892b0]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import Navbar from "@/components/Navbar.vue";
import { useI18n } from "vue-i18n";

const isLargeScreen = ref(window.innerWidth >= 1024);

const handleResize = () => {
  isLargeScreen.value = window.innerWidth >= 1024;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const mainClasses = computed(() =>
  isLargeScreen.value ? "ml-[28rem] flex-1" : "w-full",
);

const { t } = useI18n();
</script>
