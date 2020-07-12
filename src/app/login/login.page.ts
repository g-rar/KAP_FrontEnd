import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service'
import { AlertService} from '../services/alert.service'
import { FormBuilder, FormControl,Validators } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm:any;

  constructor(private authService : AuthService,private alertService : AlertService, private formBuilder : FormBuilder, public router: Router) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({'email':new FormControl('',[Validators.required, Validators.email]), 'password':new FormControl('',Validators.required)})
  }

  onSubmitLogin(formValue){
    this.authService.login(formValue.email,formValue.password).then(res =>{
        this.router.navigate(['/usermenu'])

    }).catch(err => this.alertService.presentAlert("Error signing into the account","Email or password is wrong"));
    
  }




}