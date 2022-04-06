import AxiosProvider from "../AxiosProvider";

export const register = (data) => {
    return AxiosProvider.post('/register', data)
}

export const login = ({ email, password }) => {
    return AxiosProvider.post('/login', { email, password })
}
export const logout = (token) => {
    return AxiosProvider.post('/logout', {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

}

export const listData = (data) => {
    return AxiosProvider.get('/users', data)
}

