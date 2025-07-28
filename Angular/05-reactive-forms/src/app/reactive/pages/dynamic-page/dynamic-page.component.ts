import {Component, inject} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {HeaderComponentComponent} from '../../header-component/header-component.component';
import {FormUtils} from '../../../utils/form.utils';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators as v} from '@angular/forms';

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

  protected formUtils = FormUtils;

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

  // newFavorite = this.formBuilder.control([]);
  newFavorite = new FormControl('', v.required);

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  onAddToFavorites() {
    if (this.newFavorite.invalid) return;

    const newGame = this.newFavorite.value;
    this.favoriteGames.push(
      this.formBuilder.control(newGame, v.required)
    );

    this.newFavorite.reset()
  }

  onDeletedToFavorites(index: number) {
    this.favoriteGames.removeAt(index);
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
