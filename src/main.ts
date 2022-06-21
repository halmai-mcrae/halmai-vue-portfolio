import { createApp } from "vue";
import App from "./App.vue";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { faGithub, faLinkedinIn, faMedium } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faGithub, faLinkedinIn, faMedium, faHeart, faEnvelope)

import router from "./router";

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router);

app.mount("#app");
