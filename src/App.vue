<script setup>
// import Login from "./pages/login.vue";
</script>

<template>
  <div>
    <!-- <Login /> -->
    <router-link to="/login">login</router-link>
    <router-link to="/home">home</router-link>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
