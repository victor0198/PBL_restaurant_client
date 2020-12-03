import {Button} from 'antd'
import {LeftOutlined, RightOutlined, StarOutlined, EnvironmentOutlined, FilterOutlined} from '@ant-design/icons'


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
            <Button className="item">
                <div className="item_content">
                    <p className="name">Oliva</p>
                    <div className="rating">
                        <StarOutlined className="marked"/>
                        <StarOutlined className="marked"/>
                        <StarOutlined className="marked"/>
                        <StarOutlined className="marked"/>
                        <StarOutlined />
                    </div>
                </div>
                <span>
                    <RightOutlined/>
                </span>
            </Button>
            <Button className="item">
                <div className="item_content">
                    <p className="name">Oliva</p>
                    <div className="rating">
                        <StarOutlined className="marked"/>
                        <StarOutlined className="marked"/>
                        <StarOutlined className="marked"/>
                        <StarOutlined className="marked"/>
                        <StarOutlined />
                    </div>
                </div>
                <span>
                    <RightOutlined/>
                </span>
            </Button>
            <Button className="item">
                <div className="item_content">
                    <p className="name">Oliva</p>
                    <div className="rating">
                        <StarOutlined className="marked"/>
                        <StarOutlined className="marked"/>
                        <StarOutlined className="marked"/>
                        <StarOutlined className="marked"/>
                        <StarOutlined />
                    </div>
                </div>
                <span>
                    <RightOutlined/>
                </span>
            </Button>
        </div>
        
    </>
  )
}

export default Resaurant;