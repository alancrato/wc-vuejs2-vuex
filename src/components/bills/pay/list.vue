<template>
    <div>
        <h1>{{ title }}</h1>
        <div v-if="loading">Loading....</div>
        <ul v-else>
            <li v-for="bill in bills">
                {{bill.id}} - {{bill.name}} - {{bill.price}} - {{bill.done}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {

        name: 'BillPayListComponent',

        data(){
            return {
                title: 'Contas a Pagar',
                loading: false
            }
        },

        computed: {
            bills (){
                return this.$store.state.bills
            }
        },

        created (){
            this.loading = true;
                this.$store.dispatch('fetchBills').then(() => this.loading = false)
        }

    }
</script>