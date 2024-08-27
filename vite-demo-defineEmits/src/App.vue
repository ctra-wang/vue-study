<script setup>
import { reactive, ref } from "vue";
// 导入子组件
import Header from "./components/header.vue";

// 响应式数据
const web = reactive({
  name: "wangdd",
  url: "ctra.top"
})

const user = ref(0)

// 子传父
const emitsWeb = (data) => {
  console.log("emitsWeb:", data);
  web.url = data.url
}

const emitsUser = (data) => {
  console.log("emitsUser:", data);
  user.value += data
}

</script>

<template>
  <!-- 子传父 -->
  <Header @web="emitsWeb" @user="emitsUser" />
  {{ web.name }} :{{ web.url }} -{{ user }}
</template>

<style scoped></style>
