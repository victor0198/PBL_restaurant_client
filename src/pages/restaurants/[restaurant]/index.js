import {Button} from 'antd'
import {LeftOutlined} from '@ant-design/icons'
import Navbar from '../../../components/Navbar'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {useAppContext} from '../../../components/UserInfo'
import Router from 'next/router'

const Menu = () => {
  const axios = require('axios');
  const [categoriesMap, setCategoriesMap] = useState(new Map());
  const [dishes, setDishes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState("Loading..");
  const {status,UID,restaurant,restaurantName, setRestaurantName} = useAppContext();

  useEffect(()=>{
    console.log("UID:" + UID);
    console.log("status:" + status);
    console.log("restaurant" + restaurant);
    if(restaurant=="initial"){
      Router.push('/restaurants');
    }
    
    axios.post('http://localhost:3000/api/menu',
    {
      "restaurantId": restaurant
    })
    .then(function (response) {
      setDishes(response.data.restaurant.menu);
      setRestaurantName(response.data.restaurant.title);
      console.log(response);
      if(response.data.restaurant.menu.length == 0){
        setMessage("There is no dish in the menu");
      }
    })
    .catch(function (error) {
      console.log(error); 
    })
    .then(function () {
    });
  },[]);

  useEffect(()=>{
    let catMap = new Map();
    for(let i=0; i<dishes.length; i++){
      if(catMap.has(dishes[i].description))
      catMap.set(dishes[i].description, catMap.get(dishes[i].description)+1 );
      else
      catMap.set(dishes[i].description, 1);
    }
    let cat = Array();
    catMap.forEach((values, keys) => {
      cat.push(keys);
    });
    setCategories(cat);
    setCategoriesMap(catMap);
  }, [dishes]);

  return (
    <>
      <div className="menu">
        <div className="header">
          <Link href={status == "booking"?"/":"/restaurants/"}>
            <Button>
              <LeftOutlined />
            </Button>
          </Link>
          <div className="shop">
            <p>{restaurantName}'s menu</p>
          </div>
        </div>
        <div className="c_list">
          {categoriesMap.size == 0 && <p>{message}</p>}
          {categoriesMap.size > 0 &&
            categories.map(x=> {
            return (
                <Link key={x} href={"/restaurants/" + restaurant + "/" + x}>
                  <Button className="m_c">
                      <div className="overlay">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.-8_NHkki_nkuTJ5AQg9-2QHaDF%26pid%3DApi&f=1"></img>
                      </div>
                      <div className="info">
                        <p className="name">{x}</p>
                        <p className="nr_items">{categoriesMap.get(x)} items</p>
                      </div>
                  </Button>
                </Link>);
            })
          }

        </div>
        
      </div>
      <Navbar/>
    </>
  )
}

export default Menu;