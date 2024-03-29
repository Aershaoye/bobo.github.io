import React from 'react';
import { List,Card } from 'antd';
const data = [
  'Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象。',
  '所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。',
  'Promise对象有以下两个特点。',
  '（1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。',
  '（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。',
  '注意，为了行文方便，本章后面的resolved统一只指fulfilled状态，不包含rejected状态。',
  '有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易。',
  'Promise也有一些缺点。首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。',
  '如果某些事件不断地反复发生，一般来说，使用 Stream 模式是比部署Promise更好的选择。',
  '基本用法',
  'ES6 规定，Promise对象是一个构造函数，用来生成Promise实例',
  '下面代码创造了一个Promise实例。',
  ''
];

export default () => {
  return (
    <div>
      <List
        size="large"
        header={<h2>Promise 的含义 </h2>}
        bordered
        dataSource={data}
        renderItem={item => <List.Item>{item}</List.Item>}
      >
<Card>
  <p>{`const promise = new Promise(function(resolve, reject) {`}</p>
      <p> // ... some code</p>
      <p>{`if (/* 异步操作成功 */){`}</p>
      <p>resolve(value);</p>
      <p>{`  } else {`}</p>
      <p>reject(error);</p>
      <p> }</p>
      <p>});</p>
    </Card>
      </List>
    </div>
  );
};
