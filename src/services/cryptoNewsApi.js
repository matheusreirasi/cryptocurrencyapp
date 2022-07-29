import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '0c89c12a24msh3ef74914f4d513ep130748jsna66c786bb83f',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

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