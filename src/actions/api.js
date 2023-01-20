// ENVOIE Email emailjs
export const SEND_MAIL = 'SEND_MAIL';
export const sendMail = () => ({
  type: SEND_MAIL
});

// CRUD PROJECTS
export const GET_PROJECTS = 'GET_PROJECTS';
export const getProjects = () => ({
  type: GET_PROJECTS
});
export const SAVE_PROJECTS = 'SAVE_PROJECTS';
export const SaveProjects = (data) => ({
  type: SAVE_PROJECTS,
  data: data,
});

export const GET_ONE_PROJECT = 'GET_ONE_PROJECT';
export const getOneProject = (id) => ({
  type: GET_ONE_PROJECT,
  id: id,
});
export const SAVE_ONE_PROJECT = 'SAVE_ONE_PROJECT';
export const SaveOneProject = (data) => ({
  type: SAVE_ONE_PROJECT,
  data: data,
});
export const UPDATE_ONE_PROJECT = 'UPDATE_ONE_PROJECT';
export const UpdateOneProject = (id, data) => ({
  type: UPDATE_ONE_PROJECT,
  id: id,
  data: data,
});
export const CREATE_ONE_PROJECT = 'CREATE_ONE_PROJECT';
export const CreateOneProject = () => ({
  type: CREATE_ONE_PROJECT
});
export const DELETE_ONE_PROJECT = 'DELETE_ONE_PROJECT';
export const DeleteOneProject = (id) => ({
  type: DELETE_ONE_PROJECT,
  id: id,
});

export const CHANGE_FORM_PROJECT_INPUTS = 'CHANGE_FORM_PROJECT_INPUTS';
export const changeFormProjectInputs = (name, value) => ({
  type: CHANGE_FORM_PROJECT_INPUTS,
  name: name,
  value: value,
});
export const CHANGE_FORM_PROJECT_SKILLS_INPUTS = 'CHANGE_FORM_PROJECT_SKILLS_INPUTS';
export const changeFormProjectSkillsInputs = (index, name, value) => ({
  type: CHANGE_FORM_PROJECT_SKILLS_INPUTS,
  index: index,
  name: name,
  value: value,
});
export const ADD_PROJECT_SKILL = 'ADD_PROJECT_SKILL';
export const AddProjectSkill = () => ({
  type: ADD_PROJECT_SKILL
});
export const DELETE_PROJECT_SKILL = 'DELETE_PROJECT_SKILL';
export const deleteProjectSkill = (array) => ({
  type: DELETE_PROJECT_SKILL,
  array: array,
});


// CRUD SKILLS
export const GET_SKILLS = 'GET_SKILLS';
export const getSkills = () => ({
  type: GET_SKILLS
});
export const SAVE_SKILLS = 'SAVE_SKILLS';
export const SaveSkills = (data) => ({
  type: SAVE_SKILLS,
  data: data,
});

export const GET_ONE_SKILL = 'GET_ONE_SKILL';
export const getOneSkill = (id) => ({
  type: GET_ONE_SKILL,
  id: id,
});
export const CREATE_ONE_SKILL = 'CREATE_ONE_SKILL';
export const createOneSkill = (data) => ({
  type: CREATE_ONE_SKILL,
  data: data,
});
export const UPDATE_ONE_SKILL = 'UPDATE_ONE_SKILL';
export const UpdateOneSkill = (id, data) => ({
  type: UPDATE_ONE_SKILL,
  id: id,
  data: data,
});
export const DELETE_ONE_SKILL = 'DELETE_ONE_SKILL';
export const DeleteOneSkill = (id) => ({
  type: DELETE_ONE_SKILL,
  id: id,
});
export const SAVE_ONE_SKILL = 'SAVE_ONE_SKILL';
export const SaveOneSkill = (data) => ({
  type: SAVE_ONE_SKILL,
  data: data,
});

export const CHANGE_FORM_SKILL_INPUTS = 'CHANGE_FORM_SKILL_INPUTS';
export const changeFormSkillInputs = (name, value) => ({
  type: CHANGE_FORM_SKILL_INPUTS,
  name: name,
  value: value,
});