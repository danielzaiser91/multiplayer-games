import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { JeopardyRoutingModule } from './jeopardy-routing.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    JeopardyRoutingModule
  ]
})
export class JeopardyModule { }
