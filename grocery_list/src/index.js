import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { groceryListApp } from "./reducers.js";
import {
  createItem,
  purchaseItem,
  setPurchaseFilter,
  setCategoryFilter,
  setNameSort,
  setDescriptionSort
} from "./actions.js";

let store = createStore(groceryListApp);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(
  createItem({
    name: "Nutty nuggets",
    description: "A unsurpassed brand of cereal",
    desiredAmount: 2,
    currentAmount: 0,
    category: "cereal"
  })
);
store.dispatch(
  createItem({
    name: "goldfish",
    description:
      "delicious, cheesy crackers for the most distinguished of persons",
    desiredAmount: 53,
    currentAmount: 0,
    category: "crackers"
  })
);

store.dispatch(
  createItem({
    name: "soggy flakes",
    description: "a decidedly inferior option to nutty nuggets",
    desiredAmount: 1,
    currentAmount: 0,
    category: "cereal"
  })
);

store.dispatch(setPurchaseFilter("PURCHASED"));
store.dispatch(setCategoryFilter("cereal"));
store.dispatch(setNameSort("something"));
store.dispatch(setDescriptionSort("crackers"));

unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
