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

    <div class="pb-4 portfolio flex">
      <div class="gutter-sizer" />

      <oa-post-preview
        v-for="(post, i) in sortedPosts"
        :key="i"
        :post="post"
        class="portfolio-item p-4"
        :class="i % 3 === 0
          ? 'w-full md:w-1/2 lg:w-2/3 xl:w-2/4'
          : 'w-full md:w-1/2 lg:w-1/3 xl:w-1/4'"
        :index="i"
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
      return this.posts?.items
        ?.slice()
        .sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date));
    },
  },
  async mounted() {
    await this.$store.dispatch('common/getPosts');

    window.addEventListener('load', () => {
      // console.log('LOADED');

      // const grid = document.querySelector('.grid');

      this.isotope = new Isotope('.portfolio', {
        // options...
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
        // percentPosition: true,
        fitRows: {
          gutter: '.gutter-sizer',
        },
        // masonry: {
        //   columnWidth: 250,
        // },
      });

      // console.log('iso', this.isotope);
    });
  },
  methods: {
    filterHandler() {
      this.isotope.arrange({ filter: this.filter });
      // console.log('iso', this.isotope, this.isotope.options.filter, this.filter);
    },
  },
};
</script>

<style lang="postcss">
.portfolio-item {
  /* width: 25%; */
}
.wide {
  /* width: 50% !important; */
}
.gutter-sizer { width: 0px; }

</style>
