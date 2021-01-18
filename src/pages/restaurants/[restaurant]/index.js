import {Button, Dropdown, Menu, Modal, DatePicker, message} from 'antd'
import {LeftOutlined, AlignRightOutlined, BellOutlined, CalendarOutlined, StarOutlined} from '@ant-design/icons'
import Navbar from '../../../components/Navbar'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {useAppContext} from '../../../components/UserInfo'
import Router from 'next/router'

const RMenu = () => {
  const axios = require('axios');
  const [categoriesMap, setCategoriesMap] = useState(new Map());
  const [dishes, setDishes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [messageState, setMessage] = useState("Loading..");
  const {status,UID,restaurant,restaurantName, setRestaurantName, loaded} = useAppContext();
  const [follow, setFollow] = useState(true);
  const [choosedTable, setChoosedTable] = useState(0);
  const [bookingDate, setBokingDate] = useState(null);

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

  function handleMenuClick(e) {
    console.log('click', e.key);
    if(e.key == 1){
      if(loaded){
        loadTables();
        setIsModalVisible(true);
      }
    }

    if(e.key == 2){
      setFollow(!follow);
    }
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <CalendarOutlined />
        Book table
      </Menu.Item>
      <Menu.Item key="2">
        {
          follow?
          <>
            <BellOutlined style={{color:"red"}}/>Unfollow
          </>:
          <>
            <BellOutlined />Follow
          </>
        }
        
      </Menu.Item>
      <Menu.Item>
        <StarOutlined style={{color:"#f2b90b"}} />Rate
      </Menu.Item>
    </Menu>
  );

  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOk = () => {
    setIsModalVisible(false);
    setBokingDate(null);
    message.success('Booking request sent');
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    setBokingDate(null);
  };

  function onChange(date, dateString) {
    console.log(date, dateString);
    setBokingDate(dateString);
  }

  const [room, setRoom] = useState([]);
  const loadTables = () =>{
    axios.post('http://localhost:3000/api/menu',
    {
      "restaurantId": restaurant
    })
    .then(function (response) {
        setRoom(response.data.restaurant.room);
        console.log(response.data.restaurant.room);
    })
    .catch(function (error) {
        console.log(error); 
    })
    .then(function () {
    });
  }

  function chooseTable(e) {
    console.log('click', e.key);
    setChoosedTable(e.key);
  }

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
            <p>{restaurantName}</p>
            <Dropdown overlay={menu}>
              <Button className="booking_btn">
               <AlignRightOutlined />
              </Button>
            </Dropdown>
          </div>
        </div>
        <div className="c_list">

          <Modal title="Booking" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <div className="pick_date">
              <p>Date</p>
              <DatePicker id="datepicker" onChange={onChange}/>
            </div>
            <div className="pick_table">
              <Menu onClick={chooseTable}>
                {
                  room.length > 0 &&
                  room.map((x, idx)=> {
                    if (!x.booked)
                      return (
                      <Menu.Item
                        key={idx+1} 
                      >
                        <div className={`item${choosedTable == (idx+1)? " selected_item" : ""}`}>
                          <div className="table_img">
                              <img src="/tablef.jpg" width={50} height={50}/>
                          </div>
                          <div className="item_description">
                              <p className="name">TABLE {idx+1}</p>
                          </div>
                        </div>
                      </Menu.Item> 
                      )
                    }
                  )
                }
              </Menu>
            </div>
          </Modal>

          {categoriesMap.size == 0 && <p>{messageState}</p>}
          {categoriesMap.size > 0 &&
            categories.map(x=> {
            return (
                <Link key={x} href={"/restaurants/" + restaurant + "/" + x}>
                  <Button className="m_c">
                      <div className="overlay">
                        {x=="Pizza"?
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.rxbAldJR60tyZrqtX35nMwHaEh%26pid%3DApi&f=1"></img>
                        :<></>}
                        {x=="Drinks"?
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.1a8QKmlddsozDwVa_da-kQHaEo%26pid%3DApi&f=1"></img>
                        :<></>}
                        {x=="Meat and fish"?
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.BWzILZm-vdJ5neGL1Q0K-gHaE8%26pid%3DApi&f=1"></img>
                        :<></>}
                        {x=="Salads"?
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.aYMF6RS9W935pO3WyoaihQHaE8%26pid%3DApi&f=1"></img>
                        :<></>}
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

export default RMenu;