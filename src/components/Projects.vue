<script setup>
import { ref, computed } from 'vue'
import { FolderGit2, Github } from 'lucide-vue-next'
import dashboardPjblImg from '../assets/Dashboard-pjbl.png'
import lngshootImg from '../assets/Lngshoot-Web.png'
import bakulImg from '../assets/bakul-web-design.jpg'
import noteImg from '../assets/note-web.png'

const activeFilter = ref('Semua')

const projects = ref([
  {
    id: 1,
    title: 'Website Manajemen UMKM',
    description: 'Sistem informasi dengan Admin Dashboard dan fitur CRUD terintegrasi untuk operasional UMKM secara efisien.',
    tech: ['HTML', 'Tailwind CSS', 'PHP Native', 'MySQL', 'phpMyAdmin', 'Git & GitHub'],
    link: 'https://github.com/HablSank/Candy-Vet.git',
    category: 'Favorit',
    image: dashboardPjblImg
  },
  {
    id: 2,
    title: 'Aplikasi Keuangan "Bakul"',
    description: 'Aplikasi pelacak keuangan harian yang dikembangkan di Coding Camp, membantu mengorganisir pemasukan dan pengeluaran.',
    tech: ['React', 'Express.js', 'RESTful API', 'MySQL', 'Git & GitHub'],
    category: 'Terbaru',
    image: bakulImg
  },
  {
    id: 3,
    title: 'Personal Notes App',
    description: 'Aplikasi pencatatan pribadi yang interaktif dengan antarmuka modern yang nyaman digunakan sehari-hari.',
    tech: ['React', 'CSS Native'],
    link: 'https://github.com/Insani09/personal-notes-app.git',
    category: 'Terbaru',
    image: noteImg
  },
  {
    id: 4,
    title: 'Web Fanbase "Lngshot"',
    description: 'Website dedikasi untuk grup K-Pop dengan desain UI/UX yang estetik, animasi halus, dan responsif.',
    tech: ['Vue.js', 'CSS Native'],
    link: 'https://github.com/Insani09/LNGSHOT4SHO.git',
    category: 'Favorit',
    image: lngshootImg
  }
])

const filteredProjects = computed(() => {
  if (activeFilter.value === 'Semua') {
    return projects.value
  }
  return projects.value.filter(project => project.category === activeFilter.value)
})
</script>

<template>
  <section class="projects">
    <div class="projects-container animate-slide-up">
      <div class="section-header">
        <h2 class="section-title">Proyek</h2>
        <div class="title-underline"></div>
      </div>

      <!-- Filters & GitHub Button -->
      <div class="filter-header">
        <div class="filter-tabs">
          <button 
            @click="activeFilter = 'Semua'" 
            :class="['tab-btn', { active: activeFilter === 'Semua' }]"
          >Semua</button>
          <button 
            @click="activeFilter = 'Terbaru'" 
            :class="['tab-btn', { active: activeFilter === 'Terbaru' }]"
          >Terbaru</button>
          <button 
            @click="activeFilter = 'Favorit'" 
            :class="['tab-btn', { active: activeFilter === 'Favorit' }]"
          >Favorit</button>
        </div>
        
        <a href="https://github.com/Insani09" target="_blank" class="github-btn">
          <Github :size="18" />
          My Github
        </a>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        <div v-for="project in filteredProjects" :key="project.id" class="project-card">
          <div class="project-img-placeholder">
            <div class="pattern-overlay" v-if="!project.image"></div>
            <img v-if="project.image" :src="project.image" :alt="project.title" class="project-screenshot" />
            <FolderGit2 v-else :size="64" class="icon" />
          </div>
          
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.description }}</p>
            
            <div class="tech-tags">
              <span v-for="(tech, index) in project.tech" :key="index" class="tech-tag">
                {{ tech }}
              </span>
            </div>

            <div v-if="project.link" class="project-links">
              <a :href="project.link" target="_blank" class="repo-link">
                <Github :size="16" /> Code Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 80px 5%;
  background-color: var(--bg-primary);
}

.projects-container {
  max-width: 1200px;
  margin: 0 auto;
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
}

.title-underline {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background-color: var(--accent);
  border-radius: 2px;
}

/* Filter Header */
.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 20px;
}

.filter-tabs {
  display: flex;
  gap: 8px;
  background-color: var(--bg-secondary);
  padding: 6px;
  border-radius: 50px;
  border: 1px solid var(--border-color);
}

.tab-btn {
  padding: 8px 24px;
  border-radius: 50px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s;
}

.tab-btn.active {
  background-color: var(--text-primary);
  color: var(--bg-primary);
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
}

.tab-btn:hover:not(.active) {
  color: var(--text-primary);
}

.github-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  background-color: var(--text-secondary);
  color: var(--bg-primary);
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  transition: all 0.3s;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
}

.github-btn:hover {
  background-color: var(--text-primary);
  transform: translateY(-2px);
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
}

.project-card {
  background-color: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
  border-color: var(--text-secondary);
}

.project-img-placeholder {
  height: 200px;
  background-color: var(--bg-secondary);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-bottom: 1px solid var(--border-color);
}

.pattern-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.1;
  background-image: radial-gradient(var(--text-secondary) 1px, transparent 1px);
  background-size: 16px 16px;
}

.project-screenshot {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  z-index: 1;
}

.project-card:hover .project-screenshot {
  transform: scale(1.05);
}

.project-img-placeholder .icon {
  color: var(--accent);
  transition: all 0.5s ease;
  z-index: 1;
}

.project-card:hover .project-img-placeholder .icon {
  transform: scale(1.1);
  color: var(--text-primary);
}

.project-content {
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 12px 0;
  transition: color 0.3s;
}

.project-card:hover .project-title {
  color: var(--text-secondary);
}

.project-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0 0 24px 0;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tech-tag {
  background-color: rgba(122, 107, 94, 0.1);
  color: var(--text-primary);
  border: 1px solid rgba(122, 107, 94, 0.2);
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 700;
}

.project-links {
  margin-top: auto;
  display: flex;
}

.repo-link {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
  background-color: var(--bg-secondary);
  padding: 8px 16px;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  transition: all 0.3s;
}

.repo-link:hover {
  background-color: var(--text-primary);
  color: var(--bg-primary);
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .filter-header {
    justify-content: center;
  }
}
</style>