import axios from 'axios'

const URL = 'https://ecommerce-app-backened.herokuapp.com/'

export const FETCH = () => axios.get(URL)
