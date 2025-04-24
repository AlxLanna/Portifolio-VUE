<template>
  <nav
    class="fixed top-0 right-0 left-0 z-30 flex h-1/10 items-center justify-around bg-[#002e07]/60 px-4 py-3 text-[#64ffda] backdrop-blur-md lg:hidden"
  >
    <!-- se não houver sessão anterior, nao mostra o botao de voltar -->
    <button
      v-if="currentIndex > 0"
      @click="goTo(previousSection.id)"
      class="text-sm"
    >
      <ArrowLeftIcon class="h-5 w-5" />
    </button>
    <div v-else class="w-5"></div>

    <span class="text-lg font-bold">
      {{ currentSection.label }}
    </span>

    <!-- Botão próximo. Se for a ultima sessão envia para o inicio da pagina -->
    <button @click="handleNextClick" class="flex items-center gap-1 text-sm">
      <template v-if="nextSection">
        <ArrowRightIcon class="h-5 w-5" />
      </template>
      <template v-else> Voltar ao início </template>
    </button>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/24/outline";

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
  if (id === "inicio") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const el = document.getElementById(id);
  if (el) {
    // Ajuste de offset para exibir somente próximo ao título da seção
    const y = el.getBoundingClientRect().top + window.pageYOffset - 70;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

function handleNextClick() {
  if (nextSection.value) {
    goTo(nextSection.value.id);
  } else {
    // Se for a última seção, volta para o Profile Card
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function updateCurrentSection() {
  const triggerOffset = 100;

  // Verifica se está no topo (Profile Card)
  if (window.scrollY < triggerOffset) {
    currentIndex.value = -1;
    return;
  }

  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i].id);
    if (el) {
      const rect = el.getBoundingClientRect();
      const elementTop = rect.top + window.pageYOffset;

      if (window.scrollY >= elementTop - triggerOffset) {
        currentIndex.value = i;
        return;
      }
    }
  }

  // Se não encontrou nenhuma seção
  currentIndex.value = 0;
}

let scrollTimeout;
function onScroll() {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(updateCurrentSection, 100);
}

onMounted(() => {
  window.addEventListener("scroll", onScroll);
  updateCurrentSection();
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>
