import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';

const SHARED_MODULES: unknown[] = [
  FlexLayoutModule,
  FormsModule,
  ReactiveFormsModule,
  MatListModule,
];

@NgModule({
  declarations: [],
  imports: [SHARED_MODULES],
  exports: [SHARED_MODULES],
})
export class SharedModule {}
