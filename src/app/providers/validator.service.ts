import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { UserService } from './user.service';


@Injectable()

export class ValidatorService {

  constructor(private userService: UserService) { }

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


  // check if email address already exist in the database.s
  isEmailExist(emailId: string): ValidatorFn {

    return (formGroup: AbstractControl): { [key: string]: any } | null => {
      const emailControl = formGroup.get(emailId.trim());

      if (!emailControl) {
        return null;
      }

      if (emailControl.errors) {
        return null;
      }

      //fetch the records matching to given email address if any
      // return this.userService.checkIsEmailIdExist(emailControl.value.trim()).subscribe((result) => {
      //   emailControl.setErrors({ emailExist: result });
      //   return { emailExist: result };
      // })

      if (emailControl.value.trim() != '') {
        var test: any = false;
        this.userService.checkIsEmailIdExist(emailControl.value.trim()).subscribe((result) => {
          if (String(result) === "true") {
            emailControl.setErrors({ emailExist: true });
            return { emailExist: true };
          } else {
            console.log("joshi");
            emailControl.setErrors(null);
            return null;
          }
        })
      }
      return null;
    };
  }

  // check if userName address already exist in the database.s
  isUserNameExist(userName: string): ValidatorFn {

    return (formGroup: AbstractControl): { [key: string]: any } | null => {
      const userNameControl = formGroup.get(userName.trim());

      if (!userNameControl) {
        return null;
      }

      if (userNameControl.errors) {
        return null;
      }

      //fetch the records matching to given userName if any
      // return this.userService.checkIsUserNameExist(userNameControl.value.trim()).subscribe((result) => {
      //   userNameControl.setErrors({ userNameExist: result });
      // })


      if (userNameControl.value.trim() != '') {
        var test: any = false;
        this.userService.checkIsUserNameExist(userNameControl.value.trim()).subscribe((result) => {

          if (String(result) === "true") {
            userNameControl.setErrors({ userNameExist: true });
            return { userNameExist: true };
          } else {
            userNameControl.setErrors(null);
            return null;
          }
        })
      }
      return null;
    };
  }

}
