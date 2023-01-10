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
        // description: "En tant que lead Développeur Front-end, dans une équipe de 4 personne, on à créer un site qui permet de mettre en relation des professeur(e)s d'écoles de dance et leurs élèves. Pour ce faire on à utiliser React, Redux, Sass et des API REST pour communiquer avec le back qui est en symfony, twig et mySQL.",
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
        // description: "Vous êtes justement dessus ;), il a été réalisé en React Redux, et Sass. Je prévoie prochainement de faire un back en Node js afin d'appeler mes projets en API REST et de rendre ce site 100% dynamique",
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
        // description: "Site pour générer des couleurs aléatoirement, pour ce site j'ai utilisé react avec ses props et ses validations et du scss/sass également. le repo est ici et le site ici!",
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
        // description: "Petit jeu sur un site effet 'terminal' pour montrer mes compétences sur du Javascript vanilla, en utilisant les modèles, lien vers le répo github et ici vers le site",
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
        // description: "Blog / journal où je donne mon avis sur des sujets divers et variés, pour ce site j'ai utilisé react, avec ses hooks, props, validation de props et également du scss/sass, lien vers le répo github et ici vers le site.",
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