/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import { createApp } from 'vue';
import App from './App.vue';

// Composables

// Plugins
// eslint-disable-next-line import/no-unresolved, import/extensions
import { registerPlugins } from '@/plugins';

const app = createApp(App);

registerPlugins(app);

app.mount('#app');
