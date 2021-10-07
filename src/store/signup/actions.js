const setSignupForm = ({ commit }, payload) => {
  console.log('payload', payload);
  commit('SET_SIGNUP_FORM', payload);
};

export default { setSignupForm };
