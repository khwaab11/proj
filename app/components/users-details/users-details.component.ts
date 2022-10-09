import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  @Input() user:any
  constructor() { }

  ngOnInit(): void {
    console.log("user: ", this.user);
    
  }
  closeDetail(){
    
  }

}
