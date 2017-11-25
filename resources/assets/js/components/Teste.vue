<template>
	
	<div>

		<h2>Testes</h2><br>

        {{ nome }}
        {{ toUpperCase }}

        <br>

        <hr>
        <div :class="corFinal">
            <p>testando testando testando</p>
            <hr>
        </div>

        <button class="btn btn-primary" @click="trocaCor()">Trocar</button>

	</div>	

</template>

<script>

export default{

	data(){

		return{
		    nome: 'John Doe',
//            cor: 'btn-primary'
            cor: 'show'
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

//            if (this.cor == 'btn-primary'){
//                this.cor = 'btn-danger'
//            }else{
//                this.cor = 'btn-primary'
//            }

            if (this.cor == 'show'){
                this.cor = 'hide'
            }else{
                this.cor = 'show'
            }
        }
    }

}

</script>
<style></style>