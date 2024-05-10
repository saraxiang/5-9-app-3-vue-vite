<template>
  <div class="leaderboard-container">
    <h1 class="text-4xl font-bold mb-4">Leaderboard</h1>
    <table class="min-w-full table-auto">
      <thead class="bg-gray-200">
        <tr>
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">Score</th>
          <th class="px-4 py-2">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, index) in leaderboardData" :key="index">
          <td class="border px-4 py-2">{{ entry.name }}</td>
          <td class="border px-4 py-2">{{ entry.score }}</td>
          <td class="border px-4 py-2">{{ entry.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Leaderboard',
  data() {
    return {
      // Dummy data for leaderboard
      leaderboardData: [
        { name: 'Alice', score: 10, date: '2024-05-10' },
        { name: 'Bob', score: 8, date: '2024-05-09' },
        { name: 'Charlie', score: 6, date: '2024-05-08' },
        // More dummy entries can be added here
      ],
    };
  },
  // Methods for leaderboard functionality will be added here
};
</script>

<style scoped>
.leaderboard-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}
</style>
