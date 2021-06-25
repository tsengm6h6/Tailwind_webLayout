<template>
  <div class="hidden xl:block bg-amber-dark text-white text-xl">
    <ul class="container max-w-5xxl flex space-x-8 py-4">
      <li v-for="brand in brands" :key="'brand'+brand.id">
        {{brand.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'

export default {
  name: 'SubMenu',
  setup(){
    const brands = reactive([
      { id: '1', name: 'CHANEL'},
      { id: '2', name: 'Jo Malone'},
      { id: '3', name: 'Curology'},
      { id: '4', name: 'Dior'},
      { id: '5', name: 'Chole'},
      { id: '6', name: 'Zara'},
    ])

    return {
      brands
    }
  }
}
</script>