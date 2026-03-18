<script setup>
import { ref } from 'vue'

const certificates = ref([
  { id: 1, title: 'Belajar Back-End Pemula dengan JavaScript', date: '16 Maret 2026', file: '/Belajar Back-End Pemula dengan JavaScript.pdf', image: '/src/assets/sertif-backend-js-pemula.jpeg' },
  { id: 2, title: 'Belajar Membuat Aplikasi Web dengan React', date: '02 Maret 2026', file: '/Belajar Membuat Aplikasi Web Dengan React.pdf', image: '/src/assets/sertif-membuat-aplikasi-web-react.jpeg' },
  { id: 3, title: 'Belajar Membuat Front-End Web untuk Pemula', date: '20 Februari 2026', file: '/Belajar Membuat Front-End Web untuk Pemula.pdf', image: '/src/assets/sertif-frontend-js-pemula.jpeg' },
  { id: 4, title: 'Belajar Dasar Pemrograman JavaScript', date: '08 Februari 2026', file: '/Belajar Dasar Pemograman Javascript.pdf', image: '/src/assets/sertif-belajar-dasar-js.jpeg' },
  { id: 5, title: 'Belajar Dasar Pemrograman Web', date: '26 Januari 2026', file: '/Belajar Dasar Pemrograman Web.pdf', image: '/src/assets/sertif-belajar-dasar-web.jpeg' },
  { id: 6, title: 'Belajar Dasar Cloud dan Gen AI di AWS', date: '17 Januari 2026', file: '/Belajar Dasar Cloud dan Gen AI di AWS.pdf', image: '/src/assets/sertif-dasar-cloud-gen-ai.jpeg' },
  { id: 7, title: 'Pengenalan ke Logika Pemrograman (Logic 101)', date: '11 Januari 2026', file: '/Pengenalan ke Logika Pemrograman (Programming Logic 101).pdf', image: '/src/assets/sertif-pengenalan-logika.jpeg' },
  { id: 8, title: 'Dasar Pemrograman untuk Pengembang Software', date: '11 Januari 2026', file: '/Memulai Dasar Pemrograman untuk Menjadi Pengembang.pdf', image: '/src/assets/sertif-memulai-dasar-pemograman.jpeg' }
])
</script>

<template>
  <section class="certifications">
    <div class="cert-container animate-slide-up">
      <div class="section-header">
        <h2 class="section-title">Sertifikasi</h2>
        <div class="title-underline"></div>
        <p class="section-subtitle">Sertifikasi kompetensi resmi yang telah diraih dan diverifikasi, sebagian besar dari platform Dicoding Academy. Klik kartu untuk melihat dokumen PDF.</p>
      </div>

      <div class="cert-grid">
        <a 
          v-for="cert in certificates" 
          :key="cert.id" 
          :href="cert.file" 
          target="_blank"
          class="cert-card"
        >
          <!-- Certificate Image Screenshot -->
          <div class="cert-img-container">
            <img :src="cert.image" :alt="cert.title" class="cert-screenshot" />
            <div class="cert-overlay">Lihat Dokumen</div>
          </div>
          
          <!-- Details -->
          <div class="cert-info">
            <h3 class="cert-name">{{ cert.title }}</h3>
            <div class="cert-date-wrap">
              <span class="cert-date">{{ cert.date }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.certifications {
  padding: 80px 5%;
  background-color: var(--bg-primary);
}

.cert-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 15px 0;
  display: inline-block;
  position: relative;
}

.title-underline {
  margin: 0 auto 20px auto;
  width: 60px;
  height: 4px;
  background-color: var(--accent);
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.5;
}

/* Grid */
.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

/* Card */
.cert-card {
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary);
  border: 2px solid var(--border-color);
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.cert-card:hover {
  transform: translateY(-8px);
  border-color: var(--text-secondary);
  box-shadow: 0 15px 30px -5px rgba(0,0,0,0.15);
}

.cert-img-container {
  height: 200px;
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
}

.cert-screenshot {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.cert-card:hover .cert-screenshot {
  transform: scale(1.05);
}

.cert-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(41, 46, 30, 0.7); /* Pine tree opacity */
  color: #F4EEEB; /* Isabelline */
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  font-size: 1.1rem;
  opacity: 0;
  transition: opacity 0.3s;
}

.cert-card:hover .cert-overlay {
  opacity: 1;
}

.cert-info {
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cert-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.4;
  margin: 0 0 20px 0;
  transition: color 0.3s;
}

.cert-card:hover .cert-name {
  color: var(--text-secondary);
}

.cert-date-wrap {
  display: inline-flex;
}

.cert-date {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--bg-primary);
  background-color: var(--text-primary);
  padding: 6px 12px;
  border-radius: 8px;
}
</style>