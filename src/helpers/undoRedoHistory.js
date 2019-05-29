import { cloneDeep, isEqual } from "lodash/lang";

const initialState = {
  columns: 5,
  rows: 5,
  columngap: 0,
  rowgap: 0,
  colArr: [],
  rowArr: [],
  childarea: []
};

let store;
const history = [initialState];
let currentIndex = -1;

function init(_store) {
  store = _store;
}

function addState(state) {
  if (currentIndex + 1 < history.length) {
    history.splice(currentIndex + 1);
  }
  history.push(state);
  currentIndex++;
}

function undo() {
  const prevState = history[currentIndex - 1];
  if (isEqual(prevState, initialState)) return;
  store.replaceState(cloneDeep(prevState));
  currentIndex--;
}

function redo() {
  const nextState = history[currentIndex + 1];
  if (nextState === undefined) return;
  store.replaceState(cloneDeep(nextState));
  currentIndex++;
}

export default { init, addState, undo, redo };
