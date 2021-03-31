import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from './user/user.component';
import {UsererCreateComponent} from './userer-create/userer-create.component'
import {UserEditComponent} from './user-edit/user-edit.component'
import {WebSocketComponent} from './web-socket/web-socket.component'

const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'users' },
{ path: 'users', component: UserComponent },
{ path: 'creer', component: UsererCreateComponent},
{ path: 'edit/:id', component: UserEditComponent},
{ path: 'webSocket', component: WebSocketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
