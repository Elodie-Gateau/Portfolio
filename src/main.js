import './assets/main.css';

import {createApp} from 'vue';
import App from './App.vue';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faSquareXmark} from '@fortawesome/free-solid-svg-icons';
library.add(faSquareXmark, faGithub, faLinkedin);
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
