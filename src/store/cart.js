import { defineStore } from 'pinia'

export const useCartStore = defineStore("cart", {

    state: () => ({
        cart: [],
    }),

    getters: {
        getcart: (state) => state.cart,
    },

    actions: {

        addProductToCart(product) {
            this.cart.push(product)
        }

    },

    persist: true

})

