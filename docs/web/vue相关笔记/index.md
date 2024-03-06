## vue 源码工具函数

```javascript
const __DEV__ = process.env.NODE_ENV !== "production";
```

#### 空对象

```javascript
const EMPTY_OBJ = __DEV__ ? Object.freeze({}) : {};
// Object.freeze()可以冻结一个对象, 一个被冻结的对象再也不能被修改;
// 冻结了一个对象则不能向这个对象添加新的属性, 不能删除已有的属性,不能修改
// 该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。
// 此外，冻结一个对象后该对象的原型也不能被修改。

const obj = {
  prop: 42,
};
Object.freeze(obj);
obj.prop = 33;
console.log(obj.prop); // 42
// -------------------------------------------

const EMPTY_OBJ1 = Object.freeze({});
EMPTY_OBJ1.name = "DZL";
console.log(EMPTY_OBJ1.name); // undefined
```

#### NOOP 空函数

```javascript
const NOOP = () => {};

// 使用场景: 方便判断, 方便压缩
const instance = {
  render: NOOP,
};

if (instance.render !== NOOP) {
  instance.render();
}
```

#### isOn 函数

```javascript
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);

isOn("onChange"); // true
isOn("onClick"); // true
isOn("change"); // false
```

#### isModeListener 函数

```javascript
const isModelListener = (key) => key.startsWith("onUpdate:");
// startsWith 是es6提供的方法, 可以用来判断字符串是否以某个字符串开头
```

#### extend 合并对象

```javascript
const extend = Object.assign;

// 举例
// Object.assign(target, ...sources)
// target: 要合并的目标对象
// sources: 要合并的源对象
// 返回值: 返回合并后的对象
// 如果合并的有相同的属性, 则后面的属性会覆盖前面的属性
const a = { a: 1, b: 2 };
const b = { b: 3, c: 4 };
const c = extend(a, b);
```

#### remove 函数

```javascript
const remove = (arr, item) => {
  const index = arr.indexOf(item);
  if (index > -1) {
    return arr.splice(index, 1);
  }
};

// 不推荐使用, splice很消耗性能, 推荐使用链表
```

#### hasOwn 是否为自己本身拥有的属性

```javascript
// hasOwnProperty() 指示对象自身属性中是否具有指定的属性
// Object.hasOwn() 旨在替代 hasOwnProperty() 方法, 此方法不检查原型链中的属性
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);

const object1 = {
  props: "exists",
};

Object.hasOwn(object1, "prop"); // true
Obejct.hasOwn(object1, "hasOwnProperty"); // false
```

#### isArray 判断数组

```javascript
const isArray = Array.isArray;

isArray([]); // true
const fakeArr = { __proto__: Array.prototype, length: 0 };
isArray(fakeArr); // false
fakeArr instanceof Array; // true
// 所以 instanceof 这种情况 不准确
```

#### isMap 函数

```javascript
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isMap = (val) => toTypeString(val) === "[object Map]";

// 举例
const map = new Map();
map.set((val) => val + 1, "hello");
map.get((val) => val + 1); // 'hello'
isMap(map); // true
```

#### isSet 函数

```javascript
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isSet = (val) => toTypeString(val) === "[object Set]";

// 举例
const set = new Set();
set.add("hello");
set.has("hello"); // true
isSet(set); // true
```

#### isFunction 函数

```javascript
const isFunction = (val) => typeof val === "function";

// 举例
const a = () => {};
isFunction(a); // true
```

#### isObject 函数

```javascript
const isObject = (val) => val !== null && typeof val === "object";
```

#### isPlainObject 函数

```javascript
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject = (val) => toTypeString(val) === "[object Object]";

isPlainObject([]); // false
isPlainObject({}); // true
```

#### cacheStringFunction 缓存函数

```javascript
const cacheStringFunction = (fn) => {
  const cache = Object.create(null);
  return (str) => {
    return cache[str] || (cache[str] = fn(str));
  };
};
```

#### 首字母大写

```javascript
const capitalize = cacheStringFunction(
  (str) => str.charAt(0).toUpperCase() + str.slice(1)
);

// 举例
capitalize("hello"); // Hello
capitalize("change"); // Change
capitalize("click"); // Click
```

#### click -> onClick

```javascript
const toHandlerKey = cacheStringFunction((str) =>
  str ? `on${capitalize(str)}` : ``
);

toHandlerKey("click"); // onClick
toHandlerKey("change"); // onChange
```

#### hasChanged(判断是不是有变化)

```javascript
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);

// 举例
hasChanged(1, 2); // true

// Object.is() 方法判断两个值是否为同一个值，如果满足以下任意条件则两个值相等：

// 都是 undefined
// 都是 null
// 都是 true 或都是 false
// 都是相同长度、相同字符、按相同顺序排列的字符串
// 都是相同对象（意味着都是同一个对象的值引用）
// 都是数字且
// 都是 +0
// 都是 -0
// 都是 NaN
// 都是同一个值，非零且都不是 NaN
```

#### invokeArrayFns 执行数组里的函数

```javascript
const fns = [() => console.log("hello"), () => console.log("world")];

const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
// invokeArrayFns(fns, '1')
```

<js-test post-key="invokeArrayFns" />

#### isPromise 函数

```javascript
const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};

// 举例
const promise = new Promise((resolve, reject) => {
  resolve("DZL");
});
isPromise(promise); // true
```

### 传送门

[正则学习](https://juejin.cn/post/6844903487155732494)  
[es6 入门教程](https://link.juejin.cn/?target=https%3A%2F%2Fes6.ruanyifeng.com%2F%23docs%2Fstring-methods)  
[Promise](http://liubin.org/promises-book/)
