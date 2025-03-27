<template>
  <nav class="navbar">
    <!-- Desktop Menu -->
    <ul class="desktop-menu">
      <li v-for="item in navItems" :key="item.id">
        <a 
          :href="item.href" 
          class="desktop-link"
          @click="closeMobileMenu"
        >
          {{ item.name }}
        </a>
      </li>
    </ul>

    <!-- Mobile Hamburger -->
    <button 
      class="hamburger"
      @click="toggleMenu"
      aria-label="Menu"
      :class="{ 'hamburger-active': isOpen }"
    >
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <ul 
        v-if="isOpen" 
        class="mobile-menu"
        @click.self="closeMobileMenu"
      >
        <li v-for="item in navItems" :key="item.id">
          <a 
            :href="item.href"
            class="mobile-link"
            @click.prevent="closeMobileMenu"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const navItems = [
  { id: 1, name: 'Sobre', href: '#sobre' },
  { id: 2, name: 'Experiência', href: '#experiencia' },
  { id: 3, name: 'Formação', href: '#formacao' },
  { id: 4, name: 'Habilidades', href: '#habilidades' },
  { id: 5, name: 'Certificados', href: '#certificados' },
  { id: 6, name: 'Contato', href: '#contato' }
];

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMobileMenu = () => {
  isOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!target.closest('.mobile-menu') && !target.closest('.hamburger')) {
    closeMobileMenu();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
/* Estilos base - Mobile First */
.navbar {
  position: sticky;
  top: 0;
  background-color: #11aa26;
  color: white;
  padding: 1rem;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

/* Menu Desktop */
.desktop-menu {
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1.5rem;
}

.desktop-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.desktop-link:hover {
  background-color: #0e8c20;
  transform: translateY(-2px);
}

/* Hamburger Menu */
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
  transition: all 0.3s ease;
}

.hamburger-line {
  display: block;
  width: 100%;
  height: 3px;
  background-color: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger-active .hamburger-line:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger-active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger-active .hamburger-line:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Menu Mobile */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #0e8c20;
  list-style: none;
  margin: 0;
  padding: 5rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1000;
}

.mobile-link {
  color: white;
  text-decoration: none;
  display: block;
  padding: 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-size: 1.1rem;
}

.mobile-link:hover {
  background-color: #11aa26;
  transform: translateX(5px);
}

/* Transições */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

/* Media Queries - Desktop */
@media (min-width: 768px) {
  .navbar {
    justify-content: center;
  }
  
  .desktop-menu {
    display: flex;
  }
  
  .hamburger {
    display: none;
  }
  
  .mobile-menu {
    display: none !important;
  }
}
</style>