import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';   // Home page for NPC creation or overview
import Map from '../views/Map.vue';     // Map where NPCs interact
import Report from '../views/Report.vue'; // Report page showing NPC activities
import Login from '../views/Login.vue'; // Import the Login component

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login, // Set the login page as the default route
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,  // The home or NPC creation page
  },
  {
    path: '/map',
    name: 'Map',
    component: Map,  // The map view where users can see NPCs interacting
  },
  {
    path: '/report',
    name: 'Report',
    component: Report,  // The daily report page showing what NPCs did
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
