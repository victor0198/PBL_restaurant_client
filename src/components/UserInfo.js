import { createContext, useContext, useState, useEffect } from 'react';
import Link from 'next/link'
import {signIn, signOut} from 'next-auth/client'

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [restaurantName, setRestaurantName] = useState("RESTAURANT");
  const [token, setToken] = useState("initial");
  const [table, setTable] = useState(0);
  const [status, setStatus] = useState("initial");
  const [restaurant, setRestaurant] = useState("initial");
  const [dishList, setDishList] = useState([]);
  const [tableTotal, setTT] = useState(0);
  const [usersOnTable, setUOT] = useState(1); 
  const [UID, setUID] = useState("0");  

  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    console.log("PANIC");
    const token_cookie = localStorage.getItem('_token');
    if (token_cookie){
      let token_obj = JSON.parse(token_cookie);
      setToken(token_obj.token);
    }
    const user_cookie = localStorage.getItem('_user');
    if (user_cookie){
      let user_obj = JSON.parse(user_cookie);
      setRestaurantName(user_obj.restaurantName);
      setRestaurant(user_obj.restaurant);
      setTable(user_obj.table);
      setStatus(user_obj.status);
      setDishList(user_obj.dishList);
      setTT(user_obj.tableTotal);
      setUOT(user_obj.usersOnTable);
      setUID(user_obj.UID);
    }
    setLoaded(true);
  },[]);

  useEffect(()=>{
    localStorage.setItem('_token', JSON.stringify({token:token}));  
  },[token]);

  useEffect(()=>{
    if (loaded){
      localStorage.setItem('_user', JSON.stringify(
        {
          restaurantName:restaurantName,
          restaurant:restaurant,
          table:table,
          status:status,
          dishList:dishList,
          tableTotal:tableTotal,
          usersOnTable:usersOnTable,
          UID:UID
        }
      ));
    }
  },[restaurantName, restaurant, table, status, dishList, tableTotal, usersOnTable, UID]);

  return (
    <AppContext.Provider value={{
      restaurantName, token, table, restaurant, status, dishList, tableTotal, usersOnTable, UID, loaded,
      setToken, setRestaurantName, setTable, setStatus, setRestaurant, setDishList, setTT, setUOT, setUID
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}