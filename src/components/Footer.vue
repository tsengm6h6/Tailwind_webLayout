<template>
  <footer class="bg-amber-dark text-white">
    <div class="container max-w-5xxl px-4 py-5 flex xl:justify-between xl:items-center">
      <div class="flex justify-between xl:justify-start items-center">
      <a class='mr-5 mb-2' href="#">
        <img class='w-32 h-8' src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/perfume-week6/d%E2%80%99Perfumewhite%402x.png" alt="logo">
      </a>
      <p class="text-sm font-medium">© 2020. All Rights Reserved.</p>
      </div>
      <ul class="hidden xl:flex xl:items-center space-x-10">
        <li class="text-xl font-normal">
          <router-link to='/products'>
            Product
          </router-link>
        </li>
        <li class="text-xl font-normal">
          <router-link to='/'>
            Blog
          </router-link>
        </li>
        <li class="text-xl font-normal">
          <router-link to='/'>
            Contact
          </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>