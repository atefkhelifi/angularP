import { Component, OnInit } from '@angular/core';
import {ServiceUserService} from '../service/service-user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  User: any = [];

  constructor(
    public service: ServiceUserService
  ) { }

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers() {
    return this.service.getUsers().subscribe((data: {}) => {
      this.User = data;
    })
  }

  deleteUser(id:any) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.service.deleteUser(id).subscribe(data => {
        this.loadUsers()
      })
    }
  }

}
