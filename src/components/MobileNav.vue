<template>
  <nav
    class="fixed top-0 right-0 left-0 z-30 flex items-center justify-around bg-[#002e07]/60 p-8 px-4 py-3 text-[#64ffda] backdrop-blur-md lg:hidden"
  >
    <button
      @click="goTo(previousSection.id)"
      :disabled="!previousSection"
      class="text-sm disabled:opacity-40"
    >
      {{ previousSection?.label || "" }}
    </button>

    <span class="text-lg font-bold">
      {{ currentSection.label }}
    </span>

    <button
      @click="goTo(nextSection.id)"
      :disabled="!nextSection"
      class="text-sm disabled:opacity-40"
    >
      {{ nextSection?.label || "" }}
    </button>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const sections = [
  { id: "inicio", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "formacao", label: "Formação" },
  { id: "habilidades", label: "Habilidades" },
  { id: "certificados", label: "Certificados" },
  { id: "contato", label: "Contato" },
];

const currentIndex = ref(0);

const previousSection = computed(() =>
  currentIndex.value > 0 ? sections[currentIndex.value - 1] : null,
);
const currentSection = computed(() => sections[currentIndex.value]);
const nextSection = computed(() =>
  currentIndex.value < sections.length - 1
    ? sections[currentIndex.value + 1]
    : null,
);

function goTo(id) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.offsetTop;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }
}

function updateCurrentSection() {
  for (let i = 0; i < sections.length; i++) {
    const el = document.getElementById(sections[i].id);
    if (el && window.scrollY + window.innerHeight / 2 >= el.offsetTop) {
      currentIndex.value = i;
    }
  }
}

onMounted(() => {
  window.addEventListener("scroll", updateCurrentSection);
  updateCurrentSection();
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateCurrentSection);
});
</script>
