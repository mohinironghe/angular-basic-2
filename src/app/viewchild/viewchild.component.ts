import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {

  viewchildmessage = 'message from viewchild to parent';
  constructor() { }

  ngOnInit() {
  }

}
