import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

import Home from '@/views/Home.vue';
import Post from '@/views/Post.vue';
import Contact from '@/views/Contact.vue';
import About from '@/views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
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

router.beforeEach(async (to, from, next) => {
  if (!store.state.common.posts?.items?.length) {
    Vue.$log.info('Will getPosts');
    await store.dispatch('common/getPosts');
  }
  if (!store.state.common.pages?.items?.length) {
    Vue.$log.info('Will getPages');
    await store.dispatch('common/getPages');
  }
  next();
});

router.afterEach((to) => {
  let entries = [];

  entries.push(store.state.common.posts.items);
  entries.push(store.state.common.pages.items);
  entries = entries.flat();

  const current = entries.find(
    item => item.fields.slug === (to.params.slug || to.name),
  );

  document.title = `Özgür Atmaca${ current?.fields?.title}`;
});

export default router;
