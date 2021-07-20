<template>
  <div class="home">
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

    <!-- {{ posts.items[0].fields.date }} -->
    <div class="isotope pb-4">
      <!-- <div class="isotope-sizer" /> -->
      <oa-post-preview
        v-for="(post, i) in sortedPosts"
        :key="i"
        :post="post"
        class="isotope-item px-4 pb-16"
        :index="i"
        :class="
          i % 2 === 0 ? 'md:w-1/2 lg:w-2/3 xl:w-2/4' : 'md:w-1/2 lg:w-1/3 xl:w-1/4'
        "
        />
        <!-- :style="
          i % 3 === 0 ? 'max-width: 25%;' : 'max-width: 50%;'
        " -->
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
    // posts: {
    //   type: Array,
    //   required: false,
    //   default: () => [],
    // },
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

      this.$log.info('iso', this.isotope);
    },
    filterHandler() {
      this.isotope.arrange({ filter: this.filter });
    },
  },
};
</script>

<style lang="postcss">

</style>
