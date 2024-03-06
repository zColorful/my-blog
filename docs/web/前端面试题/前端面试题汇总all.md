## 前端面试题大全

::: details 1. JS 中的||和&&符号

- 相当于 or, 只要有一个为 true, 就为 true
  - 假后真前 0(为 false,假, 取后面的值) || 2
- && 相当于 and, 只要所有为 true, 就为 true
  - 假前真后 0 && 1(0 为假,取&&前面的 0) // 0 1 && 2(1 为真,取&&后面的 2)

```js
var obj = {
  name: "dzl",
  ...(isExist && {
    age: 20,
  }),
};
// isExist 为false 的时候 obj中使用name, 为true有name, age
```

:::

---

::: details Http Cache / 强缓存和协商缓存
[Http Cache / 强缓存和协商缓存](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching)
:::

---

::: details 3. js 的数据类型
es5: null, undefined, boolean, number, string  
es6: Symbol  
es10: BigInt  
引用数据类型: (本质上是由一组无需的键值对组成) Object。包含 Object、Array、 function、Date、RegExp。 JavaScript 不支持创建任何自定义类型的数据，也就是说 JavaScript 中所有值的类型都是上面 8 中之一。
:::

---

::: details 4. null 和 undefined 的区别?
相同: 在 if 语句中 null 和 undefined 都会转为 false 两者用相等运算符比较也是相等
Undefined 和 Null 都是基本数据类型, 这两个基本数据类型分别都只有一个值, 就是 undefiend 和 null.

**不同:**  
undefined 表示的含义是未定义, 定义了形参, 没有传实参, 显示 undefined  
一般变量声明了但是没有定义会返回 undefined 「var a」  
对喜庆属性名不存在时, 显示 undefined  
函数没有写返回值, 即没有写 return, 实际上在函数内部最底层会返回 undefined

null 代表的含义是空对象, 也作为对象原型链的终点  
null 主要用于赋值给一些可能会返回对象的变量, 作为初始化  
:::

---

::: details 5. 数据类型存储以及堆栈内存是什么  
基本数据类型: 直接存储在栈中, 占据空间小, 大小固定, 属于被频繁使用的数据, 如 number, string, boolean

引用数据类型: 同时存储在栈内存与堆内存中, 占据空间大, 大小不固定, 如数组, 对象, 将指针存在栈中, 将值存在堆中, 当我们把对象赋值给另外一个变量时, 复制的是对象的指针, 指向同一块内存地址
:::

---

::: details 6. 堆「heap」和栈「stack」有什么区别存储机制  
**栈:是一种连续存储的数据结构, 具有先进后出后进先出的规则**
通常的操作有如栈(压栈), 出栈和栈顶元素. 想要读取栈中的某个元素, 就是将其之间的所有元素出栈才能完成。

**堆: 是一种非连续的树形储存数据结构，具有队列优先,先进先出；** 每个节点有一个值，整棵树是经过排序的。特点是根结点的值最小（或最大），且根结点的两个子树也是一个堆。常用来实现优先队列，存取随意。
:::

---

::: details 7. 数据类型判断

```js {1-4}
**typeof 对于基本数据类型判断是没有问题的，但是遇到引用数据类型（如：Array）是不起作用**
**instanceof 运算符用于检测构造函数的prototype属性是否出现在某个实例对象的原型链上**
**instanceof 只能判断引用数据类型, 而不能判断基本数据类型**
**constructor 似乎完全可以应对基本数据类型和引用数据类型**

typeof [] // object
Array.isArray([]) // true

typeof 10 // number

typeof null // object

[] instanceof Array // true
[] instanceof Object // true
{} instanceof Object // true
function() {} instanceof Function // true


(true).constructor === Boolean // true
('str').constructor === String // true
([]).constructor === Array // true

// 判断继承关系

function Parent() {}
function Child() {}

Child.prototype = new Parent()
Child.prototype.constructor = Child

var child = new Child()
child instanceof Child // true
child instanceof Parent // true
child instanceof Object // true
Child instanceof Function // true
Function instanceof Object // true
Child instanceof Child // false
```

:::

---

::: details 8. Object.prototype.toString()

- toString() 方法返回一个表示该对象的字符串, 每个对象都有一个 toString() 方法，当该对象被表示为一个文本值时，或者一个对象以预期的字符串方式引用时自动调用。默认情况下，toString() 方法被每个 Object 对象继承。如果此方法在自定义对象中未被覆盖，toString() 返回 "[object type]"，其中 type 是对象的类型。

```js
var o = new Object()
o.toString() // [object Object]


toString()方法是可以被覆盖的,大多数类型的toString都被覆盖了,

// eg
function Dog(name, age) {
  this.name = name
  this.age = age
}

Dog.prototype.toString = function dogToString() {
  return 'dog name:' + this.name + 'age: ' + this.age
}

var dog = new Dog('小黄', 2);
dog.toString() // dog name:小黄 age: 2
```

使用 toString()检测对象类型

```
var toString = Object.prototype.toString;

toString.call(new Date); // [object Date]
toString.call(new String); // [object String]
toString.call(Math); // [object Math]

//Since JavaScript 1.8.5
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```

:::

---

::: details 9. 事件
事件类型分两种：事件捕获、事件冒泡。

事件捕获就是：网景公司提出的事件流叫事件捕获流，由外往内，从事件发生的顶点开始，逐级往下查找，一直到目标元素。

事件冒泡：IE 提出的事件流叫做事件冒泡就是由内往外，从具体的目标节点元素触发，逐级向上传递，直到根节点。

总结: 事件流的模型是自上而下捕获, 到达目标, 然后再自下而上冒泡

1. 事件捕获阶段
2. 处于目标阶段
3. 事件冒泡阶段  
   :::

---

::: details 10. vue 生命周期
![生命周期图](/assets/vue/mounted.png)

| 生命周期      | 详细解释                                                                                    | more                                                                                                     |
| ------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| beforeCreate  | 实例创建之后, 进行数据观测(data observer)和事件(event)                                      | 侦听器(watcher)的配置之前同步调用, data, computed, watch, methods 上面的方法和数据均不能访问             | 可以做一些 loading 展示, 骨架图展示                |
| created       | 实例创建完成(const vm = new Vue()),数据观测(data observer 「Object.defineProperty」和 event | watcher)事件已配置, 可访问 data, computed, watch, methods 上面的方法和数据, 未挂载 dom, 不能使用 el, ref | 可以在这个周期结束骨架图, 初始化数据, 异步请求数据 |
| beforeMount   | 在挂载开始之前调用, **render 函数**首次调用                                                 |                                                                                                          |
| mounted       | 完成挂载 dom 和渲染, 即有了 DOM 并且完成了双向绑定, 可访问 DOM 节点, $ref                   | 可以调用 echarts 获取数据并渲染, 因为 echarts 需要一个真实的 DOM 节点                                    |
| beforeUpdate  | 数据更新时调用, 虚拟 DOM 重新渲染和打补丁之前                                               | /                                                                                                        |
| updated       | 虚拟 DOM 重新渲染之后, **一定不要**在这个里面操作数据, 否则会陷入死循环                     |
| beforeDestroy | 实例销毁之前调用, 可以使用实例                                                              | 销毁定时器                                                                                               |
| destroyed     | 实例销毁之后调用                                                                            |
| nextTick      | 下一个 DOM 渲染完成之后立即执行                                                             |                                                                                                          |

### render 函数

render 函数的作用是将 h 创建的 node 节点信息 return 返回给 vue.js 底层处理文件中的**beforeMount()**钩子函数, 让其 node 节点信息在界面上渲染出来

