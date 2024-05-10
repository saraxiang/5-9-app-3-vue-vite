<script setup>
// Removed import of HelloWorld as it's not needed for the trivia game
</script>

<template>
  <div class="container mx-auto">
    <!-- Navigation bar with Play Game and Leaderboard links -->
    <nav class="bg-blue-500 p-4 text-white">
      <ul class="flex justify-between">
        <li><router-link to="/play" class="hover:text-blue-300">Play Game</router-link></li>
        <li><router-link to="/leaderboard" class="hover:text-blue-300">Leaderboard</router-link></li>
      </ul>
    </nav>
    <!-- Main page content -->
    <main class="mt-8">
      <section id="play" class="text-center">
        <h1 class="text-4xl font-bold mb-4">Welcome to the Trivia Game!</h1>
        <p class="text-xl mb-4">Enter your name and start playing!</p>
        <input type="text" placeholder="Your name" class="border-2 border-blue-500 p-2 mb-4" required>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Start Game
        </button>
      </section>
    </main>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
}
/* Tailwind utility classes are used for styling */
</style>
