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
const previousSection = computed(() => currentIndex.value > 0 ? sections[currentIndex.value - 1] : null);
const currentSection = computed(() => sections[currentIndex.value]);
const nextSection = computed(() => currentIndex.value < sections.length - 1
    ? sections[currentIndex.value + 1]
    : null);
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
    }
    else {
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
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
    ...{ class: "fixed top-0 right-0 left-0 z-30 flex h-1/10 items-center justify-around bg-[#002e07]/60 px-4 py-3 text-[#64ffda] backdrop-blur-md lg:hidden" },
});
if (__VLS_ctx.currentIndex > 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.currentIndex > 0))
                    return;
                __VLS_ctx.goTo(__VLS_ctx.previousSection.id);
            } },
        ...{ class: "text-sm" },
    });
    const __VLS_0 = {}.ArrowLeftIcon;
    /** @type {[typeof __VLS_components.ArrowLeftIcon, ]} */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ class: "h-5 w-5" },
    }));
    const __VLS_2 = __VLS_1({
        ...{ class: "h-5 w-5" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "w-5" },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "text-lg font-bold" },
});
(__VLS_ctx.currentSection.label);
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.handleNextClick) },
    ...{ class: "flex items-center gap-1 text-sm" },
});
if (__VLS_ctx.nextSection) {
    const __VLS_4 = {}.ArrowRightIcon;
    /** @type {[typeof __VLS_components.ArrowRightIcon, ]} */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        ...{ class: "h-5 w-5" },
    }));
    const __VLS_6 = __VLS_5({
        ...{ class: "h-5 w-5" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
}
else {
}
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['right-0']} */ ;
/** @type {__VLS_StyleScopedClasses['left-0']} */ ;
/** @type {__VLS_StyleScopedClasses['z-30']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['h-1/10']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-around']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#002e07]/60']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#64ffda]']} */ ;
/** @type {__VLS_StyleScopedClasses['backdrop-blur-md']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            ArrowLeftIcon: ArrowLeftIcon,
            ArrowRightIcon: ArrowRightIcon,
            currentIndex: currentIndex,
            previousSection: previousSection,
            currentSection: currentSection,
            nextSection: nextSection,
            goTo: goTo,
            handleNextClick: handleNextClick,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
