<template>

    <div>

        <h3>Filho</h3>

        <br>

        <li v-for="(user, index) in lists" > {{ index }} - {{ user.name }} </li>

    </div>


</template>

<script>

    export default {

        mounted(){

            this.getUsers()
        },

        data(){
          return{

              lists: {}

          }
        },

        methods:{

            getUsers(){
                axios.get('/api/users')

                    .then( (response) => this.lists = response.data )

                    .catch( (error) => this.errors = error.response.data )
            },

        }

    }

</script>