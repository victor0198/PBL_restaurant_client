import {Button, Input} from 'antd'
import {} from '@ant-design/icons'

const RoomEntry = () => {
  return (
    <div className="entry">
        <h1>Type the room PIN</h1>
        <Input type="text"></Input>
        <Button>Enter</Button>
    </div>
  )
}

export default RoomEntry;