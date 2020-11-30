import {Button, Input} from 'antd'
import {} from '@ant-design/icons'

const RoomCreator = () => {
  return (
    <div className="creator">
        <h1>Set a room PIN</h1>
        <Input type="text"></Input>
        <Button>Set</Button>
    </div>
  )
}

export default RoomCreator;