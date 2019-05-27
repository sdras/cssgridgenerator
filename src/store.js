import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    columns: 4,
    rows: 4,
    columngap: 0,
    rowgap: 0,
    colArr: [],
    rowArr: []
  },
  getters: {
    colTemplate(state) {
      return state.colArr.map(i => i["unit"]).join(" ");
    },
    rowTemplate(state) {
      return state.rowArr.map(i => i["unit"]).join(" ");
    },
    divNum(state) {
      return state.columns * state.rows;
    }
  },
  mutations: {
    initialArrIndex(state) {
      createArr(state.columns, state.colArr);
      createArr(state.rows, state.rowArr);
    }
  }
});

function createArr(direction, arr) {
  for (let i = 1; i <= direction; i++) {
    arr.push({ unit: "1fr" });
  }
}
