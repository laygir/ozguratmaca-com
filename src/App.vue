<template>
  <div
    id="app"
    class="h-screen"
    >
    <div
      v-if="true"
      id="frame"
      class="border-32 right-0 left-0 top-0 bottom-0 border-white h-screen
      fixed hidden md:block pointer-events-none z-10"
      />

    <div class="mx-auto py-8 flex flex-col w-full h-full items-center">
      <oa-header class="mb-12 max-w-7xl w-full px-10 md:px-16 lg:px-16" />

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
  created() {
    // console.log('app created')
    // document.title = 'hey';
  },
};
</script>

<style lang="postcss">
body {
  @apply bg-gray-100;
}

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
