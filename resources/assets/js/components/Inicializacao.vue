<template>
	
	<div>

		<h2>{{ titulo }}</h2><br>

	</div>	

</template>

<script>

export default{

    mounted() {

        this.getUsers();

    },

	data(){

		return{

		  titulo:'Inicializacao'

		}
		
	},

    methods:{
        getUsers() {
            axios.get('/api/users')

                .then( (response) => {

                    response.data.forEach( (user) =>{

                        this.$store.commit('add_users', user)

                    })
                })
        }
    }

}

</script>
<style></style>