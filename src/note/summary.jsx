import React from 'react';
import { Collapse } from 'antd';
import { Card } from 'antd';
import './style/index.scss';
const { Panel } = Collapse;
//字符串的方法
const data = [
  //字符串的增删改查方法
  //concat方法
  {
    id: 1,
    text:
      'concat() 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。',
    //语法
    grammar: '语法:',
    method: 'str.concat(string2, string3[, ..., stringN]).',
    //相关链接
    link:
      'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat',
    relevant: 'Array.prototype.concat()',
    Connect: '相关链接',
    //描述
    describe: '描述',
    describes:
      'concat 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。 concat 方法并不影响原字符串。',
    //参数
    parameter: '参数',
    parameter1: 'string2...stringN',
    parameter2: '和原字符串连接的多个字符串',
    //性能
    performance: '性能',
    performance1:
      '强烈建议使用 赋值操作符（+, +=）代替 concat 方法。参看 性能测试（perfomance test）。 '
  },
  //trim() 方法
  {
    id: 2,
    text: 'trim() 方法会从一个字符串的两端删除空白字符。',
    //语法
    grammar: '语法:',
    method: 'str.trim()',
    //相关链接
    link:
      'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim',
    relevant: 'Array.prototype.trim()',
    Connect: '相关链接',
    //描述
    describe: '描述',
    describes: 'trim() 方法并不影响原字符串本身，它返回的是一个新的字符串。'
  },
  //split()方法
  {
    id: 3,
    text:
      'split() 方法使用指定的分隔符字符串将一个String对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。',
    //语法
    grammar: '语法:',
    method: 'str.split([separator[, limit]])',
    //相关链接
    link:
      'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split',
    relevant: 'Array.prototype.split()',
    Connect: '相关链接',
    //描述
    describe: '描述',
    describes:
      '找到分隔符后，将其从字符串中删除，并将子字符串的数组返回。如果没有找到或者省略了分隔符，则该数组包含一个由整个字符串组成的元素。如果分隔符为空字符串，则将str转换为字符数组。如果分隔符出现在字符串的开始或结尾，或两者都分开，分别以空字符串开头，结尾或两者开始和结束。因此，如果字符串仅由一个分隔符实例组成，则该数组由两个空字符串组成。',
    describes2:
      '如果分隔符是包含捕获括号的正则表达式，则每次分隔符匹配时，捕获括号的结果（包括任何未定义的结果）将被拼接到输出数组中。但是，并不是所有浏览器都支持此功能。',
    //参数
    parameter: '参数',
    parameter1:
      'separator :指定表示每个拆分应发生的点的字符串。separator 可以是一个字符串或正则表达式。 如果纯文本分隔符包含多个字符，则必须找到整个字符串来表示分割点。如果在str中省略或不出现分隔符，则返回的数组包含一个由整个字符串组成的元素。如果分隔符为空字符串，则将str原字符串中每个字符的数组形式返回。',
    parameter2:
      'limit一个整数，限定返回的分割片段数量。当提供此参数时，split 方法会在指定分隔符的每次出现时分割该字符串，但在限制条目已放入数组时停止。如果在达到指定限制之前达到字符串的末尾，它可能仍然包含少于限制的条目。新数组中不返回剩下的文本。',
    //返回值
    retuval: '返回值',
    retuval1: '返回源字符串以分隔符出现位置分隔而成的一个 Array '
  },
  //search() 方法
  {
    id: 4,
    text: 'search() 方法执行正则表达式和 String 对象之间的一个搜索匹配。',
    //语法
    grammar: '语法:',
    method: 'str.search(regexp)',
    //相关链接
    link:
      'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search',
    relevant: 'Array.prototype.search()',
    Connect: '相关链接',
    //描述
    describe: '描述',
    describes:
      '当你想要知道字符串中是否存在某个模式（pattern）时可使用 search()，类似于正则表达式的 test() 方法。当要了解更多匹配信息时，可使用 match()（但会更慢一些），该方法类似于正则表达式的 exec() 方法。',
    //参数
    parameter: '参数',
    parameter1: 'regexp',
    parameter2:
      '一个正则表达式（regular expression）对象。如果传入一个非正则表达式对象 obj，则会使用 new RegExp(obj) 隐式地将其转换为正则表达式对象。',
    //返回值
    retuval: '返回值',
    retuval1:
      '如果匹配成功，则 search() 返回正则表达式在字符串中首次匹配项的索引;否则，返回 -1。'
  }
];

