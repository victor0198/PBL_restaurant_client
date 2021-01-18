import {Button} from 'antd'
import {LeftOutlined, CheckOutlined} from '@ant-design/icons'
import Navbar from '../../components/Navbar'
import { useState } from 'react'
import Link from 'next/link'
import {useAppContext} from '../../components/UserInfo'
import Router from 'next/router'

const Payment = () => {
  const axios = require('axios');
  const [paymentType, setPaymentType] = useState("card");
  const {tableTotal, usersOnTable, restaurant, table, dishList, token} = useAppContext();

  const order_it = () => {
    
    const amounts = [];
    const dishListID = dishList.map(obj => (obj._id));
    console.log(dishListID);
    for (let i = 0; i < dishListID.length; i++) {
      amounts.push(1);
    } 
    console.log(amounts);
    axios.post('http://localhost:3000/api/order/push',
    {
      "restaurantId": restaurant,
      "tableRoomId": table,
      "menuElementIds": dishListID,
      "menuElementCount": amounts
    },
    {
        headers: {"auth-token": `${token}`}
    })
    .then(function (response) {
        console.log(response.data);
        // Router.push("/thanks");
    })
    .catch(function (error) {
        console.log(error); 
    })
    .then(function () {
    });
    
  }

  return (
    <>
      <div className="header">
        <Link href="/">
          <Button>
            <LeftOutlined />
          </Button>
        </Link>
        <p style={{width:"100%"}}>Payment methods</p>
      </div>
      <div className="payment">
        <div className="buttons">
          <Button className={paymentType=="card"? "selected":""} onClick={(e)=>{setPaymentType("card")}}>CARD</Button>
          <Button className={paymentType=="cash"? "selected":""} onClick={(e)=>{setPaymentType("cash")}}>CASH</Button>
        </div>


        {paymentType == "card" ?
          <>
            <div className="pay_options">
              <div className="card_o">
                <div>
                  <p className="name">Visa **** **** 5632</p>
                  <p className="amount">{(tableTotal/usersOnTable).toFixed(2)} MDL</p>
                </div>
                <CheckOutlined></CheckOutlined>
                
              </div>
              <div className="card_o">
                <div>
                  <p className="name">Visa **** **** 2918</p>
                  <p className="amount">{(tableTotal/usersOnTable).toFixed(2)} MDL</p>
                </div>
              </div>
            </div>
            <Button>SEND ORDER AND PAY</Button>
          </>
          :
          <>
            <div className="pay_options">
              <Button className="space_btn" onClick={order_it}>SEND ORDER</Button>
            </div>
          </>
        }
        
          
      </div>
      <Navbar/>
    </>
  )
}

export default Payment;