import {
  LibFormNumberComponent,
  LibFormCheckboxComponent,
  LibFormSelectObjectAutoCompleteComponent,
  LibFormSelectObjectMultipleComponent,
  LibFormSelectStringAutoCompleteComponent,
  LibFormSelectStringComponent,
  LibFormSelectStringMultipleComponent,
  LibFormTagMultipleComponent,
  LibFormTagSingleComponent,
  LibFormTextAreaComponent,
  LibFormTextAreaDisabledComponent,
  LibFormTextClearableComponent,
  LibFormTextComponent,
  LibFormTextDisabledComponent,
  LibFormTextIconsComponent,
  LibFormTextPasswordComponent,
  LibFormToggleComponent,
  LibFormToggleReversedComponent,
  LibFormSelectObjectComponent,
  Tag,
  TagObject,
  MatReduceFormsUsingMaterialModule,
} from './lib/controls/material';
import {
  LibFormPhoneComponent,
  LibFormColorComponent,
  LibFormDateComponent,
  LibFormTimeComponent,
  LibFormSignatureComponent,
  MatReduceFormsUsing3rdPartyModule,
} from './lib/controls/using-3rd-party';
import { FormBase } from './lib/controls/form-base-class';
import {
  FormBuilderTypedService,
  FormArrayTypeSafe,
  FormGroupTypeSafe,
} from './lib/services';
import { SimpleLog } from './lib/utils';
import { MatReduceCoreModule } from './lib/mat-reduce-core.module';
import {
  blankContact,
  Assignee,
  AssigneeType,
  User,
  StaffMember,
  Contractor,
  Contact,
  MatReduceFormsComposedModule,
  LibFormAssigneeSelectorComponent,
  LibFormGroupContactComponent,
} from './lib/controls/composed';

export {
  // Main Module
  MatReduceCoreModule,
  FormBase,
  // Material Components
  MatReduceFormsUsingMaterialModule,
  LibFormNumberComponent,
  LibFormCheckboxComponent,
  LibFormSelectObjectAutoCompleteComponent,
  LibFormSelectObjectMultipleComponent,
  LibFormSelectStringAutoCompleteComponent,
  LibFormSelectStringComponent,
  LibFormSelectStringMultipleComponent,
  LibFormTagMultipleComponent,
  LibFormTagSingleComponent,
  LibFormTextAreaComponent,
  LibFormTextAreaDisabledComponent,
  LibFormTextClearableComponent,
  LibFormTextComponent,
  LibFormTextDisabledComponent,
  LibFormTextIconsComponent,
  LibFormTextPasswordComponent,
  LibFormToggleComponent,
  LibFormToggleReversedComponent,
  LibFormSelectObjectComponent,
  // 3rd Party Wrappers
  MatReduceFormsUsing3rdPartyModule,
  LibFormPhoneComponent,
  LibFormColorComponent,
  LibFormDateComponent,
  LibFormTimeComponent,
  LibFormSignatureComponent,
  // Composed Wrappers
  MatReduceFormsComposedModule,
  LibFormAssigneeSelectorComponent,
  LibFormGroupContactComponent,
  // Exported Services
  FormBuilderTypedService,
  // Exported Helpers and Models
  SimpleLog,
  FormGroupTypeSafe,
  FormArrayTypeSafe,
  Tag,
  TagObject,
  Assignee,
  AssigneeType,
  User,
  StaffMember,
  Contractor,
  Contact,
  blankContact,
};
