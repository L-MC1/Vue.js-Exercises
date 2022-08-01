function getRandom(min,max){
    return Math.floor(Math.random() * (max-min)) +min;
}

const app = Vue.createApp({
    data() {
      return { 
        saudeJ: 100,
        saudeM: 100,
        round: 0,
        winner: null,
      };
    },
    watch:{
        saudeJ(value){
            if (value <= 0 && this.saudeM <= 0){
                this.winner = 'draw';
            }else if (value <= 0){
                this.winner = 'monster';
            }
        },
        saudeM(value){
            if (value <= 0 && this.saudeJ <= 0){
                this.winner = 'draw';
            }else if (value <= 0){
                this.winner = 'hero';
            }
        }
    },
    computed:{
        monstroS(){
            if (this.saudeM < 0 ){
                return { width: '0%'};
            }
            return { width: this.saudeM + '%'};
        },
        heroS(){
            if (this.saudeJ < 0 ){
                return { width: '0%'};
            }
            return { width: this.saudeJ + '%'};
        }
    },
    methods:{
        startgame(){
            this.saudeJ = 100,
            this.saudeM = 100,
            this.round = 0,
            this.winner = null
        },
      attackm(){
        this.round++;
        const attackv = getRandom(5,12);
        this.saudeM = this.saudeM - attackv;
        this.attackp();
      },
      attackp(){
        const attackv = getRandom(8,15);
        this.saudeJ = this.saudeJ - attackv;
      },
      Sattackm(){
        this.round++;
        const attackv = getRandom(10,25);
        this.saudeM = this.saudeM - attackv;
        this.attackp();
      },
      cura(){
        this.round++;
        const curav = getRandom(8,20);
        if (this.saudeJ + curav > 100){
            this.saudeJ = 100;
        }else {
            this.saudeJ += curav;
        }
        this.attackp;
      },
      surrender(){
        this.winner = 'monster';
      }
    }
  });
  
  app.mount('#game');