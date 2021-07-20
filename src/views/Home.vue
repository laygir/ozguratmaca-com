<template>
  <div class="home">
    <oa-page
      slug="home"
      class="pb-24"
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
    // sortedPosts() {
    //   return this.posts?.items
    //     ?.slice()
    //     .sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date)) || [];
    // },

  },
  async mounted() {
    // await this.$store.dispatch('common/getPages');
  },
};
</script>
