import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/cadastro-medico',
    name: 'DoctorSignUp',
    redirect: 'cadastro-medico/form-cadastro',
    component: () => import('../views/DoctorSignUp.vue'),
    children: [
      {
        path: 'form-cadastro',
        name: 'DoctorSignupForm',
        component: () => import('../containers/DoctorSignupForm.vue'),
      },
      {
        path: 'form-revisao',
        name: 'DoctorSignupReview',
        component: () => import('../containers/DoctorSignupReview.vue'),
      },
      {
        path: 'cadastro-realizado',
        name: 'DoctorSignupSuccess',
        component: () => import('../containers/DoctorSignupSuccess.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
