import React from 'react'
import millify from "millify"

import { useGetExchangesQuery } from '../services/cryptoApi'

import Loader from './Loader'

const Exchanges = () => {
  const {data, isFetching} = useGetExchangesQuery()

  console.log(data)

  return (
    <div>
      Exchanges
    </div>
  )
}

export default Exchanges