- render 函数语法如下:

```js
render: (h, context) => h('el', {'css'}, vnodeArr)
```

:::

---

::: details 11. 跨域原因及解决
出现跨域的原因就是因为协议域名端口号不同导致的
| 当前页面 url | 被请求页面 url | 是否跨域 | 原因 |
| ---- | -----| ----- | ----- |
| http://www.test.com/ | http://www.test.com/index.html | 否 | 同源（协议、域名、端口号相同）|
| http://www.test.com/ | https://www.test.com/index.html | 跨域 | 协议不同（http/https）|
| http://www.test.com/ | http://www.baidu.com/ | 跨域 | 主域名不同（test/baidu）|
| http://www.test.com/ | http://blog.test.com/ | 跨域 | 子域名不同（www/blog）|
| http://www.test.com:8080/ | http://www.test.com:7001/ | 跨域 | 端口号不同（8080/7001）|

:::

---

::: details 12. W3C 标准盒模型和 IE 盒模型区别

- W3C 标准盒模型:  
  盒子的高度是由盒子的内容区仅由 width,height 决定的, 不包含边框, 内外边距

![标准盒模型](/assets/web/1.jpg)

```
width = content

box-sizing: content-box;
```

---

- IE 盒模型:  
  在 IE 盒模型中，盒子宽高不仅包含了元素的宽高，而且包含了元素的边框以及内边距。

![IE盒模型](/assets/web/2.jpg)

```
width = content + padding + border

box-sizing: border-box;
```

:::

---

::: details 13. querySelectAll 与 getElementsBy 系列的区别
区别如下:

1. querySelectAll 属于 W3C 中的 Selectors API 规范, 而 getElementsBy 系列属于 W3C DOM 规范
2. querySelectAll 方法接受参数是 CSS 选择符, 当传入的不符合 CSS 选择符会抛出异常, 而 getElementBy 系列则接受的参数是单一的 className, tagName 等;
3. 从返回值角度来看, querySelectAll 返回的是不变的节点列表, 而 getElementsby 系列返回的是动态的节点列表

HTMLCollection 是 HTML 元素的集合  
NodeList 是一个文档节点的集合(包含元素, 文本节点, 以及注释等)  
NodeList 和 HTMLCollection 都与数组对象有点类似, 可以使用索引来获取元素  
NodeList 和 HTMLCollection 都有 length 属性  
HTMLCollection 元素可以通过 name,id 索引来获取  
NodeList 只能通过索引来获取  
只有 NodeList 对象由包含属性节点和文本节点
:::

---

::: details 14. 判断函数是 new 调用还是普通调用

```js
1.
function Parent() {
  if (this instanceof arguments.callee) {
    console.log('new调用');
  } else {
     console.log('普通函数调用');
  }
}

2. 通过constructor
function Person() {
  if (this.constructor === arguments.callee) {
    console.log('new调用');
  } else {
    console.log('普通调用');
  }
}
let aMan = new Person() // new调用
```

:::

---

::: details 15. v-if vs v-show
**v-if**是“真实的”按照条件渲染, 因为它确保了在切换时, 条件区块内的事件监听器和自组件都会被销毁与重建

**v-if**也是惰性的, 如果在初次渲染时条件值为 false, 则不会做任何事, 条件区块只有当条件首次变为 true 时才会被渲染

相比之下, v-show 简单许多, 元素无论初始条件如何, 始终会被渲染, 只有 CSS **display**属性会被切换

总的来说, **v-if**有更高的切换开销, 而**v-show**有更高的初始渲染开销, 因此,
如果需要频繁切换, 则使用 v-show 比较好, 如果在运行时绑定条件很少改变, 则 v-if 会更合适
:::

---

:::details 16. v-if 和 v-for
当 v-if 和 v-for 同时存在于一个元素上的时候, v-if 会首先被执行

```html
// bad
<li v-for="todo in todos" v-if="!todo.isComplete">{{ todo.name }}</li>

// good
<template v-for="todo in todos">
  <li v-if="!todo.isComplete">{{ todo.name }}</li>
</template>
```

:::

---

::: details 17. 深浅拷贝

```js
const data = {
  name: "dzl",
  age: 20,
  job: {
    job1: "web",
    job2: "back",
    job3: {
      key: "嘻嘻",
    },
  },
};
```

- 浅拷贝

```js {1,35}
1. Object.assign

let newObj = Object.assign({}, data);
newObj.age = 30;
newObj.job.job3.key = '哈哈哈哈哈哈';

// data
// {
//   name: 'dzl',
//   age: 20,
//   job: {
//     job1: 'web',
//     job2: 'back',
//     job3: {
//       key: '哈哈哈哈哈哈'
//     }
//   }
// }


// newObj

// {
//   name: 'dzl',
//   age: 30,
//   job: {
//     job1: 'web',
//     job2: 'back',
//     job3: {
//       key: '哈哈哈哈哈哈'
//     }
//   }
// }

结论: Object.assign拷贝的对象的属性值只是简单类型(number, boolean, string)得到的新对象的属性值是深拷贝, 如果属性值是对象或者其他引用类型, 那么拷贝的这个属性值是浅拷贝

2. 手写浅拷贝
function shallowClone(obj) {
  const newObj = {}
  for(let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop]
    }
  }
  return newObj;
}
```

---

- 深拷贝

  - \_.cloneDeep()
  - jquery.extend()

- 使用 JSON.parse(JSON.stringify(cloneObj)), 会自动忽略拷贝对象中的函数, 对日期有半支持,忽略 undefined 类型, 忽略 key 为 symbol 类型的字段,无法保持之前的原型链

```js
const b = {
  name: "dzl",
  age: 20,
  fn: undefined,
  date: new Date(), // Mon Jun 20 2022 11:21:08 GMT+0800 (中国标准时间) {}
};

const b1 = JSON.parse(JSON.stringify(b));
console.log(b1);
// {
//   age: 20,
//   name: "dzl",
//   date: "2022-06-20T03:21:08.213Z", ISO 8601 国际标准化组织的国际标准
// }
```

---

- 手写循环递归

```js
function cloneDeep(target, map = new map()) {
  if (target === null) return null;
  if (typeof target !== "object") return target;
  // 处理正则, Date类型
  if (target.constructor === Date) return new Date(target);
  if (target.constructor === RegExp) return new RegExp(target);

  // 处理对象内的循环引用1
  if (map.has(target)) return map.get(target);

  // 保持之前的原型链
  const newTarget = new target.constructor();
  // 没有保持原型链判断
  // const newTarget = Array.isArray(target) ? [] : {}

  // 处理对象内的循环引用2
  map.set(target, newTarget);

  // for .. in .. 遍历不到Symbol类型的key, 这里使用 Reflect.ownKeys方法, 它可以遍历当前对象的所有key
  // for(let key in target) {
  //   if (target.hasOwnProperty(key)) {
  //     newTarget[key] = cloneDeep(target[key])
  //   }
  // }

  Reflect.ownKeys(target).forEach((key) => {
    // newTarget[key] = cloneDeep(target[key])
    // 处理对象内的循环引用3
    newTarget[key] = cloneDeep(target[key], map);
  });

  // 处理对象内的循环引用使用Map即可
  return newTarget;
}
```

---

```js 完整代码
function cloneDeep(target, map = new Map()) {
  if (target === null) return null;
  if (typeof target !== "object") return target;
  if (target.constructor === Date) return new Date(target);
  if (target.constructor === RegExp) return new RegExp(target);
  if (map.has(target)) return map.get(target);
  const newTarget = new target.constructor();
  map.set(target, newTarget);
  Reflect.ownKeys(target).forEach((key) => {
    newTarget[key] = cloneDeep(target[key], map);
  });
  return newTarget;
}
```

