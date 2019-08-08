import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  todaydate;
  selectedDate;
  isavailable = true;
  days = ['mon','tue','wed','thu','fri','sat','sun'];
  constructor(private myservice:MyserviceService){}
  ngOnInit(){
    this.todaydate = this.myservice.showTodayDate();
  }
  clickMe(event){
    alert("hello mohini")
}
monthChange($event){
 
  alert(`month change`);
}
}
