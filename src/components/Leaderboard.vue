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
        <!-- Dummy data for now -->
        <tr>
          <td class="border px-4 py-2">Alice</td>
          <td class="border px-4 py-2">10</td>
          <td class="border px-4 py-2">2024-05-10</td>
        </tr>
        <!-- More rows will be added here -->
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Leaderboard',
  // Data and methods for leaderboard will be added here
};
</script>

<style scoped>
.leaderboard-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}
</style>
