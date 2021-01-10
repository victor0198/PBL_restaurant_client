import {Button, Input, Form} from 'antd'
import {} from '@ant-design/icons'
import Navbar from '../../../components/Navbar'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import {useAppContext} from '../../../components/UserInfo'
import Router from 'next/router'

const RoomCreator = () => {
  const axios = require('axios');
  const router = useRouter();
  const {token, setStatus, setTable, setRestaurant} = useAppContext();
  const [form] = Form.useForm();

  useEffect(()=>{
    console.log(router.query.book.split(".")[0]);
    console.log(router.query.book.split(".")[1]);
    console.log(token);    
  },[]);

  const bookIt = (values) =>{
    console.log(form.getFieldValue("passcode"));
    axios.post('http://localhost:3000/api/room/book',
    {
      "tableRoomId": router.query.book.split(".")[1],
      "password": `${form.getFieldValue("passcode")}`
    },
    {
      headers: {"auth-token": `${token}`}
    })
    .then(function (response) {
    
      setStatus("booking");
      setRestaurant(router.query.book.split(".")[0]);
      setTable(router.query.book.split(".")[1]);
      Router.push('/');
    })
    .catch(function (error) {
        console.log(error); 
    })
    .then(function () {
    });
  }

  return (
    <>
      <div className="book">
        <Form
          form={form}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={bookIt}
        >
          <h1>Set a room passcode</h1>
          <Form.Item
            label="Passcode"
            name="passcode"
            rules={[{ required: true, message: 'Please create a passcode!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
          
      </div>
      <Navbar/>
    </>
  )
}

export default RoomCreator;