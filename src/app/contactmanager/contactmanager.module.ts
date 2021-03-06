import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes,RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from '../shared/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';

const routes: Routes=[
  {path:'', component: ContactmanagerAppComponent,
  children:[
    {path: ':id',component: MainContentComponent},
    {path: '',component: MainContentComponent}
  ]
},
{path:'**',redirectTo:''}
]

@NgModule({
  declarations: [
    MainContentComponent,
    ContactmanagerAppComponent,
    ToolbarComponent,
    SidenavComponent,
    MainContentComponent,
    NotesComponent,
    NewContactDialogComponent,
  ],
  providers:[
    UserService
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class ContactmanagerModule { }