:::

---

::: details 18. 闭包

```js 闭包案例
function outer() {
  var a = "变量一";
  var inner = function () {
    console.log(a);
  };
  return inner;
}
```

---

```js

function foo() {
    var myName = "dzl"
    let test1 = 1
    const test2 = 2
    var innerBar = {
        setName:function(newName){
            myName = newName
        },
        getName:function(){
            console.log(test1)
            return myName
        }
    }
    return innerBar
}
var bar = foo()
bar.setName("lm")
bar.getName()
console.log(bar.getName())

// 流程分析
1. 当JavaScript引擎执行到foo函数的时候, 首先会编译, 并创建一个空的执行上下文
2. 在编译的过程中, 遇到内部函数setName, JavaScript引擎还会对内部函数做一下词法扫描, 发现该函数内部引用了foo函数中的myName变量, 由于是内部函数引用了外部函数的变量, 所有JS判断这是一个闭包, 于是在堆空间创建了一个对象, 用来保存被闭包使用的变量,防止变量被释放
```

作用:

- 可以读取一个函数内部的变量
- 保持函数中变量的值始终在内存中

缺点:

- 闭包会保持函数中变量的值始终在内存中, 导致内存泄漏
- 闭包会在父函数外部改变父函数内部的值
- this 的指向问题

:::

---

::: details 19. 浏览器查看原型方案

1. 实例对象.**proto**
2. ES5 中的 Object.getPrototypeOf(实例对象)
   :::

---

::: details 20. 调用 new 的过程发生了什么, 如何实现

- 语法:

```js{2,3}
new constructor((arguments))
// constructor 一个指定对象实例的类型的类或函数.
// arguments 一个用于被 constructor调用的参数列表
```

- 描述:

  1. 创建一个空的简单 JavaScript 对象 (即{})
  2. 为空对象添加属性 「**proto**」, 将该属性链接至构造函数的原型对象
  3. 将创建的对象作为 this 的上下文
  4. 如果该函数没有返回对象, 则返回 this

- 开始实现一个 new

```js
function newOperator(ctor) {
  if (typeof ctor !== "function") {
    throw "newOperator function the first param must be a function";
  }
  // ES6 new.target 是指向构造函数
  newOperator.target = ctor;
  // 1.创建一个全新的对象，
  // 2.并且执行[[Prototype]]链接
  // 4.通过`new`创建的每个对象将最终被`[[Prototype]]`链接到这个函数的`prototype`对象上。
  var newObj = Object.create(ctor.prototype);
  // ES5 arguments转成数组 当然也可以用ES6 [...arguments], Aarry.from(arguments);
  // 除去ctor构造函数的其余参数
  var argsArr = [].slice.call(arguments, 1);
  // 3.生成的新对象会绑定到函数调用的`this`。
  // 获取到ctor函数返回结果
  var ctorReturnResult = ctor.apply(newObj, argsArr);
  // 小结4 中这些类型中合并起来只有Object和Function两种类型 typeof null 也是'object'所以要不等于null，排除null
  var isObject =
    typeof ctorReturnResult === "object" && ctorReturnResult !== null;
  var isFunction = typeof ctorReturnResult === "function";
  if (isObject || isFunction) {
    return ctorReturnResult;
  }
  // 5.如果函数没有返回对象类型`Object`(包含`Functoin`, `Array`, `Date`, `RegExg`, `Error`)，那么`new`表达式中的函数调用会自动返回这个新的对象。
  return newObj;
}

// 例子
var student1 = newOperator(Student, "杜兆林", 23);
console.log(student1);
```

:::

---

::: details 21. 防抖节流理解及实现

- 防抖  
  解释: 在一定时间间隔 N 秒后才执行该事件, 在 N 秒内重复触发该事件则重新计时  
  解决的问题是 频繁的触发事件带来的高消耗性能问题, 比如以下场景

  1. 输入框的 input 事件
  2. 浏览器窗口的 resize 事件
  3. 页面滚动 scroll 事件
  4. pc 端 onmousemove 频繁移动事件

- 节流  
  解释: N 秒内只触发一次事件, 在 N 秒内重复触发只有第一次生效(类似于技能冷却)

:::

---

::: details 22. 箭头函数和普通函数的区别

- 区别:

1. 箭头函数没有自己的 this, super, arguments 和 new.target 绑定,
2. 不能使用 new 来进行构造
3. 没有原型对象
4. 不可以改变 this 的绑定
5. 形参名称不能重复

- 如何判断箭头函数的 this 指向  
  箭头函数没有自己的 this 绑定, 所以必须通过作用域链来决定 this, 如果箭头函数被非箭头函数包含, 则 this 绑定的是最近一层的 this, 否则 this 绑定的则是全局的对象

```js
var name4 = "哈哈哈哈";
var stud = {
  name4: "dzl",
  doSth4: function () {
    var arrowDoSth = () => {
      console.log(this.name4);
    };
    arrowDoSth();
  },
  arrowDoSth2: () => {
    console.log(this.name4);
  },
};

stud.doSth4(); //dzl
stud.arrowDoSth2(); // 哈哈哈哈
```

箭头函数不能通过 call, apply, bind 绑定 this, 但是可以通过 call, apply, bind 绑定箭头函数上层的 this

```js
var stud1 = {
  name: "dzl",
  doSth: function () {
    console.log(this.name);
    return () => {
      console.log("arrowFnPrint", this.name);
    };
  },
};

var person = {
  name: "person",
};

stud1.doSth().call(person); // dzl arrowFnPrint dzl
stud1.doSth.call(person)(); // person arrowFnPrint person
```

:::

---

::: details 23. event.target 和 event.currentTarget 的区别

- event.target 是当前触发事件的元素
- event.currentTarget 是绑定事件的元素
  :::

---

::: details 24. 原型原型链

- 原型

  1. 所有**引用类型**都有一个 ****proto****(隐式原型)属性, 属性值是一个普通的对象
  2. 所有**函数**都有一个**prototype(原型)**属性, 属性值是一个普通对象
  3. 所有**引用类型的**proto****属性指向它构造函数*\*\*prototype*

- 原型链  
  当访问一个对象的某个属性时, 会先在这个对象本身属性上查找, 如果没有找到, 则会去它的****proto****隐式原型上查找, 即它的构造函数的 prototype, 如果还没有找到就会再去构造函数的 prototype 的**proto**中查找, 这样一层一层的向上查找就会形成一个链式结构, 叫做原型链

```js
function Parent(month) {
  this.month = month;
}
var child = new Parent("Ann");
console.log(child.month); // Ann
console.log(child.father); // undefined
```

![属性查找顺序](/assets/js/proto.png)
:::

---

::: details 25. 微任务,宏任务,事件循环

- 宏任务(MacroTask)种类:
  script 主代码块, setTimeout, setInterval, nodejs 的 setImmediate, MessageChanel(react 的 fiber 用到), postMessage, 网络 I/O, 文件 I/O, 用户交互的回调等事件, UI 渲染事件(DOM 解析, 布局计算, 绘制)
- 微任务(MicroTask)种类:  
  浏览器端: new Promise().then 回调, MutationObserver, 监听 DOM 节点的变化 MutationObserver 使用异步+微任务的方式, Object.observer(废弃), Node.js 端: process.nextTick, new Promise().then 回调

  2): 优先级如下:  
  NodeJs 中 process.nextTick > new Promise().then 回调 > MutationObserver

