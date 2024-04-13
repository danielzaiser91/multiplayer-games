import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { search } from '../store$/actions';
import { jeopardyFeature } from '../store$/feature';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  query$ = this.store.select(jeopardyFeature.selectJeopardyState)

  constructor(private store: Store, private stateService: StateService) {}

  onTestClick(query: string) {
    this.store.dispatch(search({ query }));
  }
}
