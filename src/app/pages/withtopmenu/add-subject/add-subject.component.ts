import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { AddSubjectClass } from './add-subject-class';
import { AddSubjectService } from './add-subject.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  studentClass: any[] = [];
  subjectHold:any[] = [];
  sectionHold:string[] = [];
  

  addsubjectForm!:FormGroup
  constructor(private fb:FormBuilder,private AddSubjectService:AddSubjectService) { 
    this.addsubjectForm = this.fb.group({
      subject_id : ['',[Validators.required, Validators.pattern("^[0-9]*$"),Validators.maxLength(9),Validators.minLength(9)]],
      sectionSelect : ['',[Validators.required]]
    })
  }

  ngOnInit(): void {}

  save(){  
    if(this.studentClass.length !== 0){
      const send =  this.studentClass.map((value,i)=>{
        const {subject_id ,subject_section} = value;
        return { subject_id ,subject_section};
      })
      console.log(send)
      this.AddSubjectService.saveStudent(send)
      alert("ลงทะเบียนเรียนสำเร็จ")
      document.location.href = "home";
    }else{
      alert("กรุณาลงทะเบียนเรียน")
    }
  }

  delete(i:string){
    this.studentClass = this.studentClass.filter((value)=>(i !== value.subject_id))
  }

  ok(){
    const s = this.addsubjectForm.value.sectionSelect
    this.studentClass.push(this.subjectHold.filter((value)=>value.subject_section === s)[0])
    this.cancel();
    console.log(this.studentClass);
    
  }

  cancel(){
    this.addsubjectForm.reset();
    this.sectionHold = []; 
    this.subjectHold = []; 
  }


  async onSubmit(){
    const a =  this.studentClass.filter(value=>this.addsubjectForm.value.subject_id ===value.subject_id);
    if(a.length === 0){
      let data = await this.AddSubjectService.findSubject(this.addsubjectForm.value.subject_id)
      if(data.length !== 0){
        this.subjectHold = data;
        this.sectionHold = (data.map((value,i)=>{
          return value.subject_section
        })) 
        
      }else{
        this.sectionHold = [];
        this.subjectHold = [];
        this.addsubjectForm.reset()
        alert('ไม่พบวิชาเรียน')
      }
    }else{
      alert(this.addsubjectForm.value.subject_id+" is duplicate.")
      this.cancel()
    }
  
  }


  
}
