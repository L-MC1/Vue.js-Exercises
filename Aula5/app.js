const app = Vue.createApp({
  data() {
    return { 
      valorini: '',
      goals: []
    };
  },
  methods:{
    addgoal(){
      this.goals.push(this.valorini);
    }
  }
});

app.mount('#user-goals');