---

- 浏览器事件循环
  浏览器可以理解成只有一个宏任务和一个微任务队列,  
   先执行全局的 script 代码, 执行完同步代码调用栈清空,  
   从微任务队列中依次取出所有的任务放入调用栈执行, 如果在微任务执行的时候又出现了微任务需要把微任务放到队列末端, 微任务清空后,  
   从宏任务队列中只取位于队首的任务放入调用栈中执行, 然后继续执行微任务队列中的所有的任务, 再去宏任务取一个, 以此构成了事件循环
  :::

---

::: details 26. map 和 foreach 的区别
forEach 方法会针对每一个元素执行提供函数, 该方法没有返回值, 是否会改变原数组取决于数组元素的类型是基本类型还是引用类型  
map 方法不会改变原数组的值, 返回一个新数组, 新数组中的值为原数组调用函数处理之后的值
:::

---

::: details 27. Webpack 中 Loader 和 Plugin 的区别

- Loader: 直译为"加载器", webpack 将一切文件视为模块, 但是 webpack 原生是只能解析 js 文件的, 如果想将其他的文件也打包,就会用到`loader`, 所有 Loader 的作用是让 webpack 拥有了加载和解析非 JS 文件的能力

  webpack 常用 loader 如下:

  - 样式: css-loader, style-loader, less-loader, sass-loader 等;

  ```js
  module.exports = {
    module: {
      rules: [
        {
          test: /\.scss$/,
          // use从下到上执行, 从右到左执行
          use: [
            // 把 CSS 插入到 DOM 中。
            { loader: "style-loader" },
            // css-loader 会对 @import 和 url() 进行处理，就像 js 解析 import/require() 一样。
            {
              loader: "css-loader",
              options: { sourceMap: true, modules: true },
            },
            { loader: "sass-loader", options: { sourceMap: true } },
          ],
          exclude: /node_modules/,
        },
      ],
    },
  };
  ```

  - 文件: raw-loader, file-loader, url-loader, 可以处理资源,file-loader 可以复制和放置资源位置, 并且可以指定文件名模版, 用 hash 命名更好利用缓存, url-loader 可以将小于配置 limit 大小的文件转换成内敛 Data Url 的方式, 减小请求
  - 编译: babel-loader, ts-loader 等
  - 校验测试: mocha-loader, eslint-loader 等

- Plugin: 直译为 "插件", Plugin 可以扩展 webpack 的功能, 让 wbepack 具有更多灵活性, 在 webpack 运行的生命周期中会广播出许多事件, Plugin 可以监听这些事件, 在合适的时机通过 webpack 提供的 API 改变输出结果

:::

---

::: details 28. webpack

- 构建钩子

  - entry-option: 入口操作
  - compile: 编译
  - make: 分析模块的依赖
  - build-module: 构建模块, 调用 loader 处理
  - normal-build-loader: acorn 编译构建后的 module 生成 ast 树
  - program: 处理生成的 ast 后面的依赖收集
  - seal: 封装模块
  - emit: 生成文件

- 配置:
  1. entry(入口), 意思是 webpack 从哪个文件开始打包
  2. output(输出), webpack 打包之后的文件输出到哪个地方, 如何命名
  3. loader(加载器)
  4. plugins(插件), 扩展 webpack 功能
  5. mode 模式


      - 开发模式: 仅能编译JS中的ES Module 语法
      - 生产模式: 能编译JS中的ES Module 语法, 还能压缩JS代码
  :::

---

::: details 29. 在地址栏中输入一个地址回车会发生哪些事情
1、解析 URL：首先会对 URL 进行解析，分析所需要使用的传输协议和请求的资源的路径。如果输入的 URL 中的协议或者主机名不合法，将会把地址栏中输入的内容传递给搜索引擎。如果没有问题，浏览器会检查 URL 中是否出现了非法字符，如果存在非法字符，则对非法字符进行转义后再进行下一过程。

---

2、缓存判断：浏览器会判断所请求的资源是否在缓存里，如果请求的资源在缓存里并且没有失效，那么就直接使用，否则向服务器发起新的请求。

---

3、DNS 解析： 下一步首先需要获取的是输入的 URL 中的域名的 IP 地址，首先会判断本地是否有该域名的 IP 地址的缓存，如果有则使用，如果没有则向本地 DNS 服务器发起请求。本地 DNS 服务器也会先检查是否存在缓存，如果没有就会先向根域名服务器发起请求，获得负责的顶级域名服务器的地址后，再向顶级域名服务器请求，然后获得负责的权威域名服务器的地址后，再向权威域名服务器发起请求，最终获得域名的 IP 地址后，本地 DNS 服务器再将这个 IP 地址返回给请求的用户。用户向本地 DNS 服务器发起请求属于递归请求，本地 DNS 服务器向各级域名服务器发起请求属于迭代请求。

---

4、获取 MAC 地址： 当浏览器得到 IP 地址后，数据传输还需要知道目的主机 MAC 地址，因为应用层下发数据给传输层，TCP 协议会指定源端口号和目的端口号，然后下发给网络层。网络层会将本机地址作为源地址，获取的 IP 地址作为目的地址。然后将下发给数据链路层，数据链路层的发送需要加入通信双方的 MAC 地址，本机的 MAC 地址作为源 MAC 地址，目的 MAC 地址需要分情况处理。通过将 IP 地址与本机的子网掩码相与，可以判断是否与请求主机在同一个子网里，如果在同一个子网里，可以使用 APR 协议获取到目的主机的 MAC 地址，如果不在一个子网里，那么请求应该转发给网关，由它代为转发，此时同样可以通过 ARP 协议来获取网关的 MAC 地址，此时目的主机的 MAC 地址应该为网关的地址。

---

5、TCP 三次握手： 下面是 TCP 建立连接的三次握手的过程，首先客户端向服务器发送一个 SYN 连接请求报文段和一个随机序号，服务端接收到请求后向客户端发送一个 SYN ACK 报文段，确认连接请求，并且也向客户端发送一个随机序号。客户端接收服务器的确认应答后，进入连接建立的状态，同时向服务器也发送一个 ACK 确认报文段，服务器端接收到确认后，也进入连接建立状态，此时双方的连接就建立起来了。

---

6、HTTPS 握手： 如果使用的是 HTTPS 协议，在通信前还存在 TLS 的一个四次握手的过程。首先由客户端向服务器端发送使用的协议的版本号、一个随机数和可以使用的加密方法。服务器端收到后，确认加密的方法，也向客户端发送一个随机数和自己的数字证书。客户端收到后，首先检查数字证书是否有效，如果有效，则再生成一个随机数，并使用证书中的公钥对随机数加密，然后发送给服务器端，并且还会提供一个前面所有内容的 hash 值供服务器端检验。服务器端接收后，使用自己的私钥对数据解密，同时向客户端发送一个前面所有内容的 hash 值供客户端检验。这个时候双方都有了三个随机数，按照之前所约定的加密方法，使用这三个随机数生成一把秘钥，以后双方通信前，就使用这个秘钥对数据进行加密后再传输。

---

7、返回数据： 当页面请求发送到服务器端后，服务器端会返回一个 html 文件作为响应，浏览器接收到响应后，开始对 html 文件进行解析，开始页面的渲染过程。

---

