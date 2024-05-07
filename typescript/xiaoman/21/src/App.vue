<template>
  <div>{{ x }}</div>
  <button @click="x++">+</button>
  <div>{{ moment().format('YYYY-MM-DD HH:mm:ss') }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import moment from 'moment'
const x = ref<number>(456)
</script>

<style lang="less">
@red: red;
html,
body {
  background: @red;
}
</style>
