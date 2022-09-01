import axios from "axios";
import { createStore } from "vuex";
import storage from '@/utils/storage'
import swal from "sweetalert";



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
    setConnected(state, connected) 
    {
      state.isConnected = connected;
    },

    setDisconnected(state, disconnected)
    {
      state.isDisconnected = disconnected;
    }
  },

  actions: {

    registerForm: ({ commit }, userRegisterData) => {
      commit; console.log(userRegisterData);
      instance.post ("/create", userRegisterData)
        .then((response) => {
          console.log(response);
          swal({
            title : "Inscription réussie",
            text : "Vous pouvez maintenant vous connecter",
            icon : "success",
            button : "OK"
          });          
        }).then( function(){
          window.location.href = "#/connexion";
        })
        .catch((error) => {
          console.log(error);
          swal({
            title : "Erreur",
            text : "Veuillez vérifier les informations saisies",
            icon : "error",
            button : "OK"
          })
        }
        );
    },

    userConnected(context)
    {
      context.commit( "setConnected", true );
      context.commit( "setDisconnected", false );
    },

    userDisconnected(context)
    {
      context.commit( "setConnected", false );
      context.commit( "setDisconnected", true );
      storage.unset( "userData" );

    }
  },
  
  modules: {},
});

