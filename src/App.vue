<template>
  <div id="app">
    <app-header/>
    <input v-model.number="columns">
    <div v-for="(col, i) in colArr" :key="i">
      <input v-model="col.unit">
    </div>
    <p>{{ colTemplate }}</p>
    <section class="grid"></section>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader
  },
  data() {
    return {
      columns: 5,
      rows: 5,
      columngap: 0,
      rowgap: 0,
      colArr: [],
      rowArr: []
    };
  },
  computed: {
    colTemplate() {
      return this.colArr.map(i => i["unit"]).join(" ");
    },
    rowTemplate() {
      return this.rowArr.map(i => i["unit"]).join(" ");
    }
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
  mounted() {
    this.initialArrIndex(this.columns, this.colArr);
    this.initialArrIndex(this.rows, this.rowArr);
  }
};
</script>

<style lang="scss">
body {
  width: 100vw;
  min-height: 100vh;
  background: #192d38; /* Old browsers */
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    #192d38 0%,
    #211f2f 100%
  ); /* FF3.6-15 */
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    #192d38 0%,
    #211f2f 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: radial-gradient(
    ellipse at center,
    #192d38 0%,
    #211f2f 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#192d38', endColorstr='#211f2f',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  font-family: "Mukta Mahee", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  font-weight: 300;
}

#app {
  margin: 5vmin;
}

.grid {
  border: 1px solid #08ffbd;
  width: calc(70vw - 50px);
  height: calc(70vh - 50px);
  background: #131321; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #131321 0%,
    #1f1c2c 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #131321 0%,
    #1f1c2c 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #131321 0%,
    #1f1c2c 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#131321', endColorstr='#1f1c2c',GradientType=0 ); /* IE6-9 */
  box-shadow: 0 2px 20px 0 #000;
}
</style>
