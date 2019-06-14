import React from 'react'
import './footer.less'
import { Row, Col } from 'antd';
export default class Footer extends React.Component{
       render(){
           return  <div>
           <Row>
             <Col span={24} push={6}>
              footer
             </Col>
           </Row>
         </div>
       }
}