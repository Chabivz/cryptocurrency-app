import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// Switch allows you to have multiple routes.
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
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/exchanges'>
                <Exchanges />
              </Route>
              <Route exact path='/cryptocurrencies'>
                <Cryptocurrencies />
              </Route>
              <Route exact path='/crypto/:coinID'>
                <CryptoDetails />
              </Route>
              <Route exact path='/news'>
                <News />
              </Route>
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