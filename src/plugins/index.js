/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader';
import vuetify from './vuetify';
import pinia from '../store';
import router from '../router';

// eslint-disable-next-line import/prefer-default-export
export function registerPlugins(app) {
  loadFonts();
  app
    .use(vuetify)
    .use(router)
    .use(pinia);
}
