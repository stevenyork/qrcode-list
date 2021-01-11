import React, { useState } from 'react';
import { Input, Form, Button, Row, Col } from 'antd';
import QRCode from 'qrcode.react';
import "./App.css";
import 'antd/dist/antd.css';

const { TextArea } = Input;

const filterNull = (items) => items.filter((item) => item && item.length > 0);

function App() {
  const [content, setContent] = useState([]);

  // const formLayout = {
  //   wrapperCol: { span: 16, offset: 2 },
  // };

  const onFinish = (values) => {
    const data = (values && values.content && values.content.split("\n")) || [];
    if (data && data.length > 0) setContent(filterNull(data));
  };

  const qrcodeList = content.map((text, index) => (
    <Col key={index} xs={12} sm={8} md={6} lg={4}>
      <QRCode value={text} />
    </Col>
  ));

  return (
    <div className="app-layout">
      <Form name="text" onFinish={onFinish}>
        <Form.Item name="content">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            生成
        </Button>
        </Form.Item>
      </Form>
      <Row gutter={[16, 16]} justify="left">
        {qrcodeList}
      </Row>
    </div>
  );
}

export default App;
