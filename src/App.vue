<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <main class="app-shell">
    <section class="hero-card">
      <div class="logo-row">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
      </div>
      <h1>Polished Vue Starter</h1>
      <p class="subtitle">
        A cleaner foundation with modern spacing, color, and typography.
      </p>
      <HelloWorld msg="Make it yours" />
    </section>
  </main>
</template>

<style scoped>
.app-shell {
  width: min(920px, 100%);
  margin: 0 auto;
}

.hero-card {
  border: 1px solid #ffffff1f;
  border-radius: 24px;
  padding: clamp(1.5rem, 3vw, 2.5rem);
  background: linear-gradient(165deg, #1b1f3b 0%, #141827 100%);
  box-shadow: 0 24px 60px #0000003d;
}

.logo-row {
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
}

.logo {
  height: 4rem;
  width: 4rem;
  padding: 0.75rem;
  border-radius: 14px;
  background: #ffffff14;
  border: 1px solid #ffffff1f;
  transition: transform 200ms ease, filter 200ms ease;
}

.logo:hover {
  transform: translateY(-2px);
  filter: drop-shadow(0 10px 18px #6f79ff4d);
}

.logo.vue:hover {
  filter: drop-shadow(0 10px 18px #48c78e5c);
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 4.5vw, 2.8rem);
  line-height: 1.1;
}

.subtitle {
  margin: 0.75rem auto 1.5rem;
  max-width: 40ch;
  color: #c6c9e3;
}
</style>
