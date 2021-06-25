<template>
  <main class="container w-full max-w-5xxl px-4 xl:px-0 text-loginGray">
    <div class="my-10">
      <!-- Member nav -->
      <nav class="mb-10">
        <ul class="flex justify-between items-center text-base font-medium">
          <li class="border-b-2 border-amber-dark">會員資料修改</li>
          <li>訂單查詢</li>
          <li>退 / 換貨申請</li>
        </ul>
      </nav>
      <!-- Member info -->
      <aside class="mb-10">
        <h3 class="flex justify-start items-center text-base mb-6">
          <span class="material-icons">person</span>
          會員編碼
          <span class="text-gray text-xl font-medium ml-2">T00020080615</span>
        </h3>
        <div class="grid grid-cols-4 gap-x-7 gap-y-4 text-base">
          <h4>購物車</h4>
          <p class="col-span-3">56</p>
          <h4>我的收藏</h4>
          <p class="col-span-3">23</p>
          <h4>完成訂單</h4>
          <p class="col-span-3">8</p>
          <h4>會員紅利</h4>
          <p class="col-span-3">2680</p>
          <h4>邀請碼</h4>
          <p class="col-span-3">TK2075</p>
        </div>
        <p class="text-sm text-secondGray">新戶輸入邀請碼即可獲贈紅利點數1000點</p>
      </aside>
      <!-- Form -->
      <form action="#">
        <section class="mb-12">
           <h1 class="text-black text-base font-medium pb-2 border-b-2 border-b-loginGray mb-4">個人資料修改</h1>
            <div class="grid grid-cols-4 gap-x-7 gap-y-4 text-base">
              <h2 class="self-center">會員帳號</h2>
              <p class="col-span-3 self-center">email@example.com</p>
              <label for="name" class="self-center">會員姓名</label>
              <input type="text" id="name" class="col-span-3 w-64 h-10 border border-loginGray-light rounded">
              <label for="tel" class="self-center">手機號碼</label>
              <input type="text" id="tel" class="col-span-3 w-64 h-10 border border-loginGray-light rounded">
              <label for="address" class="self-center">聯絡地址</label>
              <select name="country" id="country" class="col-span-3 w-44 h-10 border border-loginGray-light rounded">
                <option value="台灣及離島" selected></option>
              </select>
              <select name="city" id="city" class="col-start-2 col-span-1 w-20 h-10 border border-loginGray-light rounded">
                <option value="高雄市" selected></option>
              </select>
              <select name="district" id="district" class="col-start-3 col-span-1 w-20 h-10 border border-loginGray-light rounded">
                <option value="鹽埕區" selected></option>
              </select>
              <input type="text" id="address" class="col-start-2 col-span-3 w-64 h-10 border border-loginGray-light rounded py-2 pl-3" placeholder="請輸入地址">
              <!-- CheckBox -->
              <label for="address" class="self-center">配送地址</label>
              <select name="sendCountry" id="sendCountry" class="col-span-3 w-44 h-10 border border-loginGray-light rounded">
                <option value="台灣及離島" selected></option>
              </select>
              <select name="sendCity" id="sendCity" class="col-start-2 col-span-1 w-20 h-10 border border-loginGray-light rounded">
                <option value="高雄市" selected></option>
              </select>
              <select name="sendDistrict" id="sendDistrict" class="col-start-3 col-span-1 w-20 h-10 border border-loginGray-light rounded">
                <option value="鹽埕區" selected></option>
              </select>
              <input type="text" id="sendAddress" class="col-start-2 col-span-3 w-64 h-10 border border-loginGray-light rounded py-2 pl-3" placeholder="請輸入地址">
              <button class="col-start-2 col-span-2 bg-amber-dark text-white py-2 px-10 rounded">確定修改</button>
            </div>
        </section>
        <section>
          <h1 class="text-black text-base font-medium pb-2 border-b-2 border-b-loginGray mb-4">修改密碼</h1>
            <div class="grid grid-cols-4 gap-x-7 gap-y-4 text-base">
              <label for="oldPassword" class="self-center">舊密碼</label>
              <input type="text" id="oldPassword" class="col-span-3 w-64 h-10 border border-loginGray-light rounded">
              <label for="newPassword" class="self-center">新密碼</label>
              <input type="text" id="newPassword" class="col-span-3 w-64 h-10 border border-loginGray-light rounded">
              <label for="confirmPassword" class="self-center">確認密碼</label>
              <input type="text" id="confirmPassword" class="col-span-3 w-64 h-10 border border-loginGray-light rounded">
              <button class="col-start-2 col-span-2 bg-amber-dark text-white py-2 px-10 rounded">變更密碼</button>
            </div>
        </section>
      </form>
    </div>
  </main>
</template>