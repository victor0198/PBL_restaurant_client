import { Form, Input, Button } from 'antd';
import {useAppContext} from '../../components/UserInfo';
import Router from 'next/router';
import Link from 'next/link';
import {LeftOutlined} from '@ant-design/icons';
import jwt_decode from "jwt-decode";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


const Log = () => {
  const {setToken, setStatus, setUID} = useAppContext();
  const axios = require('axios');
  const [form] = Form.useForm();

  const onFinish = values => {
    axios.post('http://localhost:3000/login',
    {
      "email": form.getFieldValue("email"),
      "password": form.getFieldValue("password")
    })
    .then(function (response) {
      // handle success
      setToken(response.data);
      setStatus("logged");
      console.log("(log)user_id:"+jwt_decode(response.data)._id);
      setUID(jwt_decode(response.data)._id);
      console.log("all set");
      Router.push('/scan');
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

export default Log;