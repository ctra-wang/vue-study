<script setup>
// 子组件
/**
 * defineEmits 是 vue3 的编译时宏函数，
 * 用于子组件向父组件发送自定义事件
 */
// 定义一个名为 emits的对象，用于存储自定义事件
const emits = defineEmits(["web", "user"])
// 发送名为 web 和 user的自定义事件
emits("web", { name: "wanglei", url: "ctra.top" })
// 添加用户
const userAdd = () => {
    // 发送名为user的自定义事件
    emits("user", 10)
}
</script>

<template>
    <h3>Header</h3>

    <button @click="userAdd">添加用户</button>
</template>

<style scoped></style>