import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FoundOutlined, MenuOutlined } from '@ant-design/icons';



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
          <Link to='/home'>Home</Link>
        </Menu.Item>
        <Menu.Item icon={<HomeOutlined />}>
          <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<HomeOutlined />}>
          <Link to='/exchanges'>Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<HomeOutlined />}>
          <Link to='/news'>News</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Navbar