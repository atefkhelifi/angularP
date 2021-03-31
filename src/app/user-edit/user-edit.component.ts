import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceUserService } from '../service/service-user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  userData: any = {};

  constructor(public restApi: ServiceUserService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    this.restApi.getUser(this.id).subscribe((data: {}) => {
      this.userData = data;
  })
}
  
updateUser() {
  if(window.confirm('Are you sure, you want to update?')){
    this.restApi.updateEmployee(this.id, this.userData).subscribe(data => {
      this.router.navigate(['/users'])
    })
  }
}

  }
