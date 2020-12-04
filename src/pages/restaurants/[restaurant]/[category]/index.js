import {Button} from 'antd'
import {LeftOutlined} from '@ant-design/icons'
import Navbar from '../../../../components/Navbar'
import Link from 'next/link'

const Category = () => {
  return (
    <>
        <div className="category">
            <div className="background">
                <div className="get_overlay">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.readersdigest.ca%2Fwp-content%2Fuploads%2Fsites%2F14%2F2010%2F12%2Fpepperoni-pizza.jpg&f=1&nofb=1"></img>
                </div>
                
                <Button>
                    <LeftOutlined />
                </Button>
                <div className="category_name">
                    <p>Pizzas</p>
                </div>
                
            </div>
            <div className="list">
                <div className="ll2">

                <div className="dish">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.readersdigest.ca%2Fwp-content%2Fuploads%2Fsites%2F14%2F2010%2F12%2Fpepperoni-pizza.jpg&f=1&nofb=1"></img>
                    <div className="dish_content">
                        
                        <div className="text">
                            <p className="name">Peperroni</p>
                            <div className="price">
                                <p>Price</p>
                                <p>99 MDL</p>
                            </div>
                            <Link href="/">
                                <Button>Add</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="dish">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.readersdigest.ca%2Fwp-content%2Fuploads%2Fsites%2F14%2F2010%2F12%2Fpepperoni-pizza.jpg&f=1&nofb=1"></img>
                    <div className="dish_content">
                        
                        <div className="text">
                            <p className="name">Peperroni</p>
                            <div className="price">
                                <p>Price</p>
                                <p>99 MDL</p>
                            </div>
                            <Button>Add</Button>
                        </div>
                    </div>
                </div>
                
                <div className="dish">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.readersdigest.ca%2Fwp-content%2Fuploads%2Fsites%2F14%2F2010%2F12%2Fpepperoni-pizza.jpg&f=1&nofb=1"></img>
                    <div className="dish_content">
                        
                        <div className="text">
                            <p className="name">Peperroni</p>
                            <div className="price">
                                <p>Price</p>
                                <p>99 MDL</p>
                            </div>
                            <Button>Add</Button>
                        </div>
                    </div>
                </div>
                <div className="dish">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.readersdigest.ca%2Fwp-content%2Fuploads%2Fsites%2F14%2F2010%2F12%2Fpepperoni-pizza.jpg&f=1&nofb=1"></img>
                    <div className="dish_content">
                        
                        <div className="text">
                            <p className="name">Peperroni</p>
                            <div className="price">
                                <p>Price</p>
                                <p>99 MDL</p>
                            </div>
                            <Button>Add</Button>
                        </div>
                    </div>
                </div>

                <div className="dish">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.readersdigest.ca%2Fwp-content%2Fuploads%2Fsites%2F14%2F2010%2F12%2Fpepperoni-pizza.jpg&f=1&nofb=1"></img>
                    <div className="dish_content">
                        
                        <div className="text">
                            <p className="name">Peperroni</p>
                            <div className="price">
                                <p>Price</p>
                                <p>99 MDL</p>
                            </div>
                            <Button>Add</Button>
                        </div>
                    </div>
                </div>
                

                </div>
            </div>
            

            

        </div>
        <Navbar/>
    </>
  )
}

export default Category;