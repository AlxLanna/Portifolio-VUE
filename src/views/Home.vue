<template>
  <div class="relative min-h-screen bg-[#00490a]">
    <transition name="fade">
      <Sidebar v-if="isLargeScreen" class="fixed top-0 left-0 h-screen" />
    </transition>

    <transition name="fade">
      <MobileNav v-if="!isLargeScreen && showMobileNav" />
    </transition>

    <main :class="mainClasses">
      <div v-if="!isLargeScreen" id="inicio" class="mx-auto max-w-2xl">
        <ProfileCard />
      </div>
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
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import Sidebar from "@/components/Sidebar.vue";
import MobileNav from "@/components/MobileNav.vue";
import ProfileCard from "@/components/ProfileCard.vue";
import { useI18n } from "vue-i18n";

// reponsividade da tela
const isLargeScreen = ref(window.innerWidth >= 1024);

//exibicao da MobileNav
const showMobileNav = ref(false);

// verifica o tamanho da tela e qual section esta sendo exibida
const handleResize = () => {
  isLargeScreen.value = window.innerWidth >= 1024;
};

const handleScroll = () => {
  const experiencia = document.getElementById("experiencia");
  if (!experiencia) return;

  const scrollY = window.scrollY;
  const top = experiencia.offsetTop;

  showMobileNav.value = scrollY + 80 >= top; // 80 dá um pequeno ajuste
};

onMounted(() => {
  window.addEventListener("resize", handleResize); //tamanho
  window.addEventListener("scroll", handleScroll); // section
  handleResize();
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  window.removeEventListener("scroll", handleScroll);
});

const mainClasses = computed(() =>
  isLargeScreen.value ? "ml-[28rem] flex-1" : "w-full",
);

// traducao
const { t } = useI18n();
</script>
