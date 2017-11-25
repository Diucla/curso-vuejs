<template>
	
	<div>

		<h2>{{ titulo }}</h2>

        <ul>

            <li v-for="(item, index) in linguagens"> {{ index+1 }} - {{ item.nome }} </li>

        </ul>


	</div>	


</template>


<script>

export default{

	ready (){

		this.getUsers();

		this.teste()

	},

	data(){

		return{

			titulo: '',

            linguagens: [
                { nome : "javascript"},
                { nome : "PHP"},
                { nome : "Java"}
            ],
			users: []

		}
		
	},

	methods:{


	}


}

</script>

<style></style>