import axios from 'axios'

const todosLosProductos = async (state) => {
    const peticion = await axios.get('http://localhost:3001/api/products')
    state(peticion.data.products)
}

export {
    todosLosProductos
}

const sumaProductos = async (state) => {
    const peticionBD = await axios.get('http://localhost:3001/api/products')
    state(peticionBD.data.products)
    
    
} 
export default sumaProductos