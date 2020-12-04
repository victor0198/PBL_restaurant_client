import {} from 'antd'
import {} from '@ant-design/icons'
import Navbar from '../../components/Navbar'
import Link from 'next/link'


const QRScanner = () => {
  return (
    <>
      <div className="scanner">
          <div className="cam_view"></div>
          <h1 className="title">Scan the QR code</h1>
      </div>
      <Navbar/>
    </>
  )
}

export default QRScanner;