import {Button, Image} from 'antd'
import {LeftOutlined, RightOutlined, StarOutlined, EnvironmentOutlined, FilterOutlined} from '@ant-design/icons'
import Link from 'next/link'
import Navbar from '../../components/Navbar'

const Resaurant = () => {
  return (
    <>
        <div className="header">
          <Button>
            <LeftOutlined />
          </Button>
          <p>Restaurants</p>
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
            <Link href="/restaurants/oliva">
                <Button className="item">
                    <div className="item_content">
                        <div className="img_div">
                            <img src="/oliva_logo.png" width={50} height={50}/>
                        </div>
                        <div className="item_description">
                            <p className="name">Oliva</p>
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
            </Link>
            <Link href="/restaurants/oliva">
                <Button className="item">
                    <div className="item_content">
                        <div className="img_div">
                            <img src="/oliva_logo.png" width={50} height={50}/>
                        </div>
                        <div className="item_description">
                            <p className="name">Oliva</p>
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
            </Link>
            <Link href="/restaurants/oliva">
                <Button className="item">
                    <div className="item_content">
                        <div className="img_div">
                            <img src="/oliva_logo.png" width={50} height={50}/>
                        </div>
                        <div className="item_description">
                            <p className="name">Oliva</p>
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
            </Link>
        </div>
        
        <Navbar/>
    </>
  )
}

export default Resaurant;