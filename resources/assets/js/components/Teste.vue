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
        console.log('titulo', this.titulo);
        console.log('el', this.$el);
    },
    created(){
        console.log('created');
        console.log('titulo', this.titulo);
        console.log('el', this.$el);
    },
    beforeMount(){
        console.log('beforeMount');
        console.log('titulo', this.titulo);
        console.log('el', this.$el);
    },
    mounted(){
        console.log('mounted');
        console.log('titulo', this.titulo);
        console.log('el', this.$el);
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