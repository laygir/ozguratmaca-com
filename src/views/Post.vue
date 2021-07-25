<template>
  <div class="post">
    <h1 class="text-4xl font-serif sm:text-center pb-20">
      {{ fields.title }}
    </h1>

    <div
      id="intro mb-12"
      class="flex flex-col lg:flex-row"
      >
      <div class="w-full lg:w-3/5 lg:pr-8">
        <p
          v-for="(data, i) in fields.description && fields.description.content"
          :key="i"
          class="pb-8 leading-8 text-gray-500"
          >
          {{ data.content[0].value }}
        </p>
      </div>

      <div class="flex-1 lg:px-8">
        <ul>
          <li
            v-for="(meta, i) in postMeta"
            :key="i"
            class="flex border-b mb-4 items-baseline pb-4"
            >
            <h3 class="font-body-bold min-w-28 text-xs uppercase leading-9 tracking-widest">
              {{ meta.label }}
            </h3>
            <p class="pl-4 leading-7 text-gray-700">
              {{ meta.value }}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div
      v-for="(video, i) in fields.videoUrl"
      id="video"
      :key="i"
      class="pt-12"
      >
      <template v-if="video">
        <div
          :style="`padding:${(fields.videoPadding && fields.videoPadding[i])
            || '56.25%'} 0 0 0;`"
          class="relative"
          >
          <iframe
            :src="`https://player.vimeo.com/video/${videoId(video)}?title=0&byline=0&portrait=0`"
            style="position:absolute;top:0;left:0;width:100%;height:100%;"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            />
        </div>
      </template>
    </div>

    <div
      v-if="fields.images && fields.images.length"
      id="images"
      class="pt-12 flex flex-col items-center"
      >
      <img
        v-for="(img, i) in fields.images"
        :key="i"
        :src="img.fields.file.url"
        class="mb-8 rounded-sm"
        >
    </div>

    <h3 class="text-center pt-20 pb-8">
      Find out more below
    </h3>
    <oa-posts class="" />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import oaPosts from '@/components/Posts.vue';

export default {
  components: {
    oaPosts,
  },
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
    postMeta() {
      const dateOptions = {
        // weekday: 'long', //
        year: 'numeric',
        month: 'long',
        // day: 'numeric',
        // hour: 'numeric',
        // minute: 'numeric',
      };

      const labels = [
        {
          key: 'client',
          label: 'Client',
          value: this.fields.client || '-',
        },
        {
          key: 'date',
          label: 'Project date',
          value: this.fields?.date
            ? new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(this.fields?.date))
            : '-',
        },
        {
          key: 'categories',
          label: 'Category',
          value: this.fields?.categories?.join(' · ') || '-',
        },
      ];

      return labels;
    },
  },
  async created() {
    this.post = this.getPostBySlug(this.$route.params.slug);
  },
  methods: {
    videoId(videoUrl) {
      return videoUrl.slice(videoUrl?.lastIndexOf('/') + 1);
    },
  },
};
</script>
