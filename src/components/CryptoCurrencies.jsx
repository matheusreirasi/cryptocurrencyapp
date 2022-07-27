import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input} from "antd"

import { useGetCryptoQuery } from '../services/cryptoApi'

import Loader from './Loader'

const CryptoCurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100
  const {data: cryptoList, isFetching} = useGetCryptoQuery(count)
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins)
  const [searchTerm, setSearchTerm] = useState("")

  
  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

    setCryptos(filteredData)

  }, [cryptoList, searchTerm]) //useEffect will be executed whenever the dependencies array changes

  if (isFetching) return <Loader />
  console.log(cryptoList)


  return (
    <div>
      {!simplified && ( //if not simplified render this. Appears just in crypto page
        <div className='search-crypto'>
          <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
      )}

      <Row gutter={[32,32]} className="crypto-card-container"> 
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
            <Link to={`/crypto/${currency.uuid}`} key={currency.uuid}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className='crypto-image' src={currency.iconUrl} alt=""/>}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default CryptoCurrencies