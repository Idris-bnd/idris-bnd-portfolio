import { SET_NAV } from "../actions/action";

// import {

// } from "../actions/api";

export const initialState = {
    webSiteThings: {
      navOpen: false,
    },
    skillslist: [
      {
        logo: 'fa-brands fa-react',
        percentage: 70,
        name: 'React',
        color: "#61DBFB",
      },
      {
        logo: 'fa-brands fa-square-js',
        percentage: 70,
        name: 'Javascript',
        color: "#F0DB4F",
      },
      {
        logo: 'fa-brands fa-node-js',
        percentage: 70,
        name: 'Nodejs',
        color: "#68A063",
      },
      {
        logo: 'fa-brands fa-html5',
        percentage: 70,
        name: 'HTML5',
        color: "#F06529",
      },
      {
        logo: 'fa-brands fa-sass',
        percentage: 70,
        name: 'Sass',
        color: "#CD6799",
      },
      {
        logo: 'fa-solid fa-arrow-right-arrow-left',
        percentage: 70,
        name: 'API',
        color: "#98124E",
      },
      {
        logo: 'fa-brands fa-square-github',
        percentage: 40,
        name: 'GitHub',
        color: "#211F1F",
      },
      {
        logo: 'fa-solid fa-database',
        percentage: 70,
        name: 'mySQL',
        color: "#0F1A20",
      },
    ]
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
      case SET_NAV:
          return{
            ...state,
            webSiteThings: {
              ...state.webSiteThings,
              navOpen: !state.webSiteThings.navOpen,
            }
          };

    default:
      return state;
  }
};

export default reducer;