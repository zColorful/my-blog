<template>
  <div className="c-container">
    <div className="box">
      <div className="item">Buy</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.c-container {
  padding-top: 12px;
}

.box {
  display: inline-flex;
  margin: 0 24px;
  position: relative;
  width: 60px;
  height: 120px;
  justify-content: center;
  align-items: center;
  color: rgb(3, 225, 147);
}

.box::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  transition: 0.4s all ease-in-out;
  background-color: rgb(3, 225, 147);
  bottom: 0;
  z-index: -1;
}

.box:hover {
  color: white;
}

.box:hover::before {
  height: 100%;
  transition: 0.4s all ease-in-out;
}
</style>
