import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue'
import welcome from "./modules/welcome";
import disease from "./modules/disease";
// import dashboard from "./modules/dashBoard";


const routes= [
    ...welcome,
    ...disease,

  {
    path: '/',
    redirect: '/tabs/list'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    meta: {
      reload: true,
    },
    children: [
      {
        path: '',
        redirect: '/list'
      },
      {
        path: 'list',
        component: () => import('@/views/List/index.vue'),

      },
      {
        path: 'add_disease',

        component: () => import ('@/views/Disease/index.vue'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
