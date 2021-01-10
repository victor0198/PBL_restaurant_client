import {} from 'antd';
import {} from '@ant-design/icons';
import Orders from './order/index';
import {useAppContext} from '../components/UserInfo';
import { useEffect, useState } from 'react/cjs/react.development';
import Router from 'next/router';
import Navbar from '../components/Navbar';


export default function Home() {
  
  const { status, restaurant, loaded } = useAppContext();

  useEffect(()=>{
    if (loaded == true){
      console.log("status:" + status);
      console.log("restaurant:" + restaurant);
      if(status == "initial"){
        Router.push("/start");
      }
      else if (status!="booking"){
        if(restaurant=="initial"){
          console.log("to rests");
          Router.push("/restaurants");
        }
        else{
          console.log("to rest");
          Router.push("/restaurants/" + restaurant);
        }
      }
    }
      
  },[loaded]);

  useEffect(()=>{
    console.log("HERE:" + status);
  },[status]);

  return (
    <>
      {status=="booking"?
      <Orders/>
      :
      <div className="start">
        <img src="/logofull_white.png"></img>
      </div>
      }
      <Navbar/>
    </>
  )
}
