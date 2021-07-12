<template>
  <router-link
    v-slot="{ href, navigate, isActive }"
    :to="{ name: 'post', params: { slug: post.fields.slug } }"
    custom
    :class="post.metadata.tags.map(e => e.sys.id).join(' ')"
    >
    <!-- {{ post.fields.date }} -->
    <a
      :active="isActive"
      :href="href"
      @click="navigate"
      >
      <div class="group">
        <img
          :src="post.fields.coverImage.fields.file.url"
          :alt="post.fields.title"
          :title="post.fields.title"
          >
        <h2
          class="font-body-bold text-xs bg-gray-300 inline-block p-1
        group-hover:bg-primary mt-6"
          >
          {{ post.fields.title }}
        </h2>

        <ul class="pt-2">
          <li
            v-for="(category, i) in post.fields.categories"
            :key="i"
            class="inline-block text-xs pt-1"
            >
            <span>
              {{ category }}
            </span>
            <span
              v-if="i !== post.fields.categories.length - 1"
              class="px-2"
              >
              ·
            </span>
          </li>
        </ul>
        <!-- {{ post.fields.description.content }} -->
        <!-- {{ post.fields.client }} -->
        <!-- {{ post.fields.date }} -->
        <!-- {{ post.fields.slug }} -->
        <!-- {{ post.fields.vimeoUrl }} -->
        <!-- {{ post.metadata.tags[0].sys.id }} -->
        <!-- {{ post.metadata.tags }} -->
      </div>
    </a>
  </router-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    index: {
      type: [String, Number],
      required: false,
      default: null,
    },
  },
};
</script>

<style></style>
