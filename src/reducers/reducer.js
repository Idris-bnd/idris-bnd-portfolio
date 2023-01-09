import {

} from "../actions/action";

// import {

// } from "../actions/api";

export const initialState = {
    idris: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    //   case SET_NAV:
    //       return{
    //         ...state,
    //         webSite: {
    //             ...state.webSite,
    //             navOpen: !state.webSite.navOpen,
    //         }
    //       };
    
    // fausse action.

    default:
      return state;
  }
};

export default reducer;