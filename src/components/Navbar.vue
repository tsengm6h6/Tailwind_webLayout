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
          <router-link :to="nav.link" class="flex items-center">
            <span class="material-icons">{{nav.icons}}</span>
            {{nav.title ==='Cart' ? nav.title + `(3)` : nav.title }}
          </router-link>
        </li>
      </ul>

      <!-- mobile nav -->
      <div class="flex xl:hidden space-x-5">
        <button class="relative focus:outline-none">
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
        <li class="w-full h-14 bg-secondGray-dark border-b-2 border-secondGray-light text-center text-white text-xl py-4">
          <router-link to='/products' @click="navOpen = false">Product</router-link>
        </li>
        <li class="w-full h-14 bg-secondGray-dark border-b-2 border-secondGray-light text-center text-white text-xl py-4">
          <router-link to='/' @click="navOpen = false">
            Wishlist
          </router-link>
        </li>
        <li class="w-full h-14 bg-secondGray-dark border-b-2 border-secondGray-light text-center text-white text-xl py-4">
          <router-link to='/' @click="navOpen = false">
            Blog
          </router-link>
        </li>
        <li class="w-full h-14 bg-secondGray-dark border-b-2 border-secondGray-light text-center text-white text-xl py-4">
          <router-link to='/' @click="navOpen = false">
            Contact
          </router-link>
        </li>
        <li class="w-full h-14 bg-secondGray-dark text-center text-white text-xl py-4" >
          <router-link v-if="!isLogin" to='/login'  @click="navOpen = false">Log in</router-link>
          <router-link v-else to='/member'  @click="navOpen = false">Mypage</router-link>
        </li>
      </ul>
    </div>  
  </nav>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
export default {
  name: 'Navbar',
  setup(){
    const isLogin = ref(true)
    const navOpen = ref(false)
    const navList = reactive([
      { id: '1', title: 'Product', icons: 'store', link:'/products' },
      { id: '2', title: 'Log in', icons: 'person', link:'/login' },
      { id: '3', title: 'Wishlist', icons: 'favorite', link:'/products' },
      { id: '4', title: 'Cart', icons: 'shopping_cart', link:'/products' }
    ])
    return {
      navOpen,
      navList,
      isLogin
    }
  }
}
</script>