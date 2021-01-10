import { Button, Spin } from 'antd';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {useAppContext} from '../../components/UserInfo';
import Router from 'next/router';
import jwt_decode from "jwt-decode";

const Start = () => {
  
  const [spin, setSpin] = useState(true);
  const {token, setStatus, setUID} = useAppContext();
  useEffect(()=>{
    console.log("in log - token:" + token);
    if (token != "initial"){
      console.log("--- setting token");
      setStatus("logged");
      console.log("(log)user_id:"+jwt_decode(token)._id);
      setUID(jwt_decode(token)._id);
      console.log("all set");
      Router.push("/restaurants");
    }else{
      setSpin(false);
    }
  },[]);

  return (
    <div className="start">
      <img src="/logofull_white.png"></img>
      <Link href="/start/log">
        <Button>
          LOG IN
        </Button>
      </Link>
      <Link href="/start/sign">
        <Button className="up">
          SIGN UP
        </Button>
      </Link>
      
      {spin && <Spin style={{marginTop:20}}/>}
    </div>
  );
};

export default Start;