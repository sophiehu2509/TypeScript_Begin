解决 JS 语言的问题

# JS 开发中的问题

- 使用了不存在的变量、函数或成员
- 把一个不确定的类型，当做一个确定的类型处理。类型错误
- 在使用null或undefined的成员

js的原罪

- js 语言本身的特性，决定了该语言无法适应大型的复杂的项目
- 弱类型：某个变量，可以随时更换类型
- 解释性：错误发生的时间，是在运行时

# TypeScript

TypeScript 是JS的超集，是一个可选的、静态的类型系统 （都跟类型检查有关）

- 超集

- 类型系统

对代码中所有的标识符（变量、函数、参数、返回值）进行类型检查

- 可选的

- 静态的

无论是浏览器环境还是node环境无法直接识别ts代码

>babel es6-> es5 把 es6 转换成 es5

> tsc: ts -> es

tsc: ts编译器

静态： 类型检查发生的时间，在编译的时候，而非运行时
TS不参与任何运行时的类型检查。

**TS 的常识**

- 2012年微软发布的语言 （ES6 -> ES2015）
- anders Hejlsberg 负责开发TS项目
- 开源


**额外的惊喜**

有了类型检查之后，增强了面向对象的开发

js中也有类和对象，js支持面向对象开发。没有类型检查，很多面向对象的场景实现起来有诸多问题

使用TS后，可以编写出完善的面向对象代码。

# 安装TypeScript

默认情况下，TS会做出下面几种假设

1. 假设当前的执行环境是Dom
2. 如果代码中没有使用模块化语句（import、export），便认为该代码是全局执行
3. 编译的目标代码是ES3

有两种方式更改以上假设：

1. 使用tsc命令行的时候，加上选项作为参数
2. 使用配置文件，来更改编译选项

# TS的配置文件
tsconfig.json 
tsc --init 

使用了配置文件后，使用tsc进行编译时，不能跟上文件名，如果跟上文件名，会忽略配置文件

@types/node
@types是一个ts官方的类型库，其中包含了很多对js代码的类型描述。

> JQuery:用js写的，没有类型检查
> 安装@types/jquery, 为jquery库添加类型定义

# 使用第三方库简化流程

ts-node:将ts代码在内存中完成编译，同时完成运行
nodemon:用于检测文件的变化  
  - nodemon --watch src -e -ts --exec ts-node src/index.ts
  - -e -ts 只监控后缀名是ts的文件   --watch src 只监控src文件夹内 后缀为ts的文件

tsc 命令用于最后的打包

# 基本类型约束

>TS 是一个可选的静态的类型系统

# 如何进行类型约束

仅需要在 变量、函数的参数、函数的返回值 的位置后面加上 ：类型

ts在很多场景中可以完成类型推导

> 小技巧，如何区分数字字符串和数字，关键看怎么读？
>如果按照数字的方式朗读，则为数字；否则，为字符串


# 源代码和编译结构的差异

编译结果中，没有类型约束信息， ts是静态的，只在编译过程中有效

# 基本类型
- number: 数字
- string: 字符
- array: 数组
- object: 对象
- boolean

null 和 undefined 是所有类型的子类型，可以赋值给任何类型

通过添加 ```strictNullChecks:true```，可以获得更严格的空类型检查，null和undefined只能赋值给自身

# 其他常用类型

- 联合类型 ： 多种类型任选其一
配合类型保护进行判断
类型保护： 当对某个变量进行类型判断之后（比如： typeof 只能触发基本类型保护）在判断的语句块中，便可以确定它的确切类型

let name: string | undefined;

- void 类型 
通常用于约束函数的返回值，表示该函数没有任何返回

- never 类型
通常用于约束函数的返回值，表示该函数永远不可能结束

function throwError(msg: string):never {
  throw new Error(msg)
  console.log(’assgg‘) //这条语句是永远都不会运行的
}

function alwaysDoSomething():never {
  while(true){

  }
}



- 字面量类型：使用一个值进行约束

let a:"A"  a 以后只能是A， 不能赋值别的值

比如 gender:"男" | ”女“

let arr:[] //arr永远只能取值为一个空数组

let user: {
  name: string
  age: number
}

- 元祖类型 （Tuple）: 一个固定长度的数组，并且数组中每一项的类型确定
let tu: [string, number] //只能并且必须有2项，第一个是字符串，第二个是数字

- any 类型： any类型可以绕过类型检查，因此，any类型的数据可以赋值给任意类型


# 类型别名

对已知的一些类型定义名称

# 函数的相关约束

函数重载：在函数实现之前，对函数调用的多种情况进行声明
可选参数：可以在某些参数名后加上问号，表示该参数可以不用传递 （只能出现在末尾）
function sum(a: number, b:number, c?:number){}

也可以先付给默认值
function sum(a: number, b:number, c:number = 0){}

# 扩展类型-枚举

> 扩展类型：类型别名、枚举、接口和类

枚举：把一堆东西一个个列出来
枚举：通常用于约束某个变量的取值范围

自变量和联合类型配合使用，也可以达到同样的目标 

# 自变量类型的问题

- 在类型约束位置，会产生重复代码。可以使用类型别名来解决
- 逻辑含义和真实的值产生了混淆，会导致当修改真实值的时候，产生大量的修改
- 字面量类型不会进入编译结果

# 枚举

如何定义一个枚举  （逻辑含义和真实值 分开了）

```
enum 枚举名{
  枚举字段1 = 值1，
  枚举字段2 = 值2
  ...
}
```

枚举会出现在编译结果中，编译结果中表现为对象

枚举的规则：
- 枚举的字段值可以是字符串或数字

# 模块化标准

>前端领域中的模块化标准：ES6、commonjs、amd、umd、system、esnext

>TS中如何书写模块化语句
>编译结果？？

# TS中如何书写模块化语句

TS中，导入和导出模块，统一使用ES6的模块化标准

# 编译结果中的模块化

可配置

tsc --watch 监听文件变化，但是不会重新编译

TS中的模块化，在编译结果中

- 如果编译结果的标准化是 ‘ES6’：没有区别
- 如果编译结果的模块化标准是 commonjs：导出的声明，会变成exports的属性，默认的导出会变成exports的default属性

# 解决默认导入的错误

有些模块是按照 commonjs的标准写的 按照js的方法引入会报错

```
import {readFileSync} from 'fs'
fs.readFileSync("./") 
```
会报错 不能用默认导入 module.export = {}
这时候要 

```
import * as fs from "fs"
fs.readFileSync("./")
```
配置名称            含义
module             设置编译结果中使用的模块化标准
noImplicitUseStrict  设置解析模块的模式
removeComments       编译结果中不包含“use strict”
noEmitOnError        错误时不生成编译结果
esModuleInterop       启用es模块化交互非es模块导出

# 如何在TS中书写commonjs模块化代码

# 模块解析

模块解析：应该从什么位置寻找模块
TS中，有两种模块解析策略

- classic：经典
- node:node解析策略（唯一的变化，是将js替换成ts）
  - 相对路径 ```require("./xxx")``` 找package.json 是否有main的配置，可能是main：main.ts  看xxx这个文件夹下是否有 main.ts的文件或者是否有 index.ts文件
  - 非相对模块  ```require("xxx")``` 根目录跟 node_module一个根目录
