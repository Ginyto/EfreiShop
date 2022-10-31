import { defineStore } from 'pinia'

export const useSneakersStore = defineStore("sneaker", {

    state: () => ({
        sneak: null,
    }),

    getters: {
        getsneak: (state) => state.sneak,
    },

    actions: {

        currentSneaker(item) {
            this.sneak = item
        }

    },

    // persist: true

})

