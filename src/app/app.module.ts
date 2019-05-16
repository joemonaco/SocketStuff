import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatService } from './services/chat.service';

const config: SocketIoConfig = { url: '192.168.162.168:8000', options: {}};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
