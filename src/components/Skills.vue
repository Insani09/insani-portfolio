<script setup>
</script>

<template>
  <section class="skills">
    <div class="skills-container animate-slide-up">
      <div class="section-header">
        <h2 class="section-title">Keahlian</h2>
        <div class="title-underline"></div>
      </div>

      <div class="skills-grid">
        <!-- Bahasa -->
        <div class="skill-card">
          <h3 class="skill-group-title">
            <span class="indicator"></span> Bahasa
          </h3>
          <div class="tags">
            <div class="tag">PHP Native</div>
            <div class="tag">JavaScript</div>
          </div>
        </div>

        <!-- Framework -->
        <div class="skill-card" style="animation-delay: 0.1s">
          <h3 class="skill-group-title">
            <span class="indicator"></span> Framework
          </h3>
          <div class="tags">
            <div class="tag">React</div>
            <div class="tag">Vue.js</div>
            <div class="tag">Laravel</div>
          </div>
        </div>

        <!-- Database & Tools -->
        <div class="skill-card" style="animation-delay: 0.2s">
          <h3 class="skill-group-title">
            <span class="indicator"></span> Database & Tools
          </h3>
          <div class="tags">
            <div class="tag">MySQL</div>
            <div class="tag">Laragon</div>
            <div class="tag">Git & GitHub</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: 80px 5%;
  background-color: var(--bg-secondary);
}

.skills-container {
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.skill-card {
  background-color: var(--bg-primary);
  padding: 30px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}

.skill-group-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 24px 0;
}

.indicator {
  width: 30px;
  height: 4px;
  background-color: var(--text-primary);
  border-radius: 2px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tag {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  padding: 10px 20px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s;
  cursor: default;
}

.tag:hover {
  background-color: var(--text-primary);
  color: var(--bg-primary);
  transform: scale(1.05);
}
</style>