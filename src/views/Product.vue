<template>
  <div class="h-full">
  <!-- subMenu -->
  <SubMenu/>

  <!-- Product Info -->
   <main class="container w-full max-w-5xxl px-4 xl:px-0 text-black">
     <div class="py-10 xl:pt-20 xl:pb-14 grid grid-cols-12 gap-7">
      <!-- img -->
      <div class="col-span-12 xl:col-span-8 xl:grid xl:grid-cols-8 xl:gap-7">
        <!-- Main Img -->
        <img class="w-full h-56 xl:h-120 bg-gray-400 xl:col-span-8 object-cover object-center" src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/perfume-week6/product1.jpg" alt="">
        <img class="w-full h-150 hidden xl:block xl:col-span-4 object-cover object-center" src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/perfume-week6/product1.jpg" alt="">
        <img class="w-full h-150 hidden xl:block xl:col-span-4 object-cover object-center" src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/perfume-week6/product1.jpg" alt="">
        <img class="w-full h-120 hidden xl:block xl:col-span-8 object-cover object-center" src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/perfume-week6/product1.jpg" alt="">
      </div>
       <!-- Info -->
      <div class="col-span-12 xl:col-span-4 w-full h-auto">
        <h1 class="text-3xl font-bold leading-relaxed">CHANEL N°5</h1>
        <p class="text-xl font-light mb-8">N°5，女性魅力的極致精髓。散發柔美澄透的乙醛花束香氣。經典傳奇香氛，蘊藏於極簡設計的獨特瓶身。</p>
        <p class="text-xl font-light mb-3">NT$4,980</p>
        <div class="flex">
          <select name="quantity" id="quantity" class='w-40 min-w-0 border-2 border-amber border-r-0 rounded-l pl-3  py-5 xl:pl-4 xl:py-4 placeholder-gray'>
            <option v-for='num in 10' :key="num" value="num" class="">{{num}}</option>
          </select>
          <button class="bg-amber text-white text-base font-medium w-48 px-6 py-5 xl:px-10 xl:py-4 rounded-r">加入購物車</button>
        </div>
        <div class="flex text-base mt-2 mb-10 xl:mb-20">
          <span class="material-icons text-amber">favorite</span>
          <p class="">加入我的收藏</p>
        </div>
        <section class="text-base mb-5">
          <h2 class="font-medium mb-2">商品購買須知</h2>
          <p class="font-light">產品因拍攝關係顏色可能略有差異，實際以廠商出貨為主。 商品情境照為示意用，僅商品主體不包含其他配件，請以規格內容物為主。 D’Perfume 盡可能確保所列商品備貨充足，但偶爾仍會有產品售罄的情況。如您所訂購的商品庫存不足，我們將盡快以電子郵件通知您。任何訂單變動均會在訂單總額與出貨訊息內更新。</p>
        </section>
        <section class="text-base xl:mb-0">
          <h2 class="font-medium mb-2">退換貨須知</h2>
          <p class="font-light">依《消費者保護法》的規定，於全站購物皆享有商品到貨【七日猶豫期】（含例假日）之權益。若收到的商品有任何問題，可於猶豫期內申請退貨。</p>
        </section>
      </div>
      <!-- Mobile images -->
      <div class="col-span-12 space-y-7 xl:hidden">
        <img class="w-full h-150 object-cover object-center" src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/perfume-week6/product1.jpg" alt="">
        <img class="w-full h-150 object-cover object-center" src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/perfume-week6/product1.jpg" alt="">
        <img class="w-full h-120 object-cover object-center" src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/perfume-week6/product1.jpg" alt="">
      </div>
     </div>
  </main>
  </div>
</template>

<script>
import SubMenu from '../components/SubMenu.vue'

export default {
  name: 'Product',
  components: {
    SubMenu
  },
}
</script>