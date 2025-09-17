import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  { path: '/', name: 'Home', component: () => import('../views/HomeView.vue') },
  { path: '/influencers', name: 'Influencers', component: () => import('../views/InfluencersView.vue') },
  { path: '/influencer/:id', name: 'InfluencerDetail', component: () => import('../views/InfluencerDetail.vue'), props: true },
  { path: '/blogs', name: 'Blogs', component: () => import('../views/BlogsView.vue') },
  { path: '/blog/:id', name: 'BlogDetail', component: () => import('../views/BlogDetail.vue'), props: true },
  { path: '/login', name: 'Login', component: () => import('../views/LoginView.vue') },
  { path: '/signup', name: 'Signup', component: () => import('../views/SignupView.vue') },
  { path: '/profile', name: 'Profile', component: () => import('../views/ProfileView.vue') },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
