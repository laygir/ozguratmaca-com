<template>
  <div id="home">
    <oa-page
      slug="home"
      class="pb-8"
      />
    <oa-posts />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import oaPosts from '@/components/Posts.vue';
import oaPage from '@/components/Page.vue';

export default {
  name: 'Home',
  components: {
    oaPosts,
    oaPage,
  },
  computed: {
    ...mapState({
      pages: st => st.common.pages,
    }),
    ...mapGetters({
      getPageBySlug: 'common/getPageBySlug',
    }),
  },
};
</script>
