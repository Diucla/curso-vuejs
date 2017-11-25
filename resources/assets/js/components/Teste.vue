<template>
	
	<div>

		<h2>Testes</h2>

        <!--<img v-bind:src="imagem" v-bind:alt="alt">-->
        <!-- ou -->
        <img :src="imagem"
             :alt="alt">

        <p :class="cor">
            Já a propriedade methods conterá um objeto com todos os métodos também disponíveis ao HTML mas não limitados a ele. Digo isso pois qualquer método contido neste objeto pode também executar os demais métodos do componente, bastando para isso utilizar o this

        </p>

	</div>	

</template>

<script>

export default{

	ready (){},

	data(){

		return{

		    imagem: "https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg",

            alt: 'VueJs image',

            cor: 'blue'

		}
		
	},

	methods:{}

}

</script>
<style>

    .blue{
        background-color: blue;
    }

    .green{
        background-color: green;
    }

</style>