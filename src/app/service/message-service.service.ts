import { Injectable } from '@angular/core';
  // Declare SockJS and Stomp
  declare var SockJS:any;
  declare var Stomp:any;

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {



  constructor() { this.initializeWebSocketConnection(); }

  public stompClient:any;
public msg = [];
initializeWebSocketConnection() {
  const serverUrl = 'http://localhost:8088/socket';
  const ws = new SockJS(serverUrl);
  this.stompClient = Stomp.over(ws);
  const that:any = this;
  // tslint:disable-next-line:only-arrow-functions
  this.stompClient.connect({}, function(frame:any) {
    that.stompClient.subscribe('/message', (message:any) => {
      if (message.body) {

        that.msg.push(message.body);
      }
    });
  });
}

sendMessage(message:any) {
  this.stompClient.send('/app/send/message' , {}, message);
}
}
