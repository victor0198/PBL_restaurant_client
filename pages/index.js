import {} from 'antd'
import {UserOutlined} from '@ant-design/icons'

import QRScanner from './QRScanner'
import RoomCreator from './RoomCreator'
import RoomEntry from './RoomEntry'
import Room from './Room'
import Menu from './Menu'
import Dish from './Dish'
import Payment from './Payment'
import Navbar from '../components/navbar'
import Category from './Category'
import Resaurant from './Restaurant'


export default function Home() {
  return (
      <div>
        <QRScanner/>
        {/* <Menu/> */}
        {/* <Category/> */}
        {/* <Room/> */}
        {/* <Resaurant/> */}
        <Navbar/>
      </div>
  )
}
