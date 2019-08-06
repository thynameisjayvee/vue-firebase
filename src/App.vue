<template>
  <div id="app">
    <header>
      <!-- <Navigation  v-show="this.$route.name != 'top' || this.$route.name == ''"></Navigation> -->
    </header>
    <main>
      <router-view/>
    </main>
    <footer></footer>
  </div>
</template>

<script>
// import Navigation from '@/components/Navigation.vue'

export default {
  name: 'App',
  components: {
    // Navigation
  }
}
</script>