const data2 = [
  //字符串的增删改查方法
  {
    id: 1,
    title: '字符串的 ·增 删 改 查· 方法',
    chidlren: {
      label: 'concat()',
      label2: 'trim() ',
      label3: 'split() ',
      label4: 'search()'
    }
  }
];
//数组的方法
const num = [
  {
    id: 1,
    text: 'valueOf() 方法返回一个被 Number 对象包装的原始值。',
    //语法
    grammar: '语法:',
    method: 'numObj.valueOf()',
    //相关链接
    link:
      'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toSource',
    relevant: 'Number.prototype.toSource()',
    Connect: '相关链接',
    //描述
    describe: '描述',
    describes:
      '该方法通常是由 JavaScript 引擎在内部隐式调用的，而不是由用户在代码中显式调用的。',
    //返回值
    retuval: '返回值',
    retuval1: '表示指定 Number 对象的原始值的数字'
  },
  {
    id: 2,
    text: 'toString() 方法返回指定 Number 对象的字符串表示形式。',
    //语法
    grammar: '语法:',
    method: 'numObj.toString([radix])',
    //相关链接
    link:
      'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed',
    relevant: 'Number.prototype.toFixed()',
    Connect: '相关链接',
    //描述
    describe: '描述',
    describes:
      'Number 对象覆盖了 Object 对象上的 toString() 方法，它不是继承的 Object.prototype.toString()。对于 Number 对象，toString() 方法以指定的基数返回该对象的字符串表示。',
    describes2:
      '如果转换的基数大于10，则会使用字母来表示大于9的数字，比如基数为16的情况，则使用a到f的字母来表示10到15。',
    describes3: '如果基数没有指定，则使用 10。',
    describes4:
      '如果对象是负数，则会保留负号。即使radix是2时也是如此：返回的字符串包含一个负号（-）前缀和正数的二进制表示，不是 数值的二进制补码。',
    describes5:
      '进行数字到字符串的转换时，建议用小括号将要转换的目标括起来，防止出错。',
    //参数
    parameter: '参数',
    parameter1: 'radix',
    parameter2:
      '指定要用于数字到字符串的转换的基数(从2到36)。如果未指定 radix 参数，则默认值为 10。',
    //返回值
    retuval: '返回值',
    retuval1: '表示指定 Number 对象的原始值的数字'
  },
  {
    id: 3,
    text: 'toSource() 方法返回该对象源码的字符串表示。',
    //语法
    grammar: '语法:',
    method: 'numObj.toSource();',
    method2: 'Number.toSource();',
    //相关链接
    link:
      'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource',
    relevant: 'Object.prototype.toSource()',
    Connect: '相关链接',
    //描述
    describe: '描述',
    describes: 'toSource() 方法返回下列值：',
    describes2:
      '对于内置 Number 对象， toSource() 返回下面字符串，用来指明源码是不可见的',
    describes3: 'function Number() { [native code] }',
    describes4: '对于 Number 对象的实例，toSource() 返回一个表示源码的字符串。',
    describes5: '该方法通常被 JavaScript 内部调用，而不是在代码中显示调用。'
  },
  {
    id: 4,
    text:
      'Number.isNaN() 方法确定传递的值是否为 NaN和其类型是 Number。它是原始的全局isNaN()的更强大的版本。',
    //语法
    grammar: '语法:',
    method: 'Number.isNaN(value)',
    //相关链接
    link:
      'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN',
    relevant: 'isNaN()',
    Connect: '相关链接',
    //描述
    describe: '描述',
    describes:
      '在 JavaScript 中，NaN 最特殊的地方就是，我们不能使用相等运算符（== 和 ===）来判断一个值是否是 NaN，因为 NaN == NaN 和 NaN === NaN 都会返回 false。因此，必须要有一个判断值是否是 NaN 的方法。',
    describes2:
      '和全局函数 isNaN() 相比，该方法不会强制将参数转换成数字，只有在参数是真正的数字类型，且值为 NaN 的时候才会返回 true。',
    //参数
    parameter: '参数',
    parameter1: 'value',
    parameter2: '要被检测是否是 NaN 的值',
    //返回值
    retuval: '返回值',
    retuval1: '一个布尔值，表示给定的值是否是 NaN。'
  },
  {
    id: 5,
    text:
      'Number.parseFloat() 方法可以把一个字符串解析成浮点数。该方法与全局的 parseFloat() 函数相同，并且处于 ECMAScript 6 规范中（用于全局变量的模块化）。',
    //语法
    grammar: '语法:',
    method: 'Number.parseFloat(string)',
    //相关链接
    link:
      'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number',
    relevant: 'Number',
    Connect: '相关链接',
    //描述
    describe: '描述',
    describes: '请移步全局函数 parseFloat() 页面查看更多的解释和示例。',
    //参数
    parameter: '参数',
    parameter1: 'value',
    parameter2: '被解析的字符串。',
    //返回值
    retuval: '返回值',
    retuval1: '给定值被解析成浮点数，如果无法被解析成浮点数，则返回NaN'
  },
  {
    id: 6,
    text:
      'Number.parseInt() 方法依据指定基数 [ 参数 radix 的值]，把字符串 [ 参数 string 的值] 解析成整数。',
    //语法
    grammar: '语法:',
    method: 'Number.parseInt(string[, radix])',
    //相关链接
    link:
      'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number',
    relevant: 'Number',
    Connect: '相关链接',
    //描述
    describe: '描述',
    describes: '请移步全局函数 parseFloat() 页面查看更多的解释和示例。',
    //参数
    parameter: '参数',
    parameter1: 'string',
    parameter2: 'radix',
    //返回值
    retuval: '返回值',
    retuval1: '// radix为指定基数，即字符串以多少进制的数字表示',
    retuval2: "let strObj = '0110';",
    retuval3: 'console.log(Number.parseInt(strObj, 2)); // 6',
    retuval4: 'console.log(Number.parseInt(strObj, 10)); // 110'
  },
  {
    id: 7,
    text: 'toLocaleString() 方法返回这个数字在特定语言环境下的表示字符串。',
    //语法
    grammar: '语法:',
    method: 'numObj.toLocaleString([locales [, options]])',
    //相关链接
    link:
      'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString',
    relevant: 'Number.prototype.toString()',
    Connect: '相关链接',
    //描述
    describe: '描述',
    describes: '请移步全局函数 parseFloat() 页面查看更多的解释和示例。',
    //参数
    parameter: '参数',
    parameter1: 'options可选. 包含一些或所有的下面属性的类:',
    parameter2:
      'style格式化时使用的样式.可能的值有“decimal”表示纯数字格式 , “currency”表示货币格式, 和"percent"表示百分比格式; 默认值是 "decimal".',
    parameter3:
      'localeMatcher使用的local的匹配算法. 可能的值有"lookup"和"best fit"; 默认值是 "best fit". ',
    //返回值
    retuval: '返回值',
    retuval1: '返回一个语言环境下的表示字符串。',
    //性能
    performance: '性能',
    performance:
      '当格式化大量数字时，最好建立一个 NumberFormat 对象并且使用它提供的 NumberFormat.format 方法。'
  },
  {
    id: 8,
    text: 'toFixed() 方法使用定点表示法来格式化一个数值。',
    //语法
    grammar: '语法:',
    method: 'numObj.toFixed(digits)',
    //相关链接
    link:
      'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString',
    relevant: 'Number.prototype.toString()',
    Connect: '相关链接',
    //描述
    describe: '描述',
    describes: '请移步全局函数 parseFloat() 页面查看更多的解释和示例。',
    //参数
    parameter: '参数',
    parameter1:
      'digits小数点后数字的个数；介于 0 到 20 （包括）之间，实现环境可能支持更大范围。如果忽略该参数，则默认为 0。',
    //抛出异常
    abnormal: '抛出异常',
    abnormal1:
      'RangeError如果 digits 参数太小或太大。0 到 20（包括）之间的值不会引起 RangeError。实现环境（implementations）也可以支持更大或更小的值。',
    abnormal2: 'TypeError如果该方法在一个非Number类型的对象上调用。',
    //返回值
    retuval: '返回值',
    retuval1: '使用定点表示法表示给定数字的字符串。'
  }
];
const num2 = [
  {
    id: 1,
    title: '数字的方法',
    chidlren: {
      label: 'valueOf()',
      label2: 'toString()',
      label3: 'toSource()',
      label4: 'isNaN()',
      label5: 'parseFloat()',
      label6: 'parseInt()',
      label7: 'toLocaleString() ',
      label8: 'toFixed()'
    }
  }
];

