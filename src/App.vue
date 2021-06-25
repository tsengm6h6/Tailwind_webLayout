<template>
  <div class="text-black text-xl bg-white">
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

    <!-- Hero -->
    <header class="bg-hero bg-cover bg-no-repeat">
      <div class="container max-w-5xxl w-full h-120 p-4 text-white flex flex-col justify-center items-start xl:h-216 xl:p-0 xl:grid xl:grid-cols-12 xl:gap-x-8">
        <div class="col-start-8 col-end-13 self-center">
          <h2 class="text-3xl leading-loose font-bold">Perfume your day</h2>
          <p class="text-base max-w-xl">A perfume is like a piece of clothing, a message, a way of presenting oneself a costume that according to the person who wears it.</p>
          <button class="mt-4 py-3 text-center w-full border border-white rounded-3xl font-medium max-w-xs">Shop now</button>
        </div>
      </div>
    </header>

    <main class="">
      <!-- Article -->
      <section class="container max-w-5xxl px-4 mt-10 xl:px-0 xl:mt-14">
        <div v-for="article in articles" :key="'article'+article.id"
        :class="`xl:flex ${ Number(article.id % 2) === 1? 'xl:flex-row-reverse' : 'xl:flex-row'}`">
          <!-- 圖片 -->
          <div class="xl:flex-half xl:h-138">
            <img class="w-full h-full object-cover object-center" src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/perfume-week6/index2.jpg" alt="">
          </div>
          <!-- 文字 -->
          <article class="pt-4 pb-8 xl:flex-half xl:h-138 xl:flex xl:flex-col xl:justify-center xl:items-start xl:px-28">
            <h1 class="font-bold leading-relaxed text-3xl">{{article.title}}</h1>
            <p class="mt-2 xl:pr-9">{{article.description}}</p>
            <a class="block mt-2 xl:mt-4 font-semibold text-amber-light text-base" href="#">查看更多</a>
          </article>
        </div>
      </section>

      <!-- List -->
      <section class="container max-w-5xxl px-4 xl:flex xl:px-0 xl:mt-0 xl:mb-14">
        <!-- 圖片 -->
        <div class="min-h-full xl:flex-half">
            <img class="w-full h-full object-cover object-center" src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/perfume-week6/index2.jpg" alt="">
        </div>
        <!-- 文字 -->
        <div class="pt-4 pb-8 xl:flex-half xl:flex xl:flex-col xl:justify-center xl:items-start xl:px-28 xl:pt-20">
          <ol class="mt-2">
            <li v-for="list in lists" :key="'list'+list.id" class="mb-5 font-semibold text-2xl xl:mb-14">
              {{list.id}}. <br/>
              <h2 class="font-semibold text-2xl leading-relaxed">{{list.title}}</h2>
              <p class="font-light text-base">{{list.description}}</p>
            </li>
          </ol>
          <button class="px-8 py-4 text-xl font-semibold border-2 rounded-3xl border-black text-center xl:mb-24">Plan a free online training</button>
        </div>
      </section>

      <!-- Products -->
      <section class="pt-8 pb-3 px-4 xl:py-10 xl:px-96 bg-gray-light">
        <div class="container max-w-5xxl grid grid-cols-12 xl:gap-x-8">
          <div v-for="product in products" :key="'product' + product.id" 
        :class="`col-start-1 col-span-12 flex flex-col mb-6 xl:col-start-${(Number(product.id)-1)*4 + 1} xl:col-span-4`">
            <img class="w-full h-full object-cover object-center" src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/perfume-week6/index2.jpg" alt="">
            <h3 class="font-semibold text-2xl leading-relaxed">{{product.name}}</h3>
            <p class="font-light text-base">{{product.brand}}</p>
            <span class="font-light text-base mt-1">{{product.price}}
              <del v-if='product.originPrice' class="font-light text-base text-gray">{{product.originPrice}}</del>
            </span>
          </div>
        </div>
      </section>

      <!-- Event -->
      <section class="container max-w-5xxl px-4 py-10 grid grid-cols-12 xl:py-14 xl:gap-x-8">
        <div class="col-start-1 col-span-12 xl:col-span-8 w-full h-138">
          <img class="w-full h-full object-cover object-center" src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/perfume-week6/index2.jpg" alt="">
        </div>
        <div class="col-start-1 col-span-12 xl:col-start-9 xl:col-span-4 xl:mt-20 xl:pr-4">
          <h4 class="font-bold text-3xl leading-loose">Bottle-Recycling</h4>
          <p class="font-light text-xl mb-4">Recycle your used empty bottles and be rewarded!</p>
          <p class="font-light text-base mb-4">For the past 10 years, we have collected over 800,000 bottles through Empty Bottle Recycling Campaign and planted more than 860 pine trees for a better environment.For the past 10 years, we have collected over 800,000 bottles through Empty Bottle Recycling Campaign and planted more than 860 pine trees for a better environment.</p>
          <a href="#" class="text-amber-light font-semibold text-base">查看更多</a>
        </div>
      </section>

      <!-- Subscribe -->
      <section class="bg-subscribe bg-cover bg-center bg-no-repeat">
        <div class="container max-w-5xxl px-4 pb-28 h-150 flex flex-col justify-end items-start">
          <h4 class="text-gray text-3xl font-semibold leading-relaxed xl:leading-normal mb-5">
            記得<br/>
            訂閱以獲取更多資訊！
          </h4>
          <div class="flex">
            <input class='w-full min-w-0 border-2 border-amber border-r-0 rounded-l pl-3 xl:pl-4 py-5 placeholder-gray' type="email" placeholder="Your email account">
            <button class="bg-amber text-white text-base font-medium px-6 py-5 xl:px-7 rounded-r">Subscribe</button>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-amber-dark text-white">
      <div class="container max-w-5xxl px-4 py-5 flex xl:justify-between xl:items-center">
        <div class="flex justify-between xl:justify-start items-center">
        <a class='mr-5' href="#">
          <img class='w-32 h-8' src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/perfume-week6/d%E2%80%99Perfumewhite%402x.png" alt="logo">
        </a>
        <p class="text-sm font-medium">© 2020. All Rights Reserved.</p>
        </div>
        <ul class="hidden xl:flex space-x-10">
          <li class="text-xl font-normal">Product</li>
          <li class="text-xl font-normal">Blog</li>
          <li class="text-xl font-normal">Contact</li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
