import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const cryptoApiHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST
    
}

const baseUrl = "https://coinranking1.p.rapidapi.com"
const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi ({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCrypto: builder.query ({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query ({
            query: (coinId) => createRequest(`/coin/${coinId}`)//don't need to be equal to json response where coinId is actually uuid
        }),
        getCryptoHistory: builder.query ({
            query: (coinId, timePeriod) => createRequest(`coin/${coinId}/history?timePeriod=${timePeriod || "24h"}`)//don't need to be equal to json response where coinId is actually uuid
        })
    })
})

export const {
    useGetCryptoQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
} = cryptoApi
