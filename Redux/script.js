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

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { ...state, cart: [...state.cart, action.payload] };
      break;

    case "remove":
      return { ...state, cart: [state.cart.slice(0, 0)] };
      break;

    default:
      return state;
      break;
  }
}

function add(product) {
  return { type: "add", payload: product };
}
function remove(product) {
  return { type: "remove", payload: product };
}

store.dispatch(add("apple"));
store.dispatch(remove("apple"));
console.log(store.getState());
