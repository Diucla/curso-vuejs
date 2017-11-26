<template>

    <div>

        <filho :users="lists"></filho>

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

                lists: {}

            }
        },

//        Métodos
        methods: {

            getUsers() {
                axios.get('/api/users')

                    .then((response) => this.lists = response.data)

                    .catch((error) => this.errors = error.response.data)
            },

        }

    }

</script>
<style></style>