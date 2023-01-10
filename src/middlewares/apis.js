import { SEND_MAIL } from "../actions/api";
import emailjs from "@emailjs/browser";

const apis = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_MAIL:{
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
      .then((res) => {
          console.log('envoyé');
      })
      .catch((err) => {
          console.error('mail pas envoyé');
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