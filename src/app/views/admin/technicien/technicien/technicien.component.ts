import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../user';



@Component({
  selector: 'app-technicien',
  templateUrl: './technicien.component.html',
  styleUrls: ['./technicien.component.css']
})
export class TechnicienComponent implements OnInit {


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


preview: string = '';

name : any; 
 
  constructor(private userService: UserService,
    private router: Router) { }
    

    ngOnInit(): void {
      this.getUserByRole(2);
     
    }
    

    private getUserByRole(role:number){
      this.userService.fetchUserListByRole(role).subscribe(data=>{
        this.users=data;
        console.log(this.users);
  
      })
    }

   deleteUser(id: number){
    // alert("Voulez-Vous supprimer cet Utlisateur")
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
    if(this.name ==""){
      this.ngOnInit();
    }else{
      this.users=this.users.filter(res=>{
        return res.firstName.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }




}
