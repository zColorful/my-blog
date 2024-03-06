## css 动画汇总

::: details css 毛玻璃

- 效果图

![毛玻璃](/assets/css/frosted-glass.jpg)

- **backdrop-filter** CSS 属性可以让你为一个元素后面区域添加图形效果（如模糊或颜色偏移）。因为它适用于元素背后的所有元素，为了看到效果，必须使元素或其背景至少部分透明。

- 代码如下

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			body {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 100vh;
				background-image: url(assets/css/frosted-glass.png);
				background-repeat: no-repeat;
				background-size: cover;
				background-position: center;
				overflow: hidden;
			}
			body {
			  width: 100%;
			  height: 100vh;
			  background-image: url('undraw_Dog_re_is6r.png');
			  background-repeat: no-repeat;
			  background-size: cover;
			  background-position: center;
			  overflow: hidden;
			}
			.frosted-glass {
			  width: 160px;
			  height: 160px;
			  display: flex;
			  align-items: center;
			  justify-content: center;
			  background-color: rgba(255, 255, 255, 0.1);
			  border-radius: 20px;
			  backdrop-filter: sepia(90%);
			  transition: 0.5s ease;
			}
			.frosted-glass:hover {
			  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1),
			              0 2px 6px rgba(0, 0, 0, 0.2),
			              0 3px 8px rgba(0, 0, 0, 0.3),
			              0 7px 11px rgba(0, 0, 0, 0.4),
			              0 10px 30px rgba(0, 0, 0, 0.5);
			}
			.frosted-glass .title {
			  font-weight: normal;
			  color: #fff;
			}
		</style>
	</head>
	<body>
		<div class="frosted-glass">
			<h2 class="title"></h2>
		</div>
	</body>
</html>
```

:::

<script setup>
	import NotComp from '../../../components/CssDemo/notComp.vue'
</script>

::: details :not
<NotComp navStatus="before" />

----------------

<NotComp navStatus="after" />

-----------------


- 代码如下
```JavaScript
li:not(:last-of-type) {
	border-right-width: 0;
}
```
:::
