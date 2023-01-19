import { CHANGE_FORM_INPUTS, MAKE_FORM_INPUTS_ERROR, MAKE_FORM_INPUTS_TRUE, RESET_FORM_INPUTS, SET_LOADING_ON_FORM, SET_NAV } from "../actions/action";
import imageBlog from '../assets/images/BlogJournal_000.jpg';
import imageChoose from '../assets/images/Choose_000.jpg';
import imageDanceRiser from '../assets/images/DanceRiser_000.jpg';
import imageTerminalGame from '../assets/images/TerminalGame_000.jpg';
import imagePortfolio from '../assets/images/portfolioImg.PNG';
import {
  SAVE_PROJECTS, SAVE_SKILLS
} from "../actions/api";

export const initialState = {
    webSiteThings: {
      navOpen: false,
      cursorLoading: false,
      contactForm:{
        firstName: true,
        lastName: true,
        email: true,
        subject: true,
        msgContent: true,
        champs: true,
        notSend: true,
        send: false,
      }
    },
    skillslist: [],
    ProjectsList:[],
    ContactInputs:{
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      msgContent: '',
    }
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
      case SAVE_PROJECTS:
          return {
            ...state,
            ProjectsList: action.data
          }
      case SAVE_SKILLS:
          return {
            ...state,
            skillslist: action.data
          }
      case SET_NAV:
          return{
            ...state,
            webSiteThings: {
              ...state.webSiteThings,
              navOpen: !state.webSiteThings.navOpen,
            }
          };
      case CHANGE_FORM_INPUTS:
          return{
            ...state,
            ContactInputs: {
              ...state.ContactInputs,
              [action.name]: action.value,
            }
          };
      case RESET_FORM_INPUTS:
          return{
            ...state,
            ContactInputs:{
              firstName: '',
              lastName: '',
              email: '',
              subject: '',
              msgContent: '',
            }
          };
      case MAKE_FORM_INPUTS_ERROR:
          return{
            ...state,
            webSiteThings:{
              ...state.webSiteThings,
              contactForm: {
                ...state.webSiteThings.contactForm,
                [action.name]: false,
              }
            }
          };
      case MAKE_FORM_INPUTS_TRUE:
          return{
            ...state,
            webSiteThings:{
              ...state.webSiteThings,
              contactForm: {
                ...state.webSiteThings.contactForm,
                [action.name]: true,
              }
            }
          };
      case SET_LOADING_ON_FORM:
          return{
            ...state,
            webSiteThings:{
              ...state.webSiteThings,
              cursorLoading: !state.webSiteThings.cursorLoading
            }
          };

    default:
      return state;
  }
};

export default reducer;