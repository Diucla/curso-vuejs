<template>
	
	<div>

		<h2>{{ titulo }}</h2><br>



        <div class="col-md-12">

        </div>

	</div>	

</template>

<script>

export default{

	data(){

		return{
		 titulo:'Aprendendo VueJs'
		}
		
	},

    beforeCreate(){
	    console.log('beforeCreate');
    },
    created(){
        console.log('created');
    },
    beforeMount(){
        console.log('beforeMount');
    },
    mounted(){
        console.log('mounted');
    },
    beforeUpdate(){
        console.log('beforeUpdate');
    },
    update(){
        console.log('update');
    },

    computed:{
    },

	methods: {}
}

</script>
<style></style>