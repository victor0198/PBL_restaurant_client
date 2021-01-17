import {Button, Input} from 'antd'
import {LeftOutlined, ShakeOutlined, MailOutlined, CreditCardOutlined, EditOutlined, RightOutlined, ClockCircleOutlined} from '@ant-design/icons'
import Navbar from '../../components/Navbar'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import {useAppContext} from '../../components/UserInfo'
import Router from 'next/router'

const Profile = () => {
  const {token, loaded} = useAppContext();


  useEffect(()=>{
    if(token=="initial"){
        Router.push("/start");
    }
  },[]);

  return (
    <>
        {
            loaded && token!="initial" ?
            <>
                <div className="category">
                <div className="background">
                    <div className="get_overlay">
                    <img src="user.jpg"></img>
                    </div>
                    <Link href={"/"}>
                        <Button>
                            <LeftOutlined />
                        </Button>
                    </Link>
                    <div className="category_name">
                        <p>CRISTINA URSU</p>
                    </div>
                    
                </div>
                <div className="profile_content">
                    <div className="p_option">
                        <div>
                            <ShakeOutlined />
                            <p>Phone number</p>
                        </div>
                        <Input></Input>
                    </div>
                    <div className="p_option">
                        <div>
                            <MailOutlined />
                            <p>Email</p>
                        </div>
                        <Input></Input>
                    </div>
                    <div className="p_option">
                        <div style={{justifyContent:"space-between"}}>
                            <div>
                                <CreditCardOutlined />
                                <p>Cards</p>
                            </div>
                            <EditOutlined />
                        </div>
                        <p>Visa **** **** 5632</p>
                        <p>Visa **** **** 2918</p>
                    </div>
                    <div className="p_option">
                        <div style={{justifyContent:"space-between"}}>
                            <div>
                                <ClockCircleOutlined />
                                <p>History</p>
                            </div>
                            <RightOutlined />
                        </div>
                    </div>
                </div>
            </div>
            <Navbar/>
        </>
        :
        <div className="start">
            <img src="/logofull_white.png"></img>
        </div>
        }
        
    </>
  )
}

export default Profile;