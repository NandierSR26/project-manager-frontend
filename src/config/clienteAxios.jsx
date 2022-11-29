import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: `${import.meta.env.BACKEND_URL_v2}/api`
})

export default clienteAxios;