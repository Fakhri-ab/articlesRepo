import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { userNameValidators}  from '../Validators/userName.Validators' ;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form= new FormGroup({

    name: new FormControl('',Validators.required),
    Username: new FormControl('',[Validators.required,userNameValidators.cannotContainSpace] ),
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',Validators.required),
    

  });

  constructor() { }

  ngOnInit(): void {
  }

  get name(){
    return this.form.get('name');
  }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

  get Username(){
    return this.form.get('Username');
  }

}
