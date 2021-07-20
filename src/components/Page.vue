<template>
  <div>
    <div
      id="intro mb-12"
      class="flex flex-col lg:flex-row"
      >
      <img
        :src="image"
        class="rounded-full mr-16"
        >
      <!-- :alt="post.fields.title"
        :title="post.fields.title" -->
      <div class="w-full lg:w-3/5">
        <component
          :is="data.nodeType === 'heading-1' ? 'h1' : 'p'"
          v-for="(data, i) in fields.body && fields.body.content"
          :key="i"
          class="pb-8 leading-8 text-gray-500 whitespace-pre-line"
          >
          {{ data.content[0].value }}
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  props: {
    slug: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      page: null,
    };
  },
  computed: {
    ...mapState({
      posts: st => st.common.posts,
    }),
    ...mapGetters({
      getPageBySlug: 'common/getPageBySlug',
    }),
    fields() {
      return this.page?.fields || {};
    },
    image() {
      return this.page?.fields?.image?.fields?.file?.url;
    },
  },
  async created() {
    if (!this.posts.length) {
      await this.$store.dispatch('common/getPages');
    }

    this.page = this.getPageBySlug(this.$route.params.slug || this.slug);
  },
};
</script>
