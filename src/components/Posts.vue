<template>
  <div id="posts">
    <ul class="flex flex-wrap items-center text-sm justify-center font-body-bold pb-12">
      <li
        v-for="(f, i) in filters"
        :key="i"
        class="inline-block mt-2 px-5 mx-2 bg-gray-200 hover:bg-primary cursor-pointer"
        :class="filter === f.filter ? 'bg-primary' : null"
        @click="(filter = f.filter), filterHandler()"
        >
        <span v-if="filter === f.filter">
          ⇾
        </span>

        {{ f.label }}
      </li>
    </ul>

    <div class="isotope pb-4">
      <oa-post-preview
        v-for="(post, i) in sortedPosts"
        :key="i"
        :post="post"
        class="isotope-item pb-16"
        :index="i"
        :class="postWidth[i % 3]"
        />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import oaPostPreview from '@/components/PostPreview.vue';
import Isotope from 'isotope-layout';

export default {
  name: 'Home',
  components: {
    oaPostPreview,
  },
  props: {
  },
  data() {
    return {
      isotope: null,
      filters: [
        {
          filter: '*',
          label: 'All',
        },
        {
          filter: '.animation',
          label: 'Animation',
        },
        {
          filter: '.direction',
          label: 'Direction',
        },
        {
          filter: '.interactionDesign',
          label: 'Interaction Design',
        },
        {
          filter: '.uiUxDesign',
          label: 'UI / UX Design',
        },
      ],
      filter: '*',
    };
  },
  computed: {
    ...mapState({
      posts: st => st.common.posts,
    }),
    sortedPosts() {
      return (
        this.posts?.items
          ?.slice()
          .sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date)) || []
      );
    },
    isWindowLoaded() {
      return performance.getEntriesByType('navigation').every(e => e.loadEventEnd);
    },
    postWidth() {
      return [
        'w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5',
        'w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-2/5',
        'w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5',
      ];
    },
  },
  async mounted() {
    this.$log.info('mounted: Posts');

    await this.$store.dispatch('common/getPosts');

    // window.onload = (event) => {
    //   this.$log.info('page is fully loaded', event);
    // };

    window.addEventListener('load', () => {
      this.$log.info('LOADED');
      this.initIsotope();
    });

    // window.addEventListener('load', this.initIsotope);

    if (this.isWindowLoaded) {
      this.$log.info('init via isWindowLoaded');
      this.initIsotope();
      this.isotope.layout();
    }
  },
  destroyed() {
    window.removeEventListener('load', this.initIsotope);
  },
  methods: {
    initIsotope() {
      this.$log.info('initIsotope');

      this.isotope = new Isotope('.isotope', {
        itemSelector: '.isotope-item',
        percentPosition: true,
        masonry: {
          columnWidth: 0,
        },
      });

      setTimeout(() => {
        this.isotope.layout();
        this.$log.info('Did layout');
      }, 1000);

      this.$log.info('iso', this.isotope);
    },
    filterHandler() {
      this.isotope.arrange({ filter: this.filter });
    },
  },
};
</script>
