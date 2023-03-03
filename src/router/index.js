import { createRouter, createWebHistory } from 'vue-router';
import CoachDetails from '../pages/coaches/CoachDetails.vue';
import CoachList from '../pages/coaches/CoachList.vue';
import CoachRegister from '../pages/coaches/CoachRegister.vue';
import NotFound from '../pages/NotFound.vue';
import {
  default as ContactCoach,
  default as RequestReceived,
} from '../pages/requests/ContactCoach.vue';

const routes = [
  {
    path: '/',
    redirect: '/coaches',
  },
  {
    path: '/coaches',
    component: CoachList,
  },
  {
    path: '/coaches/:id',
    component: CoachDetails,
    children: [
      {
        path: 'contact',
        component: ContactCoach,
      },
    ],
  },
  {
    path: '/register',
    component: CoachRegister,
  },
  {
    path: '/requests',
    component: RequestReceived,
  },
  {
    path: '/:notFound(.*)',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
