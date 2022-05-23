import { Injectable } from '@angular/core';
import axios from 'axios';
import { ClassDTO } from 'src/app/DTO/class-dto';

@Injectable({
  providedIn: 'root'
})
export class AddSubjectService {

  constructor() { }

  async findSubject(subject_id:any):Promise<ClassDTO[]>{
    try{
      const res = await axios({
        method: 'get',
        url: `http://localhost:3000/findClassAndTeacher/${subject_id}`,
        headers : {
          'Authorization': 'Bearer ' + localStorage.getItem("key-api")
        }
      })
      console.log("res.data is",res.data);
      
      return res.data
    }catch(e){
      return []
      
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

  async saveStudent(studentClass:any[]){
    const res = await axios({
      method: 'post',
      url: 'http://localhost:3000/saveStudentClass',
      data:{
        studentClass
      },
      headers : {
        'Authorization': 'Bearer ' + localStorage.getItem("key-api")
      }
    })
  }
}
