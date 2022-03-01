import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import {MaterialModule} from '../shared/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class DemoModule { }
