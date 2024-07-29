# ES6

## 一、ES6 数据类型

ES6（ECMAScript 2015）是JavaScript的一个主要版本，它引入了许多新的语言特性和改进。在ES6中，JavaScript的数据类型保持了与之前版本相同的基本结构，但增加了一些新的特性。以下是ES6中的主要数据类型：

### 1、基本数据类型（Primitive Types）

- **Undefined**：表示未定义的值，例如 `let a;`。
- **Null**：表示空值或不存在的对象，例如 `let a = null;`。
- **Boolean**：表示布尔值，即 `true` 或 `false`。
- **Number**：表示数值，包括整数和浮点数，例如 `let a = 10;`。
- **String**：表示字符串，例如 `let a = "Hello";`。
- **Symbol**（ES6新增）：表示唯一的、不可变的值，通常用作对象属性的键，例如 `let a = Symbol("description");`。

### 2、引用数据类型（Reference Types）

- **Object**：表示对象，可以包含多个键值对，例如 `let a = { key: "value" };`。
- **Array**：表示数组，是一种特殊的对象，用于存储有序的集合，例如 `let a = [1, 2, 3];`。
- **Function**：表示函数，可以执行特定的代码块，例如 `let a = function() { console.log("Hello"); };`。

### 3、新增的数据结构

- **Map**（ES6新增）：表示键值对的集合，键和值可以是任意类型，例如 `let a = new Map();`。
- **Set**（ES6新增）：表示唯一值的集合，值不能重复，例如 `let a = new Set();`。
- **WeakMap**（ES6新增）：类似于Map，但键必须是对象，并且不会阻止垃圾回收，例如 `let a = new WeakMap();`。
- **WeakSet**（ES6新增）：类似于Set，但值必须是对象，并且不会阻止垃圾回收，例如 `let a = new WeakSet();`。

ES6还引入了一些新的语法和特性，如模板字符串、解构赋值、默认参数、箭头函数、类（Class）、模块（Module）等，这些特性进一步增强了JavaScript的表达能力和开发效率。