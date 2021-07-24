<template>
  <router-link
    v-slot="{ href, navigate, isActive }"
    :to="{ name: 'post', params: { slug: post.fields.slug } }"
    :class="post.metadata && post.metadata.tags.map((e) => e.sys.id).join(' ')"
    class="px-4"
    custom
    >
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
          class="rounded-sm w-full pb-2"
          >
        <h2
          class="font-body-bold text-xs bg-gray-300 inline p-1
        group-hover:bg-primary rounded-sm px-2"
          >
          {{ post.fields.title }}
        </h2>

        <ul class="pt-2">
          <li
            v-for="(category, i) in post.fields.categories"
            :key="i"
            class="inline-block text-xs"
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
