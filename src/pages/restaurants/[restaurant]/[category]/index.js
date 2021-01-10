import {Button} from 'antd'
import {LeftOutlined} from '@ant-design/icons'
import Navbar from '../../../../components/Navbar'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import {useAppContext} from '../../../../components/UserInfo'
import Router from 'next/router'

const Category = () => {
  const axios = require('axios');
  const router = useRouter();
  const [dishes, setDishes] = useState([]);
  const [thisCategory, setThisCategory] = useState([]);
  const {restaurant, dishList, setDishList, UID, status} = useAppContext();


  useEffect(()=>{
    console.log("UID:" + UID);
    console.log("status:" + status);
    console.log("restaurant" + restaurant);

    axios.post('http://localhost:3000/api/menu',
    {
      "restaurantId":router.query.restaurant
    })
    .then(function (response) {
    setDishes(response.data.restaurant.menu);
    })
    .catch(function (error) {
        console.log(error); 
    })
    .then(function () {
    });
  },[]);

  useEffect(()=>{
    let thisCat = Array();
    for(let i=0; i<dishes.length; i++){ 
        if(dishes[i].description == router.query.category)
            thisCat.push(dishes[i]);
    };
    setThisCategory(thisCat);
    console.log(thisCat);
  }, [dishes]);

  const addDish = (obj) => { 
      const d = dishList;
      d.push(obj);
      setDishList(d);
      console.log("dishes:");
      console.log(d);
      Router.push('/');
  }

  return (
    <>
        <div className="category">
            <div className="background">
                <div className="get_overlay">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.readersdigest.ca%2Fwp-content%2Fuploads%2Fsites%2F14%2F2010%2F12%2Fpepperoni-pizza.jpg&f=1&nofb=1"></img>
                </div>
                <Link href={"/restaurants/"+ restaurant}>
                    <Button>
                        <LeftOutlined />
                    </Button>
                </Link>
                <div className="category_name">
                    <p>{router.query.category}</p>
                </div>
                
            </div>
            <div className="list">
                <div className="ll2">

                {
                    thisCategory.map( x=>{
                        return(
                        <div key={x._id} className="dish">
                            <img src={x.image}></img>
                            <div className="dish_content">
                                
                                <div className="text">
                                    <p className="name">{x.title}</p>
                                    <div className="price">
                                        <p>Price</p>
                                        <p>{x.price} MDL</p>
                                    </div>
                                    {status=="booking"?
                                    
                                        <Button onClick={e=>{addDish(x);}}>Add</Button>
                                    
                                    :
                                    <></>
                                    }
                                </div>
                            </div>
                        </div>)
                    })
                }

                </div>
            </div>
                    

        </div>
        <Navbar/>
    </>
  )
}

export default Category;