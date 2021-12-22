import * as tokenService from "./tokenService"
const BASE_URL = '/api/comics'

export const getAllComics = async (id) => {
    try {
        const res = await fetch(`${BASE_URL}/${id}`, {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenService.getToken()}`
            },
        })
        console.log("this is Comics", res)
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

export const addAComic = async (com) => {
    try {
        const res = await fetch(`${BASE_URL}/${com.id}/add`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenService.getToken()}`
            },
            body: JSON.stringify(com)
        })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}
