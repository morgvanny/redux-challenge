export default function name(state = "Morgan", action) {
  switch (action.type) {
    case "SET_NAME":
      return action.payload;
    default:
      return state;
  }
}
