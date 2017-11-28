<template>

    <div>

        <hr>
        <h4>List of all Users ({{ users.length }})</h4>
        <hr>
        <filho :users="users" @emitClick="getUser()"></filho>
        <hr>
        <div class="col-md-12">

        </div>

    </div>

</template>

<script>

    let filho = require('./Filho.vue');

    export default {

        components: {filho},

        computed: {

            users() {
                return this.$store.state.users;
            },

        },



    }

</script>
<style></style>