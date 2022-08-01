<template>
  <header>
    <h1>More on Vue Components</h1>
  </header>
</template>

<!-- estilos com o name scoped aplicam o estilo apenas para o componete no qual estão sendo
definidos, sem o scoped o estilo fica global e é aplicado em qualquer parte da aplicação -->

<style scoped>
  header {
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #14005e;
  }

  header h1 {
    color: white;
    margin: 0;
  }
</style>