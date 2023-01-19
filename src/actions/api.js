// ENVOIE Email emailjs
export const SEND_MAIL = 'SEND_MAIL';
export const sendMail = () => ({
  type: SEND_MAIL
});

export const GET_PROJECTS = 'GET_PROJECTS';
export const getProjects = () => ({
  type: GET_PROJECTS
});

export const SAVE_PROJECTS = 'SAVE_PROJECTS';
export const SaveProjects = (data) => ({
  type: SAVE_PROJECTS,
  data: data,
});

export const GET_SKILLS = 'GET_SKILLS';
export const getSkills = () => ({
  type: GET_SKILLS
});

export const SAVE_SKILLS = 'SAVE_SKILLS';
export const SaveSkills = (data) => ({
  type: SAVE_SKILLS,
  data: data,
});
