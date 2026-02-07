<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/user/1">User 1</router-link>
    <router-link to="/user/2">User 2</router-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  gap: 15px;
  background: #333;
  padding: 10px;
}
a {
  color: white;
  text-decoration: none;
}
a.router-link-active {
  font-weight: bold;
}
</style>
