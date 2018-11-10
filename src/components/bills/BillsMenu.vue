<template>
    <nav>
        <ul>
            <li v-for="o in menus">
                <a href="#">{{ o.name }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'BillsMenu',
        data() {
            return {
                menus: [
                    {name: 'Contas a Pagar'},
                    {name: 'Contas a Receber'}
                ],
            }
        }
    }
</script>