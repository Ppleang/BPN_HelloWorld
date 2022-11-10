<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script>
import Home1 from "@/layouts/home1.vue";
import Home2 from "@/layouts/home2.vue";
export default {
  components: {
    Home1,
    Home2,
  },
  computed: {
    layout() {
      console.log(this.$route.meta);
      return this.$route.meta.layout || Home2;
    },
  },
};
</script>


