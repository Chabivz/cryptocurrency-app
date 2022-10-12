import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { Layout, Typography, Space } from 'antd';
import { Navbar, Exchanges, Home, Cryptocurrencies, CryptoDetails, News } from './components';
const { Title } = Typography;

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/exchanges' element={<Exchanges />} />
              <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
              <Route exact path='/crypto/:coinID' element={<CryptoDetails />} />
              <Route exact path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>
      
        <div className='footer'>
          <Title level={5} style={{ color: 'white', textAlign: 'center'}} >
            Crypto App
            All rights reserve
            <Space>
              <Link to='/'>Home</Link>
              <Link to='/exchanges'>Exchanges</Link>
              <Link to='/news'>News</Link>
            </Space>
          </Title>
        </div>
      </div>
    </div>
  )
}

export default App;