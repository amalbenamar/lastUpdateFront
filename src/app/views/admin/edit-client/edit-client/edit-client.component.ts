import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

 editClient= new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    phone_number: new FormControl(),
    adress: new FormControl(),

  });


  constructor(private userService: UserService,private router:ActivatedRoute,
    private route: Router) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id'])
    this.userService.findById(this.router.snapshot.params['id'])
    .subscribe((data)=>{
     this.editClient=new FormGroup({
        firstName:new FormControl(data['firstName']),
        lastName:new FormControl(data['lastName']),
        email:new FormControl(data['email']),
        phone_number:new FormControl(data['phone_number']),
        adress:new FormControl(data['adress'])
    
      })
    })

  }

  update(){
  console.log(this.editClient.value);
  this.userService.updateUser(this.router.snapshot.params['id'],this.editClient.value).subscribe((data)=>
  console.log(data));
  this.route.navigate(['/admin/clients']);
  
  
  }

}
