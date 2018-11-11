
const _bills = [
    {"id": 1, "name": 'Energia', "price": 10, "done": true},
    {"id": 2, "name": 'Gás', "price": 9, "done": false},
    {"id": 3, "name": 'Supermercado', "price": 8, "done": false},
    {"id": 4, "name": 'Gasolina', "price": 7, "done": false},
    {"id": 5, "name": 'Internet', "price": 6, "done": false},
    {"id": 6, "name": 'Agua', "price": 5, "done": false},
];

export default {
    getBills (bills){
        setTimeout(() => {
            bills(_bills)
        }, 1000)
    }
}