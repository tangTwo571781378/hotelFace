// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Customers from './components/Customers'
import About from './components/Abouts'

Vue.config.productionTip = false
Vue.use(VueRouter)


const router = new VueRouter({
	mode:"history",
	base:__dirname,
	routes:[
		{path:'/',component:Customers},
		{path:'/about',component:About}
	]
})
/* eslint-disable no-new */
new Vue({
  router,
  template:`
	<div id="app">
		<nav class="navbar navbar-default">
	      <div class="container">
	        <div class="navbar-header">
	          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
	            <span class="sr-only">Toggle navigation</span>
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	          </button>
	          <a class="navbar-brand" href="#">酒店管理系统</a>
	        </div>
	        <div id="navbar" class="collapse navbar-collapse">
	          <ul class="nav navbar-nav">
	            <li><router-link to="/">主页</router-link></li>
	            <li><router-link to="/about">关于我们</router-link></li>
	          </ul>
	        </div><!--/.nav-collapse -->
	      </div>
	    </nav>
		<router-view></router-view>
	</div>
	`
}).$mount("#app")
