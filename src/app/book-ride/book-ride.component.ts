import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent implements OnInit {

  selectedNo: string;
  selectedType: string;
  pick: string;
  destination: string;
  empId: any;
  data: any;
  ridedatas = [];
  booked = false;
  isSelected = false;
  constructor(private appService: AppService, private router: Router) { }
  bikeDetails = [
    {
      id: '124',
      no: 'KA 1564',
      meetingtime:  new Date().toLocaleString(),
      pick: 'NSA tech park, Bangalore, KA',
      destination: 'Silkboard, Bangalore, KA',
      type: 'bike'
    },
    {
      id: '125',
      no: 'KA 1289',
      meetingtime:  new Date().toLocaleString(),
      pick: 'NSA tech park, Bangalore, KA',
      destination: 'KR puram, Bangalore, KA',
      type: 'bike'
    }
  ];
  carDetails = [
    {
      id: '123',
      no: 'KA 1256',
      meetingtime:  new Date().toLocaleString(),
      pick: 'NSA tech park, Bangalore, KA',
      destination: 'Marathahalli, Bangalore, KA',
      type: 'car'
    },
  ];

  ngOnInit() {
    this.data = [...this.carDetails, ...this.bikeDetails];
    const newRides = this.appService.getMyItems();
    if (newRides) {
      this.ridedatas = [...this.data, ...newRides];
    } else {
      this.ridedatas = this.data;
    }
  }
  onBack() {
    this.router.navigate(['']);
  }
  onFilter(type) {
      if (type === 'bike') {
        this.ridedatas = this.bikeDetails;
      } else if (type === 'car') {
        this.ridedatas = this.carDetails;
      } else {
        this.ridedatas = this.data;
      }
    }

    onBooked() {
      this.booked = true;
    }

    onSelected(no, type) {
      this.isSelected = true;
      this.selectedNo = no;
      this.selectedType = type;
    }
  }

