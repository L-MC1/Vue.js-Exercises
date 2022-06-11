// Pure js

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);

// Vue.js

Vue.createApp({
  data: function () {
    return {
      objetivos: [],
      OValor: "",
    };
  },
  methods: {
    addObjetivo() {
      this.objetivos.push(this.OValor);
      this.OValor = "";
    },
  },
}).mount("#app");