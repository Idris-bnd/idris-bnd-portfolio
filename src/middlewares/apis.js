//import axios from 'axios';

const apis = (store) => (next) => (action) => {
  switch (action.type) {
    // case CALL_SCHOOLS:{
    //     axios.get(cleAPI+'/schools')
    //     .then((res) => {
    //       store.dispatch(saveSchools(res.data))
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       store.dispatch(makeUndefined('schoolList'));
    //       window.location.href = 'error404';
    //     })
    //     .finally(() => {
    //       store.dispatch(setLoading('loadingSchools', false))
    //     })
    //     next(action);
    // break;
    // }

    // fausse action.

    default:
    next(action);
    break;
  }
};

export default apis;