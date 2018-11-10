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
        name: 'StateComponent',

        // state
        data(){
            return {
                count: 0
            }
        },

        // actions
        methods: {
            increment (){
                this.count ++
            },
            decrement (){
                this.count --
            }
        }

    }
</script>