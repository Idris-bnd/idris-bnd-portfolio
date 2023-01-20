// toggle la nav.
export const SET_NAV = 'SET_NAV';
export const setNav = () => ({
  type: SET_NAV,
});

// enlève le loader.
export const SET_LOADER = 'SET_LOADER';
export const SetLoader = () => ({
  type: SET_LOADER,
});

// enlève le loader.
export const REMOVE_LOADER = 'REMOVE_LOADER';
export const RemoveLoader = () => ({
  type: REMOVE_LOADER,
});

// Email
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

export const SET_LOADING_FALSE = 'SET_LOADING_FALSE';
export const setLoadingFalse = () => ({
  type: SET_LOADING_FALSE,
});

// Login / Logout
export const CHANGE_LOGIN_INPUTS = 'CHANGE_LOGIN_INPUTS';
export const changeLoginInputs = (name, value) => ({
  type: CHANGE_LOGIN_INPUTS,
  name: name,
  value: value
});

export const SEND_LOGIN_FORM = 'SEND_LOGIN_FORM';
export const SendLoginForm = () => ({
  type: SEND_LOGIN_FORM,
});

export const RESET_LOGIN_INPUTS = 'RESET_LOGIN_INPUTS';
export const resetLoginInputs = () => ({
  type: RESET_LOGIN_INPUTS,
});
export const MAKE_LOGIN_INPUTS_ERROR = 'MAKE_LOGIN_INPUTS_ERROR';
export const makeLoginInputsError = (name) => ({
  type: MAKE_LOGIN_INPUTS_ERROR,
  name: name
});

export const MAKE_LOGIN_INPUTS_TRUE = 'MAKE_LOGIN_INPUTS_TRUE';
export const makeLoginInputsTrue = (name) => ({
  type: MAKE_LOGIN_INPUTS_TRUE,
  name: name
});

export const LOGIN = 'LOGIN';
export const login = (data) => ({
  type: LOGIN,
  data: data,
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT,
});