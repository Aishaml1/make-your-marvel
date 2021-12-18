import * as tokenService from './tokenService'
const BASE_URL = '/api/characters/'


export const getCharacter = async () => {
  try {
    const res = await fetch(`${BASE_URL}`)
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}