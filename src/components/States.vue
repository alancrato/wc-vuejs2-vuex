<template>
    <div>
        {{count}}
        <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'StateComponents',

        // state application = const state to store
        computed: {
            count (){
                return this.$store.state.count;
            }
        },

        // actions application -> const actions to store
        methods: {
            increment (){
                this.$store.dispatch('increment');
            },
            decrement (){
                this.$store.dispatch('decrement');
            }
        }

    }
</script>