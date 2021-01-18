import { Button } from 'antd';
import {} from '@ant-design/icons';
import Orders from './order/index';
import {useAppContext} from '../components/UserInfo';
import { useEffect, useState } from 'react/cjs/react.development';
import Router from 'next/router';
import Navbar from '../components/Navbar';


export default function Thanks() {

    const {setRestaurant, setRestaurantName, setToken, setTable, setStatus, setDishList, setTT, setUOT, setUID} = useAppContext();

  useEffect(()=>{
    localStorage.setItem('_token', JSON.stringify({token:"initial"}));  
    localStorage.setItem('_user', JSON.stringify(
    {
        restaurantName:"RESTAURANT",
        restaurant:"initial",
        table:0,
        status:"initial",
        dishList:[],
        tableTotal:0,
        usersOnTable:1,
        UID:"0"
    }
    ));
    setRestaurant("initial");
    setRestaurantName("RESTAURANT");
    setToken("initial");
    setTable(0);
    setStatus("initial");
    setDishList([]);
    setTT(0);
    setUOT(1);
    setUID("0");
  },[]);

  const go_home = () => {
    
    Router.push("/restaurants");
  }

  return (
    <>
      <p>Thank u</p>
      <Button onClick={go_home}>Home</Button>
    </>
  )
}
