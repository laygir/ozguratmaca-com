<template>
  <header
    class="flex sm:flex-row lg:flex-row border-b pt-8 pb-12 sm:pb-20"
    >
    <h1
      class="text-2xl tracking-tight flex-1 items-center justify-center"
      >
      <router-link
        v-slot="{ href, navigate, isActive }"
        to="/"
        custom
        >
        <a
          :active="isActive"
          :href="href"
          @click="navigate"
          >
          <span class="font-body bg-primary">
            Özgür
          </span>
          <span class="font-body-bold">
            Atmaca
          </span>
        </a>
      </router-link>
    </h1>

    <nav
      class="flex sm:items-center text-sm uppercase justify-around
      md:justify-end tracking-widest flex-col sm:flex-row mt-8 sm:mt-0"
      >
      <ul
        v-for="(item, i) in nav"
        :key="i"
        >
        <li class="px-1 sm:px-5">
          <router-link
            v-slot="{ href, navigate, isActive, isExactActive }"
            :to="{ name: item.path, params: { slug: item.path }}"
            custom
            >
            <a
              :active="isActive"
              :href="href"
              class="hover:bg-primary"
              @click="navigate"
              >
              <span
                v-if="isExactActive"
                >
                ⇾
              </span>
              <span class="font-body-bold">
                {{ item.name }}
              </span>
            </a>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      nav: {
        about: {
          name: 'Home',
          path: 'home',
        },
        production: {
          name: 'About',
          path: 'about',
        },
        contact: {
          name: 'Contact',
          path: 'contact',
        },
      },
    };
  },
};
</script>

<style>

</style>
