import apisauce from 'apisauce'

const create = (baseURL = 'https://vov-api.herokuapp.com') => {

    const api = apisauce.create({
        baseURL,
        timeout: 15000
    })

    const getCategorise = (params) => api.get('/categories', params)

    return {
        getCategorise
    }
}

export default {
    create
}