import Chai from 'chai'
import ChaiHTTP from 'chai-http' 
import { describe, it as test } from 'mocha'
import app from '../Server.js'
import StatusCode from '../src/configurations/StatusCodes.js'

Chai.should()
Chai.use(ChaiHTTP)

const randomString = Math.random().toString(36).substring(7)
const user = {
    username: randomString,
    password: randomString,
}

const testingNonExistentRoute = () => {
    describe('Testing a route that does not exist', () => {
        test('Expecting 404 not found', (done) => {
            Chai.request(app)
                .get(`/${randomString}`)
                .end((request, response) => {
                    response.should.have.a.status(StatusCode.NOT_FOUND)
                    done()
                })
        })

    })
}

const createUser = () => {
describe('Testing CREATE(POST) method for user entity', () => {
    test('Expecting a user to be created', (done) => {
       Chai.request(app) 
       .post('/user')
       .send(user)
       .end((error, response) => {
           response.should.have.a.status(StatusCode.CREATED)
           response.body.should.be.a('object')
           response.body.should.have.property('username').eq(user.username)
           response.body.should.have.property('password').eq(user.password)
           done()
       } )
    })
})

}

const getAllUsers = () => {
    describe('Testing GET(FETCH) method for user entity',() => {
        test('Excpecting to return all users', (done) => {
           Chai.request(app) 
        })
    })


}

const updateUser = () => {
    describe('Testing UPDATE(PUT) method for user entity',() => {
        test('Excpecting a user to be updated', (done) => {
           Chai.request(app) 
        })
    })


}

const deleteUser = () => {
    describe('Testing DELETE(DELETE) method for user entity',() => {
        test('Excpecting a user to be deleted', (done) => {
           Chai.request(app) 
        })
    })


}



describe('TESTING THE USER_API ROUTE', () => {
    testingNonExistentRoute()
    createUser()
})

