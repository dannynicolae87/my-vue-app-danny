<template>
  <button @click="$emit('button-clicked')">Click me!</button>
</template>
<script>
export default {
  name: 'ButtonWithEmit',
}
</script>
<style scoped>
button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: rgb(255, 0, 0);
}
</style>
