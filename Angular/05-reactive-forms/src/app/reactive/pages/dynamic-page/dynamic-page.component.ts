import {Component, inject} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {HeaderComponentComponent} from '../../header-component/header-component.component';
import {FormUtils} from '../../../utils/form.utils';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators as v} from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  imports: [
    JsonPipe,
    HeaderComponentComponent,
    ReactiveFormsModule
  ],
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {

  private formUtils = FormUtils;

  private formBuilder = inject(FormBuilder);
  myForm: FormGroup = this.formBuilder.group({
    name: ['',
      [v.required, v.minLength(3)]
    ],
    favoriteGames: this.formBuilder.array([
      ['Metal Gear', v.required],
      ['Super Mario', v.required],
    ], v.minLength(3)),
  });

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }
}
