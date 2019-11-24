import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { DirectoryComponent } from './directory/directory.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    DirectoryComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    SearchBarComponent,
    DirectoryComponent
  ]
})
export class SharedModule { }
