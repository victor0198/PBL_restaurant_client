import {Button} from 'antd'
import {LeftOutlined, CheckOutlined} from '@ant-design/icons'
import Navbar from '../../components/Navbar'
import { useState } from 'react'
import Link from 'next/link'
import {useAppContext} from '../../components/UserInfo'


const Payment = () => {
  const [paymentType, setPaymentType] = useState("card");
  const {tableTotal, usersOnTable} = useAppContext();


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
              <Button className="space_btn">SEND ORDER</Button>
            </div>
          </>
        }
        
          
      </div>
      <Navbar/>
    </>
  )
}

export default Payment;