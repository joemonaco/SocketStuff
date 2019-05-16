import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }

  sendMessage(msg: String){
    this.socket.emit("message", msg);
  }

  getMessage(): Observable<any>{
    // console.log(this.socket.fromEvent<any>("message").pipe(map(data => data.msg)))
    // return this.socket.fromEvent<any>("message").pipe(map(data => data.msg));

    let observable = new Observable(observer => {
      this.socket.on("message", (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })

    return observable;
  }

  close() {
    this.socket.disconnect();
  }


  
}
