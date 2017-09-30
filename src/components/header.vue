<template>
	<nav>
		<ul>
			<li><router-link to="/" exact>Blog</router-link></li>
			<li><router-link to="/add" exact>Add a New Blog</router-link></li>
		</ul>
	</nav>
</template>

<script>
	export default{
		data() {
			return{

			}
		},
		methods : {

		},
		computed : {

		},
		mixins : {

		}
	}

</script>

<style scoped>
	ul{
		list-style: none;
		margin : 0;
		text-align :  center;
	}
	li{
		display: inline-block;
		margin : 0 10px;
	}
	a{
		color : #fff;
		text-decoration : none;
		padding : 6px 8px;
		border-radius: 10px;
	}
	nav {
		background: #444;
		padding: 14px 0;
		margin-bottom: 40px;
	}
	.router-link-active{
		background: #eee;
		color : #444;
	}

</style>