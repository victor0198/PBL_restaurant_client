import {Button} from 'antd'
import {LeftOutlined} from '@ant-design/icons'
import Navbar from '../../../components/Navbar'
import Link from 'next/link'

const Menu = () => {
  return (
    <>
      <div className="menu">
        <div className="header">
          <Button>
            <LeftOutlined />
          </Button>
          <p>Oliva's menu</p>
        </div>
        <div className="c_list">
          <Link href="/restaurants/oliva/pizzas">
            <Button className="m_c">
                <div className="overlay">
                  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.-8_NHkki_nkuTJ5AQg9-2QHaDF%26pid%3DApi&f=1"></img>
                </div>
                <div className="info">
                  <p className="name">Pizzas</p>
                  <p className="nr_items">12 items</p>
                </div>
            </Button>
          </Link>
          <Button className="m_c">
              <div className="overlay">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.familyfoodonthetable.com%2Fwp-content%2Fuploads%2F2015%2F05%2FColorful-marinated-veggie-salad.png&f=1&nofb=1"></img>
              </div>
              
              <div className="info">
                <p className="name">Salads</p>
                <p className="nr_items">5 items</p>
              </div>
          </Button>
          <Button className="m_c">
              <div className="overlay">
                <img src="http://www.simplesweetsavory.com/wp-content/uploads/2017/05/Teriyaki-Marinated-Steak-side-1024x678.jpg"></img>
              </div>
              
              <div className="info">
                <p className="name">Steak</p>
                <p className="nr_items">5 items</p>
              </div>
          </Button>



          <Button className="m_c">
              <div className="overlay">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.-8_NHkki_nkuTJ5AQg9-2QHaDF%26pid%3DApi&f=1"></img>
              </div>
              <div className="info">
                <p className="name">Pizzas</p>
                <p className="nr_items">12 items</p>
              </div>
          </Button>
          <Button className="m_c">
              <div className="overlay">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.familyfoodonthetable.com%2Fwp-content%2Fuploads%2F2015%2F05%2FColorful-marinated-veggie-salad.png&f=1&nofb=1"></img>
              </div>
              
              <div className="info">
                <p className="name">Salads</p>
                <p className="nr_items">5 items</p>
              </div>
          </Button>
          <Button className="m_c">
              <div className="overlay">
                <img src="http://www.simplesweetsavory.com/wp-content/uploads/2017/05/Teriyaki-Marinated-Steak-side-1024x678.jpg"></img>
              </div>
              
              <div className="info">
                <p className="name">Steak</p>
                <p className="nr_items">5 items</p>
              </div>
          </Button>


        </div>
        
      </div>
      <Navbar/>
    </>
  )
}

export default Menu;