import { createStore } from 'vuex'
import axios from 'axios'
import apiEndpoints from '@constants/apiEndpoints'

const store = createStore({
    state: {
        beers: [],
        loading: false,
        error: false,
    },
    getters: {
        beers: (state) => state.beers,
        isLoading: (state) => state.loading,
        isError: (state) => state.error,
    },
    mutations: {
        setBeers: (state, books) {
            state.beers = beers
        },
        addBeerToList: (state, books) {
            state.beers.push(beers)
        }
    }
}
)