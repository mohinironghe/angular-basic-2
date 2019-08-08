import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { ViewchildComponent } from '../viewchild/viewchild.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 parentMessage = "message from parent";
 message:string;
  constructor() { }

  ngOnInit() {
  }

  receiveMessage($event){
    this.message = $event
  }

}
