<template>
  <div class="v-top">
    <div class="left">
      <h1>Welcome! This is a sample app made with VueJS and Firebase</h1>
    </div>
    <div class="right">
      <ul class="nav nav-tabs">
        <li class="nav-item ml-auto">
          <router-link :to="{name: 'login'}" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'register'}" class="nav-link">Register</router-link>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <transition name="slide-fade">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    setTopHeight() {
      var $ = window.jQuery
      $('.v-top').outerHeight($(window).outerHeight())
      $(window).resize(function(){
        $('.v-top').outerHeight($(window).outerHeight())
      })
    }
  },
  mounted () {
    this.setTopHeight();
  },
}
</script>
<style scoped lang="scss">
  .v-top {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 10px;
    .left {
      display: block;
      width: 50%;
      margin-top: 15%;
    }
    .right {
      display: block;
      justify-content: center;
      width: calc(50% - 40px);
      margin-left: auto;
      margin-right: auto;
      .nav-tabs {
        border-color: #fff;
      }
      .nav-link {
        color: #343a40;
        border-width: 1px;
        border-style: solid;
        border-color: #343a40 #343a40 #343a40;
      }
      .router-link-active {
        color: #fff;
        background-color: #343a40;
        border-color: #343a40 #343a40 #343a40;
      }
    }
    .slide-fade-enter-active {
      transition: all .5s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to {
      transform: translateX(10px);
      opacity: 0;
    }
  }
</style>
