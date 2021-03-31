import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceUserService } from '../service/service-user.service';

@Component({
  selector: 'app-userer-create',
  templateUrl: './userer-create.component.html',
  styleUrls: ['./userer-create.component.css']
})
export class UsererCreateComponent implements OnInit {

  @Input() userDetails = { id: 1, nom: '', prenom: '',age:0 }
  
  constructor(public restApi: ServiceUserService, 
    public router: Router) { }

  ngOnInit(): void {
  }

  addUser() {
    this.restApi.createUser(this.userDetails).subscribe((data: {}) => {
      this.router.navigate(['/users'])
    })
  }

}
