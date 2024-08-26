<script setup>
import { reactive } from 'vue';
// 引入的组件，如果在  <template>  中使用，首字母必须大写！！！
import Header from './components/header.vue';
import Footer from './components/footer.vue'

// 下面这种方式在父子组件中传值时，不是响应式数据
// const propWeb = {
//   userNum: 10,
//   // url: "ctra.top"
// }

const propWeb = reactive({
  userNum: 10,
  url: "ctra.top"
})

const userAdd = () => {
  propWeb.userNum++
  console.log(propWeb.userNum);

}
</script>

<template>

  <Header name="ctra" url="ctra.top" />

  ctra.top
  <button @click="userAdd">
    添加用户
  </button>

  <!-- <Footer v-bind="propWeb"/> 
   下面为 v-bind 的简写形式-->
  <Footer :="propWeb"></Footer>


</template>

<style scoped></style>
