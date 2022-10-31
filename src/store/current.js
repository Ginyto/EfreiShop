import { defineStore } from 'pinia'

export const useCurrentStore = defineStore("current", {

    state: () => ({
        current: null,

        token: null,
        
        auth : false,
    }),

    getters: {
        getcurrent: (state) => state.current,
        gettoken: (state) => state.token,
        getauth: (state) => state.auth,
    },

    actions: {

        currentUser(item) {
            this.current = item
        },

        currentToken(item) {
            this.token = item
        },

        currentAuth(item) {
            this.auth = item
        }

    },

    // persist: true

})

