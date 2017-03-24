<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: bold;
  }

  .btn {
    border-radius: 4px !important;
  }

  .menu-active {
    background: #eeeeee !important;
  }

  .menu-active > a .selected {
    display: block;
    width: 8px;
    height: 25px;
    background-image: url(./../static/image/sidebar-menu-arrow.png);
    float: right;
    position: absolute;
    right: 0px;
    top: 8px;
  }
</style>
