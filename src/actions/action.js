// toggle la nav.
export const SET_NAV = 'SET_NAV';
export const setNav = () => ({
  type: SET_NAV,
});

export const CHANGE_FORM_INPUTS = 'CHANGE_FORM_INPUTS';
export const changeFormInputs = (name, value) => ({
  type: CHANGE_FORM_INPUTS,
  name: name,
  value: value
});

export const RESET_FORM_INPUTS = 'RESET_FORM_INPUTS';
export const resetFormInputs = () => ({
  type: RESET_FORM_INPUTS,
});

export const MAKE_FORM_INPUTS_ERROR = 'MAKE_FORM_INPUTS_ERROR';
export const makeFormInputsError = (name) => ({
  type: MAKE_FORM_INPUTS_ERROR,
  name: name
});

export const MAKE_FORM_INPUTS_TRUE = 'MAKE_FORM_INPUTS_TRUE';
export const makeFormInputsTrue = (name) => ({
  type: MAKE_FORM_INPUTS_TRUE,
  name: name
});

export const SET_LOADING_ON_FORM = 'SET_LOADING_ON_FORM';
export const setLoadingOnForm = () => ({
  type: SET_LOADING_ON_FORM,
});
