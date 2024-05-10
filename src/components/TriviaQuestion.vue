<template>
  <div class="trivia-question-container">
    <h2 class="text-2xl font-bold mb-4">Trivia Question</h2>
    <div class="question text-lg mb-4">
      <!-- Trivia question will be displayed here -->
    </div>
    <div class="answers grid grid-cols-2 gap-4">
      <!-- Answer options will be displayed here as buttons -->
    </div>
    <button class="submit-answer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
      Submit Answer
    </button>
  </div>
</template>

<script>
export default {
  name: 'TriviaQuestion',
  props: {
    questionData: Object
  },
  data() {
    return {
      selectedAnswer: null,
    };
  },
  methods: {
    submitAnswer() {
      // Logic to submit the selected answer will go here
    }
  }
};
</script>

<style scoped>
.trivia-question-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}
</style>
