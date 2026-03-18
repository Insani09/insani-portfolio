<script setup>
import { Briefcase, GraduationCap } from 'lucide-vue-next'
</script>

<template>
  <section class="experience">
    <div class="experience-container animate-slide-up">
      
      <!-- Pengalaman Section -->
      <div class="section-block">
        <div class="section-header">
          <h2 class="section-title">
            <Briefcase :size="32" class="icon-accent" />
            Pengalaman
          </h2>
          <div class="title-underline"></div>
        </div>

        <div class="timeline">
          <!-- Item 1 -->
          <div class="timeline-item">
            <div class="timeline-marker">2026</div>
            <div class="timeline-content">
              <h3 class="role">Penerima Beasiswa Coding Camp</h3>
              <h4 class="company">DBS Foundation & Dicoding</h4>
              <p class="desc">
                Berfokus pada pengembangan jalur pembelajaran Full-Stack Web Developer dan mengasah logika pemrograman.
              </p>
            </div>
          </div>

          <!-- Item 2 -->
          <div class="timeline-item">
            <div class="timeline-marker">2025</div>
            <div class="timeline-content">
              <h3 class="role">Backend Developer (PJBL)</h3>
              <h4 class="company">Proyek Manajemen UMKM</h4>
              <p class="desc">
                Membangun logika server-side menggunakan PHP Native dan MySQL. Merancang Admin Dashboard dengan sistem CRUD terintegrasi, serta mengelola version control menggunakan Git & GitHub.
              </p>
            </div>
          </div>

          <!-- Item 3 -->
          <div class="timeline-item">
            <div class="timeline-marker">2025</div>
            <div class="timeline-content">
              <h3 class="role">Asisten Guru Informatika</h3>
              <h4 class="company">Program Magang P5 - SMP Negeri 43 Surabaya</h4>
              <p class="desc">
                Bertugas mendampingi dan membantu proses belajar mengajar siswa selama program magang berlangsung.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Pendidikan Section -->
      <div class="section-block" style="animation-delay: 0.2s">
        <div class="section-header">
          <h2 class="section-title">
            <GraduationCap :size="32" class="icon-accent" />
            Pendidikan
          </h2>
          <div class="title-underline"></div>
        </div>

        <div class="education-card">
          <div class="edu-icon-wrapper overflow-hidden">
            <img src="../assets/logo-smkn1.png" alt="SMK Negeri 1 Surabaya" class="w-full h-full object-cover" style="width: 100%; height: 100%; object-fit: cover; border-radius: 24px;" />
          </div>
          <div class="edu-info">
            <h3 class="school">SMK Negeri 1 Surabaya</h3>
            <p class="major">
              <span class="dot"></span>
              Rekayasa Perangkat Lunak
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.experience {
  padding: 80px 5%;
  background-color: var(--bg-secondary);
}

.experience-container {
  max-width: 900px;
  margin: 0 auto;
}

.section-block {
  margin-bottom: 80px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-accent {
  color: var(--text-secondary);
  transition: color 0.3s;
}

.section-block:hover .icon-accent {
  color: var(--text-primary);
}

.title-underline {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background-color: var(--accent);
  border-radius: 2px;
}

/* Timeline */
.timeline {
  position: relative;
  padding-left: 20px;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 10px;
  bottom: 0;
  left: 45px;
  width: 4px;
  background-color: var(--border-color);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
  gap: 30px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-marker {
  width: 56px;
  height: 56px;
  min-width: 56px;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 4px solid var(--text-primary);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  font-size: 0.85rem;
  z-index: 2;
  transition: transform 0.3s, background-color 0.3s;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.timeline-item:hover .timeline-marker {
  transform: scale(1.15);
  background-color: var(--text-primary);
  color: var(--bg-primary);
}

.timeline-content {
  background-color: var(--bg-primary);
  padding: 30px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  width: 100%;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  transition: all 0.3s;
}

.timeline-item:hover .timeline-content {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  border-color: var(--text-secondary);
}

.role {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 4px 0;
  transition: color 0.3s;
}

.company {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin: 0 0 16px 0;
}

.desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary);
  opacity: 0.9;
  margin: 0;
}

/* Education */
.education-card {
  display: flex;
  align-items: center;
  gap: 30px;
  background-color: var(--bg-primary);
  padding: 40px;
  border-radius: 30px;
  border: 1px solid var(--border-color);
  transition: all 0.3s;
}

.education-card:hover {
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
  transform: translateY(-5px);
}

.edu-icon-wrapper {
  width: 120px;
  height: 120px;
  background-color: var(--bg-secondary);
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.education-card:hover .edu-icon-wrapper {
  transform: scale(1.05);
}

.school {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 10px 0;
}

.major {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
}

.dot {
  width: 8px;
  height: 8px;
  background-color: var(--text-primary);
  border-radius: 50%;
}

@media (max-width: 640px) {
  .education-card {
    flex-direction: column;
    text-align: center;
    padding: 30px 20px;
  }
  
  .major {
    justify-content: center;
  }
  
  .timeline::before {
    left: 28px;
  }
  
  .timeline-marker {
    width: 48px;
    height: 48px;
    min-width: 48px;
  }
  
  .timeline-item {
    gap: 15px;
    padding-left: 0;
  }
}
</style>