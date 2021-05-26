import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  ionicForm: FormGroup;
  
  isSubmitted = false;
  

 constructor(public formBuilder: FormBuilder, public toastController: ToastController) { }


  ngOnInit() {

    this.ionicForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    })

  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  async submitForm() {
    this.isSubmitted = true;
    if(this.isSubmitted && this.ionicForm.controls.email.errors?.required){

      const toast = await this.toastController.create({
        message: 'Email is required.',
        duration: 2000
      });
      toast.present();
    }else if(this.isSubmitted && this.ionicForm.controls.email.errors?.pattern){

      const toast = await this.toastController.create({
        message: 'Please provide valid email id.',
        duration: 2000
      });
      toast.present();
    }
    else if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.ionicForm.value)
    }
  }

}
