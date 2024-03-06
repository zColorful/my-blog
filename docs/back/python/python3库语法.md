## python3 库语法

::: details random

- random.randint(1, 3) 随机生成 1~3 的数字

---

- random.choice()方法用于返回一个列表, 元组或字符串中的随机项  
  print(random.choice('1234')) 随机返回 1~4 的字符串  
  print(random.choice([213, '312', 'abc'])) 随机返回[213, '312', 'abc']中的一个值

---

:::

---

::: details string 模块

- string.ascii_letters 生成字符串的字母序列(也就是所有大小写字母)
- string.ascii_lowercase 生成字符串的小写字母序列()
- string.ascii_uppercase 生成字符串的大写字母序列
- string.digits 生成字符串的数字序列 0123456789  
  :::

---

::: details pyautogui 模块

```python
# 每个字母间隔0.1秒在鼠标聚焦的位置输入hello world
pyautogui.typewrite('hello world\n', interval=0.1)

# 如一个pc端的简单的短信自动化脚本
# 意思如下, 在鼠标聚焦的地方输入5次, 每次从大小写字母中随机生成1-10位字母并发送
import time
import random
import string
import pyautogui

phrase = str()
n = 0


while True:
    if n < 5:
        for i in range(random.randint(1, 10)):
            letter = random.choice(string.ascii_letters)
            phrase = phrase + letter

        pyautogui.typewrite(phrase)
        pyautogui.press('enter')
        phrase = str()
        n = n + 1
        time.sleep(0.005 + 0.1 * random.randint(1, 10))
    else:
        pyautogui.keyDown('alt')
        pyautogui.press('tab')
        n = 0
        break
```

<!-- 效果如下 -->

![效果图](/assets/python/pydemo1.png)
:::

---

::: details xlrd 模块[操作 clx 表格]

```python
# 引入 xlrd
import xlrd
# 打开指定的excel文件, 返回一个data对象
data = xlrd.open_workbook('demo.xlsx')
# 通过data对象可以得到各个sheet对象(一个excel文件可以有多个sheet, 每个sheet都是一个表格)
Sheet1 = data.sheet_by_index(0) #通过索引顺序获取
Sheet1 = data.sheet_by_name(u‘sheet1’) #通过名称获取
Sheet1 = data.sheets()[0] #通过索引顺序获取
num =data.nsheets #返回sheet的数目
list = data.sheets() #返回所有sheet对象的列表
list = data.sheet_names() #返回所有sheet对象名字的列表


# 通过sheet对象可以获取各个单元格，每个单元格是一个cell对象
name = sheet1.name #返回sheet1的名称
nrows =sheet1.nrows #返回sheet1的行数
ncols = sheet1.ncols #返回sheet1的列数
sheet1.cell_type(x,y) #返回cell的对象类型
sheet1.cell(x,y).ctype #返回cell的对象类型
# 即date的ctype=3，这时需要使用xlrd的xldate_as_tuple来处理为date格式
#先判断表格的ctype=3时xldate才能开始操作。


# python读取excel中单元格的内容返回的有5种类型。
# ctype : 0 empty,1 string, 2 number, 3 date, 4 boolean, 5 error。
# 一般情况下读取Excel中数字会自动转换为浮点数，若想判断读取为浮点数可以使用如下方法：
ctype == 2 and cell % 1 == 0.0  # ctype为2且为浮点


sheet1.cell_value(x,y) #返回cell的值
sheet1.cell(x,y).value #返回cell的值
sheet1.row(x) #获取指定行，返回cell对象的列表
sheet1.row_values(x) #获取指定行，返回列表
sheet1.col(x) #获取指定列，返回cell对象的列表
sheet1.col_values(x) #获取指定列，返回列表
```

:::
