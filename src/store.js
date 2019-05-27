import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    columns: 5,
    rows: 5,
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
    },
    adjustArr(state, payload) {
      let newVal = Number(payload.newVal),
        oldVal = Number(payload.oldVal);

      if (newVal < oldVal) {
        state[payload.direction].length = newVal;
      } else {
        let difference = newVal - oldVal;
        for (let i = 1; i <= difference; i++) {
          state[payload.direction].push({ unit: "1fr" });
        }
      }
    },
    updateColumns(state, payload) {
      state.columns = payload;
    },
    updateRows(state, payload) {
      state.rows = payload;
    },
    updateColumnGap(state, payload) {
      state.columngap = payload;
    },
    updateRowGap(state, payload) {
      state.rowgap = payload;
    }
  }
});

const createArr = (direction, arr) => {
  for (let i = 1; i <= direction; i++) {
    arr.push({ unit: "1fr" });
  }
};
