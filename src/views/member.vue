<template>
  <div class="container w-full max-w-5xxl px-4 xl:px-0 text-loginGray">
    <div class="my-10 xl:mt-20 xl:mb-16 xl:grid xl:grid-cols-12 xl:gap-7">
      <!-- Member nav -->
      <nav class="mb-10 xl:mb-0 xl:col-span-2">
        <h3 class="hidden xl:block xl:text-secondarGray xl:text-xl xl:font-medium xl:mb-7">會員中心</h3>
        <ul class="flex justify-between items-center text-base font-medium xl:flex-col xl:items-start xl:space-y-6">
          <li class="border-b-2 border-amber-dark">會員資料修改</li>
          <li>訂單查詢</li>
          <li>退 / 換貨申請</li>
        </ul>
      </nav>
      <!-- Member info -->
      <aside class="mb-10 xl:mb-0 xl:col-start-10 xl:col-end-13">
        <div class="w-full flex items-center text-base mb-6">
          <span class="material-icons">person</span>
          <h3 class="mr-2">會員編碼</h3>
          <span class="text-gray text-xl font-medium">{{member.id}}</span>
        </div>
        <div class="text-base space-y-4">
          <div v-for="value, key, index in memberInfo" :key="index" class="flex items-center space-x-6">
            <h4>{{key}}</h4>
            <p class="col-span-3">{{value}}</p>
          </div>
        </div>
        <p class="text-sm text-secondGray">新戶輸入邀請碼即可獲贈紅利點數1000點</p>
      </aside>
      <!-- Form -->
      <main action="#" class="xl:row-start-1 xl:col-start-3 xl:col-span-7">
        <!-- 個資修改 -->
        <section class="mb-12">
          <h1 class="text-black text-base font-medium pb-2 border-b-2 border-b-loginGray mb-4">個人資料修改</h1>
          <form action="#" class="text-base space-y-6">
            <div class="flex items-center space-x-6">
              <h2 class="min-w-16">會員帳號</h2>
              <p class="flex-grow">email@example.com</p>
            </div>
            <div class="flex items-center space-x-6">
              <label class="min-w-16" for="name">會員姓名</label>
              <input class="flex-grow max-w-sm" type="text" id="name" name="name">
            </div>
            <div class="flex items-center space-x-6">
              <label class="min-w-16" for="gender">會員性別</label>
              <select name="gender" id="gender">
                <option value="female">女</option>
                <option value="male">男</option>
              </select>
            </div>
            <div class="flex items-center space-x-6">
              <label class="min-w-16" for="email">電子信箱</label>
              <input class="flex-grow max-w-sm" type="email" id="email" email="name">
            </div>
            <div class="flex items-center space-x-6">
              <label class="min-w-16" for="tel">手機號碼</label>
              <input class="flex-grow max-w-sm" type="text" id="tel" tel="name">
            </div>
            <div class="flex items-baseline space-x-6">
              <span class="min-w-16">聯絡地址</span>
              <div class="flex-grow flex flex-col items-start space-y-2">
                <select name="country" id="country">
                  <option value="taiwan">台灣及離島</option>
                </select>
                <div class="flex space-x-4">
                  <select name="city" id="city">
                    <option value="kaohsiung">高雄市</option>
                  </select>
                  <select name="district" id="district">
                    <option value="district">鹽埕區</option>
                  </select>
                </div>
                <input class="w-full max-w-sm" type="text" id="address" name="address" placeholder="請輸入地址">
                <div class="flex items-center">
                  <input type="checkbox" name="subscribeNews" id="subscribeNews" class="mr-2">
                  <label for="subscribeNews">我願意收到最新優惠情報</label>
                </div>
              </div>
            </div>
            <div class="flex items-baseline space-x-6">
              <label class="min-w-16" for="sendAddress">配送地址</label>
              <div class="flex-grow flex flex-col items-start">
                <div class="space-y-2 w-full">
                  <select name="sendCountry" id="sendCountry">
                    <option value="taiwan">台灣及離島</option>
                  </select>
                  <div class="flex space-x-4">
                    <select name="sendCity" id="sendCity">
                      <option value="kaohsiung">高雄市</option>
                    </select>
                    <select name="sendDistrict" id="sendDistrict">
                      <option value="district">鹽埕區</option>
                    </select>
                  </div>
                  <input class="w-full max-w-sm" type="text" id="sendAddress" name="sendAddress">
                </div>
                <button class="mt-4 bg-amber-dark text-white py-2 px-10 rounded">確定修改</button>
              </div>
            </div> 
          </form>
        </section>
        <!-- 密碼修改 -->
        <section>
          <h1 class="text-black text-base font-medium pb-2 border-b-2 border-b-loginGray mb-4">修改密碼</h1>
          <form action="#" class="text-base space-y-6">
            <div class="flex items-center space-x-6">
              <label for="oldPassword" class="min-w-16">舊密碼</label>
              <input class="flex-grow max-w-sm" type="text" id="oldPassword" name="oldPassword">
            </div>
            <div class="flex items-center space-x-6">
              <label for="newPassword" class="min-w-16">新密碼</label>
              <input class="flex-grow max-w-sm" type="text" id="newPassword" name="newPassword">
            </div>
            <div class="flex items-baseline space-x-6">
              <label for="confirmPassword" class="min-w-16">確認密碼</label>
              <input class="flex-grow max-w-sm" type="text" id="confirmPassword" name="confirmPassword">
            </div>
             <div class="flex items-center space-x-6">
              <div class="min-w-16"></div>
              <button class="mr-16 bg-amber-dark text-white py-2 px-10 rounded">變更密碼</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  name: 'member',
  setup(){
    const member = reactive({
      id: 'T00020080615',
      carts: 56,
      favorites: 23,
      order: 8,
      bonus: 2680,
      code: 'TK2075'
    })

    const memberInfo = reactive({
      '購物車': member.carts,
      '我的收藏': member.favorites,
      '完成訂單': member.order,
      '會員紅利': member.bonus,
      '邀請碼': member.code
    })
    
    return {
      memberInfo,
      member
    }
  }
}
</script>