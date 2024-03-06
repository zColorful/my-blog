<template>
  <div className="card">我是全局组件</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.card {
  width: 300px;
  border: 1px solid #eee;
  padding: 20px 10px;
  border-radius: 10px;
  color: #fff;
  background-image: linear-gradient(to right, #382129, #fff2ea);
  transition: all 1s linear;
  transform-style: preserve-3d;
}

.card:hover {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transform: scale(1.1) rotate(90deg);
}
</style>