//对象的方法
const obj = [
  {
    id: 1,
    text:
      'Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。',
    //语法
    grammar: '语法:',
    method: 'Object.assign(target, ...sources)',
    //相关链接
    link:
      'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties',
    relevant: 'Object.defineProperties()',
    Connect: '相关链接',
    //描述
    describe: '描述',
    describes:
      '如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性。',
    describes2:
      'Object.assign 方法只会拷贝源对象自身的并且可枚举的属性到目标对象。该方法使用源对象的[[Get]]和目标对象的[[Set]]，所以它会调用相关 getter 和 setter。因此，它分配属性，而不仅仅是复制或定义新的属性。如果合并源包含getter，这可能使其不适合将新属性合并到原型中。为了将属性定义（包括其可枚举性）复制到原型，应使用Object.getOwnPropertyDescriptor()和Object.defineProperty() 。',
    describes3: 'String类型和 Symbol 类型的属性都会被拷贝',
    describes4:
      '在出现错误的情况下，例如，如果属性不可写，会引发TypeError，如果在引发错误之前添加了任何属性，则可以更改target对象。',
    describes5:
      '注意，Object.assign 不会在那些source对象值为 null 或 undefined 的时候抛出错误。',
    //参数
    parameter: '参数',
    parameter1: 'target ：目标对象',
    parameter2: 'sources ：源对象。',
    //返回值
    retuval: '返回值',
    retuval1: '目标对象。'
  },
  {
    id: 2,
    text:
      'hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。',
    //语法
    grammar: '语法:',
    method: 'obj.hasOwnProperty(prop)',
    //相关链接
    link:
      'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain',
    relevant: '继承与原型链',
    Connect: '相关链接',
    //描述
    describe: '描述',
    describes:
      '所有继承了 Object 的对象都会继承到 hasOwnProperty 方法。这个方法可以用来检测一个对象是否含有特定的自身属性；和 in 运算符不同，该方法会忽略掉那些从原型链上继承到的属性。',
    //参数
    parameter: '参数',
    parameter1:
      'prop：要检测的属性的 String 字符串形式表示的名称，或者 Symbol。',
    parameter2: 'sources ：源对象。',
    //备注
    remarks: '备注',
    remarks1:
      '即使属性的值是 null 或 undefined，只要属性存在，hasOwnProperty 依旧会返回 true。',
    //返回值
    retuval: '返回值',
    retuval1: '用来判断某个对象是否含有指定的属性的布尔值 Boolean。'
  },
  {
    id: 3,
    text:
      'Object.defineProperties() 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。',
    //语法
    grammar: '语法:',
    method: 'Object.defineProperties(obj, props)',
    //相关链接
    link:
      'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties',
    relevant: '属性的可枚举性和所有权',
    Connect: '相关链接',
    //描述
    describe: '描述',
    describes:
      'Object.defineProperties本质上定义了obj 对象上props的可枚举属性相对应的所有属性。',
    //参数
    parameter: '参数',
    parameter1: 'obj：在其上定义或修改属性的对象。',
    parameter2:
      'props ：要定义其可枚举属性或修改的属性描述符的对象。对象中存在的属性描述符主要有两种：数据描述符和访问器描述符（更多详情，请参阅Object.defineProperty()）。描述符具有以下键：',
    parameter3:
      'configurable ：true 当且仅当该属性描述符的类型可以被改变并且该属性可以从对应对象中删除。默认为 false',
    parameter4:
      'get ：作为该属性的 getter 函数，如果没有 getter 则为undefined。函数返回值将被用作属性的值。默认为 undefined',
    //返回值
    retuval: '返回值',
    retuval1: '传递给函数的对象。'
  },
  {
    id: 4,
    text: 'Object.fromEntries() 方法把键值对列表转换为一个对象。',
    //语法
    grammar: '语法:',
    method: 'Object.fromEntries(iterable);',
    //相关链接
    link:
      'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries',
    relevant: 'Object.entries()',
    Connect: '相关链接',
    //描述
    describe: '描述',
    describes:
      'Object.fromEntries() 方法接收一个键值对的列表参数，并返回一个带有这些键值对的新对象。这个迭代参数应该是一个能够实现@iterator方法的的对象，返回一个迭代器对象。它生成一个具有两个元素的类数组的对象，第一个元素是将用作属性键的值，第二个元素是与该属性键关联的值。',
    describes2: 'Object.fromEntries() 是 Object.entries 的反转。',
    //参数
    parameter: '参数',
    parameter1: 'iterable',
    parameter2:
      '可迭代对象，类似 Array 、 Map 或者其它实现了可迭代协议的对象。',
    //返回值
    retuval: '返回值',
    retuval1: '一个由该迭代对象条目提供对应属性的新对象。'
  }
];
const obj2 = [
  {
    id: 1,
    title: '对象的方法',
    chidlren: {
      label: 'assign()',
      label2: 'hasOwnProperty()',
      label3: 'defineProperties()',
      label4: 'fromEntries() '
    }
  }
];
export default () => {
  return (
    <div>
      {/* 字符串的方法 */}
      <div>
        {data2.map((item, index) => {
          return (
            <Card key={item.id || index} title={item.title}>
              <p className="zrb-string-summary">{item.chidlren.label}</p>
              <p className="zrb-string-summary">{item.chidlren.label2}</p>
              <p className="zrb-string-summary">{item.chidlren.label3}</p>
              <p className="zrb-string-summary">{item.chidlren.label4}</p>
            </Card>
          );
        })}
      </div>
      <Collapse defaultActiveKey={['key']}>
        {data.map((item, index) => {
          return (
            // 标题
            <Panel header={<h1>{item.text}</h1>} key={item.id || index}>
              {/* 语法 */}
              <h2>{item.grammar}</h2>
              <p>{item.method}</p>
              <p>{item.method2}</p>
              {/* 参数 */}
              <h1>{item.parameter}</h1>
              <p>{item.parameter1}</p>
              <p>{item.parameter2}</p>
              {/* 返回值 */}
              <h1>{item.retuval}</h1>
              <p>{item.retuval1}</p>
              {/* 描述 */}
              <h2>{item.describe}</h2>
              <p>{item.describes}</p>
              <p>{item.describes2}</p>
              {/* 性能 */}
              <h1>{item.performance}</h1>
              <p>{item.performance1}</p>
              {/* 例子 */}
              <p>{item.example}</p>
              <p>{item.example1}</p>
              <p>{item.example2}</p>
              {/* 相关链接 */}
              <h2>{item.Connect}</h2>
              {<a href={item.link}>{item.relevant}</a>}
            </Panel>
          );
        })}
      </Collapse>
      {/* 数组的一些方法 */}
      <div>
        {num2.map((item, index) => {
          return (
            <Card key={item.id || index} title={item.title}>
              <p className="zrb-string-summary">{item.chidlren.label}</p>
              <p className="zrb-string-summary">{item.chidlren.label2}</p>
              <p className="zrb-string-summary">{item.chidlren.label3}</p>
              <p className="zrb-string-summary">{item.chidlren.label4}</p>
              <p className="zrb-string-summary">{item.chidlren.label5}</p>
              <p className="zrb-string-summary">{item.chidlren.label6}</p>
              <p className="zrb-string-summary">{item.chidlren.label7}</p>
              <p className="zrb-string-summary">{item.chidlren.label8}</p>
            </Card>
          );
        })}
      </div>
      <Collapse defaultActiveKey={['key']}>
        {num.map((item, index) => {
          return (
            // 标题
            <Panel header={<h1>{item.text}</h1>} key={item.id || index}>
              {/* 语法 */}
              <h2>{item.grammar}</h2>
              <p>{item.method}</p>
              <p>{item.method2}</p>
              {/* 参数 */}
              <h1>{item.parameter}</h1>
              <p>{item.parameter1}</p>
              <p>{item.parameter2}</p>
              <p>{item.parameter3}</p>
              {/* 返回值 */}
              <h1>{item.retuval}</h1>
              <p>{item.retuval1}</p>
              <p>{item.retuval2}</p>
              <p>{item.retuval3}</p>
              <p>{item.retuval4}</p>
              {/* 抛出异常 */}
              <h1>{item.abnormal}</h1>
              <p>{item.abnormal1}</p>
              <p>{item.abnormal2}</p>
              {/* 描述 */}
              <h2>{item.describe}</h2>
              <p>{item.describes}</p>
              <p>{item.describes2}</p>
              <p>{item.describes3}</p>
              <p>{item.describes4}</p>
              <p>{item.describes5}</p>
              {/* 性能 */}
              <h1>{item.performance}</h1>
              <p>{item.performance1}</p>
              {/* 例子 */}
              <p>{item.example}</p>
              <p>{item.example1}</p>
              <p>{item.example2}</p>
              {/* 相关链接 */}
              <h2>{item.Connect}</h2>
              {<a href={item.link}>{item.relevant}</a>}
            </Panel>
          );
        })}
      </Collapse>
      {/* 对象的方法 */}
      <div>
        {obj2.map((item, index) => {
          return (
            <Card key={item.id || index} title={item.title}>
              <p className="zrb-string-summary">{item.chidlren.label}</p>
              <p className="zrb-string-summary">{item.chidlren.label2}</p>
              <p className="zrb-string-summary">{item.chidlren.label3}</p>
              <p className="zrb-string-summary">{item.chidlren.label4}</p>
            </Card>
          );
        })}
      </div>
      <Collapse defaultActiveKey={['key']}>
        {obj.map((item, index) => {
          return (
            // 标题
            <Panel header={<h1>{item.text}</h1>} key={item.id || index}>
              {/* 语法 */}
              <h2>{item.grammar}</h2>
              <p>{item.method}</p>
              <p>{item.method2}</p>
              {/* 参数 */}
              <h1>{item.parameter}</h1>
              <p>{item.parameter1}</p>
              <p>{item.parameter2}</p>
              <p>{item.parameter3}</p>
              <p>{item.parameter4}</p>
              {/* 返回值 */}
              <h1>{item.retuval}</h1>
              <p>{item.retuval1}</p>
              <p>{item.retuval2}</p>
              <p>{item.retuval3}</p>
              <p>{item.retuval4}</p>
              {/* 抛出异常 */}
              <h1>{item.abnormal}</h1>
              <p>{item.abnormal1}</p>
              <p>{item.abnormal2}</p>
              {/* 描述 */}
              <h2>{item.describe}</h2>
              <p>{item.describes}</p>
              <p>{item.describes2}</p>
              <p>{item.describes3}</p>
              <p>{item.describes4}</p>
              <p>{item.describes5}</p>
              {/* 备注 */}
              <h1>{item.remarks}</h1>
              <p>{item.remarks1}</p>
              {/* 性能 */}
              <h1>{item.performance}</h1>
              <p>{item.performance1}</p>
              {/* 例子 */}
              <p>{item.example}</p>
              <p>{item.example1}</p>
              <p>{item.example2}</p>
              {/* 相关链接 */}
              <h2>{item.Connect}</h2>
              {<a href={item.link}>{item.relevant}</a>}
            </Panel>
          );
        })}
      </Collapse>
    </div>
  );
};