8、页面渲染： 浏览器首先会根据 html 文件构建 DOM 树，根据解析到的 css 文件构建 CSSOM 树，如果遇到 script 标签，则判端是否含有 defer 或者 async 属性，要不然 script 的加载和执行会造成页面的渲染的阻塞。当 DOM 树和 CSSOM 树建立好后，根据它们来构建渲染树。渲染树构建好后，会根据渲染树来进行布局。布局完成后，最后使用浏览器的 UI 接口对页面进行绘制。这个时候整个页面就显示出来了。

---

9、TCP 四次挥手： 最后一步是 TCP 断开连接的四次挥手过程。若客户端认为数据发送完成，则它需要向服务端发送连接释放请求。服务端收到连接释放请求后，会告诉应用层要释放 TCP 链接。然后会发送 ACK 包，并进入 CLOSE_WAIT 状态，此时表明客户端到服务端的连接已经释放，不再接收客户端发的数据了。但是因为 TCP 连接是双向的，所以服务端仍旧可以发送数据给客户端。服务端如果此时还有没发完的数据会继续发送，完毕后会向客户端发送连接释放请求，然后服务端便进入 LAST-ACK 状态。客户端收到释放请求后，向服务端发送确认应答，此时客户端进入 TIME-WAIT 状态。该状态会持续 2MSL（最大段生存期，指报文段在网络中生存的时间，超时会被抛弃） 时间，若该时间段内没有服务端的重发请求的话，就进入 CLOSED 状态。当服务端收到确认应答后，也便进入 CLOSED 状态。  
:::

---

::: details 30. TCP 协议：如何保证页面文件能被完整送达浏览器？(TCP/IP 是如何工作的)

<!-- ![UDP和TCP有什么区别](/assets/web/3.webp) -->

在衡量 Web 页面性能的时候有一个重要的指标叫“**FP（First Paint）**”，是**指从页面加载到首次开始绘制的时长**。这个指标直接影响了用户的跳出率，更快的页面响应意味着更多的 PV、更高的参与度，以及更高的转化率。那什么影响 FP 指标呢？其中一个重要的因素是**网络加载速度**。

1. **IP: 把数据包送达目的主机**

数据包在互联网上进行传输, 就要符合**网络协议: IP**标准, 类似于家庭的收获地址, A => B

如果要想把一个数据包从主机 A 发送到 B, 那么在传输之前, 数据包上会附加上主机 B 的 IP 地址信息, 这样主机 A 在传输数据的时候才能正确无误的找到主机 B, 此外还要附加上自己的 IP 信息, 方便主机 B 收到数据后回复信息给主机 A, 这些附加信息会被装进一个叫做 IP 头的数据结构中, IP 头是 IP 数据包开头的信息, 包含 IP 版本, 源 IP 地址, 目标 IP 地址, 生存时间等信息.

**当前仅有网络层步骤如下**

- 主机 A 的数据包传递到网络层(IP 层), 网络层再将 IP 头附加到数据包上, 组成新的**IP 数据包**, 并交给其他层做处理, 处理完之后交给物理层将数据包传输给主机 B 的网络层,在这里主机 B 拆开数据包的 IP 头信息, 并将拆开的数据包传递给上层, 最终主机 B 收到来自主机 A 的数据包

**UDP: 把数据包送达应用程序**
IP 只是负责把数据包传送到对方的电脑, 但是对方电脑并不知道把数据给哪个程序, 因此需要基于 IP 之上开发能和应用打交道的协议, 也就是让接收方主机知道数据应该是谁来处理, 最常见的是**用户数据包协议(User Datagram Protolcol)** 简称**UDP**

UDP 中一个最重要的信息是端口号, 端口号其实就是一个数字, 每个想访问网络的程序都需要绑定一个端口号, 通过端口号 UDP 就能把指定的数据包发送给指定的程序了, 所以**IP 通过 IP 地址信息把数据发送给指定的电脑, UDP 通过端口号把数据包分发给正确的程序进行处理**, 和 IP 头一样, 端口号会被装进 UDP 头里面, UDP 头+IP 数据包组成新的数据包, 那么**UDP/TCP 被称为传输层**

UDP 不能保证数据的可靠性, 但是传输速度却非常快, 所以 UDP 会应用在一些关注速度、但不那么严格要求数据完整性的领域，如在线视频、互动游戏等。因此需要用到 TCP, **TCP 是一种面向连接的, 可靠的, 基于字节流的传输层通信协议,TCP 提供重传机制,TCP 引入了数据包排序机制, 保证把乱序的数据包组成了一个完整的文件, TCP 执行的顺序和 UDP 一样, TCP 额外提供了用于排序的序列号, 以便接收端通过序号来重排数据包**

:::

---

::: details 31. 数组去重

```js
let arr = [1,1,"1","1",true,true,"true",{},{},"{}",null,null,undefined,undefined]

// 方法1
let uniqueOne = Array.from(new Set(arr)) console.log(uniqueOne)

// 方法2
let uniqueTwo = arr => {
  let map = new Map(); //或者用空对象 let obj = {} 利用对象属性不能重复得特性
  let brr = []
  arr.forEach( item => {
      if(!map.has(item)) { //如果是对象得话就判断 !obj[item]
          map.set(item,true) //如果是对象得话就obj[item] =true 其他一样
          brr.push(item)
      }
  })
  return brr
}
console.log(uniqueTwo(arr))

//方法3
let uniqueThree = arr => {
  let brr = []
  arr.forEach(item => {
      // 使用indexOf 返回数组是否包含某个值 没有就返回-1 有就返回下标
      if(brr.indexOf(item) === -1) brr.push(item)
      // 或者使用includes 返回数组是否包含某个值 没有就返回false 有就返回true
      if(!brr.includes(item)) brr.push(item)
  })
  return brr
}
console.log(uniqueThree(arr))

//方法4
let uniqueFour = arr => {
    // 使用 filter 返回符合条件的集合
  let brr = arr.filter((item,index) => {
      return arr.indexOf(item) === index
  })
  return brr
}
console.log(uniqueFour(arr))
```

:::

---

::: details 32. implements 和 extends 的区别

- ts 中 extends 和 es6 class 中的 extends 一样
- 可以实现类的继承 class Son extends Father {}
- 可以实现和接口 interface 的继承

```js
interface ISon extends IFather {
  sonValue: number;
}
```

- implements  
  A implements B, 可以理解为 A 上要有 B 对应的属性和方法, 不能用于两个 interface 之间  
  类似于如下

````ts
interface B {
  name: string;
  age: number;
}

let b: B = {
  name: 'd',
  age: 20
}
类似于b上面一定要有B的属性值才行
``
:::



---------------


::: details 33. 正向代理和反向代理

总结: 正向代理代理客户端, 反向代理代理服务器

- 反向代理
 反向代理, 其实客户端对目标服务器是无感知的, 因为客户端不需要任何配置就可以访问, 我们只需要将请求发送到反向代理服务器, 由反向代理服务器去选择目标服务器获取数据后,在返回给客户端, 此时反向代理服务器和目标服务器对外就是一个服务器, 暴露的是代理服务器地址, 隐藏了真实服务器IP地址

  -------------

  ![反向代理](/assets/web/5.png)

- 负载均衡, 根据所有真实服务器的负载情况, 将客户端请求分发到不同的真实服务器上

- 正向代理
  类似于VPN, 其实就是代理服务器代理了“客户端”,去和“目标服务器进行交互”,隐藏真实的客户端IP

  -------

  ![正向代理](/assets/web/4.png)

  -------


##### 总结:
1、正向代理其实是客户端的代理，帮助客户端访问其无法访问的服务器资源。反向代理则是服务器的代理，帮助服务器做负载均衡，安全防护等。

