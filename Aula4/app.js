const app = Vue.createApp({
    data(){
        return {
            caixa1: false,
            caixa2: false,
            caixa3: false
        };
    },
    methods:{
        caixas(caixa){
            if(caixa === '1'){
                this.caixa1 = true;
            } else if(caixa === '2') {
                this.caixa2 = true;
            } else if(caixa === '3'){
                this.caixa3 =true;
            }
        }
    }
});

app.mount('#styling');