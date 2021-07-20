import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from '@/store/index';

import Home from '@/views/Home.vue';
import Post from '@/views/Post.vue';
import Contact from '@/views/Contact.vue';
import About from '@/views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/portfolio/:slug',
    name: 'post',
    component: Post,
    // beforeEnter: async (to, from, next) => {
    //   await this.$store.dispatch('common/getPosts');
    //   store.getters['common/getPostBySlug'](to.params.slug);
    //   next();
    // },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // this.$log.info('savedPosition', savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0, behavior: 'smooth' };
  },
});

export default router;
