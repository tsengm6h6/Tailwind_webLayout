<template>
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
</template>

<script>
export default {
  name: 'Subscribe'
}
</script>