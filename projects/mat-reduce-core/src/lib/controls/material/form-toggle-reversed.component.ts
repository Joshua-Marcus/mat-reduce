import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { takeUntil, debounceTime, tap, delay, take } from 'rxjs/operators';
import { FormBase } from '../form-base-class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-toggle-reversed',
  template: `
    <div class="full-width">
      <mat-slide-toggle [formControl]="reversedControl" [name]="name">
        <div class="flex-center">
          <ng-content></ng-content>
          <span>{{ placeholder }}</span>
          <span>({{ value ? yes : no }})</span>
        </div>
      </mat-slide-toggle>
    </div>
  `,
  styles: [
    `
      span {
        margin: 2px;
      }
      .full-width {
        width: 100%;
        padding-bottom: 15px;
      }
      .flex-center {
        display: flex;
        align-items: center;
      }
    `,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LibFormToggleReversedComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LibFormToggleReversedComponent),
      multi: true,
    },
  ],
})
export class LibFormToggleReversedComponent extends FormBase<boolean>
  implements OnInit {
  @Input()
  yes = 'Yes';
  @Input()
  no = 'No';

  reversedControl = new FormControl();
  private lockControl: boolean;

  constructor() {
    super();
    this.$nginit.pipe(take(1)).subscribe(() => this.init());
  }

  init() {
    this.reversedControl.valueChanges
      .pipe(takeUntil(this._destroyed), debounceTime(100))
      .subscribe((value) => {
        if (this.lockControl) {
          return;
        }
        this.value = !value;
      });

    this.internalControl.valueChanges
      .pipe(
        takeUntil(this._destroyed),
        debounceTime(100),
        tap(() => (this.lockControl = true)),
        delay(100),
        tap(value => this.reversedControl.setValue(!value)),
        delay(100),
        tap(() => (this.lockControl = false))
      )
      .subscribe(() => {
        // console.log('reversedControl.valueChanges', { thisValue: this.value });
      });

    this.internalControl.statusChanges
      .pipe(takeUntil(this._destroyed))
      .subscribe((newVal) => {
        const disabled = newVal === 'DISABLED';
        const shouldDisable = disabled && this.reversedControl.enabled;
        const shouldEnable = !disabled && !this.reversedControl.enabled;
        if (shouldDisable) {
          this.reversedControl.disable()
        }
        if (shouldEnable) {
          this.reversedControl.enable()
        }
      });
  }
}
