import { configureStore } from "@reduxjs/toolkit";

import {cryptoApi} from "../services/cryptoApi"
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore ({
    reducer: {
        [cryptoApi.reducerPath] : cryptoApi.reducer,
        [cryptoNewsApi.reducerPath] : cryptoNewsApi.reducer,
    },
})


//store is one central state of truth, meaning your entire application state, ou seja, todo o estado da aplicação estará aqui