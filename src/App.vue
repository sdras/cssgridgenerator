<template>
  <div id="app">
    <app-header />
    <section class="container">
      <app-grid />
      <app-sidebar />
    </section>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppGrid from "./components/AppGrid.vue";
import AppSidebar from "./components/AppSidebar.vue";

export default {
  components: {
    AppHeader,
    AppGrid,
    AppSidebar
  },
  created() {
    this.$store.commit("initialArrIndex");
  }
};
</script>

<style lang="scss">
#app {
  margin: 5vmin 5vmin 0;
}

.container {
  display: flex;
}

@media screen and (max-width: 700px) {
  .container {
    flex-direction: column;
  }
}
</style>
