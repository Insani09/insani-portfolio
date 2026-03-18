<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Experience from './components/Experience.vue'
import Certifications from './components/Certifications.vue' 
import { Instagram, Linkedin, Github, Mail, Download } from 'lucide-vue-next'
import { printCV } from './utils/print.js'
</script>

<template>
  <div class="app-wrapper">
    <Navbar />
    
    <main>
      <div id="beranda" class="section-anchor"><Hero /></div>
      <div id="keahlian" class="section-anchor"><Skills /></div>
      <div id="proyek" class="section-anchor"><Projects /></div>
      <div id="pengalaman" class="section-anchor"><Experience /></div>
      <div id="sertifikasi" class="section-anchor"><Certifications /></div>
    </main>

    <footer class="footer">
      <div class="footer-container">
        
        <!-- Logo & Info -->
        <div class="footer-brand">
          <h3 class="footer-logo">INSANI<span>.</span></h3>
          <p class="footer-desc">
            Siswi Rekayasa Perangkat Lunak dan pengembang web yang antusias membuat aplikasi web yang estetik dan fungsional.
          </p>
          <button @click="printCV" class="footer-btn">
            <Download :size="18" />
            Unduh CV
          </button>
        </div>

        <!-- Links -->
        <div class="footer-links-group">
          <h4 class="footer-title">NAVIGASI</h4>
          <ul class="footer-nav">
            <li><a href="#beranda">Beranda</a></li>
            <li><a href="#keahlian">Keahlian</a></li>
            <li><a href="#proyek">Proyek</a></li>
            <li><a href="#pengalaman">Pengalaman</a></li>
            <li><a href="#sertifikasi">Sertifikasi</a></li>
          </ul>
        </div>

        <!-- Social Media -->
        <div class="footer-social-group">
          <h4 class="footer-title">HUBUNGI SAYA</h4>
          <div class="social-links">
            <a href="https://github.com/Insani09" target="_blank" class="social-icon"><Github :size="20" /></a>
            <a href="https://www.instagram.com/etherealsani_/" target="_blank" class="social-icon"><Instagram :size="20" /></a>
            <a href="https://www.linkedin.com/in/insani-aura-ramadhani-196246341" target="_blank" class="social-icon"><Linkedin :size="20" /></a>
            <a href="mailto:insaniauraramadhani@gmail.com" class="social-icon"><Mail :size="20" /></a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 Insani Aura Ramadhani. All rights reserved.</p>
        <div class="footer-policy">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

.section-anchor {
  scroll-margin-top: 80px; /* Offset for sticky navbar */
}

/* Footer Styles */
.footer {
  background-color: var(--bg-primary);
  border-top: 1px solid var(--border-color);
  padding: 80px 5% 20px 5%;
  margin-top: 40px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 60px;
  flex-wrap: wrap;
  margin-bottom: 60px;
}

.footer-brand {
  max-width: 320px;
}

.footer-logo {
  font-size: 2rem;
  font-weight: 900;
  color: var(--text-primary);
  margin: 0 0 16px 0;
  letter-spacing: 2px;
}

.footer-logo span {
  color: var(--accent);
}

.footer-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0 0 24px 0;
}

.footer-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: var(--text-primary);
  color: var(--bg-primary);
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 0.95rem;
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s;
}

.footer-btn:hover {
  background-color: var(--text-secondary);
  transform: translateY(-2px);
}

.footer-title {
  font-size: 0.9rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 24px 0;
  letter-spacing: 1px;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-nav a {
  color: var(--text-secondary);
  font-weight: 500;
  transition: color 0.3s;
  display: inline-flex;
  align-items: center;
}

.footer-nav a::before {
  content: '';
  width: 6px;
  height: 6px;
  background-color: var(--accent);
  border-radius: 50%;
  margin-right: 10px;
  opacity: 0;
  transition: opacity 0.3s;
}

.footer-nav a:hover {
  color: var(--text-primary);
}

.footer-nav a:hover::before {
  opacity: 1;
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid var(--border-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-primary);
  transition: all 0.3s;
}

.social-icon:hover {
  background-color: var(--text-primary);
  color: var(--bg-primary);
  border-color: transparent;
  transform: translateY(-3px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  border-top: 1px solid var(--border-color);
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.footer-bottom p {
  margin: 0;
}

.footer-policy {
  display: flex;
  gap: 24px;
}

.footer-policy a {
  transition: color 0.3s;
}

.footer-policy a:hover {
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    gap: 40px;
    text-align: center;
  }
  
  .footer-brand {
    max-width: 100%;
    margin: 0 auto;
  }
  
  .footer-nav {
    align-items: center;
  }
  
  .social-links {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>