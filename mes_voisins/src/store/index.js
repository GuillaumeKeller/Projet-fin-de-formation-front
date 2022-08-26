import { createStore } from 'vuex'
import storage from '@/utils/storage'

export default createStore({
  state: {
    isConnected: false
  },
  getters: {

  },
  mutations: 
  {
    setConnected(state, connected) 
    {
    
      state.isConnected = connected;
    }
  },
  actions: 
  {
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
  modules: {

  }
})