import {Button} from 'antd'
import {UserOutlined, ScanOutlined, ShopOutlined} from '@ant-design/icons'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="icon_div">
            <UserOutlined className="icon"/>
        </div>
        <div className="icon_div">
            <ScanOutlined className="icon"/>
        </div>
        <div className="icon_div">
            <ShopOutlined className="icon"/>
        </div>
    </div>
  )
}

export default Navbar;