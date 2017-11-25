<template>
	
	<div>

		<h2>Testes</h2>

        <form action="https://google.com">

            <button type="submit" class="btn btn-primary" @click.prevent.stop="enviar('Sumbus')">Enviar</button>

        </form>

	</div>	

</template>

<script>

export default{

	data(){

		return{

		}
		
	},

	methods: {
	    enviar(nome){
	        alert('Enviado para '+nome);
        },
    }

}

</script>
<style></style>