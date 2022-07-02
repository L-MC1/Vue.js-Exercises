const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastname: "",
      // fullname: ""
    };
  },
  watch:{
    counter(value){
      if (value > 50){
        this.counter = 0;
      }
    }
    // name(value){
    //   if(value === ''){
    //     this.fullname = '';
    //   }
    //   this.fullname = value + ' '+ this.lastname;
    // },
    // lastname(value){
    //   if(value === ''){
    //     this.fullname = '';
    //   }
    //   this.fullname = this.name + ' ' + value;
    // }
  },
  computed:{
    fullname(){
      if(this.name === '' || this.lastname === ''){
        return '';
      }
      return this.name +' '+ this.lastname;
    }
  },
  methods: {
    Sname(evento){
      this.name = evento.target.value;
    },
    add(num){
      this.counter = this.counter + num;
    },
    reduce(num){
      this.counter = this.counter - num;
    },
    resetInput(){
      this.name = '';
    }
  }
});

app.mount('#events');
