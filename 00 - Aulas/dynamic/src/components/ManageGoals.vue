<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="salvar"> Salvar dados </button>
  </div>
</template>

<script>

export default {
  methods: {
    salvar(){
      const valorS = this.$ref.goal.value;
      if (valorS === ''){
        alert('valor não pode ser vazio');
      }
    }
  }
}

</script>