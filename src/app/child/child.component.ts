import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 @Input() childMessage:string;
  message:string = "message from child hello mohini";
  @Output() MessageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  sendMessage(){
    this.MessageEvent.emit(this.message);
  }

}
