import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { DirectoryComponent } from './directory/directory.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    SearchBarComponent,
    DirectoryComponent,
    HeaderComponent,
    FooterComponent,
    ProfileCardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    SearchBarComponent,
    DirectoryComponent,
    HeaderComponent,
    FooterComponent,
    ProfileCardComponent
  ]
})
export class SharedModule {
}