export default {
  name: 'App',
  setup(){
    const navOpen = ref(false)
    const navList = reactive([
      { id: '1', title: 'Product', icons: 'store' },
      { id: '2', title: 'Log in', icons: 'person' },
      { id: '3', title: 'Wishlist', icons: 'favorite' },
      { id: '4', title: 'Cart', icons: 'shopping_cart' }
    ])
    const articles = reactive([
      { id:'1', title: 'Gabrielle CHANEL', description: '全新嗅覺體驗，花香四溢、明亮馥郁。結合茉莉、依蘭依蘭、橙花和最迷人的格拉斯晚香玉之花香，呈現出夢幻花香氣息。 極具女性特質的香奈兒嘉柏麗香水，專為光芒四射的她而生。' },
      { id:'2', title: 'Five O’clock Au Gingembre', description: '生薑與溫醇的肉桂香、紅糖的香甜摻和成一氣，溫暖微辛的氣息反倒形成一股輕煙氤氳開來，還帶點微微煙醺感漫溢在整個鼻息之間，細聞之下,又還有溫溫淡淡的木香，溫和而暖心。' },
      { id:'3', title: 'CHANEL N°5', description: 'N°5，女性魅力的極致精髓。散發柔美澄透的乙醛花束香氣。經典傳奇香氛，蘊藏於極簡設計的獨特瓶身。' }
    ])

    const lists = reactive([
      { id: '1', title: 'Levels of Preventive Maintenance Compliance', description: 'The core idea of preventative maintenance is the performance of proactive actions against unscheduled downtime in order to identify potential defects before they evolve into something more severe.'},
      { id: '2', title: 'Percentage of Planned Maintenance', description: 'The planned maintenance percentage is the total planned maintenance time in your CMMS software over a date range over the total number of hours of a service performed by the technicians.'},
      {
        id: '3', title: 'Critical percentage of planned maintenance', description: 'Calculating the critical percentage of planned maintenance will help you prioritize the most important operations that should be performed immediately.'
      }
    ])

    const products = reactive([
      {
        id: '1', name: 'Poppy & Barley', brand:'Jo Malone', price: 'NT$1,380', originPrice: 'NT$1,580'
      },
      {
        id: '2', name: 'Body Wash', brand:'Curology', price: 'NT$1,580'
      },
      {
        id: '3', name: 'Apple Cider Vinegar Capsule', brand:'Tonik', price: 'NT$1,580'
      }
    ])

    return {
      articles,
      lists,
      products,
      navOpen,
      navList
    }
  }
}
</script>