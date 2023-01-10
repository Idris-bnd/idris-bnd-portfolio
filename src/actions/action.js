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