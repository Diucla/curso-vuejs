<template>

    <div>

        <hr>
        <h4>List of all Users ({{ lists.length }})</h4>
        <hr>
        <filho :users="lists" @emitClick="getUser()"></filho>
        <hr>
        <div class="col-md-12">

        </div>

    </div>

</template>

<script>

    let filho = require('./Filho.vue');

    export default {

        components: {filho},

//        Hook mounted
        mounted() {
            this.getUsers()
        },

//        Varaveis
        data() {
            return {

                lists: [],
                name:'',
                count:3

            }
        },

//        Métodos
        methods: {

            getUser(userName){

                alert('Ola  '+userName)

            },

            getUsers() {
                axios.get('/api/users')

                    .then((response) => this.lists = response.data)

                    .catch((error) => this.errors = error.response.data)
            },

        }

    }

</script>
<style></style>