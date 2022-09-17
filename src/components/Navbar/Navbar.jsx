import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';



const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar />
        <Typography.Title level={2} className='logo'>
          <Link to='/'>Cryptocurrency</Link>
        </Typography.Title>
      </div>
      <Menu theme='dark'>
        <Menu.Item icon={<HomeOutlined />}>
          <Button><Link to='/home'>Home</Link></Button>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Button><Link to='/cryptocurrencies'>Cryptocurrencies</Link></Button>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Button><Link to='/exchanges'>Exchanges</Link></Button>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Button><Link to='/news'>News</Link></Button>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Navbar