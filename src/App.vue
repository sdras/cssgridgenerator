<template>
  <div id="app">
    <app-header/>
    <app-grid
      :col-arr="colArr"
      :row-arr="rowArr"
      :col-template="colTemplate"
      :row-template="rowTemplate"
      :columnngap="columngap"
      :rowgap="rowgap"
    />

    <aside>
      <input v-model.number="columns">
    </aside>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppGrid from "./components/AppGrid.vue";

export default {
  components: {
    AppHeader,
    AppGrid
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

//todo
aside {
  margin: 0 60px;
  font-size: 17px;
  width: 450px;
}

label {
  padding-right: 15px;
  display: inline-block;
  width: 150px;
}

input {
  font-size: 17px;
  background: #211f2f;
  color: white;
  width: 60px;
  padding: 5px;
  border: 1px solid #666;
}

fieldset {
  margin-bottom: 20px;
  border: none;
  margin: 0;
  padding: 5px 0;
}
</style>
