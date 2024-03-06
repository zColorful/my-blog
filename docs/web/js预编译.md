#### JS 预编译详解

```js
var a = 1;
b = 2;
function test() {
  var c = (d = 3); //变量的赋值是从右到左的，相当于：d = 3; var c = d;
  console.log(c);
  console.log(d);
}
test();
console.log(b);
console.log(d);
```

执行结果是: 3, 3, 2, 3.

1. 如果变量未声明就赋值，此变量为全局对象(window)所有。window 就是全局的域。
2. 任何声明的全局变量，皆为 window 的属性。所以访问一个全局变量可以 console.log(a),也可以 console.log(window.a).

#### JS 运行三部曲

---

1. 语法分析
2. 预编译
3. 解释执行

---

在执行代码钱还有两个步骤, 即**语法分析和预编译**

---

在预编译之前，系统会对整个代码全部扫描一遍，看看有没有低级的语法错误，如少了括号或引号等等。解释执行就是从上到下依次执行函数代码。

---

##### 函数体内的预编译步骤

1. 创建 AO 对象(Activation object), 即作用域, 也叫做执行期上下文.
2. 找形参和变量声明, 将变量和形参名作为 AO 的属性名, 初始值为 undefined.
3. 将形参和实参相统一.
4. 在函数体里找函数声明, 值(函数声明)赋予 AO 对象.

**注意: 预编译过程只涉及变量或函数的声明, 赋值语句在解释执行的阶段才进行**

---

```js
function fn(a) {
  console.log(a);
  var a = 123;
  console.log(a);
  function a() {} //函数的声明在预编译时已经被识别，所以在调用fn(1)时，忽略这条语句
  console.log(a);
  var b = function () {};
  console.log(b);
  function d() {}
}
fn(1);
```

以上代码按照预编译解释

1. 创建 AO 对象(Activation object), AO {}

---

2. 找形参和变量声明, 将变量和形参名作为 AO 的属性名, 初始值为 undefined.

```js
AO {
  a: undefined
  b: undefined
}
```

3. 将形参和实参相统一.

```js
AO {
  a: 123
  b: undefined
}
```

4. 在函数体里找函数声明, 值(函数声明)赋予 AO 对象.

```js
AO {
  a : function a() {}
  b : undefined
  d : function d() {}
}
```

预编译结束后, 才执行 fn(1)函数 (执行过程从上到下依次执行)

---

##### 全局预编译

全局预编译(整个 script 代码块执行前)

---

1. 创建一个 GO 对象(Global Object), 即 window 对象.
2. 找变量声明. 初始值为 undefined. 注意: 全局预编译没有形参和实参.
3. 找全局里的函数声明, 函数声明赋值到全局的 GO 对象.

```js
function b(a) {
  console.log(a);
}
b(1);
console.log(a);
var a = 2;
console.log(a);
```

**根据执行步骤分析**

---

1. 创建一个 GO 对象(Global Object), 即 window 对象.  
   GO {}

---

2. 找变量声明, 函数声明 初始值为 undefined. 注意: 全局预编译没有形参和实参.

```js {2}
GO {
  a: undefined // 变量声明
}
```

---

3. 找全局里的函数声明, 函数声明赋值到全局的 GO 对象.

```js {2,3}
 GO {
  a : undefined // 变量声明
  b : function b(a){...} // 函数声明
}
```

---
