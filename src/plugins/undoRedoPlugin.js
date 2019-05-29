import { cloneDeep } from "lodash/lang";
import undoRedoHistory from "../helpers/undoRedoHistory";
const undoRedoPlugin = store => {
  undoRedoHistory.init(store);
  let firstState = cloneDeep(store.state);
  undoRedoHistory.addState(firstState);
  store.subscribe((mutation, state) => {
    undoRedoHistory.addState(cloneDeep(state));
  });
};

export default undoRedoPlugin;
