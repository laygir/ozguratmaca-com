<template>
  <div
    id="app"
    class="h-screen"
    >
    <div
      v-if="false"
      id="frame"
      :class="!isResume && 'border-32' "
      class="right-0 left-0 top-0 bottom-0 border-white h-screen
      fixed hidden md:block pointer-events-none z-10"
      />
    <div class="mx-auto py-8 flex flex-col w-full h-full items-center">
      <oa-header
        v-if="hasHeader"
        class="mb-12 max-w-7xl w-full px-10 md:px-16 lg:px-16"
        />

      <transition
        name="fade"
        mode="out-in"
        >
        <router-view
          :key="$route.fullPath"
          class="flex-1 w-full max-w-7xl px-10 md:px-16 lg:px-16"
          />
      </transition>

      <oa-footer
        v-if="hasFooter"
        class="bg-white w-full
      pb-8 pt-24 mt-24 px-10 md:px-16 lg:px-16"
        />
    </div>
  </div>
</template>

<script>
import oaHeader from '@/components/Header.vue';
import oaFooter from '@/components/Footer.vue';

export default {
  components: {
    oaHeader,
    oaFooter,
  },
  computed: {
    hasHeader() {
      return this.$route.meta.hasHeader ?? true;
    },
    hasFooter() {
      return this.$route.meta.hasFooter ?? true;
    },
    isResume() {
      return this.$route.name === 'resume';
    },
    backgroundClass() {
      return this.$route.meta.backgroundClass ?? 'bg-gray-100';
    },
  },
  created() {
    // console.log('app created')
  },
};
</script>

<style lang="postcss">

#app {
  @apply font-body;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 700ms;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
