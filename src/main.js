// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

//INSTANCE OF VueRouter
const router = new VueRouter({
	routes : Routes,
	mode : 'history'
});

//FILTERS(GLOBAL)
Vue.filter('snippet',function(value){
	return value.slice(0,100).concat('.......');
});

Vue.directive('theme',{
	bind(el,binding,vnode) {
		if(binding.value === 'wide'){
			el.style.maxWidth = '1200px';
		}else if(binding.value === 'narrow'){
			el.style.maxWidth = '560px';
		}
		if(binding.arg === 'column'){
			el.style.background = "#ddd";
			el.style.padding = '20px';
		}
	}
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router : router
})
