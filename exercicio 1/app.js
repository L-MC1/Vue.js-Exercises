Vue.createApp({
    data() {
      return {
        /// se torna global
        nome: " Lucas ",
        idade: 28,
        /// innerHtml
        img: "https://www.petz.com.br/blog/wp-content/uploads/2022/06/como-cuidar-de-um-pato-2-1280x720.jpg",
        novo: ""
        };
    },
    methods: {
      nome() {
        this.novo.push(this.nome);
      },
      idade() {
        this.novo.push(this.idade);
      },
      newage(){
        const older = parseInt(this.idade) + 5;
        return older;
      }
    }
  }).mount("#user-goal");