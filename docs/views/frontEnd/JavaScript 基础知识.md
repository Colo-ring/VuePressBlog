---
title: JavaScript 基础知识
date: 2020-11-05
tags:
 - JavaScript
categories: 
 - frontEnd
---

## JavaScript 基础知识

 JavaScript 脚本构建的基础知识。

1. [Hello, world!](https://zh.javascript.info/hello-world)
2. [代码结构](https://zh.javascript.info/structure)
3. [现代模式，"use strict"](https://zh.javascript.info/strict-mode)
4. [变量](https://zh.javascript.info/variables)
5. [数据类型](https://zh.javascript.info/types)
6. [交互：alert、prompt 和 confirm](https://zh.javascript.info/alert-prompt-confirm)
7. [类型转换](https://zh.javascript.info/type-conversions)
8. [基础运算符，数学](https://zh.javascript.info/operators)
9. [值的比较](https://zh.javascript.info/comparison)
10. [条件分支：if 和 '?'](https://zh.javascript.info/ifelse)
11. [逻辑运算符](https://zh.javascript.info/logical-operators)
12. [空值合并运算符 '??'](https://zh.javascript.info/nullish-coalescing-operator)
13. [循环：while 和 for](https://zh.javascript.info/while-for)
14. ["switch" 语句](https://zh.javascript.info/switch)
15. [函数](https://zh.javascript.info/function-basics)
16. [函数表达式](https://zh.javascript.info/function-expressions)
17. [箭头函数，基础知识](https://zh.javascript.info/arrow-functions-basics)
18. [JavaScript 特性](https://zh.javascript.info/javascript-specials)



### 兄弟篇

[简介](https://zh.javascript.info/getting-started)[JavaScript 基础知识](https://zh.javascript.info/first-steps)[代码质量](https://zh.javascript.info/code-quality)[Object（对象）：基础知识](https://zh.javascript.info/object-basics)[数据类型](https://zh.javascript.info/data-types)[函数进阶内容](https://zh.javascript.info/advanced-functions)[对象属性配置](https://zh.javascript.info/object-properties)[原型，继承](https://zh.javascript.info/prototypes)[类](https://zh.javascript.info/classes)[错误处理](https://zh.javascript.info/error-handling)[Promise，async/await](https://zh.javascript.info/async)[Generator，高级 iteration](https://zh.javascript.info/generators-iterators)[模块](https://zh.javascript.info/modules)[杂项](https://zh.javascript.info/js-misc)

[在 GitHub 上编辑](https://github.com/javascript-tutorial/zh.javascript.info/blob/master/1-js/02-first-steps)



### 现代模式，"use strict"

长久以来，JavaScript 不断向前发展且并未带来任何兼容性问题。新的特性被加入，旧的功能也没有改变。

这么做有利于兼容旧代码，但缺点是 JavaScript 创造者的任何错误或不完善的决定也将永远被保留在 JavaScript 语言中。

这种情况一直持续到 2009 年 ECMAScript 5 (ES5) 的出现。ES5 规范增加了新的语言特性并且修改了一些已经存在的特性。为了保证旧的功能能够使用，大部分的修改是默认不生效的。你需要一个特殊的指令 —— `"use strict"` 来明确地激活这些特性。

### [“use strict”](https://zh.javascript.info/strict-mode#usestrict)

这个指令看上去像一个字符串 `"use strict"` 或者 `'use strict'`。当它处于脚本文件的顶部时，则整个脚本文件都将以“现代”模式进行工作。

比如：

```javascript
"use strict";

// 代码以现代模式工作
...
```

很快我们就会学习到函数（一种组合命令的方式），所以让我们提前注意一下，`"use strict"` 可以被放在函数体的开头。这样则可以只在该函数中启用严格模式。但通常人们会在整个脚本中启用严格模式。

**确保 “use strict” 出现在最顶部**

请确保 `"use strict"` 出现在脚本的最顶部，否则严格模式可能无法启用。

这里的严格模式就没有被启用：

```javascript
alert("some code");
// 下面的 "use strict" 会被忽略，必须在最顶部。

"use strict";

// 严格模式没有被激活
```

只有注释可以出现在 `"use strict"` 的上面。

**没有办法取消 `use strict`**

没有类似于 `"no use strict"` 这样的指令可以使程序返回默认模式。

一旦进入了严格模式，就没有回头路了。

### [浏览器控制台](https://zh.javascript.info/strict-mode#liu-lan-qi-kong-zhi-tai)

当你使用 [开发者控制台](https://zh.javascript.info/devtools) 运行代码时，请注意它默认是不启动 `use strict` 的。

有时，当 `use strict` 会对代码产生一些影响时，你会得到错误的结果。

那么，怎么在控制台中启用 `use strict` 呢？

首先，你可以尝试搭配使用 Shift+Enter 按键去输入多行代码，然后将 `use strict` 放在代码最顶部，就像这样：

```javascript
'use strict'; <Shift+Enter 换行>
//  ...你的代码
<按下 Enter 以运行>
```

它在大部分浏览器中都有效，像 Firefox 和 Chrome。

如果依然不行，例如你使用的是旧版本的浏览器，那么有一种很丑但可靠的启用 `use strict` 的方法。将你的代码放在这样的包装器中：

```javascript
(function() {
  'use strict';

  // ...你的代码...
})()
```

### [我们应该使用 “use strict” 吗？](https://zh.javascript.info/strict-mode#wo-men-ying-gai-shi-yong-usestrict-ma)

这个问题的答案好像很显而易见，但事实并非如此。

有人可能会建议在脚本的最顶部放置 `"use strict"` 这行代码…… 但你知道更酷的方式吗？

现代 JavaScript 支持 “classes” 和 “modules” —— 高级语言结构（本教程后续章节会讲到），它们会自动启用 `use strict`。因此，如果我们使用它们，则无需添加 `"use strict"` 指令。

**因此，目前我们欢迎将 `"use strict";` 写在脚本的顶部。稍后，当你的代码全都写在了 class 和 module 中时，你则可以将 `"use strict";` 这行代码省略掉。**

目前，我们已经基本了解了 `use strict`。

在接下来的章节中，当我们学习语言功能时，我们会看到严格模式与旧的模式之间的差异。幸运的是，差异其实没有那么多。并且，这些差异实际上提升了我们的编程体验。

本教程的所有例子都默认采用严格模式，除非特别指定（非常少）。





## 变量

大多数情况下，JavaScript 应用需要处理信息。这有两个例子：

1. 一个网上商店 —— 这里的信息可能包含正在售卖的商品和购物车。
2. 一个聊天应用 —— 这里的信息可能包括用户和消息等等。

变量就是用来储存这些信息的。

### [变量](https://zh.javascript.info/variables#bian-liang)

[变量](https://en.wikipedia.org/wiki/Variable_(computer_science)) 是数据的“命名存储”。我们可以使用变量来保存商品、访客和其他信息。

在 JavaScript 中创建一个变量，我们需要用到 `let` 关键字。

下面的语句创建（也可以称为 **声明** 或者 **定义**）了一个名称为 “message” 的变量：

```javascript
let message;
```

现在，我们可以通过赋值运算符 `=` 为变量添加一些数据：

```javascript
let message;

message = 'Hello'; // 保存字符串
```

现在这个字符串已经保存到与该变量相关联的内存区域了，我们可以通过使用该变量名称访问它：

```javascript
let message;
message = 'Hello!';

alert(message); // 显示变量内容
```

简洁一点，我们可以将变量定义和赋值合并成一行：

```javascript
let message = 'Hello!'; // 定义变量，并且赋值

alert(message); // Hello!
```

也可以在一行中声明多个变量：

```javascript
let user = 'John', age = 25, message = 'Hello';
```

看上去代码长度更短，但并不推荐这样。为了更好的可读性，请一行只声明一个变量。

多行变量声明有点长，但更容易阅读：

```javascript
let user = 'John';
let age = 25;
let message = 'Hello';
```

一些程序员采用下面的形式书写多个变量：

```javascript
let user = 'John',
  age = 25,
  message = 'Hello';
```

……甚至使用“逗号在前”的形式：

```javascript
let user = 'John'
  , age = 25
  , message = 'Hello';
```

技术上讲，这些变体都有一样的效果。所以，这是个个人品味和审美方面的问题。

**`var` 而不是 `let`**

在较旧的脚本中，你也可能发现另一个关键字 `var`，而不是 `let`：

```javascript
var message = 'Hello';
```

`var` 关键字与 `let` **大体** 相同，也用来声明变量，但稍微有些不同，也有点“老派”。

`let` 和 `var` 之间有些微妙的差别，但目前对于我们来说并不重要。我们将会在 [旧时的 "var"](https://zh.javascript.info/var) 章节中介绍它们。

### [一个现实生活的类比](https://zh.javascript.info/variables#yi-ge-xian-shi-sheng-huo-de-lei-bi)

如果将变量想象成一个“数据”的盒子，盒子上有一个唯一的标注盒子名字的贴纸。这样我们能更轻松地掌握“变量”的概念。

例如，变量 `message` 可以被想象成一个标有 `"message"` 的盒子，盒子里面的值为 `"Hello!"`：

我们可以在盒子内放入任何值。

并且，这个盒子的值，我们想改变多少次，就可以改变多少次：

```javascript
let message;

message = 'Hello!';

message = 'World!'; // 值改变了

alert(message);
```

当值改变的时候，之前的数据就被从变量中删除了：

我们还可以声明两个变量，然后将其中一个变量的数据拷贝到另一个变量。

```javascript
let hello = 'Hello world!';

let message;

// 将字符串 'Hello world' 从变量 hello 拷贝到 message
message = hello;

// 现在两个变量保存着相同的数据
alert(hello); // Hello world!
alert(message); // Hello world!
```

**声明两次会触发 error**

一个变量应该只被声明一次。

对同一个变量进行重复声明会触发 error：

```javascript
let message = "This";

// 重复 'let' 会导致 error
let message = "That"; // SyntaxError: 'message' has already been declared
```

因此，我们对同一个变量应该只声明一次，之后在不使用 `let` 的情况下对其进行引用。

**函数式语言**

有趣的是，也存在禁止更改变量值的 [函数式](https://en.wikipedia.org/wiki/Functional_programming) 编程语言。比如 [Scala](http://www.scala-lang.org/) 或 [Erlang](http://www.erlang.org/)。

在这种类型的语言中，一旦值保存在盒子中，就永远存在。如果你试图保存其他值，它会强制创建一个新盒子（声明一个新变量），无法重用之前的变量。

虽然第一次看上去有点奇怪，但是这些语言有很大的发展潜力。不仅如此，在某些领域，比如并行计算，这个限制有一定的好处。研究这样的一门语言（即使不打算很快就用上它）有助于开阔视野。

### [变量命名](https://zh.javascript.info/variables#variable-naming)

JavaScript 的变量命名有两个限制：

1. 变量名称必须仅包含字母，数字，符号 `$` 和 `_`。
2. 首字符必须非数字。

有效的命名，例如：

```javascript
let userName;
let test123;
```

如果命名包括多个单词，通常采用驼峰式命名法（[camelCase](https://en.wikipedia.org/wiki/CamelCase)）。也就是，单词一个接一个，除了第一个单词，其他的每个单词都以大写字母开头：`myVeryLongName`。

有趣的是，美元符号 `'$'` 和下划线 `'_'` 也可以用于变量命名。它们是正常的符号，就跟字母一样，没有任何特殊的含义。

下面的命名是有效的：

```javascript
let $ = 1; // 使用 "$" 声明一个变量
let _ = 2; // 现在用 "_" 声明一个变量

alert($ + _); // 3
```

下面的变量命名不正确：

```javascript
let 1a; // 不能以数字开始

let my-name; // 连字符 '-' 不允许用于变量命名
```

**区分大小写**

命名为 `apple` 和 `AppLE` 的变量是不同的两个变量。

**允许非英文字母，但不推荐**

可以使用任何语言，包括西里尔字母（cyrillic letters）甚至是象形文字，就像这样：

```javascript
let имя = '...';
let 我 = '...';
```

从技术上讲，这样没问题。这样的命名是完全允许的，但是用英文进行变量命名是国际惯例。哪怕我们正在写一个很小的脚本，它也有可能会被使用很久。某个时候，来自其他国家的人可能会需要阅读它。

**保留字**

有一张 [保留字列表](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)，这张表中的保留字无法用作变量命名，因为它们被用于编程语言本身了。

比如，`let`、`class`、`return`、`function` 都被保留了。

下面的代码将会抛出一个语法错误：

```javascript
let let = 5; // 不能用 "let" 来命名一个变量，错误！
let return = 5; // 同样，不能使用 "return"，错误！
```

**未采用 `use strict` 下的赋值**

一般，我们需要在使用一个变量前定义它。但是在早期，我们可以不使用 `let` 进行变量声明，而可以简单地通过赋值来创建一个变量。现在如果我们不在脚本中使用 `use strict` 声明启用严格模式，这仍然可以正常工作，这是为了保持对旧脚本的兼容。

```javascript
// 注意：这个例子中没有 "use strict"

num = 5; // 如果变量 "num" 不存在，就会被创建

alert(num); // 5
```

上面这是个糟糕的做法，严格模式下会报错。

```javascript
"use strict";

num = 5; // 错误：num 未定义
```

### [常量](https://zh.javascript.info/variables#chang-liang)

声明一个常数（不变）变量，可以使用 `const` 而非 `let`：

```javascript
const myBirthday = '18.04.1982';
```

使用 `const` 声明的变量称为“常量”。它们不能被修改，如果你尝试修改就会发现报错：

```javascript
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // 错误，不能对常量重新赋值
```

当程序员能确定这个变量永远不会改变的时候，就可以使用 `const` 来确保这种行为，并且清楚地向别人传递这一事实。

#### [大写形式的常数](https://zh.javascript.info/variables#da-xie-xing-shi-de-chang-shu)

一个普遍的做法是将常量用作别名，以便记住那些在执行之前就已知的难以记住的值。

使用大写字母和下划线来命名这些常量。

例如，让我们以所谓的“web”（十六进制）格式为颜色声明常量：

```javascript
const COLOR_RED = "#F00";
const COLOR_GREEN = "##0F0";
const COLOR_BLUE = "##00F";
const COLOR_ORANGE = "#FF7F00";

// ……当我们需要选择一个颜色
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```

好处：

- `COLOR_ORANGE` 比 `"#FF7F00"` 更容易记忆。
- 比起 `COLOR_ORANGE` 而言，`"#FF7F00"` 更容易输错。
- 阅读代码时，`COLOR_ORANGE` 比 `#FF7F00` 更易懂。

什么时候该为常量使用大写命名，什么时候进行常规命名？让我们弄清楚一点。

作为一个“常数”，意味着值永远不变。但是有些常量在执行之前就已知了（比如红色的十六进制值），还有些在执行期间被“计算”出来，但初始赋值之后就不会改变。

例如：

```javascript
const pageLoadTime = /* 网页加载所需的时间 */;
```

`pageLoadTime` 的值在页面加载之前是未知的，所以采用常规命名。但是它仍然是个常量，因为赋值之后不会改变。

换句话说，大写命名的常量仅用作“硬编码（hard-coded）”值的别名。

### [正确命名变量](https://zh.javascript.info/variables#zheng-que-ming-ming-bian-liang)

谈到变量，还有一件非常重要的事。

一个变量名应该有一个清晰、明显的含义，对其存储的数据进行描述。

变量命名是编程过程中最重要且最复杂的技能之一。快速地浏览变量的命名就知道代码是一个初学者还是有经验的开发者写的。

在一个实际项目中，大多数的时间都被用来修改和扩展现有的代码库，而不是从头开始写一些完全独立的代码。当一段时间后，我们做完其他事情，重新回到我们的代码，找到命名良好的信息要容易得多。换句话说，变量要有个好名字。

声明变量之前，多花点时间思考它的更好的命名。你会受益良多。

一些可以遵循的规则：

- 使用易读的命名，比如 `userName` 或者 `shoppingCart`。
- 离诸如 `a`、`b`、`c` 这种缩写和短名称远一点，除非你真的知道你在干什么。
- 变量名在能够准确描述变量的同时要足够简洁。不好的例子就是 `data` 和 `value`，这样的名称等于什么都没说。如果能够非常明显地从上下文知道数据和值所表达的含义，这样使用它们也是可以的。
- 脑海中的术语要和团队保持一致。如果网站的访客称为“用户”，则我们采用相关的变量命名，比如 `currentUser` 或者 `newUser`，而不要使用 `currentVisitor` 或者一个 `newManInTown`。

听上去很简单？确实如此，但是在实践中选择一个一目了然的变量名称并非如此简单。大胆试试吧。

**重用还是新建？**

最后一点，有一些懒惰的程序员，倾向于重用现有的变量，而不是声明一个新的变量。

结果是，这个变量就像是被扔进不同东西盒子，但没有改变它的贴纸。现在里面是什么？谁知道呢。我们需要靠近一点，仔细检查才能知道。

这样的程序员节省了一点变量声明的时间，但却在调试代码的时候损失数十倍时间。

额外声明一个变量绝对是利大于弊的。

现代的 JavaScript 压缩器和浏览器都能够很好地对代码进行优化，所以不会产生性能问题。为不同的值使用不同的变量可以帮助引擎对代码进行优化。

### [总结](https://zh.javascript.info/variables#zong-jie)

我们可以使用 `var`、`let` 或 `const` 声明变量来存储数据。

- `let` — 现代的变量声明方式。
- `var` — 老旧的变量声明方式。一般情况下，我们不会再使用它。但是，我们会在 [旧时的 "var"](https://zh.javascript.info/var) 章节介绍 `var` 和 `let` 的微妙差别，以防你需要它们。
- `const` — 类似于 `let`，但是变量的值无法被修改。

变量应当以一种容易理解变量内部是什么的方式进行命名。

### [任务](https://zh.javascript.info/variables#tasks)

#### [使用变量](https://zh.javascript.info/variables#shi-yong-bian-liang)



重要程度: 2

1. 声明两个变量：`admin` 和 `name`。
2. 将值 `"John"` 赋给 `name`。
3. 从 `name` 变量中拷贝其值给 `admin`。
4. 使用 `alert` 显示 `admin` 的值（必须输出 “John”）。

解决方案

下面的代码，每一行都对应着任务列表中的对应项。

```javascript
let admin, name; // 一次声明两个变量。

name = "John";

admin = name;

alert( admin ); // "John"
```



#### [给出正确的名字](https://zh.javascript.info/variables#gei-chu-zheng-que-de-ming-zi)



重要程度: 3

1. 使用我们的星球的名字创建一个变量。你会怎么命名这个变量？
2. 创建一个变量来存储当前浏览者的名字。你会怎么命名这个变量？

解决方案

代表我们星球的变量

网站当前访问者的名字



#### [大写的常量？](https://zh.javascript.info/variables#da-xie-de-chang-liang)



重要程度: 4

检查下面的代码：

```javascript
const birthday = '18.04.1982';

const age = someCode(birthday);
```

这里我们有一个 `birthday` 日期常量和通过一些代码（为了保持简短这里没有提供，因为这些细节在这无关紧要）从 `birthday` 计算出的 `age` 常量。

对于 `birthday` 使用大写方式正确吗？那么 `age` 呢？或者两者都用？

```javascript
const BIRTHDAY = '18.04.1982'; // 使用大写？

const AGE = someCode(BIRTHDAY); // 使用大写？
```

解决方案

我们通常用大写字母表示“硬编码（hard-coded）”的常量。或者，换句话说就是，当值在执行之前或在被写入代码的时候，我们就知道值是什么了。

在这个代码中 `birthday` 确实是这样的。因此我们可以使用大写。

在对照组中，`age` 是在程序运行时计算出的。今天我们有一个年龄，一年以后我们就会有另一个。它在某种意义上不会随着代码的执行而改变。但与 `birthday` 相比，它还是有一定的可变性：它是计算出来的，因此我们应该使用小写。





## 数据类型

JavaScript 中的值都具有特定的类型。例如，字符串或数字。

在 JavaScript 中有 8 种基本的数据类型（译注：7 种原始类型和 1 种引用类型）。在这里，我们将对它们进行大体的介绍，在下一章中，我们将详细讨论它们。

我们可以将任何类型的值存入变量。例如，一个变量可以在前一刻是个字符串，下一刻就存储一个数字：

```javascript
// 没有错误
let message = "hello";
message = 123456;
```

允许这种操作的编程语言，例如 JavaScript，被称为“动态类型”（dynamically typed）的编程语言，意思是虽然编程语言中有不同的数据类型，但是你定义的变量并不会在定义后，被限制为某一数据类型。

### [Number 类型](https://zh.javascript.info/types#number-lei-xing)

```javascript
let n = 123;
n = 12.345;
```

*number* 类型代表整数和浮点数。

数字可以有很多操作，比如，乘法 `*`、除法 `/`、加法 `+`、减法 `-` 等等。

除了常规的数字，还包括所谓的“特殊数值（“special numeric values”）”也属于这种类型：`Infinity`、`-Infinity` 和 `NaN`。

- `Infinity` 代表数学概念中的 [无穷大](https://en.wikipedia.org/wiki/Infinity) ∞。是一个比任何数字都大的特殊值。

  我们可以通过除以 0 来得到它：

  ```javascript
  alert( 1 / 0 ); // Infinity
  ```

  或者在代码中直接使用它：

  ```javascript
  alert( Infinity ); // Infinity
  ```

- `NaN` 代表一个计算错误。它是一个不正确的或者一个未定义的数学操作所得到的结果，比如：

  ```javascript
  alert( "not a number" / 2 ); // NaN，这样的除法是错误的
  ```

  `NaN` 是粘性的。任何对 `NaN` 的进一步操作都会返回 `NaN`：

  ```javascript
  alert( "not a number" / 2 + 5 ); // NaN
  ```

  所以，如果在数学表达式中有一个 `NaN`，会被传播到最终结果。

**数学运算是安全的**

在 JavaScript 中做数学运算是安全的。我们可以做任何事：除以 0，将非数字字符串视为数字，等等。

脚本永远不会因为一个致命的错误（“死亡”）而停止。最坏的情况下，我们会得到 `NaN` 的结果。

特殊的数值属于 “number” 类型。当然，对“特殊的数值”这个词的一般认识是，它们并不是数字。

我们将在 [数字类型](https://zh.javascript.info/number) 一节中学习数字的更多细节。

### [BigInt 类型](https://zh.javascript.info/types#bigint-lei-xing)

在 JavaScript 中，“number” 类型无法表示大于 `(253-1)`（即 `9007199254740991`），或小于 `-(253-1)` 的整数。这是其内部表示形式导致的技术限制。

在大多数情况下，这个范围就足够了，但有时我们需要很大的数字，例如用于加密或微秒精度的时间戳。

`BigInt` 类型是最近被添加到 JavaScript 语言中的，用于表示任意长度的整数。

可以通过将 `n` 附加到整数字段的末尾来创建 `BigInt` 值。

```javascript
// 尾部的 "n" 表示这是一个 BigInt 类型
const bigInt = 1234567890123456789012345678901234567890n;
```

由于很少需要 `BigInt` 类型的数字，我们在这没有对其进行讲解，我们在单独的章节 [BigInt](https://zh.javascript.info/bigint) 中专门对其进行了介绍。当你需要使用那样的大数字的时候，可以去阅读该章节。

**兼容性问题**

目前 Firefox/Chrome/Edge/Safari 已经支持 `BigInt` 了，但 IE 还没有。

你可以查看 [*MDN* BigInt 兼容性表](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#Browser_compatibility) 以了解哪些版本的浏览器已经支持 BigInt 了。

### [String 类型](https://zh.javascript.info/types#string-lei-xing)

JavaScript 中的字符串必须被括在引号里。

```javascript
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
```

在 JavaScript 中，有三种包含字符串的方式。

1. 双引号：`"Hello"`.
2. 单引号：`'Hello'`.
3. 反引号：``Hello``.

双引号和单引号都是“简单”引用，在 JavaScript 中两者几乎没有什么差别。

反引号是 **功能扩展** 引号。它们允许我们通过将变量和表达式包装在 `${…}` 中，来将它们嵌入到字符串中。例如：

```javascript
let name = "John";

// 嵌入一个变量
alert( `Hello, ${name}!` ); // Hello, John!

// 嵌入一个表达式
alert( `the result is ${1 + 2}` ); // the result is 3
```

`${…}` 内的表达式会被计算，计算结果会成为字符串的一部分。可以在 `${…}` 内放置任何东西：诸如名为 `name` 的变量，或者诸如 `1 + 2` 的算数表达式，或者其他一些更复杂的。

需要注意的是，这仅仅在反引号内有效，其他引号不允许这种嵌入。

```javascript
alert( "the result is ${1 + 2}" ); // the result is ${1 + 2}（使用双引号则不会计算 ${…} 中的内容）
```

我们会在 [字符串](https://zh.javascript.info/string) 一节中学习字符串的更多细节。

**JavaScript 中没有 \*character\* 类型。**

在一些语言中，单个字符有一个特殊的 “character” 类型，在 C 语言和 Java 语言中被称为 “char”。

在 JavaScript 中没有这种类型。只有一种 `string` 类型，一个字符串可以包含零个（为空）、一个或多个字符。

### [Boolean 类型（逻辑类型）](https://zh.javascript.info/types#boolean-lei-xing-luo-ji-lei-xing)

boolean 类型仅包含两个值：`true` 和 `false`。

这种类型通常用于存储表示 yes 或 no 的值：`true` 意味着 “yes，正确”，`false` 意味着 “no，不正确”。

比如：

```javascript
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
```

布尔值也可作为比较的结果：

```javascript
let isGreater = 4 > 1;

alert( isGreater ); // true（比较的结果是 "yes"）
```

更详细的内容将会在 [逻辑运算符](https://zh.javascript.info/logical-operators) 一节中介绍。

### [“null” 值](https://zh.javascript.info/types#null-zhi)

特殊的 `null` 值不属于上述任何一种类型。

它构成了一个独立的类型，只包含 `null` 值：

```javascript
let age = null;
```

相比较于其他编程语言，JavaScript 中的 `null` 不是一个“对不存在的 `object` 的引用”或者 “null 指针”。

JavaScript 中的 `null` 仅仅是一个代表“无”、“空”或“值未知”的特殊值。

上面的代码表示 `age` 是未知的。

### [“undefined” 值](https://zh.javascript.info/types#undefined-zhi)

特殊值 `undefined` 和 `null` 一样自成类型。

`undefined` 的含义是 `未被赋值`。

如果一个变量已被声明，但未被赋值，那么它的值就是 `undefined`：

```javascript
let age;

alert(age); // 弹出 "undefined"
```

从技术上讲，可以显式地将 `undefined` 赋值给变量：

```javascript
let age = 100;

// 将值修改为 undefined
age = undefined;

alert(age); // "undefined"
```

……但是不建议这样做。通常，使用 `null` 将一个“空”或者“未知”的值写入变量中，而 `undefined` 则保留作为未进行初始化的事物的默认初始值。

### [object 类型和 symbol 类型](https://zh.javascript.info/types#object-lei-xing-he-symbol-lei-xing)

`object` 类型是一个特殊的类型。

其他所有的数据类型都被称为“原始类型”，因为它们的值只包含一个单独的内容（字符串、数字或者其他）。相反，`object` 则用于储存数据集合和更复杂的实体。

因为它非常重要，所以我们对其进行单独讲解。在充分学习了原始类型后，我们将会在 [对象](https://zh.javascript.info/object) 一章中介绍 `object`。

`symbol` 类型用于创建对象的唯一标识符。我们在这里提到 `symbol` 类型是为了完整性，但我们要在学完 `object` 类型后再学习它。

### [typeof 运算符](https://zh.javascript.info/types#type-typeof)

`typeof` 运算符返回参数的类型。当我们想要分别处理不同类型值的时候，或者想快速进行数据类型检验时，非常有用。

它支持两种语法形式：

1. 作为运算符：`typeof x`。
2. 函数形式：`typeof(x)`。

换言之，有括号和没有括号，得到的结果是一样的。

对 `typeof x` 的调用会以字符串的形式返回数据类型：

```javascript
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
```

最后三行可能需要额外的说明：

1. `Math` 是一个提供数学运算的内建 `object`。我们会在 [数字类型](https://zh.javascript.info/number) 一节中学习它。此处仅作为一个 `object` 的示例。
2. `typeof null` 的结果是 `"object"`。这是官方承认的 `typeof` 的行为上的错误，这个问题来自于 JavaScript 语言的早期，并为了兼容性而保留了下来。`null` 绝对不是一个 `object`。`null` 有自己的类型，它是一个特殊值。
3. `typeof alert` 的结果是 `"function"`，因为 `alert` 在 JavaScript 语言中是一个函数。我们会在下一章学习函数，那时我们会了解到，在 JavaScript 语言中没有一个特别的 “function” 类型。函数隶属于 `object` 类型。但是 `typeof` 会对函数区分对待，并返回 `"function"`。这也是来自于 JavaScript 语言早期的问题。从技术上讲，这种行为是不正确的，但在实际编程中却非常方便。

### [总结](https://zh.javascript.info/types#zong-jie)

JavaScript 中有八种基本的数据类型（译注：前七种为基本数据类型，也称为原始类型，而 `object` 为复杂数据类型）。

- `number` 用于任何类型的数字：整数或浮点数，在 `±(253-1)` 范围内的整数。
- `bigint` 用于任意长度的整数。
- `string` 用于字符串：一个字符串可以包含 0 个或多个字符，所以没有单独的单字符类型。
- `boolean` 用于 `true` 和 `false`。
- `null` 用于未知的值 —— 只有一个 `null` 值的独立类型。
- `undefined` 用于未定义的值 —— 只有一个 `undefined` 值的独立类型。
- `symbol` 用于唯一的标识符。
- `object` 用于更复杂的数据结构。

我们可以通过 `typeof` 运算符查看存储在变量中的数据类型。

- 两种形式：`typeof x` 或者 `typeof(x)`。
- 以字符串的形式返回类型名称，例如 `"string"`。
- `typeof null` 会返回 `"object"` —— 这是 JavaScript 编程语言的一个错误，实际上它并不是一个 `object`。

在接下来的章节中，我们将重点介绍原始类型值，当你掌握了原始数据类型后，我们将继续学习 `object`。

### [任务](https://zh.javascript.info/types#tasks)

#### [字符串的引号](https://zh.javascript.info/types#zi-fu-chuan-de-yin-hao)



重要程度: 5

下面的脚本会输出什么？

```javascript
let name = "Ilya";

alert( `hello ${1}` ); // ?

alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` ); // ?
```

解决方案

反引号将包装在 `${...}` 中的表达式嵌入到了字符串。

```javascript
let name = "Ilya";

// 表达式为数字 1
alert( `hello ${1}` ); // hello 1

// 表达式是一个字符串 "name"
alert( `hello ${"name"}` ); // hello name

// 表达式是一个变量，嵌入进去了。
alert( `hello ${name}` ); // hello Ilya
```



## 交互：alert、prompt 和 confirm

由于我们将使用浏览器作为我们的演示环境，让我们看几个与用户交互的函数：`alert`，`prompt` 和`confirm`。

### [alert](https://zh.javascript.info/alert-prompt-confirm#alert)

这个我们前面已经看到过了。它会显示一条信息，并等待用户按下 “OK”。

例如：

```javascript
alert("Hello");
```

弹出的这个带有信息的小窗口被称为 **模态窗**。“modal” 意味着用户不能与页面的其他部分（例如点击其他按钮等）进行交互，直到他们处理完窗口。在上面示例这种情况下 —— 直到用户点击“确定”按钮。

### [prompt](https://zh.javascript.info/alert-prompt-confirm#prompt)

`prompt` 函数接收两个参数：

```javascript
result = prompt(title, [default]);
```

浏览器会显示一个带有文本消息的模态窗口，还有 input 框和确定/取消按钮。

- `title`

  显示给用户的文本

- `default`

  可选的第二个参数，指定 input 框的初始值。

**语法中的方括号 `[...]`**

上述语法中 `default` 周围的方括号表示该参数是可选的，不是必需的。

访问者可以在提示输入栏中输入一些内容，然后按“确定”键。然后我们在 `result` 中获取该文本。或者他们可以按取消键或按 Esc 键取消输入，然后我们得到 `null` 作为 `result`。

`prompt` 将返回用户在 `input` 框内输入的文本，如果用户取消了输入，则返回 `null`。

举个例子：

```javascript
let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!
```

**IE 浏览器会提供默认值**

第二个参数是可选的。但是如果我们不提供的话，Internet Explorer 会把 `"undefined"` 插入到 prompt。

我们可以在 Internet Explorer 中运行下面这行代码来看看效果：

```javascript
let test = prompt("Test");
```

所以，为了 prompt 在 IE 中有好的效果，我们建议始终提供第二个参数：

```javascript
let test = prompt("Test", ''); // <-- 用于 IE 浏览器
```

### [confirm](https://zh.javascript.info/alert-prompt-confirm#confirm)

语法：

```javascript
result = confirm(question);
```

`confirm` 函数显示一个带有 `question` 以及确定和取消两个按钮的模态窗口。

点击确定返回 `true`，点击取消返回 `false`。

例如：

```javascript
let isBoss = confirm("Are you the boss?");

alert( isBoss ); // 如果“确定”按钮被按下，则显示 true
```

### [总结](https://zh.javascript.info/alert-prompt-confirm#zong-jie)

我们学习了与用户交互的 3 个浏览器的特定函数：

- `alert`

  显示信息。

- `prompt`

  显示信息要求用户输入文本。点击确定返回文本，点击取消或按下 Esc 键返回 `null`。

- `confirm`

  显示信息等待用户点击确定或取消。点击确定返回 `true`，点击取消或按下 Esc 键返回 `false`。

这些方法都是模态的：它们暂停脚本的执行，并且不允许用户与该页面的其余部分进行交互，直到窗口被解除。

上述所有方法共有两个限制：

1. 模态窗口的确切位置由浏览器决定。通常在页面中心。
2. 窗口的确切外观也取决于浏览器。我们不能修改它。

这就是简单的代价。还有其他一些方法可以显示更漂亮的窗口，并与用户进行更丰富的交互，但如果“花里胡哨”不是非常重要，那使用本节讲的这些方法也挺好。

### [任务](https://zh.javascript.info/alert-prompt-confirm#tasks)

#### [创建一个简单的页面](https://zh.javascript.info/alert-prompt-confirm#chuang-jian-yi-ge-jian-dan-de-ye-mian)



重要程度: 4

创建一个要求用户输入 `name`，并通过浏览器窗口对键入的内容进行输出的 web 页面。

[运行 demo](https://zh.javascript.info/alert-prompt-confirm#)

解决方案

JavaScript 代码：

```javascript
let name = prompt("What is your name?", "");
alert(name);
```

整个页面的代码：

```html
<!DOCTYPE html>
<html>
<body>

  <script>
    'use strict';

    let name = prompt("What is your name?", "");
    alert(name);
  </script>

</body>
</html>
```



## 类型转换

大多数情况下，运算符和函数会自动将赋予它们的值转换为正确的类型。

比如，`alert` 会自动将任何值都转换为字符串以进行显示。算术运算符会将值转换为数字。

在某些情况下，我们需要将值显式地转换为我们期望的类型。

**对象还未纳入讨论中**

在本章中，我们不会讨论 object 类型。目前，我们将只学习原始类型。

之后，在我们学习完 object 类型后，我们会在 [对象 — 原始值转换](https://zh.javascript.info/object-toprimitive) 一章中学习对象 — 原始值转换。

### [字符串转换](https://zh.javascript.info/type-conversions#zi-fu-chuan-zhuan-huan)

当我们需要一个字符串形式的值时，就会进行字符串转换。

比如，`alert(value)` 将 `value` 转换为字符串类型，然后显示这个值。

我们也可以显式地调用 `String(value)` 来将 `value` 转换为字符串类型：

```javascript
let value = true;
alert(typeof value); // boolean

value = String(value); // 现在，值是一个字符串形式的 "true"
alert(typeof value); // string
```

字符串转换最明显。`false` 变成 `"false"`，`null` 变成 `"null"` 等。

### [数字型转换](https://zh.javascript.info/type-conversions#shu-zi-xing-zhuan-huan)

在算术函数和表达式中，会自动进行 number 类型转换。

比如，当把除法 `/` 用于非 number 类型：

```javascript
alert( "6" / "2" ); // 3, string 类型的值被自动转换成 number 类型后进行计算
```

我们也可以使用 `Number(value)` 显式地将这个 `value` 转换为 number 类型。

```javascript
let str = "123";
alert(typeof str); // string

let num = Number(str); // 变成 number 类型 123

alert(typeof num); // number
```

当我们从 string 类型源（如文本表单）中读取一个值，但期望输入一个数字时，通常需要进行显式转换。

如果该字符串不是一个有效的数字，转换的结果会是 `NaN`。例如：

```javascript
let age = Number("an arbitrary string instead of a number");

alert(age); // NaN，转换失败
```

number 类型转换规则：

| 值              | 变成……                                                       |
| :-------------- | :----------------------------------------------------------- |
| `undefined`     | `NaN`                                                        |
| `null`          | `0`                                                          |
| `true 和 false` | `1` and `0`                                                  |
| `string`        | 去掉首尾空格后的纯数字字符串中含有的数字。如果剩余字符串为空，则转换结果为 `0`。否则，将会从剩余字符串中“读取”数字。当类型转换出现 error 时返回 `NaN`。 |

例子：

```javascript
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN（从字符串“读取”数字，读到 "z" 时出现错误）
alert( Number(true) );        // 1
alert( Number(false) );       // 0
```

请注意 `null` 和 `undefined` 在这有点不同：`null` 变成数字 `0`，`undefined` 变成 `NaN`。

大多数数学运算符也执行这种转换，我们将在下一节中进行介绍。

### [布尔型转换](https://zh.javascript.info/type-conversions#bu-er-xing-zhuan-huan)

布尔（boolean）类型转换是最简单的一个。

它发生在逻辑运算中（稍后我们将进行条件判断和其他类似的东西），但是也可以通过调用 Boolean(value) 显式地进行转换。

转换规则如下：

- 直观上为“空”的值（如 `0`、空字符串、`null`、`undefined` 和 `NaN`）将变为 `false`。
- 其他值变成 `true`。

比如：

```javascript
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
```

**请注意：包含 0 的字符串 `"0"` 是 `true`**

一些编程语言（比如 PHP）视 `"0"` 为 `false`。但在 JavaScript 中，非空的字符串总是 `true`。

```javascript
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // 空白，也是 true（任何非空字符串都是 true）
```

### [总结](https://zh.javascript.info/type-conversions#zong-jie)

有三种常用的类型转换：转换为 string 类型、转换为 number 类型和转换为 boolean 类型。

**字符串转换** —— 转换发生在输出内容的时候，也可以通过 `String(value)` 进行显式转换。原始类型值的 string 类型转换通常是很明显的。

**数字型转换** —— 转换发生在进行算术操作时，也可以通过 `Number(value)` 进行显式转换。

数字型转换遵循以下规则：

| 值             | 变成……                                                       |
| :------------- | :----------------------------------------------------------- |
| `undefined`    | `NaN`                                                        |
| `null`         | `0`                                                          |
| `true / false` | `1 / 0`                                                      |
| `string`       | “按原样读取”字符串，两端的空白会被忽略。空字符串变成 `0`。转换出错则输出 `NaN`。 |

**布尔型转换** —— 转换发生在进行逻辑操作时，也可以通过 `Boolean(value)` 进行显式转换。

布尔型转换遵循以下规则：

| 值                                    | 变成……  |
| :------------------------------------ | :------ |
| `0`, `null`, `undefined`, `NaN`, `""` | `false` |
| 其他值                                | `true`  |

上述的大多数规则都容易理解和记忆。人们通常会犯错误的值得注意的例子有以下几个：

- 对 `undefined` 进行数字型转换时，输出结果为 `NaN`，而非 `0`。
- 对 `"0"` 和只有空格的字符串（比如：`" "`）进行布尔型转换时，输出结果为 `true`。

我们在本小节没有讲 object 类型的转换。在我们学习完更多关于 JavaScript 的基础知识后，我们会在专门介绍 object 的章节 [对象 — 原始值转换](https://zh.javascript.info/object-toprimitive) 中详细讲解 object 类型转换。



## 基础运算符，数学

我们从学校里了解到过很多运算符，比如说加号 `+`、乘号 `*`、减号 `-` 等。

在本章中，我们将从简单的运算符开始，然后着重介绍 JavaScript 特有的方面，这些是在学校中学习的数学所没有涵盖的。

### [术语：“一元运算符”，“二元运算符”，“运算元”](https://zh.javascript.info/operators#shu-yu-yi-yuan-yun-suan-fu-er-yuan-yun-suan-fu-yun-suan-yuan)

在正式开始前，我们先简单浏览一下常用术语。

- **运算元** —— 运算符应用的对象。比如说乘法运算 `5 * 2`，有两个运算元：左运算元 `5` 和右运算元 `2`。有时候人们也称其为“参数”而不是“运算元”。

- 如果一个运算符对应的只有一个运算元，那么它是 **一元运算符**。比如说一元负号运算符（unary negation）`-`，它的作用是对数字进行正负转换：

  ```javascript
  let x = 1;
  
  x = -x;
  alert( x ); // -1，一元负号运算符生效
  ```

- 如果一个运算符拥有两个运算元，那么它是 **二元运算符**。减号还存在二元运算符形式：

  ```javascript
  let x = 1, y = 3;
  alert( y - x ); // 2，二元运算符减号做减运算
  ```

  严格地说，在上面的示例中，我们使用一个相同的符号表征了两个不同的运算符：负号运算符，即反转符号的一元运算符，减法运算符，是从另一个数减去一个数的二元运算符。

### [数学](https://zh.javascript.info/operators#shu-xue)

支持以下数学运算：

- 加法 `+`,
- 减法 `-`,
- 乘法 `*`,
- 除法 `/`,
- 取余 `%`,
- 求幂 `**`.

前四个都很简单，而 `%` 和 `**` 则需要说一说。

#### [取余 %](https://zh.javascript.info/operators#qu-yu)

取余运算符是 `%`，尽管它看起来很像百分数，但实际并无关联。

`a % b` 的结果是 `a` 整除 `b` 的 [余数](https://zh.wikipedia.org/zh-hans/余数))。

例如：

```javascript
alert( 5 % 2 ); // 1，5 除以 2 的余数
alert( 8 % 3 ); // 2，8 除以 3 的余数
```

#### [求幂 **](https://zh.javascript.info/operators#qiu-mi)

求幂运算 `a ** b` 是 `a` 乘以自身 `b` 次。

例如：

```javascript
alert( 2 ** 2 ); // 4  (2 * 2，自乘 2 次)
alert( 2 ** 3 ); // 8  (2 * 2 * 2，自乘 3 次)
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2，自乘 4 次)
```

在数学上，求幂的定义也适用于非整数。例如，平方根是以 `1/2` 为单位的求幂：

```javascript
alert( 4 ** (1/2) ); // 2（1/2 次方与平方根相同)
alert( 8 ** (1/3) ); // 2（1/3 次方与立方根相同)
```

### [用二元运算符 + 连接字符串](https://zh.javascript.info/operators#yong-er-yuan-yun-suan-fu-lian-jie-zi-fu-chuan)

我们来看一些学校算术未涉及的 JavaScript 运算符的特性。

通常，加号 `+` 用于求和。

但是如果加号 `+` 被应用于字符串，它将合并（连接）各个字符串：

```javascript
let s = "my" + "string";
alert(s); // mystring
```

注意：只要任意一个运算元是字符串，那么另一个运算元也将被转化为字符串。

举个例子：

```javascript
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
```

你看，第一个运算元和第二个运算元，哪个是字符串并不重要。

下面是一个更复杂的例子：

```javascript
alert(2 + 2 + '1' ); // "41"，不是 "221"
```

在这里，运算符是按顺序工作。第一个 `+` 将两个数字相加，所以返回 `4`，然后下一个 `+` 将字符串 `1` 加入其中，所以就是 `4 + '1' = 41`。

二元 `+` 是唯一一个以这种方式支持字符串的运算符。其他算术运算符只对数字起作用，并且总是将其运算元转换为数字。

下面是减法和除法运算的示例：

```javascript
alert( 6 - '2' ); // 4，将 '2' 转换为数字
alert( '6' / '2' ); // 3，将两个运算元都转换为数字
```

### [数字转化，一元运算符 +](https://zh.javascript.info/operators#shu-zi-zhuan-hua-yi-yuan-yun-suan-fu)

加号 `+` 有两种形式。一种是上面我们刚刚讨论的二元运算符，还有一种是一元运算符。

一元运算符加号，或者说，加号 `+` 应用于单个值，对数字没有任何作用。但是如果运算元不是数字，加号 `+` 则会将其转化为数字。

例如：

```javascript
// 对数字无效
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// 转化非数字
alert( +true ); // 1
alert( +"" );   // 0
```

它的效果和 `Number(...)` 相同，但是更加简短。

我们经常会有将字符串转化为数字的需求。比如，如果我们正在从 HTML 表单中取值，通常得到的都是字符串。如果我们想对它们求和，该怎么办？

二元运算符加号会把它们合并成字符串：

```javascript
let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23"，二元运算符加号合并字符串
```

如果我们想把它们当做数字对待，我们需要转化它们，然后再求和：

```javascript
let apples = "2";
let oranges = "3";

// 在二元运算符加号起作用之前，所有的值都被转化为了数字
alert( +apples + +oranges ); // 5

// 更长的写法
// alert( Number(apples) + Number(oranges) ); // 5
```

从一个数学家的视角来看，大量的加号可能很奇怪。但是从一个程序员的视角，没什么好奇怪的：一元运算符加号首先起作用，它们将字符串转为数字，然后二元运算符加号对它们进行求和。

为什么一元运算符先于二元运算符作用于运算元？接下去我们将讨论到，这是由于它们拥有 **更高的优先级**。

### [运算符优先级](https://zh.javascript.info/operators#yun-suan-fu-you-xian-ji)

如果一个表达式拥有超过一个运算符，执行的顺序则由 **优先级** 决定。换句话说，所有的运算符中都隐含着优先级顺序。

从小学开始，我们就知道在表达式 `1 + 2 * 2` 中，乘法先于加法计算。这就是一个优先级问题。乘法比加法拥有 **更高的优先级**。

圆括号拥有最高优先级，所以如果我们对现有的运算顺序不满意，我们可以使用圆括号来修改运算顺序，就像这样：`(1 + 2) * 2`。

在 JavaScript 中有众多运算符。每个运算符都有对应的优先级数字。数字越大，越先执行。如果优先级相同，则按照由左至右的顺序执行。

这是一个摘抄自 Mozilla 的 [优先级表](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)（你没有必要把这全记住，但要记住一元运算符优先级高于二元运算符）：

| 优先级 | 名称     | 符号 |
| :----- | :------- | :--- |
| …      | …        | …    |
| 17     | 一元加号 | `+`  |
| 17     | 一元负号 | `-`  |
| 16     | 求幂     | `**` |
| 15     | 乘号     | `*`  |
| 15     | 除号     | `/`  |
| 13     | 加号     | `+`  |
| 13     | 减号     | `-`  |
| …      | …        | …    |
| 3      | 赋值符   | `=`  |
| …      | …        | …    |

我们可以看到，“一元加号运算符”的优先级是 `17`，高于“二元加号运算符”的优先级 `13`。这也是为什么表达式 `"+apples + +oranges"` 中的一元加号先生效，然后才是二元加法。

### [赋值运算符](https://zh.javascript.info/operators#fu-zhi-yun-suan-fu)

我们知道赋值符号 `=` 也是一个运算符。从优先级表中可以看到它的优先级非常低，只有 `3`。

这也是为什么，当我们赋值时，比如 `x = 2 * 2 + 1`，所有的计算先执行，然后 `=` 才执行，将计算结果存储到 `x`。

```javascript
let x = 2 * 2 + 1;

alert( x ); // 5
```

#### [赋值 = 返回一个值](https://zh.javascript.info/operators#fu-zhi-fan-hui-yi-ge-zhi)

`=` 是一个运算符，而不是一个有着“魔法”作用的语言结构。

在 JavaScript 中，大多数运算符都会返回一个值。这对于 `+` 和 `-` 来说是显而易见的，但对于 `=` 来说也是如此。

语句 `x = value` 将值 `value` 写入 `x` **然后返回 x**。

下面是一个在复杂语句中使用赋值的例子：

```javascript
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0
```

上面这个例子，`(a = b + 1)` 的结果是赋给 `a` 的值（也就是 `3`）。然后该值被用于进一步的运算。

有趣的代码，不是吗？我们应该了解它的工作原理，因为有时我们会在 JavaScript 库中看到它。

不过，请不要写这样的代码。这样的技巧绝对不会使代码变得更清晰或可读。

#### [链式赋值（Chaining assignments）](https://zh.javascript.info/operators#lian-shi-fu-zhi-chainingassignments)

另一个有趣的特性是链式赋值：

```javascript
let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4
```

链式赋值从右到左进行计算。首先，对最右边的表达式 `2 + 2` 求值，然后将其赋给左边的变量：`c`、`b` 和 `a`。最后，所有的变量共享一个值。

同样，出于可读性，最好将这种代码分成几行：

```javascript
c = 2 + 2;
b = c;
a = c;
```

这样可读性更强，尤其是在快速浏览代码的时候。

### [原地修改](https://zh.javascript.info/operators#yuan-di-xiu-gai)

我们经常需要对一个变量做运算，并将新的结果存储在同一个变量中。

例如：

```javascript
let n = 2;
n = n + 5;
n = n * 2;
```

可以使用运算符 `+=` 和 `*=` 来缩写这种表示。

```javascript
let n = 2;
n += 5; // 现在 n = 7（等同于 n = n + 5）
n *= 2; // 现在 n = 14（等同于 n = n * 2）

alert( n ); // 14
```

所有算术和位运算符都有简短的“修改并赋值”运算符：`/=` 和 `-=` 等。

这类运算符的优先级与普通赋值运算符的优先级相同，所以它们在大多数其他运算之后执行：

```javascript
let n = 2;

n *= 3 + 5;

alert( n ); // 16 （右边部分先被计算，等同于 n *= 8）
```

### [自增/自减](https://zh.javascript.info/operators#zi-zeng-zi-jian)

对一个数进行加一、减一是最常见的数学运算符之一。

所以，对此有一些专门的运算符：

- **自增** `++` 将变量与 1 相加：

  ```javascript
  let counter = 2;
  counter++;      // 和 counter = counter + 1 效果一样，但是更简洁
  alert( counter ); // 3
  ```

- **自减** `--` 将变量与 1 相减：

  ```javascript
  let counter = 2;
  counter--;      // 和 counter = counter - 1 效果一样，但是更简洁
  alert( counter ); // 1
  ```

**重要：**

自增/自减只能应用于变量。试一下，将其应用于数值（比如 `5++`）则会报错。

运算符 `++` 和 `--` 可以置于变量前，也可以置于变量后。

- 当运算符置于变量后，被称为“后置形式”：`counter++`。
- 当运算符置于变量前，被称为“前置形式”：`++counter`。

两者都做同一件事：将变量 `counter` 与 `1` 相加。

那么它们有区别吗？有，但只有当我们使用 `++/--` 的返回值时才能看到区别。

详细点说。我们知道，所有的运算符都有返回值。自增/自减也不例外。前置形式返回一个新的值，但后置返回原来的值（做加法/减法之前的值）。

为了直观看到区别，看下面的例子：

```javascript
let counter = 1;
let a = ++counter; // (*)

alert(a); // 2
```

`(*)` 所在的行是前置形式 `++counter`，对 `counter` 做自增运算，返回的是新的值 `2`。因此 `alert` 显示的是 `2`。

下面让我们看看后置形式：

```javascript
let counter = 1;
let a = counter++; // (*) 将 ++counter 改为 counter++

alert(a); // 1
```

`(*)` 所在的行是后置形式 `counter++`，它同样对 `counter` 做加法，但是返回的是 **旧值**（做加法之前的值）。因此 `alert` 显示的是 `1`。

总结：

- 如果自增/自减的值不会被使用，那么两者形式没有区别：

  ```javascript
  let counter = 0;
  counter++;
  ++counter;
  alert( counter ); // 2，以上两行作用相同
  ```

- 如果我们想要对变量进行自增操作，**并且** 需要立刻使用自增后的值，那么我们需要使用前置形式：

  ```javascript
  let counter = 0;
  alert( ++counter ); // 1
  ```

- 如果我们想要将一个数加一，但是我们想使用其自增之前的值，那么我们需要使用后置形式：

  ```javascript
  let counter = 0;
  alert( counter++ ); // 0
  ```

**自增/自减和其它运算符的对比**

`++/--` 运算符同样可以在表达式内部使用。它们的优先级比绝大部分的算数运算符要高。

举个例子：

```javascript
let counter = 1;
alert( 2 * ++counter ); // 4
```

与下方例子对比：

```javascript
let counter = 1;
alert( 2 * counter++ ); // 2，因为 counter++ 返回的是“旧值”
```

尽管从技术层面上来说可行，但是这样的写法会降低代码的可阅读性。在一行上做多个操作 —— 这样并不好。

当阅读代码时，快速的视觉“纵向”扫描会很容易漏掉 `counter++`，这样的自增操作并不明显。

我们建议用“一行一个行为”的模式：

```javascript
let counter = 1;
alert( 2 * counter );
counter++;
```

### [位运算符](https://zh.javascript.info/operators#wei-yun-suan-fu)

位运算符把运算元当做 32 位整数，并在它们的二进制表现形式上操作。

这些运算符不是 JavaScript 特有的。大部分的编程语言都支持这些运算符。

下面是位运算符：

- 按位与 ( `&` )
- 按位或 ( `|` )
- 按位异或 ( `^` )
- 按位非 ( `~` )
- 左移 ( `<<` )
- 右移 ( `>>` )
- 无符号右移 ( `>>>` )

这些运算符很少被使用，一般是我们需要在最低级别（位）上操作数字时才使用。我们不会很快用到这些运算符，因为在 Web 开发中很少使用它们，但在某些特殊领域中，例如密码学，它们很有用。当你需要了解它们的时候，可以阅读 MDN 上的 [位操作符](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Bitwise) 章节。

### [逗号运算符](https://zh.javascript.info/operators#dou-hao-yun-suan-fu)

逗号运算符 `,` 是最少见最不常使用的运算符之一。有时候它会被用来写更简短的代码，因此为了能够理解代码，我们需要了解它。

逗号运算符能让我们处理多个语句，使用 `,` 将它们分开。每个语句都运行了，但是只有最后的语句的结果会被返回。

举个例子：

```javascript
let a = (1 + 2, 3 + 4);

alert( a ); // 7（3 + 4 的结果）
```

这里，第一个语句 `1 + 2` 运行了，但是它的结果被丢弃了。随后计算 `3 + 4`，并且该计算结果被返回。

**逗号运算符的优先级非常低**

请注意逗号运算符的优先级非常低，比 `=` 还要低，因此上面你的例子中圆括号非常重要。

如果没有圆括号：`a = 1 + 2, 3 + 4` 会先执行 `+`，将数值相加得到 `a = 3, 7`，然后赋值运算符 `=` 执行, ‘a = 3’，然后逗号之后的数值 `7` 不会再执行，它被忽略掉了。相当于 `(a = 1 + 2), 3 + 4`。

为什么我们需要这样一个运算符，它只返回最后一个值呢？

有时候，人们会使用它把几个行为放在一行上来进行复杂的运算。

举个例子：

```javascript
// 一行上有三个运算符
for (a = 1, b = 3, c = a * b; a < 10; a++) {
 ...
}
```

这样的技巧在许多 JavaScript 框架中都有使用，这也是为什么我们提到它。但是通常它并不能提升代码的可读性，使用它之前，我们要想清楚。

### [任务](https://zh.javascript.info/operators#tasks)

#### [后置运算符和前置运算符](https://zh.javascript.info/operators#hou-zhi-yun-suan-fu-he-qian-zhi-yun-suan-fu)



重要程度: 5

以下代码中变量 `a`、`b`、`c`、`d` 的最终值分别是多少？

```javascript
let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?
```

解决方案

答案如下：

- `a = 2`
- `b = 2`
- `c = 2`
- `d = 1`

```javascript
let a = 1, b = 1;

alert( ++a ); // 2，前置运算符返回最新值
alert( b++ ); // 1，后置运算符返回旧值

alert( a ); // 2，自增一次
alert( b ); // 2，自增一次
```



#### [赋值结果](https://zh.javascript.info/operators#fu-zhi-jie-guo)



重要程度: 3

下面这段代码运行完成后，代码中的 `a` 和 `x` 的值是多少？

```javascript
let a = 2;

let x = 1 + (a *= 2);
```

解决方案

答案如下：

- `a = 4`（乘以 2）
- `x = 5`（相当于计算 1 + 4）



#### [类型转换](https://zh.javascript.info/operators#lei-xing-zhuan-huan)



重要程度: 5

下面这些表达式的结果是什么？

```javascript
"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2
```

好好思考一下，把它们写下来然后和答案比较一下。

解决方案

```javascript
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
7 / 0 = Infinity
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)
```

1. 有字符串的加法 `"" + 1`，首先会将数字 `1` 转换为一个字符串：`"" + 1 = "1"`，然后我们得到 `"1" + 0`，再次应用同样的规则得到最终的结果。
2. 减法 `-`（像大多数数学运算一样）只能用于数字，它会使空字符串 `""` 转换为 `0`。
3. 带字符串的加法会将数字 `5` 加到字符串之后。
4. 减法始终将字符串转换为数字，因此它会使 `" -9 "` 转换为数字 `-9`（忽略了字符串首尾的空格）。
5. `null` 经过数字转换之后会变为 `0`。
6. `undefined` 经过数字转换之后会变为 `NaN`。
7. 字符串转换为数字时，会忽略字符串的首尾处的空格字符。在这里，整个字符串由空格字符组成，包括 `\t`、`\n` 以及它们之间的“常规”空格。因此，类似于空字符串，所以会变为 `0`。



#### [修正加法](https://zh.javascript.info/operators#xiu-zheng-jia-fa)



重要程度: 5

这里有一段代码，要求用户输入两个数字并显示它们的总和。

它的运行结果不正确。下面例子中的输出是 `12`（对于默认的 prompt 的值）。

为什么会这样？修正它。结果应该是 `3`。

```javascript
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12
```

解决方案

原因是 prompt 以字符串的形式返回用户的输入。

所以变量的值分别为 `"1"` 和 `"2"`。

```javascript
let a = "1"; // prompt("First number?", 1);
let b = "2"; // prompt("Second number?", 2);

alert(a + b); // 12
```

我们应该做的是，在 `+` 之前将字符串转换为数字。例如，使用 `Number()` 或在 `prompt` 前加 `+`。

例如，就在 `prompt` 之前加 `+`：

```javascript
let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 3
```

或在 `alert` 中：

```javascript
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 3
```

在最新的代码中，同时使用一元和二元的 `+`。看起来很有趣，不是吗？



## 值的比较

我们知道，在数学中有很多用于比较大小的运算符。

在 JavaScript 中，它们的编写方式如下：

- 大于 / 小于：`a > b`，`a < b`。
- 大于等于 / 小于等于：`a >= b`，`a <= b`。
- 检查两个值的相等：`a == b`，请注意双等号 `==` 表示相等性检查，而单等号 `a = b` 表示赋值。
- 检查两个值不相等。不相等在数学中的符号是 `≠`，但在 JavaScript 中写成 `a != b`。

在本文中，我们将进一步了解不同类型的比较，JavaScript 是如何进行比较的，包括一些重要的特殊性。

在文末给出了一些秘诀，帮助你避免 “JavaScript 陷阱”相关的问题。

### [比较结果为 Boolean 类型](https://zh.javascript.info/comparison#bi-jiao-jie-guo-wei-boolean-lei-xing)

所有比较运算符均返回布尔值：

- `true` —— 表示“yes（是）”，“correct（正确）”或“the truth（真）”。
- `false` —— 表示“no（否）”，“wrong（错误）”或“not the truth（非真）”。

示例：

```javascript
alert( 2 > 1 );  // true（正确）
alert( 2 == 1 ); // false（错误）
alert( 2 != 1 ); // true（正确）
```

和其他类型的值一样，比较的结果可以被赋值给任意变量：

```javascript
let result = 5 > 4; // 把比较的结果赋值给 result
alert( result ); // true
```

### [字符串比较](https://zh.javascript.info/comparison#zi-fu-chuan-bi-jiao)

在比较字符串的大小时，JavaScript 会使用“字典（dictionary）”或“词典（lexicographical）”顺序进行判定。

换言之，字符串是按字符（母）逐个进行比较的。

例如：

```javascript
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
```

字符串的比较算法非常简单：

1. 首先比较两个字符串的首位字符大小。
2. 如果一方字符较大（或较小），则该字符串大于（或小于）另一个字符串。算法结束。
3. 否则，如果两个字符串的首位字符相等，则继续取出两个字符串各自的后一位字符进行比较。
4. 重复上述步骤进行比较，直到比较完成某字符串的所有字符为止。
5. 如果两个字符串的字符同时用完，那么则判定它们相等，否则未结束（还有未比较的字符）的字符串更大。

在上面的第一个例子中，`'Z' > 'A'` 比较在算法的第 1 步就得到了结果。

在第二个例子中，字符串 `Glow` 与 `Glee` 的比较则需要更多步骤，因为需要逐个字符进行比较：

1. `G` 和 `G` 相等。
2. `l` 和 `l` 相等。
3. `o` 比 `e` 大，算法停止，第一个字符串大于第二个。

**非真正的字典顺序，而是 Unicode 编码顺序**

在上面的算法中，比较大小的逻辑与字典或电话簿中的排序很像，但也不完全相同。

比如说，字符串比较对字母大小写是敏感的。大写的 `"A"` 并不等于小写的 `"a"`。哪一个更大呢？实际上小写的 `"a"` 更大。这是因为在 JavaScript 使用的内部编码表中（Unicode），小写字母的字符索引值更大。我们会在 [字符串](https://zh.javascript.info/string) 这章讨论更多关于字符串的细节。

### [不同类型间的比较](https://zh.javascript.info/comparison#bu-tong-lei-xing-jian-de-bi-jiao)

当对不同类型的值进行比较时，JavaScript 会首先将其转化为数字（number）再判定大小。

例如：

```javascript
alert( '2' > 1 ); // true，字符串 '2' 会被转化为数字 2
alert( '01' == 1 ); // true，字符串 '01' 会被转化为数字 1
```

对于布尔类型值，`true` 会被转化为 `1`、`false` 转化为 `0`。

例如：

```javascript
alert( true == 1 ); // true
alert( false == 0 ); // true
```

**一个有趣的现象**

有时候，以下两种情况会同时发生：

- 若直接比较两个值，其结果是相等的。
- 若把两个值转为布尔值，它们可能得出完全相反的结果，即一个是 `true`，一个是 `false`。

例如：

```javascript
let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!
```

对于 JavaScript 而言，这种现象其实挺正常的。因为 JavaScript 会把待比较的值转化为数字后再做比较（因此 `"0"` 变成了 `0`）。若只是将一个变量转化为 `Boolean` 值，则会使用其他的类型转换规则。

### [严格相等](https://zh.javascript.info/comparison#yan-ge-xiang-deng)

普通的相等性检查 `==` 存在一个问题，它不能区分出 `0` 和 `false`：

```javascript
alert( 0 == false ); // true
```

也同样无法区分空字符串和 `false`：

```javascript
alert( '' == false ); // true
```

这是因为在比较不同类型的值时，处于相等判断符号 `==` 两侧的值会先被转化为数字。空字符串和 `false` 也是如此，转化后它们都为数字 0。

如果我们需要区分 `0` 和 `false`，该怎么办？

**严格相等运算符 `===` 在进行比较时不会做任何的类型转换。**

换句话说，如果 `a` 和 `b` 属于不同的数据类型，那么 `a === b` 不会做任何的类型转换而立刻返回 `false`。

让我们试试：

```javascript
alert( 0 === false ); // false，因为被比较值的数据类型不同
```

同样的，与“不相等”符号 `!=` 类似，“严格不相等”表示为 `!==`。

严格相等的运算符虽然写起来稍微长一些，但是它能够很清楚地显示代码意图，降低你犯错的可能性。

### [对 null 和 undefined 进行比较](https://zh.javascript.info/comparison#dui-null-he-undefined-jin-hang-bi-jiao)

当使用 `null` 或 `undefined` 与其他值进行比较时，其返回结果常常出乎你的意料。

- 当使用严格相等 `===` 比较二者时

  它们不相等，因为它们属于不同的类型。`alert( null === undefined ); // false`

- 当使用非严格相等 `==` 比较二者时

  JavaScript 存在一个特殊的规则，会判定它们相等。它们俩就像“一对恋人”，仅仅等于对方而不等于其他任何的值（只在非严格相等下成立）。`alert( null == undefined ); // true`

- 当使用数学式或其他比较方法 `< > <= >=` 时：

  `null/undefined` 会被转化为数字：`null` 被转化为 `0`，`undefined` 被转化为 `NaN`。

下面让我们看看，这些规则会带来什么有趣的现象。同时更重要的是，我们需要从中学会如何远离这些特性带来的“陷阱”。

#### [奇怪的结果：null vs 0](https://zh.javascript.info/comparison#qi-guai-de-jie-guo-nullvs0)

通过比较 `null` 和 0 可得：

```javascript
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
```

是的，上面的结果完全打破了你对数学的认识。在最后一行代码显示“`null` 大于等于 0”的情况下，前两行代码中一定会有一个是正确的，然而事实表明它们的结果都是 false。

为什么会出现这种反常结果，这是因为相等性检查 `==` 和普通比较符 `> < >= <=` 的代码逻辑是相互独立的。进行值的比较时，`null` 会被转化为数字，因此它被转化为了 `0`。这就是为什么（3）中 `null >= 0` 返回值是 true，（1）中 `null > 0` 返回值是 false。

另一方面，`undefined` 和 `null` 在相等性检查 `==` 中不会进行任何的类型转换，它们有自己独立的比较规则，所以除了它们之间互等外，不会等于任何其他的值。这就解释了为什么（2）中 `null == 0` 会返回 false。

#### [特立独行的 undefined](https://zh.javascript.info/comparison#te-li-du-hang-de-undefined)

`undefined` 不应该被与其他值进行比较：

```javascript
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
```

为何它看起来如此厌恶 0？返回值都是 false！

原因如下：

- `(1)` 和 `(2)` 都返回 `false` 是因为 `undefined` 在比较中被转换为了 `NaN`，而 `NaN` 是一个特殊的数值型值，它与任何值进行比较都会返回 `false`。
- `(3)` 返回 `false` 是因为这是一个相等性检查，而 `undefined` 只与 `null` 相等，不会与其他值相等。

#### [避免问题](https://zh.javascript.info/comparison#bi-mian-wen-ti)

我们为何要研究上述示例？我们需要时刻记得这些古怪的规则吗？不，其实不需要。虽然随着代码写得越来越多，我们对这些规则也都会烂熟于胸，但是我们需要更为可靠的方法来避免潜在的问题：

- 除了严格相等 `===` 外，其他但凡是有 `undefined/null` 参与的比较，我们都需要格外小心。
- 除非你非常清楚自己在做什么，否则永远不要使用 `>= > < <=` 去比较一个可能为 `null/undefined` 的变量。对于取值可能是 `null/undefined` 的变量，请按需要分别检查它的取值情况。

### [总结](https://zh.javascript.info/comparison#zong-jie)

- 比较运算符始终返回布尔值。
- 字符串的比较，会按照“词典”顺序逐字符地比较大小。
- 当对不同类型的值进行比较时，它们会先被转化为数字（不包括严格相等检查）再进行比较。
- 在非严格相等 `==` 下，`null` 和 `undefined` 相等且各自不等于任何其他的值。
- 在使用 `>` 或 `<` 进行比较时，需要注意变量可能为 `null/undefined` 的情况。比较好的方法是单独检查变量是否等于 `null/undefined`。

### [任务](https://zh.javascript.info/comparison#tasks)

#### [值的比较](https://zh.javascript.info/comparison#zhi-de-bi-jiao)

重要程度: 5

以下表达式的执行结果是？

```javascript
5 > 4
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"
```

解决方案

```javascript
5 > 4 → true
"apple" > "pineapple" → false
"2" > "12" → true
undefined == null → true
undefined === null → false
null == "\n0\n" → false
null === +"\n0\n" → false
```

结果的原因：

1. 数字间比较大小，显然得 true。
2. 按词典顺序比较，得 false。`"a"` 比 `"p"` 小。
3. 与第 2 题同理，首位字符 `"2"` 大于 `"1"`。
4. `null` 只与 `undefined` 互等。
5. 严格相等模式下，类型不同得 false。
6. 与第 4 题同理，`null` 只与 `undefined` 相等。
7. 不同类型严格不相等。



## 条件分支：if 和 '?'

有时我们需要根据不同条件执行不同的操作。

我们可以使用 `if` 语句和条件运算符 `?`（也称为“问号”运算符）来实现。

### [“if” 语句](https://zh.javascript.info/ifelse#if-yu-ju)

`if(...)` 语句计算括号里的条件表达式，如果计算结果是 `true`，就会执行对应的代码块。

例如：

```javascript
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );
```

在上面这个例子中，条件是一个简单的相等性检查（`year == 2015`），但它还可以更复杂。

如果有多个语句要执行，我们必须将要执行的代码块封装在大括号内：

```javascript
if (year == 2015) {
  alert( "That's correct!" );
  alert( "You're so smart!" );
}
```

建议每次使用 if 语句都用大括号 `{}` 来包装代码块，即使只有一条语句。这样可以提高代码可读性。

### [布尔转换](https://zh.javascript.info/ifelse#bu-er-zhuan-huan)

`if (…)` 语句会计算圆括号内的表达式，并将计算结果转换为布尔型。

让我们回顾一下 [类型转换](https://zh.javascript.info/type-conversions) 一章中的转换规则：

- 数字 `0`、空字符串 `""`、`null`、`undefined` 和 `NaN` 都会被转换成 `false`。因为它们被称为“假值（falsy）”值。
- 其他值被转换为 `true`，所以它们被称为“真值（truthy）”。

所以，下面这个条件下的代码永远不会执行：

```javascript
if (0) { // 0 是假值（falsy）
  ...
}
```

……但下面的条件 —— 始终有效：

```javascript
if (1) { // 1 是真值（truthy）
  ...
}
```

我们也可以将未计算的布尔值传入 `if` 语句，像这样：

```javascript
let cond = (year == 2015); // 相等运算符的结果是 true 或 false

if (cond) {
  ...
}
```

### [“else” 语句](https://zh.javascript.info/ifelse#else-yu-ju)

`if` 语句有时会包含一个可选的 “else” 块。如果判断条件不成立，就会执行它内部的代码。

例如：

```javascript
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // 2015 以外的任何值
}
```

### [多个条件：“else if”](https://zh.javascript.info/ifelse#duo-ge-tiao-jian-elseif)

有时我们需要测试一个条件的几个变体。我们可以通过使用 `else if` 子句实现。

例如：

```javascript
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}
```

在上面的代码中，JavaScript 先先检查 `year < 2015`。如果条件不符合，就会转到下一个条件 `year > 2015`。如果这个条件也不符合，则会显示最后一个 `alert`。

可以有更多的 `else if` 块。结尾的 `else` 是可选的。

### [条件运算符 ‘?’](https://zh.javascript.info/ifelse#tiao-jian-yun-suan-fu)

有时我们需要根据一个条件去赋值一个变量。

如下所示：

```javascript
let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);
```

所谓的“条件”或“问号”运算符让我们可以更简短地达到目的。

这个运算符通过问号 `?` 表示。有时它被称为三元运算符，被称为“三元”是因为该运算符中有三个操作数。实际上它是 JavaScript 中唯一一个有这么多操作数的运算符。

语法：

```javascript
let result = condition ? value1 : value2;
```

计算条件结果，如果结果为真，则返回 `value1`，否则返回 `value2`。

例如：

```javascript
let accessAllowed = (age > 18) ? true : false;
```

技术上讲，我们可以省略 `age > 18` 外面的括号。问号运算符的优先级较低，所以它会在比较运算符 `>` 后执行。

下面这个示例会执行和前面那个示例相同的操作：

```javascript
// 比较运算符 "age > 18" 首先执行
//（不需要将其包含在括号中）
let accessAllowed = age > 18 ? true : false;
```

但括号可以使代码可读性更强，所以我们建议使用它们。

**请注意：**

在上面的例子中，你可以不使用问号运算符，因为比较本身就返回 `true/false`：

```javascript
// 下面代码同样可以实现
let accessAllowed = age > 18;
```

### [多个 ‘?’](https://zh.javascript.info/ifelse#duo-ge)

使用一系列问号 `?` 运算符可以返回一个取决于多个条件的值。

例如：

```javascript
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
```

可能很难一下子看出发生了什么。但经过仔细观察，我们可以看到它只是一个普通的检查序列。

1. 第一个问号检查 `age < 3`。
2. 如果为真 — 返回 `'Hi, baby!'`。否则，会继续执行冒号 `":"` 后的表达式，检查 `age < 18`。
3. 如果为真 — 返回 `'Hello!'`。否则，会继续执行下一个冒号 `":"` 后的表达式，检查 `age < 100`。
4. 如果为真 — 返回 `'Greetings!'`。否则，会继续执行最后一个冒号 `":"` 后面的表达式，返回 `'What an unusual age!'`。

这是使用 `if..else` 实现上面的逻辑的写法：

```javascript
if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}
```

### [‘?’ 的非常规使用](https://zh.javascript.info/ifelse#de-fei-chang-gui-shi-yong)

有时可以使用问号 `?` 来代替 `if` 语句：

```javascript
let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');
```

根据条件 `company =='Netscape'`，要么执行 `?` 后面的第一个表达式并显示对应内容，要么执行第二个表达式并显示对应内容。

在这里我们不是把结果赋值给变量。而是根据条件执行不同的代码。

**不建议这样使用问号运算符。**

这种写法比 `if` 语句更短，对一些程序员很有吸引力。但它的可读性差。

下面是使用 `if` 语句实现相同功能的代码，进行下比较：

```javascript
let company = prompt('Which company created JavaScript?', '');

if (company == 'Netscape') {
  alert('Right!');
} else {
  alert('Wrong.');
}
```

因为我们的眼睛垂直扫描代码。所以，跨越几行的代码块比长而水平的代码更易于理解。

问号 `?` 的作用是根据条件返回一个或另一个值。请正确使用它。当需要执行不同的代码分支时，请使用 `if`。

### [任务](https://zh.javascript.info/ifelse#tasks)

#### [if（值为 0 的字符串）](https://zh.javascript.info/ifelse#if-zhi-wei-0-de-zi-fu-chuan)



重要程度: 5

`alert` 弹窗会出来吗？

```javascript
if ("0") {
  alert( 'Hello' );
}
```

解决方案

**是的，它会**

任何非空字符串（`"0"` 不是空字符串）的逻辑值都是 `true`。

我们可以执行下面的代码来进行验证：

```javascript
if ("0") {
  alert( 'Hello' );
}
```



#### [JavaScript 的名字](https://zh.javascript.info/ifelse#javascript-de-ming-zi)



重要程度: 2

使用 `if..else` 结构，实现提问 “What is the “official” name of JavaScript?” 的代码

如果访问者输入了 “ECMAScript”，输出就提示 “Right!”，否则 — 输出：“Didn’t know? ECMAScript!”

[在新窗口中演示](https://zh.js.cx/task/check-standard/ifelse_task2/)

解决方案

```markup
<!DOCTYPE html>
<html>

<body>
  <script>
    'use strict';

    let value = prompt('What is the "official" name of JavaScript?', '');

    if (value == 'ECMAScript') {
      alert('Right!');
    } else {
      alert("You don't know? ECMAScript!");
    }
  </script>


</body>

</html>
```



#### [显示符号](https://zh.javascript.info/ifelse#xian-shi-fu-hao)



重要程度: 2

使用 `if..else` 语句，编写代码实现通过 `prompt` 获取一个数字并用 `alert` 显示结果：

- 如果这个数字大于 0，就显示 `1`，
- 如果这个数字小于 0，就显示 `-1`，
- 如果这个数字等于 0，就显示 `0`。

在这个任务中，我们假设输入永远是一个数字。

[在新窗口中演示](https://zh.js.cx/task/sign/if_sign/)

解决方案

```javascript
let value = prompt('Type a number', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}
```



#### [使用 '?' 重写 'if' 语句](https://zh.javascript.info/ifelse#shi-yong-zhong-xie-if-yu-ju)



重要程度: 5

使用条件运算符 `'?'` 重写下面的 `if` 语句：

```javascript
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
```

解决方案

```javascript
let result = (a + b < 4) ? 'Below' : 'Over';
```



#### [使用 '?' 重写 'if..else' 语句](https://zh.javascript.info/ifelse#shi-yong-zhong-xie-ifelse-yu-ju)



重要程度: 5

使用多个三元运算符 `'?'` 重写下面的 `if..else` 语句。

为了增强代码可读性，建议将代码分成多行。

```javascript
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
```

解决方案

```javascript
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
```



## 逻辑运算符

JavaScript 中有三个逻辑运算符：`||`（或），`&&`（与），`!`（非）。

虽然它们被称为“逻辑”运算符，但这些运算符却可以被应用于任意类型的值，而不仅仅是布尔值。它们的结果也同样可以是任意类型。

让我们来详细看一下。

### [||（或）](https://zh.javascript.info/logical-operators#huo)

两个竖线符号表示“或”运算符：

```javascript
result = a || b;
```

在传统的编程中，逻辑或仅能够操作布尔值。如果参与运算的任意一个参数为 `true`，返回的结果就为 `true`，否则返回 `false`。

在 JavaScript 中，逻辑运算符更加灵活强大。但是，首先让我们看一下操作数是布尔值的时候发生了什么。

下面是四种可能的逻辑组合：

```javascript
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
```

正如我们所见，除了两个操作数都是 `false` 的情况，结果都是 `true`。

如果操作数不是布尔值，那么它将会被转化为布尔值来参与运算。

例如，数字 `1` 被作为 `true` 处理，数字 `0` 则被作为 `false`：

```javascript
if (1 || 0) { // 工作原理相当于 if( true || false )
  alert( 'truthy!' );
}
```

大多数情况下，逻辑或 `||` 会被用在 `if` 语句中，用来测试是否有 **任何** 给定的条件为 `true`。

例如：

```javascript
let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}
```

我们可以传入更多的条件：

```javascript
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // 是周末
}
```

### [或运算寻找第一个真值](https://zh.javascript.info/logical-operators#huo-yun-suan-xun-zhao-di-yi-ge-zhen-zhi)

上文提到的逻辑处理多少有些传统了。下面让我们看看 JavaScript 的“附加”特性。

拓展的算法如下所示。

给定多个参与或运算的值：

```javascript
result = value1 || value2 || value3;
```

或运算符 `||` 做了如下的事情：

- 从左到右依次计算操作数。
- 处理每一个操作数时，都将其转化为布尔值。如果结果是 `true`，就停止计算，返回这个操作数的初始值。
- 如果所有的操作数都被计算过（也就是，转换结果都是 `false`），则返回最后一个操作数。

返回的值是操作数的初始形式，不会做布尔转换。

换句话说，一个或运算 `||` 的链，将返回第一个真值，如果不存在真值，就返回该链的最后一个值。

例如：

```javascript
alert( 1 || 0 ); // 1（1 是真值）

alert( null || 1 ); // 1（1 是第一个真值）
alert( null || 0 || 1 ); // 1（第一个真值）

alert( undefined || null || 0 ); // 0（都是假值，返回最后一个值）
```

与“纯粹的、传统的、仅仅处理布尔值的或运算”相比，这个规则就引起了一些很有趣的用法。

1. **获取变量列表或者表达式中的第一个真值。**

   例如，我们有变量 `firstName`、`lastName` 和 `nickName`，都是可选的（即可以是 undefined，也可以是假值）。

   我们用或运算 `||` 来选择有数据的那一个，并显示出来（如果没有设置，则用 `"Anonymous"`）：

   ```javascript
   let firstName = "";
   let lastName = "";
   let nickName = "SuperCoder";
   
   alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder
   ```

   如果所有变量的值都为假，结果就是 `"Anonymous"`。

2. **短路求值（Short-circuit evaluation）。**

   或运算符 `||` 的另一个用途是所谓的“短路求值”。

   这指的是，`||` 对其参数进行处理，直到达到第一个真值，然后立即返回该值，而无需处理其他参数。

   如果操作数不仅仅是一个值，而是一个有副作用的表达式，例如变量赋值或函数调用，那么这一特性的重要性就变得显而易见了。

   在下面这个例子中，只会打印第二条信息：

   ```javascript
   true || alert("not printed");
   false || alert("printed");
   ```

   在第一行中，或运算符 `||` 在遇到 `true` 时立即停止运算，所以 `alert` 没有运行。

   有时，人们利用这个特性，只在左侧的条件为假时才执行命令。

### [&&（与）](https://zh.javascript.info/logical-operators#yu)

两个 & 符号表示 `&&` 与运算符：

```javascript
result = a && b;
```

在传统的编程中，当两个操作数都是真值时，与运算返回 `true`，否则返回 `false`：

```javascript
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
```

带有 `if` 语句的示例：

```javascript
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'Time is 12:30' );
}
```

就像或运算一样，与运算的操作数可以是任意类型的值：

```javascript
if (1 && 0) { // 作为 true && false 来执行
  alert( "won't work, because the result is falsy" );
}
```

### [与运算寻找第一个假值](https://zh.javascript.info/logical-operators#yu-yun-suan-xun-zhao-di-yi-ge-jia-zhi)

给出多个参加与运算的值：

```javascript
result = value1 && value2 && value3;
```

与运算 `&&` 做了如下的事：

- 从左到右依次计算操作数。
- 在处理每一个操作数时，都将其转化为布尔值。如果结果是 `false`，就停止计算，并返回这个操作数的初始值。
- 如果所有的操作数都被计算过（例如都是真值），则返回最后一个操作数。

换句话说，与运算返回第一个假值，如果没有假值就返回最后一个值。

上面的规则和或运算很像。区别就是与运算返回第一个假值，而或运算返回第一个真值。

例如：

```javascript
// 如果第一个操作数是真值，
// 与运算返回第二个操作数：
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// 如果第一个操作数是假值，
// 与运算将直接返回它。第二个操作数会被忽略
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0
```

我们也可以在一行代码上串联多个值。查看第一个假值是如何被返回的：

```javascript
alert( 1 && 2 && null && 3 ); // null
```

如果所有的值都是真值，最后一个值将会被返回：

```javascript
alert( 1 && 2 && 3 ); // 3，最后一个值
```

**与运算 `&&` 在或运算 `||` 之前进行**

与运算 `&&` 的优先级比或运算 `||` 要高。

所以代码 `a && b || c && d` 跟 `&&` 表达式加了括号完全一样：`(a && b) || (c && d)`。

**不要用 `||` 或 `&&` 来取代 `if`**

有时候，有人会将与运算符 `&&` 作为“简化 `if`”的一种方式。

例如：

```javascript
let x = 1;

(x > 0) && alert( 'Greater than zero!' );
```

`&&` 右边的代码只有运算抵达到那里才能被执行。也就是，当且仅当 `(x > 0)` 为真。

所以我们基本可以类似地得到：

```javascript
let x = 1;

if (x > 0) alert( 'Greater than zero!' );
```

虽然使用 `&&` 写出的变体看起来更短，但 `if` 更明显，并且往往更具可读性。因此，我们建议根据每个语法结构的用途来使用：如果我们想要 `if`，就使用 `if`；如果我们想要逻辑与，就使用 `&&`。

### [!（非）](https://zh.javascript.info/logical-operators#fei)

感叹符号 `!` 表示布尔非运算符。

语法相当简单：

```javascript
result = !value;
```

逻辑非运算符接受一个参数，并按如下运作：

1. 将操作数转化为布尔类型：`true/false`。
2. 返回相反的值。

例如：

```javascript
alert( !true ); // false
alert( !0 ); // true
```

两个非运算 `!!` 有时候用来将某个值转化为布尔类型：

```javascript
alert( !!"non-empty string" ); // true
alert( !!null ); // false
```

也就是，第一个非运算将该值转化为布尔类型并取反，第二个非运算再次取反。最后我们就得到了一个任意值到布尔值的转化。

有更多详细的方法可以完成同样的事 —— 一个内置的 `Boolean` 函数：

```javascript
alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false
```

非运算符 `!` 的优先级在所有逻辑运算符里面最高，所以它总是在 `&&` 和 `||` 之前执行。

### [任务](https://zh.javascript.info/logical-operators#tasks)

#### [或运算的结果是什么？](https://zh.javascript.info/logical-operators#huo-yun-suan-de-jie-guo-shi-shi-mo)



重要程度: 5

如下代码将会输出什么？

```javascript
alert( null || 2 || undefined );
```

解决方案

结果是 `2`，这是第一个真值。

```javascript
alert( null || 2 || undefined );
```



#### [或运算和 alerts 的结果是什么？](https://zh.javascript.info/logical-operators#huo-yun-suan-he-alerts-de-jie-guo-shi-shi-mo)



重要程度: 3

下面的代码将会输出什么？

```javascript
alert( alert(1) || 2 || alert(3) );
```

解决方案

答案：首先是 `1`，然后是 `2`。

```javascript
alert( alert(1) || 2 || alert(3) );
```

对 `alert` 的调用没有返回值。或者说返回的是 `undefined`。

1. 第一个或运算 `||` 对它的左值 `alert(1)` 进行了计算。这就显示了第一条信息 `1`。
2. 函数 `alert` 返回了 `undefined`，所以或运算继续检查第二个操作数以寻找真值。
3. 第二个操作数 `2` 是真值，所以执行就中断了。`2` 被返回，并且被外层的 alert 显示。

这里不会显示 `3`，因为运算没有抵达 `alert(3)`。



#### [与操作的结果是什么？](https://zh.javascript.info/logical-operators#yu-cao-zuo-de-jie-guo-shi-shi-mo)



重要程度: 5

下面这段代码将会显示什么？

```javascript
alert( 1 && null && 2 );
```

解决方案

答案：`null`，因为它是列表中第一个假值。

```javascript
alert( 1 && null && 2 );
```



#### [与运算连接的 alerts 的结果是什么？](https://zh.javascript.info/logical-operators#yu-yun-suan-lian-jie-de-alerts-de-jie-guo-shi-shi-mo)



重要程度: 3

这段代码将会显示什么？

```javascript
alert( alert(1) && alert(2) );
```

解决方案

答案：`1`，然后 `undefined`。

```javascript
alert( alert(1) && alert(2) );
```

调用 `alert` 返回了 `undefined`（它只展示消息，所以没有有意义的返回值）。

因此，`&&` 计算了它左边的操作数（显示 `1`），然后立即停止了，因为 `undefined` 是一个假值。`&&` 就是寻找假值然后返回它，所以运算结束。



#### [或运算、与运算、或运算串联的结果](https://zh.javascript.info/logical-operators#huo-yun-suan-yu-yun-suan-huo-yun-suan-chuan-lian-de-jie-guo)



重要程度: 5

结果将会是什么？

```javascript
alert( null || 2 && 3 || 4 );
```

解决方案

答案：`3`。

```javascript
alert( null || 2 && 3 || 4 );
```

与运算 `&&` 的优先级比 `||` 高，所以它第一个被执行。

结果是 `2 && 3 = 3`，所以表达式变成了：

```none
null || 3 || 4
```

现在的结果就是第一个真值：`3`。



#### [检查值是否位于范围区间内](https://zh.javascript.info/logical-operators#jian-cha-zhi-shi-fou-wei-yu-fan-wei-qu-jian-nei)



重要程度: 3

写一个 `if` 条件句来检查 `age` 是否位于 `14` 到 `90` 的闭区间。

“闭区间”意味着，`age` 的值可以取 `14` 或 `90`。

解决方案

```javascript
if (age >= 14 && age <= 90)
```



#### [检查值是否位于范围之外](https://zh.javascript.info/logical-operators#jian-cha-zhi-shi-fou-wei-yu-fan-wei-zhi-wai)



重要程度: 3

写一个 `if` 条件句，检查 `age` 是否不位于 `14` 到 `90` 的闭区间。

创建两个表达式：第一个用非运算 `!`，第二个不用。

解决方案

第一个表达式：

```javascript
if (!(age >= 14 && age <= 90))
```

第二个表达式：

```javascript
if (age < 14 || age > 90)
```



#### [一个关于 "if" 的问题](https://zh.javascript.info/logical-operators#yi-ge-guan-yu-if-de-wen-ti)



重要程度: 5

下面哪一个 `alert` 将会被执行？

`if(...)` 语句内表达式的结果是什么？

```javascript
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
```

解决方案

答案：第一个和第三个将会被执行。

详解：

```javascript
// 执行。
// -1 || 0 的结果为 -1，真值
if (-1 || 0) alert( 'first' );

// 不执行。
// -1 && 0 = 0，假值
if (-1 && 0) alert( 'second' );

// 执行
// && 运算的优先级比 || 高
// 所以 -1 && 1 先执行，给出如下运算链：
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );
```



#### [登陆验证](https://zh.javascript.info/logical-operators#deng-lu-yan-zheng)



重要程度: 3

实现使用 `prompt` 进行登陆校验的代码。

如果访问者输入 `"Admin"`，那么使用 `prompt` 引导获取密码，如果输入的用户名为空或者按下了 Esc 键 —— 显示 “Canceled”，如果是其他字符串 —— 显示 “I don’t know you”。

密码的校验规则如下：

- 如果输入的是 “TheMaster”，显示 “Welcome!”，
- 其他字符串 —— 显示 “Wrong password”，
- 空字符串或取消了输入，显示 “Canceled.”。

流程图：

请使用嵌套的 `if` 块。注意代码整体的可读性。

提示：将空字符串输入，prompt 会获取到一个空字符串 `''`。Prompt 运行过程中，按下 ESC 键会得到 `null`。

解决方案

```javascript
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}
```

请注意 `if` 块中水平方向的缩进。技术上是非必需的，但会增加代码的可读性。



## 空值合并运算符 '??'

> **A recent addition**
>
> This is a recent addition to the language. Old browsers may need polyfills.

在本文中，我们将值既不是 `null` 也不是 `undefined` 的表达式称为“已定义的（defined）”。

空值合并运算符（nullish coalescing operator）的写法为两个问号 `??`。

`a ?? b` 的结果是：

- 如果 `a` 是已定义的，则结果为 `a`，
- 如果 `a` 不是已定义的，则结果为 `b`。

换句话说，如果第一个参数不是 `null/undefined`，则 `??` 返回第一个参数。否则，返回第二个参数。

空值合并运算符并不是什么全新的东西。它只是一种获得两者中的第一个“已定义的”值的不错的语法。

我们可以使用我们已知的运算符重写 `result = a ?? b`，像这样：

```javascript
result = (a !== null && a !== undefined) ? a : b;
```

通常 `??` 的使用场景是，为可能是未定义的变量提供一个默认值。

例如，在这里，如果 `user` 是未定义的，我们则显示 `Anonymous`：

```javascript
let user;

alert(user ?? "Anonymous"); // Anonymous
```

当然，如果 `user` 的值为除 `null/undefined` 外的任意值，那么我们看到的将是它：

```javascript
let user = "John";

alert(user ?? "Anonymous"); // John
```

我们还可以使用 `??` 序列从一系列的值中选择出第一个非 `null/undefined` 的值。

假设我们在变量 `firstName`、`lastName` 或 `nickName` 中存储着一个用户的数据。如果用户决定不输入值，则所有这些变量的值都可能是未定义的。

我们想使用这些变量之一显示用户名，如果这些变量的值都是未定义的，则显示 “Anonymous”。

让我们使用 `??` 运算符来实现这一需求：

```javascript
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// 显示第一个已定义的值：
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
```

### [与 || 比较](https://zh.javascript.info/nullish-coalescing-operator#yu-bi-jiao)

或运算符 `||` 可以以与 `??` 运算符相同的方式使用。像我们在 [上一章](https://zh.javascript.info/logical-operators#or-finds-the-first-truthy-value) 所讲的那样。

例如，在上面的代码中，我们可以用 `||` 替换掉 `??`，也可以获得相同的结果：

```javascript
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// 显示第一个真值：
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder
```

或 `||` 运算符自 JavaScript 诞生就存在，因此开发者长期将其用于这种目的。

另一方面，空值合并运算符 `??` 是最近才被添加到 JavaScript 中的，它的出现是因为人们对 `||` 不太满意。

它们之间重要的区别是：

- `||` 返回第一个 **真** 值。
- `??` 返回第一个 **已定义的** 值。

换句话说，`||` 无法区分 `false`、`0`、空字符串 `""` 和 `null/undefined`。它们都一样 —— 假值（falsy values）。如果其中任何一个是 `||` 的第一个参数，那么我们将得到第二个参数作为结果。

不过在实际中，我们可能只想在变量的值为 `null/undefined` 时使用默认值。也就是说，当该值确实未知或未被设置时。

例如，考虑下面这种情况：

```javascript
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
```

- ```
  height || 100
  ```

   

  首先会检查

   

  ```
  height
  ```

   

  是否为一个假值，发现它确实是。

  - 所以，结果为第二个参数，`100`。

- ```
  height ?? 100
  ```

   

  首先会检查

   

  ```
  height
  ```

   

  是否为

   

  ```
  null/undefined
  ```

  ，发现它不是。

  - 所以，结果为 `height` 的原始值，`0`。

如果高度 `0` 为有效值，则不应将其替换为默认值，所以 `??` 能够得出正确的结果。

### [优先级](https://zh.javascript.info/nullish-coalescing-operator#you-xian-ji)

`??` 运算符的优先级相当低：在 [MDN table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table) 中为 `5`。因此，`??` 在 `=` 和 `?` 之前计算，但在大多数其他运算符（例如，`+` 和 `*`）之后计算。

因此，如果我们需要在还有其他运算符的表达式中使用 `??` 进行取值，需要考虑加括号：

```javascript
let height = null;
let width = null;

// 重要：使用括号
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000
```

否则，如果我们省略了括号，则由于 `*` 的优先级比 `??` 高，它会先执行，进而导致错误的结果。

```javascript
// 没有括号
let area = height ?? 100 * width ?? 50;

// ……与下面这行代码的计算方式相同（应该不是我们所期望的）：
let area = height ?? (100 * width) ?? 50;
```

#### [?? 与 && 或 || 一起使用](https://zh.javascript.info/nullish-coalescing-operator#yu-huo-yi-qi-shi-yong)

出于安全原因，JavaScript 禁止将 `??` 运算符与 `&&` 和 `||` 运算符一起使用，除非使用括号明确指定了优先级。

下面的代码会触发一个语法错误：

```javascript
let x = 1 && 2 ?? 3; // Syntax error
```

这个限制无疑是值得商榷的，但它被添加到语言规范中是为了避免人们从 `||` 切换到 `??` 时的编程错误。

可以明确地使用括号来解决这个问题：

```javascript
let x = (1 && 2) ?? 3; // 正常工作了

alert(x); // 2
```

### [总结](https://zh.javascript.info/nullish-coalescing-operator#zong-jie)

- 空值合并运算符 `??` 提供了一种从列表中选择第一个“已定义的”值的简便方式。

  它被用于为变量分配默认值：

  ```javascript
  // 当 height 的值为 null 或 undefined 时，将 height 的值设置为 100
  height = height ?? 100;
  ```

- `??` 运算符的优先级非常低，仅略高于 `?` 和 `=`，因此在表达式中使用它时请考虑添加括号。

- 如果没有明确添加括号，不能将其与 `||` 或 `&&` 一起使用。



## 循环：while 和 for

我们经常需要重复执行一些操作。

例如，我们需要将列表中的商品逐个输出，或者运行相同的代码将数字 1 到 10 逐个输出。

**循环** 是一种重复运行同一代码的方法。

### [“while” 循环](https://zh.javascript.info/while-for#while-xun-huan)

`while` 循环的语法如下：

```javascript
while (condition) {
  // 代码
  // 所谓的“循环体”
}
```

当 `condition` 为真时，执行循环体的 `code`。

例如，以下将循环输出当 `i < 3` 时的 `i` 值：

```javascript
let i = 0;
while (i < 3) { // 依次显示 0、1 和 2
  alert( i );
  i++;
}
```

循环体的单次执行叫作 **一次迭代**。上面示例中的循环进行了三次迭代。

如果上述示例中没有 `i++`，那么循环（理论上）会永远重复执行下去。实际上，浏览器提供了阻止这种循环的方法，我们可以通过终止进程，来停掉服务器端的 JavaScript。

任何表达式或变量都可以是循环条件，而不仅仅是比较。在 `while` 中的循环条件会被计算，计算结果会被转化为布尔值。

例如，`while (i != 0)` 可简写为 `while (i)`：

```javascript
let i = 3;
while (i) { // 当 i 变成 0 时，条件为假，循环终止
  alert( i );
  i--;
}
```

**单行循环体不需要大括号**

如果循环体只有一条语句，则可以省略大括号 `{…}`：

```javascript
let i = 3;
while (i) alert(i--);
```

### [“do…while” 循环](https://zh.javascript.info/while-for#dowhile-xun-huan)

使用 `do..while` 语法可以将条件检查移至循环体 **下面**：

```javascript
do {
  // 循环体
} while (condition);
```

循环首先执行循环体，然后检查条件，当条件为真时，重复执行循环体。

例如：

```javascript
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);
```

这种形式的语法很少使用，除非你希望不管条件是否为真，循环体 **至少执行一次**。通常我们更倾向于使用另一个形式：`while(…) {…}`。

### [“for” 循环](https://zh.javascript.info/while-for#for-xun-huan)

`for` 循环更加复杂，但它是最常使用的循环形式。

`for` 循环看起来就像这样：

```javascript
for (begin; condition; step) {
  // ……循环体……
}
```

我们通过示例来了解一下这三个部分的含义。下述循环从 `i` 等于 `0` 到 `3`（但不包括 `3`）运行 `alert(i)`：

```javascript
for (let i = 0; i < 3; i++) { // 结果为 0、1、2
  alert(i);
}
```

我们逐个部分分析 `for` 循环：

| 语句段         |            |                                                  |
| :------------- | :--------- | :----------------------------------------------- |
| begin          | `i = 0`    | 进入循环时执行一次。                             |
| condition      | `i < 3`    | 在每次循环迭代之前检查，如果为 false，停止循环。 |
| body（循环体） | `alert(i)` | 条件为真时，重复运行。                           |
| step           | `i++`      | 在每次循环体迭代后执行。                         |

一般循环算法的工作原理如下：

```none
开始运行
→ (如果 condition 成立 → 运行 body 然后运行 step)
→ (如果 condition 成立 → 运行 body 然后运行 step)
→ (如果 condition 成立 → 运行 body 然后运行 step)
→ ...
```

所以，`begin` 执行一次，然后进行迭代：每次检查 `condition` 后，执行 `body` 和 `step`。

如果你这是第一次接触循环，那么回到这个例子，在一张纸上重现它逐步运行的过程，可能会对你有所帮助。

以下是在这个示例中发生的事：

```javascript
// for (let i = 0; i < 3; i++) alert(i)

// 开始
let i = 0
// 如果条件为真，运行下一步
if (i < 3) { alert(i); i++ }
// 如果条件为真，运行下一步
if (i < 3) { alert(i); i++ }
// 如果条件为真，运行下一步
if (i < 3) { alert(i); i++ }
// ……结束，因为现在 i == 3
```

**内联变量声明**

这里“计数”变量 `i` 是在循环中声明的。这叫做“内联”变量声明。这样的变量只在循环中可见。

```javascript
for (let i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}
alert(i); // 错误，没有这个变量。
```

除了定义一个变量，我们也可以使用现有的变量：

```javascript
let i = 0;

for (i = 0; i < 3; i++) { // 使用现有的变量
  alert(i); // 0, 1, 2
}

alert(i); //3，可见，因为是在循环之外声明的
```

#### [省略语句段](https://zh.javascript.info/while-for#sheng-lve-yu-ju-duan)

`for` 循环的任何语句段都可以被省略。

例如，如果我们在循环开始时不需要做任何事，我们就可以省略 `begin` 语句段。

就像这样：

```javascript
let i = 0; // 我们已经声明了 i 并对它进行了赋值

for (; i < 3; i++) { // 不再需要 "begin" 语句段
  alert( i ); // 0, 1, 2
}
```

我们也可以移除 `step` 语句段：

```javascript
let i = 0;

for (; i < 3;) {
  alert( i++ );
}
```

该循环与 `while (i < 3)` 等价。

实际上我们可以删除所有内容，从而创建一个无限循环：

```javascript
for (;;) {
  // 无限循环
}
```

请注意 `for` 的两个 `;` 必须存在，否则会出现语法错误。

### [跳出循环](https://zh.javascript.info/while-for#tiao-chu-xun-huan)

通常条件为假时，循环会终止。

但我们随时都可以使用 `break` 指令强制退出。

例如，下面这个循环要求用户输入一系列数字，在输入的内容不是数字时“终止”循环。

```javascript
let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );
```

如果用户输入空行或取消输入，在 `(*)` 行的 `break` 指令会被激活。它立刻终止循环，将控制权传递给循环后的第一行，即，`alert`。

根据需要，"无限循环 + `break`" 的组合非常适用于不必在循环开始/结束时检查条件，但需要在中间甚至是主体的多个位置进行条件检查的情况。

### [继续下一次迭代](https://zh.javascript.info/while-for#continue)

`continue` 指令是 `break` 的“轻量版”。它不会停掉整个循环。而是停止当前这一次迭代，并强制启动新一轮循环（如果条件允许的话）。

如果我们完成了当前的迭代，并且希望继续执行下一次迭代，我们就可以使用它。

下面这个循环使用 `continue` 来只输出奇数：

```javascript
for (let i = 0; i < 10; i++) {

  //如果为真，跳过循环体的剩余部分。
  if (i % 2 == 0) continue;

  alert(i); // 1，然后 3，5，7，9
}
```

对于偶数的 `i` 值，`continue` 指令会停止本次循环的继续执行，将控制权传递给下一次 `for` 循环的迭代（使用下一个数字）。因此 `alert` 仅被奇数值调用。

**`continue` 指令利于减少嵌套**

显示奇数的循环可以像下面这样：

```javascript
for (let i = 0; i < 10; i++) {

  if (i % 2) {
    alert( i );
  }

}
```

从技术角度看，它与上一个示例完全相同。当然，我们可以将代码包装在 `if` 块而不使用 `continue`。

但在副作用方面，它多创建了一层嵌套（大括号内的 `alert` 调用）。如果 `if` 中代码有多行，则可能会降低代码整体的可读性。

**禁止 `break/continue` 在 ‘?’ 的右边**

请注意非表达式的语法结构不能与三元运算符 `?` 一起使用。特别是 `break/continue` 这样的指令是不允许这样使用的。

例如，我们使用如下代码：

```javascript
if (i > 5) {
  alert(i);
} else {
  continue;
}
```

……用问号重写：

```javascript
(i > 5) ? alert(i) : continue; // continue 不允许在这个位置
```

……代码会停止运行，并显示有语法错误。

这是不（建议）使用问号 `?` 运算符替代 `if` 语句的另一个原因。

### [break/continue 标签](https://zh.javascript.info/while-for#breakcontinue-biao-qian)

有时候我们需要从一次从多层嵌套的循环中跳出来。

例如，下述代码中我们的循环使用了 `i` 和 `j`，从 `(0,0)` 到 `(3,3)` 提示坐标 `(i, j)`：

```javascript
for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // 如果我想从这里退出并直接执行 alert('Done!')
  }
}

alert('Done!');
```

我们需要提供一种方法，以在用户取消输入时来停止这个过程。

在 `input` 之后的普通 `break` 只会打破内部循环。这还不够 —— 标签可以实现这一功能！

**标签** 是在循环之前带有冒号的标识符：

```javascript
labelName: for (...) {
  ...
}
```

`break <labelName>` 语句跳出循环至标签处：

```javascript
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // 如果是空字符串或被取消，则中断并跳出这两个循环。
    if (!input) break outer; // (*)

    // 用得到的值做些事……
  }
}
alert('Done!');
```

上述代码中，`break outer` 向上寻找名为 `outer` 的标签并跳出当前循环。

因此，控制权直接从 `(*)` 转至 `alert('Done!')`。

我们还可以将标签移至单独一行：

```javascript
outer:
for (let i = 0; i < 3; i++) { ... }
```

`continue` 指令也可以与标签一起使用。在这种情况下，执行跳转到标记循环的下一次迭代。

**标签并不允许“跳到”所有位置**

标签不允许我们跳到代码的任意位置。

例如，这样做是不可能的：

```javascript
break label;  // 无法跳转到这个标签

label: for (...)
```

只有在循环内部才能调用 `break/continue`，并且标签必须位于指令上方的某个位置。

### [总结](https://zh.javascript.info/while-for#zong-jie)

我们学习了三种循环：

- `while` —— 每次迭代之前都要检查条件。
- `do..while` —— 每次迭代后都要检查条件。
- `for (;;)` —— 每次迭代之前都要检查条件，可以使用其他设置。

通常使用 `while(true)` 来构造“无限”循环。这样的循环和其他循环一样，都可以通过 `break` 指令来终止。

如果我们不想在当前迭代中做任何事，并且想要转移至下一次迭代，那么可以使用 `continue` 指令。

`break/continue` 支持循环前的标签。标签是 `break/continue` 跳出嵌套循环以转到外部的唯一方法。

### [任务](https://zh.javascript.info/while-for#tasks)

#### [输出素数（prime）](https://zh.javascript.info/while-for#shu-chu-su-shu-prime)



重要程度: 3

大于 `1` 且不能被除了 `1` 和它本身以外的任何数整除的整数叫做[素数](https://en.wikipedia.org/wiki/Prime_number)。

换句话说，`n > 1` 且不能被 `1` 和 `n` 以外的任何数整除的整数，被称为素数。

例如，`5` 是素数，因为它不能被 `2`、`3` 和 `4` 整除，会产生余数。

**写一个可以输出 `2` 到 `n` 之间的所有素数的代码。**

当 `n = 10`，结果输出 `2、3、5、7`。

P.S. 代码应适用于任何 `n`，而不是对任何固定值进行硬性调整。

解决方案

这个题目有很多解法。

我们使用一个嵌套循环：

```javascript
对于间隔中的每个 i {
  检查在 1~i 之间，是否有 i 的除数
  如果有 => 这个 i 不是素数
  如果没有 => 这个 i 是素数，输出出来
}
```

使用标签的代码：

```javascript
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // 对每个自然数 i

  for (let j = 2; j < i; j++) { // 寻找一个除数……
    if (i % j == 0) continue nextPrime; // 不是素数，则继续检查下一个
  }

  alert( i ); // 输出素数
}
```

这段代码有很大的优化空间。例如，我们可以从 `2` 到 `i` 的平方根之间的数中寻找除数。无论怎样，如果我们想要在很大的数字范围内实现高效率，我们需要改变实现方法，依赖高等数学和复杂算法，如[二次筛选法（Quadratic sieve）](https://en.wikipedia.org/wiki/Quadratic_sieve)，[普通数域筛选法（General number field sieve）](https://en.wikipedia.org/wiki/General_number_field_sieve)等。

译注：素数也称为质数，对本答案的代码进一步优化，其实就是一道 LeetCode 算法题，感兴趣的可以点击链接查看如何通过 [埃拉托斯特尼筛法筛选素数](https://dingxuewen.com/leetcode-js-leviding/easy/204.count-primes/204.count-primes.html)。



## "switch" 语句

`switch` 语句可以替代多个 `if` 判断。

`switch` 语句为多分支选择的情况提供了一个更具描述性的方式。

### [语法](https://zh.javascript.info/switch#yu-fa)

`switch` 语句有至少一个 `case` 代码块和一个可选的 `default` 代码块。

就像这样：

```javascript
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```

- 比较 `x` 值与第一个 `case`（也就是 `value1`）是否严格相等，然后比较第二个 `case`（`value2`）以此类推。
- 如果相等，`switch` 语句就执行相应 `case` 下的代码块，直到遇到最靠近的 `break` 语句（或者直到 `switch` 语句末尾）。
- 如果没有符合的 case，则执行 `default` 代码块（如果 `default` 存在）。

### [举个例子](https://zh.javascript.info/switch#ju-ge-li-zi)

`switch` 的例子（高亮的部分是执行的 `case` 部分）：

```javascript
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}
```

这里的 `switch` 从第一个 `case` 分支开始将 `a` 的值与 `case` 后的值进行比较，第一个 `case` 后的值为 `3` 匹配失败。

然后比较 `4`。匹配，所以从 `case 4` 开始执行直到遇到最近的 `break`。

**如果没有 `break`，程序将不经过任何检查就会继续执行下一个 `case`。**

无 `break` 的例子：

```javascript
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
  case 4:
    alert( 'Exactly!' );
  case 5:
    alert( 'Too big' );
  default:
    alert( "I don't know such values" );
}
```

在上面的例子中我们会看到连续执行的三个 `alert`：

```javascript
alert( 'Exactly!' );
alert( 'Too big' );
alert( "I don't know such values" );
```

**任何表达式都可以成为 `switch/case` 的参数**

`switch` 和 `case` 都允许任意表达式。

比如：

```javascript
let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}
```

这里 `+a` 返回 `1`，这个值跟 `case` 中 `b + 1` 相比较，然后执行对应的代码。

### [“case” 分组](https://zh.javascript.info/switch#case-fen-zu)

共享同一段代码的几个 `case` 分支可以被分为一组：

比如，如果我们想让 `case 3` 和 `case 5` 执行同样的代码：

```javascript
let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) 下面这两个 case 被分在一组
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
```

现在 `3` 和 `5` 都显示相同的信息。

`switch/case` 有通过 case 进行“分组”的能力，其实是 switch 语句没有 `break` 时的副作用。因为没有 `break`，`case 3` 会从 `(*)` 行执行到 `case 5`。

### [类型很关键](https://zh.javascript.info/switch#lei-xing-hen-guan-jian)

强调一下，这里的相等是严格相等。被比较的值必须是相同的类型才能进行匹配。

比如，我们来看下面的代码：

```javascript
let arg = prompt("Enter a value?")
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' )
}
```

1. 在 `prompt` 对话框输入 `0`、`1`，第一个 `alert` 弹出。
2. 输入 `2`，第二个 `alert` 弹出。
3. 但是输入 `3`，因为 `prompt` 的结果是字符串类型的 `"3"`，不严格相等 `===` 于数字类型的 `3`，所以 `case 3` 不会执行！因此 `case 3` 部分是一段无效代码。所以会执行 `default` 分支。



## 函数

我们经常需要在脚本的许多地方执行很相似的操作。

例如，当访问者登录、注销或者在其他地方时，我们需要显示一条好看的信息。

函数是程序的主要“构建模块”。函数使该段代码可以被调用很多次，而不需要写重复的代码。

我们已经看到了内置函数的示例，如 `alert(message)`、`prompt(message, default)` 和 `confirm(question)`。但我们也可以创建自己的函数。

### [函数声明](https://zh.javascript.info/function-basics#han-shu-sheng-ming)

使用 **函数声明** 创建函数。

看起来就像这样：

```javascript
function showMessage() {
  alert( 'Hello everyone!' );
}
```

`function` 关键字首先出现，然后是 **函数名**，然后是括号之间的 **参数** 列表（用逗号分隔，在上述示例中为空），最后是花括号之间的代码（即“函数体”）。

```javascript
function name(parameters) {
  ...body...
}
```

我们的新函数可以通过名称调用：`showMessage()`。

例如：

```javascript
function showMessage() {
  alert( 'Hello everyone!' );
}

showMessage();
showMessage();
```

调用 `showMessage()` 执行函数的代码。这里我们会看到显示两次消息。

这个例子清楚地演示了函数的主要目的之一：避免代码重复。

如果我们需要更改消息或其显示方式，只需在一个地方修改代码：输出它的函数。

### [局部变量](https://zh.javascript.info/function-basics#ju-bu-bian-liang)

在函数中声明的变量只在该函数内部可见。

例如：

```javascript
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // 局部变量

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- 错误！变量是函数的局部变量
```

### [外部变量](https://zh.javascript.info/function-basics#wai-bu-bian-liang)

函数也可以访问外部变量，例如：

```javascript
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John
```

函数对外部变量拥有全部的访问权限。函数也可以修改外部变量。

例如：

```javascript
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) 改变外部变量

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John 在函数调用之前

showMessage();

alert( userName ); // Bob，值被函数修改了
```

只有在没有局部变量的情况下才会使用外部变量。

如果在函数内部声明了同名变量，那么函数会 **遮蔽** 外部变量。例如，在下面的代码中，函数使用局部的 `userName`，而外部变量被忽略：

```javascript
let userName = 'John';

function showMessage() {
  let userName = "Bob"; // 声明一个局部变量

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// 函数会创建并使用它自己的 userName
showMessage();

alert( userName ); // John，未被更改，函数没有访问外部变量。
```

**全局变量**

任何函数之外声明的变量，例如上述代码中的外部变量 `userName`，都被称为 **全局** 变量。

全局变量在任意函数中都是可见的（除非被局部变量遮蔽）。

减少全局变量的使用是一种很好的做法。现代的代码有很少甚至没有全局变量。大多数变量存在于它们的函数中。但是有时候，全局变量能够用于存储项目级别的数据。

### [参数](https://zh.javascript.info/function-basics#can-shu)

我们可以使用参数（也称“函数参数”）来将任意数据传递给函数。

在如下示例中，函数有两个参数：`from` 和 `text`。

```javascript
function showMessage(from, text) { // 参数：from 和 text
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)
```

当函数在 `(*)` 和 `(**)` 行中被调用时，给定值被复制到了局部变量 `from` 和 `text`。然后函数使用它们进行计算。

这里还有一个例子：我们有一个变量 `from`，并将它传递给函数。请注意：函数会修改 `from`，但在函数外部看不到更改，因为函数修改的是复制的变量值副本：

```javascript
function showMessage(from, text) {

  from = '*' + from + '*'; // 让 "from" 看起来更优雅

  alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// "from" 值相同，函数修改了一个局部的副本。
alert( from ); // Ann
```

### [默认值](https://zh.javascript.info/function-basics#mo-ren-zhi)

如果未提供参数，那么其默认值则是 `undefined`。

例如，之前提到的函数 `showMessage(from, text)` 可以只使用一个参数调用：

```javascript
showMessage("Ann");
```

那不是错误，这样调用将输出 `"*Ann*: undefined"`。这里没有参数 `text`，所以程序假定 `text === undefined`。

如果我们想在本示例中设定“默认”的 `text`，那么我们可以在 `=` 之后指定它：

```javascript
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
```

现在如果 `text` 参数未被传递，它将会得到值 `"no text given"`。

这里 `"no text given"` 是一个字符串，但它可以是更复杂的表达式，并且只会在缺少参数时才会被计算和分配。所以，这也是可能的：

```javascript
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() 仅在没有给定 text 时执行
  // 其运行结果将成为 text 的值
}
```

**默认参数的计算**

在 JavaScript 中，每次函数在没带个别参数的情况下被调用，默认参数会被计算出来。

在上面的例子中，每次 `showMessage()` 不带 `text` 参数被调用时，`anotherFunction()` 就会被调用。

#### [后备的默认参数](https://zh.javascript.info/function-basics#hou-bei-de-mo-ren-can-shu)

有些时候，将参数默认值的设置放在函数执行（相较更后期）而不是函数声明的时候，也能行得通。

为了判断参数是否被省略掉，我们可以拿它跟 `undefined` 做比较：

```javascript
function showMessage(text) {
  if (text === undefined) {
    text = 'empty message';
  }

  alert(text);
}

showMessage(); // empty message
```

……或者我们可以使用 `||` 运算符：

```javascript
// 如果 "text" 参数被省略或者被传入空字符串，则赋值为 'empty'
function showMessage(text) {
  text = text || 'empty';
  ...
}
```

现代 JavaScript 引擎支持 [空值合并运算符](https://zh.javascript.info/nullish-coalescing-operator) `??`，当可能遇到其他假值时它更有优势，如 `0` 会被视为正常值不被合并：

```javascript
// 如果没有传入 "count" 参数，则显示 "unknown"
function showCount(count) {
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown
```

### [返回值](https://zh.javascript.info/function-basics#fan-hui-zhi)

函数可以将一个值返回到调用代码中作为结果。

最简单的例子是将两个值相加的函数：

```javascript
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3
```

指令 `return` 可以在函数的任意位置。当执行到达时，函数停止，并将值返回给调用代码（分配给上述代码中的 `result`）。

在一个函数中可能会出现很多次 `return`。例如：

```javascript
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Got a permission from the parents?');
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}
```

只使用 `return` 但没有返回值也是可行的。但这会导致函数立即退出。

例如：

```javascript
function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  alert( "Showing you the movie" ); // (*)
  // ...
}
```

在上述代码中，如果 `checkAge(age)` 返回 `false`，那么 `showMovie` 将不会运行到 `alert`。

**空值的 `return` 或没有 `return` 的函数返回值为 `undefined`**

如果函数无返回值，它就会像返回 `undefined` 一样：

```javascript
function doNothing() { /* 没有代码 */ }

alert( doNothing() === undefined ); // true
```

空值的 `return` 和 `return undefined` 等效：

```javascript
function doNothing() {
  return;
}

alert( doNothing() === undefined ); // true
```

**不要在 `return` 与返回值之间添加新行**

对于 `return` 的长表达式，可能你会很想将其放在单独一行，如下所示：

```javascript
return
 (some + long + expression + or + whatever * f(a) + f(b))
```

但这不行，因为 JavaScript 默认会在 `return` 之后加上分号。上面这段代码和下面这段代码运行流程相同：

```javascript
return;
 (some + long + expression + or + whatever * f(a) + f(b))
```

因此，实际上它的返回值变成了空值。

如果我们想要将返回的表达式写成跨多行的形式，那么应该在 `return` 的同一行开始写此表达式。或者至少按照如下的方式放上左括号：

```javascript
return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )
```

然后它就能像我们预想的那样正常运行了。

### [函数命名](https://zh.javascript.info/function-basics#function-naming)

函数就是行为（action）。所以它们的名字通常是动词。它应该简短且尽可能准确地描述函数的作用。这样读代码的人就能清楚地知道这个函数的功能。

一种普遍的做法是用动词前缀来开始一个函数，这个前缀模糊地描述了这个行为。团队内部必须就前缀的含义达成一致。

例如，以 `"show"` 开头的函数通常会显示某些内容。

函数以 XX 开始……

- `"get…"` —— 返回一个值，
- `"calc…"` —— 计算某些内容，
- `"create…"` —— 创建某些内容，
- `"check…"` —— 检查某些内容并返回 boolean 值，等。

这类名字的示例：

```javascript
showMessage(..)     // 显示信息
getAge(..)          // 返回 age（gets it somehow）
calcSum(..)         // 计算求和并返回结果
createForm(..)      // 创建表格（通常会返回它）
checkPermission(..) // 检查权限并返回 true/false
```

有了前缀，只需瞥一眼函数名，就可以了解它的功能是什么，返回什么样的值。

**一个函数 —— 一个行为**

一个函数应该只包含函数名所指定的功能，而不是做更多与函数名无关的功能。

两个独立的行为通常需要两个函数，即使它们通常被一起调用（在这种情况下，我们可以创建第三个函数来调用这两个函数）。

有几个违反这一规则的例子：

- `getAge` —— 如果它通过 `alert` 将 age 显示出来，那就有问题了（只应该是获取）。
- `createForm` —— 如果它包含修改文档的操作，例如向文档添加一个表单，那就有问题了（只应该创建表单并返回）。
- `checkPermission` —— 如果它显示 `access granted/denied` 消息，那就有问题了（只应执行检查并返回结果）。

这些例子假设函数名前缀具有通用的含义。你和你的团队可以自定义这些函数名前缀的含义，但是通常都没有太大的不同。无论怎样，你都应该对函数名前缀的含义、带特定前缀的函数可以做什么以及不可以做什么有深刻的了解。所有相同前缀的函数都应该遵守相同的规则。并且，团队成员应该形成共识。

**非常短的函数命名**

常用的函数有时会有**非常短**的名字。

例如，[jQuery](http://jquery.com/) 框架用 `$` 定义一个函数。[LoDash](http://lodash.com/) 库的核心函数用 `_` 命名。

这些都是例外，一般而言，函数名应简明扼要且具有描述性。

### [函数 == 注释](https://zh.javascript.info/function-basics#han-shu-zhu-shi)

函数应该简短且只有一个功能。如果这个函数功能复杂，那么把该函数拆分成几个小的函数是值得的。有时候遵循这个规则并不是那么容易，但这绝对是件好事。

一个单独的函数不仅更容易测试和调试 —— 它的存在本身就是一个很好的注释！

例如，比较如下两个函数 `showPrimes(n)`。它们的功能都是输出到 `n` 的 [素数](https://en.wikipedia.org/wiki/Prime_number)。

第一个变体使用了一个标签：

```javascript
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // 一个素数
  }
}
```

第二个变体使用附加函数 `isPrime(n)` 来检验素数：

```javascript
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // 一个素数
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
```

第二个变体更容易理解，不是吗？我们通过函数名（`isPrime`）就可以看出函数的行为，而不需要通过代码。人们通常把这样的代码称为 **自描述**。

因此，即使我们不打算重用它们，也可以创建函数。函数可以让代码结构更清晰，可读性更强。

### [总结](https://zh.javascript.info/function-basics#zong-jie)

函数声明方式如下所示：

```javascript
function name(parameters, delimited, by, comma) {
  /* code */
}
```

- 作为参数传递给函数的值，会被复制到函数的局部变量。
- 函数可以访问外部变量。但它只能从内到外起作用。函数外部的代码看不到函数内的局部变量。
- 函数可以返回值。如果没有返回值，则其返回的结果是 `undefined`。

为了使代码简洁易懂，建议在函数中主要使用局部变量和参数，而不是外部变量。

与不获取参数但将修改外部变量作为副作用的函数相比，获取参数、使用参数并返回结果的函数更容易理解。

函数命名：

- 函数名应该清楚地描述函数的功能。当我们在代码中看到一个函数调用时，一个好的函数名能够让我们马上知道这个函数的功能是什么，会返回什么。
- 一个函数是一个行为，所以函数名通常是动词。
- 目前有许多优秀的函数名前缀，如 `create…`、`show…`、`get…`、`check…` 等等。使用它们来提示函数的作用吧。

函数是脚本的主要构建块。现在我们已经介绍了基本知识，现在我们就可以开始创建和使用函数了。但这只是学习和使用函数的开始。我们将继续学习更多函数的相关知识，更深入地研究它们的先进特征。

### [任务](https://zh.javascript.info/function-basics#tasks)

#### [是否需要 “else”？](https://zh.javascript.info/function-basics#shi-fou-xu-yao-else)



重要程度: 4

如果参数 `age` 大于 `18`，那么下面的函数将返回 `true`。

否则它将会要求进行确认，并返回确认结果：

```javascript
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
```

如果 `else` 被删除，函数的工作方式会不同吗？

```javascript
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
```

这两个变体的行为是否有区别？

解决方案

没有区别。



#### [使用 '?' 或者 '||' 重写函数](https://zh.javascript.info/function-basics#shi-yong-huo-zhe-zhong-xie-han-shu)



重要程度: 4

如果参数 `age` 大于 `18`，那么下面的函数返回 `true`。

否则它将会要求进行确认，并返回确认结果：

```javascript
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}
```

重写这个函数并保证效果相同，不使用 `if`，且只需一行代码。

编写 `checkAge` 的两个变体：

1. 使用问号运算符 `?`
2. 使用或运算符 `||`

解决方案

使用问号运算符 `'?'`：

```javascript
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}
```

使用或运算符 `||`（最短的变体）：

```javascript
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}
```

请注意此处不需要 `age > 18` 左右的括号。写上括号是为了提高可读性。



#### [函数 min(a, b)](https://zh.javascript.info/function-basics#han-shu-minab)



重要程度: 1

写一个返回数字 `a` 和 `b` 中较小的那个数字的函数 `min(a,b)`。

例如：

```javascript
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
```

解决方案

使用 `if` 的解决方案：

```javascript
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
```

使用问号运算符 `'?'` 的解决方案：

```javascript
function min(a, b) {
  return a < b ? a : b;
}
```

P.S. 在 `a == b` 的情况下，返回什么都无关紧要。



#### [函数 pow(x,n)](https://zh.javascript.info/function-basics#han-shu-powxn)



重要程度: 4

写一个函数 `pow(x,n)`，返回 `x` 的 `n` 次方。换句话说，将 `x` 与自身相乘 `n` 次，返回最终结果。

```javascript
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...*1 = 1
```

创建一个 web 页面，提示输入 `x` 和 `n`，然后返回 `pow(x,n)` 的运算结果。

[运行 demo](https://zh.javascript.info/function-basics#)

P.S. 在这个任务中，函数应该只支持自然数 `n`：从 `1` 开始的整数。

解决方案

```javascript
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}
```



## 函数表达式

在 JavaScript 中，函数不是“神奇的语言结构”，而是一种特殊的值。

我们在前面章节使用的语法称为 **函数声明**：

```javascript
function sayHi() {
  alert( "Hello" );
}
```

另一种创建函数的语法称为 **函数表达式**。

通常会写成这样：

```javascript
let sayHi = function() {
  alert( "Hello" );
};
```

在这里，函数被创建并像其他赋值一样，被明确地分配给了一个变量。不管函数是被怎样定义的，都只是一个存储在变量 `sayHi` 中的值。

上面这两段示例代码的意思是一样的：“创建一个函数，并把它存进变量 `sayHi`”。

我们还可以用 `alert` 打印这个变量值：

```javascript
function sayHi() {
  alert( "Hello" );
}

alert( sayHi ); // 显示函数代码
```

注意，最后一行代码并不会运行函数，因为 `sayHi` 后没有括号。在其他编程语言中，只要提到函数的名称都会导致函数的调用执行，但 JavaScript 可不是这样。

在 JavaScript 中，函数是一个值，所以我们可以把它当成值对待。上面代码显示了一段字符串值，即函数的源码。

的确，在某种意义上说一个函数是一个特殊值，我们可以像 `sayHi()` 这样调用它。

但它依然是一个值，所以我们可以像使用其他类型的值一样使用它。

我们可以复制函数到其他变量：

```javascript
function sayHi() {   // (1) 创建
  alert( "Hello" );
}

let func = sayHi;    // (2) 复制

func(); // Hello     // (3) 运行复制的值（正常运行）！
sayHi(); // Hello    //     这里也能运行（为什么不行呢）
```

解释一下上段代码发生的细节：

1. `(1)` 行声明创建了函数，并把它放入到变量 `sayHi`。
2. `(2)` 行将 `sayHi` 复制到了变量 `func`。请注意：`sayHi` 后面没有括号。如果有括号，`func = sayHi()` 会把 `sayHi()` 的调用结果写进`func`，而不是 `sayHi` **函数** 本身。
3. 现在函数可以通过 `sayHi()` 和 `func()` 两种方式进行调用。

注意，我们也可以在第一行中使用函数表达式来声明 `sayHi`：

```javascript
let sayHi = function() {
  alert( "Hello" );
};

let func = sayHi;
// ...
```

这两种声明的函数是一样的。

**为什么这里末尾会有个分号？**

你可能想知道，为什么函数表达式结尾有一个分号 `;`，而函数声明没有：

```javascript
function sayHi() {
  // ...
}

let sayHi = function() {
  // ...
};
```

答案很简单：

- 在代码块的结尾不需要加分号 `;`，像 `if { ... }`，`for { }`，`function f { }` 等语法结构后面都不用加。
- 函数表达式是在语句内部的：`let sayHi = ...;`，作为一个值。它不是代码块而是一个赋值语句。不管值是什么，都建议在语句末尾添加分号 `;`。所以这里的分号与函数表达式本身没有任何关系，它只是用于终止语句。

### [回调函数](https://zh.javascript.info/function-expressions#hui-tiao-han-shu)

让我们多举几个例子，看看如何将函数作为值来传递以及如何使用函数表达式。

我们写一个包含三个参数的函数 `ask(question, yes, no)`：

- `question`

  关于问题的文本

- `yes`

  当回答为 “Yes” 时，要运行的脚本

- `no`

  当回答为 “No” 时，要运行的脚本

函数需要提出 `question`（问题），并根据用户的回答，调用 `yes()` 或 `no()`：

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// 用法：函数 showOk 和 showCancel 被作为参数传入到 ask
ask("Do you agree?", showOk, showCancel);
```

在实际开发中，这样的的函数是非常有用的。实际开发与上述示例最大的区别是，实际开发中的函数会通过更加复杂的方式与用户进行交互，而不是通过简单的 `confirm`。在浏览器中，这样的函数通常会绘制一个漂亮的提问窗口。但这是另外一件事了。

`ask` 的两个参数值 `showOk` 和 `showCancel` 可以被称为 **回调函数** 或简称 **回调**。

主要思想是我们传递一个函数，并期望在稍后必要时将其“回调”。在我们的例子中，`showOk` 是回答 “yes” 的回调，`showCancel` 是回答 “no” 的回调。

我们可以用函数表达式对同样的函数进行大幅简写：

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
```

这里直接在 `ask(...)` 调用内进行函数声明。这两个函数没有名字，所以叫 **匿名函数**。这样的函数在 `ask` 外无法访问（因为没有对它们分配变量），不过这正是我们想要的。

这样的代码在我们的脚本中非常常见，这正符合 JavaScript 语言的思想。

**一个函数是表示一个“行为”的值**

字符串或数字等常规值代表 **数据**。

函数可以被视为一个 **行为（action）**。

我们可以在变量之间传递它们，并在需要时运行。

### [函数表达式 vs 函数声明](https://zh.javascript.info/function-expressions#han-shu-biao-da-shi-vs-han-shu-sheng-ming)

让我们来总结一下函数声明和函数表达式之间的主要区别。

首先是语法：如何通过代码对它们进行区分。

- **函数声明**：在主代码流中声明为单独的语句的函数。

  ```javascript
  // 函数声明
  function sum(a, b) {
    return a + b;
  }
  ```

- **函数表达式**：在一个表达式中或另一个语法结构中创建的函数。下面这个函数是在赋值表达式 `=` 右侧创建的：

  ```javascript
  // 函数表达式
  let sum = function(a, b) {
    return a + b;
  };
  ```

更细微的差别是，JavaScript 引擎会在 **什么时候** 创建函数。

**函数表达式是在代码执行到达时被创建，并且仅从那一刻起可用。**

一旦代码执行到赋值表达式 `let sum = function…` 的右侧，此时就会开始创建该函数，并且可以从现在开始使用（分配，调用等）。

函数声明则不同。

**在函数声明被定义之前，它就可以被调用。**

例如，一个全局函数声明对整个脚本来说都是可见的，无论它被写在这个脚本的哪个位置。

这是内部算法的原故。当 JavaScript **准备** 运行脚本时，首先会在脚本中寻找全局函数声明，并创建这些函数。我们可以将其视为“初始化阶段”。

在处理完所有函数声明后，代码才被执行。所以运行时能够使用这些函数。

例如下面的代码会正常工作：

```javascript
sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}
```

函数声明 `sayHi` 是在 JavaScript 准备运行脚本时被创建的，在这个脚本的任何位置都可见。

……如果它是一个函数表达式，它就不会工作：

```javascript
sayHi("John"); // error!

let sayHi = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};
```

函数表达式在代码执行到它时才会被创建。只会发生在 `(*)` 行。为时已晚。

函数声明的另外一个特殊的功能是它们的块级作用域。

**严格模式下，当一个函数声明在一个代码块内时，它在该代码块内的任何位置都是可见的。但在代码块外不可见。**

例如，想象一下我们需要依赖于在代码运行过程中获得的变量 `age` 声明一个函数 `welcome()`。并且我们计划在之后的某个时间使用它。

如果我们使用函数声明，以下则代码不能如愿工作：

```javascript
let age = prompt("What is your age?", 18);

// 有条件地声明一个函数
if (age < 18) {

  function welcome() {
    alert("Hello!");
  }

} else {

  function welcome() {
    alert("Greetings!");
  }

}

// ……稍后使用
welcome(); // Error: welcome is not defined
```

这是因为函数声明只在它所在的代码块中可见。

下面是另一个例子：

```javascript
let age = 16; // 拿 16 作为例子

if (age < 18) {
  welcome();               // \   (运行)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  函数声明在声明它的代码块内任意位置都可用
  }                        //  |
                           //  |
  welcome();               // /   (运行)

} else {

  function welcome() {
    alert("Greetings!");
  }
}

// 在这里，我们在花括号外部调用函数，我们看不到它们内部的函数声明。


welcome(); // Error: welcome is not defined
```

我们怎么才能让 `welcome` 在 `if` 外可见呢？

正确的做法是使用函数表达式，并将 `welcome` 赋值给在 `if` 外声明的变量，并具有正确的可见性。

下面的代码可以如愿运行：

```javascript
let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // 现在可以了
```

或者我们可以使用问号运算符 `?` 来进一步对代码进行简化：

```javascript
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // 现在可以了
```

**什么时候选择函数声明与函数表达式？**

根据经验，当我们需要声明一个函数时，首先考虑函数声明语法。它能够为组织代码提供更多的灵活性。因为我们可以在声明这些函数之前调用这些函数。

这对代码可读性也更好，因为在代码中查找 `function f(…) {…}` 比 `let f = function(…) {…}` 更容易。函数声明更“醒目”。

……但是，如果由于某种原因而导致函数声明不适合我们（我们刚刚看过上面的例子），那么应该使用函数表达式。

### [总结](https://zh.javascript.info/function-expressions#zong-jie)

- 函数是值。它们可以在代码的任何地方被分配，复制或声明。
- 如果函数在主代码流中被声明为单独的语句，则称为“函数声明”。
- 如果该函数是作为表达式的一部分创建的，则称其“函数表达式”。
- 在执行代码块之前，内部算法会先处理函数声明。所以函数声明在其被声明的代码块内的任何位置都是可见的。
- 函数表达式在执行流程到达时创建。

在大多数情况下，当我们需要声明一个函数时，最好使用函数声明，因为函数在被声明之前也是可见的。这使我们在代码组织方面更具灵活性，通常也会使得代码可读性更高。

所以，仅当函数声明不适合对应的任务时，才应使用函数表达式。在本章中，我们已经看到了几个例子，以后还会看到更多的例子。



## 箭头函数，基础知识

创建函数还有另外一种非常简单的语法，并且这种方法通常比函数表达式更好。

它被称为“箭头函数”，因为它看起来像这样：

```javascript
let func = (arg1, arg2, ...argN) => expression
```

……这里创建了一个函数 `func`，它接受参数 `arg1..argN`，然后使用参数对右侧的 `expression` 求值并返回其结果。

换句话说，它是下面这段代码的更短的版本：

```javascript
let func = function(arg1, arg2, ...argN) {
  return expression;
};
```

让我们来看一个具体的例子：

```javascript
let sum = (a, b) => a + b;

/* 这个箭头函数是下面这个函数的更短的版本：

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3
```

可以看到 `(a, b) => a + b` 表示一个函数接受两个名为 `a` 和 `b` 的参数。在执行时，它将对表达式 `a + b` 求值，并返回计算结果。

- 如果我们只有一个参数，还可以省略掉参数外的圆括号，使代码更短。

  例如：

  ```javascript
  let double = n => n * 2;
  // 差不多等同于：let double = function(n) { return n * 2 }
  
  alert( double(3) ); // 6
  ```

- 如果没有参数，括号将是空的（但括号应该保留）：

  ```javascript
  let sayHi = () => alert("Hello!");
  
  sayHi();
  ```

箭头函数可以像函数表达式一样使用。

例如，动态创建一个函数：

```javascript
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");

welcome();
```

一开始，箭头函数可能看起来并不熟悉，也不容易读懂，但一旦我们看习惯了之后，这种情况很快就会改变。

箭头函数对于简单的单行行为（action）来说非常方便，尤其是当我们懒得打太多字的时候。

### [多行的箭头函数](https://zh.javascript.info/arrow-functions-basics#duo-hang-de-jian-tou-han-shu)

上面的例子从 `=>` 的左侧获取参数，然后使用参数计算右侧表达式的值。

但有时我们需要更复杂一点的东西，比如多行的表达式或语句。这也是可以做到的，但是我们应该用花括号括起来。然后使用一个普通的 `return` 将需要返回的值进行返回。

就像这样：

```javascript
let sum = (a, b) => {  // 花括号表示开始一个多行函数
  let result = a + b;
  return result; // 如果我们使用了花括号，那么我们需要一个显式的 “return”
};

alert( sum(1, 2) ); // 3
```

**更多内容**

在这里，我们赞扬了箭头函数的简洁性。但还不止这些！

箭头函数还有其他有趣的特性。

为了更深入地学习它们，我们首先需要了解一些 JavaScript 其他方面的知识，因此我们将在后面的 [深入理解箭头函数](https://zh.javascript.info/arrow-functions) 一章中再继续研究箭头函数。

现在，我们已经可以用箭头函数进行单行行为和回调了。

### [总结](https://zh.javascript.info/arrow-functions-basics#zong-jie)

对于一行代码的函数来说，箭头函数是相当方便的。它具体有两种：

1. 不带花括号：`(...args) => expression` — 右侧是一个表达式：函数计算表达式并返回其结果。
2. 带花括号：`(...args) => { body }` — 花括号允许我们在函数中编写多个语句，但是我们需要显式地 `return` 来返回一些内容。

### [任务](https://zh.javascript.info/arrow-functions-basics#tasks)

#### [用箭头函数重写](https://zh.javascript.info/arrow-functions-basics#yong-jian-tou-han-shu-zhong-xie)



用箭头函数重写下面的函数表达式：

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
```

解决方案

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
```

是不是看起来精简多了？



## JavaScript 特性

本章简要回顾我们到现在为止学到的 JavaScript 特性，并特别注意了一些细节。

### [代码结构](https://zh.javascript.info/javascript-specials#dai-ma-jie-gou)

语句用分号分隔：

```javascript
alert('Hello'); alert('World');
```

通常，换行符也被视为分隔符，因此下面的例子也能正常运行：

```javascript
alert('Hello')
alert('World')
```

这就是所谓的「自动分号插入」。但有时它不起作用，例如：

```javascript
alert("There will be an error after this message")

[1, 2].forEach(alert)
```

大多数代码风格指南都认为我们应该在每个语句后面都加上分号。

在代码块 `{...}` 后以及有代码块的语法结构（例如循环）后不需要加分号：

```javascript
function f() {
  // 函数声明后不需要加分号
}

for(;;) {
  // 循环语句后不需要加分号
}
```

……但即使我们在某处添加了「额外的」分号，这也不是错误。分号会被忽略的。

更多内容：[代码结构](https://zh.javascript.info/structure)。

### [严格模式](https://zh.javascript.info/javascript-specials#yan-ge-mo-shi)

为了完全启用现代 JavaScript 的所有特性，我们应该在脚本顶部写上 `"use strict"` 指令。

```javascript
'use strict';

...
```

该指令必须位于 JavaScript 脚本的顶部或函数体的开头。

如果没有 `"use strict"`，所有东西仍可以正常工作，但是某些特性的表现方式与旧式「兼容」方式相同。我们通常更喜欢现代的方式。

语言的一些现代特征（比如我们将来要学习的类）会隐式地启用严格模式。

更多内容：[现代模式，"use strict"](https://zh.javascript.info/strict-mode)。

### [变量](https://zh.javascript.info/javascript-specials#bian-liang)

可以使用以下方式声明变量：

- `let`
- `const`（不变的，不能被改变）
- `var`（旧式的，稍后会看到）

一个变量名可以由以下组成：

- 字母和数字，但是第一个字符不能是数字。
- 字符 `$` 和 `_` 是允许的，用法同字母。
- 非拉丁字母和象形文字也是允许的，但通常不会使用。

变量是动态类型的，它们可以存储任何值：

```javascript
let x = 5;
x = "John";
```

有 8 种数据类型：

- `number` — 可以是浮点数，也可以是整数，
- `bigint` — 用于任意长度的整数，
- `string` — 字符串类型，
- `boolean` — 逻辑值：`true/false`，
- `null` — 具有单个值 `null` 的类型，表示“空”或“不存在”，
- `undefined` — 具有单个值 `undefined` 的类型，表示“未分配（未定义）”，
- `object` 和 `symbol` — 对于复杂的数据结构和唯一标识符，我们目前还没学习这个类型。

`typeof` 运算符返回值的类型，但有两个例外：

```javascript
typeof null == "object" // JavaScript 编程语言的设计错误
typeof function(){} == "function" // 函数被特殊对待
```

更多内容：[变量](https://zh.javascript.info/variables) 和 [数据类型](https://zh.javascript.info/types)。

### [交互](https://zh.javascript.info/javascript-specials#jiao-hu)

我们使用浏览器作为工作环境，所以基本的 UI 功能将是：

- [`prompt(question[, default\])`](https://developer.mozilla.org/zh/docs/Web/API/Window/prompt)

  提出一个问题，并返回访问者输入的内容，如果他按下「取消」则返回 `null`。

- [`confirm(question)`](https://developer.mozilla.org/zh/docs/Web/API/Window/confirm)

  提出一个问题，并建议用户在“确定”和“取消”之间进行选择。选择结果以 `true/false` 形式返回。

- [`alert(message)`](https://developer.mozilla.org/zh/docs/Web/API/Window/alert)

  输出一个 `消息`。

这些函数都会产生 **模态框**，它们会暂停代码执行并阻止访问者与页面的其他部分进行交互，直到用户做出回答为止。

举个例子：

```javascript
let userName = prompt("Your name?", "Alice");
let isTeaWanted = confirm("Do you want some tea?");

alert( "Visitor: " + userName ); // Alice
alert( "Tea wanted: " + isTeaWanted ); // true
```

更多内容：[交互：alert、prompt 和 confirm](https://zh.javascript.info/alert-prompt-confirm)。

### [运算符](https://zh.javascript.info/javascript-specials#yun-suan-fu)

JavaScript 支持以下运算符：

- 算数运算符

  常规的：`+ - * /`（加减乘除），取余运算符 `%` 和幂运算符 `**`。二进制加号 `+` 可以连接字符串。如果任何一个操作数是一个字符串，那么另一个操作数也将被转换为字符串：`alert( '1' + 2 ); // '12'，字符串 alert( 1 + '2' ); // '12'，字符串`

- 赋值

  简单的赋值：`a = b` 和合并了其他操作的赋值：`a * = 2`。

- 按位运算符

  按位运算符在最低位级上操作 32 位的整数：详见 [文档](https://developer.mozilla.org/zh/docs/Web/JavaScript/Guide/Expressions_and_Operators#Bitwise)。

- 三元运算符

  唯一具有三个参数的操作：`cond ? resultA : resultB`。如果 `cond` 为真，则返回 `resultA`，否则返回 `resultB`。

- 逻辑运算符

  逻辑与 `&&` 和或 `||` 执行短路运算，然后返回运算停止处的值（`true`/`false` 不是必须的）。逻辑非 `!` 将操作数转换为布尔值并返回其相反的值。

- 空值合并运算符

  `??` 运算符从一列变量中，选取值为已定义的值（defined value）的变量。`a ?? b` 的结果是 `a`，除非 `a` 为 `null/undefined`，这时结果是 `b`。

- 比较运算符

  对不同类型的值进行相等检查时，运算符 `==` 会将不同类型的值转换为数字（除了 `null` 和 `undefined`，它们彼此相等而没有其他情况），所以下面的例子是相等的：`alert( 0 == false ); // true alert( 0 == '' ); // true`其他比较也将转换为数字。严格相等运算符 `===` 不会进行转换：不同的类型总是指不同的值。值 `null` 和 `undefined` 是特殊的：它们只在 `==` 下相等，且不相等于其他任何值。大于/小于比较，在比较字符串时，会按照字符顺序逐个字符地进行比较。其他类型则被转换为数字。

- 其他运算符

  还有很少一部分其他运算符，如逗号运算符。

更多内容：[基础运算符，数学](https://zh.javascript.info/operators)，[值的比较](https://zh.javascript.info/comparison)，[逻辑运算符](https://zh.javascript.info/logical-operators)，[空值合并运算符 '??'](https://zh.javascript.info/nullish-coalescing-operator)。

### [循环](https://zh.javascript.info/javascript-specials#xun-huan)

- 我们涵盖了 3 种类型的循环：

  ```javascript
  // 1
  while (condition) {
    ...
  }
  
  // 2
  do {
    ...
  } while (condition);
  
  // 3
  for(let i = 0; i < 10; i++) {
    ...
  }
  ```

- 在 `for(let...)` 循环内部声明的变量，只在该循环内可见。但我们也可以省略 `let` 并重用已有的变量。

- 指令 `break/continue` 允许退出整个循环/当前迭代。使用标签来打破嵌套循环。

更多内容：[循环：while 和 for](https://zh.javascript.info/while-for)。

稍后我们将学习更多类型的循环来处理对象。

### [“switch” 结构](https://zh.javascript.info/javascript-specials#switch-jie-gou)

“switch” 结构可以替代多个 `if` 检查。它内部使用 `===`（严格相等）进行比较。

例如：

```javascript
let age = prompt('Your age?', 18);

switch (age) {
  case 18:
    alert("Won't work"); // prompt 的结果是一个字符串，而不是数字
    break;

  case "18":
    alert("This works!");
    break;

  default:
    alert("Any value not equal to one above");
}
```

详情请见：["switch" 语句](https://zh.javascript.info/switch)。

### [函数](https://zh.javascript.info/javascript-specials#han-shu)

我们介绍了三种在 JavaScript 中创建函数的方式：

1. 函数声明：主代码流中的函数

   ```javascript
   function sum(a, b) {
     let result = a + b;
   
     return result;
   }
   ```

2. 函数表达式：表达式上下文中的函数

   ```javascript
   let sum = function(a, b) {
     let result = a + b;
   
     return result;
   }
   ```

3. 箭头函数：

   ```javascript
   // 表达式在右侧
   let sum = (a, b) => a + b;
   
   // 或带 {...} 的多行语法，此处需要 return：
   let sum = (a, b) => {
     // ...
     return a + b;
   }
   
   // 没有参数
   let sayHi = () => alert("Hello");
   
   // 有一个参数
   let double = n => n * 2;
   ```

- 函数可能具有局部变量：在函数内部声明的变量。这类变量只在函数内部可见。
- 参数可以有默认值：`function sum(a = 1, b = 2) {...}`。
- 函数总是返回一些东西。如果没有 `return` 语句，那么返回的结果是 `undefined`。

详细内容：请见 [函数](https://zh.javascript.info/function-basics)，[箭头函数，基础知识](https://zh.javascript.info/arrow-functions-basics)。

### [更多内容](https://zh.javascript.info/javascript-specials#geng-duo-nei-rong)

这些是 JavaScript 特性的简要概述。截至目前，我们仅仅学习了基础知识。随着教程的深入，你会发现 JavaScript 的更多特性和高级特性。