<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTopico(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  inject: ['selectTopico'],
  props: ['id', 'topicName', 'description'],
  emits: ['select-topic'],
};
</script>