<template>
  <div class="text-black text-xl bg-white">
    <NavBar />
    <div>
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import NavBar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>