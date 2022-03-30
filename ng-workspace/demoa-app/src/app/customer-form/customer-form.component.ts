import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
//data model
customerModel:any;

  constructor() { 
    console.log('customer-form-work')
  }

  ngOnInit(): void {
    this.customerModel={
      firstName:'stave',
      lastName:'jobs',
      email:'steve.jobs@google.com'
    }
  }
  saveCustomer(customerFormsGroup:any){
    if(customerFormsGroup.valid){
      console.log(customerFormsGroup.value);
    }
  }

}
