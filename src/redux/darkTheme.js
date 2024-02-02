const initialState = {
  darkMode: false,
};

//the darkTheme reducer initializes the state and then listens for the toggle action, to toggle the value of darkMode in the state.
const darkTheme = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export default darkTheme;
