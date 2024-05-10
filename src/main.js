import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

// Define route components
// These can be imported from other files
const PlayGame = { template: '<div>Play Game</div>' }
const Leaderboard = { template: '<div>Leaderboard</div>' }

// Define routes
const routes = [
  { path: '/', redirect: '/play' },
  { path: '/play', component: PlayGame },
  { path: '/leaderboard', component: Leaderboard }
]

// Create the router instance and pass the `routes` option
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

const app = createApp(App)

// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')
