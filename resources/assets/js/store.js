import Vuex from 'vuex'

import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({


    state: {
        users:[]
    },

    getters: {

    },

    mutations: {

        // Atribui ao State User a lista de Todos os Users de certa forma vindos da API
        add_users(state, user){

            state.users.push(user)

        },

    }


    })