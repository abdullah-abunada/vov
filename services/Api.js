import apisauce from 'apisauce'

const create = (baseURL = 'http://localhost/api') => {

    const api = apisauce.create({
        baseURL,
        timeout: 15000
    })

    const getData = (params) => api.get('/myData', params)

    return {
        getData
    }
}

export default {
    create
}