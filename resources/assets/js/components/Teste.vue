<template>
	
	<div>

		<h2>Testes</h2>

        <form action="">
            <label for="nome">Nome</label>
            <input id="nome" class="form-control" type="text" v-model="nome">


            <label for="tel">Telefone</label>
            <input id="tel" class="form-control" type="text" v-model="telefone">

            <br>

            <label >Deseja receber nossas novidades?</label> <br>
            <input type="radio" value="Sim" v-model="novidades">Sim
            <input type="radio" value="Não" v-model="novidades">Não


            <br><br>
            <label >Interesses</label><br>
            <input type="checkbox" value="Futebol" v-model="interesses">Futebol <br>
            <input type="checkbox" value="Formula 1" v-model="interesses">Formula 1 <br>
            <input type="checkbox" value="Corrida" v-model="interesses">Corrida <br>


            <br><br>
            <label >Como nos conheceu</label>
            <select name="" id="" v-model="conheceu">
                <option value="google">Google</option>
                <option value="tv">TV</option>
                <option value="revista">Revista</option>
            </select>

            <br><br>

            <button class="btn btn-primary">Enviar</button>



        </form>

        <hr>

        Nome: {{ nome }} <br>
        Telefone: {{ telefone }} <br>
        Interesses: {{ interesses }} <br>
        Novidades: {{ novidades }} <br>
        Conheceu: {{ conheceu }} <br>

        <hr>


	</div>	


</template>


<script>

export default{

	ready (){},

	data(){

		return{

		    nome:'',
            telefone: '',
            conheceu: '',
            interesses:[],
            novidades: ''

		}
		
	},

	methods:{


	}


}

</script>

<style></style>