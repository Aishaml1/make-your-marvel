import * as tokenService from "./tokenService"

const BASE_URL = '/api/characters'


export const getCharacter = async (name) => {
  try {
    const res = await fetch(`${BASE_URL}?name=${name}`)
    console.log("this is res", res)
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const addCharacter = async (hero) => {
  console.log("hero in services", hero)
  try {
    const res = await fetch(`${BASE_URL}/${hero.id}/add`, {
      method: "POST",
      mode: "cors",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(hero)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const addQuoteToProfile = async (id, content) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/quotes`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(content)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}
  

