import AxiosProvider from "../AxiosProvider";

export const register = (data) => {
    return AxiosProvider.post('/register', data)
}

export const login = ({ id, password }) => {
    return AxiosProvider.post('/login', { id, password })
}
export const logout = (token) => {
    return AxiosProvider.post('/logout', {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

}

export const listData = (data) => {
    return AxiosProvider.get('/users', {params:{
        first_name:"George"
    }})
}

