import Vue from 'vue';
import ContactService from '@/services/ContactService';
import { fetchEntries } from '@/services/contentful';

/* eslint no-shadow: ["error", { "allow": ["state", "getters"] }] */
// State object
const state = {
  views: {},
  posts: [],
  pages: [],
};

// Mutations
const mutations = {
  setAppState(state, [prop, value]) {
    Vue.set(state.appState, prop, value);
  },
  setState(state, [prop, value]) {
    Vue.set(state, prop, value);
  },
  setViewTemplate(state, [prop, value]) {
    Vue.set(state.views, prop, value);
  },
  pushState(state, [prop, value]) {
    state[prop].push(value);
  },
};

// Actions
const actions = {
  async getPosts({ commit }) {
    commit('setState', ['isLoading', true]);

    try {
      const posts = await fetchEntries('post');
      commit('setState', ['posts', posts]);
      commit('setState', ['isLoading', false]);

      return posts;
    } catch (err) {
      commit('setState', ['isLoading', false]);
      return err;
    }
  },
  async getPages({ commit }) {
    commit('setState', ['isLoading', true]);

    try {
      const pages = await fetchEntries('page');
      commit('setState', ['pages', pages]);
      commit('setState', ['isLoading', false]);

      return pages;
    } catch (err) {
      commit('setState', ['isLoading', false]);
      return err;
    }
  },
  async getTemplate({ commit }, payload) {
    commit('setState', ['isLoading', true]);

    try {
      const templates = await fetchEntries('viewTemplate');
      const view = templates.items.find(item => item.fields.slug === payload);
      // this.$log.info('view', view);

      commit('setViewTemplate', [payload, view]);
      // commit('setState', ['isLoading', false]);

      // return products;
    } catch (err) {
      // commit('setState', ['isLoading', false]);
      // return err;
    }
  },
  async sendEmail(context, payload) {
    Vue.$log.info('Actions: sendEmail', payload);
    const response = await ContactService.sendEmail(payload);
    return Promise.resolve(response);
  },
};

// Getter functions
const getters = {
  getPostBySlug: st => (slug) => {
    if (!slug) {
      return false;
    }

    Vue.$log.info('Vuex: slug', slug, st);

    const post = st.posts?.items?.find(rec => rec.fields.slug === slug);

    // Vue.$log.info('Vuex: post', post);

    return post;
  },
  getPageBySlug: st => (slug) => {
    if (!slug) {
      return false;
    }

    Vue.$log.info('Vuex: slug', slug, st);

    const post = st.pages?.items?.find(rec => rec.fields.slug === slug);

    // Vue.$log.info('Vuex: post', post);

    return post;
  },
};

export default {
  namespaced: true,
  state: () => (state),
  getters,
  actions,
  mutations,
};
