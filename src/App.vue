<template>
  <div id="app">
    <app-header/>
    <section class="container">
      <app-grid/>
      <app-form/>
    </section>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppGrid from "./components/AppGrid.vue";
import AppForm from "./components/AppForm.vue";
import { mapState } from "vuex";

export default {
  components: {
    AppHeader,
    AppGrid,
    AppForm
  },
  computed: {
    ...mapState(["columns", "rows", "colArr", "rowArr"])
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
</style>
