<template>
  <div id="main-admin">
    <Header />
    <Navbar />
    <div id="main-content-admin">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Header from '../components/Header.vue'
export default {
  components: { Navbar, Header },
    
}
</script>