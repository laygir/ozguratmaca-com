<template>
  <header class="flex pt-8 pb-20 border-b">
    <h1
      class="text-2xl tracking-tight flex-1"
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
      class="flex items-center text-sm uppercase justify-around
      md:justify-end tracking-widest"
      >
      <ul
        v-for="(item, i) in nav"
        :key="i"
        >
        <li class="px-5">
          <router-link
            v-slot="{ href, navigate, isExactActive }"
            :to="`/${item.path}`"
            custom
            >
            <a
              :active="isExactActive"
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
          path: '',
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
