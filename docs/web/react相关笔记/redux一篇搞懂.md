## redux 一篇搞懂

### redux 的基本使用

- Redux 由 action, reducers, state, store 这 4 个部分组成, 看如下图理解一下  
  ![图片来自于redux.js.org](https://www.freecodecamp.org/news/content/images/2021/04/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26-1.gif)

#### **我们来查看 state 数据是如何更新的 UI 视图的, 如下步骤**

1. 假设我们由一个组件, 通过点击按钮来存入一些钱
2. 点击按钮的时候, 我们会去触发一个事件, Dispatch 是 Redux 给我们的一个函数, 也就是触发的这个事件

```js
import { useDispatch } from 'react-redux'

const dispatch = useDispatch()

// useDispatch.d.ts
export declare const useDispatch: <AppDispatch extends Dispatch<AnyAction> = Dispatch<AnyAction>>() => AppDispatch;

// 可以看到 useDispatch 返回了一个 AppDispatch 类型, 其中 AppDispatch 是 Dispatch 类型的子类型, 即 Dispatch<AnyAction>

// 我们看如下Dispatch<AnyAction>的代码
export interface Dispatch<A extends Action = AnyAction> {
  <T extends A>(action: T): T
}

// dispatch的类型也就是一个函数, 参数是一个Action类型的对象, 返回值是一个Action类型的对象, 实际上参数也就是 reducers 中的函数
```

dispatch 中的函数的参数如下

```js
test: (state, action) => {};

action的参数其实就是一个类型type和一个有效负载payload,
  其中type是一个字符串,
  payload是一个对象,
  它将事物组合在一起并返回新状态;
```
