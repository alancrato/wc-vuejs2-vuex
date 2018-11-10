<template>
    <div>
        {{count}}
        <p>
            <button @click="cartIncrement">+</button>
            <button @click="cartDecrement">-</button>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'CartComponents',

        // state application = const state to store.a
        computed: {
            count (){
                return this.$store.state.cart.items;
            }
        },

        // actions application -> const actions to store.a
        methods: {
            cartIncrement (){
                this.$store.dispatch('cartIncrement');
            },
            cartDecrement (){
                this.$store.dispatch('cartDecrement');
            }
        }
    }
</script>