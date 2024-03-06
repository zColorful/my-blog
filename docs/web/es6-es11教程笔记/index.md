## es6 笔记

---

::: danger 本教程 ES6 来源
以下内容来自于[阮一峰老师的 ECMAScript 6 教程](https://es6.ruanyifeng.com/#docs/intro)
:::

::: details ES6 与 ECMAScript 2015 的关系
ECMAScript 2015（简称 ES2015）这个词，也是经常可以看到的。它与 ES6 是什么关系呢？

2011 年，ECMAScript 5.1 版发布后，就开始制定 6.0 版了。因此，ES6 这个词的原意，就是指 JavaScript 语言的下一个版本。

但是，因为这个版本引入的语法功能太多，而且制定过程当中，还有很多组织和个人不断提交新功能。事情很快就变得清楚了，不可能在一个版本里面包括所有将要引入的功能。常规的做法是先发布 6.0 版，过一段时间再发 6.1 版，然后是 6.2 版、6.3 版等等。

但是，标准的制定者不想这样做。他们想让标准的升级成为常规流程：任何人在任何时候，都可以向标准委员会提交新语法的提案，然后标准委员会每个月开一次会，评估这些提案是否可以接受，需要哪些改进。如果经过多次会议以后，一个提案足够成熟了，就可以正式进入标准了。这就是说，标准的版本升级成为了一个不断滚动的流程，每个月都会有变动。

标准委员会最终决定，标准在每年的 6 月份正式发布一次，作为当年的正式版本。接下来的时间，就在这个版本的基础上做改动，直到下一年的 6 月份，草案就自然变成了新一年的版本。这样一来，就不需要以前的版本号了，只要用年份标记就可以了。

ES6 的第一个版本，就这样在 2015 年 6 月发布了，正式名称就是《ECMAScript 2015 标准》（简称 ES2015）。2016 年 6 月，小幅修订的《ECMAScript 2016 标准》（简称 ES2016）如期发布，这个版本可以看作是 ES6.1 版，因为两者的差异非常小（只新增了数组实例的 includes 方法和指数运算符），基本上是同一个标准。根据计划，2017 年 6 月发布 ES2017 标准。

因此，ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等，而 ES2015 则是正式名称，特指该年发布的正式版本的语言标准。本书中提到 ES6 的地方，一般是指 ES2015 标准，但有时也是泛指“下一代 JavaScript 语言”。
:::

::: details Babel 转码器
[Babel](https://babeljs.io/) 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在老版本的浏览器执行。这意味着，你可以用 ES6 的方式编写程序，又不用担心现有环境是否支持。下面是一个例子。

```js
// 转码前
input.map((item) => item + 1);

// 转码后
input.map(function (item) {
  return item + 1;
});
```

上面的原始代码用了箭头函数，Babel 将其转为普通函数，就能在不支持箭头函数的 JavaScript 环境执行了。
:::

---

::: details let 命令

### let 命令

ES6 新增了 let 命令，用来声明变量。它的用法类似于 var，但是所声明的变量，只在 let 命令所在的代码块内有效。

```js
{
  let a = 10;
  var b = 1;
}

a; // ReferenceError: a is not defined.
b; // 1

for (let index = 0; index < array.length; index++) {}
console.log(index); // // ReferenceError: index is not defined
```

上面的代码中, 计数器 i 只在 for 循环体内有效，在循环体外引用就会报错。
下面的代码如果使用 var，最后输出的是 10。

```js
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
```

上面代码中, 变量 i 是 var 命令声明的,在全局范围内都有效，所以全局只有一个变量 i,而循环内被赋给数组 a 的函数内部的 console.log(i)，里面的 i 指向的就是全局的 i。也就是说，所有数组 a 的成员里面的 i，指向的都是同一个 i，导致运行时输出的是最后一轮的 i 的值，也就是 10。

如果使用 let，声明的变量仅在块级作用域内有效，最后输出的是 6。for 循环内部的 i 只在本轮循环有效，所以每一次循环的 i 其实都是一个新的变量，所以最后输出的是 6。你可能会问，如果每一轮循环的变量 i 都是重新声明的，那它怎么知道上一轮循环的值，从而计算出本轮循环的值？这是因为 JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量 i 时，就在上一轮循环的基础上进行计算。

**另外，for 循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。**

```js
for (let i = 0; i < 3; i++) {
  let i = "abc";
  console.log(i);
}
// abc
// abc
// abc
```

上面代码正确运行，输出了 3 次 abc。这表明函数内部的变量 i 与循环变量 i 不在同一个作用域，有各自单独的作用域（同一个作用域不可使用 let 重复声明同一个变量）。

---

```js
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;
// 变量提升如下
var foo; // undefined;
console.log(foo); // undefined
foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
// let不存在变量提升, 在使用之前打印就报错
```

---

#### 暂时性死区

只要块级作用域内存在 let 命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

```js
var tmp = 123;

if (true) {
  tmp = "abc"; // ReferenceError
  let tmp;
}
```

**总之，在代码块内，使用 let 命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。**

```js
if (true) {
  // TDZ开始
  tmp = "abc"; // ReferenceError
  console.log(tmp); // ReferenceError

  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}

// 暂时性死区
function bar(x = y, y = 2) {
  return [x, y];
}

bar(); // 报错

// 上面代码中，调用bar函数之所以报错（某些实现可能不报错），是因为参数x默认值等于另一个参数y，而此时y还没有声明，属于“死区”。如果y的默认值是x，就不会报错，因为此时x已经声明了。

function bar(x = 2, y = x) {
  return [x, y];
}
bar(); // [2, 2]
```

:::

---

::: details 块级作用域
ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。

第一种场景，内层变量可能会覆盖外层变量。

```js
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
    console.log('不会执行吧');
  }
}

f(); // undefined

// 个人理解
1. 执行script脚本, var tmp = undefined;
2. 执行函数f(), f()内部的 var tmp = undefined变量提升到全局变量;
3. 查找上下文没有变量声明和函数声明, 打印tmp, 为undefined;

```

#### ES6 的块级作用域

let 实际上为 JavaScript 新增了块级作用域。

```js
function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}
// 上面的函数有两个代码块，都声明了变量n，运行后输出 5。这表示外层代码块不受内层代码块的影响。如果两次都使用var定义变量n，最后输出的值才是 10。
```

**ES6 允许块级作用域的任意嵌套, 每一层的作用域都不一样,也就等于说是内层作用域可以定义外层作用域的同名变量**

```js
{
  {
    {
      let insane = "Hello World";
      {
        let insane = "Hello ES6";
      }
    }
  }
}

// IIFE匿名立即执行函数
(function () {})();

// 块级作用域写法
{
  let tmp = "";
}
```

:::

---

::: details Set, Map, WeakSet

1. Set
   ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。  
   Set 本身是一个构造函数，用来生成 Set 数据结构。

```js
const s = new Set();

[2, 3, 4, 5, 6, 5, 2, 2].forEach((x) => s.add(x));

for (let i of s) {
  console.log(i);
}
// 2
// 3
// 4
// 5
// 6
```

上面代码通过 add()方法向 Set 结构加入成员，结果表明 **Set 结构不会添加重复的值。**

---

**Set 函数可以接受一个数组**（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。

```js
// 例一
const set = new Set([1, 2, 3, 4, 4]);
[...set];
// [1, 2, 3, 4]

// 例二
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
items.size; // 5

// 例三
const set = new Set(document.querySelectorAll("div"));
set.size; // 56

// 类似于
const set = new Set();
document.querySelectorAll("div").forEach((div) => set.add(div));
set.size; // 56
```

数组去重/字符串去重

```js
// 去除数组的重复成员
[...new Set(array)]
// 字符串去重
[...new Set('ababbc')].join('')
// "abc"
```

向 Set 加入值的时候，不会发生类型转换，所以**5 和"5"是两个不同的值**。Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（===），主要的区别是**向 Set 加入值时认为 NaN 等于自身**，而精确相等运算符认为 NaN 不等于自身。**两个对象也不会认为是相等的**

```js
let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
set; // Set {NaN}

let set2 = new Set();

set.add({});
set.size; // 1

set.add({});
set.size; // 2
```

---

**属性介绍**

- Set.prototype.constructor: 构造函数, 默认就是 Set 函数
- Set.prototype.size: 返回 Set 实例的成员总数

Set 实例的方法分为两大类: 操作方法(用于操作数据)和遍历方法(用于遍历成员)

- Set.prototype.add(value): 添加某个值, 返回 Set 结构本身
- Set.prototype.delete(value): 删除某个值, 返回一个布尔值, 表示是否删除成功
- Set.prototype.has(value): 返回一个布尔值, 表示该值是否为 Set 成员
- Set.prototype.clear(): 清除所有成员, 没有返回值

```js
const s = new Set();

s.add(1).add(2).add(3).add(2);

s.size; // 3

s.has(1); // true
s.has(2); // true
s.has(3); // true
s.has(4); // false

s.delete(2);
s.has(2); // false
```

Object 结构和 Set 结构的对比

```js
// 对象的写法
const properties = {
  width: 1,
  height: 1,
};

if (properties[someName]) {
  // do something
}

// Set的写法
const properties = new Set();

properties.add("width");
properties.add("height");

if (properties.has(someName)) {
  // do something
}
```

**Array.from()方法可以将 Set 结构转换成数组**

```js
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items); // [1, 2, 3, 4, 5]
```

---

**遍历操作**
Set 结构的实例有四种遍历方法, 可以用于遍历成员

- Set.prototype.keys()：返回键名的遍历器
- Set.prototype.values()：返回键值的遍历器
- Set.prototype.entries()：返回键值对的遍历器
- Set.prototype.forEach()：使用回调函数遍历每个成员

**Set 的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用。**

---

**(1)** keys()，values()，entries()

keys 方法、values 方法、entries 方法返回的都是遍历器对象（详见《Iterator 对象》一章）。由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以 keys 方法和 values 方法的行为完全一致。

```js
let set = new Set(["red", "green", "blue"]);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
```

Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的 values 方法。

```js
Set.prototype[Symbol.iterator] === Set.prototype.values;
// true

// 这意味着，可以省略values方法，直接用for...of循环遍历 Set。
let set = new Set(["red", "green", "blue"]);

for (let x of set) {
  console.log(x);
}
// red
// green
// blue
```

**(2)** forEach()

```js
let set = new Set([1, 4, 9]);
set.forEach((value, key) => console.log(key + " : " + value));
// 1 : 1
// 4 : 4
// 9 : 9
```

**数组的 map 和 filter 方法也可以间接用于 Set 了。**

```js
let set = new Set([1, 2, 3]);
set = new Set([...set].map((x) => x * 2));
// 返回Set结构：{2, 4, 6}

let set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter((x) => x % 2 == 0));
// 返回Set结构：{2, 4}

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter((x) => b.has(x)));
// set {2, 3}

// （a 相对于 b 的）差集
let difference = new Set([...a].filter((x) => !b.has(x)));
// Set {1}
```

如果想在遍历操作中，同步改变原来的 Set 结构，目前没有直接的方法，但有两种变通方法。一种是利用原 Set 结构映射出一个新的结构，然后赋值给原来的 Set 结构；另一种是利用 Array.from 方法。

```js
// 方法一
let set = new Set([1, 2, 3]);
set = new Set([...set].map((val) => val * 2));
// set的值是2, 4, 6

// 方法二
let set = new Set([1, 2, 3]);
set = new Set(Array.from(set, (val) => val * 2));
// set的值是2, 4, 6
```

- WeakSet

WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。
首先，WeakSet 的成员只能是对象，而不能是其他类型的值。

```js
const ws = new WeakSet();
ws.add(1);
// TypeError: Invalid value used in weak set
ws.add(Symbol());
// TypeError: invalid value used in weak set
```

**WeakSet 中的对象都是弱引用**，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。

**这是因为垃圾回收机制根据对象的可达性（reachability）来判断回收，如果对象还能被访问到，垃圾回收机制就不会释放这块内存**。结束使用该值之后，有时会忘记取消引用，导致内存无法释放，进而可能会引发内存泄漏。WeakSet 里面的引用，都不计入垃圾回收机制，所以就不存在这个问题。因此，WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息。只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失。

**用法**

- WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
- WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
- WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。

```js
const ws = new WeakSet();
const obj = {};
const foo = {};

ws.add(window);
ws.add(obj);

ws.has(window); // true
ws.has(foo); // false

ws.delete(window);
ws.has(window); // false

// WeakSet 没有size属性, 没有编发遍历她的成员

ws.size; // undefined
ws.forEach; // undefined
```

---

- Map

**含义和基本用法**  
JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。

```js
const data = {};
const element = document.createElement("div");

data[element] = "metadata";
console.log(data);
// {[object HTMLDivElement]: 'metadata'}
```

上面代码原意是**将一个 DOM 节点作为对象 data 的键**，但是由于**对象只接受字符串作为键名**，所以 element 被自动转为字符串[**object HTMLDivElement**]。

为了解决这个问题，ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。

```js
const m = new Map();
const o = { p: "Hello World" };

m.set(o, "content");
m.get(o); // "content"

m.has(o); // true
m.delete(o); // true
m.has(o); // false
```

作为构造函数, Map 也可以接受一个数组作为参数, 该数组的成员是一个个表示键值对的数组

```js
const map = new Map([
  ["name", "张三"],
  ["title", "Author"],
]);

map.size; // 2
map.has("name"); // true
map.get("name"); // "张三"
map.has("title"); // true
map.get("title"); // "Author"
```

上面的操作实际上是如下代码转换的

```js
const items = [
  ["name", "张三"],
  ["title", "Author"],
];

const map = new Map();

items.forEach(([key, value]) => map.set(key, value));
```

事实上, 不仅仅是数组，任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构（详见《Iterator》一章）都可以当作 Map 构造函数的参数。这就是说，Set 和 Map 都可以用来生成新的 Map。

```js
const set = new Set([
  ["foo", 1],
  ["bar", 2],
]);
const m1 = new Map(set);
m1.get("foo"); // 1

const m2 = new Map([["baz", 3]]);
const m3 = new Map(m2);
m3.get("baz"); // 3

// 如果同一个键多次赋值, 后面的值降覆盖前面的值

const map = new Map();

map.set(1, "aaa").set(1, "bbb");

map.get(1); // "bbb"

// 只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。
const map = new Map();

map.set(["a"], 555);
map.get(["a"]); // undefined

// 上面代码的set和get方法，表面是针对同一个键，但实际上这是两个不同的数组实例，内存地址是不一样的，因此get方法无法读取该键，返回undefined。

// 同理，同样的值的两个实例，在 Map 结构中被视为两个键。
const map = new Map();

const k1 = ["a"];
const k2 = ["a"];

map.set(k1, 111).set(k2, 222);

map.get(k1); // 111
map.get(k2); // 222
```

由上可知，Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。这就解决了同名属性碰撞（clash）的问题，我们扩展别人的库的时候，如果使用对象作为键名，就不用担心自己的属性与原作者的属性同名。

如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键，  
比如 0 和-0 就是一个键，  
布尔值 true 和字符串 true 则是两个不同的键。  
另外，undefined 和 null 也是两个不同的键。  
虽然 NaN 不严格相等于自身，但 Map 将其视为同一个键。

```js
let map = new Map();

map.set(-0, 123);
map.get(+0); // 123

map.set(true, 1);
map.set("true", 2);
map.get(true); // 1

map.set(undefined, 3);
map.set(null, 4);
map.get(undefined); // 3

map.set(NaN, 123);
map.get(NaN); // 123;
```

**属性和操作方法**  
(1) size 属性

```js
const map = new Map();
map.set("foo", true);
map.set("bar", false);

map.size; // 2
```

---

(2) Map.prototype.set(key, value)

set 方法设置键名 key 对应的键值为 value，然后返回整个 Map 结构。如果 key 已经有值，则键值会被更新，否则就新生成该键。

```js
const m = new Map();

m.set("edition", 6); // 键是字符串
m.set(262, "standard"); // 键是数值
m.set(undefined, "nah"); // 键是 undefined

console.log(m); // Map(3) {'edition' => 6, 262 => 'standard', undefined => 'nah'}

// set方法返回的是当前的Map对象，因此可以采用链式写法。
let map = new Map().set(1, "a").set(2, "b").set(3, "c");
```

---

(3) Map.prototype.get(key)  
get 方法读取 key 对应的键值, 如果找不到, 返回 undefined

```js
const m = new Map();

const hello = function () {
  console.log("hello");
};
m.set(hello, "Hello ES6!"); // 键是函数

m.get(hello); // Hello ES6!
```

---

(4) Map.prototype.has(key)  
has 方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。

```js
const m = new Map();

m.set("edition", 6);
m.set(262, "standard");
m.set(undefined, "nah");

m.has("edition"); // true
m.has("years"); // false
m.has(262); // true
m.has(undefined); // true
```

---

(5) Map.prototype.delete(key)  
delete 方法删除某个键，返回 true。如果删除失败，返回 false。

```js
const m = new Map();
m.set(undefined, "nah");
m.has(undefined); // true

m.delete(undefined);
m.has(undefined); // false
```

---

(6): Map.prototype.clear()
clear 方法清除所有成员, 没有返回值

```js
let map = new Map();
map.set("foo", true);
map.set("bar", false);

map.size; // 2
map.clear();
map.size; // 0
```

**遍历方法**
Map 结构原生提供三个遍历器生成函数和一个遍历方法。

- Map.prototype.keys()：返回键名的遍历器。
- Map.prototype.values()：返回键值的遍历器。
- Map.prototype.entries()：返回所有成员的遍历器。
- Map.prototype.forEach()：遍历 Map 的所有成员。

需要特别注意的是，Map 的遍历顺序就是插入顺序。

```js
const map = new Map([
  ["F", "no"],
  ["T", "yes"],
]);

for (let key of map.keys()) {
  console.log(key);
}
// "F"
// "T"

for (let value of map.values()) {
  console.log(value);
}
// "no"
// "yes"

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
for (let [key, value] of map) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

const map1 = new Map([...map].filter(([key, value]) => key === "F"));
console.log(map1); // Map(1) {'F' => 'no'}

const map2 = new Map(
  [...map].map(([key, value]) => [key + key, value + value])
);
console.log(map2); // Map(2) {'FF' => 'nono', 'TT' => 'yesyes'}
```

**与其他数据结构的互相转换**

```js
// Map转数组
const myMap = new Map().set(true, 1).set({ foo: 2 }, ["abc"]);
console.log([...myMap]); // [[true, 1], [{foo: 2}, ['abc']]]

// 数组转Map
new Map([
  [true, 7],
  [{ foo: 3 }, ["abc"]],
]);
// Map {
//   true => 7,
//   Object {foo: 3} => ['abc']
// }

// Map转对象
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k, v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

const myMap = new Map().set("yes", true).set("no", false);
strMapToObj(myMap);
// { yes: true, no: false }

// 对象转Map
let obj = { a: 1, b: 2 };
let map = new Map(Object.entries(obj)); // Map(2) {'a' => 1, 'b' => 2}
// 对象转Map方法二
function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}

objToStrMap({ yes: true, no: false });
```

:::

---

::: details Proxy
Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。

```js
var obj = new Proxy(
  {},
  {
    get: function (target, propKey, receiver) {
      console.log(`getting ${propKey}!`);
      return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
      console.log(`setting ${propKey}!`);
      return Reflect.set(target, propKey, value, receiver);
    },
  }
);
```

上面代码对一个空对象架设了一层拦截，重定义了属性的读取（get）和设置（set）行为。这里暂时先不解释具体的语法，只看运行结果。对设置了拦截行为的对象 obj，去读写它的属性，就会得到下面的结果。

```js
obj.count = 1;
//  setting count!
++obj.count;
//  getting count!
//  setting count!
//  2
```

**写法**

```js
var proxy = new Proxy(target, handler);
// target 参数表示所要拦截的目标对象
// handler参数也是一个对象, 用来定制拦截行为

var proxy = new Proxy(
  {},
  {
    get: function (target, propKey) {
      return 35;
    },
  }
);

proxy.time; // 35
proxy.name; // 35
proxy.title; // 35
```

以上代码, 由于只配置了 get 方法, 并且总是返回 35, 所以访问任何属性都得到 35

---

**注意: 要使得 Proxy 起作用, 必须针对 Proxy 实例（上例是 proxy 对象）进行操作，而不是针对目标对象（上例是空对象）进行操作。**

如果 handler 没有设置任何拦截, 那就等同于直接通向原对象

```js
var target = {};
var handler = {};
var proxy = new Proxy(target, handler);
proxy.a = "b";
target.a; // "b"
```

---

一个技巧是将 Proxy 对象，设置到 object.proxy 属性，从而可以在 object 对象上调用。

```js
var proxy = new Proxy(
  {},
  {
    get: function (target, propKey) {
      return 35;
    },
  }
);

// Object.create() 方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型（prototype）。
let obj = Object.create(proxy);
console.log(obj.time); // 35;

console.log(obj.prototype); // 35;
```

:::
