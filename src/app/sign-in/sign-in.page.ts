import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})



export class SignInPage implements OnInit {
  ionicForm: FormGroup;
  
  isSubmitted = false;
  

 constructor(public formBuilder: FormBuilder, public toastController: ToastController) { }


 

  ngOnInit() {

    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(8),]],
    })

  }


  get errorControl() {
    return this.ionicForm.controls;
  }

  async submitForm() {
    this.isSubmitted = true;
    if(this.isSubmitted && this.ionicForm.controls.name.errors?.required){

      const toast = await this.toastController.create({
        message: 'First Name required.',
        duration: 2000
      });
      toast.present();

    }else if(this.isSubmitted && this.ionicForm.controls.name.errors?.minLength){

      const toast = await this.toastController.create({
        message: 'First name is short.',
        duration: 2000
      });
      toast.present();

    }else if(this.isSubmitted && this.ionicForm.controls.lastname.errors?.required){

      const toast = await this.toastController.create({
        message: 'Last name is required.',
        duration: 2000
      });
      toast.present();
    }else if(this.isSubmitted && this.ionicForm.controls.lastname.errors?.minLength){

      const toast = await this.toastController.create({
        message: 'Last name is too short.',
        duration: 2000
      });
      toast.present();
    }else if(this.isSubmitted && this.ionicForm.controls.email.errors?.required){

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
  
  }

}
