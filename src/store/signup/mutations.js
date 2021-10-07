const SET_SIGNUP_FORM = (state, payload) => {
  console.warn('mutation', payload);
  Object.assign(state, payload);
};

export default { SET_SIGNUP_FORM };
