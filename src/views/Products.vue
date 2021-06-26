<template>
  <!-- subMenu -->
  <SubMenu/>
  <!-- Product grid -->
  <main class="container w-full max-w-5xxl px-4 xl:px-0 text-black">
    <ul class="grid grid-cols-12 gap-x-4 gap-y-7 xl:gap-7 pt-10  xl:pt-20 xl:pb-16">
      <li v-for="product in products" :key="'product'+product.id" class="col-span-6 xl:col-span-3">
        <router-link to='/product/1'>
          <img class="w-full h-40 xl:h-64 object-cover object-center" :src="product.img" alt="商品圖">
        </router-link>
        <div class="flex flex-col">
          <router-link to='/product/1'>
            <h1 class="text-xl xl:text-2xl font-semibold leading-relaxed">{{product.name}}</h1>
          </router-link>
          <h2 class="text-base font-light">{{product.brand}}</h2>
          <p class="text-base font-light">{{product.price}}
            <del class="text-gray ml-2">{{product.originPrice}}</del>
          </p>
          <div class="flex space-x-2 xl:space-x-4 text-amber text-base mb-4">
            <button class="material-icons focus:outline-none hover:text-amber-light"  @click="toggleLightBox('已加入我的收藏')">favorite</button>
            <button class="material-icons focus:outline-none hover:text-amber-light"  @click="toggleLightBox('已加入購物車')">shopping_cart</button>
          </div>
        </div>
      </li>
    </ul>
  </main>
  <!-- Navigation -->
  <div class="container w-full max-w-5xxl mb-10 xl:mb-16">
    <ul class="flex justify-center items-center">
      <li v-for='page in paginator.totalPage' :key="'page'+page" 
      :class="`text-xl px-5 cursor-pointer hover:text-amber ${Number(paginator.currentPage) === Number(page)? 'text-amber-light underline': ''}`">{{page}}</li>
    </ul>
  </div>

  <Subscribe/>

   <!-- Box -->
  <div v-if="lightBox.open === true" @click="toggleLightBox('')" class="sticky inset-0 w-full min-h-screen flex justify-center items-center bg-gray bg-opacity-90">
    <p class="py-4 px-6 xl:px-52 bg-white text-amber-dark rounded cursor-pointer">
      {{lightBox.title}}
    </p>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import Subscribe from '../components/Subscribe.vue'
import SubMenu from '../components/SubMenu.vue'

export default {
  name: 'Products',
  components: {
    Subscribe,
    SubMenu
  },
  setup(){
    const brands = reactive([
      { id: '1', name: 'CHANEL'},
      { id: '2', name: 'Jo Malone'},
      { id: '3', name: 'Curology'},
      { id: '4', name: 'Dior'},
      { id: '5', name: 'Chole'},
      { id: '6', name: 'Zara'},
    ])
    const products = reactive(
      Array.from({length: 12}, (_, i) => (({
        id: i,
        img: 'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/perfume-week6/product1.jpg',
        name: 'Poppy & Barley',
        brand: 'Jo Malone',
        price: 'NT$1,380',
        originPrice: 'NT$1,580'
      })))
    )
    
    const paginator = reactive({
      totalPage: 3,
      currentPage: 1,
    })

     const lightBox = reactive({
      title: '',
      open: false
    })
    const toggleLightBox = ((title) =>{
      lightBox.title = title,
      lightBox.open = !lightBox.open
    })
    
    return {
      brands,
      products,
      paginator,
      lightBox,
      toggleLightBox
    }
  }
}
</script>