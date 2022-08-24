import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../user';

@Component({
  selector: 'app-edit-technicien',
  templateUrl: './edit-technicien.component.html',
  styleUrls: ['./edit-technicien.component.css']
})
export class EditTechnicienComponent implements OnInit {

  editTechnicien= new FormGroup({
  id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone_number: new FormControl(''),
    adress: new FormControl(''),
    password: new FormControl(''),


  });
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

  constructor(private userService: UserService,private router:ActivatedRoute,
    private route: Router) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id'])
    this.userService.findById(this.router.snapshot.params['id'])
    .subscribe(data=>{
     this.editTechnicien=new FormGroup({
        id : new FormControl(this.router.snapshot.params['id']),
        firstName:new FormControl(data['firstName']),
        lastName:new FormControl(data['lastName']),
        email:new FormControl(data['email']),
        phone_number:new FormControl(data['phone_number']),
        adress:new FormControl(data['adress']),
        password:new FormControl(data['password'])
      })
    })

  }

  update(){
  console.log(this.editTechnicien.value);
  this.userService.updateUser(this.router.snapshot.params['id'],this.editTechnicien.value).subscribe(data=>{
  this.user_.id=this.router.snapshot.params['id']
   this.user_.firstName=this.editTechnicien.value.firstName
   this.user_.lastName=this.editTechnicien.value.lastName
   this.user_.adress=this.editTechnicien.value.adress
   this.user_.phone_number=this.editTechnicien.value.phone_number
   this.user_.email=this.editTechnicien.value.email
   this.user_.password=this.editTechnicien.value.password
   this.user_.role=2
   data =this.user_;
   console.log(data)
   this.route.navigate(['/admin/techniciens']);
  })


  
  
  }

}
