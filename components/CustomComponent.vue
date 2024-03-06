<template>
  <div style="border: 1px solid #333;padding: 24px;font-size: 12px;color: #666">
    <div>你好, VitePress, 我是局部组件</div>
    <pre>{{ page }}</pre>
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
import { useData } from "vitepress";

const { page, title } = useData();
</script>

<style scoped></style>
