<template>
  <div class="post">
    <h1 class="text-4xl font-serif text-center pb-20">
      {{ fields.title }}
    </h1>

    <div
      id="intro mb-12"
      class="flex"
      >
      <div class="flex-1 bg-gray-600">
        <p
          v-for="(data, i) in fields.description && fields.description.content"
          :key="i"
          class="pb-8 leading-8 text-gray-500"
          >
          {{ data.content[0].value }}
        </p>
      </div>
      <div class="flex-1 bg-gray-400">
        <h3>
          Client
        </h3>
      </div>
    </div>

    <div id="images">
      <img
        v-for="(img, i) in fields.images"
        :key="i"
        :src="img.fields.file.url"
        class="pb-8"
        >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  data() {
    return {
      post: null,
    };
  },
  computed: {
    ...mapState({
      posts: st => st.common.posts,
    }),
    ...mapGetters({
      getPostBySlug: 'common/getPostBySlug',
    }),
    fields() {
      return this.post?.fields || {};
    },
  },
  async created() {
    if (!this.posts.length) {
      await this.$store.dispatch('common/getPosts');
    }
    this.post = this.getPostBySlug(this.$route.params.slug);
  },
};
</script>
