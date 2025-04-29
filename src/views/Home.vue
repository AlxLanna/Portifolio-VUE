<template>

  <transition name="fade">
    <MobileNav v-if="!isLargeScreen && showMobileNav" />
  </transition>

  <div class="grid min-h-screen grid-cols-none px-6 lg:grid-cols-[2fr_3fr] md:gap-fluid-24  xl:gap-fluid-36 bg-primary text-text-primary">


    <Sidebar class="hidden lg:block" />



    <main class="w-full col-start-2 px-fluid-24 sm:px-fluid-1">


      <div v-if="!isLargeScreen" id="inicio" class="pt-2">
        <ProfileCard />
      </div>

      <!-- divisona de sections -->
      <div class="sm:px-0 xl:py-24 md:px-0">

        <section id="sobre" class="flex min-h-screen scroll-mt-1">
          <div class="bg-primary text-text-primary mx-auto max-w-2xl rounded">
            <h2 class="mb-2 text-2xl text-[#64ffda]">{{ t("about.title") }}</h2>
            <p class="text-[#8892b0]">{{ t("about.description") }}</p>
          </div>
        </section>

        <section id="experiencia" class="flex min-h-screen scroll-mt-16 py-6">
          <div class="bg-primary text-text-primary mx-auto max-w-2xl rounded">
            <h2 class="mb-4 text-2xl text-[#64ffda]">
              {{ t("experience.title") }}
            </h2>
            <p class="text-[#8892b0]">{{ t("experience.description") }}</p>
          </div>
        </section>

        <section id="formacao" class="flex min-h-screen scroll-mt-16 py-6">
          <div class="bg-primary text-text-primary mx-auto max-w-2xl rounded">
            <h2 class="mb-4 text-2xl text-[#64ffda]">
              {{ t("education.title") }}
            </h2>
            <p class="text-[#8892b0]">{{ t("education.description") }}</p>
          </div>
        </section>

        <section id="habilidades" class="flex min-h-screen scroll-mt-16 py-6">
          <div class="bg-primary text-text-primary mx-auto max-w-2xl rounded">
            <h2 class="mb-4 text-2xl text-[#64ffda]">
              {{ t("skills.title") }}
            </h2>
            <p class="text-[#8892b0]">{{ t("skills.description") }}</p>
          </div>
        </section>

        <section id="certificados" class="flex min-h-screen scroll-mt-16 py-6">
          <div class="bg-primary text-text-primary mx-auto max-w-2xl rounded">
            <h2 class="mb-4 text-2xl text-[#64ffda]">
              {{ t("certificates.title") }}
            </h2>
            <p class="text-[#8892b0]">{{ t("certificates.description") }}</p>
          </div>
        </section>

        <section id="contato" class="flex min-h-screen scroll-mt-16 py-6">
          <div class="bg-primary text-text-primary mx-auto max-w-2xl rounded p-8">
            <h2 class="mb-4 text-2xl text-[#64ffda]">
              {{ t("contact.title") }}
            </h2>
            <p class="text-[#8892b0]">{{ t("contact.description") }}</p>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Sidebar from "@/components/Sidebar.vue";
import MobileNav from "@/components/MobileNav.vue";
import ProfileCard from "@/components/ProfileCard.vue";
import { useI18n } from "vue-i18n";

const isLargeScreen = ref(false);
const showMobileNav = ref(false);
let mediaQuery;

// traduz
const { t } = useI18n();

// handle scroll
const handleScroll = () => {
  const sobre = document.getElementById("sobre");
  if (!sobre) return;

  const scrollY = window.scrollY;
  const top = sobre.offsetTop;

  showMobileNav.value = scrollY + 80 >= top;
};

const handleMediaChange = (e) => {
  isLargeScreen.value = e.matches;
};

// exibe o ProfileCard no topo da página quando menor que mediaQuery
onMounted(() => {
  mediaQuery = window.matchMedia("(min-width: 1024px)");
  isLargeScreen.value = mediaQuery.matches;
  mediaQuery.addEventListener("change", handleMediaChange);

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  mediaQuery.removeEventListener("change", handleMediaChange);
  window.removeEventListener("scroll", handleScroll);
});
</script>

