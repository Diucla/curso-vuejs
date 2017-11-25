<template>
	
	<div>

		<h2>Testes</h2><br>

        <ul>
            <li v-for="user in users">@{{ user.nome }}'s is <b>{{ user.area | toUpperCase() | truncate() }}</b></li>
        </ul><br>

        <form action="https://google.com">
            <button type="submit" class="btn btn-primary" @click.prevent.stop="enviar('Sumbus')">Enviar</button>
        </form>

	</div>	

</template>

<script>

export default{

	data(){

		return{

		    users:[
                { nome: 'John Doe',
                  area: 'grafic-design'},

                { nome: 'Claud Sumbus',
                  area: 'front-end'},

                { nome: 'Jose Seie',
                  area: 'back-end'}
            ]

		}
		
	},

    filters: {
	    toUpperCase(str){
	        return str.toUpperCase();
        },

        truncate(str){
	        return str.substr(0,8)+' ...';
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