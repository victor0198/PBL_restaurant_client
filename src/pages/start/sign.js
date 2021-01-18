import { Form, Input, Button } from 'antd';
import {useAppContext} from '../../components/UserInfo';
import Router from 'next/router';
import Link from 'next/link';
import {LeftOutlined} from '@ant-design/icons';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Sign = () => {
  const {setToken, setStatus} = useAppContext();
  const axios = require('axios');
  const [form] = Form.useForm();

  const onFinish = values => {
    axios.post('http://localhost:3000/register',
    {
      "name": form.getFieldValue("name"),
      "email": form.getFieldValue("email"),
      "password": form.getFieldValue("password")
    })
    .then(function (response) {
      // handle success
      console.log(response);
      Router.push('/start/log');
    })
    .catch(function (error) {
      // handle error
      console.log(error); 
    })
    .then(function () {
    });
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="log">
      <Link href={"/start"}>
        <Button className="back_btn">
          <LeftOutlined />
        </Button>
      </Link>
      
      <Form
      {...layout}
      form={form}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      
      <div className="inp">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input type="name" />
        </Form.Item>
      </div>

      <div className="inp">
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input type="email" />
        </Form.Item>
      </div>

      
      <div className="inp">
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
      </div>

      <Form.Item {...tailLayout} className="sub">
        <Button type="primary" htmlType="submit">
          SUBMIT
        </Button>
      </Form.Item>
    </Form>
    </div>
    
  );
};

export default Sign;