import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';
import { Tickets } from 'src/app/views/admin/ajouter-ticket/tickets';
import { User } from 'src/app/views/admin/user';



@Component({
  selector: 'app-liste-ticket',
  templateUrl: './liste-ticket.component.html',
  styleUrls: ['./liste-ticket.component.css']
})
export class ListeTicketComponent implements OnInit {

  tickets:Tickets[]=[];
  types:any;
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

  constructor(public TicketService:TicketService,private route:Router) { }

   getTicket(){
    this.TicketService.fetchTicketList().subscribe(data => {
      console.log(data)
      console.log(this.tickets);
      this.tickets = data;
    });
  }
  
  deleteTicket(id: number){
    if (confirm("Voulez-Vous supprimer ce Ticket ")) {
      // Save it!
      console.log('Thing was saved to the database.');
    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    }
    this.TicketService.delete(id).subscribe( data => {
      console.log(data);
      this.getTicket();
    })
  }
  search(){
    if(this.types ==""){
      this.ngOnInit();
    }else{
      this.tickets=this.tickets.filter(data=>{
        return data.type.toLocaleLowerCase().match(this.types.toLocaleLowerCase());
      })
    }
  }

  detailsTicket(id:any){
    this.route.navigate(['/technicien/consulter-ticket/'+id])
  }

  editTicket(id:any){
    this.route.navigate(['/technicien/edit-ticket/'+id])
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
 
 this.getTicket()
 
}

}
