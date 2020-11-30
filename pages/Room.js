import {} from 'antd'
import {} from '@ant-design/icons'

const Room = () => {
  return (
    <div className="room">
        <h1>Orders in this room</h1>
        <div className="content">
            <div className="order">
                <div className="user">username</div>
                <div className="dishes">
                  <div className="dish">dish 1</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Room;