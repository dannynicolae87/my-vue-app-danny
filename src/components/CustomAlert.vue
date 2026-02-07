<template>
  <div v-if="visible" class="alert">
    {{ props.message }}
    <button @click="close">OK</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  message: String,
})
const visible = ref(true)
function close() {
  visible.value = false
}
</script>

<style scoped>
.alert {
  width: 150px;
  height: 150px;
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #f44336;
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

button {
  margin-top: 110px;
  margin-left: 110px;
  padding: 5px 10px;
  background: rgb(14, 216, 98);
  border: none;
  color: #020101f8;
  border-radius: 5px;
  cursor: pointer;
}
</style>
