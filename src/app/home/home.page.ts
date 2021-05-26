import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ionicForm: FormGroup;
  
  isSubmitted = false;
  

 constructor(public formBuilder: FormBuilder, public toastController: ToastController) { }

 ngOnInit() {

  this.ionicForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    password: ['', [Validators.required, Validators.minLength(8),]],
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
  }
  else if(this.isSubmitted && this.ionicForm.controls.email.errors?.pattern){

    const toast = await this.toastController.create({
      message: 'Please provide valid email id.',
      duration: 2000
    });
    toast.present();
  }else if(this.isSubmitted && this.ionicForm.controls.password.errors?.required){

    const toast = await this.toastController.create({
      message: 'Password is required.',
      duration: 2000
    });
    toast.present();
  }else if(this.isSubmitted && this.ionicForm.controls.password.errors?.minLength){

    const toast = await this.toastController.create({
      message: 'Password should be atleast 8 characters.',
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
