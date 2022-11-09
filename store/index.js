export const state = () => ({
  darkMode: false,
});

export const mutations = {
  setDarkMode: (state, payload) => {
    state.darkMode = payload;
  },
};

export const getters = {
  getDarkMode: (state) => state.darkMode,
};
