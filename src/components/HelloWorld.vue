<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <section class="panel">
    <h2>{{ msg }}</h2>
    <p class="intro">
      Use this starter as a base and keep refining it as your app grows.
    </p>

    <div class="counter-row">
      <button type="button" @click="count++">Clicked {{ count }} times</button>
      <span class="hint">Reactivity check</span>
    </div>

    <p class="edit-tip">
      Edit <code>components/HelloWorld.vue</code> to test HMR.
    </p>

    <div class="link-row">
      <a
        href="https://vuejs.org/guide/quick-start.html#local"
        target="_blank"
        rel="noreferrer"
      >
        Vue Quick Start
      </a>
      <a
        href="https://github.com/vuejs/language-tools"
        target="_blank"
        rel="noreferrer"
      >
        Volar Extension
      </a>
    </div>
  </section>
</template>

<style scoped>
.panel {
  border: 1px solid #ffffff1f;
  border-radius: 18px;
  background: #0e1222a8;
  padding: 1.25rem;
  text-align: left;
}

h2 {
  margin: 0;
  font-size: 1.35rem;
}

.intro {
  margin: 0.5rem 0 1rem;
  color: #cad2ff;
}

.counter-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
}

button {
  border: 1px solid #ffffff2e;
  border-radius: 12px;
  padding: 0.65rem 0.95rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #646cff 0%, #45b8ff 100%);
  cursor: pointer;
  transition: transform 150ms ease, box-shadow 150ms ease;
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 20px #5d72ff4d;
}

.hint {
  font-size: 0.9rem;
  color: #aab6ff;
}

.edit-tip {
  color: #d2d7f6;
}

code {
  border-radius: 6px;
  padding: 0.1rem 0.35rem;
  background-color: #ffffff17;
}

.link-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.link-row a {
  border: 1px solid #ffffff2e;
  border-radius: 999px;
  padding: 0.4rem 0.75rem;
  color: #e6e8ff;
  font-size: 0.92rem;
}

.link-row a:hover {
  border-color: #86a2ff;
  color: #ffffff;
}
</style>
