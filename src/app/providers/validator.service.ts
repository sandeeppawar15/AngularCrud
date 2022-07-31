import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable()

export class ValidatorService {
  constructor() { }

  passwordMatch(password: string, confirmPassword: string): ValidatorFn {

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

  // isEmailExist(emailId: string): ValidatorFn {
  //   return (formGroup: AbstractControl): { [key: string]: any } | null{
  //     const emailControl = formGroup.get(emailId);

  //     if (!emailControl) {
  //       return null;
  //     }

  //     if (emailControl.errors) {
  //       return null;
  //     }

  //     if (emailControl.value === 'sandeeppawar.pawar15@gmail.com') {
  //       emailControl.setErrors({ emailExist: true });
  //       return { emailExist: true };
  //     } else {
  //       emailControl.setErrors(null);
  //       return null;
  //     }

  //   };
  // }

}
