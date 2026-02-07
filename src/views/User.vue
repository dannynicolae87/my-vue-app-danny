<template>
  <h1>User</h1>
  <p>Acesta este user-ul cu ID: {{ id }}</p>
</template>

<script>
export default {
  name: 'UserView',
}
</script>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.params.id
</script>
