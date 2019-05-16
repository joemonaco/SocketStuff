import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import {ChatService} from '../app/services/chat.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  title = 'SocketStuff';

  msg: String = "WRONG";
  curNum: number = 0;

  messages = [];
  message = '';

  connection;

  constructor(private chat: ChatService, private changeDetectorRef: ChangeDetectorRef) {
    
  }

  

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.chat.getMessage().subscribe(message => {
      this.messages.push(message);
    })
  }

  sendMessage(msg: String) {
    this.chat.sendMessage(msg);
    this.curNum++;
  }

  showMessage() {
    
    this.chat.getMessage().subscribe(data => {
      this.msg= data;
      this.messages.push(this.msg);
      // console.log(this.msg);
    });
  }
}
