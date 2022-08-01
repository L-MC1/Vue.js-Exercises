const app =Vue.createApp({
    data(){
        return {
            amigos: [
                {
                    id: 'manuel',
                    name: 'Manuel lopez',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                },
            ],
        };
    },
});

app.component('user-contato', {
    template:`
    <li>
        <h2>{{ amigo.name }}</h2>
        <button @click="showDet()">
        {{ detalhes ? 'Hide' : 'Show' }} Detalhes
        </button>
        <ul v-if="detalhes">
        <li><strong>Phone:</strong> {{ amigo.phone }}</li>
        <li><strong>Email:</strong> {{ amigo.email }}</li>
        </ul>
    </li>
        ` ,
    data(){
        return{
            detalhes: false,
            amigo:
                {
                    id: 'manuel',
                    name: 'Manuel lopez',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                }
        };
    },
    methods: {
        showDet(){
            this.detalhes = !this.detalhes;
        },
    },
});
app.mount('#app');