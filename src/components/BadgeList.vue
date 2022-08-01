<template>
  <section>
    <base-card>
    <h2>Available Badges</h2>
    <ul>
      <li>
        <base-badge type="admin" caption="ADMIN"></base-badge>
      </li>
      <li>
        <base-badge type="author" caption="AUTHOR"></base-badge>
      </li>
    </ul>
    </base-card>
  </section>
</template>

<!-- estilos com o name scoped aplicam o estilo apenas para o componete no qual estão sendo
definidos, sem o scoped o estilo fica global e é aplicado em qualquer parte da aplicação -->
<style scoped>
section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>