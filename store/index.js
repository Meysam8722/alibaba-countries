export const state = () => ({
  username: '',
  password: '',
})

export const mutations = {
  setUsername: (state, payload) => {
    state.username = payload
  },
  setPassword: (state, payload) => {
    state.password = payload
  }
}

export const getters = {
  getUsername: (state) => this.state.username,
  getPassword: (state) => this.state.password
}



