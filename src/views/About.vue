<template>
  <div class="about">
    <oa-page
      v-if="true"
      slug="about"
      class="pb-8"
      />
  </div>
</template>

<script>
import oaPage from '@/components/Page.vue';

export default {
  components: {
    oaPage,
  },
};
</script>
