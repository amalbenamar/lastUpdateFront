
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';




@Component({
  selector: 'app-consulter-ticket',
  templateUrl: './consulter-ticket.component.html',
  styleUrls: ['./consulter-ticket.component.css']
})
export class ConsulterTicketComponent implements OnInit {
  id:any
  dataObject:any
  messageErr=''
    constructor(private route:ActivatedRoute,private ticketService:TicketService){
      this.route.params.subscribe(params=>this.id=params['id']) 
      this.ticketService.findById(this.id).subscribe(response=>this.dataObject=response)
     
    
    }

    
 ngOnInit(): void {

  console.log(this.dataObject)

}
}



