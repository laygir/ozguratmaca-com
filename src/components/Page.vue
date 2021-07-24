<template>
  <div>
    <div
      id="intro mb-12"
      class="flex flex-col lg:flex-row"
      >
      <img
        :src="image"
        class="rounded-full mr-16 self-start w-36 sm:w-48 md:w-64"
        >
      <!-- :alt="post.fields.title"
        :title="post.fields.title" -->
      <div class="md:w-4/5 mt-12 lg:mt-0">
        <component
          :is="getComponentTag(data)"
          v-for="(data, i) in fields.body && fields.body.content"
          :key="i"
          :class="getComponentClass(data)"
          >
          <template v-for="(value, n) in data.content">
            <template
              v-if="value.nodeType === 'text'"
              :class="getComponentClass(value)"
              >
              {{ value.value }}
            </template>

            <template v-else-if="value.nodeType === 'hyperlink'">
              <!-- <router-link
                v-slot="{ href, navigate }"
                :key="n"
                :to="value.data.uri"
                custom
                > -->
              <a
                :key="n"
                :href="value.data.uri"
                :class="getComponentClass(value)"
                @click="navigate"
                >
                {{ value.content[0].value }}
              </a>
              <!-- </router-link> -->
            </template>

            <template v-else>
              {{ data.content }}
            </template>
          </template>
        </component>
      </div>
    </div>

    <div
      v-if="videoId"
      id="video"
      class="pt-24 pb-8"
      >
      <h3 class="text-center pb-8">
        Quick introduction
      </h3>
      <div :style="`padding:${fields.videoPadding} 0 0 0;position:relative;`">
        <iframe
          :src="`https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0`"
          style="position:absolute;top:0;left:0;width:100%;height:100%;"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          />
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
    videoId() {
      return this.fields?.videoUrl?.slice(this.fields?.videoUrl?.lastIndexOf('/') + 1);
    },
  },
  async created() {
    if (!this.posts.length) {
      await this.$store.dispatch('common/getPages');
    }

    this.page = this.getPageBySlug(this.$route.params.slug || this.slug);
  },
  methods: {
    getComponentTag(data) {
      // console.log('getComponentTag', data);
      switch (data.nodeType) {
        case 'heading-1':
          return 'h2';
        case 'paragraph':
          return 'p';
        case 'hyperlink':
          return 'a';
        default:
          return null;
      }
    },
    getComponentClass(data) {
      // console.log('getComponentClass', data.nodeType);
      switch (data.nodeType) {
        case 'heading-1':
          return 'leading-12 pb-8 text-gray-700 whitespace-pre-line';
        case 'hyperlink':
            return 'border-b-2 hover:border-primary';
        case 'paragraph':
            return 'pb-5 text-gray-700 leading-7';
        default:
          return null;
      }
    },
  },
};
</script>
