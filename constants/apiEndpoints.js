export default {
    beers: {
        readBeerList: `${process.env.VUE_APP_API_URL}/beers`,
        add: `${process.env.VUE_APP_API_URL}/beers`,
        update: `${process.env.VUE_APP_API_URL}/beers`,
        getBeerById: (id) => `${process.env.VUE_APP_API_URL}/beers/${id}`,
        delete: `${process.env.VUE_APP_API_URL}/beers`,
    },
}