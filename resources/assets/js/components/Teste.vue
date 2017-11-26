<template>
	
	<div>

		<h2>Testes</h2><br>

        <div class="col-md-12">

            <input v-model="firstName" class="form-control" type="text" placeholder="First Name"> <br>
            <input v-model="lastName" class="form-control" type="text" placeholder="Last Name">

        </div>

        <div class="col-md-12">

            Full Name : {{ fullName }}

        </div>

	</div>	

</template>

<script>

export default{

	data(){

		return{
		    firstName: '',
            lastName: '',
//            fullName:''
		}
		
	},

    computed:{
	    fullName(){
	        return this.firstName+ ' ' + this.lastName;
        }
    },

//    o watch so é acionado quando uma variavel for alterada
    watch:{
//	    firstName(newValue){
//	        this.fullName = newValue +' '+ this.lastName;
//        },
//
//        lastName(newValue){
//	        this.fullName = this.firstName + ' '+ newValue;
//        }
    },

	methods: {}
}

</script>
<style></style>