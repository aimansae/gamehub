import axios from 'axios'

export default axios.create({
    
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'ecbeca2b7d0546e1882d02d7e4b8cc7a'
    }
})

