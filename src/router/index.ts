import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LineView from '../views/LineView.vue';
import CompanyList from '@/components/CompanyList.vue';
import StationList from '@/components/StationList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/line/:id',
      name: 'line',
      component: LineView,
    },
    {
      path: '/company',
      name: 'company',
      component: CompanyList,
    },
    {
      path: '/station',
      name: 'station',
      component: StationList,
    }
  ],
})

export default router
