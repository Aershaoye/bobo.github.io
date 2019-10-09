import React from 'react';
import { List, Card } from 'antd';
const data = [
  'node_moudules 文件夹 -->放着我们项目的依赖',
  'dependencies(依赖) devDependencies(开发依赖)',
  '写代码的时候需要用，打包的时候不需要 npm install 其实就是走的依赖',
  'scripts 脚本 npm run serve',
  'name 项目名称, version:版本号'
];
const data2 = [
  '1./* webpackChunkName: "about" */ 可以给懒加载模块起名',
  '2.import() 表示懒加载，es6的语法',
  '3.路由懒加载的写法(跳转到当前路由才去加载组件)',
  `() => import('./views/Home.vue')`,
  '4.路由重定向 使用redirect'
];
const data3 = [
  '路由激活样式',
  'router-link-exact-active',
  'router-link-active ',
  'router-link exact 属性 确切严格的匹配',
  '<router-link to=' / ' exact>'
];
const data4 = [
  'async await 异步的终极解决方案',
  'async 后面必须跟函数 表示函数路面有异步操作',
  'await 后面通常跟promise(也可以跟普通值) 跟promise 表示promise的执-行结果'
];
const data5 = [
  '-hash 改变的方法',
  'hashchange  函数',
  `histroy  histroy.pushState({},null,'/a')`,
  '改变url不刷新页面 改变的方法'
];
const data6 = [
  'router-link tag 属性 把a标签转化成其他标签',
  '路由跳转的方式 router-link this.$router.push()',
  `参数为params的跳转方式 1)直接拼接路径:to={ path: /detail/${`item.id`}} 只能通过path  `,
  '2)直接写params参数 :to="{name:`detail`,params:{id:item.id}}" 只能通过name',
  '写parmas跳转的时候路由必须接受参数通过:/',
  '用/:id 表示不固定但是必须有 多个/:id/:name',
  'this.$route.params',
  '参数为query的跳转方式',
  ':to="{name:`detail`,query:{id:item.id}}"',
  ':to="{path:`/detail`,query:{id:item.id}}"',
  'query取值 this.$router.query',
  '既可以用name也可以用path',
  '用query的时候路由不在需要任何处理'
];
const data7 = [
  'object.defineProperty:给一个对象添加属性或者修改已有属性',
  '语法：object.defineProperty(obj.attr,descriptor)',
  `obj:要修改或者添加属性的对象`,
  'attr：操作的属性',
  'descriptor：描述符，配置项',
  'value:属性值 默认值为undefined,不能和访问描述器写在一起',
  'writable:属性是否可以修改，默认为false',
  'enumerable:属性是否可以遍历，默认是false',
  'configurable:属性是否可以被删除，默认是false'
];
const data8 = [
  '阻止默认事件 .prevent',
  '阻止冒泡 .stop',
  `按键修饰符 .enter 键码 .数字（13）`,
  '执行一次事件 .once'
];
const data9 = [
  '1.params：',
  '  home传一条数据给childOne',
  '  params在router-link中的写法是一个对象，因为可能传很多参数',
  '分了两种：',
  ' 1.传参不暴露在地址栏中',
  ' 2.传参暴露在地址栏中',
  '2.query',
  '3.router-view'
];
export default () => {
  return (
    <div>
      <h2 style={{ margin: '16px 0' }}>vue</h2>
      <List
        size="large"
        header={<div>package.json的作用</div>}
        bordered
        dataSource={data}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
      <List
        size="large"
        header={<div>路由懒加载</div>}
        bordered
        dataSource={data2}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
      <List
        size="large"
        header={<div>路由激活样式</div>}
        bordered
        dataSource={data3}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
      <List
        size="large"
        header={<div>async await 异步的终极解决方案</div>}
        bordered
        dataSource={data4}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
      <List
        size="large"
        header={<div>单页面应用原理（hash histroy）</div>}
        bordered
        dataSource={data5}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
      <List
        size="large"
        header={<div>路由跳转</div>}
        bordered
        dataSource={data6}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
      <List
        size="large"
        header={<div>双向数据绑定原理</div>}
        bordered
        dataSource={data7}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
      <List
        size="large"
        header={<div>事件修饰符：</div>}
        bordered
        dataSource={data8}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
      <List
        size="large"
        header={<div>父子路由传参有三种方法</div>}
        bordered
        dataSource={data9}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};
