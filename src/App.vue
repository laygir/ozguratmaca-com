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

    <div class="container mx-auto p-8 flex flex-col h-full">
      <oa-header class="mb-12" />

      <router-view class="flex-1" />

      <oa-footer class="bg-primary pb-8" />
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
