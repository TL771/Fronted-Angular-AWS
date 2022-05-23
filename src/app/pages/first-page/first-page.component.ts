import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { window } from 'rxjs';
import { FirstPageService } from './first-page.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  
  authForm!:FormGroup
  constructor(private fb:FormBuilder , private firstPageService:FirstPageService
  ) {
    this.authForm = this.fb.group({
      username : ['',[Validators.required]],
      password : ['',[Validators.required]]
    })
   }

  ngOnInit(): void {
    console.log(this.firstPageService.checkkey())
  }

  async onSubmit(){
    const check = (await this.firstPageService.login(this.authForm.value));
    if(check){
      document.location.href = "home";
    }else{
      this.authForm.reset()
      alert("ไม่พบข้อมูล")
    }
  }


}