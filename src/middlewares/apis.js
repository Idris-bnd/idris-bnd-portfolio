import axios from 'axios';
import { GET_ONE_PROJECT, GET_PROJECTS, GET_SKILLS, SaveOneProject, SaveProjects, SaveSkills, SEND_MAIL, SEND_ONE_PROJECT, UPDATE_ONE_PROJECT } from "../actions/api";
import emailjs from "@emailjs/browser";
import { makeFormInputsError, makeFormInputsTrue, resetFormInputs, setLoadingOnForm } from "../actions/action";
const URL = process.env.REACT_APP_API_URL

const apis = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_MAIL:{
      store.dispatch(setLoadingOnForm());
      store.dispatch(makeFormInputsTrue("notSend"));
      if (
        !process.env.REACT_APP_SERVICE_ID ||
        !process.env.REACT_APP_SERVICE_ID ||
        !process.env.REACT_APP_SERVICE_ID
        ) {
          setTimeout(() => {
            store.dispatch(makeFormInputsError("notSend"));
            store.dispatch(setLoadingOnForm())
            next(action);
          }, 2000)
      }

      emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        {
            firstName: store.getState().reducer.ContactInputs.firstName,
            lastName: store.getState().reducer.ContactInputs.lastName,
            email: store.getState().reducer.ContactInputs.email,
            subject: store.getState().reducer.ContactInputs.subject,
            content: store.getState().reducer.ContactInputs.msgContent,
        },
        process.env.REACT_APP_CLE_API
      )
      .then(() => {
        store.dispatch(resetFormInputs())
        store.dispatch(makeFormInputsTrue("champs"));
        store.dispatch(makeFormInputsTrue("notSend"));
        store.dispatch(makeFormInputsTrue("send"));

        setTimeout(() => {
          store.dispatch(makeFormInputsError("send"));
        }, 5000)
      })
      .catch(() => {
        store.dispatch(makeFormInputsError("notSend"));
      })
      .finally(() => {
        store.dispatch(setLoadingOnForm());
      })
      next(action);
  break;
  }
    case GET_PROJECTS:{
      axios.get(URL + "/projects")
      .then((res) => {
        store.dispatch(SaveProjects(res.data.data))
      })
      .catch(() => {

      })
      .finally(() => {

      })
      next(action);
  break;
  }
    case GET_ONE_PROJECT:{
      axios.get(URL + "/projects/"+action.id)
      .then((res) => {
        console.log(res.data.data);
        store.dispatch(SaveOneProject(res.data.data))
      })
      .catch(() => {

      })
      .finally(() => {

      })
      next(action);
  break;
  }
    case GET_SKILLS:{
      axios.get(URL + "/skills")
      .then((res) => {
        store.dispatch(SaveSkills(res.data.data))
      })
      .catch(() => {

      })
      .finally(() => {

      })
      next(action);
  break;
  }
    case UPDATE_ONE_PROJECT:{
      console.log({
        name: action.data.name,
        image: action.data.image,
        lien: action.data.lien,
        skills: action.data.skills,
      });
      axios.put(URL + "/projects/"+ action.id,
      {
        name: action.data.name,
        image: action.data.image,
        lien: action.data.lien,
        skills: action.data.skills,
      }
      )
      .then((res) => {
        console.log(res.data);
        store.dispatch(SaveSkills(res.data.data))
      })
      .catch(() => {

      })
      .finally(() => {

      })
      next(action);
  break;
  }

    default:
    next(action);
    break;
  }
};

export default apis;