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
store.dispatch({ type: "add", payload: "apple" });
store.dispatch({ type: "remove", payload: "apple" });
console.log(store.getState());
