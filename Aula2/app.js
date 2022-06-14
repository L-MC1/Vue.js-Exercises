Vue.createApp({
    data() {
      return {
        /// se torna global
        goals: " Aprender a utilizar vue.js ",
        endereco: "http://vuejs.org/",
        /// innerHtml
        html: "<h2> Texto de exemplo <h2>"
        };
    },
    methods: {
      numrand(){
        const random = Math.random();
        if (random < 0.5){
          return this.goals;
        } else {
          return 'Master vue!';
        }
      }
    }
  }).mount("#user-goal");