import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OlddataService } from './olddata.service';

@Component({
  selector: 'app-olddata',
  templateUrl: './olddata.component.html',
  styleUrls: ['./olddata.component.css']
})
export class OlddataComponent implements OnInit {

  olddataForm!:FormGroup
  constructor(private fb:FormBuilder,private OlddataService:OlddataService) { 
    this.olddataForm = this.fb.group({
      semester : ['']
    })
  }

  ngOnInit(): void {
  }

  async onSubmit(){
    const data = await this.olddataForm.value.semester
    alert(data)
  }
 

}
