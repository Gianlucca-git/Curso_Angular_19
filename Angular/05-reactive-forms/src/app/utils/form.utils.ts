import {FormGroup} from '@angular/forms';

export class FormUtils {


  static isValidFiled(form: FormGroup, fielName: string): boolean | null {
    return (
      !!form.controls[fielName].errors &&
      form.controls[fielName].touched
    );
  }

  static getFieldError(form: FormGroup, fieldName: string): string | null {

    if (!form.controls[fieldName]) return null;

    const errors = form.controls[fieldName].errors ?? {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'This field is required.';
        case 'minlength':
          return `This field must have at least ${errors['minlength'].requiredLength} characters.`;
        case 'min':
          return `This field must be greater than ${errors['min'].min}.`;
      }
    }
    return null;
  }

}
