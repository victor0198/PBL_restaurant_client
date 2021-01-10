import {Button, Input, Form, Spin} from 'antd'
import {} from '@ant-design/icons'
import Navbar from '../../../components/Navbar'
import {useEffect, useState} from 'react'
import {useAppContext} from '../../../components/UserInfo'
import Router, {useRouter} from 'next/router'

const RoomEntry = () => {
  const {token, setStatus, setTable, setRestaurant, UID} = useAppContext();
  const router = useRouter();
  const [form] = Form.useForm();
  const axios = require('axios');
  const [spin, setSpin] = useState(true);


  useEffect(()=>{
    console.log(router.query.enter.split(".")[0]);
    console.log(router.query.enter.split(".")[1]);
    console.log(token); 
    console.log(UID);

    axios.post('http://localhost:3000/api/room/check',
    {
      "tableRoomId": router.query.enter.split(".")[1]
    },
    {
      headers: {"auth-token": `${token}`}
    })
    .then(function (response) {
      console.log(response);
      response.data.users.map(val =>{
        console.log("user_id:" + val);
        console.log("UID:" + UID);
        if (val == UID){
          setStatus("booking");
          setRestaurant(router.query.enter.split(".")[0]);
          setTable(router.query.enter.split(".")[1]);
          Router.push("/");
        }else{
          setSpin(false);
        }
      });
    })
    .catch(function (error) { console.log(error); });
  },[]); 

  const enter =(values)=>{
    


    axios.post('http://localhost:3000/api/room/enter',
    {
      "tableRoomId": router.query.enter.split(".")[1],
      "password": `${form.getFieldValue("password")}`
    },
    {
      headers: {"auth-token": `${token}`}
    })
    .then(function (response) {
      setStatus("booking");
      setRestaurant(router.query.enter.split(".")[0]);
      setTable(router.query.enter.split(".")[1]);
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
            onFinish={enter}
          >
            <h1>Type the room PIN</h1>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
            {spin && <Spin />}
          </Form>

      </div>
      
      <Navbar/>
    </>
  )
}

export default RoomEntry;