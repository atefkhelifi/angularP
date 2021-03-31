import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { UsererCreateComponent } from './userer-create/userer-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { WebSocketComponent } from './web-socket/web-socket.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsererCreateComponent,
    UserEditComponent,
    WebSocketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
