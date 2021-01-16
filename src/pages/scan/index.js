import {Button, message, Space} from 'antd'
import {} from '@ant-design/icons'
import Navbar from '../../components/Navbar'
import React, {Component} from "react";
import QrReader from 'react-qr-scanner'
import Router from 'next/router'
import {useEffect} from 'react'
import {useAppContext} from '../../components/UserInfo';

class QRScanner extends Component{
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'Initial',
    }
    this.scanned = false;
 
    this.handleScan = this.handleScan.bind(this);
    
  }
  handleScan(data){
    this.setState({
      result: data,
    })
  }
  handleError(err){
    console.error(err)
  }

  warning(){
    message.warning('This is a warning message');
  };

  result(txt){
    try {
      console.log(txt);
      let obj = JSON.parse(txt);
      console.log(obj);
      if(txt==null)
        return "Scan the QR code";


      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQ4ZjkzYzdiNGI0ODM1ODQwYmVkNWMiLCJpYXQiOjE2MDgwNjgxNTZ9.v7gTuAwCgSIN-bcsMQrLvPOeXpYXTAsC7vRUmzJV9PM";
      const axios = require('axios');
      const path = obj.r + "." + obj.t;
      // const path = "5fcebe22a5e758375843c76c" + "." + "5fd92ac77b4b4835840bed5e";
      axios.post('http://localhost:3000/api/room/check',
        {
          "tableRoomId": obj.t
        },
        {
          headers: {"auth-token": `${token}`}
        })
        .then(function (response) {
          console.log("ok");
          console.log(response);
          if(!response.data.booked){
            Router.push('/scan/create/'+path);
          }else{
            Router.push('/scan/enter/'+path);
          }
        })
        .catch(function (error) { console.log(error); });




      return "Please wait..";
    } catch (error) {
      if(txt != "Initial"){
        message.warning("Invaliq qr code");
        return "Scan the QR code";
      }
      return "Allow camera input";
    }
  }
  
  render(){
    const previewStyle = {
      height: 200,
      width: 350,
    }
    return (
      <>
        <div className="scanner">
          <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          className="cam_view"
          />
          <p>{this.result(this.state.result)}
          </p>
        </div>
        
        <Navbar/>
      </>
    )
  }
}

export default QRScanner;