import {Button, message} from 'antd'
import {UserOutlined, ScanOutlined, ShopOutlined} from '@ant-design/icons'
import Link from 'next/link'
import {useAppContext} from './UserInfo'
import { useEffect, useState } from 'react/cjs/react.development'
import Router from 'next/router'


const Navbar = () => {
  const {restaurant, token} = useAppContext();

  const checkToken = () => {
    console.log("checkToken:" + token);
    if (token == "initial"){
      message.warning("To book a table, log in first!");
    }else{
      Router.push("/scan");
    }
    
  }

  return (
    <div className="navbar">
        <div className="icon_div">
          <Link href="/profile">
            <UserOutlined className="icon"/>
          </Link>
        </div>
        <div className="icon_div">
          <ScanOutlined className="icon"  onClick={checkToken}/>
        </div>
        <div className="icon_div">
          <Link href="/restaurants">
            <ShopOutlined className="icon"/>
          </Link>
        </div>
    </div>
  )
}

export default Navbar;