import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../user';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  myform = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email : new FormControl(),
    adress: new FormControl(),
    password:new FormControl(),
    phone_number: new FormControl()
  }) ;
  users:User[] =[];

  user_:User={
    id:'',
    firstName:'',
    lastName:'',
    email:'',
    adress:'',
    phone_number:'',
    password:'',
    role:''
}


  constructor(private userService: UserService,private route:Router) { }

  ngOnInit(): void {
   
   
  }
 

  onSubmit(user: User, role: number) {
    this.userService.saveUserByRole(user, role).subscribe(data=>{
      user.firstName=this.myform.value.firstName;
      user.lastName=this.myform.value.lastName;
      user.adress=this.myform.value.adress;
      user.phone_number=this.myform.value.phone_number;
      user.email=this.myform.value.email;
      user.password=this.myform.value.password;
    data = user;
    console.log(data)
  })
  console.log("Form Submitted!");
  console.log(this.myform.value);
  this.route.navigate(['/admin/clients'])
}

}
