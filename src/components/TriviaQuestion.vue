<template>
  <div class="trivia-question-container">
    <h2 class="text-2xl font-bold mb-4">{{ questionData.question }}</h2>
    <div class="answers grid grid-cols-2 gap-4">
      <button v-for="(option, index) in questionData.options"
              :key="index"
              class="answer bg-blue-200 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
              @click="selectAnswer(option)">
        {{ option }}
      </button>
    </div>
    <button class="submit-answer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            @click="submitAnswer">
      Submit Answer
    </button>
  </div>
</template>

<script>
import triviaQuestions from '../data/triviaQuestions.json';

export default {
  name: 'TriviaQuestion',
  data() {
    return {
      questionData: triviaQuestions[0], // Start with the first question
      selectedAnswer: null,
      currentQuestionIndex: 0
    };
  },
  methods: {
    selectAnswer(option) {
      this.selectedAnswer = option;
    },
    submitAnswer() {
      if (this.selectedAnswer === this.questionData.answer) {
        // Correct answer logic
        this.$emit('correct-answer');
      } else {
        // Incorrect answer logic
        this.$emit('incorrect-answer');
      }
      // Move to the next question
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex < triviaQuestions.length) {
        this.questionData = triviaQuestions[this.currentQuestionIndex];
        this.selectedAnswer = null;
      } else {
        // End of game logic
        this.$emit('end-of-game');
      }
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
.answer {
  cursor: pointer;
}
</style>
