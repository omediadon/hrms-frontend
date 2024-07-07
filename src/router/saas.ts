import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import HelloWorld from "@/components/layouts/SaaSLayout.vue";

const routes: RouteRecordRaw[] = [
	{
		path     : '/',
		component: HelloWorld
	}
];

const router = createRouter({
								history: createWebHistory(),
								routes,
							});
//
// router.beforeEach((to, from, next) => {
// 	const subdomain = window.location.hostname.split('.')[0];
// 	if(subdomain !== 'www'){
// 		next();
// 	} else{
// 		next('/');
// 	}
// });

export default router;
