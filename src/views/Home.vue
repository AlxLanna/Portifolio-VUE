<template>
  <div class="relative min-h-screen bg-[#00490a]">
    <Sidebar v-if="isLargeScreen" class="fixed top-0 left-0 h-screen" />

    <main :class="[mainClasses, !isLargeScreen ? 'pt-[4rem]' : '']">
      <!-- Corpo-->
      <section id="sobre" class="flex min-h-screen scroll-mt-16 py-6">
        <div class="mx-auto max-w-2xl rounded bg-[#00490a] p-8">
          <h2 class="mb-4 text-2xl text-[#64ffda]">{{ t("about.title") }}</h2>
          <p class="text-[#8892b0]">{{ t("about.description") }}</p>
        </div>
      </section>

      <section id="experiencia" class="flex min-h-screen scroll-mt-16 py-6">
        <div class="mx-auto max-w-2xl rounded bg-[#00490a] p-8">
          <h2 class="mb-4 text-2xl text-[#64ffda]">
            {{ t("experience.title") }}
          </h2>
          <p class="text-[#8892b0]">{{ t("experience.description") }}</p>
        </div>
      </section>

      <section id="formacao" class="flex min-h-screen scroll-mt-16 py-6">
        <div class="mx-auto max-w-2xl rounded bg-[#00490a] p-8">
          <h2 class="mb-4 text-2xl text-[#64ffda]">
            {{ t("education.title") }}
          </h2>
          <p class="text-[#8892b0]">{{ t("education.description") }}</p>
        </div>
      </section>

      <section id="habilidades" class="flex min-h-screen scroll-mt-16 py-6">
        <div class="mx-auto max-w-2xl rounded bg-[#00490a] p-8">
          <h2 class="mb-4 text-2xl text-[#64ffda]">
            {{ t("skills.title") }}
          </h2>
          <p class="text-[#8892b0]">{{ t("skills.description") }}</p>
        </div>
      </section>

      <section id="certificados" class="flex min-h-screen scroll-mt-16 py-6">
        <div class="mx-auto max-w-2xl rounded bg-[#00490a] p-8">
          <h2 class="mb-4 text-2xl text-[#64ffda]">
            {{ t("certificates.title") }}
          </h2>
          <p class="text-[#8892b0]">{{ t("certificates.description") }}</p>
        </div>
      </section>

      <section id="contato" class="flex min-h-screen scroll-mt-16 py-6">
        <div class="mx-auto max-w-2xl rounded bg-[#00490a] p-8">
          <h2 class="mb-4 text-2xl text-[#64ffda]">
            {{ t("contact.title") }}
          </h2>
          <p class="text-[#8892b0]">{{ t("contact.description") }}</p>
        </div>
      </section>
    </main>
    <MobileNav v-if="!isLargeScreen" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import Sidebar from "@/components/Sidebar.vue";
import MobileNav from "@/components/MobileNav.vue";
import { useI18n } from "vue-i18n";

// reponsividade da tela
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

// traducao
const { t } = useI18n();
</script>
