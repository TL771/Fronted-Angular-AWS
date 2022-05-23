import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class FirstPageService {
  constructor() { }
  async login(data:{username:string,password:string}):Promise<Boolean>{
    try{
      const res = await axios({
        method: 'post',
        url: 'http://localhost:3000/auth/login',
        data: {
          username: data.username,
          password: data.password
        }
      });
      localStorage.setItem("key-api",res.data.access_token)
      return true
    }catch(e){
      return false
    }
  }

  async getSubject(){
    const res = await axios({
      method: 'get',
      url: 'http://localhost:3000/subjectall',
      headers : {
        'Authorization': 'Bearer ' + localStorage.getItem("key-api")
      }
    })
    console.log(res.data)
  }

  async checkkey(){
    try{
      const res = await axios(
        {
          method: 'get',
          url: 'http://localhost:3000/profile',
          headers : {
            'Authorization': 'Bearer ' + localStorage.getItem("key-api")
          }
        }
      )
      return true
    }catch(e){
      return false;
    }
  }
}
