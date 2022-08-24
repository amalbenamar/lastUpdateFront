
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../user';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {



  firstName:any;

users:User[] =[];
user_:User={
  id:'',
  firstName:'',
  lastName:'',
  email:'',
  adress:'',
  password:'',
  phone_number:'',
  role:''
}

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUserByRole(1);
  }

  private getUserByRole(role:number){
    this.userService.fetchUserListByRole(role).subscribe(data=>{
      this.users=data;
      console.log(this.users);

    })
  }
  // private getUser(){
  //   this.userService.fetchUserList().subscribe(data => {
  //     console.log(this.users);
  //     this.users = data;
  //   });
  // }



saveUser(){
  this.userService.saveUserByRole(this.user_, this.user_.role).subscribe( data =>{
    console.log(data);
        
    
  });
}

onSubmit(){
  console.log(this.user_);
  this.saveUser();
  this.getUserByRole(1);

}





  deleteUser(id: number){
    if (confirm("Voulez-Vous supprimer cet Utlisateur")) {
      // Save it!
      console.log('Thing was saved to the database.');
    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    }
    this.userService.delete(id).subscribe( data => {
      console.log(data);
      this.getUserByRole(2);
    })
  }




  search(){
    if(this.firstName ==""){
      this.ngOnInit();
    }else{
      this.users=this.users.filter(res=>{
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      })
    }
  }



 
}




