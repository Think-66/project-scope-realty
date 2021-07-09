import { getRequest } from './coreApiServices'

export const getListingsDataa = () => {
    return getRequest(`http://dataapi.realtymx.com/listings?apiKey=487133496c474d70`)
}

export const getListingsRealtym = () => {
    return getRequest(`http://api.realtymx.com/properties/?apikey=4e6d6261566c3179`)
}