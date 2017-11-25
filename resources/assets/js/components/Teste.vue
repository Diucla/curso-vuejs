<template>
	
	<div>

<h2>Listagem</h2>

		<div v-for="user in users">
			
		</div>


	</div>	


</template>


<script>

export default{


	maunted (){

		getUsers();

	},

	data(){

		return{

			status: true,
			titulo: 'Aprendendo VueJs',
			users: []

		}
		
	},

	methods:{

		getUsers(){

			axios.get('/api/users').then(function(response){
				console.log(response);
			})

		}

	}


}

</script>

<style></style>