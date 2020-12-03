import {Button, Avatar} from 'antd'
import {LeftOutlined, UpOutlined, DownOutlined} from '@ant-design/icons'
import { useState } from 'react';

const Room = () => {
  const [showFriendsOrders, setShowFO] = useState(true);

  return (
    <div className="room">
        <div className="header">
          <Button>
            <LeftOutlined />
          </Button>
          <p>My order</p>
        </div>
        <div className="content">
            <div className="my_order">
                <div className="dishes">
                  <div className="dish">
                    <p className="dish_name">item 1</p>
                    <p className="dish_price">__MDL</p>
                  </div>
                  <div className="dish">
                    <p className="dish_name">item 1</p>
                    <p className="dish_price">__MDL</p>
                  </div>
                </div>
                <p className="yt">TOTAL: __ MDL</p>
                <div className="btns">
                  <Button className="b1">MODIFY</Button>
                  <Button className="b2">ACCEPT</Button>
                </div>
            </div>

              {showFriendsOrders?
                <div className="fo">
                  <p>Show friends' orders</p>
                  <Button className="sm_btn" onClick={(e) => {setShowFO(false)}}>
                    <DownOutlined className="separator"/>
                  </Button>
                </div>
                :
                <div className="fo">
                  <Button onClick={(e) => {setShowFO(true)}}>
                    <UpOutlined className="separator"/>
                  </Button>


                  <div className="order">
                    <div className="user">
                      <Avatar  src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fginva.com%2Fwp-content%2Fuploads%2F2012%2F03%2Ffemale-portrait-photography-57.jpg&f=1&nofb=1" />
                      <p className="nickname">Nicoletta</p>
                    </div>
                      <div className="dishes">
                        <div className="dish">
                          <p className="dish_name">item 1</p>
                          <p className="dish_price">__MDL</p>
                        </div>
                        <div className="dish">
                          <p className="dish_name">item 1</p>
                          <p className="dish_price">__MDL</p>
                        </div>
                      </div>
                  </div>
                  <div className="order">
                    <div className="user">
                      <Avatar  src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fginva.com%2Fwp-content%2Fuploads%2F2012%2F03%2Ffemale-portrait-photography-57.jpg&f=1&nofb=1" />
                      <p className="nickname">Nicoletta</p>
                    </div>
                      <div className="dishes">
                        <div className="dish">
                          <p className="dish_name">item 1</p>
                          <p className="dish_price">__MDL</p>
                        </div>
                        <div className="dish">
                          <p className="dish_name">item 1</p>
                          <p className="dish_price">__MDL</p>
                        </div>
                      </div>
                  </div>



                </div>
              }         

            
        </div>
    </div>
  )
}

export default Room;