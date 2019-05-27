<template>
  <div id="app">
    <app-header/>
    <input v-model.number="columns">

    <main>
      <section
        :style="{ gridTemplateColumns: colTemplate, gridTemplateRows: '50px' , gridColumnGap: columngap + 'px', gridRowGap: rowgap + 'px' }"
        class="rowunits"
      >
        <div v-for="(col, i) in colArr" :key="i">
          <input v-model="col.unit">
        </div>
      </section>

      <p>{{ colTemplate }}</p>
      <section class="grid"></section>
    </main>
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

main {
  width: calc(70vw - 50px);
  height: calc(70vh - 50px);
}

.grid {
  border: 1px solid #08ffbd;
  width: 100%;
  height: 100%;
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
  display: grid;
  div {
    background-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
    border: 1px dotted white;
    transition: 0.2s all ease;
    cursor: move;
    position: relative;
    z-index: 1000;
    opacity: 0.5;
  }
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

.rowunits,
.colunits {
  display: grid;
  div {
    text-align: center;
  }
}

.colunits {
  margin-left: -70px;
  float: left;
  height: 100%;
  div {
    align-self: center;
    height: 30px;
  }
}
</style>
