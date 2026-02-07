<script setup>
import { onMounted, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import ButtonWithEmit from './components/ButtonWithEmit.vue'
import CustomAlert from './components/CustomAlert.vue'
import NavbarComponent from './components/NavbarComponent.vue'
onMounted(() => {
  document.body.style.backgroundColor = '#223344'
})
function doSomething() {
  alert('Button was clicked!')
}
const alertVisible = ref(false)
function showAlert() {
  alertVisible.value = true
}
</script>

<template>
  <NavbarComponent />
  <div class="content">
    <router-view />
  </div>
  <!-- <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
  <router-view /> -->

  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <HelloWorld />
  <ButtonWithEmit @button-clicked="doSomething" />
  <button class="btn" @click="showAlert">Show Alert</button>
  <CustomAlert v-if="alertVisible" message="This is a custom alert!" />
</template>

<style scoped>
h1 {
  color: #e30909;
}
.btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.btn:hover {
  background-color: rgb(255, 0, 0);
}
</style>

<style>
.content {
  padding: 20px;
}
</style>
