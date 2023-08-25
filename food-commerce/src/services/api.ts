import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  //baseURL: 'http://localhost:3000/'
})



export const getBurgers = () => api.get('/burgers')
export const getPizzas = () => api.get('/pizzas')
export const getDrinks = () => api.get('/Drinks')
export const getIceCreams = () => api.get('/ice-creams')

export default api
