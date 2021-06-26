<template>
  <div>
    <!-- SubMenu -->
    <SubMenu />
    <!-- Login Section -->
    <main class="container w-full max-w-5xxl px-4 xl:px-0 text-black">
      <div class="mt-10 mb-28 xl:my-20 grid grid-cols-12 gap-7">
        <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/perfume-week6/login1.jpg" alt="loginImage" class="col-span-12 xl:col-span-8 w-full h-56 xl:h-150 object-center object-cover">
        <div class="col-span-12 xl:col-span-4 flex flex-col justify-center items-start">
          <h1 class="text-3xl font-bold leading-relaxed mb-3">Log in</h1>
          <div class="mb-5">
            <label for="account">帳號</label>
            <input class="mt-2 py-2 pl-3 w-88 loginGray-dark placeholder-loginGray border border-loginGray-light rounded" type="email" id="account" placeholder="email@example.com">
          </div>
          <div class="mb-5">
            <label for="password">密碼</label>
            <input class="mt-2 py-2 pl-3 w-88 loginGray-dark placeholder-loginGray border border-loginGray-light rounded" type="email" id="password" placeholder="Password">
          </div>
          <div class="w-full flex justify-between items-center mt-4 xl:mt-6">
            <a class="text-amber-dark text-base font-medium" href="#">忘記密碼</a>
            <div class="flex justify-center items-center space-x-2">
              <button class="py-2 px-4 rounded border border-amber-dark text-amber focus:outline-none focus:ring-amber focus:ring-1 hover:bg-amber-light hover:text-white transition duration-300 ease-in-out">註冊</button>
              <button class="py-2 px-4 rounded bg-amber-dark text-white focus:outline-none focus:ring-1 hover:bg-amber-light transition duration-300 ease-in-out">登入</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SubMenu from '../components/SubMenu.vue'

export default {
  name: 'Login',
  components: {
    SubMenu
  }
}
</script>