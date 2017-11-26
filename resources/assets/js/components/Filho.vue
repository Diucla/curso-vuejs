<template>

    <div>

        <li v-for="(user, index) in users" > {{ index }} - {{ user.name }} </li>

    </div>


</template>

<script>

    export default {

        props:['users']

    }

</script>