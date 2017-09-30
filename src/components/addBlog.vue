<template>
  	<div id="add-blog">
			<h2 v-if="!submitted">Add a New Blog Post</h2>
			<h2 v-if="submitted">POST SUBMITTED...KEEP POSTING!</h2>    	
			<form v-if="!submitted">
				<label>Blog Title</label>
				<input type="text" v-model.lazy="blog.title">
				<label>Blog Content</label>
				<textarea v-model.lazy="blog.content"></textarea>
				<div id="checkboxes">
					<label for="">Ninjas</label>
					<input type="checkbox" value="Ninjas" v-model="blog.categories" required>
					<label for="">Wizards</label>
					<input type="checkbox" value="Wizards" v-model="blog.categories">
					<label for="">Mario</label>
					<input type="checkbox" value="Mario" v-model="blog.categories">
					<label for="">Cheese</label>
					<input type="checkbox" value="Cheese" v-model="blog.categories">
				</div>
				<label for="">Author</label>
				<select v-model="blog.author">
					<option v-for="author in authors">{{author}}</option>
				</select>
				<p>Hello : {{blog.author}}</p>
				<button @click.prevent="handleSubmit">Add Blog</button>
			</form>
			<div v-if="submitted">
				<h3>THANKS FOR ADDING YOUR POST</h3>
			</div>
			<div id="preview">
				<h3>Preview Blog</h3>
				<p>Blog Title : {{blog.title}}</p>
				<p>Blog Content :</p>
				<p>{{blog.content}}</p>
				<p>Blog Categories : </p>
				<ul>
					<li v-for="category in blog.categories">{{category}}</li>
				</ul>
				<p>Written By : {{blog.author}}</p>
			</div>

  	</div>
</template>

<script>
	export default {
		data(){
			return {
				blog : {
					title : '',
					content : '',
					categories : [],
					author : ''
				},
				authors : [
				'Prateek Madaan',
				'Karunya Mehta',
				'Navneet Juneja',
				'Deepanshu Kumar',


				],
				submitted : false
			}
		},
		methods : {
			handleSubmit : function(){
				this.$http.post('https://vuejs-blog-application-377c1.firebaseio.com/posts.json', this.blog).then(function(data){

					console.log(data);
					this.submitted = true;
					
				});
			}
		}
	}
</script>

<style scoped>
	#add-blog *{
		box-sizing: border-box;
	}
	#add-blog{
		margin: 20px auto;
		max-width: 500px;
	}
	label {
		display: block;
		margin : 20px 0 10px;
	}
	input[type='text'],textarea{
		display: block;
		width : 100%;
	}
	#preview{
		padding : 10px 20px;
		border : 1px dotted #ccc;
		margin : 30px 0;
	}
	h3{
		margin-top: 10px;
	}
	#checkboxes {
		box-sizing: border-box;
		display: inline-block;
		margin-right : 10px;
	}
	#checkboxes label{
		display: inline-block;
	}


</style>
