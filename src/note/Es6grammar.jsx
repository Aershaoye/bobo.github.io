import React from 'react';
import { Collapse, Card, List } from 'antd';
const { Panel } = Collapse;

const template = [
  {
    id: 1,
    title:
      '模板字面量 是允许嵌入表达式的字符串字面量。你可以使用多行字符串和字符串插值功能。它们在ES2015规范的先前版本中被称为“模板字符串”。',
    describe: '描述',
    describe1:
      '模板字符串使用反引号 (` `) 来代替普通字符串中的用双引号和单引号。模板字符串可以包含特定语法（${expression}）的占位符。占位符中的表达式和周围的文本会一起传递给一个默认函数，该函数负责将所有的部分连接起来，如果一个模板字符串由表达式开头，则该字符串被称为带标签的模板字符串，该表达式通常是一个函数，它会在模板字符串处理后被调用，在输出最终结果前，你都可以通过该函数来对模板字符串进行操作处理。在模版字符串内使用反引号（`）时，需要在它前面加转义符（）。',
    rows: '导读',
    rows1:
      '传统的字符串模板 ：在传统的Javascript中，如果我们对DOM进行操作，字符串模板通常采用加号( + )进行字符串拼接。',
    rows2:
      'ES6模板字符串 ：以反引号( ` )表示普通的字符串，也可以表示多行字符串，同时还可以插入变量（代替传统的加号拼接）。',
    example: '例子',
    example1: '传统字符串拼接：',
    example1: `
    <script>
    let name = 'wrf';
    let age = 18;
    let str1 = '名字:'+name + ' ,今年'+age+'岁';
    console.log(str1);
    // let str2 = '名字:xxx, 今年:xx岁';
    // console.log(str2);
</script>
    `
  }
];
export default () => {
  return (
    <div>
      <Collapse defaultActiveKey={['key']}>
        {template.map((item, index) => {
          return (
            <Panel header="模板字符串" key={item.id || index}>
              <p>{item.title}</p>
              {/* 描述 */}
              <h1>{item.describe}</h1>
              <p>{item.describe1}</p>
              {/* 导读 */}
              <h1>{item.rows}</h1>
              <p>{item.rows1}</p>
              <p>{item.rows2}</p>
              {/* 例子 */}
              <h1>{item.example}</h1>
              <p>{item.example1}</p>
              {/* 图片 */}
              <img
                src="https://upload-images.jianshu.io/upload_images/15204173-83d57a9190ce0a46.png?imageMogr2/auto-orient/strip|imageView2/2/w/730/format/webp"
                alt=""
              />
            </Panel>
          );
        })}
      </Collapse>

      {/* 数组的解构赋值 */}
      <h2 style={{ margin: '16px 0' }}>数组的解构赋值</h2>
      <List>
        <p>基本用法</p>
        <p>
          ES6
          允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。
        </p>
        <p>'以前，为变量赋值，只能直接指定值。</p>
        <Card>
          <p>let a = 1;</p>
          <p>let b = 2;</p>
          <p>let c = 3;</p>
        </Card>

        <p>ES6 允许写成下面这样。</p>
        <Card>
          <p>let [a, b, c] = [1, 2, 3];</p>
        </Card>
        <h2>默认值 </h2>
        <p>解构赋值允许指定默认值。</p>
        <Card>
          <p>let [foo = true] = [];</p>
          <p>foo // true</p>
          <p>let [x, y = 'b'] = ['a']; // x='a', y='b'</p>
          <p>let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'</p>
        </Card>
        <p>
          注意，ES6
          内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。
        </p>
        <Card>
          <p>let [x = 1] = [undefined];</p>
          <p>x // 1</p>
          <p>let [x = 1] = [null];</p>
          <p>x // null</p>
        </Card>
        <p>
          上面代码中，如果一个数组成员是null，默认值就不会生效，因为null不严格等于undefined。
        </p>
        <p>
          如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
        </p>
        <Card>
          <p>
            {`function f() {
              console.log('aaa');
            }`}
          </p>
          <p>let [x = f()] = [1];</p>
        </Card>
        <p>上面代码中，因为x能取到值，所以函数f根本不会执行。</p>
      </List>
      {/* 对象的解构赋值 */}
      <h2 style={{ margin: '16px 0' }}>对象的解构赋值</h2>
      <List>
        <p>解构不仅可以用于数组，还可以用于对象。</p>
        <Card>
          <p>{`let { foo, bar } = { foo: 'aaa', bar: 'bbb' };`}</p>
          <p>foo // "aaa"</p>
          <p>bar // "bbb"</p>
        </Card>
        <p>
          对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
        </p>
        <Card>
          <p>{`let { bar, foo } = { foo: 'aaa', bar: 'bbb' };`}</p>
          <p>foo // "aaa"</p>
          <p>bar // "bbb"</p>
          <p>{`let { baz } = { foo: 'aaa', bar: 'bbb' };`}</p>
          <p>baz // undefined</p>
        </Card>
        <h2>默认值 </h2>
        <p>对象的解构也可以指定默认值</p>
        <Card>
          <p>{`var {(x = 3)} = {};`}</p>
          <p>x // 3</p>
          <p>{`var {x, y = 5} = {x: 1};`}</p>
          <p>x // 1</p>
          <p>y // 5</p>
          <p>{`var {x: y = 3} = {};`}</p>
          <p>y // 3</p>
        </Card>
        <p>默认值生效的条件是，对象的属性值严格等于undefined。</p>
        <Card>
          <p>{`var {x = 3} = {x: undefined};`}</p>
          <p>x // 3</p>
          <p>{`var {x = 3} = {x: null};`}</p>
          <p>x // null</p>
        </Card>
        <p>
          上面代码中，属性x等于null，因为null与undefined不严格相等，所以是个有效的赋值，导致默认值3不会生效。
        </p>
        <h2>注意点</h2>
        <p>（1）如果要将一个已经声明的变量用于解构赋值，必须非常小心。</p>
        <Card>
          <p>// 错误的写法</p>
          <p>{`{x} = {x: 1};`}</p>
          <p>let x;</p>
          <p>// SyntaxError: syntax error</p>
        </Card>
        <p>
          {`上面代码的写法会报错，因为 JavaScript 引擎会将{x}
          理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免
          JavaScript 将其解释为代码块，才能解决这个问题。`}
        </p>
        <Card>
          <p>// 正确的写法</p>
          <p>let x;</p>
          <p>{`({x} = {x: 1});`}</p>
        </Card>
        <p>
          上面代码将整个解构赋值语句，放在一个圆括号里面，就可以正确执行。关于圆括号与解构赋值的关系，参见下文。
        </p>
        <h3>
          （2）解构赋值允许等号左边的模式之中，不放置任何变量名。因此，可以写出非常古怪的赋值表达式。
        </h3>
        <Card>
          <p>({} = [true, false]);</p>
          <p>({} = 'abc');</p>
          <p>({} = []);</p>
        </Card>
        <p>上面的表达式虽然毫无意义，但是语法是合法的，可以执行。</p>
      </List>
      {/* 字符串的解构赋值  */}
      <h2 style={{ margin: '16px 0' }}>字符串的解构赋值 </h2>
      <List>
        <p>
          字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。
        </p>
        <Card>
          <p>const [a, b, c, d, e] = 'hello';</p>
          <p>a // "h"</p>
          <p>b // "e"</p>
          <p>c // "l"</p>
          <p>d // "l"</p>
          <p>e // "o"</p>
        </Card>
        <p>类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。</p>
        <Card>
          <p>{`let {length : len} = 'hello';`}</p>
          <p>len // 5</p>
        </Card>
      </List>
      {/* 数值和布尔值的解构赋值  */}
      <h2 style={{ margin: '16px 0' }}>数值和布尔值的解构赋值 </h2>
      <List>
        <p>解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。</p>
        <Card>
          <p>{`let {toString: s} = 123;`}</p>
          <p>s === Number.prototype.toString // true</p>
          <p>{`let {toString: s} = true;`}</p>
          <p>s === Boolean.prototype.toString // true</p>
        </Card>
        <p>
          上面代码中，数值和布尔值的包装对象都有toString属性，因此变量s都能取到值。
        </p>
        <p>
          解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
        </p>
        <Card>
          <p>{`let { prop: x } = undefined; // TypeError`}</p>
          <p>{`let { prop: y } = null; // TypeError`}</p>
        </Card>
      </List>
      {/* 函数参数的解构赋值  */}
      <h2 style={{ margin: '16px 0' }}>函数参数的解构赋值 </h2>
      <List>
        <p>函数的参数也可以使用解构赋值。</p>
        <Card>
          <p>{`function add([x, y]){
  return x + y;
}`}</p>
          <p>add([1, 2]); // 3</p>
        </Card>
        <p>
          上面代码中，函数add的参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量x和y。对于函数内部的代码来说，它们能感受到的参数就是x和y。
        </p>
        <p>下面是另一个例子。</p>
        <Card>
          <p>{`[[1, 2], [3, 4]].map(([a, b]) => a + b);`}</p>
          <p>{`// [ 3, 7 ]`}</p>
        </Card>
        <p>函数参数的解构也可以使用默认值。</p>
        <Card>
          <p>{`function move({x = 0, y = 0} = {}) {return [x, y];}`}</p>
          <p>{`move({x: 3, y: 8}); // [3, 8]`}</p>
          <p>{`move({x: 3}); // [3, 0]`}</p>
          <p>move({}); // [0, 0]</p>
          <p>move(); // [0, 0]</p>
          <p></p>
          <p></p>
        </Card>
        <p>
          上面代码中，函数move的参数是一个对象，通过对这个对象进行解构，得到变量x和y的值。如果解构失败，x和y等于默认值。
        </p>
        <h3>注意，下面的写法会得到不一样的结果。</h3>
        <Card>
          <p>{`function move({x, y} = { x: 0, y: 0 }) {
  return [x, y];}`}</p>
          <p>{`move({x: 3, y: 8}); // [3, 8]`}</p>
          <p>{`move({x: 3}); // [3, undefined]`}</p>
          <p>move({}); // [undefined, undefined]</p>
          <p>move(); // [0, 0]</p>
        </Card>
        <p>
          上面代码是为函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果。
        </p>
        <h3>undefined就会触发函数参数的默认值。</h3>
        <Card>
          <p>[1, undefined, 3].map((x = 'yes') => x);</p>
          <p>// [ 1, 'yes', 3 ]</p>
        </Card>
      </List>
      <List>
        <h2 style={{ margin: '16px 0' }}>Promise 的含义</h2>
      </List>
    </div>
  );
};
