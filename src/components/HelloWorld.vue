<template>
  <div>
    <h2>{{ mesaj }}</h2>
    <p>Acesta este un exemplu de componenta Vue.</p>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      mesaj: 'Salut, Vue!',
    }
  },
}
</script>

<style scoped>
h2 {
  color: #3498db;
}
p {
  font-size: 16px;
  color: #217ad4;
}
</style>
