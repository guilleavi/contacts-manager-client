import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    MatInputModule
  ],
  exports: [
    SearchBarComponent
  ]
})
export class SharedModule { }