2、正向代理一般是客户端架设的，比如在自己的机器上安装一个代理软件。而反向代理一般是服务器架设的，比如在自己的机器集群中部署一个反向代理服务器。

3、正向代理中，服务器不知道真正的客户端到底是谁，以为访问自己的就是真实的客户端。而在反向代理中，客户端不知道真正的服务器是谁，以为自己访问的就是真实的服务器。

4、正向代理和反向代理的作用和目的不同。正向代理主要是用来解决访问限制问题。而反向代理则是提供负载均衡、安全防护等作用。二者均能提高访问速度。
:::


---------------

::: details 34. HTML5新增语义化标签
- 常用布局标签
  - <header /> 头部标签
  - <nav /> 导航标签
  - <main /> 主体标签
  - <article /> 独立内容标签
  - <section /> 区段标签
  - <aside /> 侧边栏标签
  - <footer /> 尾部标签

  ![1](/assets/web/6.webp)

- 多媒体标签
  - <audio />
  - <video />
  - <input type="email | url | date | time | month | week | number | range | tel | search | color" />
:::


---------------

::: details 35. CSS3新特性
[CSS3新特性](https://zhuanlan.zhihu.com/p/434788923)
:::


---------------
::: details 36. cookie, session, token区别
[cookie, session, token区别](https://www.cnblogs.com/xp1315458571/p/15001677.html)
:::

---------------

::: details 37. js every和some
- Array.every(callback) (不会改变原数组)
  every()方法为数组中的每个元素执行一次callback函数, 直到找到一个会使callback返回 false的元素, 如果发现一个这样的元素, every就会立即返回false, 否则, callback为每一个元素返回true


```js
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold)); // true


// every结合filter

const routes = [
  { path: '/', name: 'demo1' },
  { path: '/demo2', name: 'demo2' },
  { path: '/demo3', name: 'demo3' },
]
const whiteList = ['/']

// 想要的结果是去除掉routes中存在的whiteList里面的path值

const newArr = routes.filter(route => whiteList.every(item => item !== route.path))
```

- Array.some(function(element, index, array) {})
  some()为数组中的每一个元素执行一次callback函数, 直到找到一个使得callback返回的“真值(即可以转换为布尔值的值)”, 如果找到一个这样的值, some将会返回true. 否则, some返回 false, callback被调用时传入三个参数: 元素的值, 元素的索引, 被遍历的数组

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

:::

---------------

38. [运行 npm run xxx 的时候发生了什么？](https://juejin.cn/post/7078924628525056007)

---------------

::: details 39. 浏览器performance性能指标
```js

let timing = window.performance && window.performance.timing
let navigation = window.performance && window.performance.navigation

// DNS 解析：
let dns = timing.domainLookupEnd - timing.domainLookupStart

// 总体网络交互耗时：
let network = timing.responseEnd - timing.navigationStart

// 渲染处理：
let processing = (timing.domComplete || timing.domLoading) - timing.domLoading

// 可交互：
let active = timing.domInteractive - timing.navigationStart
```
:::

---------------


::: details 40. JavaScript代码执行顺序
```js
Fn()
console.log(myName)
// var 声明的变量会进行变量提升
var myName = '哈哈哈哈'
function Fn() {
    console.log('Fn执行');
}
```

![js代码执行顺序](/assets/js/jszhixing.png)

在script脚本中的代码会经历编译阶段, 将代码分为两部分, 一部分是变量提升部分的代码
```js 变量提升部分代码
var myName = undefined;
function Fn() {
  console.log('Fn执行');
}
```
```js 可执行代码
Fn()
console.log(myName);
myName = '哈哈哈哈'
```

- 第 1 行和第 2 行，由于这两行代码不是声明操作，所以 JavaScript 引擎不会做任何处理

- 第4行是var声明的, 因此js会在环境对象中创建一个myName=undefined, 这是属于声明的范围

- 第5行, js会在堆中创建一个变量指向栈中的Fn函数地址

接下来进入执行阶段
- Fn(),由于在堆中有Fn函数指向栈中的地址, 所有执行Fn函数;
- console, 当前 myName经过var变量提升, 所以当前myName为undefined;
- myName = '哈哈哈哈', 赋值给myName变量


总结: JS代码执行总是先去进行编译阶段, 接下来进入执行阶段, 在编译阶段, 变量和函数会被放到变量环境中, 由var定义的变量会被设置为undefined; 如果在编译阶段, 存在两个相同的函数, 那么最终存放在变量环境中的是最后一个
:::

---------------

::: details 41. 浏览器堆栈垃圾回收
总结一
------------------

1. 如何判断内存泄漏的？一般是感官上的长时间运行页面卡顿，猜可能会有内存泄漏。通过DynaTrace（IE）profiles等工具一段时间收集数据，观察对象的使用情况。然后判断是否存在内存泄漏。修改后验证
2. 工作中避免内存泄漏方法：确定不使用的临时变量置为null，当前es6普及场景下少使用闭包也是一种方法。

垃圾回收策略一般分为手动回收和自动回收，java python JavaScript等高级预言为了减轻程序员负担和出错概率采用了自动回收策略。JavaScript的原始类型数据和引用数据是分别存储在栈和椎中的，由于栈和堆分配空间大小差异，垃圾回收方式也不一样。栈中分配空间通过ESP的向下移动销毁保存在栈中数据；堆中垃圾回收主要通过副垃圾回收器（新生代）和主垃圾回收器（老生代）负责的，副垃圾回收器采用scavenge算法将区域分为对象区域和空闲区域，通过两个区域的反转让新生代区域无限使用下去。主垃圾回收器采用Mark-Sweep（Mark-Compact Incremental Marking解决不同场景下问题的算法改进）算法进行空间回收的。无论是主副垃圾回收器的策略都是标记-清除-整理三个大的步骤。另外还有新生代的晋升策略（两次未清除的），大对象直接分配在老生代。

-----------------

总结二
-----------------
栈和堆

栈垃圾回收
当函数执行结束，JS引擎通过向下移动ESP指针（记录调用栈当前执行状态的指针），来销毁该函数保存在栈中的执行上下文（变量环境、词法环境、this、outer）。

堆垃圾回收
一、代际假说
1、大部分对象存活时间很短
2、不被销毁的对象，会活的更久

二、分类
V8 中会把堆分为新生代和老生代两个区域，新生代中存放的是生存时间短的对象，老生代中存放的生存时间久的对象。

三、新生代
算法：Scavenge 算法
原理：
1、把新生代空间对半划分为两个区域，一半是对象区域，一半是空闲区域。
2、新加入的对象都会存放到对象区域，当对象区域快被写满时，就需要执行一次垃圾清理操作。
3、先对对象区域中的垃圾做标记，标记完成之后，把这些存活的对象复制到空闲区域中
4、完成复制后，对象区域与空闲区域进行角色翻转，也就是原来的对象区域变成空闲区域，原来的空闲区域变成了对象区域。
对象晋升策略：
经过两次垃圾回收依然还存活的对象，会被移动到老生区中。

四、老生代
算法：标记 - 清除（Mark-Sweep）算法
原理：
1、标记：标记阶段就是从一组根元素开始，递归遍历这组根元素，在这个遍历过程中，能到达的元素称为活动对象，没有到达的元素就可以判断为垃圾数据。
2、清除：将垃圾数据进行清除。
碎片：
对一块内存多次执行标记 - 清除算法后，会产生大量不连续的内存碎片。而碎片过多会导致大对象无法分配到足够的连续内存。

算法：标记 - 整理（Mark-Compact）算法
原理：
1、标记：和标记 - 清除的标记过程一样，从一组根元素开始，递归遍历这组根元素，在这个遍历过程中，能到达的元素标记为活动对象。
2、整理：让所有存活的对象都向内存的一端移动
3、清除：清理掉端边界以外的内存

优化算法：增量标记（Incremental Marking）算法
原理：
1、为了降低老生代的垃圾回收而造成的卡顿
2、V8把一个完整的垃圾回收任务拆分为很多小的任务
1、让垃圾回收标记和 JavaScript 应用逻辑交替进行
:::

---------------

::: details 42. Promise相关
1、Promise 中为什么要引入微任务？
由于promise采用.then延时绑定回调机制，而new Promise时又需要直接执行promise中的方法，即发生了先执行方法后添加回调的过程，此时需等待then方法绑定两个回调后才能继续执行方法回调，便可将回调添加到当前js调用栈中执行结束后的任务队列中，由于宏任务较多容易堵塞，则采用了微任务

2、Promise 中是如何实现回调函数返回值穿透的？
首先Promise的执行结果保存在promise的data变量中，然后是.then方法返回值为使用resolved或rejected回调方法新建的一个promise对象，即例如成功则返回new Promise（resolved），将前一个promise的data值赋给新建的promise

3、Promise 出错后，是怎么通过“冒泡”传递给最后那个捕获
promise内部有resolved_和rejected_变量保存成功和失败的回调，进入.then（resolved，rejected）时会判断rejected参数是否为函数，若是函数，错误时使用rejected处理错误；若不是，则错误时直接throw错误，一直传递到最后的捕获，若最后没有被捕获，则会报错。可通过监听unhandledrejection事件捕获未处理的promise错误
:::


---------------

:::details 43. XSS和CSRF攻击
- XSS全称 Cross Site Scriping, 为了与"CSS"区分, 故简称为XSS,叫做跨站脚本攻击, XSS攻击是指黑客往HTML文件中或者DOM中注入恶意脚本,从而在用户浏览页面时利用注入的恶意脚本堆用户实施攻击的一种手段

当页面被注入脚本时, 浏览器无法区分这些脚本是被恶意注入的还是正常的页面内容, 所以恶意注入的脚本也拥有所有的脚本权限

- 可以窃取Cookie信息, 恶意JS可以通过"document.cookie"获取Cookie信息, 然后通过XMLHttpRequest或者Fetch加上CORS功能将数据发送给恶意服务器, 恶意服务器拿到用户的Cookie信息之后, 就可以在其他电脑上模拟用户的登录

- 可以监听用户行为, 恶意JS可以使用"addEventListener"接口来监听键盘事件. 比如可以获取用户输入的信用卡信息, 将其发送到恶意服务器

- 可以通过修改DOM伪造假的登录窗口, 用来欺骗用户输入用户名和密码一些关键信息

恶意脚本注入的方式分为几种
- 存储型XSS攻击, 反射型XSS攻击和基于DOM的XSS攻击三种方式

  - 存储型
    首先利用网站漏洞将一段恶意JS代码提交到网站的数据库中, 然后用户请求了包含恶意脚本的页面, 那么恶意脚本就可以拿到你的Cookie信息或者做一下非正常的操作
  - 反射型
    恶意JS脚本属于用户发给网站请求中的一部分, 随后网站又把恶意JS脚本返回给用户, 当恶意JS脚本在用户页面中被执行时, 黑客就可以利用该脚本做一些恶意操作, WEB服务器不会存储反射型XSS攻击的恶意代码

  解决方法: 不要相信用户输入的任何内容, 所有的内容在前端过滤一遍之后,在服务器端也需要做特俗字符过滤或者转码

  使用CSP内容安全策略,在网页中, 这样的策略通过 HTTP 头信息或者 meta 元素定义。CSP虽然提供了强大的安全保护, 但是他也造成了如下问题：Eval及相关函数被禁用,内嵌的JavaScript代码将不会执行,只能通过白名单来加载远程脚本。

  设置HttpOnly, 也是也就是浏览器端的Cookie只能在使用HTTP请求过程中使用, 无法通过JS读取Cookie

- CSRF攻击全称是Cross-Site request forgery, 所以有叫做跨站请求伪造, CSRF攻击不需要将恶意代码注入用户的页面, 仅仅是利用服务器的漏洞和用户的登录状态来进行攻击, 如诱导用户点击某链接某图片地址

通常CSRF攻击是从第三方站点发起的, 要防止CSRF攻击, 我们最好能实现从第三方站点发送请求时禁止Cookie的发送, 可以通过SameSite属性解决

- SameSite选项通常有Strict, Lax, None三个值
  - Strict最为严格, 意思是浏览器会完全禁止第三方Cookie,只会在当前站点请求才会携带Cookie
  - Lax, 在跨站点的情况下, 从第三方站点的链接打开和从第三方站点提交Get方式的表单这两种方式都会携带Cookie, 但是如果在第三方站点使用Post方法, 或者通过img, iframe,等标签加载的URL, 这些场景都不会携带Cookie
  - None在任何情况下都会发送Cookie数据

- 验证请求的来源站点  Referer
  由于CSRF大多数是来自于第三方站点, 因此服务器可以禁止来自第三方站点的请求, 可以通过HTTP请求头的一个字段去判断, Referer记录了该http请求的来源地址, 比如某银行的转账时通过用户访问“http://bank.test/test?page=10&userID=101&money=10000”页面完成的, 用户必须登录band.test, 然后通过点击页面上的按钮来触发转账事件, 当用户点击提交的时候,该请求的referer值时转账按钮所有页面的URL, 也就等于说是如果攻击者要对银行网站实施CSRF攻击，他只能在自己的网站构造请求，当用户通过攻击者的网站发送请求到银行时，该请求的Referer是指向攻击者的网站。因此，要防御CSRF攻击，银行网站只需要对于每一个转账请求验证其Referer值，如果是以bank. test开头的域名，则说明该请求是来自银行网站自己的请求，是合法的。如果Referer是其他网站的话，就有可能是CSRF攻击，则拒绝该请求。

- CSRF Token
  也就是在浏览器向服务器发起请求的时候, 服务器生成一个CSRF Token, 也就是一个唯一值字符串返回给浏览器, 在浏览器端请求接口的时候带上这个token, 这样如果是第三方站点发出的请求,就不会有这个token
:::


---------------


::: details 44. CSS像素、设备像素、设备独立像素、dpr、ppi 之间的区别
#### 问题思考:
iPhone 6 的分辨率是 750 x 1334 像素，然而我们我们在写 css 的时候是以 375 x 667 来调的；

为什么我们做的一个网页在 pc 端可以正常显示，在移动端也可以正常显示，但是有时候又不正常显示；

我们如果在 pc 端把浏览器的宽度调到只有 200px 宽，里面写一个 100px 宽的 div ，然后再调整浏览器的放大为 200%，然后这个 div 可以充满整个显示器。


#### DP(device pixels)
  - 设备像素也被称为物理像素, 它表示显示设备的真实像素, 此  像素是设备的固有属性，也就是说，从出厂的那一刻，设备像素已经固定，不会再发生改变。单位pt。

#### 分辨率
  - 通常使用分辨率来描述设备像素，例如1920*1080，表示设备横向有1920个像素点，纵向有1080个像素点。

#### PPI(pixels per inch)
  - 每英寸像素取值，更确切的说法应该是像素密度，也就是衡量单位物理面积内拥有像素值的情况。已知屏幕分辨率和主对角线的尺寸，则ppi等于以iphone 6为例：

-------

![iphone6](/assets/web/ihone.webp)

--------

![计算](/assets/web/jisuan.webp)

----------

``` js
var 斜边尺寸 = V(1920^2+1080^2) V代表开根号
var ppi = 斜边尺寸/5.5
ppi = 401ppi
```

--------

我们知道，ppi越高，每英寸像素点越多，图像越清晰；我们可以类比物体的密度，密度越大，单位体积的质量就越大，ppi越高，单位面积的像素越多。


#### DIP(device independent Pixel)
  设备独立像素, 也称为逻辑像素, 简称dip,查看如下
``` js
screen.width
screen.height
```
随着技术的进步，很小的屏幕能容纳很高的物理像素，比如1920*1080以前只能应用于大的显示器，现在可能被容纳于一个小的移动端设备中。如果我们直接使用物理像素，看如下代码：
``` css
div {
  width:200px;
  height:100px;
}
```

比如 iphone3和iphone4, 屏幕尺寸一样, 后者的像素密度是前者的两倍, 如果使用物理像素做单位, 那么div的宽度视觉上iphone4是iphone3的一半, 要想在不同的设备上都能显示正常, 因此操作系统定义设备独立像素, 用设备独立像素定义的尺寸, 不管屏幕的参数如何,都能正常显示,iphone3的物理像素是320*480, iphone4的物理像素是640*960, 但是他们的设备独立像素都是320*480, iPhone4用4个物理像素表示1个设备独立像素（横向2个物理像素表示1个设备独立像素，纵向2个物理像素表示一个设备独立像素），这一切都是由操作系统控制。


#### dpr(device pixels ratio)
设备像素比dpr描述的是未缩放状态下, 设备像素和设备独立像素的比例关系。在JS中可以通过window.devicePixelRatio获取。

:::


---------------


::: details 45. 为什么浏览器network可以看到https传输的数据
#### 网站用的是https抓包是明文传输，为什么能看到https报文的明文？

- https其实就是 http + SSL/TLS 两种协议的合体。http协议是应用层协议，而SSL/TLS是传输层协议。

- https(ssl)加密是发生在应用层与传输层之间，所以在传输层看到的数据才是经过加密的，而我们捕捉到的http post，是应用层的数据，此时还没有经过加密。这些明文信息，其实就是你的本地数据。


:::


::: details 46. 给一个数组 ["14:02", "9:00", "11:40"]求平均时间

```js
var arr = ['8:01', '9:30', '11:50']

let res = 0;
arr.forEach(el => {
  res += new Date('2022/01/01 ' + el).getTime()
})
const aveNum = new Date(res / arr.length)
console.log(`${aveNum.getHours()}:${aveNum.getMinutes()}`);

```
:::



::: details 47. Vue的Diff算法,响应式原理, MVVM/MVC简述
![Vue的Diff算法简述](/assets/vue/diff.png)

1. 当数据发生变化的时候，会触发setter，然后通过Dep类的notify方法去通知所有的订阅者Watcher，订阅者会调用patch方法。

-------------

2. patch方法会通过sameVnode方法来判断当前同层的虚拟节点是否是同一种类型的节点，如果是则调用patchVnode方法，不是则直接替换成新的节点。

-------------


3. 如果是同一类型的节点，patchVnode会首先找到节点对应的真实DOM，然后判断新旧节点是否是指向的同一个对象，如果是则直接return。如果不是则判断文本节点是否相等，不相等则将真实DOM的文本节点改为新节点的文本内容，然后看旧节点和新节点的子节点的关系，如果旧的有新的没有，则删除真实DOM的子节点，如果信有旧没有，则将虚拟节点真实化之后，添加上去，如果二者都有子节点则执行updateChildren函数比较子节点。

-------------

4. updateChildren方法的核心对比思路就是通过首尾指针的方法进行对比。

-------------

**Vue的响应式原理**

vue会遍历data数据对象，使用Object.definedProperty()将每个属性都转换为getter和setter，每个Vue组件实例都有一个对应的watcher实例，在组件初次渲染的时候会记录组件用到了那些数据，当数据发生改变的时候，会触发setter方法，并通知所有依赖这个数据的watcher实例调用update方法去触发组件的compile渲染方法，进行渲染数据。

-----------

**MVC架构**
首先MVC指的是Model-View-Controller，分别代表着模型层、视图层、控制器。

----------

Model（模型层），主要管理的是业务模型的数据和处理数据的逻辑。

----------

View（视图层）主要是接收用户的交互请求并展示数据信息给用户。

----------

Controller（控制器层）主要担任的是Model和View之间的桥梁，用于控制程序的流程。Controller负责确保View可以访问到需要显示的Model对象的数据，View接收到用户的交互请求之后，会将请求转发给控制器，控制器解析请求之后，会交给对应的Model处理。


----------


**MVVM架构**
MVVM架构指的是Model-View-ViewModel，我们可以看到MVVM架构和MVC架构的区别在于有一个ViewModel部分，首先我们要知道在已经有了MVC架构的时候，为什么还要衍生出MVVM架构，这是因为View中很多控件的数据类型和Model中的属性不相同，例如Model中的时间数据可能是一串数字，View想要展示成日期的格式，这就需要一种转化，这个转换如果放在View不合适，因为View中不应该出现逻辑代码，放在Model中也不合适，这回导致Model臃肿庞大，因为这种问题的存在诞生了ViewModel，这一层可以帮助View转化为相应的数据给Model或者从Model中转化成View可以显示的内容。

:::

::: details 48. 前端AES/md5加密
**MD5是单向加密，无法解密**，主要用于校验。比如前端获取用户输入的密码后MD5加密，传入后端；数据库里也存的MD5字符串，后端无需解密，直接拿着这个串跟库里数据对比即可。

--------------

**AES是双向加密，获取密钥后可以解密**。比如前端传递加密后的用户名和电话号码给后端，后端解密后向这个电话号码发送短信。下图是AES加密使用原理

```js
let CryptoJS = require('crypto-js')

const KEY = '1234567890ABCDEF1234567890ABCDEF'
const IV = '0123456789ABCDEF'
// 加密
function Encrypt(str) {
   // 密钥：一个常量，前后端协定后一个字符串即可
  let key = CryptoJS.enc.Utf8.parse(KEY);
  // 偏移量：一个常量，前后端协定后一个字符串，前后端一致即可
  let iv = CryptoJS.enc.Utf8.parse(IV);

  let srcs = CryptoJS.enc.Utf8.parse(str);
  var encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC, // mode 与后台一致。有多个模式可选
    padding: CryptoJS.pad.Pkcs7, //
  });

  // 需要返回base64格式的加密结果，使用此句
  return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);

  // 需要返回hex格式的加密结果，使用此句
  // return encrypted.ciphertext.toString().toUpperCase();
}

// 解密
function Decrypt(str) {
  let key = CryptoJS.enc.Utf8.parse(KEY);
  let iv = CryptoJS.enc.Utf8.parse(IV);

  let base64 = CryptoJS.enc.Base64.parse(str);
  let src = CryptoJS.enc.Base64.stringify(base64);

  var decrypt = CryptoJS.AES.decrypt(src, key, {
    iv: iv,
    // mode: CryptoJS.mode.ECB,
    mode: CryptoJS.mode.CBC, // mode 与后台一致。有多个模式可选
    padding: CryptoJS.pad.Pkcs7
  });

  var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}

let jiaMi = Encrypt('dzl');
console.log('加密', jiaMi);
console.log('解密', Decrypt(jiaMi));
```
:::


---------------


以上所有内容答案可能存在误区, 请理性查看

---------------
````
