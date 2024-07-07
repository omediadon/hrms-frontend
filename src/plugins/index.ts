/**
 * plugins/saas.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import saasRouter from '../router/saas'
import customerRouter from '../router/customer'
// Types
import type {App} from 'vue'

const host         = window.location.host;
const parts        = host.split('.');
const domainLength = 3; // route1.example.com => domain length = 3

const router = () => {
	if(parts.length === (domainLength - 1) || parts[0] === 'www'){
		return saasRouter;
	}
	return customerRouter;

};

export function registerPlugins(app: App){
	app
	.use(vuetify)
	.use(router())
}
