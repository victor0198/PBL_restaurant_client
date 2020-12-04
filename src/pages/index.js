import {} from 'antd'
import {UserOutlined} from '@ant-design/icons'

import Dish from './Dish'
import Navbar from '../components/Navbar'
import Room from './Room'


export default function Home() {
  return (
      <div>
        <Room/>
        <Navbar/>
      </div>
  )
}
