import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': `Bearer ${process.env.REACT_APP_NEWS_API_KEY}`,
    'X-RapidAPI-Host': process.env.REACT_APP_NEWS_API_HOST
}
//'X-RapidAPI-Key': `Bearer ${process.env.REACT_APP_NEWS_API_KEY}`
//'X-RapidAPI-Host': process.env.REACT_APP_NEWS_API_HOST

const baseUrl = "https://bing-news-search1.p.rapidapi.com"
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi ({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query ({
            query: (category, count) => createRequest(`/news/search?q=${category}&safeSearch=Off&textFormat=Raw&freshness=Day`) //It didn't work with count
        })
    })
})

export const {useGetCryptoNewsQuery} = cryptoNewsApi