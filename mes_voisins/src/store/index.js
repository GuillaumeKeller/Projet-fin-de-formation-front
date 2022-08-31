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
    isConnected: false,
    isDisconnected: true
  },

  getters: {},

  mutations: {
    setConnected(state, connected, disconnected) 
    {
      
      state.isConnected = connected;
      state.isDisconnected = disconnected;
    }
  },

  actions: {

    registerForm: ({ commit }, userRegisterData) => {
      commit; console.log(userRegisterData);
      instance.post ("/create", userRegisterData)
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

