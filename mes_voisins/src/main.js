import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the solid svg icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* import all the regular svg icons */
import { far } from '@fortawesome/free-regular-svg-icons' 

/* import all the brands svg icons */
import { fab } from '@fortawesome/free-brands-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab);

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')



