import { UserIcon, BriefcaseIcon, AcademicCapIcon, FolderIcon } from '@heroicons/vue/24/outline';
const navItems = [
    { id: 1, name: 'Sobre', href: '#sobre', icon: UserIcon },
    { id: 2, name: 'Experiência', href: '#experiencia', icon: BriefcaseIcon },
    { id: 3, name: 'Formação', href: '#formacao', icon: AcademicCapIcon },
    { id: 4, name: 'Projetos', href: '#projetos', icon: FolderIcon }
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
    ...{ class: "fixed left-0 top-0 h-full w-20 bg-[#0a192f] flex flex-col items-center py-8 space-y-6" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "#home",
    ...{ class: "text-[#64ffda] hover:text-white transition-colors" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    ...{ class: "w-6 h-6" },
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    'stroke-linecap': "round",
    'stroke-linejoin': "round",
    'stroke-width': "2",
    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
});
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.navItems))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        key: (item.id),
        href: (item.href),
        ...{ class: "text-[#8892b0] hover:text-[#64ffda] transition-colors" },
    });
    const __VLS_0 = ((item.icon));
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ class: "w-6 h-6" },
    }));
    const __VLS_2 = __VLS_1({
        ...{ class: "w-6 h-6" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
}
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['left-0']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['w-20']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#0a192f]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['py-8']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#64ffda]']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6']} */ ;
/** @type {__VLS_StyleScopedClasses['h-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#8892b0]']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-[#64ffda]']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6']} */ ;
/** @type {__VLS_StyleScopedClasses['h-6']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            navItems: navItems,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
