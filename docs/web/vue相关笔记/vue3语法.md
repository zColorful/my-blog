## vue3 小案例

::: details 倒计时

```js
import { reactive, computed, toRefs } from 'vue'
interface stateModel {
  // 倒计时时间
  countTime: number;
  // 是否开始
  isStart: boolean;
  // 定时器变量
  timeId: ReturnType<typeof setInterval> | null;
}

interface codeParams {
  count: number;
}

export function useCode(params?: codeParams): any {
  const state = reactive({
    countTime: params?.count || 60,
    isStart: false,
    timeId: null,
  }) as stateModel;

  const getBtnText = computed(() =>
    !state.isStart ? '获取验证码' : `${state.countTime}s`
  );

  function clear(): void {
    state.timeId && window.clearInterval(state.timeId);
  }
  function stopDown(): void {
    state.isStart = false;
    clear();
    state.timeId = null;
  }

  function startDown(): void {
    if (state.isStart || !!state.timeId) {
      return;
    }
    state.isStart = true;
    state.timeId = setInterval(() => {
      if (state.countTime === 1) {
        stopDown();
        state.countTime = params?.count || 60;
      } else {
        state.countTime -= 1;
      }
    }, 1000);
  }
  return {
    startDown,
    stopDown,
    getBtnText,
    ...toRefs(state),
  };
}
```

```vue
<template>
  <div>
    <button type="button" :disabled="isStart" @click="startDown">
      {{ getBtnText }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCode } from "./useCode";

const { isStart, startDown, getBtnText } = useCode({
  count: 10,
});
</script>

<style scoped></style>
```

:::
