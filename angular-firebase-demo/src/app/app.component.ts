import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees: any[];
  constructor(db: AngularFireDatabase){
    db.list('/employees')
      .valueChanges().subscribe(employees => {
        this.employees = employees;
        console.log(this.employees);
      });

  }
}
