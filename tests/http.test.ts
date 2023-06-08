import { Server } from "http";
import { run } from "../src/app";
import request from 'supertest'

describe('http', ()=>{
    let server: Server
    beforeAll(()=>{
        server = run(3000)
    })
    it('GET /user/test', ()=>{
        return request(server)
        .get('/user/test')
        .expect(200)
    })
    afterAll(()=>{
        server.close()
    })
})