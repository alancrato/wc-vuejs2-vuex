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
        name: 'ModulesComponents',

        // state application = const state to store.a
        computed: {
            count (){
                return this.$store.state.list.count;
            }
        },

        // actions application -> const actions to store.a
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