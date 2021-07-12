import Vue from 'vue';
import { fetchEntries } from '@/services/contentful';

/* eslint no-shadow: ["error", { "allow": ["state", "getters"] }] */
// State object
const state = {
  products: [],
};

// Mutations
const mutations = {
  setAppState(state, [prop, value]) {
    Vue.set(state.appState, prop, value);
  },
  setUiState(state, [prop, value]) {
    Vue.set(state.uiState, prop, value);
  },
  setState(state, [prop, value]) {
    Vue.set(state, prop, value);
  },
};

// Actions
const actions = {
  async getProducts({ commit }) {
    commit('setState', ['isLoading', true]);

    try {
      const products = await fetchEntries('product');
      console.log('products', products);

      commit('setState', ['products', products]);
      commit('setState', ['isLoading', false]);

      return products;
    } catch (err) {
      commit('setState', ['isLoading', false]);
      return err;
    }
  },
  async getTemplate({ commit }, payload) {
    commit('setState', ['isLoading', true]);

    try {
      const template = await fetchEntries(payload);
      console.log('template', template);

      // commit('setState', ['products', products]);
      // commit('setState', ['isLoading', false]);

      // return products;
    } catch (err) {
      // commit('setState', ['isLoading', false]);
      // return err;
    }
  },
};

// Getter functions
const getters = {
};

export default {
  namespaced: true,
  state: () => (state),
  getters,
  actions,
  mutations,
};
