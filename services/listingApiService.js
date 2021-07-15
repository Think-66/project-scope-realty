import { getRequest } from './coreApiServices'

export const getListingsDataa = (params = null) => {
    return getRequest(`https://dataapi.realtymx.com/listings?apiKey=487133496c474d70`, params)
}

export const getListingsRealtym = (params = null) => {
    return getRequest(`https://api.realtymx.com/properties/?apikey=4e6d6261566c3179`, params)
}

export const getListingsDataaById = (id) => {
    return getRequest(`https://dataapi.realtymx.com/listings?apiKey=487133496c474d70&id=${id}`)
}

export const getListingsRealtymById = (id) => {
    return getRequest(`https://api.realtymx.com/properties/${id}?apikey=4e6d6261566c3179`)
}