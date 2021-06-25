<template>
  <!-- Navbar -->
  <nav class="h-14 text-gray bg-white sticky top-0">
    <div class="container w-full h-full max-w-5xxl px-5 py-2 flex justify-between items-center xl:px-0">
      <a href="#">
        <img class='w-32 h-8' src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/perfume-week6/d%E2%80%99Perfume.png" alt="logo">
      </a>
      <!-- larger nav -->
      <ul class="hidden xl:flex text-gray text-xl space-x-8">
        <li v-for="nav in navList" :key="'nav'+ nav.id">
          <button class="flex items-center">
            <span class="material-icons">{{nav.icons}}</span>
            {{nav.title ==='Cart' ? nav.title + `(3)` : nav.title }}
          </button>
        </li>
      </ul>

      <!-- mobile nav -->
      <div class="flex xl:hidden space-x-5">
        <button class="relative">
          <div  class="material-icons">
            shopping_cart
          </div>
          <span class="bg-amber-dark w-4 h-4 rounded-full absolute -top-1.5 -right-1.5 text-xs text-white">3
          </span>
        </button>
        <button class="material-icons cursor-pointer focus:outline-none" @click="navOpen = !navOpen">menu</button>
      </div>
      <!-- mobile navlist -->
      <ul :class="`xl:hidden absolute inset-x-0 top-full transition duration-300 transform origin-top ${navOpen ? 'scale-y-100' : 'scale-y-0'}`">
        <li class="w-full h-14 bg-secondGray-dark border-b-2 border-secondGray-light text-center text-white text-xl py-4">Product</li>
        <li class="w-full h-14 bg-secondGray-dark border-b-2 border-secondGray-light text-center text-white text-xl py-4">Wishlist</li>
        <li class="w-full h-14 bg-secondGray-dark border-b-2 border-secondGray-light text-center text-white text-xl py-4">Blog</li>
        <li class="w-full h-14 bg-secondGray-dark border-b-2 border-secondGray-light text-center text-white text-xl py-4">Contact</li>
        <li class="w-full h-14 bg-secondGray-dark text-center text-white text-xl py-4">Log in</li>
      </ul>
    </div>  
  </nav>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
export default {
  name: 'Navbar',
  setup(){
    const navOpen = ref(false)
    const navList = reactive([
      { id: '1', title: 'Product', icons: 'store' },
      { id: '2', title: 'Log in', icons: 'person' },
      { id: '3', title: 'Wishlist', icons: 'favorite' },
      { id: '4', title: 'Cart', icons: 'shopping_cart' }
    ])
    return {
      navOpen,
      navList
    }
  }
}
</script>