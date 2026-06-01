const store = {
  state: {
    cart: [],
    shop: [],
  },
  getState() {
    return this.state;
  },
};
console.log(store.getState());
