<template>
  <section>
    <base-card>
    <header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </header>
    <p>{{ infoText }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>

<!-- estilos com o name scoped aplicam o estilo apenas para o componete no qual estão sendo
definidos, sem o scoped o estilo fica global e é aplicado em qualquer parte da aplicação -->

<style scoped>

section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>