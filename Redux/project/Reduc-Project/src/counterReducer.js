let initialState = {
  counter: 0,
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "increase":
      return { ...state, counter: state.counter + 1 };

    case "decrease":
      return { ...state, counter: state.counter - 1 };

    default:
      return state;
  }
}
