<template>
  <div class="v-nav" :class="navClass">
    <router-link :to="{name: 'top'}">WWWWWW</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-link navbar_nav-item">
          <router-link :to="{name: 'login'}">Login</router-link>
        </li>
        <li class="nav-link navbar_nav-item">
          <router-link :to="{name: 'register'}">Register</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navigation',
  props: {
    navClass: {
        type: String,
        default: "navbar navbar-expand-lg navbar-light bg-light"
    }
  }
}
</script>
<style scoped lang="scss">
  .v-nav {
    line-height: 70px;
    box-shadow: 5px 0px 5px #888888
  }
  .navbar_nav-item {
    padding: 0;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    color: #333;
    text-decoration: none;
    a {
      color: inherit;
      text-decoration: none;
    }
    &:active {
      color: #222;
    }
  }
</style>
