<template>
	
	<div>

		<h2>Testes</h2>

        <button class="btn" :class="btnClassEnviar" :style="btnStyleEnviar">Enviar</button>
        <button class="btn" :class="btnClassLimpar" :style="btnStyleLimpar">Limpar</button>

	</div>	

</template>

<script>

export default{

	ready (){},

	data(){

		return{
            btnClassEnviar: {
                'btn-primary': true,
                'btn-sm': true
            },
		    btnClassLimpar:[
		        'btn-danger', {'btn-lg': true}
            ],
            btnStyleEnviar: {
                'font-size' : '29px'
            },
            btnStyleLimpar: {
                'font-size' : '20px'
            }
		}
		
	},

	methods:{}

}

</script>
<style></style>