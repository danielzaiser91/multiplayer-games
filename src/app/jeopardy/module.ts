import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { JeopardyRoutingModule } from './routing.module';
import { StoreModule } from '@ngrx/store';
import { jeopardyFeature } from './store$/feature';
import { StateService } from './services/state.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  providers: [StateService],
  imports: [
    CommonModule,
    JeopardyRoutingModule,
    StoreModule.forFeature(jeopardyFeature)
  ]
})
export class JeopardyModule { }
