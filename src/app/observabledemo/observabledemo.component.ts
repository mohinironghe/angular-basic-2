import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber, of,interval,from} from 'rxjs';
import { map , filter,first} from 'rxjs/operators';
import { Source } from 'webpack-sources';
@Component({
  selector: 'app-observabledemo',
  templateUrl: './observabledemo.component.html',
  styleUrls: ['./observabledemo.component.css']
})
export class ObservabledemoComponent implements OnInit {

  constructor() { }
 obj;
  ngOnInit() {
    const foo = new Observable(Subscriber =>{
      console.log('hello');
      Subscriber.next(100);
      Subscriber.next(200);
      Subscriber.next(300);
    });

    console.log('before');
    console.log("data from observable");
    foo.subscribe(x => {
      console.log(x);
      this.obj = x;
    });
    console.log('after');

    //try and catch

    console.log(' code usign try catch');
    const observable = new Observable(function subscribe(Subscriber){
      try{
        Subscriber.next(1);
        Subscriber.next(2);
        Subscriber.next(3);
        Subscriber.complete();
      } catch (err){
        Subscriber.error(err);
      }
    });
    observable.subscribe(x => {
      console.log(x)
    });
    //subscription 
    const observable1 = interval(500);
    const subscription = observable1.subscribe(x => console.log('first'+ x));
    const observable2 = interval(400);
    const childSubscription = observable2.subscribe(x => console.log('second:' + x));
    // subscription.add(childSubscription);
    // subscription.add(subscription);
    setTimeout(() => {
      subscription.unsubscribe();
      childSubscription.unsubscribe();
    }, 1000);
  //filter map  operator
  const data = from([1,2,3,4,5]);
  const example = data.pipe(filter(num => num % 2 === 0));
  const subscribe = example.subscribe(val => console.log(`Even number: ${val}`));
  const example1 = data.pipe(map(num => num * num));
  const subscribe2 = example1.subscribe(val => console.log(`double operation ${val}`));
  


}

  

  
 

}
