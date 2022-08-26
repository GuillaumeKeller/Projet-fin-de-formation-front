import axios from "axios";
import { createStore } from "vuex";
import storage from '@/utils/storage'

const instance = axios.create({
  baseURL: "http://joffreyms-server.eddi.cloud/back/projet-mes-voisins-back/public/wp-json/mesvoisins/v1/userdata",
  headers: {
    "Content-Type": "application/json",
  },
});

export default createStore({
  state: {
    isConnected: false
  },

  getters: {},

  mutations: {
    setConnected(state, connected) 
    {
      
      state.isConnected = connected;
    }
  },

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
    userConnected(context)
    {
      context.commit( "setConnected", true );
    },

    userDisconnected(context)
    {
      context.commit( "setConnected", false );
      storage.unset( "userData" );
    }
  },
  
  modules: {},
});

