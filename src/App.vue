<template>
  <div class="text-black text-xl bg-white">
    <NavBar />
    <main>
      <landingPage />
    </main>
    <Footer/>
  </div>
</template>

<script>
import NavBar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import landingPage from './views/landingPage.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    landingPage
  }
}
</script>