import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  socket!: Socket;
  roomPwd: number = 0;

  constructor(private s: Socket) {

    addEventListener('beforeunload', () => {

      console.log(this.roomPwd)

      this.socket.emit('player-left', this.roomPwd, (callbackMsg: string) => {
        console.log(callbackMsg)
      })
    });

    this.initConnection(s);
  }

  private initConnection(socket: Socket) {
    this.socket = socket;

    //Initial connection
    this.socket.fromEvent('server-init').subscribe((data: any) => {
      console.log(data);
    });

    //Receive Server Message and Send Client Message all 5 Secs to stay connected
    /* this.socket.on('ping', (data: any) => {
      console.log(data)
      this.socket.emit('pong', {sender: 'Client', message: 'Pong'});
    }); */

    this.socket.on('player-joined', (data: any) => {
      console.log(data);
    })

    this.socket.on('player-left', (data: any) => {
      console.log(data);
    })
  }

  public createQuiz(){
    this.roomPwd = Math.floor(Math.random() * 9000) + 1000;
    this.socket.emit('create-quiz', this.roomPwd);
    return this.roomPwd;
  }

  public joinQuiz(pwd: number){
    this.roomPwd = pwd;
    this.socket.emit('join-quiz', pwd, (callbackMsg: string) => {
      console.log(callbackMsg)
    });
  }
}
