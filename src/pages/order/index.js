import {Button, Avatar, Popconfirm, message} from 'antd';
import {ShoppingFilled, UpOutlined, DownOutlined, RightOutlined, CloseCircleOutlined, QuestionCircleOutlined, CloseOutlined} from '@ant-design/icons';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {useAppContext} from '../../components/UserInfo';
import Navbar from '../../components/Navbar'
import Router from 'next/router'

const Room = () => {
  const [showFriendsOrders, setShowFO] = useState(true);
  const {token, restaurant, dishList, tableTotal, setTT, setDishList, usersOnTable, 
    setUOT, table, setStatus, setRestaurant, UID, setTable} = useAppContext();
  const [edit, setEdit] = useState(false);
  const axios = require('axios');

  useEffect(()=>{
    const user_cookie = localStorage.getItem('_user');
    console.log(user_cookie);
  },[]);

  const countUsers = () =>{
    axios.post('http://localhost:3000/api/room/check',
    {
      "tableRoomId": table
    },
    {
      headers: {"auth-token": `${token}`}
    })
    .then(function (response) {
      console.log(response.data.users);
      setUOT(response.data.users.length);
    })
    .catch(function (error) { console.log(error); });
  }

  useEffect(()=>{
    countUsers();
    let t = 0;
    dishList.map((x)=>{
      t+=x.price;
    });
    setTT(t);
    setEdit(false);
  },[dishList]);

  const confirm = (e, delete_idx) => {
    let dl = [];
    dishList.map((obj, idx) =>{if(idx != delete_idx)dl.push(obj);});
    setDishList(dl);
    message.success('Dish deleted');
  }

  const confirmDeleteOrder = () =>{
    axios.post('http://localhost:3000/api/room/leave',
    {
      "tableRoomId": table,
      "userId": UID
    },
    {
      headers: {"auth-token": `${token}`}
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) { console.log(error); });
    setTable(0);
    setStatus("logged");
    setRestaurant("initial");
    Router.push("/restaurants");
  }

  return (
    <div className="room">
        <div className="header">
          <div>
            <ShoppingFilled style={{fontSize:25, marginLeft:20, color:"#ff9153"}}/>
            <p>Orders</p>
          </div>
          
          <div className="cancel_order">
            <Popconfirm
              placement="leftTop"
              title="Cancel the order?"
              icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
              onConfirm={confirmDeleteOrder}
              okText="Yes"
              cancelText="No"
            >
              <Button>
                <CloseOutlined />
              </Button>
            </Popconfirm>
          </div>
          

        </div>
        <div className="content">
            <div className="my_order">
                <div className="dishes">
                  {
                    dishList.map((x, idx)=>{
                      return(
                      <div key={idx} className="dish">
                        <p className="dish_name">{x.title}</p>
                        <p className="dish_price">
                          {x.price} MDL
                          {
                            edit &&
                            <Popconfirm
                              placement="bottomRight"
                              title="Delete this dish?"
                              onConfirm={e=>confirm(e,idx)}
                              okText="Yes"
                              cancelText="No"
                            >
                              <CloseCircleOutlined className="delete_dish"/>
                            </Popconfirm>
                           }
                        </p>
                      </div>)
                    })
                  }
                  
                </div>
                {
                  dishList.length > 0 && <p className="yt">TOTAL: {tableTotal.toFixed(2)} MDL</p>
                }
                
                <div className="btns">
                  {
                    dishList.length > 0 && 
                    <Button className="b1" onClick={e=>{setEdit(!edit);}}>EDIT ORDER</Button>
                  }
                  <Link href={"/restaurants/"+restaurant}>
                    <Button className="b2">ADD DISH</Button>
                  </Link>
                </div>
            </div>

              {showFriendsOrders?
                <div className="fo">
                  <p>Show friends' orders</p>
                  <Button className="sm_btn" onClick={(e) => {setShowFO(false)}}  style={{marginBottom:50}}>
                    <DownOutlined className="separator"/>
                  </Button>
                </div>
                :
                <div className="fo">
                  <Button onClick={(e) => {setShowFO(true)}}>
                    <UpOutlined className="separator"/>
                  </Button>
                  <div className="order">
                    <div className="user">
                      <Avatar  src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fginva.com%2Fwp-content%2Fuploads%2F2012%2F03%2Ffemale-portrait-photography-57.jpg&f=1&nofb=1" />
                      <p className="nickname">Nicoletta</p>
                    </div>
                      <div className="dishes">
                        <div className="dish">
                          <p className="dish_name">item 1</p>
                          <p className="dish_price">__MDL</p>
                        </div>
                        <div className="dish">
                          <p className="dish_name">item 1</p>
                          <p className="dish_price">__MDL</p>
                        </div>
                      </div>
                  </div>
                  <div className="order">
                    <div className="user">
                      <Avatar  src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fginva.com%2Fwp-content%2Fuploads%2F2012%2F03%2Ffemale-portrait-photography-57.jpg&f=1&nofb=1" />
                      <p className="nickname">Nicoletta</p>
                    </div>
                      <div className="dishes">
                        <div className="dish">
                          <p className="dish_name">item 1</p>
                          <p className="dish_price">__MDL</p>
                        </div>
                        <div className="dish">
                          <p className="dish_name">item 1</p>
                          <p className="dish_price">__MDL</p>
                        </div>
                      </div>
                  </div>
                </div>
              }         
          <div className="totals">
            <p className="table">TABLE TOTAL: {tableTotal.toFixed(2)} MDL</p>
            <p className="your">YOUR BILL: {(tableTotal/usersOnTable).toFixed(2)} MDL</p>
            <Link href="/payment">
              <Button className="pay_btn">PAYMENT
                <RightOutlined></RightOutlined>
              </Button>
            </Link>
          </div>
            
        </div>
        <Navbar/>
    </div>
  )
}

export default Room;