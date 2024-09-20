import {App} from 'vue';
import { ModuleNamespace } from 'vite/types/hot';

/**
 * Register layouts in the app instance
 *
 * @param {App<Element>} app
 */
export function registerLayouts(app: App<Element>) {
    const layouts = import.meta.glob<string, ModuleNamespace>('./*.vue', {eager: true});
  
    Object.entries(layouts).forEach(([, layout]) => {
      app.component(layout?.default?.name, layout?.default);
    });
  }