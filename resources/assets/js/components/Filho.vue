<template>

    <div>

        <h3>Filho</h3>

        <br>

        <li v-for="(user, index) in users" > {{ index }} - {{ user.name }} </li>

    </div>


</template>

<script>

    export default {

        props:['users'],

    }

</script>