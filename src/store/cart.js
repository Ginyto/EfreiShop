import { defineStore } from 'pinia'
import axios from 'axios'

export const useCartStore = defineStore("cart", {

    state: () => ({
        cart: [],
        qte : 0,
    }),

    getters: {
        getcart: (state) => state.cart,
        getqte: (state) => state.cart.length,
    },

    actions: {

        addProductToCart(product, userid) {

            this.cart.push({ userid: userid, product: product })
        },

        async clean() {
            console.log("clean")
            this.cart = []
            alert("Cart send")
            await axios.post('http://localhost:3000/sneak/cart', this.cart)


        }

    },

    // persist: true

})

