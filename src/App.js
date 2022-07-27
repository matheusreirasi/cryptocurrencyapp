import React from 'react'
import { Route, Link, Routes} from "react-router-dom"
import { Layout, Typography, Space } from "antd"

import {Navbar, HomePage, Exchanges, CryptoCurrencies, CryptoDetails, News} from "./components/indexComponents"

import "./App.css"

function App() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>


      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route 
              path='/' 
              element={<HomePage/>}>
              </Route>
              
              <Route 
              path='/cryptoCurrencies' 
              element={<CryptoCurrencies/>}>
              </Route>

              <Route 
              path='/crypto/:coinId' 
              element={<CryptoDetails/>}>
              </Route>

              <Route 
              path='/news' 
              element={<News/>}>
              </Route>

            </Routes>
          </div>
        </Layout>
          
        <div className='footer'> 
          <Typography.Title level={5} style={{color:"white", textAlign:"center"}}>
            CryptoVerse <br/>
            All rights reserved.
          </Typography.Title>

          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>

      </div>
    </div>
  )
}

//Não entendi o porque de "footer" ter de ficar dentro de "main". Quando terminar tentarei colocar "main" separado de "footer", porém ambos dentro de da tag "Layout"

export default App