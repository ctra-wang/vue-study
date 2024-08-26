<script setup>
const props = defineProps({
   userNum: Number,
   url: {
      type: String,
      required: true,
      default: "www.baidu.com"

   }
})
console.log(props);

</script>
<template>
   <h3>foot {{ props.userNum }}</h3>
</template>



<style scoped></style>