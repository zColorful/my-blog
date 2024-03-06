::: details JavaScript 代码调用顺序分析

```js
var a = 2;
function add(b, c) {
  return b + c;
}
function addAll(b, c) {
  var d = 10;
  result = add(b, c);
  return a + result + d;
}
addAll(3, 6);
```

总结: 变量 a, 函数 add, addAll 都保存到了全局上下文的变量环境, 全局执行上下文压入栈中之后,JavaScript 开始执行全局代码, a = 2, 执行对该语法会将全局上下文变量 a 设置为 2, 紧接着调用 addAll 函数, JavaScript 编译内部代码, 为其内部创建一个执行上下文, 最后将该函数的执行上下文压入栈中, addAll 内部变量为 d=undefined,result=undefined, JavaScript 开始执行函数内部代码, d = 10, 执行 add 函数, 为其创建执行上下文, 压入调用栈, 当 add 函数返回时, 该函数的执行上下文会从栈顶弹出, 并且将 result 赋值设置为 add 函数的返回值, 最后返回 a+result+d 值, 将 addAll 函数弹出栈

当分配的调用栈空间被占满之后, 会引发堆栈溢出的问题
:::

::: details 为什么要 JavaScript 要区别“堆”和“栈”, 为什么不把所有的数据都放在“栈”中
因为 JavaScript 引擎需要栈来维护程序执行期间上下文的状态, 如何栈空间太大, 所有的数据都存放在栈空间中, 会影响上下文执行的效率

所以通常情况下，栈空间都不会设置太大，主要用来存放一些原始类型的小数据。而引用类型的数据占用的空间都比较大，所以这一类数据会被存放到堆中，堆空间很大，能存放很多大的数据，不过缺点是分配内存和回收内存都会占用一定的时间。

:::

::: details JS 改变形参, 实参改变不改变那些事

```js
function test(params) {
  params = 3;
}
var x = 1;
test(x);
console.log(x); // 1

function test2(params) {
  params.name = "aven";
}

var person = {
  name: "dzl",
  age: 18,
};
test2(person);

console.log(person); // { name: 'aven', age: 18 }
```

一样的套路，但是结果不同，demo1 没有改变传入的实参变量，demo2 改变了传入的实参变量。

差别就在于 demo1 中，参数为简单数据类型（null,undefined,boolean,number,string），demo2 中为复杂数据类型（object，typeof([]) === 'object'）。
:::

::: details reduce 作用
用法: // accumulator-累加器；currentValue-当前值；currentIndex-当前值索引；initialValue-初始值；
array.reduce(function(accumulator, currentValue, currentIndex, array), initialValue)

```js
let arr1 = [1, 2, 3, 4];
let total = arr1.reduce((acc, cur) => {
  console.log(acc, cur);
  // 90 1
  // 91 2
  // 93 3
  // 96 4
  // 100
  return (acc += cur);
}, 90);
console.log(total); // 100

// 去重
let filterArrResult = [1, 2, 3, 3, 4, 4, null, null].filter(
  (item, index, arr) => arr.indexOf(item) === index
);
console.log(filterArrResult); // [1, 2, 3, 4, null]

let filterArrResult1 = [1, 2, 2, 4, null, null].reduce((acc, cur) => {
  return acc.includes(cur) ? acc : acc.concat(cur);
}, []);
console.log(filterArrResult1);

let arr2 = [0, [1], [2, 3], [4, [5, 6, 7]]]; // 数组扁平化
let dimensionReduction = function (arr) {
  return arr.reduce((acc, cur) => {
    return acc.concat(Array.isArray(cur) ? dimensionReduction(cur) : cur);
  }, []);
};

console.log(dimensionReduction(arr2));

// 求字符串中字母出现的次数
const str = "sfhjasfjgfasjuwqrqadqeiqsajsdaiwqdaklldflas-cmxzmnha";
function getCount(str) {
  const res1 = str.split("").reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1);
    return acc;
  }, {});
  return res1;
}
console.log(getCount(str));
console.log(getCount("abcbcc"));

// 数组转对象  按照id 取出stream
var streams = [
  { name: "技术", id: 1 },
  { name: "设计", id: 2 },
];
var obj = streams.reduce((acc, cur) => {
  acc[cur.name] = cur;
  return acc;
}, {});
console.log(obj);
```

:::
