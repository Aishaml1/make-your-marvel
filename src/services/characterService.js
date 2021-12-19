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