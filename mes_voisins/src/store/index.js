import axios from "axios";
import { createStore } from "vuex";

const instance = axios.create({
  baseURL: "http://joffreyms-server.eddi.cloud/back/projet-mes-voisins-back/public/wp-json/mesvoisins/v1/userdata",
  headers: {
    "Content-Type": "application/json",
  },
});

export default createStore({
  state: {},

  getters: {},

  mutations: {},

  actions: {

    registerForm: ({ commit }, userData) => {
      commit; console.log(userData);
      instance.post ("/create", userData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    },
  },
  
  modules: {},
});
