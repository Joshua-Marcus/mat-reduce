import { Component } from '@angular/core';
import { of, Observable } from 'rxjs';

import { v1 as uuidv1 } from 'uuid';
import { FormControl } from '@angular/forms';
import {
  StaffMember,
  Contractor,
  blankContact,
  Tag,
  User,
} from '../from-mat-reduce-core';

function makeStaff(staffName): Tag {
  const staff: StaffMember = {
    id: uuidv1(),
    name: staffName,
    email: staffName + '@example.com',
    phone: '2194818482',
  };
  return {
    id: staff.id,
    name: staffName,
    obj: staff,
  };
}

function makeContractor(contractorsName: string): Tag {
  const contractor: Contractor = {
    id: uuidv1(),
    contactsArray: [
      {
        ...blankContact(),
        name: contractorsName,
        phone: '123142125125',
        email: contractorsName.replace(' ', '.').toLowerCase() + '@example.com',
      },
    ],
  };
  return {
    id: contractor.id,
    name: contractorsName,
    obj: contractor,
  };
}

const contractorsList: Tag[] = [
  makeContractor('David Franklin'),
  makeContractor('Sam Degan'),
  makeContractor('Phillip Smithford'),
];
const staffList: Tag[] = [
  makeStaff('Abigale Waterford'),
  makeStaff('Fred Goodman'),
];
const currentUser: User = {
  id: '02184184y81y2481284',
  Email: 'mydetails@component.com',
  'First Name': 'Fred',
  'Last Name': 'Wailsman',
  Phone: '09214717214',
};

@Component({
  template: `
    <form-toggle
      [formControl]="formControlEnabled"
      placeholder="Form Enabled"
    ></form-toggle>
    <h1>Assignee Selector</h1>
    <form-assignee-selector
      [formControl]="assigneeSelectorControl"
      [contractorsList]="contractorsList$ | async"
      [staffList]="staffList$ | async"
      [currentUser]="currentUser$ | async"
    >
    </form-assignee-selector>
    <h5>Value</h5>
    <pre>{{ assigneeSelectorControl?.value | json }}</pre>
    <h1>form-contact</h1>
    <form-contact [formControl]="formContact"> </form-contact>
    <h5>Value</h5>
    <pre>{{ formContact?.value | json }}</pre>
  `,
})
export class TestAssigneeComponent {
  formControlEnabled = new FormControl(false);
  assigneeSelectorControl = new FormControl();

  formContact = new FormControl({
    email: 'something@ascasc.ca',
  });

  contractorsList$: Observable<Tag[]> = of(contractorsList);
  staffList$: Observable<Tag[]> = of(staffList);
  currentUser$: Observable<User> = of(currentUser);

  constructor() {
    this.formControlEnabled.valueChanges.subscribe((isEnabled) => {
      console.log('form control enabled', {isEnabled})
      if (isEnabled) {
        this.assigneeSelectorControl.enable();
        this.formContact.enable();
      } else {
        this.assigneeSelectorControl.disable();
        this.formContact.disable();
      }
    });
  }
}
