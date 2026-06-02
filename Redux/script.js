const store = {
  state: {
    cart: [],
    shop: [],
  },
  getState() {
    return this.state;
  },
  dispatch(action) {
    if (action.type == "add") {
      return store.state.cart.push(action.payload);
    } else if (action.type == "remove") {
      return store.state.cart.pop(action.payload);
    }
  },
};

function add(product) {
  return { type: "add", payload: product };
}
function remove(product) {
  return { type: "remove", payload: product };
}

store.dispatch(add("apple"));
store.dispatch(remove("apple"));
console.log(store.getState());
