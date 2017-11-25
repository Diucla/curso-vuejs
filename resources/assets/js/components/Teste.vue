<template>
	
	<div>

		<h2>Testes</h2><br>

        {{ nome }}
        {{ toUpperCase }}

        <br>
        <p :class="corFinal">testando testando testando</p>

        <button class="btn btn-primary" @click="trocaCor()">Trocar</button>

	</div>	

</template>

<script>

export default{

	data(){

		return{
		    nome: 'John Doe',
            cor: 'btn-primary'
		}
		
	},

    computed:{
	    toUpperCase(){
	        return this.nome.toUpperCase()
        },

        corFinal(){
	        return this.cor
        },

    },

    watch:{

	    nome(newValue, oldValue){
            console.log('New Value', newValue);
            console.log('Old Value', oldValue);
        }

    },

	methods: {

        trocaCor(){

            if (this.cor == 'btn-primary'){
                this.cor = 'btn-danger'
            }else{
                this.cor = 'btn-primary'
            }
        }
    }

}

</script>
<style></style>