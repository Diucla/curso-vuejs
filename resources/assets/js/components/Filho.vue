<template>

    <div>

        <li v-for="(user, index) in users" >

            <a href="" @click.prevent.stop="emitClick(user)"> {{ index }} - {{ user.name }} </a>

        </li>

    </div>

</template>

<script>

    export default {

        props:['users'],

        methods:{

            emitClick(user){

//                alert(user.name)

                this.$emit('emitClick', user.name);

            }

        }

    }

</script>