import http from '../BackendAPI'
import {iCreateNewUser} from '../../../shared/interface/Interface'

const createUser = (data: iCreateNewUser) => {
    return http.post('/user', data)
}

const getAllUsers = () => {
    return http.get('/user')

}

 

const deleteUser = (_id: String | undefined) => {
    return http.delete(`/delete/${_id}`)

}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    createUser,
    getAllUsers,
    deleteUser
}