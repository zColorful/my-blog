<template>
  <div class="not-comp-content">
    <div>{{ navStatus }}</div>
    <ul :class="navStatus">
      <li v-for="item in navs" :key="item.id" @click="changeNavStatus(item.id)" :class="{'select_nav': item.id == activeId}">{{ item.name }}</li>
    </ul>
    <div class="content">{{ navs[activeId - 1].content }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';


defineProps<{
  navStatus: string
}>()


interface NavModel {
  id: number
  name: string,
  content: string
}
const navs = ref<NavModel[]>([
  { id: 1, name: '首页', content: '首页的内容' },
  { id: 2, name: '导航', content: '导航的内容' },
  { id: 3, name: '我的', content: '我的内容' }
])
const activeId = ref(navs.value[0].id)
const changeNavStatus = (id: number) => {
  activeId.value = id
}
</script>

<style scoped>
.not-comp-content {
  cursor: pointer;
}
.not-comp-content ul {
  display: flex;
  align-items: center;
}
.not-comp-content ul > li {
  list-style: none;
  padding: 5px 20px;
  margin-top: 0;
  border: 1px solid #666;
  transition: all 0.3s linear;
}
.not-comp-content .after li:not(:last-of-type) {
  border-right-width: 0;
}

.not-comp-content .select_nav {
  background-color: #333;
  color: #fff;
}
</style>
