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
    <div v-if="selectedAnswer" class="confirmation">
      <p>You selected: "{{ selectedAnswer }}"</p>
      <button class="submit-answer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              @click="submitAnswer">
        Submit Answer
      </button>
    </div>
    <div v-else>
      <p>Please select an answer.</p>
    </div>
    <div v-if="showConfetti" class="confetti"></div>
    <p class="score">Score: {{ score }}/{{ triviaQuestions.length }}</p>
  </div>
</template>

<script>
import triviaQuestions from '../data/triviaQuestions.json';
import confetti from 'canvas-confetti';

export default {
  name: 'TriviaQuestion',
  data() {
    return {
      questionData: triviaQuestions[0], // Start with the first question
      selectedAnswer: null,
      currentQuestionIndex: 0,
      showConfetti: false,
      score: 0 // Initialize score
    };
  },
  methods: {
    selectAnswer(option) {
      this.selectedAnswer = option;
    },
    submitAnswer() {
      if (this.selectedAnswer === this.questionData.answer) {
        // Correct answer logic
        this.showConfetti = true;
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        setTimeout(() => this.showConfetti = false, 3000); // Hide confetti after 3 seconds
        this.score++; // Increment score for correct answer
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
.confirmation {
  margin-top: 20px;
}
.confetti {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.score {
  margin-top: 20px;
  font-size: 1.25rem;
  font-weight: bold;
}
</style>
