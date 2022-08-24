import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { TicketService } from 'src/app/services/ticket.service';;
import { CategorieService } from 'src/app/services/categorie.service';
import { PriorityService } from 'src/app/services/priority.service';
import { StatutsService } from 'src/app/services/statuts.service';
import { TypeService } from 'src/app/services/type.service';
import { UserService } from 'src/app/services/user.service';
import { Tickets } from 'src/app/views/admin/ajouter-ticket/tickets';
import { Category } from 'src/app/views/admin/category';
import { Priority } from 'src/app/views/admin/priority';
import { Statuts } from 'src/app/views/admin/statuts';
import { TypeTicket } from 'src/app/views/admin/type-ticket';
import { User } from 'src/app/views/admin/user';


@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {

  tickets:Tickets[]=[];
   t:Tickets={
      id:'',
      title:'',
      description:'',
      dateOpened:'',
      dateClosed:'',
      lastUpdated:'',
      updates:'',
      createdBy:'',
      assignedTo:'',
      requestedBy:'',
      source_demande:'',
      impact:'',
      urgence:'',
      priority:'',
      category:'',
      type:'',
      ticketStatus:''
  }
  users:User[] =[];
  assignedUsers:User[] =[];
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
  categories:Category[]=[];
  types:TypeTicket[]=[];
  prioritys:Priority[]=[];
  satauts:Statuts[]=[];
   constructor(public TicketService:TicketService,private route:Router,private userService: UserService,
               private categorieService: CategorieService,private statutsService: StatutsService,
               private typeService:TypeService,private priorityService:PriorityService, private activatedRoute : ActivatedRoute,
               ) { }
 
 
  private getUserByRole(){
    this.userService.fetchUserListByRole(1).subscribe(data=>{
      this.users=data;
      console.log(this.users);

    })
    this.userService.fetchUserListByRole(2).subscribe(data=>{
      this.assignedUsers = data;
      console.log(this.assignedUsers);

    })
  }


  getCategorys(){
    this.categorieService.fetchTicketList().subscribe(data => {
      console.log(data)
      this.categories = data;
    });
  }
  getTypes(){
    this.typeService.fetchTypeList().subscribe(data => {
      console.log(data)
      this.types = data;
    });
  }

  getStatuts(){
    this.statutsService.fetchStatusOfTicketList().subscribe(data => {
      console.log(data)
      
      this.satauts = data;
    });
  }
  getPriorities(){
    this.priorityService.fetchTypeList().subscribe(data => {
      console.log(data)
      this.prioritys = data;
    });
  }




  public onAddTicket(addForm: NgForm): void {
    let ticket : Tickets = this.t;
  
    ticket.priority = this.prioritys.filter(elem => elem.id == ticket.priority)[0];
    ticket.type = this.types.filter(elem => elem.id == ticket.type)[0];
    ticket.category = this.categories.filter(elem => elem.id == ticket.category)[0];
    ticket.createdBy = this.users.filter(elem => elem.id == this.t.requestedBy)[0];
    ticket.requestedBy = this.users.filter(elem => elem.id ==this.t.requestedBy)[0];
    ticket.assignedTo = this.assignedUsers.filter(elem => elem.id == this.t.assignedTo)[0];
    ticket.dateOpened = new Date().toISOString();
    this.TicketService.editTicket(ticket).subscribe(
      response => {
        console.log(response);  
      }, 
    );
    this.route.navigate(['/client/liste-ticket']);
  }

   date1= new Date();
   currentYear=this.date1.getUTCFullYear();
   currentMonth=this.date1.getUTCMonth()+1;
   currentDay=this.date1.getUTCDate();
   TodayDate:any;
   finalMonth:any;
   finalDay:any;
  ngOnInit(): void {
    if(this.currentMonth<10){
      this.finalMonth="0"+this.currentMonth;
    }else{
      this.finalMonth=this.currentMonth;
    }
 
  if(this.currentDay<10){
    this.finalDay="0"+this.currentDay;
  }else{
    this.finalDay=this.currentDay;
  }
  this.TodayDate=this.currentYear +"-" +this.finalMonth +"-"+ this.finalDay;
  this.getUserByRole();
  this.getCategorys();
  this. getStatuts();
  this. getTypes();
  this. getPriorities()
  this.getTicketById(this.activatedRoute.snapshot.paramMap.get('id'))
  
 

 


}

getTicketById(id: any) {
  this.TicketService.findById(id).subscribe(
    data => {
      this.t = data;
      
      this.t.priority = this.t.priority?.id;
      this.t.type = this.t.type?.id;
      this.t.category = this.t.category?.id;
      this.t.createdBy = this.t.createdBy?.id;
      this.t.requestedBy = this.t.requestedBy?.id;
      this.t.assignedTo = this.t.assignedTo?.id;
      console.log(this.t);
    },
 
  )
}

}


