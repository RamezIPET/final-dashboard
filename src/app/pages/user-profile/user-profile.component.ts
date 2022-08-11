import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user:any
  constructor(private profile: UserProfileService) { 
    this.profile.getuser("322UXfoogamGrD3IWYYv").subscribe(user => this.user = user)
   }
  ngOnInit() {
  }


  val= true ;

  save(username,email, first_name, last_name ,address, city ,country ,postal_code ,about_me ) {
    this.val = true
    // this.profile.update(username , email, first_name, last_name, address ,city, country,postal_code,about_me )
  }
}
