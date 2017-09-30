<template>
	<div v-theme:column="wide" id="show-blogs">
		<h1>All Blog Articles</h1>
		<input type="text" placeholder="Search Blogs" v-model="search">
		<div v-for="blog in filteredBlogs" class="single-blog">
			
			<router-link v-bind:to="'/blog/' + blog.id">			
				<h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
			</router-link>
			<article>{{blog.content | snippet}}</article>
		</div>
	</div>
</template>


<script>
import searchMixin from '../mixins/searchMixin';

	export default{
		data(){
			return {
				blogs : [],
				search : ''
			}
		},
		methods : {

		},
		created(){
			this.$http.get('https://vuejs-blog-application-377c1.firebaseio.com/posts.json').then(function(data){
				return data.json();
			}).then(function(data){
				var blogsArray = [];
				for(let key in data){
					data[key].id = key;
					blogsArray.push(data[key]);
				}
				this.blogs = blogsArray;

			})
		},
		computed : {
			
		},
		//REGISTERING FILTERS LOCALLY
		filters : {
			toUppercase(value){
				return value.toUpperCase();
			}
		},
		directives : {
			'raindbow' : {
				bind(el,binding,vnode){
					el.style.color = "#" + Math.random().toString(16).slice(2,8)
				}
			}
		},
		mixins : [

		searchMixin

		]
	}
</script>

<style>
	#show-blogs{
		max-width: 800px;
		margin: 0 auto;
	}
	.single-blog{
		box-sizing: border-box;
		padding: 20px;
		margin: 20px 0;
		background: #eee;
	}
</style>