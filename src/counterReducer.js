export default function counter(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUBTRACT":
      return state - 1;
    case "SET":
      return action.payload;
    default:
      return state;
  }
}
