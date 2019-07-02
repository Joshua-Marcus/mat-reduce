import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBase } from './form-base-class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-text',
  template: `
    <mat-form-field class="full-width">
      <input
        matInput
        [placeholder]="placeholder"
        [formControl]="internalControl"
        [name]="autoCompleteObscureName"
        autocomplete="dontcompleteme"
      />
    </mat-form-field>
  `,
  styles: [
    `
      .full-width {
        width: 100%;
      }
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppFormTextComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AppFormTextComponent),
      multi: true
    }
  ]
})
export class AppFormTextComponent extends FormBase<string> implements OnInit {}