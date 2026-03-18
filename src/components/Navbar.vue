<script setup>
import { useDark, useToggle } from '@vueuse/core'
import { Sun, Moon, Download, Menu, X } from 'lucide-vue-next'
import { ref } from 'vue'
import { printCV } from '../utils/print.js'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const isMobileMenuOpen = ref(false)

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="logo">
        <a href="#beranda">INSANI<span>.</span></a>
      </div>

      <!-- Desktop Menu -->
      <div class="desktop-menu">
        <ul class="nav-links">
          <li><a href="#beranda">Beranda</a></li>
          <li><a href="#keahlian">Keahlian</a></li>
          <li><a href="#proyek">Proyek</a></li>
          <li><a href="#pengalaman">Pengalaman</a></li>
          <li><a href="#sertifikasi">Sertifikasi</a></li>
        </ul>

        <button @click="toggleDark()" class="icon-btn" aria-label="Toggle Dark Mode">
          <Moon v-if="!isDark" :size="20" />
          <Sun v-else :size="20" />
        </button>

        <a href="#" @click="printCV" class="btn-cv">
          <Download :size="18" />
          <span>Unduh CV</span>
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <div class="mobile-menu-btn">
        <button @click="toggleDark()" class="icon-btn">
          <Moon v-if="!isDark" :size="20" />
          <Sun v-else :size="20" />
        </button>
        <button @click="toggleMenu" class="icon-btn">
          <Menu v-if="!isMobileMenuOpen" :size="28" />
          <X v-else :size="28" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu Panel -->
    <div class="mobile-menu-panel" :class="{ 'open': isMobileMenuOpen }">
      <ul class="mobile-nav-links">
        <li><a @click="toggleMenu" href="#beranda">Beranda</a></li>
        <li><a @click="toggleMenu" href="#keahlian">Keahlian</a></li>
        <li><a @click="toggleMenu" href="#proyek">Proyek</a></li>
        <li><a @click="toggleMenu" href="#pengalaman">Pengalaman</a></li>
        <li><a @click="toggleMenu" href="#sertifikasi">Sertifikasi</a></li>
      </ul>
      <a href="#" @click="printCV" class="btn-cv btn-cv-mobile">
        <Download :size="18" />
        <span>Unduh CV</span>
      </a>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
  transition: all 0.3s ease;
  padding: 0 5%;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.logo a {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.5px;
}

.logo span {
  color: var(--accent);
}

/* Desktop Menu */
.desktop-menu {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.3s;
}

.nav-links a:hover {
  color: var(--text-primary);
}

.icon-btn {
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.icon-btn:hover {
  background-color: var(--bg-secondary);
}

.btn-cv {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--text-primary);
  color: var(--bg-primary);
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 0.95rem;
  transition: transform 0.3s, background-color 0.3s;
}

.btn-cv:hover {
  background-color: var(--text-secondary);
  color: var(--bg-primary);
  transform: translateY(-2px);
}

.btn-cv-mobile {
  margin-top: 20px;
  justify-content: center;
}

/* Mobile Menu */
.mobile-menu-btn {
  display: none;
  align-items: center;
  gap: 10px;
}

.mobile-menu-panel {
  display: none;
  flex-direction: column;
  background-color: var(--bg-primary);
  padding: 20px;
  border-top: 1px solid var(--border-color);
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}

.mobile-menu-panel.open {
  display: flex;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.mobile-nav-links a {
  display: block;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 10px 15px;
  border-radius: 8px;
  transition: all 0.2s;
}

.mobile-nav-links a:hover {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
}

/* Responsive */
@media (max-width: 868px) {
  .desktop-menu {
    display: none;
  }
  .mobile-menu-btn {
    display: flex;
  }
}
</style>