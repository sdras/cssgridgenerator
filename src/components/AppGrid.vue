<template>
  <main>
    <section
      :style="{ gridTemplateColumns: colTemplate, gridTemplateRows: '50px', gridColumnGap: columngap + 'px', gridRowGap: rowgap + 'px' }"
      class="colunits"
    >
      <div v-for="(col, i) in colArr" :key="i">
        <input v-model="col.unit">
      </div>
    </section>

    <section
      :style="{ gridTemplateColumns: '50px', gridTemplateRows: rowTemplate, gridColumnGap: columngap + 'px', gridRowGap: rowgap + 'px' }"
      class="rowunits"
    >
      <div v-for="(row, i) in rowArr" :key="i">
        <input v-model="row.unit">
      </div>
    </section>

    <div id="gridcontainer">
      <section
        class="grid"
        :style="{ gridTemplateColumns: colTemplate, gridTemplateRows: rowTemplate , gridColumnGap: columngap + 'px', gridRowGap: rowgap + 'px' }"
      >
        <div
          v-for="(item, i) in divNum"
          :key="i"
          :class="'box' + i"
          @mousedown="placeChild(item, 's')"
          @mouseup="placeChild(item, 'e')"
        ></div>
      </section>

      <section
        class="grid"
        :style="{ gridTemplateColumns: colTemplate, gridTemplateRows: rowTemplate , gridColumnGap: columngap + 'px', gridRowGap: rowgap + 'px' }"
      >
        <div
          v-for="(child, i) in childarea"
          :key="child"
          :class="'child' + i"
          :style="{ gridArea: child }"
        >
          <p>.section{{ i + 1 }}</p>
        </div>
      </section>
    </div>
    <!--gridcontainer-->
  </main>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      child: {}
    };
  },
  computed: {
    ...mapState([
      "columngap",
      "rowgap",
      "colArr",
      "rowArr",
      "columns",
      "rows",
      "childarea"
    ]),
    ...mapGetters(["rowTemplate", "colTemplate", "divNum"])
  },
  methods: {
    placeChild(item, startend) {
      //using an object here because I'm not sure yet how I want to use this
      this.child[`${startend}row`] = Math.ceil(item / this.columns);
      this.child[`${startend}col`] =
        item - (this.child[`${startend}row`] - 1) * this.columns;

      if (startend === "e") {
        let childstring = `${this.child.srow} / ${this.child.scol} / ${this
          .child.erow + 1} / ${this.child.ecol + 1}`;

        console.log(childstring);

        this.$store.commit("addChildren", childstring);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  width: calc(70vw - 50px);
  height: calc(70vh - 50px);
  margin: 15px 0 0 75px;
}

@mixin colors($max, $color-frequency) {
  $color: 300 / $max;

  // fruit loops!
  @for $i from 1 through $max {
    div[class*="child"]:nth-child(#{$i}) {
      background: hsl(($i - 10) * ($color * 1.25), 100%, 70%);
    }
  }
}

#gridcontainer {
  border: 1px solid #08ffbd;
  width: 100%;
  height: 100%;
  position: relative;
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

.grid {
  width: 100%;
  height: 100%;
  position: absolute;
  display: grid;
  grid-auto-flow: row dense;
  @include colors(20, 100);

  div[class*="box"] {
    background-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
    border: 1px dotted white;
    transition: 0.2s all ease;
    cursor: move;
    position: relative;
    z-index: 1000;
    opacity: 0.5;
  }
}

.rowunits,
.colunits {
  display: grid;
  div {
    text-align: center;
  }
}

.rowunits {
  margin-left: -70px;
  float: left;
  height: 100%;
  div {
    align-self: center;
    height: 30px;
  }
}
</style>