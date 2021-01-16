import {Button} from 'antd'
import {LeftOutlined, RightOutlined, StarOutlined, EnvironmentOutlined, FilterOutlined} from '@ant-design/icons'
import Navbar from '../../components/Navbar'
import { useState, useEffect } from 'react'
import Router from 'next/router'
import {useAppContext} from '../../components/UserInfo'

const Resaurant = () => {
  const axios = require('axios');
  const [restaurants, setRestaurants] = useState([]);
  const {setRestaurant, restaurant, token, status, setRestaurantName} = useAppContext();

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

  return (
    <>
        <div className="header">
            <div>
    
                <Button>
                    <LeftOutlined />
                </Button>
                <p>Restaurants</p>
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
    </>
  )
}

export default Resaurant;