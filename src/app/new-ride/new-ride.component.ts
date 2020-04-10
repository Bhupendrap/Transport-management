import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-ride',
  templateUrl: './new-ride.component.html',
  styleUrls: ['./new-ride.component.css']
})
export class NewRideComponent implements OnInit {

  itemList: any;
  newRides: any = [];
  isSubmited = false;
  seats = [{
    name: '1',
    value: '1'
  },
  {
    name: '2',
    value: '2'
  },
  {
    name: '3',
    value: '3'
  },
  ];
  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.itemList = [{
      name: 'Car',
      value: 'car'
  },
  {
      name: 'Bike',
      value: 'bike'
  }
];
  }
  onSubmit(f: NgForm) {
    this.isSubmited = true;
    this.newRides.push(f.value);
    this.appService.setitems(this.newRides);
    if (f.valid) {
      this.router.navigate(['book']);
    }
  }

}
