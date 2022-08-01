import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { UserService } from './user.service';


@Injectable()

export class ValidatorService {

  constructor(private userService: UserService) { }

  passwordMatch(password: string, confirmPassword: string): ValidatorFn {
    console.log("tetetete");

    return (formGroup: AbstractControl): { [key: string]: any } | null => {

      const passwordControl = formGroup.get(password);
      const confirmPasswordControl = formGroup.get(confirmPassword);

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
      } else {
        confirmPasswordControl.setErrors(null);
        return null;
      }
    };
  }

  isEmailExist(emailId: string): ValidatorFn {

    return (formGroup: AbstractControl): { [key: string]: any } | null => {
      const emailControl = formGroup.get(emailId);
      console.log(emailControl?.value);
      if (!emailControl) {
        return null;
      }

      if (emailControl.errors) {
        return null;
      }

      //fetch the records matching to given email address if any
      this.userService.checkIsEmailIdExist(emailControl?.value).subscribe((result) => {
        console.log("Inside checkIsEmailIdExist");
        console.log(result);
      })

      if (emailControl.value === 'sandeeppawar.pawar15@gmail.com') {
        emailControl.setErrors({ emailExist: true });
        return { emailExist: true };
      } else {
        console.log("in else", emailControl);
        emailControl.setErrors(null);
        return null;
      }

    };
  }

}
