import BackendAPIService from '../../../shared/api/service/BackendAPIService'
import { useState, useEffect } from 'react'
import { iCreateNewUser } from '../../../shared/interface/Interface';
 


export const ExpertisView = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [newUser, setNewUser] = useState<iCreateNewUser>({ _id: '', username: '', password: '' })

    const create = async () => {

        try {
            setLoading(true)
            await BackendAPIService.createUser(newUser)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }

    }
    
    const deleteASpecificUser = async () => {        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      
        try {
            setLoading(true)
            await BackendAPIService.deleteUser(newUser._id)
            setLoading(false)
        }
         catch (error) {
            console.log(error)
        }       
    }

    const deleteUser = async (_id: any) => {

        try {
            setLoading(true)
            await BackendAPIService.deleteUser(_id)
            setLoading(false)
        }
         catch (error) {
            console.log(error)
        }       
    }
   
   

       




        const fecthData = async () => {
            const response = await BackendAPIService.getAllUsers()
            setUsers(response.data)

           
        }


        useEffect(() => {
            fecthData()
        }, [loading])

        return (
            <div>
                <h1>BACKEND API</h1>
                <p>USERNAME</p><input onChange={(event) => setNewUser({ ...newUser, username: event.target.value })} /><br />
                <p>PASSWORD</p><input onChange={(event) => setNewUser({ ...newUser, password: event.target.value })} /><br />
                <p>AGE</p> <input type='number' onChange={(event) => setNewUser({ ...newUser, age: parseInt(event.target.value) })} />
                <p>DELETE USER BY ID:</p><input onChange={(event) => setNewUser({ ...newUser, _id:event.target.value })} /><br />
                <br />
                <button onClick={() => create()}>Create user</button><br />
                <button onClick={() => deleteASpecificUser()}>deleteA user</button><br />

                <hr />
                <h1>Displaying all users</h1>
                <p>{newUser._id}</p>
                {users.map((x: any) => <div><span><i><b>ID: </b>{x._id}</i><br /><b>Username: {x.username}</b><br /><b>Password: </b>{x.password}<br /><b>Age: </b>{x.age}<br /><button onClick={() =>{deleteUser(x._id)}}>Delete</button><hr /></span></div>)}<br />


            </div>
        );
    }

 

