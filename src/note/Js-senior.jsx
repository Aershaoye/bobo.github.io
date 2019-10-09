import React from 'react';
import { Card, Col, Row } from 'antd';

const dom = [
  {
    id:1,
    text:'判断数据类型的4种方式',
label:'Object.prototype.toString.call ',
label1:'instanceof',
label2:' typeof',
label3:'constructor',
  },
  {
    id:2,
    text:'节点的属性',
label:'1.document.createElement(); 元素',
label1:'2.document.createTextNode(); 文本',
label3:'3.document.createComment();  注释',
label2:' 4.document.createDocumentFragment(); 文档碎片',
  },
  {
    id:3,
    text:'插入元素方法',
    label:'1.appendChild 就像是push方法 任何元素都可以调用 ',
    label1:'2.insertBefore(a,B)  在B之前插入a元素 (父级调用)',
    label2:'3.parent.removerChild();  (父级调用)',
    label3:'4.removerChild() 删除自身',
  },
  {
    id:4,
    text:'设置定时器//识别时间只识别一次',
label:'setInterval   window (循环定时器) ',
label1:'  setTimeout    window(定时器)它只执行一次',
  },
  {
    id:5,
    text:'清除定时器',
label:'clearInerval()',
label1:'clearTimeout()',
  }
]
export default () => {
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Row gutter={16}>
     
     {
       dom.map((item,index)=>{
         return (
            <Col span={8}>
        <Card title={item.text} bordered={false}>
        <p>{item.label}</p>
        <p>{item.label1}</p>
        <p>{item.label2}</p>
        <p>{item.label3}</p>
        </Card>
      </Col>
         )
       })
     }
    </Row>
  </div>
  );
};
