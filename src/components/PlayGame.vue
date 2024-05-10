<template>
  <div class="play-game-container">
    <h1 class="text-4xl font-bold mb-4">Let's Play Trivia!</h1>
    <p class="text-lg mb-4">Enter your name to start the game.</p>
    <input type="text" placeholder="Enter your name" class="border-2 border-blue-500 p-2 mb-4" required>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Start Game
    </button>
  </div>
</template>

<script>
export default {
  name: 'PlayGame',
  data() {
    return {
      // Data properties will go here
    };
  },
  methods: {
    // Vue methods will go here
  }
};
</script>

<style scoped>
.play-game-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}
</style>
