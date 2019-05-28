<template>
  <main>
    <section
      :style="{ gridTemplateColumns: colTemplate, gridTemplateRows: '3.125rem', gridColumnGap: columngap + 'px', gridRowGap: rowgap + 'px' }"
      class="colunits"
    >
      <div v-for="(col, i) in colArr" :key="i">
        <input
          v-model.lazy="col.unit"
          @change="validateunit($event, i, 'col')"
          :class="[columns > 8 ? widthfull : '']"
        >
        <div class="errors" v-if="errors.col.indexOf(i) !== -1">Must use real CSS units, goofball</div>
      </div>
    </section>

    <section
      :style="{ gridTemplateColumns: '3.125rem', gridTemplateRows: rowTemplate, gridColumnGap: columngap + 'px', gridRowGap: rowgap + 'px' }"
      class="rowunits"
    >
      <div v-for="(row, i) in rowArr" :key="i">
        <input v-model.lazy="row.unit" @change="validateunit($event, i, 'row')">
        <div class="errors" v-if="errors.row.indexOf(i) !== -1">Must use real CSS units, goofball</div>
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
          @touchstart="placeChild(item, 's')"
          @touchend="placeChild(item, 'e')"
        ></div>
      </section>

      <section
        class="grid gridchild"
        :style="{ gridTemplateColumns: colTemplate, gridTemplateRows: rowTemplate , gridColumnGap: columngap + 'px', gridRowGap: rowgap + 'px' }"
      >
        <div
          v-for="(child, i) in childarea"
          :key="child"
          :class="'child' + i"
          :style="{ gridArea: child }"
        ></div>
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
      child: {},
      widthfull: "widthfull",
      errors: {
        col: [],
        row: []
      }
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
    validateunit(e, i, direction) {
      let unit = e.target.value;
      let check =
        /fr/.test(unit) ||
        /px/.test(unit) ||
        /%/.test(unit) ||
        /em/.test(unit) ||
        /rem/.test(unit) ||
        /vw/.test(unit) ||
        /vh/.test(unit) ||
        /vmin/.test(unit);

      if (!check) {
        this.errors[direction].push(i);
      } else {
        this.errors[direction].splice(this.errors[direction].indexOf(i), 1);
      }
    },
    placeChild(item, startend) {
      //built an object first because I might use this for something else
      this.child[`${startend}row`] = Math.ceil(item / this.columns);
      this.child[`${startend}col`] =
        item - (this.child[`${startend}row`] - 1) * this.columns;

      //create the children css units as a string
      if (startend === "e") {
        let childstring = `${this.child.srow} / ${this.child.scol} / ${this
          .child.erow + 1} / ${this.child.ecol + 1}`;

        this.$store.commit("addChildren", childstring);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  margin: 0.9375rem 0 0 4.6875rem;
  width: calc(70vw - 3.125rem);
  height: calc(70vh - 3.125rem);
}

@mixin colors($max, $color-frequency) {
  $color: 300 / $max;

  // fruit loops!
  @for $i from 1 through $max {
    div[class*="child"]:nth-child(#{$i}) {
      background: hsla(($i - 15) * ($color * 1.5), 80%, 30%, 0.7);
      border: 0.0625rem solid var(--color-silver-light);
    }
  }
}

.gridchild {
  counter-reset: step;
  div {
    position: relative;
    counter-increment: step;
    &:before {
      display: block;
      padding: 0 0.3125rem;
      text-align: center;
      position: absolute;
      color: var(--color-white);
      content: ".div" counter(step);
    }
  }
}

#gridcontainer {
  border: 0.0625rem solid var(--color-teal);
  width: 100%;
  height: 100%;
  position: relative;
  background: var(--color-grey-darkest);
  background: -moz-linear-gradient(
    top,
    var(--color-grey-darkest) 0%,
    var(--color-grey-light) 100%
  );
  background: -webkit-linear-gradient(
    top,
    var(--color-grey-darkest) 0%,
    var(--color-grey-light) 100%
  );
  background: linear-gradient(
    to bottom,
    var(--color-grey-darkest) 0%,
    var(--color-grey-light) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=var(--color-grey-darkest), endColorstr=var(--color-grey-light),GradientType=0 ); /* IE6-9 */
  box-shadow: 0 0.125rem 1.25rem 0 #000;
}

.grid {
  width: 100%;
  height: 100%;
  position: absolute;
  display: grid;
  grid-auto-flow: row dense;
  @include colors(20, 100);
  p {
    padding: 0 0.625rem;
  }

  div[class*="box"] {
    position: relative;
    z-index: 1000;
    opacity: 0.5;
    cursor: move;
    transition: 0.2s all ease;
    border: 0.0625rem dotted var(--color-white);
    background-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  }
}

.rowunits,
.colunits {
  display: grid;
  div {
    text-align: center;
    position: relative;
  }
}

.rowunits {
  margin-left: -4.375rem;
  float: left;
  height: 100%;
  div {
    align-self: center;
    height: 1.875rem;
  }
}

.widthfull {
  width: 100%;
}

@media screen and (max-width: 43.75rem) {
  main {
    width: calc(80vw - 3.125rem);
    height: calc(40vh - 3.125rem);
  }
}

.errors {
  position: absolute;
  width: 9.375rem;
  bottom: -0.3125rem;
  z-index: 100000;
  min-height: 4.375rem;
  padding: 0.5rem 0.75rem;
  font-weight: bold;
  background: var(--color-strawberry);
  border-radius: var(--border-radius-default);
}
</style>