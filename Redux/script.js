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
      return store.state.cart.push(action.product);
    }
  },
};
store.dispatch({ type: "add", product: "apple" });
console.log(store.getState());
