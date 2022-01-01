import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
  
  static invalidProjectName(control: AbstractControl): ValidationErrors | null {
    if (typeof control.value === 'string' && control.value.toLowerCase() === 'test') {
      return { 'invalidProjectName': true };
    }
    
    return null;
  }

  static asyncInvalidProjectName(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise<ValidationErrors | null>((resolve, reject) => {
      setTimeout(() => {
        resolve(CustomValidators.invalidProjectName(control));
      }, 1000);
    })
  }
}