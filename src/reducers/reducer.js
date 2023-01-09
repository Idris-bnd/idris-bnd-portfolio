import { SET_NAV } from "../actions/action";

// import {

// } from "../actions/api";

export const initialState = {
    webSite: {
      navOpen: false,
    }
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
      case SET_NAV:
          return{
            ...state,
            webSite: {
                ...state.webSite,
                navOpen: !state.webSite.navOpen,
            }
          };

    default:
      return state;
  }
};

export default reducer;