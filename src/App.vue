<template>
  <div id="app">
    <div id="nav">
      <router-link to="/axios">axios</router-link>
      <router-link to="/emit">emit</router-link>
      <router-link to="/event">event</router-link>
      <router-link to="/mixin">mixin</router-link>
      <router-link to="/ref">ref</router-link>
      <router-link to="/routing">routing</router-link>
      <router-link to="/vuex">vuex</router-link>
      <router-link to="/watch">watch</router-link>
      <router-link to="/computed">computed</router-link>
      <router-link to="/nexttick">nextTick</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  margin-top:100px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 20px;
  text-align: center;

  a {
    text-decoration: none;
    font-weight: bold;
    color: black;
    font-size: 20px;
    padding: 20px 50px;

    &.router-link-exact-active {
      border-bottom: 3px solid #FF204B;
      color: #FF204B;

    }
  }
}
</style>
