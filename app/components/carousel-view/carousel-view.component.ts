import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/services/user-service.service';

@Component({
  selector: 'app-carousel-view',
  templateUrl: './carousel-view.component.html',
  styleUrls: ['./carousel-view.component.css']
})
export class CarouselViewComponent implements OnInit {
  formFlag="carousel"
  usersList:any=[]
  @Output() onPassDetailEmit : EventEmitter<any> = new EventEmitter()
  constructor(private router:Router,
              private userService: UserServiceService) {
   }

  ngOnInit(): void {
    this.userService.getAllUsers()
    .subscribe({
        next: (data: any)=>{
         console.log("data: ",data);
         this.userService.usersList = data;
         this.usersList = data
         console.log("usersList", this.usersList);
         
       },
       error: ()=>{},
       complete: ()=>{}
      })
  }

  passDetails(data:any){
    console.log("data:",data);
    
    this.onPassDetailEmit.emit(data)
  }








  /*empObjs=[{  
    empno:101,
    ename:"Dhanush",
    job:" ENGINEER",
    sal:65000,
    deptno:20
  },
  {empno:102,
    ename:"Damu",
    job:" MANAGER",
    sal:64000,
    deptno:20},

    {empno:103,
      ename:"Naveen",
      job:" CLERK",
      sal:45000,
      deptno:20},
      {empno:104,
        ename:"Priya",
        job:" SOFTWARE ENGINEER",
        sal:50000,
        deptno:20},
       {empno:105,
          ename:"Divya",
          job:" ENGINEER",
          sal:70000,
          deptno:20},
          // {empno:105,
          //   ename:"Divya",
          //   job:" ENGINEER",
          //   sal:70000,
          //   deptno:20},
          //   {empno:105,
          //     ename:"Divya",
          //     job:" ENGINEER",
          //     sal:70000,
          //     deptno:20},
          //     {empno:105,
          //       ename:"Divya",
          //       job:" ENGINEER",
          //       sal:70000,
          //       deptno:20},
          //       {empno:105,
          //         ename:"Divya",
          //         job:" ENGINEER",
          //         sal:70000,
          //         deptno:20},
          //         {empno:105,
          //           ename:"Divya",
          //           job:" ENGINEER",
          //           sal:70000,
          //           deptno:20}
          
]*/

}
