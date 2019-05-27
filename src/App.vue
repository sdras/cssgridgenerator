<template>
  <div id="app">
    <app-header/>
    <section class="container">
      <app-grid/>
      <app-form
        :columns.sync="columns"
        :rows.sync="rows"
        :columngap.sync="columngap"
        :rowgap.sync="rowgap"
      />
    </section>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppGrid from "./components/AppGrid.vue";
import AppForm from "./components/AppForm.vue";
import { mapGetters } from "vuex";
import { mapState } from "vuex";

export default {
  components: {
    AppHeader,
    AppGrid,
    AppForm
  },
  computed: {
    ...mapState(["columns, rows, colArr, rowArr"])
  },
  methods: {
    initialArrIndex(direction, arr) {
      for (let i = 1; i <= direction; i++) {
        arr.push({ unit: "1fr" });
      }
    },
    adjustArr(newVal, oldVal, arrDirection) {
      if (newVal < oldVal) {
        arrDirection.length = newVal;
      } else {
        let difference = newVal - oldVal;
        for (let i = 1; i <= difference; i++) {
          arrDirection.push({ unit: "1fr" });
        }
      }
    }
  },
  watch: {
    columns(newVal, oldVal) {
      this.adjustArr(newVal, oldVal, this.colArr);
    },
    rows(newVal, oldVal) {
      this.adjustArr(newVal, oldVal, this.rowArr);
    }
  },
  created() {
    this.initialArrIndex(this.columns, this.colArr);
    this.initialArrIndex(this.rows, this.rowArr);
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
