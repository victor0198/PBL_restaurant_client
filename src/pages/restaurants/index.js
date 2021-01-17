import {Button, Tooltip, Modal} from 'antd'
import {LeftOutlined, RightOutlined, StarOutlined, EnvironmentOutlined, FilterOutlined, GiftOutlined} from '@ant-design/icons'
import Navbar from '../../components/Navbar'
import { useState, useEffect } from 'react'
import Router from 'next/router'
import {useAppContext} from '../../components/UserInfo'

const Restaurant = () => {
  const axios = require('axios');
  const [restaurants, setRestaurants] = useState([]);
  const {setRestaurant, restaurant, token, status, setRestaurantName} = useAppContext();
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(()=>{
    console.log("res:" + restaurant);
    console.log("sta:" + status);
    if(restaurant!="initial" && status=="booking"){
        Router.push("/restaurants/" + restaurant);
    }
    axios.get('http://localhost:3000/api/restaurant/list')
    .then(function (response) {
    setRestaurants(response.data.restaurants);
    })
    .catch(function (error) {
    console.log(error); 
    })
    .then(function () {
    });
  },[]);

  const redirectTo = (id, name)=>{
      console.log(id);
      setRestaurant(id);
      setRestaurantName(name);
      Router.push("/restaurants/" + id);
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
        <div className="header">
          <div className="shop" style={{width:"100vw"}}>
            <p style={{marginLeft:"20px"}}>RESTAURANTS</p>
            <Tooltip placement="bottomRight" title={<span>Special offers</span>}>
                <Button 
                    className="booking_btn" 
                    onClick={e=>{setIsModalVisible(true)}}
                    style={{display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0px 1px 6px -2px #999", color:"#ea9a02"}}>
                    <GiftOutlined style={{fontSize:14}}/>
                </Button>
            </Tooltip>
          </div>
        </div>
        <div className="options">
            <div className="filter">
                <Button>
                    <FilterOutlined />
                    <p>Filter</p>
                </Button>
            </div>
            <div className="location">
                <Button>
                    <EnvironmentOutlined />
                </Button>
            </div>
        </div>
        <div className="restaurants">

            {restaurants && (restaurants.length > 0) && 
            restaurants.map((restaurant) => (
                restaurant.title!="Res1" && restaurant.title!="Res2" &&
                <Button className="item" key={restaurant._id} onClick={e=>{redirectTo(restaurant._id, restaurant.title)}}>
                    <div className="item_content">
                        <div className="img_div">
                            <img src="/oliva_logo.png" width={50} height={50}/>
                        </div>
                        <div className="item_description">
                            <p className="name">{restaurant.title}</p>
                            <p className="address">bd. Decebal, 139</p>
                            <div className="rating">
                                <StarOutlined className="marked"/>
                                <p>4.8 (5 votes)</p>
                            </div>
                        </div>
                    </div>
                    <span>
                        <RightOutlined/>
                    </span>
                </Button>
            ))}
        </div>
        
        <Navbar/>
        <Modal title="Special offers" visible={isModalVisible} onCancel={handleCancel} footer={null}>
            <div className="special">
                <img src="/oliva_logo.png" width={40} height={40}/>
                <div>
                    <p className="time">11:30-14:30</p>
                    <p className="description">10% discount for busines lunch</p>
                </div>
            </div>
            <div className="special">
                <img src="/oliva_logo.png" width={40} height={40}/>
                <div>
                    <p className="time">9:00-11:30</p>
                    <p className="description">Get 3 pizza with 30% discount</p>
                </div>
            </div>
        </Modal>
    </>
  )
}

export default Restaurant;