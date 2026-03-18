<script setup>
import { Download, ArrowRight } from 'lucide-vue-next'
import { printCV } from '../utils/print.js'
</script>

<template>
  <section class="hero">
    <div class="hero-container">
      
      <!-- Text Content -->
      <div class="hero-text animate-slide-up">
        <div class="badge">👋 Halo, Penjelajah Web!</div>
        <h1 class="title">INSANI AURA RAMADHANI</h1>
        <h2 class="subtitle">Software Engineering Student</h2>
        <p class="desc">
          Pengembang web pemula dan siswa Rekayasa Perangkat Lunak yang antusias dalam merancang dan membangun aplikasi web. Memiliki dedikasi tinggi dan siap berkontribusi dalam tim.
        </p>
        
        <div class="cta-buttons">
          <a href="#" @click="printCV" class="btn-primary">
            <Download :size="20" />
            Unduh CV
          </a>
          <a href="#proyek" class="btn-outline">
            Lihat Proyek
            <ArrowRight :size="20" />
          </a>
        </div>
      </div>

      <!-- Image Content -->
      <div class="hero-image animate-slide-up" style="animation-delay: 0.2s">
        <div class="image-wrapper">
          <div class="bg-shape shape-1"></div>
          <div class="bg-shape shape-2"></div>
          <div class="img-container">
            <img src="../assets/insani-foto.jpeg" alt="Insani Aura Ramadhani" />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  padding: 60px 5%;
  overflow: hidden;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
}

/* Text Section */
.hero-text {
  flex: 1;
}

.badge {
  display: inline-block;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 24px;
}

.title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  color: var(--text-primary);
  margin: 0 0 16px 0;
}

.subtitle {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 500;
  color: var(--text-secondary);
  margin: 0 0 24px 0;
}

.desc {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0 0 40px 0;
  max-width: 600px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-primary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: var(--text-primary);
  color: var(--bg-primary);
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.3s;
  border: 2px solid transparent;
}

.btn-primary:hover {
  background-color: var(--text-secondary);
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}

.btn-outline {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: transparent;
  color: var(--text-primary);
  border: 2px solid var(--text-primary);
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.3s;
}

.btn-outline:hover {
  background-color: var(--text-primary);
  color: var(--bg-primary);
}

/* Image Section */
.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.image-wrapper {
  position: relative;
  width: 400px;
  max-width: 100%;
  aspect-ratio: 1 / 1;
}

.bg-shape {
  position: absolute;
  inset: 0;
  border-radius: 2rem;
  transition: transform 0.5s ease;
}

.shape-1 {
  background-color: var(--accent);
  opacity: 0.5;
  transform: rotate(6deg);
}

.shape-2 {
  background-color: var(--bg-secondary);
  border: 2px solid var(--text-secondary);
  transform: rotate(-6deg);
  z-index: 1;
}

.image-wrapper:hover .shape-1 { transform: rotate(12deg); }
.image-wrapper:hover .shape-2 { transform: rotate(-3deg); }

.img-container {
  position: absolute;
  inset: 0;
  border-radius: 2rem;
  overflow: hidden;
  border: 4px solid var(--bg-primary);
  z-index: 2;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
  transition: transform 0.5s ease;
}

.image-wrapper:hover .img-container {
  transform: scale(1.02);
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Responsive */
@media (max-width: 968px) {
  .hero-container {
    flex-direction: column-reverse;
    text-align: center;
    gap: 40px;
  }

  .hero-text, .hero-image {
    width: 100%;
  }

  .desc {
    margin: 0 auto 40px auto;
  }

  .cta-buttons {
    justify-content: center;
  }

  .cta-buttons a {
    width: 100%;
  }

  .image-wrapper {
    width: 320px;
    max-width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
  }
}
</style>