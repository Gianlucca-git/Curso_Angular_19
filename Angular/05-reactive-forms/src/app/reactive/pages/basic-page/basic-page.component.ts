import {Component, inject} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {HeaderComponentComponent} from '../../header-component/header-component.component';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators as v} from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  imports: [
    JsonPipe,
    HeaderComponentComponent,
    ReactiveFormsModule
  ],
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent {

  // tradicional
  // myForm = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // });

  private formBuilder = inject(FormBuilder);
  myForm: FormGroup = this.formBuilder.group({
    name: ['',
      [v.required, v.minLength(5)]
    ],
    price: [0,
      [v.required, v.min(10)]
    ],
    inStorage: [0,
      [v.required, v.min(0)]
    ],
  });// eje: [valor, [validador_sincrono], validador_asincrono]]

  isValidFiled(fielName: string): boolean | null {
    return !!this.myForm.controls[fielName].errors;
  }

  getFieldError(fieldName: string): string | null {

    if (!this.myForm.controls[fieldName]) return null;

    const errors = this.myForm.controls[fieldName].errors ?? {};

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
