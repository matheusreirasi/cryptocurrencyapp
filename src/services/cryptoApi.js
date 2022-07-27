import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const cryptoApiHeaders = {
    'X-RapidAPI-Key': '0c89c12a24msh3ef74914f4d513ep130748jsna66c786bb83f',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    
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
