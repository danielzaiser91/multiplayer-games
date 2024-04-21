import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { search } from '../store$/actions';
import { jeopardyFeature } from '../store$/feature';
import { StateService } from '../services/state.service';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  query$ = this.store.select(jeopardyFeature.selectJeopardyState)

  passphrase: number = 0;

  constructor(private store: Store, private stateService: StateService, private socketService: SocketService) {}

  public onTestClick(query: string) {
    this.store.dispatch(search({ query }));
  }

  public onClickCreateQuiz(){
    this.passphrase = this.socketService.createQuiz();
    console.log(this.passphrase)
  }

  public onClickJoinQuiz(pwd: string){
    this.socketService.joinQuiz(parseInt(pwd))
  }
}
