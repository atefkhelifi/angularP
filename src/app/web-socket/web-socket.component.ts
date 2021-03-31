import { Component, OnInit } from '@angular/core';
import {MessageServiceService} from '../service/message-service.service'

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.css']
})
export class WebSocketComponent implements OnInit {

  title = 'websocket-frontend';
  input:any;
  constructor(private messageService: MessageServiceService) { }

  ngOnInit(): void {
  }
  sendMessage() {
    if (this.input) {
      this.messageService.sendMessage(this.input);
      this.input = '';
    }
  }

}
