import { SET_NAV } from "../actions/action";
import imageBlog from '../assets/images/BlogJournal_000.jpg';
import imageChoose from '../assets/images/Choose_000.jpg';
import imageDanceRiser from '../assets/images/DanceRiser_000.jpg';
import imageTerminalGame from '../assets/images/TerminalGame_000.jpg';
// import {

// } from "../actions/api";

export const initialState = {
    webSiteThings: {
      navOpen: false,
    },
    skillslist: [
      {
        logo: 'fa-brands fa-react',
        percentage: 90,
        name: 'React',
        color: "#61DBFB",
      },
      {
        logo: 'fa-brands fa-square-js',
        percentage: 85,
        name: 'Javascript',
        color: "#F0DB4F",
      },
      {
        logo: 'fa-brands fa-node-js',
        percentage: 60,
        name: 'Nodejs',
        color: "#68A063",
      },
      {
        logo: 'fa-brands fa-html5',
        percentage: 95,
        name: 'HTML5',
        color: "#F06529",
      },
      {
        logo: 'fa-brands fa-sass',
        percentage: 95,
        name: 'Sass',
        color: "#CD6799",
      },
      {
        logo: 'fa-solid fa-arrow-right-arrow-left',
        percentage: 100,
        name: 'API',
        color: "#98124E",
      },
      {
        logo: 'fa-brands fa-square-github',
        percentage: 85,
        name: 'GitHub',
        color: "#211F1F",
      },
      {
        logo: 'fa-solid fa-database',
        percentage: 70,
        name: 'mySQL',
        color: "#0F1A20",
      },
    ],
    ProjectsList:[
      {
        name: "Dance Riser",
        image: imageDanceRiser,
        lien: "https://www.dance-riser.com/",
        skills:[
          {
            logo: 'fa-brands fa-react',
            percentage: 90,
            name: 'React',
            color: "#61DBFB",
          },
          {
            logo: 'fa-brands fa-square-js',
            percentage: 85,
            name: 'Javascript',
            color: "#F0DB4F",
          },
          {
            logo: 'fa-brands fa-sass',
            percentage: 95,
            name: 'Sass',
            color: "#CD6799",
          },
          {
            logo: 'fa-solid fa-arrow-right-arrow-left',
            percentage: 100,
            name: 'API',
            color: "#98124E",
          },
        ],
      },
      {
        name: "Mon Portfolio",
        image: "https://resize-parismatch.lanmedia.fr/var/pm/public/media/image/2022/07/12/18/en-photos-la-nasa-devoile-de-nouvelles-images-exceptionnelles-de-james-webb.jpg?VersionId=If5aBJcsJjgugzl0hwYEM9o3DmNzTuU7",
        lien: "",
        skills:[
          {
            logo: 'fa-brands fa-react',
            percentage: 90,
            name: 'React',
            color: "#61DBFB",
          },
          {
            logo: 'fa-brands fa-sass',
            percentage: 95,
            name: 'Sass',
            color: "#CD6799",
          },
        ],
      },
      {
        name: "Choose",
        image: imageChoose,
        lien: "https://choose-8d461.web.app/",
        skills:[
          {
            logo: 'fa-brands fa-react',
            percentage: 90,
            name: 'React',
            color: "#61DBFB",
          },
          {
            logo: 'fa-brands fa-sass',
            percentage: 95,
            name: 'Sass',
            color: "#CD6799",
          },
        ],
      },
      {
        name: "Terminal Game",
        image: imageTerminalGame,
        lien: "https://idris-bnd.github.io/TerminalGame/",
        skills:[
          {
            logo: 'fa-brands fa-html5',
            percentage: 95,
            name: 'HTML5',
            color: "#F06529",
          },
          {
            logo: 'fa-brands fa-sass',
            percentage: 95,
            name: 'Sass',
            color: "#CD6799",
          },
          {
            logo: 'fa-brands fa-square-js',
            percentage: 85,
            name: 'Javascript',
            color: "#F0DB4F",
          },
        ],
      },
      {
        name: "Blog",
        image: imageBlog,
        lien: "https://blogjournal.web.app/",
        skills:[
          {
            logo: 'fa-brands fa-react',
            percentage: 90,
            name: 'React',
            color: "#61DBFB",
          },
          {
            logo: 'fa-brands fa-sass',
            percentage: 95,
            name: 'Sass',
            color: "#CD6799",
          },
        ],
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